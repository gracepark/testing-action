# Opening an existing codespace

You can reopen a codespace that you have closed or stopped and return to your work.

<div class="ghd-tool jetbrains_beta">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Using GitHub Codespaces with JetBrains IDEs is currently in public beta and is subject to change.

</div>

</div>

You can reopen any of your active or stopped codespaces on GitHub.com, in a JetBrains IDE, in Visual Studio Code, or by using GitHub CLI. You can't reopen a codespace that has been deleted. For more information, see "[AUTOTITLE](/codespaces/getting-started/understanding-the-codespace-lifecycle)."

You can view all your codespaces on the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces). From this page, you can:

- Open, stop, or delete your codespaces.
- See who owns (and may be billed for) your codespaces: your personal account, or organizations you belong to. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."
- See the machine type, size, and status of your codespaces.
- Create a new codespace, either by choosing one of GitHub's templates or by clicking **New codespace**. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template)" and "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)."
- Prevent automatic deletion of a codespace. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces?tool=webui#avoiding-automatic-deletion-of-codespaces)."

<div class="ghd-tool webui">

## Resuming a codespace from a repository page

You can quickly resume a codespace when you're viewing a repository on GitHub.com.

1. With the repository displayed on GitHub.com, press <kbd>,</kbd> (the comma key).

   The "Resume codespace" page is displayed. This allows you to resume your most recently used codespace for the currently selected branch of the repository or, if you were viewing a pull request, for the topic branch of the pull request.

   ![Screenshot of the "Resume codespace" page showing the "Resume this codespace" and "Create a new one" buttons.](/assets/images/help/codespaces/resume-codespace.png)

1. Click **Resume this codespace**.

   Alternatively, if you want to create a new codespace for this branch of the repository, click **Create a new one**.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: If you don't have an existing codespace for this branch, the page is titled "Create codespace" and a button labeled **Create a new codespace** is displayed.

   </div>

You can bookmark the address of this page if you want to get back to it quickly to resume your codespace. Alternatively you can use the address in a link to provide other people with a quick way of creating and resuming their own codespaces for this repository.

## Opening an existing codespace from the "Your codespaces" page

1. Navigate to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).
1. To open a codespace in your default editor, click the name of the codespace. You can set your default editor for Codespaces in your personal settings page. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."

   To open the codespace in an editor other than your default:

   1. Click the ellipsis (**...**) to the right of the codespace you want to open.
   1. Click **Open in**.
   1. Click **Open in APPLICATION**.

   ![Screenshot of the "Open in" dialog, with "Open in Visual Studio Code" highlighted.](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   You can open the codespace in:
   - Your browser
   - Visual Studio Code
   - JetBrains Gateway
   - JupyterLab

   If you choose **Visual Studio Code** or **JetBrains Gateway**, you must make sure you have installed the selected application on your local machine.

   If you choose **JupyterLab**, the JupyterLab application must be installed in the codespace. The default container image includes JupyterLab, so codespaces created from the default image will always have JupyterLab installed. For more information about the default image, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration)" and [the `devcontainers/images` repository](https://github.com/devcontainers/images/tree/main/src/universal). If you're not using the default image in your dev container configuration, you can install JupyterLab by adding the `ghcr.io/devcontainers/features/python` feature to your `devcontainer.json` file. You should include the option `"installJupyterlab": true`. For more information, see [the README for the `python` feature](https://github.com/devcontainers/features/tree/main/src/python#python-python), in the `devcontainers/features` repository.

## Linking to an existing codespace

You can create links to your existing codespaces. This is useful if you have a long-lived codespace that you return to frequently. You can save the link in a location of your choice, as an alternative to using the link on https://github.com/codespaces.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can only open your own codespaces. If someone clicks a link to one of your codespaces they will see a 404 error message.

</div>

Create a link using one of the following URL patterns. In these URLs `CODESPACE-NAME` represents the unique name of the codespace, such as `monalisa-project-x-codespace-956j5pp5pjpc79wx`, not the codespace's display name. You can find the name of a codespace by copying the link to the codespace on your https://github.com/codespaces page and extracting the codespace name from the URL.

| **Link opens in** | **Link syntax** |
| --- | --- |
| VS Code web client |  `https://CODESPACE-NAME.github.dev` |
| VS Code web client with a specified workspace |  `https://CODESPACE-NAME.github.dev?folder=/workspaces/PATH/TO/WORKSPACE/DIRECTORY` |
| VS Code desktop application |  `https://github.com/codespaces/CODESPACE-NAME?editor=vscode` |
| JetBrains Gateway |  `https://github.com/codespaces/CODESPACE-NAME?editor=jetbrains` |
| JupyterLab |  `https://github.com/codespaces/CODESPACE-NAME?editor=jupyter` |

</div>

<div class="ghd-tool vscode">

## Reopening an existing codespace

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** To use GitHub Codespaces in VS Code, you need to install the Codespaces extension. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code)."

</div>

1. In the VS Code desktop application, open the Command Palette with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type "Codespaces" and select one of the following commands.
   - To open a codespace in a new window of VS Code, select **Codespaces: Open Codespace in New Window**
   - To open a codespace in the web editor, select **Codespaces: Open in Browser**
1. Click the codespace that you want to open.

   ![Screenshot of the VS Code Command Palette showing a list of codespaces available to connect to.](/assets/images/help/codespaces/open-codespace-from-vscode.png)

You can also access the commands listed above by navigating to the Remote Explorer view in VS Code and right-clicking the codespace that you want to open.

![Screenshot of a codespace selected in the Remote Explorer, with "Open in Browser" highlighted in the right-click menu.](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: If the Remote Explorer is not displayed in the Activity Bar:

1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type: `details`.
1. Click **Codespaces: Details**.

</div>

## Linking to an existing codespace

You can create links to your existing codespaces. This is useful if you have a long-lived codespace that you return to frequently. You can save the link in a location of your choice, as an alternative to using the link on https://github.com/codespaces.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can only open your own codespaces. If someone clicks a link to one of your codespaces they will see a 404 error message.

</div>

Create a link using one of the following URL patterns. In these URLs `CODESPACE-NAME` represents the unique name of the codespace, such as `monalisa-project-x-codespace-956j5pp5pjpc79wx`, not the codespace's display name. You can find the name of a codespace by copying the link to the codespace on your https://github.com/codespaces page and extracting the codespace name from the URL.

| **Link opens in** | **Link syntax** |
| --- | --- |
| VS Code web client |  `https://CODESPACE-NAME.github.dev` |
| VS Code web client with a specified workspace |  `https://CODESPACE-NAME.github.dev?folder=/workspaces/PATH/TO/WORKSPACE/DIRECTORY` |
| VS Code desktop application |  `https://github.com/codespaces/CODESPACE-NAME?editor=vscode` |
| JetBrains Gateway |  `https://github.com/codespaces/CODESPACE-NAME?editor=jetbrains` |
| JupyterLab |  `https://github.com/codespaces/CODESPACE-NAME?editor=jupyter` |

</div>

<div class="ghd-tool cli">

## Reopening an existing codespace

If you have installed GitHub CLI, you can use it to work with GitHub Codespaces. For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).

1. In a terminal, enter one of the following GitHub CLI commands.
   - To open a codespace in VS Code, enter:

     ```shell copy
     gh codespace code
     ```

     <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

     **Note**: You must have VS Code installed on your local machine. For more information, see "[Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)" in the VS Code documentation.

     </div>

   - To open a codespace in the browser, enter:

     ```shell copy
     gh codespace code --web
     ```

   - To open a codespace in JupyterLab, enter:

     ```shell copy
     gh codespace jupyter
     ```

     <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

     **Note**: The JupyterLab application must be installed in the codespace you are opening. The default container image includes JupyterLab, so codespaces created from the default image will always have JupyterLab installed. For more information about the default image, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration)" and [the `devcontainers/images` repository](https://github.com/devcontainers/images/tree/main/src/universal). If you're not using the default image in your dev container configuration, you can install JupyterLab by adding the `ghcr.io/devcontainers/features/python` feature to your `devcontainer.json` file. You should include the option `"installJupyterlab": true`. For more information, see [the README for the `python` feature](https://github.com/devcontainers/features/tree/main/src/python#python-python), in the `devcontainers/features` repository.

     </div>

   - To access a codespace from the command line, over SSH, enter:

     ```shell copy
     gh codespace ssh
     ```

1. Using the arrow keys, navigate to the codespace that you want to open.
1. To open the codespace, press <kbd>Enter</kbd>.

For more information, see [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) in the GitHub CLI manual.

</div>

<div class="ghd-tool jetbrains_beta">

## Reopening an existing codespace

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

- "[AUTOTITLE](/rest/codespaces)" (REST API reference)
