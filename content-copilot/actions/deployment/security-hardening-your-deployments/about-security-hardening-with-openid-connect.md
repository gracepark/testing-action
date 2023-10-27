# About security hardening with OpenID Connect

OpenID Connect allows your workflows to exchange short-lived tokens directly from your cloud provider.

## Overview of OpenID Connect

GitHub Actions workflows are often designed to access a cloud provider (such as AWS, Azure, GCP, or HashiCorp Vault) in order to deploy software or use the cloud's services. Before the workflow can access these resources, it will supply credentials, such as a password or token, to the cloud provider. These credentials are usually stored as a secret in GitHub, and the workflow presents this secret to the cloud provider every time it runs.

However, using hardcoded secrets requires you to create credentials in the cloud provider and then duplicate them in GitHub as a secret.

With OpenID Connect (OIDC), you can take a different approach by configuring your workflow to request a short-lived access token directly from the cloud provider. Your cloud provider also needs to support OIDC on their end, and you must configure a trust relationship that controls which workflows are able to request the access tokens. Providers that currently support OIDC include Amazon Web Services, Azure, Google Cloud Platform, and HashiCorp Vault, among others.

### Benefits of using OIDC

By updating your workflows to use OIDC tokens, you can adopt the following good security practices:

- **No cloud secrets**: You won't need to duplicate your cloud credentials as long-lived GitHub secrets. Instead, you can configure the OIDC trust on your cloud provider, and then update your workflows to request a short-lived access token from the cloud provider through OIDC.
- **Authentication and authorization management**: You have more granular control over how workflows can use credentials, using your cloud provider's authentication (authN) and authorization (authZ) tools to control access to cloud resources.
- **Rotating credentials**: With OIDC, your cloud provider issues a short-lived access token that is only valid for a single job, and then automatically expires.

### Getting started with OIDC

The following diagram gives an overview of how GitHub's OIDC provider integrates with your workflows and cloud provider:

![Diagram of how a cloud provider integrates with GitHub Actions through access tokens and JSON web token cloud role IDs.](/assets/images/help/actions/oidc-architecture.png)

1. In your cloud provider, create an OIDC trust between your cloud role and your GitHub workflow(s) that need access to the cloud.
1. Every time your job runs, GitHub's OIDC Provider auto-generates an OIDC token. This token contains multiple claims to establish a security-hardened and verifiable identity about the specific workflow that is trying to authenticate.
1. You could include a step or action in your job to request this token from GitHub's OIDC provider, and present it to the cloud provider.
1. Once the cloud provider successfully validates the claims presented in the token, it then provides a short-lived cloud access token that is available only for the duration of the job.

## Configuring the OIDC trust with the cloud

When you configure your cloud to trust GitHub's OIDC provider, you **must** add conditions that filter incoming requests, so that untrusted repositories or workflows can’t request access tokens for your cloud resources:

- Before granting an access token, your cloud provider checks that the [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) and other claims used to set conditions in its trust settings match those in the request's JSON Web Token (JWT). As a result, you must take care to correctly define the _subject_ and other conditions in your cloud provider.
- The OIDC trust configuration steps and the syntax to set conditions for cloud roles (using _Subject_ and other claims) will vary depending on which cloud provider you're using. For some examples, see "[Example subject claims](#example-subject-claims)."

### Understanding the OIDC token

Each job requests an OIDC token from GitHub's OIDC provider, which responds with an automatically generated JSON web token (JWT) that is unique for each workflow job where it is generated. When the job runs, the OIDC token is presented to the cloud provider. To validate the token, the cloud provider checks if the OIDC token's subject and other claims are a match for the conditions that were preconfigured on the cloud role's OIDC trust definition.

The following example OIDC token uses a subject (`sub`) that references a job environment named `prod` in the `octo-org/octo-repo` repository.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "https://github.com/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": "private",
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "https://token.actions.githubusercontent.com",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

To see all the claims supported by GitHub's OIDC provider, review the `claims_supported` entries at
https://token.actions.githubusercontent.com/.well-known/openid-configuration.

The token includes the standard audience, issuer, and subject claims.

|    Claim    | Claim type | Description            |
| ----------- | -----| ---------------------- |
| `aud`| Audience | By default, this is the URL of the repository owner, such as the organization that owns the repository. You can set a custom audience with a toolkit command: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0) |
| `iss`| Issuer | The issuer of the OIDC token: `https://token.actions.githubusercontent.com` |
| `sub`| Subject | Defines the subject claim that is to be validated by the cloud provider. This setting is essential for making sure that access tokens are only allocated in a predictable way. |

The OIDC token also includes additional standard JOSE header parameters and claims.

|    Header Parameter    | Parameter type | Description            |
| ----------- | -----| ---------------------- |
| `alg`| Algorithm | The algorithm used by the OIDC provider. |
| `kid`| Key identifier | Unique key for the OIDC token. |
| `typ`| Type | Describes the type of token. This is a JSON Web Token (JWT). |

|    Claim    | Claim type | Description            |
| ----------- | -----| ---------------------- |
| `exp`| Expires at | Identifies the expiry time of the JWT. |
| `iat`| Issued at | The time when the JWT was issued. |
| `jti`| JWT token identifier | Unique identifier for the OIDC token. |
| `nbf`| Not before | JWT is not valid for use before this time. |

The token also includes custom claims provided by GitHub.

|    Claim    | Description            |
| ----------- | ---------------------- |
| `actor`| The personal account that initiated the workflow run.                   |
| `actor_id`| The ID of personal account that initiated the workflow run.             |
| `base_ref`| The target branch of the pull request in a workflow run.                   |
| `environment`| The name of the environment used by the job. To include the `environment` claim you must reference an environment.                   |
| `event_name`| The name of the event that triggered the workflow run.                    |
| `head_ref`| The source branch of the pull request in a workflow run.                   |
| `job_workflow_ref`| For jobs using a reusable workflow, the ref path to the reusable workflow. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)."                  |
| `ref`| _(Reference)_ The git ref that triggered the workflow run.                   |
| `ref_type`| The type of `ref`, for example: "branch".                  |
| `repository_visibility` | The visibility of the repository where the workflow is running. Accepts the following values: `internal`, `private`, or `public`.                   |
| `repository`| The repository from where the workflow is running.                   |
| `repository_id`| The ID of the repository from where the workflow is running.  |
| `repository_owner`| The name of the organization in which the `repository` is stored.                   |
| `repository_owner_id`| The ID of the organization in which the `repository` is stored.            |
| `run_id`| The ID of the workflow run that triggered the workflow.                   |
| `run_number`| The number of times this workflow has been run.                   |
| `run_attempt`| The number of times this workflow run has been retried.                    |
| `workflow`| The name of the workflow.                   |

### Defining trust conditions on cloud roles using OIDC claims

With OIDC, a GitHub Actions workflow requires a token in order to access resources in your cloud provider. The workflow requests an access token from your cloud provider, which checks the details presented by the JWT. If the trust configuration in the JWT is a match, your cloud provider responds by issuing a temporary token to the workflow, which can then be used to access resources in your cloud provider. You can configure your cloud provider to only respond to requests that originate from a specific organization's repository. You can also specify additional conditions, described below.

Audience and Subject claims are typically used in combination while setting conditions on the cloud role/resources to scope its access to the GitHub workflows.
- **Audience**: By default, this value uses the URL of the organization or repository owner. This can be used to set a condition that only the workflows in the specific organization can access the cloud role.
- **Subject**: By default, has a predefined format and is a concatenation of some of the key metadata about the workflow, such as the GitHub organization, repository, branch, or associated [`job`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment) environment. See "[Example subject claims](#example-subject-claims)" to see how the subject claim is assembled from concatenated metadata.

If you need more granular trust conditions, you can customize the subject (`sub`) claim that's included with the JWT. For more information, see "[Customizing the token claims](#customizing-the-token-claims)".

There are also many additional claims supported in the OIDC token that can be used for setting these conditions. In addition, your cloud provider could allow you to assign a role to the access tokens, letting you specify even more granular permissions.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources.

</div>

### Example subject claims

The following examples demonstrate how to use "Subject" as a condition, and explain how the "Subject" is assembled from concatenated metadata. The [subject](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) uses information from the [`job` context](/actions/learn-github-actions/contexts#job-context), and instructs your cloud provider that access token requests may only be granted for requests from workflows running in specific branches, environments. The following sections describe some common subjects you can use.

#### Filtering for a specific environment

The subject claim includes the environment name when the job references an environment.

You can configure a subject that filters for a specific [environment](/actions/deployment/targeting-different-environments/using-environments-for-deployment) name. In this example, the workflow run must have originated from a job that has an environment named `Production`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

- Syntax: `repo:<orgName/repoName>:environment:<environmentName>`
- Example: `repo:octo-org/octo-repo:environment:Production`

#### Filtering for `pull_request` events

The subject claim includes the `pull_request` string when the workflow is triggered by a pull request event, but only if the job doesn't reference an environment.

You can configure a subject that filters for the [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request) event. In this example, the workflow run must have been triggered by a `pull_request` event in a repository named `octo-repo` that is owned by the `octo-org` organization:

- Syntax: `repo:<orgName/repoName>:pull_request`
- Example: `repo:octo-org/octo-repo:pull_request`

#### Filtering for a specific branch

The subject claim includes the branch name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can configure a subject that filters for a specific branch name. In this example, the workflow run must have originated from a branch named `demo-branch`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

- Syntax:  `repo:<orgName/repoName>:ref:refs/heads/branchName`
- Example: `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`

#### Filtering for a specific tag

The subject claim includes the tag name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can create a subject that filters for specific tag. In this example, the workflow run must have originated with a tag named `demo-tag`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

- Syntax: `repo:<orgName/repoName>:ref:refs/tags/<tagName>`
- Example: `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`

### Configuring the subject in your cloud provider

To configure the subject in your cloud provider's trust relationship, you must add the subject string to its trust configuration. The following examples demonstrate how various cloud providers can accept the same `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` subject in different ways:

| Cloud provider | Example |
| ------ | ----------- |
| Amazon Web Services | `"token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')` |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |

For more information, see the guides listed in "[Enabling OpenID Connect for your cloud provider](#enabling-openid-connect-for-your-cloud-provider)."

## Updating your actions for OIDC

To update your custom actions to authenticate using OIDC, you can use `getIDToken()` from the Actions toolkit to request a JWT from GitHub's OIDC provider. For more information, see "OIDC Token" in the [npm package documentation](https://www.npmjs.com/package/@actions/core/v/1.6.0).

You could also use a `curl` command to request the JWT, using the following environment variables.

| Variable | Description |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | The URL for GitHub's OIDC provider. |
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Bearer token for the request to the OIDC provider. |

For example:

```shell copy
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

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

## Updating your workflows for OIDC

You can now update your YAML workflows to use OIDC access tokens instead of secrets. Popular cloud providers have published their official login actions that make it easy for you to get started with OIDC. For more information about updating your workflows, see the cloud-specific guides listed below in "[Enabling OpenID Connect for your cloud provider](#enabling-openid-connect-for-your-cloud-provider)."

## Enabling OpenID Connect for Python package publishing

You can use a GitHub Actions workflow in a repository as a trusted publisher for a PyPI project. Using a workflow as a trusted publisher allows OIDC access tokens to be exchanged for temporary PyPI API tokens. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-pypi)" and "[Publishing to PyPI with a Trusted Publisher](https://docs.pypi.org/trusted-publishers/)" in the PyPI documentation.

## Enabling OpenID Connect for your cloud provider

To enable and configure OIDC for your specific cloud provider, see the following guides:

- "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)"
- "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)"
- "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)"
- "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)"

To enable and configure OIDC for another cloud provider, see the following guide:

- "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)"
