# Enabling or disabling GitHub Codespaces for your organization

You can control which users can use GitHub Codespaces in your organization's private repositories.

**Who can use this feature**: Organization owners can control which users can use GitHub Codespaces.
Organizations on GitHub Team and GitHub Enterprise plans can choose to disable GitHub Codespaces in private repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)."

## About enabling and disabling GitHub Codespaces

GitHub Codespaces is always available in an organization's public repositories, and any user can create a codespace from these repositories. If your organization is on a GitHub Free plan, GitHub Codespaces is always available in your organization's private repositories too, and any users with access to these repositories can create a codespace at their own expense.

If you're the owner of an organization on a GitHub Team or GitHub Enterprise Cloud plan, you can choose whether to enable or disable GitHub Codespaces in your organization's private repositories. If you enable GitHub Codespaces in these repositories, you can choose whether to enable for all users or for a selection of members and collaborators.

By enabling GitHub Codespaces, you can help your members and collaborators get started with projects quickly, without needing to install lots of tools and dependencies locally to start contributing. However, you might want to roll out GitHub Codespaces gradually across your organization by enabling it for groups of users at a time. Alternatively, if you need to comply with security regulations that require increased control over the private code in your organization, you might want to disable GitHub Codespaces for all your members.

If you have enabled GitHub Codespaces in private repositories for at least some users, you can choose to pay for these users' usage of GitHub Codespaces across all repositories in your organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."

If you cannot access the settings to enable GitHub Codespaces in your organization, this may be because an enterprise owner has disabled GitHub Codespaces for your organization. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-codespaces-in-your-enterprise)" in the GitHub Enterprise Cloud documentation.

## Prerequisites for enabling GitHub Codespaces

Only people who can either push changes to a repository, or fork the repository, can create a codespace for that repository. To allow a user to create codespaces for a repository owned by your organization, you must do one of the following things.

- Ensure that the user has read access to the repository, and the repository permits forking, so that the user can create a codespace from the repository, push their changes to a fork, and create a pull request for any changes they want to make. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."
- Ensure that the user has write access to the repository, so that they can push changes directly to the repository without forking.

In addition, to allow users to create codespaces, you must ensure that your organization does not have an IP address allow list enabled. For more information, see "[Managing allowed IP addresses for your organization](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)" in the GitHub Enterprise Cloud documentation.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you are a verified educator or a teacher, you must enable GitHub Codespaces from a GitHub Classroom to use your Codespaces Education benefit. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)."

</div>

## About changing your settings

If you remove a user's access to GitHub Codespaces, the user will immediately be unable to open existing codespaces they have created from your organization's private repositories. If you were previously paying for codespaces the user had created from your organization's public repositories, ownership of these codespaces will transfer the user.

Before removing users' access, you should alert the affected users. If they have unpublished work in a codespace, they can make sure the work is pushed to a branch in the repository before they lose access.

Once a user loses access to a codespace, the codespace is retained for a period of 7 days, then it is permanently deleted. During this 7-day period, to recover unpublished work from the codespace, the user must contact us through the [GitHub Support portal](https://support.github.com).

## Enabling or disabling GitHub Codespaces

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you remove a user's access to GitHub Codespaces, the user will immediately be unable to open existing codespaces they have created from your organization's private repositories. For more information, see "[About changing your settings](#about-changing-your-settings)."

</div>

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. Under **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**, in the left sidebar, click **General**.
1. On the Codespaces settings page, under "Codespaces access," select your preferred setting for GitHub Codespaces in your organization's private repositories.

   You can disable Codespaces, enable for specific members or teams, enable for all members, or enable for all members and collaborators.
