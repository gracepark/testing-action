# Using the Visual Studio Code Command Palette in GitHub Codespaces

You can use the Command Palette feature of Visual Studio Code to access many commands in GitHub Codespaces.

## About the Visual Studio Code Command Palette

The VS Code Command Palette is one of the focal features of Visual Studio Code and is available for you to use in GitHub Codespaces. The Command Palette allows you to access many commands for GitHub Codespaces and VS Code. For more information on using the VS Code Command Palette, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the VS Code documentation.

## Accessing the VS Code Command Palette

You can access the VS Code Command Palette in a number of ways.

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).

  Note that this command is a reserved keyboard shortcut in Firefox.
- <kbd>F1</kbd>
- From the Application Menu, click **View > Command Palette**.

## Commands for Codespaces

To see all commands related to GitHub Codespaces, [access the VS Code Command Palette](#accessing-the-vs-code-command-palette), then start typing "Codespaces".

![Screenshot of the Command Palette with "codespaces" entered. The dropdown lists all commands that relate to GitHub Codespaces.](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspending or stopping a codespace

If you add a new secret or change the machine type, you'll have to stop and restart the codespace for it to apply your changes.

To suspend or stop your codespace's container, [access the VS Code Command Palette](#accessing-the-vs-code-command-palette), then start typing "stop". Select **Codespaces: Stop Current Codespace**.

![Screenshot of the Command Palette with the search text "stop" and the option "Codespaces: Stop Current Codespace."](/assets/images/help/codespaces/codespaces-stop.png)

### Adding a predefined dev container configuration

To add a predefined dev container configuration, [access the VS Code Command Palette](#accessing-the-vs-code-command-palette), then start typing "add dev". Click **Codespaces: Add Dev Container Configuration Files**.

![Screenshot of the Command Palette, with "add dev" entered and "Codespaces: Add Dev Container Configuration Files" listed.](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Rebuilding a codespace

If you add a dev container or edit any of the configuration files (`devcontainer.json` and `Dockerfile`), you'll have to rebuild your codespace for it to apply your changes.

To rebuild your container, [access the VS Code Command Palette](#accessing-the-vs-code-command-palette), then start typing "rebuild". Select **Codespaces: Rebuild Container**.

![Screenshot of the Command Palette with the search text "rebuild" and the option "Codespaces: Rebuild Container."](/assets/images/help/codespaces/codespaces-rebuild.png)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You may occasionally want to perform a full rebuild to clear your cache and rebuild your container with fresh images. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/rebuilding-the-container-in-a-codespace#about-rebuilding-a-container)."

</div>

### Codespaces logs

You can use the VS Code Command Palette to access the codespace creation logs, or you can use it export all logs.

To retrieve the logs for GitHub Codespaces, [access the VS Code Command Palette](#accessing-the-vs-code-command-palette), then start typing "export". Select **Codespaces: Export Logs** to export all logs related to GitHub Codespaces or select **Codespaces: View Creation Logs** to view logs related to the setup.

![Screenshot of the Command Palette with the search text "export" and the option "Codespaces: Export Logs."](/assets/images/help/codespaces/codespaces-logs.png)

## Further reading

- "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code)"
