# Viewing logs for GitHub Copilot in your environment

View logs to troubleshoot GitHub Copilot-related errors in your IDE.

GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

<div class="ghd-tool jetbrains">

## Collecting log files

The location of the log files depends on the JetBrains IDE you are using. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment?tool=jetbrains)."

These steps describe how to view and collect the log files for the following JetBrains IDEs:

- IntelliJ IDEA
- Android Studio
- GoLand
- PhpStorm
- PyCharm
- RubyMine
- WebStorm

The GitHub Copilot extension logs to the IDEA log location for IntelliJ plugins.
1. In your JetBrains IDE, open the **Help** menu.
1. Go to **Show Log in Finder**.
1. Open the `idea.log` in your preferred editor and look for any errors related to GitHub or GitHub Copilot.

For more information, see the [Locating IDE log files](https://intellij-support.jetbrains.com/hc/en-us/articles/207241085-Locating-IDE-log-files) in the IntelliJ documentation.

### Collect log files from Rider

1. In Rider, open the **Help** menu.
1. Go to **Diagnostic Tools**.
1. Go to **Show Log in**.
1. Open the `idea.log` in your preferred editor and look for any errors related to GitHub or GitHub Copilot.

## Enabling debug mode

If you find the log file doesn't contain enough information to resolve an issue, it may help to temporarily enable debug logging. This can be especially helpful for debugging network-related issues.

1. In the menu bar, click **Help**, select **Diagnostic Tools**, and click **Debug Log Settings...**.

   ![Screenshot of the menu bar in a JetBrains IDE. The "Help" menu and "Diagnostic Tools" submenu are expanded, and the "Debug Log Settings" option is highlighted in blue.](/assets/images/help/copilot/jetbrains-debug-log.png)

1. In the "Custom Debug Log Configuration" window, add a new line with the following content, then click **OK**.

   ```text copy
   #com.github.copilot:trace
   ```

1. Keep using your IDE until you encounter the issue again, then collect the log file as described in "[Collecting log files](#collecting-log-files)."
1. When you have the information you need, disable debug mode by removing `#com.github.copilot:trace` from the "Custom Debug Log Configuration" window.

</div>

<div class="ghd-tool visualstudio">

## Viewing logs in Visual Studio

The log files for the GitHub Copilot extension are stored in the standard log location for Visual Studio extensions.
1. Open the the **View** menu in Visual Studio.
1. Click **Output**.
1. On the right of the Output view pane, select **GitHub Copilot** from the dropdown menu.

## Further reading

- "[Log all activity to the log file for troubleshooting](https://learn.microsoft.com/en-us/visualstudio/ide/reference/log-devenv-exe?view=vs-2022)" in the Visual Studio documentation

</div>

<div class="ghd-tool vscode">

## Viewing and collecting log files

The log files for the GitHub Copilot extension are stored in the standard log location for Visual Studio Code extensions. The log files are useful for diagnosing connection issues.
1. Open the **View** menu in Visual Studio Code.
1. Click **Output**.
1. On the right of the Output view pane, select **GitHub Copilot** from the dropdown menu.

Alternatively, you can open the log folder for Visual Studio Code extensions in your system's file explorer. This is useful if you need to forward the log files to the support team.

1. Open the VS Code Command Palette
   - For Mac:
      - Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   - For Windows or Linux:
      - Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Logs", and then select **Developer: Open Extension Logs Folder** from the list.

## Viewing network connectivity diagnostics logs

If you encounter problems connecting to GitHub Copilot due to network restrictions, firewalls, or your proxy setup, use the following troubleshooting steps.

1. Open the VS Code Command Palette
   - For Mac:
      - Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   - For Windows or Linux:
      - Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Diagnostics", and then select **GitHub Copilot: Collect Diagnostics** from the list. This opens a new editor with the relevant information that you can inspect yourself or share with the support team.
1. Check the section on **Reachability** to determine if GitHub Copilot can actually access the necessary services.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If your error is related to certificates, it helps to check these logs for the `Custom Certificates:` line. If this line says `disabled`, you are not using GitHub Copilot for Business, so custom certificates are not supported. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-business)."

</div>

## Enabling debug mode

If you find the log file doesn't contain enough information to resolve an issue, it may help to temporarily enable debug logging. This can be especially helpful for debugging network-related issues.

1. Open the VS Code Command Palette by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type `settings`, then click **Preferences: Open User Settings (JSON)**.
1. In the JSON object, insert the following content as a top-level property, then save the file.

   ```json copy
   "github.copilot.advanced": {
      "debug.overrideLogLevels": {
         "*": "DEBUG"
      }
   },
   ```

1. Keep using your IDE until you encounter the issue again, then collect the log file as described in "[Viewing and collecting log files](#viewing-and-collecting-log-files)."
1. When you have the information you need, disable debug mode by removing the content you added to your settings.

## Viewing Electron logs

In rare cases, errors might not be propagated to the corresponding error handlers and are not logged in the regular locations. If you encounter errors and there is nothing in the logs, you may try to see the logs from the process running VS Code and the extension.

1. Open the VS Code Command Palette
   - For Mac:
      - Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   - For Windows or Linux:
      - Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Toggle", and then select **Developer: Toggle Developer Tools** from the list.
1. In the Developer Tools window, select the **Console** tab to see any errors or warnings.

   ![Screenshot of the Developer Tools window in Visual Studio Code. The console tab is outlined in dark orange.](/assets/images/help/copilot/vsc-electron-logs.png)

## Further reading

- "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot)"
- "[Network Connections in Visual Studio Code](https://code.visualstudio.com/docs/setup/network)" in the Visual Studio Code documentation

</div>

<div class="ghd-tool vimneovim">

## Checking if GitHub Copilot is operational

To check if GitHub Copilot is operational, run the following command in Vim/Neovim:

    :Copilot status

</div>
