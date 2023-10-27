# GitHub Codespaces overview

This guide introduces GitHub Codespaces and provides details on how it works and how to use it.

## What is a codespace?

A codespace is a development environment that's hosted in the cloud. You can customize your project for GitHub Codespaces by committing configuration files to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

Each codespace you create is hosted by GitHub in a Docker container, running on a virtual machine. You can choose from a selection of virtual machine types, from 2 cores, 8 GB RAM, and 32 GB storage, up to 32 cores, 64 GB RAM, and 128 GB storage.

By default, codespaces are created from an Ubuntu Linux image that includes a selection of popular languages and tools, but you can use an image based on a Linux distribution of your choice and configure it for your particular requirements. Regardless of your local operating system, your codespace will run in a Linux environment. Windows and MacOS are not supported operating systems for the remote container.

You can connect to your codespaces from your browser, from Visual Studio Code, from the JetBrains Gateway application, or by using GitHub CLI. When you connect, you are placed within the Docker container. You do not have access to the outer Linux virtual machine host.

![Diagram showing the relationship between a code editor and a codespace running on an Azure virtual machine.](/assets/images/help/codespaces/codespaces-diagram.png)

## Benefits of GitHub Codespaces

Reasons for choosing to work in a codespace include:

- **Use a preconfigured development environment** - You can work in a development environment that has been specifically configured for the repository. It will have all of the tools, languages, and configurations you need to work on that project. Everyone who works on that repository in a codespace will have the same environment. This reduces the likelihood of environment-related problems occurring and being difficult to debug. Each repository can have settings that will give contributors a ready-to-use, fit-for-purpose environment, and the environment on your local machine will be unchanged.
- **Access the resources you need** - Your local computer may not have the processing power, or storage space, you need to work on a project. GitHub Codespaces allows you to work remotely on a machine with adequate resources.
- **Work anywhere** - All you need is a web browser. You can work in a codespace on your own computer, on a friend's laptop, or on a tablet. Open your codespace and pick up from where you left off on a different device.
- **Choose your editor** - Work in the browser in the VS Code web client, or choose from a selection of desktop-based applications.
- **Work on multiple projects** - You can use multiple codespaces to work on separate projects, or on different branches of the same repository, compartmentalizing your work to avoid changes made for one piece of work accidentally affecting something else you're working on.
- **Pair program with a teammate** - If you work on a codespace in VS Code, you can use Live Share to work collaboratively with other people on your team. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/working-collaboratively-in-a-codespace)."
- **Publish your web app from a codespace** - Forward a port from your codespace and then share the URL, to allow teammates to try out the changes you've made to the application before you submit those changes in a pull request.
- **Try out a framework** - GitHub Codespaces reduces the setup time when you want to learn a new framework. Just create a codespace from one of the [quickstart templates](https://github.com/codespaces/templates).

## Using GitHub Codespaces

To begin developing using cloud-based compute resources, you can create a codespace from a template or from any branch or commit in a repository. When you create a codespace from a template, you can start from a blank template or choose a template suitable for the work you're doing.

To get started with GitHub Codespaces, see "[AUTOTITLE](/codespaces/getting-started/quickstart)." For more information on creating a codespace, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)" or "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)." If you want to return to a codespace you've already created, see "[AUTOTITLE](/codespaces/developing-in-codespaces/opening-an-existing-codespace)." To learn more about how GitHub Codespaces works, see "[AUTOTITLE](/codespaces/getting-started/deep-dive)."

### Using codespaces owned by your personal account

All personal GitHub.com accounts have a monthly quota of free use of GitHub Codespaces included in the Free or Pro plan. You can get started using GitHub Codespaces on your personal account without changing any settings or providing payment details.

If you create a codespace from an organization-owned repository, use of the codespace will either be charged to the organization (if the organization is configured for this), or to your personal account.

You can continue using GitHub Codespaces beyond your monthly included storage and compute usage by providing payment details and setting a spending limit. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

### Using organization-owned codespaces

Owners of organizations on GitHub Team and GitHub Enterprise plans can pay for their members' and collaborators' use of GitHub Codespaces. This applies to codespaces created from repositories owned by the organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)." You can set a spending limit for use of GitHub Codespaces on your organization or enterprise account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

If use of a codespace will be billed to an organization or enterprise, this is shown when the codespace is created. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)." Codespaces that are billed to an organization, or its parent enterprise, are owned by the organization and can be deleted by an organization owner. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/deleting-a-codespace#deleting-codespaces-in-your-organization)."

Your ability to create codespaces from organization-owned repositories depends on several factors, including the repository's visibility and the settings of the organization or its parent enterprise. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-creation-and-deletion-of-codespaces#no-access-to-create-a-codespace)."

### Customizing GitHub Codespaces

To customize the runtimes and tools in your codespace, you can create one or more dev container configurations for your repository. Adding dev container configurations to your repository allows you to define a choice of different development environments that are appropriate for the work people will do in your repository.

If you create a codespace from a repository without any dev container configurations, GitHub Codespaces will clone your repository into an environment with the default codespace image that includes many tools, languages, and runtime environments. If you create a codespace from a template, you might start with some initial configuration on top of the default image. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

You can personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository. You can use dotfiles to set shell aliases and preferences, or to install your personal preference of the tools you like to use. If you use GitHub Codespaces in the browser, or in Visual Studio Code, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to give your codespace editor the same settings, keyboard shortcuts, snippets, and extensions that you have set up in your local installation of Visual Studio Code.

For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace)."

## Billing for Codespaces

For information on pricing, storage, and usage for GitHub Codespaces, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You must set a non-zero spending limit on your personal, organization, or enterprise account before the account can be billed for use of GitHub Codespaces.

</div>

By default, all accounts have a GitHub Codespaces spending limit of $0 USD. This prevents new codespaces being created, or existing codespaces being opened, if doing so would incur a billable cost to your personal, organization, or enterprise account. For personal accounts, if you have access to create a codespace, you can do so as long as the account has not reached the limit of its monthly included usage. For organizations and enterprises, the default spending limit means that, to allow people to create codespaces that are billed to the organization, or its parent enterprise, the limit must be changed to a value above $0 USD.

Costs for GitHub Codespaces are always billed monthly, even if your account is otherwise billed annually. For information on how organizations owners and billing managers can manage the spending limit for GitHub Codespaces for an organization, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."
