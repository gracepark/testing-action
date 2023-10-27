# About billing for GitHub Packages

If you want to use GitHub Packages beyond the storage or data transfer included in your account, you will be billed for additional usage.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## About billing for GitHub Packages

GitHub Packages usage is free for public packages. For private packages, each account on GitHub.com receives a certain amount of free storage and data transfer, depending on the account's plan. Any usage beyond the included amounts is controlled by spending limits.

If you are a monthly-billed customer, your account will have a default spending limit of 0 US dollars (USD), which prevents additional usage of storage or data transfer after you reach the included amounts. If you pay your account by invoice, your account will have an unlimited default spending limit. For more information, see "[About spending limits](#about-spending-limits)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Billing update for container image storage:** The period of free use for container image storage and bandwidth for the Container registry has been extended. If you are using Container registry you'll be informed at least one month in advance of billing commencing and you'll be given an estimate of how much you should expect to pay. For more information about the Container registry, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

</div>

If you are an organization owner, you can connect an Azure Subscription ID to your organization  account to enable and pay for GitHub Packages usage beyond the amounts including with your account. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

Data transfer resets every month, while storage usage does not.

<div class="ghd-tool rowheaders">

Plan | Storage | Data transfer (per month)
------- | ------- | ---------
GitHub Free | 500MB | 1GB
GitHub Pro | 2GB | 10GB
GitHub Free for organizations | 500MB | 1GB |
GitHub Team | 2GB | 10GB
GitHub Enterprise Cloud | 50GB | 100GB

</div>

All data transferred out, when triggered by GitHub Actions, and data transferred in from any source is free. We determine you are downloading packages using GitHub Actions when you log in to GitHub Packages using a `GITHUB_TOKEN`.

<div class="ghd-tool rowheaders">

||Hosted|Self-Hosted|
|-|-|-|
|Access using a `GITHUB_TOKEN`|Free|Free|
|Access using a personal access token|Free|Paid|

</div>

Storage usage is shared with build artifacts produced by GitHub Actions for repositories owned by your account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

GitHub charges usage to the account that owns the repository where the package is published. If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.008 USD per GB of storage per day and $0.50 USD per GB of data transfer.

For example, if your organization uses GitHub Team, allows unlimited spending, uses 150GB of storage, and has 50GB of data transfer out during a month, the organization would have overages of 148GB for storage and 40GB for data transfer for that month. The storage overage would cost $0.008 USD per GB per day or approximately $37 USD for a 31-day month. The overage for data transfer would cost $0.50 USD per GB or $20 USD.

To estimate the costs for consumptive services, you can use the GitHub [pricing calculator](https://github.com/pricing/calculator?feature=packages).

At the end of the month, GitHub rounds your data transfer to the nearest GB.

GitHub calculates your storage usage for each month based on hourly usage per GB during that month. For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

- 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
- 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
- 720 GB-Hours + 6,048 GB-Hours = 6,768 total GB-Hours
- 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, GitHub rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

You can also use this calculation in the middle of a billing cycle, to estimate what your total usage might be for the month. For example, if you have an organization that uses GitHub Team, which provides 2 GB of free storage, and you use 0 GB for the first 5 days of April, 1.5 GB for the following 10 days, and you plan to use 3 GB for the last 15 days of the billing cycle, your projected storage usage for the month would be:

- 0 GB x 5 days  x (24 hours per day) =   0 GB-Hours
- 0.5 GB x 10 days x (24 hours per day) = 120 GB-Hours
- 3 GB x 15 days x (24 hours per day) = 1080 GB-Hours
- 0 GB-Hours + 120 GB-Hours + 1080 GB-Hours = 1200 total GB-Hours
- 1200 GB-Hours / (744 hours per month) = 1.6 GB-Months

The projected 1.6 GB of storage usage for the month would not exceed your 2 GB limit, even though your actual storage amount briefly exceeded 2 GB.

Your GitHub Packages usage shares your account's existing billing date, payment method, and receipt. To view all the subscriptions for your account on GitHub.com, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/viewing-your-subscriptions-and-billing-date)."

You must manage billing settings and paid features for each of your accounts separately. You can switch between settings for your personal account, organization accounts, and enterprise accounts using the context switcher on each settings page. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)."

## About spending limits

If you are a monthly-billed customer, your account will have a default spending limit of 0 US dollars (USD), which prevents additional usage of storage or data transfer after you reach the included amounts. If you pay your account by invoice, your account will have an unlimited default spending limit.

If you have an unlimited spending limit or a spending limit set higher than $0 USD, you will be billed for any additional storage or data transfer, also called overages, up to your spending limit. Any coupons on your account do not apply to GitHub Packages overages.

Overages are always billed monthly regardless of your billing term (even if your account is otherwise billed annually).

To prevent exceeding your spending limit, GitHub checks your storage consumption continuously throughout the month by looking at your current usage and calculating what your projected usage will be at the end of the month if no changes are made before that time. If at any point during the billing cycle your projected monthly usage exceeds your spending limit, both GitHub Packages and GitHub Actions will be disabled to prevent overages.

You should set a spending limit that will cover your maximum projected storage usage at any given point in the billing cycle. For example, imagine you have an organization that uses GitHub Team, and you set a spending limit of $50 USD. GitHub Team provides 2 GB of free storage. For any storage you use over that amount, GitHub will charge $0.008 USD per GB per day, or approximately $0.25 USD per GB for a 31-day month. That means the $50 spending limit you set will pay for an extra 200 GB of storage in that period. If on day ten of the billing cycle you reach 202 GB of storage, the next push of a package or GitHub Actions artifact will fail, because you have reached the maximum storage amount that can be paid for by your spending limit in this billing cycle, even if your average consumption for the period is below 202 GB.

To avoid reaching your spending limit in the current billing cycle, you can delete some of your current storage usage to free up projected usage for the rest of the month. This method is more effective toward the beginning of a billing cycle. The closer you get to the end of a billing cycle, the less impact this method will have on projected monthly usage.

For more information about managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)."

If your account has outstanding unpaid charges:

- The storage or minutes included in your account for GitHub Actions and GitHub Packages will not be reset until the payment has been successfully processed.
- For accounts with storage or minutes remaining for the current billing period, GitHub Actions and GitHub Packages will continue to be available until any included usage has been reached.
- For accounts that have reached the included usage for the current billing period for GitHub Actions or GitHub Packages, both GitHub Actions and GitHub Packages will be disabled to prevent any further overages.
