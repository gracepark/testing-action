# Reviewing and modifying installed GitHub Apps

You can review the permissions and change the repository access for GitHub Apps that you have installed. You can also temporarily or permanently prevent a GitHub App from accessing resources owned by your account or organization.

## About installed GitHub Apps

GitHub users can install GitHub Apps on their personal account or organizations. When you install a GitHub App, you grant the app the organization-level and repository-level permissions that it requested. You also specify which repositories the GitHub App can access.

You should periodically review the GitHub Apps that you have installed. You can review the permissions that you granted and change the repositories that the GitHub App can access. If you no longer use an app, consider suspending or deleting the GitHub App to block its access to resources owned by the account where it is installed.

In addition to reviewing GitHub Apps that you have installed, you can review GitHub Apps that you have authorized to act on your behalf. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)."

## Navigating to the GitHub App you want to review or modify

- For a GitHub App installed on an organization:
   1. In the top right corner of GitHub.com, click your profile photo, then click **Your organizations**.
   1. Next to your organization name, click **Settings**.
   1. In the side bar, under "Third-party Access," click **GitHub Apps**. A list of the GitHub Apps installed on your organization will be displayed.
   1. Next to the GitHub App you want to review or modify, click **Configure**.

- For a GitHub App installed on your personal account:
   1. In the upper-right corner of any page, click your profile photo, then click **Settings**.
   1. Under "Integrations," click **Applications**.
   1. Click **Installed GitHub Apps**. A list of the GitHub Apps installed on your personal account will be displayed.
   1. Next to the GitHub App you want to review or modify, click **Configure**.

- For a repository where a GitHub App was granted access:

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: In the following steps, you will be taken to the account settings for the organization or personal account where the GitHub App is installed. The settings will affect all repositories where the app is installed under that account, not just the repository where you navigated from.

   </div>

   1. Navigate to the main page of the organization or repository.
   1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="The Settings gear" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.
   1. Under "Integrations," click **GitHub Apps**. A list of the GitHub Apps that have been granted access to your repository will be displayed.

   1. Next to the GitHub App you want to review or modify, click **Configure**.

## Reviewing permissions

1. Navigate to the GitHub App you want to modify. For more information, see "[Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify)."
1. Under "Permissions," review the permissions that the GitHub App has. For more information about what different permissions enable a GitHub App to do, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

## Modifying repository access

1. Navigate to the GitHub App you want to modify. For more information, see "[Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify)."
1. Under "Repository access," select **All repositories** or **Only select repositories**.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the GitHub App to access.

   If the GitHub App creates any repositories later, the app will automatically be granted access to those repositories as well.
1. Click **Save**.

## Blocking access

1. Navigate to the GitHub App you want to modify. For more information, see "[Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify)."
1. To keep the GitHub App installed for future use but temporarily block it from accessing resources owned by your account, click **Suspend**.

   When you suspend a GitHub App, your authorization of the app (if the app is installed on your personal account) or the authorization of the app by members of your organization (if the app is installed on an organization) will not be affected. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

   If the GitHub App was previously suspended, you can unsuspend the app by clicking **Unsuspend**. If the GitHub App was suspended by the GitHub App owner, then you cannot unsuspend the app.
1. To uninstall a GitHub App and block it from accessing resources owned by your account, click **Uninstall**.

   When you delete a GitHub App, your authorization of the app (if the app is installed on your personal account) or the authorization of the app by members of your organization (if the app is installed on an organization) will be revoked. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Further reading

- "[AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)"
- "[AUTOTITLE](/apps/using-github-apps/internal-github-apps)"
