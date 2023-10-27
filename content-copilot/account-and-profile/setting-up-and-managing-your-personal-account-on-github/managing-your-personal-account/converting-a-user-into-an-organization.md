# Converting a user into an organization

You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: Before converting a user into an organization, keep these points in mind.

- You will **no longer** be able to sign into the converted personal account.
- You will **no longer** be able to create or modify gists owned by the converted personal account.
- An organization **cannot** be converted back to a user.
- The SSH keys, OAuth tokens, job profile, reactions, and associated user information, **will not** be transferred to the organization. This is only true for the personal account that's being converted, not any of the personal account's collaborators.
- Any GitHub Apps installed on the converted personal account will be uninstalled.
- Any commits made with the converted personal account **will no longer be linked** to that account. The commits themselves **will** remain intact.
- Any existing comments made by the converted personal account **will no longer be linked** to that account. The comments themselves **will** remain intact, but will be associated with the `ghost` user.
- Any forks of private repositories made with the converted personal account will be deleted.
- Since organizations cannot star repositories, you will no longer have access to your original list of starred repositories.
- You will no longer have access to the list of users you were following from your user account.
- Any followers of your user account will not automatically follow the new organization.
</div>

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account name for your personal use, [change the name of your personal account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username) to something new and wonderful.
1. [Create a new organization](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) with the original name of your personal account.
1. [Transfer your repositories](/repositories/creating-and-managing-repositories/transferring-a-repository) to your new organization account.

## Convert your personal account into an organization automatically

You can also convert your personal account directly into an organization. Converting your account:
- Preserves the repositories as they are without the need to transfer them to another account manually
- Automatically invites collaborators to teams with permissions equivalent to what they had before
- For personal accounts on GitHub Pro, automatically transitions billing to [the paid GitHub Team](/billing/managing-the-plan-for-your-github-account/about-billing-for-plans) without the need to re-enter payment information, adjust your billing cycle, or double pay at any time

When you convert a personal account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as outside collaborators. You can then invite outside collaborators to become members of your new organization if you wish. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."

1. Create a new personal account, which you'll use to sign into GitHub and access the organization and your repositories after you convert.
1. [Leave any organizations](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) the personal account you're converting has joined.
1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> Organizations**.
1. In the "Transform account" section, click **Turn USERNAME into an organization**.
1. Review the warning, then click **Turn USERNAME into an organization**.
1. Under "Choose an organization owner", type either the secondary personal account you created in the previous section, or another user you trust, to manage the organization.
1. Choose your new organization's subscription and enter your billing information, if prompted.
1. Click **Create Organization**.
1. Sign in to the new personal account you created earlier, then use the context switcher to access your new organization.

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams)"

- "[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/accessing-an-organization)"
