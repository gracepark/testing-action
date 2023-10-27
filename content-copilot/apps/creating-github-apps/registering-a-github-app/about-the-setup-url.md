# About the setup URL

You can specify a URL that users will be redirected to after they install a GitHub App.

When you register a GitHub App, you can specify a setup URL. When users install your GitHub App, they are redirected to the setup URL. If additional setup is required after installation, you can use this URL to tell users what steps to take next.

If you specify a setup URL, you can also select **Redirect on update** to specify that users should be redirected to the setup URL after they update an installation. An update includes adding or removing access to a repository for an installation.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: When GitHub redirects users to the setup URL, it includes an `installation_id` query parameter. Bad actors can hit this URL with a spoofed `installation_id`. Therefore, you should not rely on the validity of the `installation_id` parameter. Instead, you should generate a user access token for the user who installed the GitHub App and then check that the installation is associated with that user. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

</div>

Although the setup URL is optional during GitHub App registration, it is required if you want to allow users to purchase your app in GitHub Marketplace. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials)."

The setup URL is different from the callback URL. Users are redirected to the setup URL after they install a GitHub App. Users are redirected to the callback URL when they authorize a GitHub App via the web application flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url)."

For more information about registering a GitHub App, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." For more information about modifying a GitHub App registration, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."
