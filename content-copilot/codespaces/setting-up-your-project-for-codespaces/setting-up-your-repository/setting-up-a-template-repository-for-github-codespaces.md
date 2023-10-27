# Setting up a template repository for GitHub Codespaces

You can help people get started with a project by setting up a template repository for use with GitHub Codespaces.

## Introduction

By setting up a template repository, you can help people get started with your framework, library, or other project in GitHub Codespaces. Users will be able to start working with your template files immediately in a cloud-based development environment, without having to worry about cloning your repository or installing tools or other dependencies. With some configuration, you will be able to set users up in a codespace with important files already open for editing, and with an application already running in a preview browser tab within the VS Code web editor.

Anyone with read access to your template repository can create a codespace from the repository's page on GitHub. You can turn any existing repository into a template, and you do not have to change any settings to allow users to create a codespace from your template repository. For more information on turning a repository into a template, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)."

To help users find your template and get started quickly, you can share a link to the codespace creation page for the template. For example, you could provide this link in a tutorial for getting started with your framework. You can use the "share a deep link" option and select **Quick start** to build a link that takes users to a page where they can quickly create a new codespace or resume a recent one. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces#creating-a-link-to-the-codespace-creation-page-for-your-repository)."

When someone creates a codespace from your template, the contents of your template repository will be cloned into their codespace. When the user is ready, they will be able to publish their work to a new repository on GitHub belonging to their personal account. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template)."

Organizations can pay for members of the organization and outside collaborators to use GitHub Codespaces at the organization's expense. This includes codespaces created from template repositories owned by the organization. However, if a user publishes a codespace created from a template to their personal account, ownership and billing of the codespace transfers to the user who created the codespace. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#how-billing-is-handled-for-github-codespaces-templates)."

## Describe your template

If you don't have one, create a README for your template repository to describe the purpose of your template and how to get started with it. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."

You can also provide a short description of your project by navigating to the repository's page and clicking **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="Edit repository metadata" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>** next to the **About** section on the right of the page.

![Screenshot of the "About" section on a repository page. The settings button (a gear symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/repository-settings-icon.png)

## Add starter files

Template repositories typically contain starter files with boilerplate code so users can quickly get started with a library, framework, or other technology.

For guidance on the kinds of files to include, you can look at the starter files included in the official GitHub templates for GitHub Codespaces, as follows.

1. Navigate to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).
1. To view the full list of templates, in the "Explore quick start templates" section, click **See all**.

   ![Screenshot of the "Explore quick start templates" section. "See all" is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespace-templates-see-all.png)
1. To view the template repository that contains the files for the template, click the name of the template.

   ![Screenshot of the "Explore quick start templates" section of the codespaces page. The names of the templates are highlighted with orange outlines.](/assets/images/help/codespaces/react-template-name.png)

## Configure the dev container

You can add dev container configuration files to your template repository to customize the development environment for people using your template with GitHub Codespaces. You can choose from a list of predefined configuration settings in Visual Studio Code, or you can create a custom configuration by writing your own `devcontainer.json` file. If you don't add configuration files, the default container image will be used. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)" and "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** When users create codespaces from the **Use this template** button in a template repository, they will not be given a choice between configurations. The codespace will be built based on the default configuration defined in `.devcontainer/devcontainer.json`, or in `.devcontainer.json` at the root of your repository.

</div>

You should configure your dev container with the tools and customization to give users the best experience with your template. For example, in your `devcontainer.json` file:
- You can use the `openFiles` property to define a list of files to be opened automatically in the VS Code web client when a codespace is created from your template.
- If users need to provide personal secrets such as API keys to run the application in your template, you can prompt them to provide these secrets. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/specifying-recommended-secrets-for-a-repository)."
- If your template contains files for a web application, you can make the application run automatically in the user's codespace. You can do this by using the `postAttachCommand` property to run a script that starts the application on a local server as soon as the VS Code web client connects to the codespace, and by setting the `onAutoForward` property of a port to `openPreview` to display the application running on that port in a simple browser embedded in the VS Code web client.

The following configuration settings for a React template will open the `app.js` file in the user's editor, run `npm start` (defined in a `package.json` file) to start a local server, and forward port `3000` to a preview browser tab in the codespace.

```json
{
    "postAttachCommand": {
      "server": "npm start"
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```

For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/automatically-opening-files-in-the-codespaces-for-a-repository)" and the [dev containers specification](https://containers.dev/implementors/json_reference/#general-properties) on the Development Containers website.
