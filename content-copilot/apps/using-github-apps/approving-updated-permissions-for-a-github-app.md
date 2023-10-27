# Approving updated permissions for a GitHub App

When a GitHub App requests additional permissions, you can review what behavior the permissions will enable and decide whether to approve the permissions.

Occasionally, a GitHub App that you have installed will request additional permissions. This may happen if the GitHub App owner wants the app to make additional API requests or respond to additional webhook events. For more information about what different permissions enable a GitHub App to do, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

When a GitHub App requests additional organization or repository permissions, GitHub will notify you if the app is installed on your personal account or on an organization that you own.

You can choose to accept or reject the additional permissions. If you reject the additional permissions, the GitHub App will still retain its current permissions. The GitHub App may not function as expected if you reject the additional permissions.

If the app is authorized but not installed or if the GitHub App only requested additional account permissions, GitHub will not notify you. Instead, the GitHub App will prompt you to reauthorize the app in order to enable the new account permissions. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."
