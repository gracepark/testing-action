# Configuring a webhook to notify you of plan changes

After [creating a draft GitHub Marketplace listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), you can configure a webhook that notifies you when changes to customer account plans occur. After you configure the webhook, you can [handle the `marketplace_purchase` event types](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) in your app.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This article applies to publishing GitHub Apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

</div>

The GitHub Marketplace event webhook can only be set up from your application's GitHub Marketplace listing page. You can configure all other events from your [application's developer settings page](https://github.com/settings/developers). If you haven't created a GitHub Marketplace listing, read "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/drafting-a-listing-for-your-app)" to learn how.

## Creating a webhook

To create a webhook for your GitHub Marketplace listing, click **Webhook** in the left sidebar of your [GitHub Marketplace listing page](https://github.com/marketplace/manage). You'll see the following webhook configuration options needed to configure your webhook:

### Payload URL

The payload URL is the URL of the server that will receive the webhook `POST` requests.

### Content type

Webhooks can be delivered using different content types:

- The `application/json` content type will deliver the JSON payload directly as the body of the `POST` request.
- The `application/x-www-form-urlencoded` content type will send the JSON payload as a form parameter
  called `payload`.

Choose the one that best fits your needs. GitHub recommends using the `application/json` content type.

### Secret

Setting a webhook secret allows you to ensure that `POST` requests sent to the payload URL are from GitHub. When you set a secret, you'll receive the `X-Hub-Signature` and `X-Hub-Signature-256` headers in the webhook `POST` request. For more information on how to use a secret with a signature header to secure your webhook payloads, see "[AUTOTITLE](/webhooks-and-events/webhooks/securing-your-webhooks)."

### Active

By default, webhook deliveries are "Active." You can choose to disable the delivery of webhook payloads during development by deselecting "Active." If you've disabled webhook deliveries, you will need to select "Active" before you submit your app for review.

## Viewing webhook deliveries

Once you've configured your GitHub Marketplace webhook, you'll be able to inspect `POST` request payloads from the **Webhook** page of your application's [GitHub Marketplace listing](https://github.com/marketplace/manage). GitHub doesn't resend failed delivery attempts. Ensure your app can receive all webhook payloads sent by GitHub.

![Screenshot of the recent webhook deliveries for the GitHub Marketplace listing.](/assets/images/marketplace/marketplace-webhook-deliveries.png)
