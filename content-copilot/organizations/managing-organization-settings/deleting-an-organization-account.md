# Deleting an organization account

You can delete your organization account on GitHub.com at any time.

**Who can use this feature**: Organization owners can delete an organization.

## About deletion of your organization account

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: If you want to cancel your paid subscription, you can [downgrade your organization to GitHub Free](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan) instead of deleting the organization and its content.

</div>

Deleting your organization account removes all repositories, forks of private repositories, wikis, issues, pull requests, and project or organization pages. Your billing will end and, after 90 days, the organization name becomes available for use on a new user or organization account.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: If you rename an organization, you can create a new organization with the same name immediately. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/renaming-an-organization)."

</div>

If the account namespace includes any public repositories that contain an action listed on GitHub Marketplace, or that had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to deletion, GitHub permanently retires the owner name and repository name combination (`OWNER/REPOSITORY-NAME`) when you delete your account.

If the account namespace includes any packages or container images stored in a GitHub Packages registry, GitHub deletes the packages and container images when you delete your account. By deleting your account, you may break projects that depend on these packages and images.

If the account namespace includes any public container images with more than 5,000 downloads, the full name of these container images (`NAMESPACE/IMAGE-NAME`) is permanently retired when you delete the account to ensure the container image name cannot be reused in the future.

## Backing up your organization content

 After you delete an organization, GitHub **cannot restore your content**. Therefore, before you delete your organization, make sure you have a copy of all repositories, wikis, issues, and project boards from the account.

## Deleting your organization account

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Danger zone" section, click **Delete this organization**.
1. Read the warning. If you want to proceed, type the organization's name, then click **Cancel plan and delete the organization**.
