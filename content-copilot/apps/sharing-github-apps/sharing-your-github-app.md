# Sharing your GitHub App

You can share your GitHub App with other users.

## Sharing your GitHub App on GitHub Marketplace

If your GitHub App is public, you can choose to publish it to GitHub Marketplace. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)."

For more information about how users can install your app from GitHub Marketplace, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations)" and "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account)."

## Sharing your GitHub App via an install link

If your GitHub App is public, other users and organizations can install your app. For more information about making your app public, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/making-a-github-app-public-or-private)."

1. In the upper-right corner of any page on GitHub, click your profile photo.
1. Navigate to your account settings.
   - For a GitHub App owned by a personal account, click **Settings**.
   - For a GitHub App owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Developer settings**.
1. In the left sidebar, click **GitHub Apps**.
1. Next to the GitHub App that you want to share, click **Edit**.
1. Click **Public page**. GitHub will bring you to the public page for your GitHub App.
1. Click **Install**. GitHub will bring you to the installation URL for your GitHub App. The URL will look something like `https://github.com/apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the GitHub App.
1. Share the installation URL with other users. For more information about how users can install your app from this URL, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)."

   When you share the URL, you can include a `state` query parameter in the installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your GitHub App. For example, you could use the `state` to correlate an installation to a user or account.

   To preserve a state, add it to the installation URL: `https://github.com/apps/<app name>/installations/new?state=AB12t`

## Sharing your GitHub App with GitHub Enterprise Server instances

If you want to share your GitHub App with GitHub Enterprise Server instances that you are not part of, you need to take additional steps. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/making-your-github-app-available-for-github-enterprise-server)."
