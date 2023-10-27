# About writing code for a GitHub App

You need to write code to add functionality to your GitHub App.

## Prerequisites

Before you write code for a GitHub App, you should register a GitHub App. When you register a GitHub App, you select permissions for the app. These permissions dictate what the GitHub App can do. When you register an app, you also specify other settings, including which webhook events your GitHub App should receive. You can always change the settings for your GitHub App registration. For more information, see "[AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)" and "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."

If you want your GitHub App to access repository and/or organization data, you need to install your GitHub App. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app)."

## Writing code for a GitHub App

In order for your GitHub App to do something, you need to write code to add functionality to your GitHub App.

For tutorials about how to write code for a GitHub App, see:

- "[AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/quickstart)"
- "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)"
- "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)"
- "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-cli-with-a-github-app)"

You can use the credentials from your GitHub App registration to make authenticated requests to GitHub's APIs. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

During development, you will likely use your personal computer or codespace to run your GitHub App. You may need to make some modifications to your GitHub App registration during development:

- If your app receives webhooks, you may want to use a webhook proxy URL to forward webhooks from GitHub to your computer or codespace. You will need to update the "Webhook URL" setting in your GitHub App registration to use your webhook proxy URL. For an example, see "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

- If your app uses the web application flow to authorize a user, you may want to update the "Callback URL" setting in your GitHub App registration to use a local callback URL. For an example, see "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)."

## Next steps

Once you write the code for your GitHub App, you should ensure that it follows best practices. If necessary, remember to update your GitHub App registration. If your GitHub App needs to run on a server instead of a user's device, deploy your app to your server. Finally, you can share your GitHub App with other users and organizations.

### Follow best practices

Before deploying your GitHub App, make sure you follow best practices. For example, make sure that your GitHub App's credentials are secure. For more information, see "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)."

### Update your GitHub App registration

If you changed the GitHub App registration for development, make sure you update the registration to use production-ready values. For example, if you used a webhook proxy URL for development, you should update the "Webhook URL" field to use the URL where you want your GitHub App to receive webhooks during production.

### Deploy your GitHub App

Once you have written the code for your GitHub App, your code needs to run somewhere. If your app is a website or web app, you might host your app on a server like [Azure App Service](https://azure.microsoft.com/products/app-service/). If your app is a client-side app, it might run on a user's device.

### Share your GitHub App

If you want to share your GitHub App with other users and organizations, you should make your GitHub App public. To make your GitHub App more discoverable, you can list it on GitHub Marketplace. For more information, see "[AUTOTITLE](/apps/sharing-github-apps/sharing-your-github-app)."
