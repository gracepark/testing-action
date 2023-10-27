# Working with support for GitHub Codespaces

Tips on getting the best help from support for GitHub Codespaces.

Before support can help you with problems with codespaces, you need to know the permanent name of the codespace and its codespaces ID (identifier). In addition, support may ask you to share some logs with them. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)" and "[AUTOTITLE](/support/learning-about-github-support/about-github-support)."

## Codespace names

Each codespace has a unique name that is a combination of your GitHub handle, two or three automatically generated words, and some random characters. For example: `octocat-literate-space-parakeet-mld5`. The two or three automatically generated words also form the initial display name of your codespace, in this case, `literate-space-parakeet`. You can change the display name for a codespace, but this will not affect the permanent name. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/renaming-a-codespace)."

To find the name of a codespace:

- Open the codespace in the browser. The subdomain of the URL is the name of the codespace. For example: `https://octocat-literate-space-parakeet-mld5.github.dev` is the URL for the `octocat-literate-space-parakeet-mld5` codespace.
- If you cannot open a codespace, you can access the name in GitHub on https://github.com/codespaces. The name is shown in a pop-up when you hover over the display name of a codespace on https://github.com/codespaces.

  ![Screenshot of the mouse pointer positioned over a display name and the related codespace name shown at the bottom of the browser page.](/assets/images/help/codespaces/find-codespace-name-github.png)

The name the codespace is also included in many of the log files. For example, in the codespace logs as the value of `friendlyName`, in the GitHub Codespaces extension log after `making GET request for`, and in the browser console log after `clientUrl`. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)."

## Codespaces IDs

Every codespace also has an ID (identifier). This is not shown by default in Visual Studio Code so you may need to update the settings for the GitHub Codespaces extension before you can access the ID.

1. In Visual Studio Code, browser or desktop, in the Activity Bar on the left, click **Remote Explorer** to show details for the codespace.
   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. If the side bar includes a "Codespace Performance" section, hover over the "Codespace ID" and click the clipboard icon to copy the ID.
1. If the information is not shown, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="Manage" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>, in the bottom-left corner of the Activity Bar, to display the "Settings" tab.
1. Expand **Extensions** and click **GitHub Codespaces** to display the settings for the extension. Then enable **Show Performance Explorer** to display the "Codespace Performance" section in the side bar.

   ![Screenshot of "Show Performance Explorer" selected in VS Code's "Settings" tab and a codespace ID highlighted in the "Remote Explorer" side bar.](/assets/images/help/codespaces/find-codespace-id.png)
