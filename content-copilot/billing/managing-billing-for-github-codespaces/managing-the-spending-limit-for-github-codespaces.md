# Managing the spending limit for GitHub Codespaces

You can set a spending limit for GitHub Codespaces usage.

## About the GitHub Codespaces spending limit

GitHub Codespaces is paid for either by an organization, an enterprise, or a personal account. The Free and Pro plans for personal accounts include free use of GitHub Codespaces up to a fixed amount of usage every month. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You must set a non-zero spending limit on your personal, organization, or enterprise account before the account can be billed for use of GitHub Codespaces.

</div>

By default, all accounts have a GitHub Codespaces spending limit of $0 USD. This prevents new codespaces being created, or existing codespaces being opened, if doing so would incur a billable cost to your personal, organization, or enterprise account. For personal accounts, if you have access to create a codespace, you can do so as long as the account has not reached the limit of its monthly included usage. For organizations and enterprises, the default spending limit means that, to allow people to create codespaces that are billed to the organization, or its parent enterprise, the limit must be changed to a value above $0 USD.
Costs for GitHub Codespaces are always billed monthly, even if your account is otherwise billed annually.

Once you've reached your spending limit, you will no longer be able to create new codespaces, and you won't be able to start existing codespaces. Any existing codespaces that are still running will be shut down in a short time, but you will not be charged for usage after you have reached your spending limit.

## Using your Azure Subscription

If you are an organization owner, you can connect an Azure Subscription ID to your organization  account to enable and pay for GitHub Codespaces usage. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

## Managing the GitHub Codespaces spending limit for your personal account

You can set a spending limit for GitHub Codespaces for your own personal account.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**, then click **Spending limits**.
1. At the top of the page, under "Payment information," click **Manage spending limit**.

   ![Screenshot of the summary section of the billing settings page. On the right, "Manage spending limit" is highlighted with a dark orange outline.](/assets/images/help/billing/manage-spending-limit-link.png)
1. Under "Codespaces", either select **Limit spending** and enter a spending limit, or select **Unlimited spending**.
1. Depending on which option you chose, click either **Update limit** or **Update to unlimited**.

## Managing the GitHub Codespaces spending limit for your organization account

Organizations owners and billing managers can manage the spending limit for GitHub Codespaces for an organization.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Organizations that are owned by an enterprise account cannot specify their own spending limit as this is specified in the enterprise settings.

</div>

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> Organizations**.
1. Next to the organization, click **Settings**.
1. If you are an organization owner, in the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**.
1. At the top of the page, under "Payment information," click **Manage spending limit**.

   ![Screenshot of the summary section of the billing settings page. On the right, "Manage spending limit" is highlighted with a dark orange outline.](/assets/images/help/billing/manage-spending-limit-link.png)
1. Under "Codespaces", either select **Limit spending** and enter a spending limit, or select **Unlimited spending**.
1. Depending on which option you chose, click either **Update limit** or **Update to unlimited**.

## Exporting changes when you have reached your spending limit

If your personal, organization, or enterprise account reaches its spending limit, you will no longer be able to create or resume codespaces that are billable to that account. However, you can still export any work-in-progress changes to a new branch. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/exporting-changes-to-a-branch)."

## Managing usage and spending limit email notifications

Email notifications are sent to account owners and billing managers when spending reaches 75%, 90%, and 100% of an account's spending limit.

You can turn off these notifications at any time from the "Billing and plans" page. To turn off notifications, under "Email alerts", deselect the **Spending limits alerts** checkbox.

For personal accounts only, you can also choose to turn off email notifications that are sent when you have used 75%, 90%, and 100% of the free usage included with your personal account. To do this, clear the **Included resources alerts** checkbox.

![Screenshot of the "Email alerts" settings. The options "Included resources alerts" and "Spending limit alerts" are both selected.](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Further reading

- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
