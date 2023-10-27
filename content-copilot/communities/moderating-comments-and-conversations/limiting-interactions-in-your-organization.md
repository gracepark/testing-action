# Limiting interactions in your organization

You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.

**Who can use this feature**: Organization owners and moderators can limit interactions in an organization.

## About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. Enabling an interaction limit for a repository restricts certain users from commenting, opening issues, creating pull requests, reacting with emojis, editing existing comments, and editing titles of issues and pull requests.

When you enable an interaction limit, you can choose a duration for the limit: 24 hours, 3 days, 1 week, 1 month, or 6 months. After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

There are three types of interaction limits.
- **Limit to existing users**: Limits activity for users with accounts that are less than 24 hours old who do not have prior contributions and are not collaborators.
- **Limit to prior contributors**: Limits activity for users who have not previously contributed to the default branch of the repository and are not collaborators.
- **Limit to repository collaborators**: Limits activity for users who do not have write access to the repository.

Members of the organization are not affected by any of the limit types.

When you enable organization-wide activity limitations, you can't enable or disable interaction limits on individual repositories. For more information on limiting activity for an individual repository, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."

Organization owners and moderators can also block users for a specific amount of time. After the block expires, the user is automatically unblocked. For more information, see "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)."

## Limiting interactions in your organization

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. _For organization owners:_ In the "Access" section of the sidebar, select **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-report" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Moderation**, then click **Interaction limits**.

   _For organization moderators:_ In the sidebar, click **Interaction limits**.

1. Under "Temporary interaction limits", to the right of the type of interaction limit you want to set, select the **Enable** dropdown menu, then click the duration you want for your interaction limit.

## Further reading

- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
- "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
