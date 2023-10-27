# Requirements for listing an app

Apps on GitHub Marketplace must meet the requirements outlined on this page before the listing can be published.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This article applies to publishing GitHub Apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

</div>

The requirements for listing an app on GitHub Marketplace vary according to whether you want to offer a free or a paid app.

## Requirements for all GitHub Marketplace listings

All listings on GitHub Marketplace should be for tools that provide value to the GitHub community. When you submit your listing for publication, you must read and accept the terms of the "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-marketplace-developer-agreement)."

### User experience requirements for all apps

All listings should meet the following requirements, regardless of whether they are for a free or paid app.

- Listings must not actively persuade users away from GitHub.
- Listings must include valid contact information for the publisher.
- Listings must have a relevant description of the application.
- Listings must specify a pricing plan.
- Apps must provide value to customers and integrate with the platform in some way beyond authentication.
- Apps must be publicly available in GitHub Marketplace and cannot be in beta or available by invite only.
- Apps must have webhook events set up to notify the publisher of any plan changes or cancellations using the GitHub Marketplace API. For more information, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app)."

For more information on providing a good customer experience, see "[AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/customer-experience-best-practices-for-apps)."

### Brand and listing requirements for all apps

- Apps that use GitHub logos must follow the GitHub guidelines. For more information, see "[GitHub Logos and Usage](https://github.com/logos)."
- Apps must have a logo, feature card, and screenshots images that meet the recommendations provided in "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app)."
- Listings must include descriptions that are well written and free of grammatical errors. For guidance in writing your listing, see "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app)."

To protect your customers, we recommend that you also follow security best practices. For more information, see "[AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/security-best-practices-for-apps-on-github-marketplace)."

## Considerations for free apps

Free apps are encouraged in GitHub Marketplace and are a great way to offer open source services. If you list a paid version of your app outside of GitHub Marketplace, you must offer at least one paid plan when listing the app in GitHub Marketplace.

## Requirements for paid apps

To publish a paid plan for your app on GitHub Marketplace, your app must be owned by an organization that is a verified publisher. For more information about the verification process or transferring ownership of your app, see "[AUTOTITLE](/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization)."

If your app is already published and you're a verified publisher, then you can publish a new paid plan from the pricing plan editor. For more information, see "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing)."

To publish a paid app (or an app that offers a paid plan), you must also meet the following requirements:

- GitHub Apps should have a minimum of 100 installations.
- OAuth apps should have a minimum of 200 users.
- All paid apps must handle GitHub Marketplace purchase events for new purchases, upgrades, downgrades, cancellations, and free trials. For more information, see "[Billing requirements for paid apps](#billing-requirements-for-paid-apps)" below.

When you are ready to publish the app on GitHub Marketplace you must request verification for the app listing.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you want to sell an app that's owned by your personal account, first you'll need to transfer the app to an organization, and then request verification for a listing created by the organization. For information on how to transfer an app to an organization, see: "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)."

</div>

## Billing requirements for paid apps

Your app does not need to handle payments but does need to use GitHub Marketplace purchase events to manage new purchases, upgrades, downgrades, cancellations, and free trials. For information about how integrate these events into your app, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app)."

Using GitHub's billing API allows customers to purchase an app without leaving GitHub and to pay for the service with the payment method already attached to their account on GitHub.com.

- Apps must support both monthly and annual billing for paid subscriptions purchases.
- Listings may offer any combination of free and paid plans. Free plans are optional but encouraged. For more information, see "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing)."
