# About billing for GitHub Actions

If you want to use GitHub Actions beyond the storage or minutes included in your account, you will be billed for additional usage.

## About billing for GitHub Actions

GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners. For private repositories, each GitHub account receives a certain amount of free minutes and storage for use with GitHub-hosted runners, depending on the account's plan. Any usage beyond the included amounts is controlled by spending limits.

If you are a monthly-billed customer, your account will have a default spending limit of 0 US dollars (USD), which prevents additional usage of minutes or storage for private repositories beyond the amounts included with your account. If you pay your account by invoice, your account will have an unlimited default spending limit. For more information, see "[About spending limits](#about-spending-limits)."

If you are an organization owner, you can connect an Azure Subscription ID to your organization  account to enable and pay for GitHub Actions usage beyond the amounts including with your account. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

Minutes reset every month, while storage usage does not.

### Included storage and minutes

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Included minutes cannot be used for larger runners. These runners will always be charged for, including in public repos. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)."

</div>

|Plan | Storage | Minutes (per month)|
|------- | ------- | ---------|
| GitHub Free | 500 MB | 2,000 |
| GitHub Pro | 1 GB | 3,000 |
| GitHub Free for organizations | 500 MB | 2,000 |
| GitHub Team | 2 GB | 3,000 |
| GitHub Enterprise Cloud | 50 GB | 50,000 |

Jobs that run on Windows and macOS runners that GitHub hosts consume minutes at 2 and 10 times the rate that jobs on Linux runners consume. For example, using 1,000 Windows minutes would consume 2,000 of the minutes included in your account. Using 1,000 macOS minutes, would consume 10,000 minutes included in your account.

### Minute multipliers

| Operating system | Minute multiplier |
|------- | ---------|
| Linux | 1 |
| Windows | 2 |
| macOS| 10 |

The storage used by a repository is the total storage used by GitHub Actions artifacts and GitHub Packages. Your storage cost is the total usage for all repositories owned by your account. For more information about pricing for  GitHub Packages, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.008 USD per GB of storage per day and per-minute usage depending on the operating system used by the GitHub-hosted runner. GitHub rounds the minutes and partial minutes each job uses up to the nearest whole minute.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Minute multipliers do not apply to the per-minute rates shown below.

</div>

### Per-minute rates

| Operating system | vCPUs | Per-minute rate (USD) |
|--------- | -----| -----------|
|  Linux   |  2   |   $0.008   |
|  Linux   |  4   |   $0.016   |
|  Linux   |  8   |   $0.032   |
|  Linux   |  16  |   $0.064   |
|  Linux   |  32  |   $0.128   |
|  Linux   |  64  |   $0.256   |
|  Windows |  2   |   $0.016   |
|  Windows |  8   |   $0.064   |
|  Windows |  16  |   $0.128   |
|  Windows |  32  |   $0.256   |
|  Windows |  64  |   $0.512   |
|  macOS   |  3 or 4   |   $0.08    |
|  macOS   |  12  |   $0.12    |
|  macOS   |  6 (M1) |   $0.16    |

- The number of jobs you can run concurrently across all repositories in your user or organization account depends on your GitHub plan. For more information, see "[AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration)" for GitHub-hosted runners and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#usage-limits)" for self-hosted runner usage limits.
- You must manage billing settings and paid features for each of your accounts separately. You can switch between settings for your personal account, organization accounts, and enterprise accounts using the context switcher on each settings page. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)."
- Larger runners are only available for organizations and enterprises using the GitHub Team or GitHub Enterprise Cloud plans.
- Larger runners are only billed at the per-minute rate for the amount of time workflows are executed on them. There is no cost associated with creating a larger runner that is not being used by a workflow.
- For larger runners, there is no additional cost for configurations that assign public static IP addresses to a larger runner. For more information on larger runners, see "[AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners)."
- Included minutes cannot be used for larger runners.
- The larger runners are not free for public repositories.

## Calculating minute and storage spending

To estimate the costs for consumptive services, you can use the GitHub [pricing calculator](https://github.com/pricing/calculator?feature=actions).

At the end of the month, GitHub calculates the cost of minutes and storage used over the amount included in your account.

### Sample minutes cost calculation

For example, if your organization uses GitHub Team and allows unlimited spending, using 5,000 minutes could have a total storage and minute overage cost of $56 USD, depending on the operating systems used to run jobs.

- 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  - 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  - 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

GitHub calculates your storage usage for each month based on hourly usage during that month.

### Sample storage cost calculation

For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

- 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
- 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
- 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
- 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, GitHub rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

Your GitHub Actions usage shares your account's existing billing date, payment method, and receipt. To view all the subscriptions for your account on GitHub.com, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/viewing-your-subscriptions-and-billing-date)."

## About spending limits

If you are a monthly-billed customer, your account will have a default spending limit of 0 US dollars (USD), which prevents additional usage of minutes or storage for private repositories beyond the amounts included with your account. If you pay your account by invoice, your account will have an unlimited default spending limit.

If you have an unlimited spending limit or a spending limit set higher than $0 USD, you will be billed for any additional minutes or storage beyond the included amounts in your account, also called overages. GitHub charges usage to the account that owns the repository where a workflow is run. Any coupons on your account do not apply to GitHub Actions overages.

Overages are always billed monthly regardless of your billing term (even if your account is otherwise billed annually).

For information on managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)."

If your account has outstanding unpaid charges:

- The storage or minutes included in your account for GitHub Actions and GitHub Packages will not be reset until the payment has been successfully processed.
- For accounts with storage or minutes remaining for the current billing period, GitHub Actions and GitHub Packages will continue to be available until any included usage has been reached.
- For accounts that have reached the included usage for the current billing period for GitHub Actions or GitHub Packages, both GitHub Actions and GitHub Packages will be disabled to prevent any further overages.
