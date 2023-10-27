# Adding features to a devcontainer.json file

With features, you can quickly add tools, runtimes, or libraries to your dev container configuration.

Features are self-contained units of installation code and dev container configuration, designed to work across a wide range of base container images. You can use features to quickly add tools, runtimes, or libraries to your codespace image. For more information, see the [available features](https://containers.dev/features) and [features specification](https://containers.dev/implementors/features/) on the Development Containers website.

You can add features to a `devcontainer.json` file from VS Code or from your repository on GitHub.com. Use the tabs in this article to display instructions for each of these ways of adding features.

## Adding features to a `devcontainer.json` file

<div class="ghd-tool webui">

1. Navigate to your repository on GitHub.com, find your `devcontainer.json` file, and click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit this file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> to edit the file.

   If you don't already have a `devcontainer.json` file, you can create one now. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."
1. To the right of the file editor, in the **Marketplace** tab, browse or search for the feature you want to add, then click the name of the feature.

   ![Screenshot of the "Marketplace" tab with "Terra" in the search box and the Terraform feature listed in the search results.](/assets/images/help/codespaces/feature-marketplace.png)

1. Under "Installation," click the code snippet to copy it to your clipboard, then paste the snippet into the `features` object in your `devcontainer.json` file.

   ![Screenshot of the "Marketplace" tab showing the installation code snippet for Terraform.](/assets/images/help/codespaces/feature-installation-code.png)

   ```jsonc
   "features": {
        // ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        // ...
	}
    ```

1. By default, the latest version of the feature will be used. To choose a different version, or configure other options for the feature, expand the properties listed under "Options" to view the available values, then add the options by manually editing the object in your `devcontainer.json` file.

   ![Screenshot of the "Options" section of the "Marketplace" tab, with the "version" and "tflint" properties expanded.](/assets/images/help/codespaces/feature-options.png)

   ```jsonc
   "features": {
        // ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        // ...
	}
    ```

1. Commit the changes to your `devcontainer.json` file.

The configuration changes will take effect in new codespaces created from the repository. To make the changes take effect in existing codespaces, you will need to pull the updates to the `devcontainer.json` file into your codespace, then rebuild the container for the codespace. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."

</div>

<div class="ghd-tool vscode">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To add features in VS Code while you are working locally, and not connected to a codespace, you must have the "Dev Containers" extension installed and enabled. For more information about this extension, see the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

</div>

1. Access the VS Code Command Palette with <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Start typing "add dev" then click **Codespaces: Add Dev Container Configuration Files**.

   ![Screenshot of the Command Palette, with "add dev" entered and "Codespaces: Add Dev Container Configuration Files" listed.](/assets/images/help/codespaces/add-prebuilt-container-command.png)

1. Click **Modify your active configuration**.
1. Update your feature selections, then click **OK**.
1. If you're working in a codespace, a prompt will appear in the lower-right corner. To rebuild the container and apply the changes to the codespace you're working in, click **Rebuild Now**.

   ![Screenshot of the message: "We've noticed a change to the dev container configuration." Below this is the "Rebuild Now" button.](/assets/images/help/codespaces/rebuild-prompt.png)

</div>
