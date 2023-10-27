# Adding a billing manager to your organization

A *billing manager* is a user who manages the billing settings for your organization, such as updating payment information. This is a great option if regular members of your organization don't typically have access to billing resources.

Members of your organization's Owners team can give _billing manager_ permissions to people. Once a person accepts their invitation to become a billing manager for your organization, they can invite additional people to be billing managers.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Billing managers do not use paid licenses in your organization's subscription.

</div>

## Permissions for billing managers

Billing managers can:

- Upgrade or downgrade the account
- Add, update, or remove payment methods
- View payment history
- Download receipts
- View, invite, and remove billing managers
- Start, modify, or cancel sponsorships

In addition, all billing managers will receive billing receipts by email on the organization's billing date.

Billing managers **are not** able to:

- Create or access repositories in your organizations
- See private members of your organization
- Be seen in the list of organization members
- Purchase, edit, or cancel subscriptions for GitHub Marketplace apps

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:**  If your organization [requires members, billing managers, and outside collaborators to use two-factor authentication](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), the user must enable two-factor authentication before they can accept your invitation to become a billing manager for the organization.

</div>

## Inviting a billing manager

The invited person will receive an invitation email asking them to become a billing manager for your organization. Once the invited person clicks the accept link in their invitation email, they will automatically be added to the organization as a billing manager. If they don't already have a GitHub account, they will be directed to sign up for one, and they will be automatically added to the organization as a billing manager after they create an account.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> Organizations**.
1. Next to the organization, click **Settings**.
1. If you are an organization owner, in the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**.
1. Under "Billing management", next to "Billing managers", click **Add**.
1. Type the username or email address of the person you want to add and click **Send invitation**.

## Further reading

- "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" in the GitHub Enterprise Cloud documentation
