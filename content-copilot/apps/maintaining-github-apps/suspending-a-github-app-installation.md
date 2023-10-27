# Suspending a GitHub App installation

You can temporarily block your GitHub App from accessing resources owned by the accounts that installed the GitHub App.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: If you want to suspend a GitHub App that you use but do not own, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access)" instead.

</div>

When a GitHub App is suspended for an installation, the GitHub App cannot access resources owned by that installation account. For example, you might want to suspend your GitHub App if you are worried that your app's credentials were leaked.

The owner of a GitHub App can suspend the GitHub App for a specific installation. If an organization has designated any app managers for an app owned by the organization, the app managers can also suspend the GitHub App for a specific installation. GitHub App owners and managers can only use the API to suspend their app, and they must suspend the app individually for each installation. For more information, see "[AUTOTITLE](/rest/apps/apps#suspend-an-app-installation)."

Users who installed a GitHub App on their personal account or organization can also suspend a GitHub App from accessing resources owned by their account. People who have installed a GitHub App can only use the GitHub web interface to suspend their app. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)."

A GitHub App must be unsuspended in the same way it was suspended. If an owner or manager of a GitHub App suspended the app, they can also unsuspend it, but the owner of an account where the app is installed cannot unsuspend it. Similarly, if the owner of an account where a GitHub App is installed suspended the app, they can also unsuspend it, but an owner or manager of the app cannot unsuspend it.
