# Configuring OpenID Connect in Google Cloud Platform

Use OpenID Connect within your workflows to authenticate with Google Cloud Platform.

## Overview

OpenID Connect (OIDC) allows your GitHub Actions workflows to access resources in Google Cloud Platform (GCP), without needing to store the GCP credentials as long-lived GitHub secrets.

This guide gives an overview of how to configure GCP to trust GitHub's OIDC as a federated identity, and includes a workflow example for the [`google-github-actions/auth`](https://github.com/google-github-actions/auth) action that uses tokens to authenticate to GCP and access resources.

## Prerequisites

- To learn the basic concepts of how GitHub uses OpenID Connect (OIDC), and its architecture and benefits, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."

- Before proceeding, you must plan your security strategy to ensure that access tokens are only allocated in a predictable way. To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)."

## Adding a Google Cloud Workload Identity Provider

To configure the OIDC identity provider in GCP, you will need to perform the following configuration. For instructions on making these changes, refer to [the GCP documentation](https://github.com/google-github-actions/auth).

1. Create a new identity pool.
1. Configure the mapping and add conditions.
1. Connect the new pool to a service account.

Additional guidance for configuring the identity provider:

- For security hardening, make sure you've reviewed "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)." For an example, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)."
- For the service account to be available for configuration, it needs to be assigned to the `roles/iam.workloadIdentityUser` role. For more information, see [the GCP documentation](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- The Issuer URL to use: `https://token.actions.githubusercontent.com`

## Updating your GitHub Actions workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`google-github-actions/auth`](https://github.com/google-github-actions/auth) action to exchange the OIDC token (JWT) for a cloud access token.

### Adding permissions settings

 The job or workflow run requires a `permissions` setting with [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). You won't be able to request the OIDC JWT ID token if the `permissions` setting for `id-token` is set to `read` or `none`.

The `id-token: write` setting allows the JWT to be requested from GitHub's OIDC provider using one of these approaches:

- Using environment variables on the runner (`ACTIONS_ID_TOKEN_REQUEST_URL` and `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Using `getIDToken()` from the Actions toolkit.

If you need to fetch an OIDC token for a workflow, then the permission can be set at the workflow level. For example:

```yaml copy
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

If you only need to fetch an OIDC token for a single job, then this permission can be set within that job. For example:

```yaml copy
permissions:
  id-token: write # This is required for requesting the JWT
```

### Requesting the access token

The `google-github-actions/auth` action receives a JWT from the GitHub OIDC provider, and then requests an access token from GCP. For more information, see the GCP [documentation](https://github.com/google-github-actions/auth).

This example has a job called `Get_OIDC_ID_token` that uses actions to request a list of services from GCP.

- `<example-workload-identity-provider>`: Replace this with the path to your identity provider in GCP. For example, `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: Replace this with the name of your service account in GCP.
- `<project-id>`: Replace this with the ID of your GCP project.

This action exchanges a GitHub OIDC token for a Google Cloud access token, using [Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation).

```yaml copy
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```

## Further reading

- [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)
- [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github)
