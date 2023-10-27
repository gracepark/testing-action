# Troubleshooting your connection to GitHub Codespaces

Troubleshooting help for connecting to GitHub Codespaces.

## 503 codespace service unavailable

Codespaces are set to stop after 30 minutes without any activity. If you try to interact with a codespace after it has stopped, you may see a `503 service unavailable` error.

- If a **Start** button is shown in Visual Studio Code or in your browser window, click **Start** to reconnect to the codespace.
- Reset your codespace by reloading the window. From the [Command Palette](/codespaces/reference/using-the-vs-code-command-palette-in-codespaces#accessing-the-command-palette) in Visual Studio Code, click **Developer: Reload Window**.

## Browser cannot connect

Sometimes you may not be able to access a codespace from your browser. If this happens, go to https://github.com/codespaces and try connecting to the codespace from that page.

- If the codespace is not listed on that page, check that you are the owner of the codespace you are trying to connect to. You can only open a codespace that you created. The URLs for your codespaces always include your GitHub handle.
- If the codespace is listed but you cannot connect from that page, check whether you can connect using a different browser.

Your company network may be blocking the connection. If possible, check any logging for rejected connections on your device.

If you still cannot connect, you may need to contact support. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/working-with-support-for-github-codespaces)."

## Unable to connect to your codespace in JupyterLab

To be able to use a codespace in JupyterLab, you must ensure that your codespace has it installed. The default container image that's used by GitHub Codespaces includes JupyterLab, but if you have customized your dev container configuration you will have to manually install JupyterLab.

If your codespace uses a Debian-based image, you can install JupyterLab in the dev container by adding the `python` feature to your `devcontainer.json` file, with the `installJupyterlab` option set to `true`. Otherwise, install it directly in your Dockerfile. For installation instructions, see "[Installation](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)" in the JupyterLab documentation.

For more information about the `python` feature, see the README page in the [`devcontainers/features` repository](https://github.com/devcontainers/features/tree/main/src/python). For more information about the `devcontainer.json` file and the Dockerfile, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#devcontainerjson)."

If you still cannot connect, you may need to contact support. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/working-with-support-for-github-codespaces)."

## GitHub Codespaces extension for Visual Studio Code cannot connect

If you cannot connect to a codespace from Visual Studio Code desktop, use the following troubleshooting steps.

1. Check that you have the latest version of the GitHub Codespaces extension installed. The extension is a preview release and frequent updates are released.
   1. In Visual Studio Code, display the "Extensions" tab.
   1. Select the GitHub Codespaces extension to display the extension's overview page.
   1. If an update is available, a button is shown, click **Update to X.X.X** to upgrade to the latest version.
1. Check whether you are using the stable build of Visual Studio Code or the [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/) release (nightly updates). If you are using the insiders release, try installing the [stable build](https://code.visualstudio.com/).
1. Your company network may be blocking the connection. If possible, check any logging for rejected connections on your device.

If you still cannot connect, you may need to contact support. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/working-with-support-for-github-codespaces)."

### The codespace has latency issues

If the codespace seems particularly slow or has latency issues, it is possible that it has been created in a region that is far from you. To resolve this, you can [manually set your GitHub Codespaces region](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces).
