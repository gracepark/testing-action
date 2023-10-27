# GitHub Codespaces logs

Overview of the logs used by GitHub Codespaces.

<div class="ghd-tool jetbrains_beta">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Using GitHub Codespaces with JetBrains IDEs is currently in public beta and is subject to change.

</div>

</div>

Information on GitHub Codespaces is output to various logs:

<div class="ghd-tool webui">

- Codespace logs
- Creation logs
- Browser console logs (for the VS Code web client)

Extension logs are available if you are using GitHub Codespaces in VS Code. Click the "Visual Studio Code" tab above for details.

</div>

<div class="ghd-tool vscode">

- Codespace logs
- Creation logs
- Extension logs (for the VS Code desktop application)

Browser logs are available if you are using GitHub Codespaces in your browser. Click the "Web browser" tab above for details.

</div>

<div class="ghd-tool cli">

- Codespace logs
- Creation logs

Other logs are available if you are using GitHub Codespaces in VS Code or in your web browser. Click the tabs above for details.

</div>

<div class="ghd-tool jetbrains_beta">

- Creation logs

Other logs are available if you are using GitHub Codespaces in VS Code or in your web browser. Click the tabs above for details.

</div>

<div class="ghd-tool webui">

## Codespace logs

These logs contain detailed information about the codespace, the container, the session, and the VS Code environment. They are useful for diagnosing connection issues and other unexpected behavior. For example, the codespace freezes but the "Reload Windows" option unfreezes it for a few minutes, or you are randomly disconnected from the codespace but able to reconnect immediately.

1. If you are using GitHub Codespaces in the browser, ensure that you are connected to the codespace you want to debug.
1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `export logs`. Select **Codespaces: Export Logs** from the list to download the logs.
1. Define where to save the zip archive of logs then click **Save** (desktop) or click **OK** (web).
1. If you are using GitHub Codespaces in the browser, right-click on the zip archive of logs from the Explorer view and select **Download…** to download them to your local machine.

</div>

<div class="ghd-tool vscode">

## Codespace logs

These logs contain detailed information about the codespace, the container, the session, and the VS Code environment. They are useful for diagnosing connection issues and other unexpected behavior. For example, the codespace freezes but the "Reload Windows" option unfreezes it for a few minutes, or you are randomly disconnected from the codespace but able to reconnect immediately.

1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `export log`. Select **Codespaces: Export Logs** from the list to download the logs.
1. Define where to save the zip archive of logs then click **Save** (desktop) or click **OK** (web).

</div>

<div class="ghd-tool cli">

## Codespace logs

These logs contain detailed information about the codespace, the container, the session, and the VS Code environment. They are useful for diagnosing connection issues and other unexpected behavior. For example, the codespace freezes but the "Reload Windows" option unfreezes it for a few minutes, or you are randomly disconnected from the codespace but able to reconnect immediately.

Currently you can't use GitHub CLI to access these logs. To access them, open your codespace in VS Code or in a browser.

</div>

## Creation logs

These logs contain information about the container, dev container, and their configuration. They are useful for debugging configuration and setup problems.

<div class="ghd-tool webui">

1. Connect to the codespace you want to debug.
1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `creation log`. Select **Codespaces: View Creation Log** from the list to open the `creation.log` file.

If you want to share the log with support, you can copy the text from the creation log into a text editor and save the file locally.

</div>

<div class="ghd-tool vscode">

Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `creation log`. Select **Codespaces: View Creation Log** from the list to open the `creation.log` file.

If you want to share the log with support, you can copy the text from the creation log into a text editor and save the file locally.

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

To see the creation log use the `gh codespace logs` subcommand. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace logs
```

For more information about this command, see [the GitHub CLI manual](https://cli.github.com/manual/gh_codespace_logs).

If you want to share the log with support, you can save the output to a file:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

</div>

<div class="ghd-tool vscode">

## Extension logs

These logs are available for VS Code desktop users only. They are useful if it seems like the GitHub Codespaces extension or VS Code editor are having issues that prevent creation or connection.

1. In VS Code, open the Command Palette.
1. Type `logs` and select **Developer: Open Extension Logs Folder** from the list to open the extension log folder in your system's file explorer.

From this view, you can access logs generated by the various extensions that you use in VS Code. You will see logs for GitHub Codespaces, GitHub Authentication, and Git, in addition to any other extensions you have enabled.

</div>

<div class="ghd-tool webui">

## Browser console logs

These logs are useful only if you want to debug problems with using GitHub Codespaces in the browser. They are useful for debugging problems creating and connecting to GitHub Codespaces.

The following instructions are for Chrome. The steps for other browsers are similar.

1. In the browser window for the codespace you want to debug, open the developer tools window.
1. Display the "Console" tab and click **errors** in the left side bar to show only the errors.
1. In the log area on the right, right-click and select **Save as** to save a copy of the errors to your local machine.

   ![Screenshot of the developer tools panel in the Chrome browser. The right-click menu is displayed, showing the option "Save as."](/assets/images/help/codespaces/browser-console-log-save.png)

</div>

<div class="ghd-tool jetbrains_beta">

1. In the JetBrains client, click the GitHub Codespaces plugin to display the GitHub Codespaces tool window.

   ![Screenshot of the GitHub Codespaces tool window. The "GitHub Codespaces" tool window selector is highlighted with an orange outline.](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)
1. In the GitHub Codespaces tool window, click the log icon.

   ![Screenshot of the log button (a book symbol).](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## JetBrains logs

You can download logs for the remote JetBrains IDE and the local client application by going to the **Help** menu in the JetBrains client application and clicking **Collect Host and Client Logs**.

</div>

## Further reading

- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)"
- "[AUTOTITLE](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)"
