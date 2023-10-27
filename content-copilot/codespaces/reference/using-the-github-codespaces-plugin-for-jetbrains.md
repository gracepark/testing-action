# Using the GitHub Codespaces plugin for JetBrains

You can use the GitHub Codespaces plugin for the JetBrains client application to find out about your codespace or to stop your codespace when you've finished working.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Using GitHub Codespaces with JetBrains IDEs is currently in public beta and is subject to change.

</div>

## About the GitHub Codespaces plugin

The JetBrains client application is launched when you connect to a codespace from the JetBrains Gateway application. It allows you to use GitHub Codespaces with your favorite JetBrains IDE. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-your-jetbrains-ide)."

The GitHub Codespaces plugin is already installed in the JetBrains client when you connect to a codespace from the JetBrains Gateway. The plugin adds the GitHub Codespaces tool window to the user interface.

Click **GitHub Codespaces** at the bottom left of the JetBrains client's application window to open the GitHub Codespaces tool window.

![Screenshot of the GitHub Codespaces tool window. The "GitHub Codespaces" tool window selector is highlighted with an orange outline.](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Using the GitHub Codespaces tool window

The GitHub Codespaces tool window shows:
- The repository from which you created this codespace.
- The display name of the codespace.
- The current branch.
- The machine specifications.
- The time for which this codespace can remain idle before it is automatically stopped.
- The age of the codespace.
- The period for which a stopped codespace will be retained before it is automatically deleted.

The icons at the top of the GitHub Codespaces tool window provide the following functions.

- **Refresh active codespace**

  ![Screenshot of the GitHub Codespaces tool window. A refresh icon, which refreshes the active code space, is highlighted.](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh.png)

  Refresh the details in the GitHub Codespaces tool window. For example, if you used GitHub CLI to change the display name, you could click this button to show the new name.

- **Manage your codespaces from the web**

  ![Screenshot of the GitHub Codespaces tool window. A world icon, which manages GitHub Codespaces from the web, is highlighted.](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Open your list of codespaces at https://github.com/codespaces.

- **View the codespace creation log**

  ![Screenshot of the GitHub Codespaces tool window. A document icon, which allows you to view a code space creation log, is highlighted.](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Open the codespace creation log in the editor window. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)."
