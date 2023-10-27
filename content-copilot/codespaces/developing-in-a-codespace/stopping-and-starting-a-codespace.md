# Stopping and starting a codespace

You can stop and start your codespace to save resources and to pause work.

<div class="ghd-tool jetbrains_beta">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Using GitHub Codespaces with JetBrains IDEs is currently in public beta and is subject to change.

</div>

</div>

## About stopping and starting a codespace

You can stop a codespace at any time. When you stop a codespace, any running processes are stopped. Any saved changes in your codespace will still be available when you next start it. The terminal history is preserved, but the visible contents of the terminal window are not preserved between codespace sessions.

If you do not explicitly stop a codespace, it will continue to run until it times out from inactivity. Closing a codespace does not stop the codespace. For example, if you're using a codespace in the VS Code web client and you close the browser tab, the codespace remains running on the remote machine. For information about timeouts, see "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle#timeouts-for-github-codespaces)."

Only running codespaces incur CPU charges. A stopped codespace incurs only storage costs.

You may want to stop and restart a codespace to apply changes to it. For example, if you change the machine type used for your codespace, you will need to stop and restart it for the change to take effect. You can also stop your codespace and choose to restart or delete it if you encounter an error or something unexpected.

Regardless of where you created or access your codespaces, you can view and manage them in your browser at https://github.com/codespaces.

## Stopping a codespace

<div class="ghd-tool webui">

1. Navigate to the "Your Codespaces" page at [https://github.com/codespaces](https://github.com/codespaces).
 1. To the right of the codespace you want to stop, click the ellipsis (**...**).
 1. Click **Stop codespace**.

   ![Screenshot of a list of codespaces with the dropdown menu for one of them displayed, showing the "Stop codespace" option.](/assets/images/help/codespaces/stop-codespace-webui.png)

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

To stop a codespace use the `gh codespace stop` subcommand and then choose the codespace you want to stop from the list that's displayed.

```shell copy
gh codespace stop
```

</div>

<div class="ghd-tool vscode">

 1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)).
1. Type `stop` and select **Codespaces: Stop Codespace** from the list of options.
1. In the list of codespaces, select the codespace you want to stop.

</div>

<div class="ghd-tool jetbrains_beta">

You can stop a codespace from the "Your codespaces" page (see [the web browser instructions](/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)) or by using GitHub CLI (see [the CLI instructions](/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)).

</div>

## Restarting a codespace

<div class="ghd-tool webui">

1. Navigate to the "Your Codespaces" page at [https://github.com/codespaces](https://github.com/codespaces).
1. Click the name of the codespace you want to restart.

   ![Screenshot of a list of two codespaces on GitHub. The names of the codespaces are highlighted with dark orange outlines.](/assets/images/help/codespaces/restart-codespace-webui.png)

</div>

<div class="ghd-tool cli">

When you restart a codespace you can choose to open it in Visual Studio Code or in your browser.

- To restart a codespace and open it in Visual Studio Code, use the `gh codespace code` subcommand and then choose the codespace you want to restart from the list that's displayed.

  ```shell copy
  gh codespace code
  ```

- To restart a codespace and open it in your browser, use the `gh codespace open --web` subcommand and then choose the codespace you want to restart from the list that's displayed.

  ```shell copy
  gh codespace open --web
  ```

</div>

<div class="ghd-tool vscode">

 1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)).
1. Type `connect` and select **Codespaces: Connect to Codespace** from the list of options.
1. In the list of codespaces, select the codespace you want to restart.

</div>

<div class="ghd-tool jetbrains_beta">

If you have set the JetBrains Gateway as your default editor, then the Gateway will launch automatically when you open a codespace from GitHub.com.

If the JetBrains Gateway is not your default editor, you can still open a codespace in JetBrains by going to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces) and clicking the ellipsis (...) to the right of the codespace you want to open. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=webui)."

Alternatively, you can also open the JetBrains Gateway and select an existing codespace, as described in the following procedure.

1. Open the JetBrains Gateway application.
1. Click **Connect to Codespaces**.

   ![Screenshot of the JetBrains Gateway home page, showing the "Connect to Codespaces" button.](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. The first time you connect, you're prompted to choose whether you want to allow GitHub to collect anonymized usage data, to improve functionality and user experience. Click **Allow** or **Deny**.

   You can change your choice later, if required, in the settings for the GitHub Codespaces plugin, which you can access within the JetBrains Gateway settings.

1. In the "Your Codespaces" list, click the codespace you want to work in.

   ![Screenshot of the "Your Codespaces" list in the JetBrains Gateway.](/assets/images/help/codespaces/jetbrains-gateway-codespaces.png)

1. In the "Available IDEs" list, click the JetBrains IDE you want to use. The Gateway will remember your choice the next time you connect to a codespace.

   ![Screenshot the "Select IDE" dropdown list in the JetBrains Gateway. The mouse pointer is pointing to "IntelliJ IDEA."](/assets/images/help/codespaces/jetbrains-gateway-ides.png)

1. Click **Connect**.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Notes**:

   - If you chose Rider as your JetBrains IDE and the repository contains multiple solution files, the "Set Solution Path" dialog is displayed prompting you to choose which solution you want to work in. Choose a solution file from the dropdown menu and click **OK**.

     If the repository doesn't have a solution file, Rider opens in a basic project directory view and will have limited capabilities. For instance, you won't get .NET-specific code navigation. If there is just a single solution file in the repository it will be used automatically, without the prompt being displayed. For more information, see "[Create and open projects and solutions](https://www.jetbrains.com/help/rider/Creating_and_Opening_Projects_and_Solutions.html)" in the JetBrains documentation.<br><br>

   - If you are running a firewall, then the first time you connect to a remote resource you may be prompted to allow the JetBrains Gateway to communicate across your network.

   </div>

</div>

## Further reading

- "[AUTOTITLE](/codespaces/getting-started/understanding-the-codespace-lifecycle)"
