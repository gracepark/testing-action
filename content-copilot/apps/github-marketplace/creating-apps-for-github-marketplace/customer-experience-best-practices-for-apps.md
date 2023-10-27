# Customer experience best practices for apps

Guidelines for creating an app that will be easy to use and understand.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This article applies to publishing GitHub Apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

</div>

If you follow these best practices it will help you to provide a good customer experience.

## Customer communication

- Marketing materials for the app should accurately represent the app's behavior.
- Apps should include links to user-facing documentation that describe how to set up and use the app.
- Customers should be able to see what type of plan they have in the billing, profile, or account settings section of the app.
- Customers should be able to install and use your app on both a personal account and an organization account. They should be able to view and manage the app on those accounts separately.
- Apps should provide customers with a way to delete their account, without having to email or call a support person. Apps should delete all GitHub user data within 30 days of receiving a request from the user, or within 30 days of the end of the user's legal relationship with GitHub.

## Plan management

- Customers who cancel a paid plan purchased from GitHub Marketplace should be automatically downgraded to the app's free plan if it exists. When a customer cancels a GitHub Marketplace subscription, GitHub does not automatically uninstall the app, so the customer can expect that free features will continue to function. It's highly recommended to allow customers to re-enable their previous plan.
- Customers should be able to upgrade from your app's user interface if you provide an [upgrade URL](/apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-changes#about-upgrade-urls) in this format: `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- Customers should be able to modify which users have access to your app from your app's website if they purchased seats (per-unit pricing plan) or the plan offers unlimited collaborators.
- Customers should be able to see the following changes to their account immediately in the billing, profile, or account settings section of the app's website:
  - Current plan and price.
  - New plans purchased.
  - Upgrades, downgrades, cancellations, and the number of remaining days in a free trial.
  - Changes to billing cycles (monthly or yearly).
  - Usage and remaining resources for flat-rate and per-unit plans. For example, if the pricing plan is per-unit, your app's site should show units used and units available.

## Further reading

- "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)"
- "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/best-practices-for-creating-an-oauth-app)"
- "[AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/security-best-practices-for-apps-on-github-marketplace)"
