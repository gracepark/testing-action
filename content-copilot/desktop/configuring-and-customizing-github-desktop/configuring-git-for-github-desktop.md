# Configuring Git for GitHub Desktop

You can manage Git configuration settings for your local repositories with GitHub Desktop.

## About Git configuration for GitHub Desktop

GitHub Desktop uses your local Git configuration settings and provides the option to configure some of these settings, such as the global author information and the default branch that is used when creating a new repository.

GitHub Desktop allows you to set the name and email address you would like associated with the commits you make in your repositories. If your name and email address have already been set in the global Git configuration for your computer, GitHub Desktop will detect and use those values. GitHub Desktop also allows you to set a different name and email address for an individual repository. This is useful when you need to use a separate work email address for a specific repository.

If the email address that has been set in your Git configuration does not match an email address associated with the GitHub account you are currently logged in to, GitHub Desktop will show a warning prior to committing.

GitHub Desktop also allows you to change the default branch name that you would like to use when creating new repositories. By default, GitHub Desktop uses `main` as the default branch name in any new repositories you create.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: Anyone will be able to see the email address in your Git configuration if you make public commits. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

</div>

## Configuring your global author information

Configuring your global author information in GitHub Desktop will update the name and email address in your global Git configuration. This will be the default name and email address for all new local repositories you create in GitHub Desktop.

<div class="ghd-tool mac">

1. In the menu bar, select **GitHub Desktop**, then click **Preferences**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Preferences", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-preferences.png)
1. In the "Preferences" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Preferences" window. In the left sidebar, an option labelled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-git-pane.png)
1. In the "Name" field, type the name you'd like to use for your Git configuration.
1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.
1. Click **Save**.

</div>

<div class="ghd-tool windows">

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is highlighted with an orange outline.](/assets/images/help/desktop/windows-choose-options.png)
1. In the "Options" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/windows-select-git-pane.png)

1. In the "Name" field, type the name you'd like to use for your Git configuration.
1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.
1. Click **Save**.

</div>

## Configuring different author information for an individual repository

You can change the name and email address used to author commits in a specific repository. This local Git configuration will override your global Git configuration settings for this one repository only.

<div class="ghd-tool mac">

1. To switch to the repository for which you want to set specific configuration, use the "Current Repository" dropdown menu.

   ![Screenshot of the repository bar in GitHub Desktop. Next to "Current Repository", a dropdown icon is highlighted with an orange outline.](/assets/images/help/desktop/current-repo-dropdown.png)

1. In the "GitHub Desktop" menu bar, select **Repository** and click **Repository Settings...**.

   ![Screenshot of the menu bar on a Mac. In the open "Repository" dropdown menu, a cursor hovers over "Repository Settings", highlighted in blue.](/assets/images/help/desktop/repository-settings-mac.png)
1. In the "Repository Settings" window, in the left sidebar, click **Git Config**.
1. Under "For this repository I wish to", select **Use a local Git config**.
![Screenshot of the "Git Config" pane in the "Repository Settings" window. A selected radio button, labeled "Use a local Git config", is outlined in orange.](/assets/images/help/desktop/use-local-git-config.png)
1. In the "Name" field, type the name you'd like to use for your local Git configuration.
1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.
1. Click **Save**.

</div>

<div class="ghd-tool windows">

1. In the **Repository** menu, click **Repository settings...**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the open "Repository" dropdown menu, an option labeled "Repository Settings" is outlined in orange.](/assets/images/help/desktop/repository-settings-win.png)
1. In the "Repository Settings" window, in the left sidebar, click **Git Config**.
1. Under "For this repository I wish to", select **Use a local Git config**.
![Screenshot of the "Git Config" pane in the "Repository Settings" window. A selected radio button, labeled "Use a local Git config", is outlined in orange.](/assets/images/help/desktop/use-local-git-config.png)
1. In the "Name" field, type the name you'd like to use for your local Git configuration.
1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.
1. Click **Save**.

</div>

## Configuring your default branch for new repositories

You can configure the default branch that will be used when you create a new repository in GitHub Desktop. For more information about the default branch, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch)."

<div class="ghd-tool mac">

1. In the menu bar, select **GitHub Desktop**, then click **Preferences**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Preferences", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-preferences.png)
1. In the "Preferences" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Preferences" window. In the left sidebar, an option labelled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or, to enter a custom name, select "Other...".
1. Click **Save**.

</div>

<div class="ghd-tool windows">

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is highlighted with an orange outline.](/assets/images/help/desktop/windows-choose-options.png)
1. In the Options window, click **Git**.

   ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/windows-select-git-pane.png)

1. Under "Default branch name for new repositories", select the default branch name you would like to use, or, to enter a custom name, select "Other...".
1. Click **Save**.

</div>

## Further reading

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[AUTOTITLE](/get-started/getting-started-with-git)"
