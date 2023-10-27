# Publishing and installing a package with GitHub Actions

You can configure a workflow in GitHub Actions to automatically publish or install a package from GitHub Packages.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## About GitHub Packages with GitHub Actions

GitHub Actions help you automate your software development workflows in the same place you store code and collaborate on pull requests and issues. You can write individual tasks, called actions, and combine them to create a custom workflow. With GitHub Actions you can build end-to-end continuous integration (CI) and continuous deployment (CD) capabilities directly in your repository. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

You can extend the CI and CD capabilities of your repository by publishing or installing packages as part of your workflow.

To authenticate to package registries on GitHub, we recommend using the `GITHUB_TOKEN` that GitHub automatically creates for your repository when you enable GitHub Actions. You should set the permissions for this access token in the workflow file to grant read access for the `contents` scope and write access for the `packages` scope. For forks, the `GITHUB_TOKEN` is granted read access for the parent repository. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

You can reference the `GITHUB_TOKEN` in your workflow file using the `{{secrets.GITHUB_TOKEN}}` context. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

## About permissions and package access

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. The `GITHUB_TOKEN` secret is a GitHub App installation access token. You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)."

GitHub Packages allows you to push and pull packages through the `GITHUB_TOKEN` available to a GitHub Actions workflow.

## Publishing a package using an action

You can use GitHub Actions to automatically publish packages as part of your continuous integration (CI) flow. This approach to continuous deployment (CD) allows you to automate the creation of new package versions, if the code meets your quality standards. For example, you could create a workflow that runs CI tests every time a developer pushes code to a particular branch. If the tests pass, the workflow can publish a new package version to GitHub Packages.

Configuration steps vary by package client. For general information about configuring a workflow for GitHub Actions, see "[AUTOTITLE](/actions/using-workflows)."

The following example demonstrates how you can use GitHub Actions to build  your app, and then automatically create a Docker image and publish it to GitHub Packages. The relevant settings are explained in the code. For full details about each element in a workflow, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)."

Create a new workflow file in your repository (such as `.github/workflows/deploy-image.yml`), and add the following YAML.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:**

- This workflow uses actions that are not certified by GitHub. They are provided by a third-party and are governed by separate terms of service, privacy policy, and support documentation.
- GitHub recommends pinning actions to a commit SHA. To get a newer version, you will need to update the SHA. You can also reference a tag or branch, but the action may change without warning.

</div>

```yaml annotate copy
#
name: Create and publish a Docker image

# Configures this workflow to run every time a change is pushed to the branch called `release`.
on:
  push:
    branches: ['release']

# Defines two custom environment variables for the workflow. These are used for the Container registry domain, and a name for the Docker image that this workflow builds.
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

# There is a single job in this workflow. It's configured to run on the latest available version of Ubuntu.
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
    # Sets the permissions granted to the `GITHUB_TOKEN` for the actions in this job.
    permissions:
      contents: read
      packages: write
      # 
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      # Uses the `docker/login-action` action to log in to the Container registry registry using the account and password that will publish the packages. Once published, the packages are scoped to the account defined here.
      - name: Log in to the Container registry
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      # This step uses [docker/metadata-action](https://github.com/docker/metadata-action#about) to extract tags and labels that will be applied to the specified image. The `id` "meta" allows the output of this step to be referenced in a subsequent step. The `images` value provides the base name for the tags and labels.
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
      # This step uses the `docker/build-push-action` action to build the image, based on your repository's `Dockerfile`. If the build succeeds, it pushes the image to GitHub Packages.
      # It uses the `context` parameter to define the build's context as the set of files located in the specified path. For more information, see "[Usage](https://github.com/docker/build-push-action#usage)" in the README of the `docker/build-push-action` repository.
      # It uses the `tags` and `labels` parameters to tag and label the image with the output from the "meta" step.
      - name: Build and push Docker image
        uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```

This new workflow will run automatically every time you push a change to a branch named `release` in the repository. You can view the progress in the **Actions** tab.

A few minutes after the workflow has completed, the new package will visible in your repository. To find your available packages, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages#viewing-a-repositorys-packages)."

## Installing a package using an action

You can install packages as part of your CI flow using GitHub Actions. For example, you could configure a workflow so that anytime a developer pushes code to a pull request, the workflow resolves dependencies by downloading and installing packages hosted by GitHub Packages. Then, the workflow can run CI tests that require the dependencies.

Installing packages hosted by GitHub Packages through GitHub Actions requires minimal configuration or additional authentication when you use the `GITHUB_TOKEN`. Data transfer is also free when an action installs a package. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

Configuration steps vary by package client. For general information about configuring a workflow for GitHub Actions, see "[AUTOTITLE](/actions/using-workflows)."
