# Inviting users to join your organization

You can invite anyone to become a member of your organization using their username or email address for GitHub.com.

**Who can use this feature**: Organization owners can invite users to join an organization.

## About organization invitations

 When you invite someone to become a member of your organization, the person receives an email with an invitation link. To join the organization, the invitee clicks the invitation link in the email.

 You can use a person's GitHub username or email address for the invitation.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you use an email address for the invitation, the invitee will only be able to accept the invitation if the email address matches with a verified email address associated with the invitee's personal account on GitHub. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)."

If an invitee's personal account has been flagged, the invitee won't be able to accept any new or pending invitations to join organizations.

</div>

If your organization has a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)."

If an invitee does not accept the invitation within seven days, the pending invitation expires automatically. 

If your organization requires members to use two-factor authentication, users that you invite must enable two-factor authentication before accepting the invitation. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)" and "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa)."

Organizations that use GitHub Enterprise Cloud can implement SCIM to add, manage, and remove organization members' access to GitHub.com through an identity provider (IdP). For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)" in the GitHub Enterprise Cloud documentation.

## Inviting a user to join your organization

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Click the name of your organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Click **Invite member**.

1. In the search field, type the username, full name, or email address of the person you want to invite and click **Invite**.

1. If the person you're inviting was an organization member within the last three months, select whether to restore their privileges or start fresh, then click **Invite and reinstate** or **Invite and start fresh**.

1. If the person you're inviting has never been a member of the organization or if you cleared their privileges, under "Role in the organization," select an organization role for the user.
1. Optionally, to add the user to a team in the organization, select the team.
1. Click **Send invitation**.
1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming a member of the organization. 
You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)"
