# Setting your default editor for GitHub Codespaces

You can set your default editor for Codespaces in your personal settings page.

On the settings page, you can set your editor preference so that when you create a codespace, or open an existing codespace, it is opened in your choice of:
- Visual Studio Code (desktop application)
- Visual Studio Code (web client application)
- JetBrains Gateway - for opening codespaces in a JetBrains IDE
- JupyterLab - the web interface for Project Jupyter

When you create a new codespace from a template, it is always opened in the Visual Studio Code web client. You can reopen an existing codespace in any supported editor. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/opening-an-existing-codespace)."

If you want to use Visual Studio Code as your default editor for GitHub Codespaces, you need to install Visual Studio Code and the GitHub Codespaces extension for Visual Studio Code. For more information, see the [download page for Visual Studio Code](https://code.visualstudio.com/download/) and the [GitHub Codespaces extension on the Visual Studio Code marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

If you want to work on a codespace in a JetBrains IDE you must install the JetBrains Gateway. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-your-jetbrains-ide)."

## Setting your default editor

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. Under "Editor preference", select the option you want.

   ![Screenshot of the "Editor preference" options, with "Visual Studio Code for Web" selected.](/assets/images/help/codespaces/select-default-editor.png)

   - If you choose **Visual Studio Code** or **JetBrains Gateway**, you must make sure you have installed the selected application on your local machine.<br><br>

   - If you choose **Visual Studio Code**, GitHub Codespaces will automatically open in the desktop application when you next create or open a codespace.

     You may need to allow access to both your browser and Visual Studio Code for it to open successfully.<br><br>

   - If you choose **JetBrains Gateway**, the Gateway application will automatically open when you next create or open a codespace.

   - If you choose **JetBrains Gateway**, the Gateway application will automatically open when you next create or open a codespace.

     The first time you open a codespace this way you must give permission to open the application.

     The Gateway application will open and the codespace will then be automatically selected. You can then choose a JetBrains IDE, if you have not previously done so, and click **Connect** to open the codespace in the JetBrains client. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-your-jetbrains-ide)."

     To connect to a codespace from the Gateway application, you must have an SSH server running on the codespace.      The codespace you connect to must be running an SSH server. The default container image includes an SSH server, which is started automatically. If your codespaces are not created from the default image, you can install and start an SSH server by adding the following to the `features` object in your `devcontainer.json` file.
     
     ```jsonc
     "features": {
         // ...
         "ghcr.io/devcontainers/features/sshd:1": {
             "version": "latest"
         },
         // ...
     }
     ```

   - If you choose **JupyterLab**, the JupyterLab application must be installed in the codespaces you open. The default container image includes JupyterLab, so codespaces created from the default image will always have JupyterLab installed. For more information about the default image, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration)" and [the `devcontainers/images` repository](https://github.com/devcontainers/images/tree/main/src/universal). If you're not using the default image in your dev container configuration, you can install JupyterLab by adding the `ghcr.io/devcontainers/features/python` feature to your `devcontainer.json` file. You should include the option `"installJupyterlab": true`. For more information, see [the README for the `python` feature](https://github.com/devcontainers/features/tree/main/src/python#python-python), in the `devcontainers/features` repository.
