# Deploying to Google Kubernetes Engine

You can deploy to Google Kubernetes Engine as part of your continuous deployment (CD) workflows.

## Introduction

This guide explains how to use GitHub Actions to build a containerized application, push it to Google Container Registry (GCR), and deploy it to Google Kubernetes Engine (GKE) when there is a push to the `main` branch.

GKE is a managed Kubernetes cluster service from Google Cloud that can host your containerized workloads in the cloud or in your own datacenter. For more information, see [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: 
If your GitHub Actions workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. This will let you stop storing these credentials as long-lived secrets and provide other security benefits. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)"

</div>

## Prerequisites

Before you proceed with creating the workflow, you will need to complete the following steps for your Kubernetes project. This guide assumes the root of your project already has a `Dockerfile` and a Kubernetes Deployment configuration file.

### Creating a GKE cluster

To create the GKE cluster, you will first need to authenticate using the `gcloud` CLI. For more information on this step, see the following articles:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI and Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

For example:

```shell copy
$ gcloud container clusters create $GKE_CLUSTER \
	--project=$GKE_PROJECT \
	--zone=$GKE_ZONE
```

### Enabling the APIs

Enable the Kubernetes Engine and Container Registry APIs. For example:

```shell copy
$ gcloud services enable \
	containerregistry.googleapis.com \
	container.googleapis.com
```

### Configuring a service account and storing its credentials

This procedure demonstrates how to create the service account for your GKE integration. It explains how to create the account, add roles to it, retrieve its keys, and store them as a base64-encoded encrypted repository secret named `GKE_SA_KEY`.

1. Create a new service account:

   ```shell copy
   gcloud iam service-accounts create $SA_NAME
   ```

1. Retrieve the email address of the service account you just created:

   ```shell copy
   gcloud iam service-accounts list
   ```

1. Add roles to the service account.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: Apply more restrictive roles to suit your requirements.

   </div>

   ```shell copy
   gcloud projects add-iam-policy-binding $GKE_PROJECT \
  	 --member=serviceAccount:$SA_EMAIL \
  	 --role=roles/container.admin
   gcloud projects add-iam-policy-binding $GKE_PROJECT \
  	 --member=serviceAccount:$SA_EMAIL \
  	 --role=roles/storage.admin
   gcloud projects add-iam-policy-binding $GKE_PROJECT \
  	 --member=serviceAccount:$SA_EMAIL \
  	 --role=roles/container.clusterViewer
   ```

1. Download the JSON keyfile for the service account:

   ```shell copy
   gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
   ```

1. Store the service account key as a secret named `GKE_SA_KEY`:

   ```shell copy
   export GKE_SA_KEY=$(cat key.json | base64)
   ```

   For more information about how to store a secret, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

### Storing your project name

Store the name of your project as a secret named `GKE_PROJECT`. For more information about how to store a secret, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

### (Optional) Configuring kustomize

Kustomize is an optional tool used for managing YAML specs. After creating a `kustomization` file, the workflow below can be used to dynamically set fields of the image and pipe in the result to `kubectl`. For more information, see [kustomize usage](https://github.com/kubernetes-sigs/kustomize#usage).

### (Optional) Configure a deployment environment

Environments are used to describe a general deployment target like `production`, `staging`, or `development`. When a GitHub Actions workflow deploys to an environment, the environment is displayed on the main page of the repository. You can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, or limit access to secrets. For more information about creating environments, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build a container image and push it to GCR. It then uses the Kubernetes tools (such as `kubectl` and `kustomize`) to pull the image into the cluster deployment.

Under the `env` key, change the value of `GKE_CLUSTER` to the name of your cluster, `GKE_ZONE` to your cluster zone, `DEPLOYMENT_NAME` to the name of your deployment, and `IMAGE` to the name of your image.

If you configured a deployment environment, change the value of `environment` to be the name of your environment. If you did not configure an environment or if your workflow is in a private repository and you do not use GitHub Enterprise Cloud, delete the `environment` key.

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# GitHub recommends pinning actions to a commit SHA.
# To get a newer version, you will need to update the SHA.
# You can also reference a tag or branch, but the action may change without warning.

name: Build and Deploy to GKE

on:
  push:
    branches:
      - main

env:
  PROJECT_ID: ${{ secrets.GKE_PROJECT }}
  GKE_CLUSTER: cluster-1    # Add your cluster name here.
  GKE_ZONE: us-central1-c   # Add your cluster zone here.
  DEPLOYMENT_NAME: gke-test # Add your deployment name here.
  IMAGE: static-site

jobs:
  setup-build-publish-deploy:
    name: Setup, Build, Publish, and Deploy
    runs-on: ubuntu-latest
    environment: production

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    # Setup gcloud CLI
    - uses: google-github-actions/setup-gcloud@1bee7de035d65ec5da40a31f8589e240eba8fde5
      with:
        service_account_key: ${{ secrets.GKE_SA_KEY }}
        project_id: ${{ secrets.GKE_PROJECT }}

    # Configure Docker to use the gcloud command-line tool as a credential
    # helper for authentication
    - run: |-
        gcloud --quiet auth configure-docker

    # Get the GKE credentials so we can deploy to the cluster
    - uses: google-github-actions/get-gke-credentials@db150f2cc60d1716e61922b832eae71d2a45938f
      with:
        cluster_name: ${{ env.GKE_CLUSTER }}
        location: ${{ env.GKE_ZONE }}
        credentials: ${{ secrets.GKE_SA_KEY }}

    # Build the Docker image
    - name: Build
      run: |-
        docker build \
          --tag "gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA" \
          --build-arg GITHUB_SHA="$GITHUB_SHA" \
          --build-arg GITHUB_REF="$GITHUB_REF" \
          .

    # Push the Docker image to Google Container Registry
    - name: Publish
      run: |-
        docker push "gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA"

    # Set up kustomize
    - name: Set up Kustomize
      run: |-
        curl -sfLo kustomize https://github.com/kubernetes-sigs/kustomize/releases/download/v3.1.0/kustomize_3.1.0_linux_amd64
        chmod u+x ./kustomize

    # Deploy the Docker image to the GKE cluster
    - name: Deploy
      run: |-
        ./kustomize edit set image gcr.io/PROJECT_ID/IMAGE:TAG=gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA
        ./kustomize build . | kubectl apply -f -
        kubectl rollout status deployment/$DEPLOYMENT_NAME
        kubectl get services -o wide
```

## Additional resources

For more information on the tools used in these examples, see the following documentation:

- For the full starter workflow, see the ["Build and Deploy to GKE" workflow](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml).
- The Kubernetes YAML customization engine: [Kustomize](https://kustomize.io/).
- "[Deploying a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)" in the Google Kubernetes Engine documentation.
