# Types of webhooks

You can create webhooks to subscribe to events that occur in a specific repository, organization,  GitHub Marketplace account,  GitHub Sponsors account,  or GitHub App.

## About webhook types

A webhook can only access events that are available in the repository, organization,  GitHub Marketplace account,  GitHub Sponsors account,  or GitHub App where it is installed.

You cannot create webhooks for individual user accounts, or for events that are specific to user resources, like personal notifications or mentions.

To create and manage webhooks, you must own or have admin access to the resource where the webhook is created and listening for events on. For example, to manage webhooks in an organization, you need admin permissions for that organization.

Some webhook events are unique to certain types of webhooks. For example, an organization webhook can subscribe to events that only occur at the organization level, which a repository webhook cannot subscribe to. For more information about the specific availability of each webhook, see "[AUTOTITLE](/webhooks/webhook-events-and-payloads)."

For more information, see "[AUTOTITLE](/webhooks/about-webhooks)."

## Repository webhooks

You can create webhooks in a repository to subscribe to events that occur in that repository. You must be a repository owner or have admin access in the repository to create and manage webhooks in a repository. You cannot create, edit, or delete webhooks in a repository where you do not have the required permissions.

You can create multiple webhooks in a single repository. However, you can only create up to 20 webhooks that subscribe to each individual event type. For example, in a single repository you could only create up to 20 different webhooks that each subscribe to the `push` event.

You can use the GitHub web interface or the REST API to manage repository webhooks. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-a-repository-webhook)," "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-a-repository-webhook)," and "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-a-repository-webhook)." For more information about using the REST API to manage repository webhooks, see "[AUTOTITLE](/rest/webhooks)."

## Organization webhooks

You can create webhooks in an organization to subscribe to events that occur in that organization. Organization webhooks can subscribe to events that happen in all repositories owned by the organization. They can also subscribe to events that happen at the organization level that are outside of any particular repository, like when a new member is added to the organization.

You must be an organization owner to create and manage webhooks in an organization.

You can create multiple webhooks in a single organization. However, you can only create up to 20 webhooks that subscribe to each individual event type. For example, in a single organization you could only create up to 20 different webhooks that each subscribe to the `push` event.

You can use the GitHub web interface or the REST API to manage organization webhooks. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-an-organization-webhook)," "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-an-organization-webhook)," and "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-an-organization-webhook)." For more information about using the REST API to manage organization webhooks, see "[AUTOTITLE](/rest/orgs/webhooks)."

## GitHub Marketplace webhooks

You can create a webhook to subscribe to events relating to an app that you published in GitHub Marketplace. You can only create one webhook for each app in GitHub Marketplace. Only the owner of the app, or an app manager for the organization that owns the app, can create and manage a GitHub Marketplace webhook.

A GitHub Marketplace webhook cannot be deleted, but you can deactivate it to stop receiving webhook deliveries.

You can use the GitHub web interface to manage a GitHub Marketplace webhook. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-a-github-marketplace-webhook)," "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-a-github-marketplace-webhook)," and "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-a-github-marketplace-webhook)."

## GitHub Sponsors webhooks

You can create webhooks to subscribe to events relating to GitHub Sponsors. You can only create up to 20 webhooks for a GitHub Sponsors account.

You must be an account owner or have admin access in the sponsored account to manage sponsorship webhooks.

You can use the GitHub web interface to manage GitHub Sponsors webhooks. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-a-github-sponsors-webhook)," "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-a-github-sponsors-webhook)," and "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-a-github-sponsors-webhook)."

## GitHub App webhooks

You can configure a GitHub App to receive webhooks when specific events occur in a repository or organization that the app has been granted access to.

Each GitHub App has a single webhook that is automatically created by GitHub. By default, the webhook is not subscribed to any events. You can configure the events that the webhook subscribes to. A GitHub App webhook cannot be deleted, but you can deactivate it to stop receiving webhook deliveries.

You can use the GitHub web interface or the REST API to manage a GitHub App webhook. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-webhooks-for-a-github-app)," "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-webhooks-for-a-github-app)," and "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-webhooks-for-a-github-app)." For more information about using the REST API to manage GitHub App webhooks, see "[AUTOTITLE](/rest/apps/webhooks)."
