# Introduction to GitHub Packages

GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## About GitHub Packages

GitHub Packages is a platform for hosting and managing packages, including containers and other dependencies. GitHub Packages combines your source code and packages in one place to provide integrated permissions management and billing, so you can centralize your software development on GitHub.

You can integrate GitHub Packages with GitHub APIs, GitHub Actions, and webhooks to create an end-to-end DevOps workflow that includes your code, CI, and deployment solutions.

GitHub Packages offers different package registries for commonly used package managers, such as npm, RubyGems, Apache Maven, Gradle, Docker, and NuGet. GitHub's Container registry is optimized for containers and supports Docker and OCI images. For more information on the different package registries that GitHub Packages supports, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry)."

You can view a package's README, as well as metadata such as licensing, download statistics, version history, and more on GitHub. For more information, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages)."

### Overview of package permissions

Each package inherits the permissions of the repository where the package is hosted.

For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version.

### Overview of package visibility

You can publish packages in a public repository (public packages) to share with all of GitHub, or in a private repository (private packages) to share with collaborators or an organization.

## About billing for GitHub Packages

GitHub Packages usage is free for public packages. For private packages, each account on GitHub.com receives a certain amount of free storage and data transfer, depending on the account's plan. Any usage beyond the included amounts is controlled by spending limits. If you are a monthly-billed customer, your account will have a default spending limit of 0 US dollars (USD), which prevents additional usage of storage or data transfer after you reach the included amounts. If you pay your account by invoice, your account will have an unlimited default spending limit. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

## Supported clients and formats

GitHub Packages uses the native package tooling commands you're already familiar with to publish and install package versions.

### Support for package registries

| Language | Description | Package format | Package client |
| --- | --- | --- | --- |
| JavaScript | Node package manager | `package.json`  | `npm` |
| Ruby |  RubyGems package manager | `Gemfile` |  `gem` |
| Java | Apache Maven project management and comprehension tool | `pom.xml` |  `mvn` |
| Java | Gradle build automation tool for Java | `build.gradle` or `build.gradle.kts`  | `gradle`  |
| .NET | NuGet package management for .NET | `nupkg`  |  `dotnet` CLI |
| N/A | Docker container management | `Dockerfile` | `Docker` |

For more information about configuring your package client for use with GitHub Packages, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry)."

For more information about Docker and the Container registry, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

## Authenticating to GitHub Packages

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token to authenticate to GitHub Packages or the GitHub API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:
- `GITHUB_TOKEN` to publish packages associated with the workflow repository.
- a personal access token with at least `read:packages` scope to install packages associated with other private repositories (which `GITHUB_TOKEN` can't access).

For more information about `GITHUB_TOKEN` used in GitHub Actions workflows, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)."

## Managing packages

You can delete a package in the GitHub user interface. You can use GraphQL to delete a version of a private package.

When you use the GraphQL API to query and delete private packages, you must use the same personal access token you use to authenticate to GitHub Packages.

For more information, see "[AUTOTITLE](/graphql/guides/forming-calls-with-graphql)."

You can configure webhooks to subscribe to package-related events, such as when a package is published or updated. For more information, see the "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#package)."

## Contacting support

If you have feedback or feature requests for GitHub Packages, use a [GitHub Community discussion](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Contact us through the [GitHub Support portal](https://support.github.com/) about GitHub Packages if:

- You experience anything that contradicts the documentation
- You encounter vague or unclear errors
- Your published package contains sensitive data, such as GDPR violations, API Keys, or personally identifying information
