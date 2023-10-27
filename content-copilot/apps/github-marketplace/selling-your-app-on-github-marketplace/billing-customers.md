# Billing customers

Apps on GitHub Marketplace should adhere to GitHub's billing guidelines and support recommended services. Following our guidelines helps customers navigate the billing process without any surprises.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This article applies to publishing GitHub Apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

</div>

## Understanding the billing cycle

Customers can choose a monthly or yearly billing cycle when they purchase your app. All changes customers make to the billing cycle and plan selection will trigger a `marketplace_purchase` event. You can refer to the `marketplace_purchase` webhook payload to see which billing cycle a customer selects and when the next billing date begins (`effective_date`). For more information about webhook payloads, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api)."

## Providing billing services in your app's UI

Customers should be able to perform the following actions from your app's website:
- Customers should be able to modify or cancel their GitHub Marketplace plans for personal and organizational accounts separately.
- Customers who cancel a paid plan purchased from GitHub Marketplace should be automatically downgraded to the app's free plan if it exists. When a customer cancels a GitHub Marketplace subscription, GitHub does not automatically uninstall the app, so the customer can expect that free features will continue to function. It's highly recommended to allow customers to re-enable their previous plan.
- Customers should be able to upgrade from your app's user interface if you provide an [upgrade URL](/apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-changes#about-upgrade-urls) in this format: `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- Customers should be able to modify which users have access to your app from your app's website if they purchased seats (per-unit pricing plan) or the plan offers unlimited collaborators.
- Customers should be able to see the following changes to their account immediately in the billing, profile, or account settings section of the app's website:
  - Current plan and price.
  - New plans purchased.
  - Upgrades, downgrades, cancellations, and the number of remaining days in a free trial.
  - Changes to billing cycles (monthly or yearly).
  - Usage and remaining resources for flat-rate and per-unit plans. For example, if the pricing plan is per-unit, your app's site should show units used and units available.

## Billing services for upgrades, downgrades, and cancellations

Follow these guidelines for upgrades, downgrades, and cancellations to maintain a clear and consistent billing process. For more detailed instructions about the GitHub Marketplace purchase events, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app)."

You can use the `marketplace_purchase` webhook's `effective_date` key to determine when a plan change will occur and periodically synchronize the [List accounts for a plan](/rest/apps#list-accounts-for-a-plan).

### Upgrades

When a customer upgrades their pricing plan or changes their billing cycle from monthly to yearly, you should make the change effective for them immediately. You need to apply a pro-rated discount to the new plan and change the billing cycle.

In the case where a customer upgrades their plan and the payment fails, GitHub reverts their GitHub Marketplace subscription to its previous state. GitHub also sends an email to the customer to inform them of the failure and allow them to re-attempt their purchase. You will receive a webhook with the `changed` action requesting you to revert to the previous plan.

For information about building upgrade and downgrade workflows into your app, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-changes)."

### Downgrades and cancellations

Downgrades occur when a customer moves to a free plan from a paid plan, selects a plan with a lower cost than their current plan, or changes their billing cycle from yearly to monthly. When downgrades or cancellations occur, you don't need to provide a refund. Instead, the current plan will remain active until the last day of the current billing cycle. The `marketplace_purchase` event will be sent when the new plan takes effect at the beginning of the customer's next billing cycle.

When a customer cancels a plan, you must:
- Automatically downgrade them to the free plan, if it exists.

  When a customer cancels a GitHub Marketplace subscription, GitHub does not automatically uninstall the app, so the customer can expect that free features will continue to function.
- Enable them to upgrade the plan through GitHub if they would like to continue the plan at a later time.

For information about building cancellation workflows into your app, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-cancellations)."
