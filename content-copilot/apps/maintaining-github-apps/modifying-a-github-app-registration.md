# Modifying a GitHub App registration

After registering a GitHub App, you can make changes to it.

## About GitHub App modifications

You can modify your GitHub App registration to change any of the settings that were selected when the app was initially registered. For more information about the settings you can select while registering a GitHub App, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

For example, you can change the name and description of your app, the permissions granted to your app, the webhooks your app subscribes to, or the visibility of your app.

You can also choose to test new optional features for your GitHub App. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/activating-optional-features-for-github-apps)."

<a name="navigating-to-your-github-app-settings"></a>

## Navigating to your GitHub App settings

To modify a GitHub App, first navigate to the app settings page.

1. In the upper-right corner of any page on GitHub, click your profile photo.
1. Navigate to your account settings.
   - For a GitHub App owned by a personal account, click **Settings**.
   - For a GitHub App owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Developer settings**.
1. In the left sidebar, click **GitHub Apps**.
1. To the right of the GitHub App you want to modify, click **Edit**.

## Changing the basic information of a GitHub App

You can change the basic information of your GitHub App, like the name of the app, the description of the app, and the homepage URL of the app.

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. Under "Basic information," modify the GitHub App information that you'd like to change.
1. Click **Save changes**.

## Requesting user authorization (OAuth) during installation

You can prompt users to authorize your GitHub App when they install it and generate a user access token. When you request user authorization (OAuth) during installation, you must also provide a callback URL where the user will be redirected after they authorize the installation. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. Under "Identifying and authorizing users," select or deselect **Request user authorization (OAuth) during installation**.
1. Under "Callback URL," enter the full URL to redirect to after a user authorizes the installation.

## Enabling or disabling the device flow

You can use the device flow to authorize users for a headless app like a CLI tool or Git credential manager. For more information about using the device flow with GitHub Apps, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-device-flow-to-generate-a-user-access-token)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. Under "Identifying and authorizing users," select or deselect **Enable Device Flow**.

## Adding or updating a setup URL

You can redirect people to a specific URL after they install your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

If you select **Request user authorization (OAuth) during installation**, you will not be able to enter a setup URL. Users will instead be redirected to the Callback URL as part of the authorization flow, where you can describe additional setup. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/about-the-user-authorization-callback-url)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. Under "Post installation," in the "Setup URL" field, enter the URL where you'd like to redirect users after they install your app.
1. Optionally, if you want to redirect users to the setup URL after they update an installation, select **Redirect on update**. An update includes adding or removing a repository for an installation. If "Setup URL" is blank, this will be ignored.

## Changing the permissions of a GitHub App

You can change the access permissions that are granted to your GitHub App using the following steps.

When you change the **repository** or **organization** permissions of an app, each account where the app is installed will need to approve the new permissions. When you change the **account** permissions of an app, each user that has authorized the app will need to approve the permission changes. In both cases, GitHub will send an email to each organization owner or user, notifying them of the request to update the app's permissions. Updated permissions won't take effect on an installation or user authorization until the new permissions are approved. You can use the [installation webhook](/webhooks-and-events/webhooks/webhook-events-and-payloads?actionType=new_permissions_accepted#installation) to find out when people accept new permissions for your app.

Changing the permissions of an app may also change the webhooks that your app can subscribe to and the actions that your app can take with the API. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. In the GitHub Apps settings sidebar, click **Permissions & events**.
1. Under the sections "Repository permissions," "Organization permissions," and "Account permissions," modify the permissions you'd like to change. For each type of permission, select either "Read-only," "Read and write," or "No access" from the dropdown. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."
1. Optionally, under "Add a note to users," add a note telling your users why you are changing the permissions that your GitHub App requests.
1. Click **Save changes**.

## Activating or deactivating the GitHub App webhook

You can configure your GitHub App to receive webhooks for specific events on GitHub and automatically take action on them. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. Under "Webhook," to enable or disable the webhook, select or deselect **Active**.
1. If you selected **Active** in the previous step, under "Webhook URL," enter the URL that GitHub should send webhook events to.
1. Optionally, if you selected **Active** in the previous step, under "Webhook secret," enter a secret token to secure your webhooks. GitHub highly recommends that you set a webhook secret.

## Changing the webhook event subscriptions of a GitHub App

You can change the webhook events that a GitHub App subscribes to using the following steps.

The specific webhook events that you can select for your GitHub App registration are determined by the type of permissions you selected for your app. You will first need to select the permissions you would like your app to have, and then you can subscribe your app to webhook events that are related to that set of permissions. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. Activate the GitHub App webhook. For more information, see "[Activating or deactivating the GitHub App webhook](/apps/maintaining-github-apps/modifying-a-github-app#activating-or-deactivating-the-github-app-webhook)" in this article.
1. In the GitHub Apps settings sidebar, click **Permissions & events**.
1. Under the sections "Repository permissions," "Organization permissions," and "Account permissions," select the permissions that are required for the events your app will subscribe to. For more information, see "[Changing the permissions of a GitHub App](#changing-the-permissions-of-a-github-app)."
1. Under "Subscribe to Events," select the webhook events you would like your GitHub App to receive.
1. Click **Save changes**.

## Changing the visibility of a GitHub App

You can change the visibility settings of your GitHub App to control who can install it. Public apps cannot be made private if they're installed on other accounts. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private)."

1. Navigate to the settings page for the app you'd like to modify. For more information, see "[Navigating to your GitHub App settings](#navigating-to-your-github-app-settings)" in this article.
1. In the left sidebar, click **Advanced**.
1. Under "Danger zone," depending on the current visibility of your GitHub App, click either **Make public** or **Make private**.
