# Reinstating a former outside collaborator's access to your organization

You can reinstate a former outside collaborator's access permissions for organization repositories, forks, and settings.

When an outside collaborator's access to your organization's private repositories is removed, the user's access privileges and settings are saved for three months. You can restore the user's privileges if you invite them back to the organization within that time frame.

If a user was removed from your organization because you required members and outside collaborators to enable 2FA, you can send an invitation to reinstate a user's privileges and access to the organization before they have enabled two-factor authentication, but they must enable 2FA before they can accept your invitation to rejoin the organization.

When you reinstate a former outside collaborator, you can restore:
- The user's former access to organization repositories
- Any private forks of repositories owned by the organization
- Membership in the organization's teams
- Previous access and permissions for the organization's repositories
- Stars for organization repositories
- Issue assignments in the organization
- Repository subscriptions (notification settings for watching, not watching, or ignoring a repository's activity)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips**:

- Only organization owners can reinstate outside collaborators' access to an organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."
- The reinstating a member flow on GitHub.com may use the term "member" to describe reinstating an outside collaborator but if you reinstate this person and keep their previous privileges, they will only have their previous [outside collaborator permissions](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).
- If your organization has a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)."

</div>

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Click the name of your organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Click **Invite member**.

1. Type the username of the person you want to reinstate and click **Invite**.

1. Select whether to restore the outside collaborator's previous privileges in the organization by clicking **Invite and reinstate** or choose to clear their previous privileges and set new access permissions by clicking **Invite and start fresh**.

   <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

   **Warning:** If you want to upgrade the outside collaborator to a member of your organization, then choose **Invite and start fresh** and choose a new role for this person. Note, however, that this person's private forks of your organization's repositories will be lost if you choose to start fresh. To make the former outside collaborator a member of your organization _and_ keep their private forks, choose **Invite and reinstate** instead. Once this person accepts the invitation, you can convert them to an organization member by [inviting them to join the organization as a member](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-outside-collaborator-to-an-organization-member).

   </div>

1. If you cleared the previous privileges for a former outside collaborator, choose a role for the user and optionally add them to some teams, then click **Send invitation**.

1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming an outside collaborator in the organization. 
You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
