# Viewing your GitHub Codespaces usage

You can view the compute hours and storage used by GitHub Codespaces.

## Viewing GitHub Codespaces usage for your personal account

You can see how much of the usage included in your personal account you have used so far in the current monthly billing cycle. If you have set up a payment method, set a spending limit, and used all of your included usage, you can also check your bill for the current month.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**, then click **Plans and usage**.
1. Under "Codespaces," you can see how many core hours of GitHub Codespaces compute usage and GB-months of storage you have used so far in the current billing month.

   ![Screenshot of the "Codespaces" section of the billing page showing figures for "Usage hours" and "Storage."](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   For information about "core hours" and "GB-months," see "[AUTOTITLE](/free-pro-team@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

1. Optionally, click **Usage hours** and **Storage** to see more details.

   ![Screenshot of the "Codespaces" section of the billing page, expanded to show more details for "Usage hours" and "Storage."](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   The **Included** column shows how many of the core hours of compute usage, or GB-months of storage, included free with your account, you have used so far this month. The **Paid** column shows how many billed core hours of usage, or GB-months of storage, you have used. The figures are updated once every hour.

   In the screenshot above, the entire quota of included storage for the month has been used. When you've used all of either the included compute usage or storage (whichever is reached first), you must set up a payment method and a spending limit to continue using GitHub Codespaces during the current billing month. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)" and "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account)."

   For tips on making your allowed usage go further, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-included-usage)."

1. Optionally, next to "Usage this month", click **Get usage report** to get an email containing a link for downloading a CSV report of storage use for GitHub Actions, GitHub Packages, and GitHub Codespaces. The email is sent to your account's primary email address. You can choose whether the report should cover the last 7, 30, 90, or 180 days.

   ![Screenshot of the "Billing and plans" settings. A button, labeled "Get usage report", is highlighted with an orange outline.](/assets/images/help/billing/actions-packages-report-download.png)

   The data used for this report is updated daily.

   To see the costs for GitHub Codespaces compute usage and storage, filter the report to show only rows that mention "Codespaces" in the `Product` column.

   ![Screenshot of a usage report filtered to show only row that mention "Codespaces" in the "Product" column.](/assets/images/help/codespaces/csv-usage-report.png)

   To see only the costs for creating, updating and storing prebuilds, filter the report to show only rows that mention "Create Codespaces Prebuilds" in the `Actions Workflow` column.

   ![Screenshot of a usage report filtered to show only details relating to codespace prebuilds.](/assets/images/help/codespaces/csv-usage-report-prebuilds.png)

## Viewing GitHub Codespaces usage for your organization account

Organization owners and billing managers can view GitHub Codespaces usage for the organization.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> Organizations**.
1. Next to the organization, click **Settings**.
1. If you are an organization owner, in the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**.
1. Under "Usage this month", under "Codespaces", view the details of the compute hours and storage used so far this month.

   You can also see and update your current spending limit. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Notes**:
   - The costs shown here are the cumulative costs within the current monthly billing period. The usage-based costs for GitHub Codespaces shown on this page are reset to zero at the start of each monthly billing period. Outstanding costs from previous months are not shown.
   - The figures on this page are updated every hour.

   </div>

1. Optionally, next to "Usage this month", click **Get usage report** to get an email containing a link for downloading a CSV report of storage use for GitHub Actions, GitHub Packages, and GitHub Codespaces. The email is sent to your account's primary email address. You can choose whether the report should cover the last 7, 30, 90, or 180 days.

   ![Screenshot of the "Billing and plans" settings. A button, labeled "Get usage report", is highlighted with an orange outline.](/assets/images/help/billing/actions-packages-report-download.png)

   The data used for this report is updated daily.

   To see the costs for GitHub Codespaces compute usage and storage, filter the report to show only rows that mention "Codespaces" in the `Product` column.

   ![Screenshot of a usage report filtered to show only row that mention "Codespaces" in the "Product" column.](/assets/images/help/codespaces/csv-usage-report.png)

   To see only the costs for creating, updating and storing prebuilds, filter the report to show only rows that mention "Create Codespaces Prebuilds" in the `Actions Workflow` column.

   ![Screenshot of a usage report filtered to show only details relating to codespace prebuilds.](/assets/images/help/codespaces/csv-usage-report-prebuilds.png)

## Further reading

- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
