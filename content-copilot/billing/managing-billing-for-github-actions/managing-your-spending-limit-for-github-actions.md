# Managing your spending limit for GitHub Actions

You can set a spending limit for GitHub Actions usage.

## About spending limits for GitHub Actions

GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners. For private repositories, each GitHub account receives a certain amount of free minutes and storage for use with GitHub-hosted runners, depending on the account's plan. Any usage beyond the included amounts is controlled by spending limits.

If you are a monthly-billed customer, your account will have a default spending limit of 0 US dollars (USD), which prevents additional usage of minutes or storage for private repositories beyond the amounts included with your account. If you pay your account by invoice, your account will have an unlimited default spending limit.

You can set a specific spending limit or, for some accounts, allow unlimited spending. The spending limit applies to your combined overages (any usage beyond the amounts included with your plan) for GitHub Packages and GitHub Actions. For more information about pricing for GitHub Actions usage, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

If you are an organization owner, you can connect an Azure Subscription ID to your organization  account to enable and pay for GitHub Actions usage beyond the amounts including with your account. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. For example, if your organization uses GitHub Team, does not allow overages, and creates workflow artifacts that increase your storage usage for the month from 1.9GB to 2.1GB, you will use slightly more storage than the 2GB your product includes.

Because you have not enabled overages, your next attempt to create a workflow artifact will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.

## Managing the spending limit for GitHub Actions for your personal account

Anyone can manage the spending limit for GitHub Actions for their own personal account.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**, then click **Spending limits**.
1. At the top of the page, under "Payment information," click **Manage spending limit**.

   ![Screenshot of the summary section of the billing settings page. On the right, "Manage spending limit" is highlighted with a dark orange outline.](/assets/images/help/billing/manage-spending-limit-link.png)
1. Under "Actions & Packages", choose to limit spending or allow unlimited spending.
1. Depending on which option you chose, click either **Update limit** or **Update to unlimited**.

## Managing the spending limit for GitHub Actions for your organization

Organizations owners and billing managers can manage the spending limit for GitHub Actions for an organization.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> Organizations**.
1. Next to the organization, click **Settings**.
1. If you are an organization owner, in the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**.
1. At the top of the page, under "Payment information," click **Manage spending limit**.

   ![Screenshot of the summary section of the billing settings page. On the right, "Manage spending limit" is highlighted with a dark orange outline.](/assets/images/help/billing/manage-spending-limit-link.png)
1. Under "Monthly spending limit", choose to limit spending or allow unlimited spending.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** If GitHub Codespaces is enabled for your organization, scroll to "Actions & Packages", then choose to limit spending or allow unlimited spending.

   </div>
1. Depending on which option you chose, click either **Update limit** or **Update to unlimited**.

## Managing usage and spending limit email notifications

Email notifications are sent to account owners and billing managers when spending reaches 50%, 75%, 90% and 100% of your account's included usage and when spending reaches 50%, 75%, 90%, and 100% of your account's spending limit.

You can disable these notifications at any time by navigating to the "Email alerts" section at the bottom of the "Spending limit" page.
