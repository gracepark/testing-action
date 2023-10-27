# Using GitHub Codespaces in Visual Studio Code

You can develop in your codespace directly in Visual Studio Code by connecting the GitHub Codespaces extension with your account on GitHub.

## About GitHub Codespaces in Visual Studio Code

You can use your local install of Visual Studio Code to create, manage, work in, and delete codespaces. To use GitHub Codespaces in VS Code, you need to install the Codespaces extension. For more information on setting up GitHub Codespaces in VS Code, see "[Prerequisites](#prerequisites)."

By default, if you create a new codespace on GitHub.com, it will open in the browser. If you would prefer to open any new codespaces in VS Code automatically, you can set your default editor to be VS Code. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."

If you prefer to work in the browser, but want to continue using your existing VS Code extensions, themes, and shortcuts, you can turn on Settings Sync. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)."

## Prerequisites

To develop in a codespace directly in VS Code, you must install and sign into the GitHub Codespaces extension with your GitHub credentials. The GitHub Codespaces extension requires VS Code October 2020 Release 1.51 or later.

Use the Visual Studio Code Marketplace to install the [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension. For more information, see [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) in the VS Code documentation.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. Select "GitHub Codespaces" from the dropdown at the top of the "Remote Explorer" side bar, if it is not already selected.
1. Click **Sign in to GitHub**.

   ![Screenshot of the "Remote Explorer" side bar for "GitHub Codespaces" with the "Sign in to GitHub" button displayed.](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. If you are not currently signed in to GitHub you'll be prompted to do so. Go ahead and sign in.
1. When you're prompted to specify what you want to authorize, click the **Authorize** button for "GitHub."
1. If the authorization page is displayed, click **Authorize Visual-Studio-Code**.

## Creating a codespace in VS Code

After you connect your account on GitHub.com to the GitHub Codespaces extension, you can create a new codespace. For more information about the GitHub Codespaces extension, see the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. Hover over the "Remote Explorer" side bar and click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="The plus icon" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>.

   ![Screenshot of the "Remote Explorer" side bar for GitHub Codespaces. The tooltip "Create New Codespace" is displayed beside the plus sign button.](/assets/images/help/codespaces/create-codespace-vscode.png)

1. In the text box, type the name of the repository you want to develop in, then select it.

   ![Screenshot of "octo-org/he" entered into the text box and a list of four repositories that start with this string.](/assets/images/help/codespaces/choose-repository-vscode.png)

   A message is displayed at the right side of subsequent prompts telling you who will pay for the codespace.

   ![Screenshot of a prompt for a branch, with the message "Usage paid for by hubwriter."](/assets/images/help/codespaces/who-will-pay-vscode.png)

1. Click the branch you want to develop on.
1. If prompted to choose a dev container configuration file, choose a file from the list.
1. Click the machine type you want to use.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: Your choice of available machine types may be limited by a number of factors. These can include a policy configured for your organization, or a minimum machine type specification for your repository. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)" and "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/setting-a-minimum-specification-for-codespace-machines)."

   </div>

## Opening a codespace in VS Code

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. Under "GitHub Codespaces", hover over the codespace you want to develop in.
1. Click the connection icon (a plug symbol).

   ![Screenshot of the "Remote Explorer" side bar. The connection icon for a codespace (a plug symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Changing the machine type in VS Code

Typically, you can run your codespace on a choice of remote machine types. These machine types offer a choice of hardware specifications ranging from 2 cores to 32 cores, although the full range of machine types may not always be available. Each machine type has a different level of resources and a different billing tier. For information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

By default the machine type with the lowest valid resources is used when you create a codespace. You can change the machine type of your codespace at any time.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Your choice of available machine types may be limited by a number of factors. These can include a policy configured for your organization, or a minimum machine type specification for your repository. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)" and "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/setting-a-minimum-specification-for-codespace-machines)."

</div>

1. In VS Code, open the Command Palette with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Search for and select "Codespaces: Change Machine Type."

   ![Screenshot of "change machine" entered as a search string and "Codespaces: Change Machine Type" in the dropdown list.](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. If you're not following these instructions within a codespace, click the codespace that you want to change.

   ![Screenshot of a dropdown list of four codespaces.](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

   If you are following these instructions in a codespace, the change will apply to the codespace you're working in.
1. Select the machine type you want to use.
1. If you're changing to a machine type with a different storage capacity, a prompt will appear asking if you would like to continue. Read the prompt and click **Yes** to accept.

If you changed to a virtual machine with a different storage capacity (for example, from 32 GB to 64 GB), your codespace will be unavailable for a short time while the machine type is changed. If the codespace is currently active, it will automatically be stopped. When the change is complete, you'll be able to restart the codespace running on the new machine type.

If you changed to a virtual machine with the same storage capacity, the change will be applied the next time you restart the codespace. An active codespace will not be stopped automatically. For more information on restarting a codespace, see "[AUTOTITLE](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace#restarting-a-codespace)."

## Deleting a codespace in VS Code

You can delete codespaces from within VS Code when you are not currently working in a codespace.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. Under "GitHub Codespaces," right-click the codespace you want to delete.
1. Click **Delete Codespace**.

## Switching to VS Code Insiders in the web client

If you are using the VS Code web client, you can switch to the Insiders version of the application. For more information about this version of VS Code, see [Introducing the Insiders Build](https://code.visualstudio.com/blogs/2016/02/01/introducing_insiders_build) in the VS Code blog.

After you switch versions in a codespace, the web client will continue to use the Insiders version if you stop and restart the codespace. New codespaces that you create and open in the VS Code web client will also use the Insiders version.

1. In bottom left of the browser window that's displaying a codespace, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="Manage" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>**.
1. In the menu, select "Switch to Insiders Version."

   ![Screenshot of the VS Code web client. A gear icon is highlighted with an orange outline. "Switch to Insiders Version" is shown in the menu.](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

1. Click **Reload**.

To switch back to the Stable version of VS Code, repeat the process but choose **Switch to Stable Version**. After you switch back, the codespace will continue to use the Stable version if you stop and restart the codespace. New codespaces that you create and open in the VS Code web client will also use the Stable version.

## Using the Insiders desktop application for Codespaces

To use GitHub Codespaces in the Insiders version of the VS Code desktop application, start or create your codespaces from within the VS Code Insiders application. For more information see "[Creating a codespace in VS Code](#creating-a-codespace-in-vs-code)" and "[Opening a codespace in VS Code](#opening-a-codespace-in-vs-code)" earlier in this article.

## Further reading

- "[AUTOTITLE](/codespaces/reference/using-the-vs-code-command-palette-in-codespaces)"
- "[AUTOTITLE](/codespaces/reference/using-github-copilot-in-github-codespaces)"
