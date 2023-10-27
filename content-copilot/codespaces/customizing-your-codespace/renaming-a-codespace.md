# Renaming a codespace

You can change the codespace display name to one of your choice through GitHub.com or the GitHub CLI.

## About renaming a codespace

When you create a codespace it's assigned an auto-generated display name. If you have multiple codespaces, the display name helps you to differentiate between codespaces. For example: `literate space parakeet`. You can change the display name for your codespace.

To find the display name of a codespace:

- On GitHub, view your list of codespaces at https://github.com/codespaces.

   ![Screenshot of a list of three codespaces on the https://github.com/codespaces page."](/assets/images/help/codespaces/your-codespaces-list.png)

- In the Visual Studio Code desktop application, or the VS Code web client, click the Remote Explorer. The display name is the second item in the list. For example: `psychic chainsaw` in the screenshot below.

  ![Screenshot of the "Remote Explorer" in VS Code. The codespace display name, "psychic chainsaw," is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-remote-explorer.png)

  <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
  
  **Note**: If the Remote Explorer is not displayed in the Activity Bar:
  
  1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
  1. Type: `details`.
  1. Click **Codespaces: Details**.
  
  </div>
- In a terminal window on your local machine, use this GitHub CLI command: `gh codespace list`.

### Permanent codespace names

In addition to the display name, when you create a codespace, a permanent name is also assigned to the codespace. The name is a combination of your GitHub handle, and the auto-generated display name. For example: `octocat-literate-space-parakeet-mld5`. You can't change the permanent name.

To find the permanent name of a codespace:

- On GitHub, the permanent name is shown in a pop-up when you hover over the display name of a codespace on https://github.com/codespaces.

   ![Screenshot of the mouse pointer positioned over a display name, with the corresponding codespace name shown at the bottom of the browser page.](/assets/images/help/codespaces/find-codespace-name-github.png)

- In a codespace, use this command in the terminal: `echo $CODESPACE_NAME`.
- In a terminal window on your local machine, use this GitHub CLI command: `gh codespace list`.

## Renaming a codespace

Changing the display name of a codespace can be useful if you have multiple codespaces that you will be using for an extended period. An appropriate name helps you identify a codespace that you use for a particular purpose.

<div class="ghd-tool cli">

If you have installed GitHub CLI, you can use it to work with GitHub Codespaces. For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).

To change the display name of a codespace, use the `gh codespace edit` subcommand:

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

In this example, replace `PERMANENT-CODESPACE-NAME` with the permanent name of the codespace whose display name you want to change. Replace `NEW-DISPLAY-NAME` with the display name you want to use for this codespace.

For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-with-github-cli#rename-a-codespace)."

</div>

<div class="ghd-tool webui">

You can change the display name for your codespace on GitHub.com.

1. Navigate to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).

    The current display name for each of your codespaces is displayed.

1. Click the ellipsis (**...**) to the right of the codespace you want to modify.
1. Click **Rename**.

1. In the prompt, under "Change display name to..." type your desired display name and click **OK**.

</div>
