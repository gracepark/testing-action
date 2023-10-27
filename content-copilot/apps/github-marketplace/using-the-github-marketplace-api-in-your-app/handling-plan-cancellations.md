# Handling plan cancellations

Cancelling a GitHub Marketplace app triggers the [`marketplace_purchase` event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) webhook with the `cancelled` action, which kicks off the cancellation flow.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This article applies to publishing GitHub Apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

</div>

For more information about cancelling as it relates to billing, see "[AUTOTITLE](/apps/github-marketplace/selling-your-app-on-github-marketplace/billing-customers)."

## Step 1. Cancellation event

If a customer chooses to cancel a GitHub Marketplace order, GitHub sends a [`marketplace_purchase`](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api) webhook with the action `cancelled` to your app when the cancellation takes effect. If the customer cancels during a free trial, your app will receive the event immediately. When a customer cancels a paid plan, the cancellation will occur at the end of the customer's billing cycle.

## Step 2. Deactivating customer accounts

When a customer cancels a free or paid plan, your app must perform these steps to complete cancellation:

1. Deactivate the account of the customer who canceled their plan.
1. Revoke the OAuth token your app received for the customer.
1. If your app is an OAuth app, remove all webhooks your app created for repositories.
1. Remove all customer data within 30 days of receiving the `cancelled` event.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** We recommend using the [`marketplace_purchase`](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api) webhook's `effective_date` to determine when a plan change will occur and periodically synchronizing the [List accounts for a plan](/rest/apps#list-accounts-for-a-plan). For more information on webhooks, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api)."

</div>
