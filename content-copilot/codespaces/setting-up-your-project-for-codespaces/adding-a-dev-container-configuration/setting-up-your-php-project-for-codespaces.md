# Setting up a PHP project for GitHub Codespaces

Get started with a PHP project in GitHub Codespaces by creating a custom dev container configuration.

## Introduction

This guide shows you how to set up an example PHP project in GitHub Codespaces using the Visual Studio Code web client. It will step you through the process of opening the project in a codespace, and adding and modifying a predefined dev container configuration.

After you complete this tutorial, you'll be able to add a dev container configuration to your own repository, using either the VS Code web client or the VS Code desktop application.

For more information about dev containers, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

## Step 1: Open the project in a codespace

1. Sign in to GitHub.com, if you haven't already done so.
1. Go to https://github.com/microsoft/vscode-remote-try-php.
1. Click **Use this template**, then click **Open in a codespace**.

   ![Screenshot of the "Use this template" button and the dropdown menu expanded to show the "Open in a codespace" option.](/assets/images/help/repository/use-this-template-button.png)

When you create a codespace, your project is created on a remote virtual machine that is dedicated to you. By default, the container for your codespace has many languages and runtimes including PHP. It also includes a common set of tools, such as Composer, XDebug, Apache, pecl, nvm, git, lynx, and curl.

You can customize your codespace by adjusting the amount of vCPUs and RAM, adding dotfiles to personalize your environment, or by modifying the tools and scripts installed. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace)."

GitHub Codespaces uses a file called `devcontainer.json` to configure the development container that you use when you work in a codespace. Each repository can contain one or more  `devcontainer.json` files, to give you exactly the development environment you need to work on your code in a codespace.

On launch, GitHub Codespaces uses a `devcontainer.json` file, and any dependent files that make up the dev container configuration, to install tools and runtimes, and perform other setup tasks that the project requires. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

## Step 2: Add a dev container configuration

The default development container, or "dev container," for GitHub Codespaces will allow you to work successfully on a PHP project like [vscode-remote-try-php](https://github.com/microsoft/vscode-remote-try-php). However, we recommend that you configure your own dev container to include all of the tools and scripts your project needs. This will ensure a fully reproducible environment for all GitHub Codespaces users in your repository.

To set up your repository to use a custom dev container, you will need to create one or more `devcontainer.json` files. You can either add these from a predefined configuration template, in Visual Studio Code, or you can write your own. For more information on dev container configurations, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."
1. Access the Visual Studio Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>), then start typing "add dev". Click **Codespaces: Add Dev Container Configuration Files**.

   ![Screenshot of the Command Palette, with "add dev" entered and "Codespaces: Add Dev Container Configuration Files" listed.](/assets/images/help/codespaces/add-prebuilt-container-command.png)

1. Click **Create a new configuration**.
1. In this example, the template repository from which you created the codespace already contains a dev container configuration, so a message is displayed telling you that the configuration file already exists. We're going to overwrite the existing configuration file, so click **Continue**.

1. Click **Show All Definitions**.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, showing various options, including "Show All Definitions."](/assets/images/help/codespaces/show-all-definitions.png)

1. Type `php` and click **PHP**. Other options are available if your project uses particular tools. For example, **PHP & MariaDB**.

1. Choose the version of PHP you want to use for your project. In this case, select the version marked "(default)."

1. A list of additional features you can install is displayed. We'll install GitHub CLI, a tool for interacting with GitHub from the command line. To install this tool, type `github`, select `GitHub CLI`, then click **OK**, then select **Keep defaults**.

1. A message is displayed telling you that the dev container configuration file already exists. Click **Overwrite**.

   A `devcontainer.json` file is created and is opened in the editor.
### Details of your custom dev container configuration

If you look in the Visual Studio Code Explorer you'll see that a `.devcontainer` directory has been added to the root of your project's repository containing the `devcontainer.json` file. This is the main configuration file for codespaces created from this repository.

#### devcontainer.json

The `devcontainer.json` file that you have added will contain values for the `name`, `image`, and `features` properties. Some additional properties that you may find useful are included but are commented out.

The file will look similar to this, depending on which image you chose:

```jsonc
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/php
{
  "name": "PHP",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/php:1-8.2-bullseye",

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Configure tool-specific properties.
  // "customizations": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  "forwardPorts": [
    8080
  ],
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  }

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html"

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

- **name**: You can name your dev container anything you want. A default value is supplied.
- **image**: The name of an image in a container registry ([DockerHub](https://hub.docker.com/), [GitHub Container registry](/packages/learn-github-packages/introduction-to-github-packages), or [Azure Container Registry](https://azure.microsoft.com/services/container-registry/)) that will be used to create the dev container for the codespace.
- **features**: A list of one or more objects, each of which references one of the available dev container features. Features are self-contained, shareable units of installation code and development container configuration. They provide an easy way to add more tooling, runtime, or library features to your development container. You can add features either within VS Code or in the `devcontainer.json` editor on GitHub.com. For more information, click either the **Visual Studio Code** or **Web browser** tab in "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/adding-features-to-a-devcontainer-file?tool=webui)."
- **forwardPorts**: Any ports listed here will be forwarded automatically. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand**: Use this property to run commands after your codespace is created. This can be formatted as a string (as above), an array, or an object. For more information, see the [dev containers specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts) on the Development Containers website.
- **customizations**: This property allows you to customize a specific tool or service when it is used for working in a codespace. For example, you can configure specific settings and extensions for VS Code. For more information, see "[Supporting tools and services](https://containers.dev/supporting)" on the Development Containers website.
- **remoteUser**: By default, you’re running as the vscode user, but you can optionally set this to root.
For a complete list of available properties, see the [dev containers specification](https://containers.dev/implementors/json_reference/) on the Development Containers website.

#### Additional dev container configuration files

If you are familiar with Docker, you may want to use a Dockerfile, or Docker Compose, to configure your codespace environment, in addition to the `devcontainer.json` file. You can do this by adding your `Dockerfile` or `docker-compose.yml` files alongside the `devcontainer.json` file. For more information, see "[Using Images, Dockerfiles, and Docker Compose](https://containers.dev/guide/dockerfile)" on the Development Containers website.

## Step 3: Modify your devcontainer.json file

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties that will:

- Run `composer install`, after the dev container is created, to install the dependencies listed in a `composer.json` file.
- Automatically install a VS Code extension in this codespace.

1. In the `devcontainer.json` file, delete the two commented-out lines about features:

   ```jsonc
   // Features to add to the dev container. More info: https://containers.dev/features.
   // "features": {},
   ```

1. Edit the `customizations` property as follows to install the "Composer" extension.

   ```jsonc copy
   // Configure tool-specific properties.
   "customizations": {
     // Configure properties specific to VS Code.
     "vscode": {
       "extensions": [
         "ikappas.composer"
       ]
     }
   },
   ```

1. Add a comma after the `features` property.

   ```json
   "features": {
     "ghcr.io/devcontainers/features/github-cli:1": {}
   },
   ```

1. Uncomment the `postCreateCommand` property and add some text to the end to run the command `composer install` if a `composer.json` file exists. (The existing commands are just some setup procedures that allow Apache to access the files in the workspace.)

   ```jsonc copy
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html; if [ -f composer.json ];then composer install;fi"
   ```

  The `devcontainer.json` file should now look similar to this, depending on which image you chose:

   ```jsonc
   // For format details, see https://aka.ms/devcontainer.json. For config options, see the
   // README at: https://github.com/devcontainers/templates/tree/main/src/php
   {
     "name": "PHP",
     // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
     "image": "mcr.microsoft.com/devcontainers/php:1-8.2-bullseye",

     // Configure tool-specific properties.
     "customizations": {
       // Configure properties specific to VS Code.
       "vscode": {
         "extensions": [
           "ikappas.composer"
         ]
       }
     },

     // Use 'forwardPorts' to make a list of ports inside the container available locally.
     "forwardPorts": [
       8080
     ],
     "features": {
       "ghcr.io/devcontainers/features/github-cli:1": {}
     },

     // Use 'postCreateCommand' to run commands after the container is created.
     "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html; if [ -f composer.json ];then composer install;fi"

     // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
     // "remoteUser": "root"
   }
   ```

1. Save your changes.
1. Access the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>), then start typing "rebuild". Click **Codespaces: Rebuild Container**.

   ![Screenshot of the Command Palette with "rebuild" entered in the text box and the "Codespace: Rebuild Container" option highlighted in the dropdown.](/assets/images/help/codespaces/codespaces-rebuild.png)

      <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Tip:** You may occasionally want to perform a full rebuild to clear your cache and rebuild your container with fresh images. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/rebuilding-the-container-in-a-codespace#about-rebuilding-a-container)."
   
   </div>
   Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

   After the dev container is rebuilt, and your codespace becomes available again, the `postCreateCommand` will have been run, installing any Composer dependencies, and the "Composer" extension will be available for use.

## Step 4: Run your application

In the previous section, you modified the `postCreateCommand` to install a set of packages via the `composer install` command. With the dependencies now installed, you can run the application. However, in this scenario we first need to change the ports that Apache will listen on. We're forwarding port 8080, so we'll instruct Apache to use this port rather than the default port 80.

1. In the Terminal of your codespace, enter:

   ```shell copy
   sudo sed -i 's/Listen 80$//' /etc/apache2/ports.conf
   ```

1. Then, enter:

   ```shell copy
   sudo sed -i 's/<VirtualHost \*:80>/ServerName 127.0.0.1\n<VirtualHost \*:8080>/' /etc/apache2/sites-enabled/000-default.conf
   ```

1. Then start Apache using its control tool:

   ```shell copy
   apache2ctl start
   ```

1. When your project starts, you should see a "toast" notification message at the bottom right corner of VS Code, telling you that your application is available on a forwarded port. To view the running application, click **Open in Browser**.

## Step 5: Commit your changes

When you've made changes to your codespace, either new code or configuration changes, you'll want to commit your changes. Committing configuration changes to your repository ensures that anyone else who creates a codespace from this repository has the same configuration. Any customization you do, such as adding VS Code extensions, will be available to all users.

For this tutorial, you created a codespace from a template repository, so the code in your codespace is not yet stored in a repository. You can create a repository by publishing the current branch to GitHub.com.

For information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace?tool=webui#publishing-a-codespace-created-from-a-template)."

## Next steps

You should now be able to add a custom dev container configuration to your own PHP project.

Here are some additional resources for more advanced scenarios.

- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/adding-features-to-a-devcontainer-file?tool=webui)"
- "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces)"
- "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)"
- "[AUTOTITLE](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)"
