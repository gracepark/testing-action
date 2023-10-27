# Viewing transactions for your listing

The GitHub Marketplace transactions page allows you to download and view all transactions for your GitHub Marketplace listing. You can view transactions for the past day (24 hours), week, month, or for the entire duration of time that your GitHub App has been listed.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This article applies to publishing GitHub Apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

</div>

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Because it takes time to aggregate data, you'll notice a slight delay in the dates shown. When you select a time period, you can see exact dates for the metrics at the top of the page.

</div>

You can view or download the transaction data to keep track of your subscription activity. Click the **Export CSV** button to download a `.csv` file. You can also select a period of time to view and search within the transaction page.

## Transaction data fields

- **date:** The date of the transaction in `yyyy-mm-dd` format.
- **app_name:** The app name.
- **user_login:** The login of the user with the subscription.
- **user_id:** The id of the user with the subscription.
- **user_type:** The type of GitHub account, either `User` or `Organization`.
- **country:** The three letter country code.
- **amount_in_cents:** The amount of the transaction in cents. When a value is less the plan amount, the user upgraded and the new plan is prorated. A value of zero indicates the user canceled their plan.
- **renewal_frequency:** The subscription renewal frequency, either `Monthly` or `Yearly`.
- **marketplace_listing_plan_id:** The `id` of the subscription plan.
- **region:** The name of the region present in billing address.
- **postal_code:** The postal code value present in billing address.

![Screenshot of the "Transactions" tab in the GitHub Marketplace listing for an app. Transactions from the past week are listed in a table layout, with a search bar labeled "Search this file...".](/assets/images/marketplace/marketplace-transactions.png)

## Accessing GitHub Marketplace transactions

To access GitHub Marketplace transactions:

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Developer settings**.

1. In the left sidebar, click either **OAuth Apps** or **GitHub Apps** depending on the GitHub Marketplace listing you'd like to manage.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** You can also manage your listing by navigating to https://github.com/marketplace/manage.

   </div>

   ![Screenshot of the sidebar on the "Developer Settings" page of GitHub. Options labeled "GitHub Apps" and "OAuth apps" are outlined in dark orange.](/assets/images/settings/apps-choose-app.png)

1. Select the GitHub App that you'd like to view transactions for.
1. On the app settings landing page, scroll down to the Marketplace section and click **List in Marketplace**. If you already have a Marketplace draft listing, click **Edit Marketplace listing**. The Marketplace section is only visible if you allowed your app to be installed by any user or organization when registering the app.  For more information, see the list of [Marketplace requirements](/apps/publishing-apps-to-github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app).
1. Click the **Transactions** tab.
1. Optionally, select a different time period by clicking the Period dropdown in the upper-right corner of the Transactions page.
