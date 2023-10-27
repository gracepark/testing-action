# Deploying to Azure Static Web App

You can deploy your web app to Azure Static Web App as part of your continuous deployment (CD) workflows.

## Introduction

This guide explains how to use GitHub Actions to build and deploy a web app to [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/).

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: 
If your GitHub Actions workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. This will let you stop storing these credentials as long-lived secrets and provide other security benefits. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)" and "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

</div>

## Prerequisites

Before creating your GitHub Actions workflow, you will first need to complete the following setup steps:

1. Create an Azure Static Web App using the 'Other' option for deployment source. For more information, see "[Quickstart: Building your first static site in the Azure portal](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)" in the Azure documentation.

1. Create a secret called `AZURE_STATIC_WEB_APPS_API_TOKEN` with the value of your static web app deployment token. For more information about how to find your deployment token, see "[Reset deployment tokens in Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)" in the Azure documentation.

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build and deploy an Azure static web app when there is a push to the `main` branch or when a pull request targeting `main` is opened, synchronized, or reopened. The workflow also tears down the corresponding pre-production deployment when a pull request targeting `main` is closed.

Under the workflow `env` key, change the following values:
- `APP_LOCATION` to the location of your client code
- `API_LOCATION` to the location of your API source code. If `API_LOCATION` is not relevant, you can delete the variable and the lines where it is used.
- `OUTPUT_LOCATION` to the location of your client code build output

For more information about these values, see "[Build configuration for Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)" in the Azure documentation.

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# GitHub recommends pinning actions to a commit SHA.
# To get a newer version, you will need to update the SHA.
# You can also reference a tag or branch, but the action may change without warning.

name: Deploy web app to Azure Static Web Apps

env:
  APP_LOCATION: "/" # location of your client code
  API_LOCATION: "api" # location of your api source code - optional
  OUTPUT_LOCATION: "build" # location of client code build output

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

permissions:
  issues: write
  contents: read
  pull-requests: write

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: ${{ env.APP_LOCATION }}
          api_location: ${{ env.API_LOCATION }}
          output_location: ${{ env.OUTPUT_LOCATION }}

  close_pull_request:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request
    steps:
      - name: Close Pull Request
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: "close"
```

## Additional resources

The following resources may also be useful:

- For the original starter workflow, see [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) in the GitHub Actions `starter-workflows` repository.
- The action used to deploy the web app is the official Azure [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) action.
- For more examples of GitHub Action workflows that deploy to Azure, see the [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) repository.
