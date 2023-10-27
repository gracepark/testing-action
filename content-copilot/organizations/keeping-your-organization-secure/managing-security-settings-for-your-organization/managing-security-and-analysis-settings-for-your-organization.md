# Managing security and analysis settings for your organization

You can control features that secure and analyze the code in your organization's projects on GitHub.

**Who can use this feature**: Organization owners can manage security and analysis settings for repositories in the organization.

## About management of security and analysis settings

GitHub can help you to secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization. Organizations that use GitHub Enterprise Cloud with a license for GitHub Advanced Security can also manage access to these features. For more information, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can't disable some security and analysis features that are enabled by default for public repositories.

</div>

If you enable security and analysis features, GitHub performs read-only analysis on your repository.

## Displaying the security and analysis settings

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codescan" aria-hidden="true"><path d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z"></path><path d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z"></path></svg> Code security and analysis**.

The page that's displayed allows you to enable or disable all security and analysis features for the repositories in your organization.

## Enabling or disabling a feature for all existing repositories

You can enable or disable features for all repositories.
The impact of your changes on repositories in your organization is determined by their visibility:

- **Private vulnerability reporting** - Your changes affect public repositories only.
- **Dependency graph** - Your changes affect only private repositories because the feature is always enabled for public repositories.
- **Dependabot alerts** - Your changes affect all repositories.
- **Dependabot security updates** - Your changes affect all repositories.
- **Secret scanning** - Your changes affect public repositories and public npm packages these repositories may depend on. This option controls whether or not secret scanning alerts for users are enabled. Secret scanning alerts for partners always runs on all public repositories.

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all** to display a confirmation dialog box. 
1. Review the information in the dialog box.
1. Optionally, if you are enabling private vulnerability reporting, dependency graph, or Dependabot, select **Enable by default for new private repositories**.

    ![Screenshot of the "Enable FEATURE" modal dialog, with the "Enable by default for new private repositories" option highlighted with a dark orange outline.](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)

1. When you are ready to make the changes, click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
1. Optionally, in your feature's section of the security and analysis settings, select additional enablement settings. Additional enablement settings may include:
     - Automatic enablement for a specific type of repository
     - Feature-specific settings, such as recommending the extended query suite for code scanning default setup throughout your organization, or automatic secret validation for secret scanning

When you enable one or more security and analysis features for existing repositories, you will see any results displayed on GitHub within minutes:

- All the existing repositories will have the selected configuration.
- New repositories will follow the selected configuration if you've enabled the checkbox for new repositories.
- If enabled, Dependabot security updates will create pull requests to upgrade vulnerable dependencies when Dependabot alerts are triggered.

## Enabling or disabling a feature automatically when new repositories are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Code security and analysis", locate the feature, enable or disable the feature by default for new repositories, or all new private repositories, in your organization.

## Allowing Dependabot to access private dependencies

Dependabot can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, Dependabot must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

By default, Dependabot can't update dependencies that are located in private repositories or private package registries. However, if a dependency is in a private GitHub repository within the same organization as the project that uses that dependency, you can allow Dependabot to update the version successfully by giving it access to the host repository.

If your code depends on packages in a private registry, you can allow Dependabot to update the versions of these dependencies by configuring this at the repository level. You do this by adding authentication details to the `dependabot.yml` file for the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-private-registries)."

To allow Dependabot to access a private GitHub repository:

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Grant Dependabot private repository access", click **Add private repositories** or **Add internal and private repositories** to display a repository search field.

   ![Screenshot of the dropdown that you can use to search for repositories. As you type, repositories whose name matches your search criteria will appear in the list. The search text field is highlighted with a dark orange outline.](/assets/images/help/organizations/dependabot-private-repo-choose.png)

1. Start typing the name of the repository you want to grant Dependabot access to.
1. A list of matching repositories in the organization is displayed, click the repository you want to to allow access to and this adds the repository to the allowed list.
1. Optionally, to remove a repository from the list, to the right of the repository, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-label="The X icon" role="img"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg>.

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"
