# Viewing your sponsors and sponsorships

You can view and export detailed information and analytics about your sponsors and sponsorships.

## About sponsors and sponsorships

You can view analytics on your current and past sponsorships, the payments you've received from sponsors, and events, such as cancellations and sponsor tier changes for your sponsorships. You can also view activity such as new sponsorships, changes to sponsorships, and canceled sponsorships. You can filter the list of activities by date. You can also export sponsorship data for the account you're viewing in CSV or JSON format.

## About transaction metadata

To track where your sponsorships are coming from, you can use custom URLs with metadata for your GitHub Sponsors profile or checkout page. The metadata will be included in your transaction export in the metadata column. For more information about exporting transaction data, see "[Exporting your sponsorship data](#exporting-your-sponsorship-data)."

Metadata must use the `key=value` format and can be added to the end of these URLs.

- Sponsored account profile: `https://github.com/sponsors/{account}`
- Sponsorship checkout: `https://github.com/sponsors/{account}/sponsorships`

The metadata will persist in the URL as a potential sponsor switches accounts to sponsor with, selects monthly or one-time payments, and chooses a different tier.

### Syntax requirements

Your metadata must meet the following requirements, which do not apply to any other URL parameters that are passed.

- Keys must be prefixed by `metadata_`, such as `metadata_campaign`. In your transaction export, the `metadata_` prefix will be removed from the key.
- Keys and values must only contain alphanumeric values, dashes, or underscores. If non-accepted characters are passed in either keys or values, a 404 error will be presented.
- Whitespaces are not allowed.
- A maximum of **10** key-value pairs are accepted per request. If more are passed, only the first 10 will be saved.
- A maximum of **25** characters per key are accepted. If more than that are passed, only the first 25 will be saved.
- A maximum of **100** characters per value are accepted. If more than that are passed, only the first 100 will be saved.

For example, you can use `https://github.com/sponsors/{account}?metadata_campaign=myblog` to track sponsorships that originate from your blog. `metadata_campaign` is the key and `myblog` is the value. In the metadata column of your transaction export, the key will be listed as `campaign`.

## Viewing your sponsors and sponsorships

1. In the upper-right corner of any page, click your profile photo, then click **Your sponsors**.

  ![Screenshot of the profile options dropdown menu. One option, labeled "Your sponsors," is outlined in dark orange.](/assets/images/help/sponsors/access-github-sponsors-dashboard.png)

1. If a list of your sponsored and eligible accounts is shown, to the right of the account you want to manage, click **Dashboard**.
1. Optionally, to filter your sponsors by tier, use the **Filter** drop-down menu, click **Active tiers** or **Retired tiers**, and select a tier.

   ![Screenshot of the GitHub Sponsors dashboard. An expanded dropdown menu, labeled "Filter: all sponsors," is outlined in dark orange.](/assets/images/help/sponsors/tier-filter-dropdown.png)

## Viewing recent sponsorship activity

1. In the upper-right corner of any page, click your profile photo, then click **Your sponsors**.

  ![Screenshot of the profile options dropdown menu. One option, labeled "Your sponsors," is outlined in dark orange.](/assets/images/help/sponsors/access-github-sponsors-dashboard.png)

1. If a list of your sponsored and eligible accounts is shown, to the right of the account you want to manage, click **Dashboard**.
1. In the left sidebar, click **Your sponsors**.

   ![Screenshot of the GitHub Sponsors dashboard. A tab in the "Manage" section, labeled "Your sponsors", is outlined in dark orange.](/assets/images/help/sponsors/your-sponsors-tab.png)

## Exporting your sponsorship data

You can export your sponsorship transactions by month. GitHub will send you an email with transaction data for all of your sponsors for the month you select. After the export is complete, you can export another month of data. You can export up to 10 sets of data per hour for any of your sponsored accounts.

1. In the upper-right corner of any page, click your profile photo, then click **Your sponsors**.

  ![Screenshot of the profile options dropdown menu. One option, labeled "Your sponsors," is outlined in dark orange.](/assets/images/help/sponsors/access-github-sponsors-dashboard.png)

1. If a list of your sponsored and eligible accounts is shown, to the right of the account you want to manage, click **Dashboard**.
1. In the left sidebar, click **Your sponsors**.

   ![Screenshot of the GitHub Sponsors dashboard. A tab in the "Manage" section, labeled "Your sponsors", is outlined in dark orange.](/assets/images/help/sponsors/your-sponsors-tab.png)
1. In the top-right, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-download" aria-hidden="true"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg> **Export**.
1. Choose a time frame and a format for the data you'd like to export, then click **Start export**.
