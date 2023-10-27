# Configuring prebuilds

You can configure your project to prebuild a codespace automatically each time you push a change to your repository.

**Who can use this feature**: People with admin access to a repository can configure prebuilds for the repository.
Repository-level settings for GitHub Codespaces are available for all repositories owned by personal accounts. <br><br>

For repositories owned by organizations, repository-level settings for GitHub Codespaces are available for organizations on GitHub Team and GitHub Enterprise plans. To access the settings, the organization or its parent enterprise must have added a payment method and set a spending limit for GitHub Codespaces. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

You can set up a prebuild configuration for the combination of a specific branch of your repository with a specific dev container configuration file.

Any branches created from a prebuild-enabled parent branch will typically also get prebuilds for the same dev container configuration. This is because prebuilds for child branches that use the same dev container configuration as the parent branch are, for the most part, identical, so developers can benefit from faster codespace creation times on those branches also. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

Typically, when you configure prebuilds for a branch, prebuilds will be available for multiple machine types. However, if your repository is greater than 32 GB, prebuilds won't be available for 2-core and 4-core machine types, since the storage these provide is limited to 32 GB.

## Prerequisites

Prebuilds are created using GitHub Actions. As a result, GitHub Actions must be enabled for the repository for which you are configuring prebuilds. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."

You can set up prebuilds in any repository owned by a personal account. The prebuild will consume storage space that will either incur a billable charge or, for repositories owned by your personal account, will use some of your monthly included storage.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: If you create prebuilds for a forked repository, the storage cost of those prebuilds is subtracted from your monthly included storage, while available. If you have used all of your included storage, and you have set up billing, your personal account will be billed. This is true even when the codespaces you create for a fork are paid for by the organization that owns the parent repository. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#how-billing-is-handled-for-forked-repositories)."

</div>

For repositories owned by an organization, you can set up prebuilds if the organization is on a GitHub Team or GitHub Enterprise plan. Additionally, you must have added a payment method and set a spending limit for GitHub Codespaces on the organization account or its parent enterprise. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-organization-account)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Configuring prebuilds

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the "Code & automation" section of the side bar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. In the "Prebuild configuration" section of the page, click **Set up prebuild**.

   ![Screenshot of the "Prebuild configuration" section of the "Codespaces" settings page, showing the "Set up prebuilds" button.](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Choose the branch for which you want to set up prebuilds.

   ![Screenshot of the "Configuration" settings for a prebuild with a dropdown menu listing branches to select. The "main" branch is currently selected.](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: Any branches created from a prebuild-enabled base branch will typically also get prebuilds for the same dev container configuration. For example, if you enable prebuilds for a dev container configuration file on the default branch of the repository, branches based on the default branch will, in most cases, also get prebuilds for the same dev container configuration.

   </div>

1. Optionally, in the **Configuration file** dropdown menu that's displayed, choose the `devcontainer.json` configuration file that you want to use for your prebuilds. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#devcontainerjson)."

   ![Screenshot of the configuration file dropdown menu. Four configuration files are listed, with ".devcontainer/devcontainer.json" currently selected.](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Choose how you want to automatically trigger prebuild updates.

   - **Every push** (the default setting) - With this setting, prebuilds will be updated on every push made to the given branch. This will ensure that codespaces generated from a prebuild always contain the latest codespace configuration, including any recently added or updated dependencies.

   - **On configuration change** - With this setting, prebuilds will be updated every time any of the following files is changed:
     - `.devcontainer/devcontainer.json`

       <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

       **Note**: Prebuild updates are not triggered by changes to `devcontainer.json` files within subdirectories of `.devcontainer`.

       </div>

     - The Dockerfile referenced in the `build.dockerfile` property of the `.devcontainer/devcontainer.json` file.

     This setting ensures that changes to the dev container configuration files for the repository are used when a codespace is generated from a prebuild. The GitHub Actions workflow that updates the prebuilds will run less often, so this option will use fewer GitHub Actions minutes. However, this option will not guarantee that codespaces always include recently added or updated dependencies, so these may have to be added or updated manually after a codespace has been created.

   - **Scheduled** - With this setting, you can have your prebuilds updated on a custom schedule that's defined by you. This can reduce consumption of GitHub Actions minutes, however, with this option, codespaces may be created that do not use the latest dev container configuration changes.

   ![Screenshot of the "Prebuild triggers" settings. The "Scheduled" option is selected and set to "Every day" at "1pm" and "3:30pm."](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Optionally, select **Reduce prebuild available to only specific regions** to create prebuilds only in specified regions. Select the regions in which you want prebuilds to be available.

   By default, prebuilds are created in all of the available regions, incurring storage charges per prebuild.

   ![Screenshot of the "Region availability" settings. "Reduce prebuild available to only specific regions" is selected with two regions selected.](/assets/images/help/codespaces/prebuilds-regions.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Notes**:
   - The prebuild in each region incurs individual storage charges. You should, therefore, only enable prebuilds for regions in which you know they'll be used. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-codespaces-prebuilds)."
   - Developers can set their default region for GitHub Codespaces, which can allow you to enable prebuilds for fewer regions. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."

   </div>

1. Optionally, under **Template history**, set the number of prebuild versions to be retained. You can input any number between 1 and 5. The default number of saved versions is 2, which means that only the latest prebuild and the previous version are saved.

   ![Screenshot of the "Template history" setting. It is set to 2 versions.](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   Depending on your prebuild trigger settings, your prebuild could change with each push or on each dev container configuration change. Retaining older versions of prebuilds enables you to create a prebuild from an older commit with a different dev container configuration than the current prebuild. This setting allows you to set the number of retained versions to a level that is appropriate for your needs.

   If you set the number of prebuild versions to save to 1, GitHub Codespaces will only save the latest version of the prebuild and will delete the older version each time the template is updated. This means you will not get a prebuilt codespace if you go back to an older dev container configuration.

   There is a storage cost associated with each prebuild version that's retained. For example, if you are generating prebuilds in 4 regions and retaining 2 versions, you will be charged for storage of up to 8 prebuilds. For more information on billing, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

1. Optionally, add users or teams to notify when the prebuild workflow run fails for this configuration. You can begin typing a username, team name, or full name, then click the name once it appears to add them to the list. The users or teams you add will receive an email when prebuild failures occur, containing a link to the workflow run logs to help with further investigation.

   ![Screenshot of the "Failure notifications" setting. The team named "octocat-team" has been added.](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: People will only receive notifications of failed prebuilds if they have enabled notifications for failed Actions workflows in their personal settings. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#github-actions-notification-options)."

   </div>

1. Optionally, at the bottom of the page, click **Show advanced options**.

   ![Screenshot of the bottom of the prebuilds configuration page. The link "Show advanced options" is highlighted with a dark orange outline.](/assets/images/help/codespaces/show-advanced-options.png)

   In the "Advanced options" section, if you select **Disable prebuild optimization**, codespaces will be created without a prebuild if the latest prebuild workflow has failed or is currently running. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used)."

1. Click **Create**.

   If the dev container configuration for the repository specifies permissions for accessing other repositories, you will be shown an authorization page. For more information on how this is specified in the `devcontainer.json` file, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."
   
      Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-chevron-down" aria-label="The expand down icon" role="img"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg> to view the details of the requested permissions.
   
      ![Screenshot of an authorization page for a prebuild configuration. Three permissions are listed in this request.](/assets/images/help/codespaces/prebuild-authorization-page.png)
   
      Click **Authorize and continue** to grant these permissions for creation of prebuilds. Alternatively, you can click **Continue without authorizing** but, if you do so, codespaces created from the resulting prebuilds may not work properly.
   
      <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
      **Note**: Users who create codespaces using this prebuild will also be asked to grant these permissions.
   
      </div>

After you create a prebuild configuration it is listed on the GitHub Codespaces page of your repository settings. A GitHub Actions workflow is queued and then run to create prebuilds in the regions you specified, based on the branch and dev container configuration file you selected.

![Screenshot of the list of prebuild configurations. One prebuild is listed, labeled "Currently running." To the right of it is a "See output" button.](/assets/images/help/codespaces/prebuild-configs-list.png)

For information about editing and deleting prebuild configurations, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/managing-prebuilds)."

## Configuring environment variables

To allow the prebuild process to access environment variables required to create your development environment, you can set these either as Codespaces repository secrets or as Codespaces organization secrets. Secrets that you create in this way will be accessible by anyone who creates a codespace from this repository. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" and "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)."

Prebuilds cannot use any user-level secrets while building your environment, because these are not available until after the codespace has been created.

## Configuring time-consuming tasks to be included in the prebuild

You can use the `onCreateCommand` and `updateContentCommand` commands in your `devcontainer.json` to include time-consuming processes as part of the prebuild creation. For more information, see the Visual Studio Code documentation, "[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)."

`onCreateCommand` is run only once, when the prebuild is created, whereas `updateContentCommand` is run at creation of the prebuild and at subsequent updates to it. Incremental builds should be included in `updateContentCommand` since they represent the source of your project and need to be included for every prebuild update.

## Further reading

- "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-prebuilds)"
