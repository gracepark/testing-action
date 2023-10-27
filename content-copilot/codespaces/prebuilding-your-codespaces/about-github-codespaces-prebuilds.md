# About GitHub Codespaces prebuilds

GitHub Codespaces prebuilds help to speed up the creation of new codespaces for large or complex repositories.

You create and configure prebuilds in your repository's settings. Repository-level settings for GitHub Codespaces are available for all repositories owned by personal accounts. <br><br>

For repositories owned by organizations, repository-level settings for GitHub Codespaces are available for organizations on GitHub Team and GitHub Enterprise plans. To access the settings, the organization or its parent enterprise must have added a payment method and set a spending limit for GitHub Codespaces. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Overview

A prebuild assembles the main components of a codespace for a particular combination of repository, branch, and `devcontainer.json` configuration file. It provides a quick way to create a new codespace. For complex and/or large repositories in particular, you can create a new codespace more quickly by using a prebuild.

If it currently takes more than 2 minutes to create a codespace for a repository, you are likely to benefit from using prebuilds. This is because, with a prebuild, any source code, editor extensions, project dependencies, commands, and configurations have already been downloaded, installed, and applied before you create a codespace.

By default, whenever you push changes to your repository, GitHub Codespaces uses GitHub Actions to automatically update your prebuilds.

When prebuilds are available for a particular branch of a repository, a particular dev container configuration file, and for your region, you'll see the "<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-zap" aria-hidden="true"><path d="M9.504.43a1.516 1.516 0 0 1 2.437 1.713L10.415 5.5h2.123c1.57 0 2.346 1.909 1.22 3.004l-7.34 7.142a1.249 1.249 0 0 1-.871.354h-.302a1.25 1.25 0 0 1-1.157-1.723L5.633 10.5H3.462c-1.57 0-2.346-1.909-1.22-3.004L9.503.429Zm1.047 1.074L3.286 8.571A.25.25 0 0 0 3.462 9H6.75a.75.75 0 0 1 .694 1.034l-1.713 4.188 6.982-6.793A.25.25 0 0 0 12.538 7H9.25a.75.75 0 0 1-.683-1.06l2.008-4.418.003-.006a.036.036 0 0 0-.004-.009l-.006-.006-.008-.001c-.003 0-.006.002-.009.004Z"></path></svg> Prebuild ready" label in the list of machine type options when you create a codespace. If a prebuild is still being created, you will see the "<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-history" aria-hidden="true"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg> Prebuild in progress" label. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

![Screenshot of a list of available machine types: 2, 4, 8, 16, and 32 core, all labeled "Prebuild ready."](/assets/images/help/codespaces/choose-custom-machine-type.png)

When you create a codespace from a template on the "Your codespaces" page, GitHub may automatically use a prebuild to speed up creation time. For more information on templates, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Each prebuild that's created consumes storage space that will either incur a billable charge or, for repositories owned by your personal GitHub account, will use some of your monthly included storage. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-codespaces-prebuilds)."

</div>

## The prebuild process

To create a prebuild, you set up a prebuild configuration. When you save the configuration, a GitHub Actions workflow runs to create each of the required prebuilds; one workflow per prebuild. Workflows also run whenever the prebuilds for your configuration need to be updated. This can happen at scheduled intervals, on pushes to a prebuild-enabled repository, or when you change the dev container configuration. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

When a prebuild configuration workflow runs, GitHub creates a temporary codespace, performing setup operations up to and including any `onCreateCommand` and `updateContentCommand` commands in the `devcontainer.json` file. No `postCreateCommand` commands are run during the creation of a prebuild. For more information about these commands, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the VS Code documentation. A snapshot of the generated container is then taken and stored.

As with other GitHub Actions workflows, running a prebuild configuration workflow will either consume some of the GitHub Actions minutes included with your account, if you have any, or it will incur charges for GitHub Actions minutes. Storage of codespace prebuilds is billed in the same way as storage of active or stopped codespaces. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-codespaces-prebuilds)."

When you create a codespace from a prebuild, GitHub downloads the existing container snapshot from storage and deploys it on a fresh virtual machine, completing the remaining commands specified in the dev container configuration. Since many operations have already been performed, such as cloning the repository, creating a codespace from a prebuild can be substantially quicker than creating one without a prebuild. This is true where the repository is large and/or `onCreateCommand` commands take a long time to run.

## About pushing changes to prebuild-enabled branches

By default, each push to a branch that has a prebuild configuration results in a GitHub-managed GitHub Actions workflow run to update the prebuild. The prebuild workflow has a concurrency limit of one workflow run at a time for a given prebuild configuration, unless changes were made that affect the dev container configuration for the associated repository. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)." If a run is already in progress, the workflow run that was queued most recently will run next, after the current run completes.

With the prebuild set to be updated on each push, it means that if there are very frequent pushes to your repository, prebuild updates will occur at least as often as it takes to run the prebuild workflow. That is, if your workflow run typically takes one hour to complete, prebuilds will be created for your repository roughly hourly, if the run succeeds, or more often if there were pushes that change the dev container configuration on the branch.

For example, let's imagine 5 pushes are made, in quick succession, against a branch that has a prebuild configuration. In this situation:

- A workflow run is started for the first push, to update the prebuild.
- If the 4 remaining pushes do not affect the dev container configuration, the workflow runs for these are queued in a "pending" state.

  If any of the remaining 4 pushes change the dev container configuration, then the service will not skip that one and will immediately run the prebuild creation workflow, updating the prebuild accordingly if it succeeds.

- Once the first run completes, workflow runs for pushes 2, 3, and 4 will be canceled, and the last queued workflow (for push 5) will run and update the prebuild.
