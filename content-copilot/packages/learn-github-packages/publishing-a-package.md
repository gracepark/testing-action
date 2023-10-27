# Publishing a package

You can publish a package to GitHub Packages to make the package available for others to download and re-use.

**Who can use this feature**: Anyone with write permissions for a repository can publish a package to that repository.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## About published packages

You can help people understand and use your package by providing a description and other details like installation and usage instructions on the package page. GitHub provides metadata for each version, such as the publication date, download activity, and recent versions. For an example package page, see [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

You can publish packages in a public repository (public packages) to share with all of GitHub, or in a private repository (private packages) to share with collaborators or an organization. A repository can be connected to more than one package. To prevent confusion, make sure the README and description clearly provide information about each package.

If a new version of a package fixes a security vulnerability, you should publish a security advisory in your repository. GitHub reviews each published security advisory and may use it to send Dependabot alerts to affected repositories. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."

## Publishing a package

You can publish a package to GitHub Packages using any supported package client by following the same general guidelines.

1. Create or use an existing personal access token with the appropriate scopes for the task you want to accomplish. For more information, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages)."
1. Authenticate to GitHub Packages using your personal access token and the instructions for your package client.
1. Publish the package using the instructions for your package client.

For instructions specific to your package client, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry)."

After you publish a package, you can view the package on GitHub. For more information, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages)."
