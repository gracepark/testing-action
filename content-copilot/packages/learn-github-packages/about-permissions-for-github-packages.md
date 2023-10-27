# About permissions for GitHub Packages

Learn about how to manage permissions for your packages.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Permissions for packages

A package inherits the permissions and visibility of the repository in which the package is published. You can find a package scoped to a repository by going to the main page of the repository and clicking the **Packages** link to the right of the page. For more information, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

## About scopes and permissions for package registries

To use or manage a package hosted by a package registry, you must use a personal access token with the appropriate scope, and your personal account must have appropriate permissions.

For example:
- To download and install packages from a repository, your personal access token must have the `read:packages` scope, and your user account must have read permission.
- To delete a package on GitHub, your personal access token must at least have the `delete:packages` and `read:packages` scope. The `repo` scope is also required for repo-scoped packages. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)."

| Scope | Description | Required permission |
| --- | --- | --- |
|`read:packages`| Download and install packages from GitHub Packages | read |
|`write:packages`| Upload and publish packages to GitHub Packages | write |
| `delete:packages` |  Delete packages from GitHub Packages  | admin |
| `repo` | Upload and delete packages (along with `write:packages`, or `delete:packages`) | write or admin |

When you create a GitHub Actions workflow, you can use the `GITHUB_TOKEN` to publish and install packages in GitHub Packages without needing to store and manage a personal access token.

For more information, see:
- "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"
- "[AUTOTITLE](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"
- "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)"

## About repository transfers

You can transfer a repository to another personal account or organization. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository)."

When you transfer a repository, GitHub transfers the packages associated with a repository as part of the repository transfer. All billable usage associated with the packages will subsequently be billed to the new owner of the repository. If the previous repository owner is removed as a collaborator on the repository, they may no longer be able to access the packages associated with the repository.

## Maintaining access to packages in GitHub Actions workflows

To ensure your workflows will maintain access to your packages, ensure that you're using the right access token in your workflow and that you've enabled GitHub Actions access to your package.

For more conceptual background on GitHub Actions or examples of using packages in workflows, see "[AUTOTITLE](/packages/managing-github-packages-using-github-actions-workflows)."

### Access tokens

- To publish and install packages associated with the workflow repository, use `GITHUB_TOKEN`.
- To install packages associated with other private repositories that `GITHUB_TOKEN` can't access, use a personal access token

For more information about `GITHUB_TOKEN` used in GitHub Actions workflows, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)."

### GitHub Actions access for packages with granular permissions

To ensure your workflows have access to packages stored in registries that support granular permissions, you must give GitHub Actions access to the repositories where your workflow is run. You can find this setting on your package's settings page. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."
