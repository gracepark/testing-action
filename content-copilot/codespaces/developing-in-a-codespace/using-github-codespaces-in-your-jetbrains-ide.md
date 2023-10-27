# Using GitHub Codespaces in your JetBrains IDE

You can use the JetBrains Gateway to connect to your codespace and work in your favorite JetBrains IDE.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Using GitHub Codespaces with JetBrains IDEs is currently in public beta and is subject to change.

</div>

## About Codespaces in JetBrains IDEs

If you use a JetBrains IDE to work on your code, you can take advantage of working in a codespace. You do this by using the JetBrains Gateway application.

After installing the JetBrains Gateway, you can set JetBrains as your default editor and then whenever you open a codespace from GitHub.com the JetBrains Gateway will launch to allow you to choose your JetBrains IDE and connect to the codespace.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Only existing codespaces are available in the JetBrains Gateway. You can create codespaces in GitHub.com, or by using GitHub CLI. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)."

</div>

### The JetBrains remote development connection process

The basic process behind using a codespace in your JetBrains IDE is as follows.

- In the JetBrains Gateway application you select one of your active or stopped codespaces.
- You then choose which JetBrains IDE you want to use.
- The selected JetBrains IDE is then downloaded to the remote virtual machine that hosts your codespace and source code.
- The JetBrains thin client application is then downloaded to your local machine and started.
- The client application connects to the full backend IDE.
- You can work on your code in the client application in just the same way you would in a local environment.

## Prerequisites

To work in a codespace in a JetBrains IDE you need:

- A valid JetBrains license
- The JetBrains Gateway application
- GitHub CLI version 2.18.0 or later
- An existing codespace that's running an SSH server

### JetBrains license

You must have a JetBrains license that supports the IDE you choose in the JetBrains Gateway.

### JetBrains Gateway

You can install and update the JetBrains Gateway from the JetBrains Toolbox application.

1. Download and install the [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app).
1. Open the JetBrains Toolbox.
1. Find **Gateway** in the list of available tools and click **Install**.

   ![Screenshot of the JetBrains Toolbox with "Gateway" at the bottom of the list of applications. Each application has an "Install" button next to it.](/assets/images/help/codespaces/jetbrains-toolbox.png)

### GitHub CLI

The GitHub Codespaces plugin for the JetBrains Gateway requires that you have installed and configured GitHub CLI version 2.18.0 or later before opening a codespace from the JetBrains Gateway.

Use this command to check your version of GitHub CLI:

```shell copy
gh --version
```

For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

### Codespace running an SSH server

You must have an existing codespace to connect to. You can create a codespace on GitHub.com, in Visual Studio Code, or by using GitHub CLI. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)."

The codespace you connect to must be running an SSH server. The default container image includes an SSH server, which is started automatically. If your codespaces are not created from the default image, you can install and start an SSH server by adding the following to the `features` object in your `devcontainer.json` file.

```jsonc
"features": {
    // ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    // ...
}
```

For more information about the `devcontainer.json` file and the default container image, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: For help with connecting to your codespace over SSH, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues)."

</div>

## Setting up the JetBrains Gateway

The first time you use JetBrains Gateway for GitHub Codespaces, you must install the Codespaces plugin. You must also allow the JetBrains Gateway to access GitHub.com using your GitHub account.

1. Open the JetBrains Gateway application.
1. Under **Install More Providers** click the **Install** link for GitHub Codespaces.

   ![Screenshot of the "Welcome to JetBrains Gateway" page, with  "GitHub Codespaces" listed under "Install More Providers."](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Click **Connect to Codespace**.

   ![Screenshot of the Gateway with the "Connect to Codespaces" button.](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. In the "Welcome to JetBrains Gateway" dialog, click **Sign In with GitHub**.
1. Click the icon beside the one-time code to copy it.

   ![Screenshot of a one-time login code. The copy icon beside the code is highlighted with a dark orange outline.](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Click the login link, below the login code.
1. If you are not currently signed in to GitHub, the sign-in page is displayed.
   - Enter your details and click **Sign in**.
   - Verify your authentication, for example by entering a two-factor authentication code.
1. On the "Device activation" page, paste the copied code and click **Continue**.
1. If you belong to organizations, the "Single sign-on to your organizations" page is displayed. Click **Authorize** beside the organizations you want to authorize the JetBrains Gateway to access, then click **Continue**.
1. On the "Authorize GitHub Codespaces for JetBrains" page, click **Authorize GitHub**.
1. Return to the JetBrains Gateway application and open a codespace from the list of your currently active or stopped codespaces, see step 3 of the following procedure.

## Opening a codespace in your JetBrains IDE

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

   The first time you connect to a codespace, the backend IDE will be downloaded to the remote machine. This may take a few minutes. The next time you connect to the same codespace this step won't be necessary, making the connection process quicker.

   The backend IDE is then started. Again, this step will not be required in future if you are reconnecting to a backend IDE that you have left running.

   The client application is then launched.

## Further reading

- "[AUTOTITLE](/codespaces/developing-in-a-codespace/developing-in-a-codespace)"
- "[AUTOTITLE](/codespaces/reference/using-the-github-codespaces-plugin-for-jetbrains)"
- "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)"
