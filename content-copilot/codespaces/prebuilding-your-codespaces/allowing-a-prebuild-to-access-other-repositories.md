# Allowing a prebuild to access other repositories

You can permit your prebuild to access other GitHub repositories so that it can be built successfully.

**Who can use this feature**: People with admin access to a repository can configure prebuilds for the repository.
Repository-level settings for GitHub Codespaces are available for all repositories owned by personal accounts. <br><br>

For repositories owned by organizations, repository-level settings for GitHub Codespaces are available for organizations on GitHub Team and GitHub Enterprise plans. To access the settings, the organization or its parent enterprise must have added a payment method and set a spending limit for GitHub Codespaces. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

By default, the GitHub Actions workflow for a prebuild configuration can only access its own repository contents. Your project may use additional resources, located elsewhere, to build the development environment.

## Allowing a prebuild read access to external resources

You can configure read access to other GitHub repositories, with the same repository owner, by specifying permissions in the `devcontainer.json` file used by your prebuild configuration. For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can only authorize read permissions in this way, and the owner of the target repository must be the same as the owner of the repository for which you're creating a prebuild. For example, if you're creating a prebuild configuration for the `octo-org/octocat` repository, then you'll be able to grant read permissions for other repositories, such as `octo-org/octodemo`, if this is specified in the `devcontainer.json` file, and provided you have the permissions yourself.

</div>

When you create or edit a prebuild configuration for a `devcontainer.json` file that sets up read access to other repositories with the same repository owner, you'll be prompted to grant these permissions when you click **Create** or **Update**. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

## Allowing a prebuild write access to external resources

If your project requires write access to resources, or if the external resources reside in a repository with a different owner than the repository for which you are creating a prebuild configuration, you can use a personal access token to grant this access.

You will need to create a new personal account and then use this account to create a personal access token with the appropriate scopes.

1. Create a new personal account on GitHub.

   <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

   **Warning**: Although you can generate the personal access token using your existing personal account, we strongly recommend creating a new account with access only to the target repositories required for your scenario. This is because the access token's `repository` permission grants access to all of the repositories that the account has access to. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" and "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)."

   </div>
1. Give the new account read access to the required repositories. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)."
1. While signed into the new account, create a personal access token with the `repo` scope. Optionally, if the prebuild will need to download packages from the GitHub Container registry, also select the `read:packages` scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."

   ![Screenshot of the "Select scopes" configuration options for a personal access token, with the "repo" and "read:packages" scopes selected.](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   If the prebuild will use a package from the GitHub Container registry, you will need to either grant the new account access to the package or configure the package to inherit the access permissions of the repository you are prebuilding. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

1. Copy the token string. You will assign this to a Codespaces repository secret.
1. Sign back into the account that has admin access to the repository.
1. In the repository for which you want to create GitHub Codespaces prebuilds, create a new Codespaces repository secret called `CODESPACES_PREBUILD_TOKEN`, giving it the value of the token you created and copied. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)."

The personal access token will be used for all subsequent prebuilds created for your repository. Unlike other Codespaces repository secrets, the `CODESPACES_PREBUILD_TOKEN` secret is only used for prebuilding and will not be available for use in codespaces created from your repository.

## Further reading

- "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-prebuilds)"
