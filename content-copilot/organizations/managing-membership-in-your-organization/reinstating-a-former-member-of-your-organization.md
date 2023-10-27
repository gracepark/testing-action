# Reinstating a former member of your organization

You can invite former organization members to rejoin your organization, and choose whether to restore the person's former role, access permissions, forks, and settings.

**Who can use this feature**: Organization owners can reinstate a former member of an organization.

## About member reinstatement

If a user is removed from your organization in one of the following ways, the user's access privileges and settings are saved for three months.

- You manually removed the user from your organization. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)."
- The user was removed from your organization because you've required members and outside collaborators to enable two-factor authentication (2FA). For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)."
- The user was removed from your organization because you enforced SAML single sign-on. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)" in the GitHub Enterprise Cloud documentation.
- You converted an organization member to an outside collaborator. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-organization-member-to-an-outside-collaborator)."

You can restore the user's privileges if you invite them back to the organization within that time frame.

If your organization has a paid per-user subscription, an unused license must be available before you can reinstate a former organization member. For more information, see "[AUTOTITLE](/articles/about-per-user-pricing)."

## Items that are restored for reinstated members

When you reinstate a former organization member, the following items can be restored:

- The user's role in the organization
- Any private forks of repositories owned by the organization
- Membership in the organization's teams
- Previous access and permissions for the organization's repositories
- Stars for organization repositories
- Issue assignments in the organization
- Repository subscriptions (notification settings for watching, not watching, or ignoring a repository's activity)

## Reinstating a former member of your organization on GitHub

If a user was removed from your organization because you required members and outside collaborators to enable 2FA, you can send an invitation to reinstate a user's privileges and access to the organization before they have enabled two-factor authentication, but they must enable 2FA before they can accept your invitation to rejoin the organization.

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Click the name of your organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Click **Invite member**.

1. Type the username of the person you want to reinstate and click **Invite**.

1. Select whether to restore that person's previous privileges in the organization or clear their previous privileges and set new access permissions, then click **Invite and reinstate** or **Invite and start fresh**.

1. If you cleared the previous privileges for a former organization member, choose a role for the user, and optionally add them to some teams, then click **Send invitation**.

1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming a member of the organization. 
You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.
