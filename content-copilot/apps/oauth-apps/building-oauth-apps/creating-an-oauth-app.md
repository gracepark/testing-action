# Creating an OAuth app

You can create and register an OAuth app under your personal account or under any organization you have administrative access to. While creating your OAuth app, remember to protect your privacy by only using information you consider public.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Consider building a GitHub App instead of an OAuth app.

Both OAuth apps and GitHub Apps use OAuth 2.0.

OAuth apps can only act on behalf of a user while GitHub Apps can either act on behalf of a user or independently of a user.

GitHub Apps use fine-grained permissions, give the user more control over which repositories the app can access, and use short-lived tokens.

For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

</div>

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

  **Note:** A user or organization can own up to 100 OAuth apps.

</div>

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Developer settings**.
1. In the left sidebar, click **OAuth apps**.
1. Click **New OAuth App**.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** If you haven't created an app before, this button will say, **Register a new application**.

   </div>
1. In "Application name", type the name of your app.

   <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

   **Warning:**  Only use information in your OAuth app that you consider public. Avoid using sensitive data, such as internal URLs, when creating an OAuth app.

   </div>

1. In "Homepage URL", type the full URL to your app's website.
1. Optionally, in "Application description", type a description of your app that users will see.
1. In "Authorization callback URL", type the callback URL of your app.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** OAuth apps cannot have multiple callback URLs, unlike GitHub Apps.

   </div>

1. Click **Register application**.

## Further reading

- "[AUTOTITLE](/apps/oauth-apps/maintaining-oauth-apps/modifying-an-oauth-app)"
