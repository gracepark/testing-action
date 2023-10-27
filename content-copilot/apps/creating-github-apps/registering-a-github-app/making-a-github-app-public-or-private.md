# Making a GitHub App public or private

When registering a GitHub App, you can make it public so that other GitHub users or organizations can install the app, or private so that you can only install it on the account that owns the app.

## About visibility for GitHub Apps

You can make your GitHub App registration public or private. If you set your GitHub App registration to public, any user on GitHub.com or GitHub Enterprise Cloud can install it. If you set your GitHub App registration to private, it can only be installed on the account that owns the app.

You can register a GitHub App under your personal account or organization and make it available for other organizations to install. You do not need an enterprise plan or an organization account to make your GitHub App available to an organization even if the organization is owned by an enterprise on GitHub Enterprise Cloud.

If you want to make your app available to GitHub Enterprise Server instances, then you need to take additional steps. For more information, see "[AUTOTITLE](/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server)."

If it is important for GitHub Enterprise Server users to be able to use your tool, consider using GitHub Actions instead of a GitHub App. Public actions are available on GitHub Enterprise Server instances with GitHub Connect. For more information, see "[AUTOTITLE](/github-ae@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)" and "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

For information about changing the visibility of a GitHub App registration, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."

### Public installation flow

Public GitHub Apps have a landing page with an **Install** button, so that other people can install the app in their repositories. If your GitHub App is public to all users on GitHub.com, you can also choose to publish it to GitHub Marketplace. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)."

### Private installation flow

Private GitHub Apps can only be installed on the user or organization account of the app owner. Limited information about the app will exist on a landing page for the app, but the **Install** button will only be available to organization owners and app managers for the organization that owns the app, or the personal account if the GitHub App is owned by an individual account.
