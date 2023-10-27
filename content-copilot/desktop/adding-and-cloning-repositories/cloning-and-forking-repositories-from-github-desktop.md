# Cloning and forking repositories from GitHub Desktop

You can use GitHub Desktop to clone and fork repositories that exist on GitHub.

## About local repositories

Repositories on GitHub are remote repositories. You can clone or fork a repository with GitHub Desktop to create a local repository on your computer.

You can create a local copy of any repository on GitHub that you have access to by cloning the repository. If you own a repository or have write permissions, you can sync between the local and remote locations. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop)."

When you clone a repository, any changes you push to GitHub will affect the original repository. To make changes without affecting the original project, you can create a separate copy by forking the repository. You can create a pull request to propose that maintainers incorporate the changes in your fork into the original upstream repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

When you try to use GitHub Desktop to clone a repository that you do not have write access to, GitHub Desktop will prompt you to create a fork automatically. You can choose to use your fork to contribute to the original upstream repository or to work independently on your own project. Any existing forks default to contributing changes to their upstream repositories. You can modify this choice at any time. For more information, see "[Managing fork behavior](#managing-fork-behavior)".

You can also clone a repository directly from GitHub or GitHub Enterprise. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)".

## Cloning a repository

1. In the **File** menu, click **Clone Repository**.

   <div class="ghd-tool mac">

   ![Screenshot of the menu bar on a Mac. The "File" dropdown menu is expanded, and the "Clone Repository" option is highlighted with an orange outline.](/assets/images/help/desktop/clone-file-menu-mac.png)

   </div>

   <div class="ghd-tool windows">

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. The "File" dropdown menu is expanded, and the "Clone Repository" option is highlighted with an orange outline.](/assets/images/help/desktop/clone-file-menu-windows.png)

   </div>
1. Click the tab that corresponds to the location of the repository you want to clone. You can also click **URL** to manually enter the repository location.

   ![Screenshot of the "Clone a repository" window. At the top of the window, tabs labeled "GitHub.com", "GitHub Enterprise" and "URL" are highlighted with an orange outline.](/assets/images/help/desktop/choose-repository-location-mac.png)
1. From the list of repositories, click the repository you want to clone.

   ![Screenshot of the "Clone a repository" window. The "github/docs" repository is highlighted with an orange outline.](/assets/images/help/desktop/clone-a-repository-list-mac.png)
1. To select the local directory into which you want to clone the repository, next to the "Local Path" field, click **Choose...** and navigate to the directory.

   ![Screenshot of the "Clone a repository" window. A button, labeled "Choose", is highlighted with an orange outline.](/assets/images/help/desktop/clone-choose-button-mac.png)
1. At the bottom of the "Clone a Repository" window, click **Clone**.

## Forking a repository

You can fork a repository on GitHub.com or in GitHub Desktop. For information about forking on GitHub.com, see "[AUTOTITLE](/get-started/quickstart/fork-a-repo?tool=webui)."

In GitHub Desktop, if you attempt to clone a repository that you don't have write access to, a fork is automatically created for you.

1. In the **File** menu, click **Clone Repository**.

   <div class="ghd-tool mac">

   ![Screenshot of the menu bar on a Mac. The "File" dropdown menu is expanded, and the "Clone Repository" option is highlighted with an orange outline.](/assets/images/help/desktop/clone-file-menu-mac.png)

   </div>

   <div class="ghd-tool windows">

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. The "File" dropdown menu is expanded, and the "Clone Repository" option is highlighted with an orange outline.](/assets/images/help/desktop/clone-file-menu-windows.png)

   </div>
1. Click the tab that corresponds to the location of the repository you want to clone. You can also click **URL** to manually enter the repository location.

   ![Screenshot of the "Clone a repository" window. At the top of the window, tabs labeled "GitHub.com", "GitHub Enterprise" and "URL" are highlighted with an orange outline.](/assets/images/help/desktop/choose-repository-location-mac.png)
1. From the list of repositories, click the repository you want to clone.

   ![Screenshot of the "Clone a repository" window. The "github/docs" repository is highlighted with an orange outline.](/assets/images/help/desktop/clone-a-repository-list-mac.png)
1. To select the local directory into which you want to clone the repository, next to the "Local Path" field, click **Choose...** and navigate to the directory.

   ![Screenshot of the "Clone a repository" window. A button, labeled "Choose", is highlighted with an orange outline.](/assets/images/help/desktop/clone-choose-button-mac.png)
1. At the bottom of the "Clone a Repository" window, click **Clone**.
1. Read the information in the "How are you planning to use this fork?" window.
   - If you plan to use this fork for contributing to the original upstream repository, click **To contribute to the parent project**.
   - If you plan to use this fork for a project not connected to the upstream, click **For my own purposes**.
1. Click **Continue**.

## Managing fork behavior

You can change how a fork behaves with the upstream repository in GitHub Desktop.

1. In the menu bar, select **Repository**, then click **Repository settings...**.

   <div class="ghd-tool mac">

   ![Screenshot of the menu bar on a Mac. In the expanded "Repository" dropdown menu, a cursor hovers over "Repository Settings", highlighted in blue.](/assets/images/help/desktop/repository-settings-mac.png)

   </div>

   <div class="ghd-tool windows">

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the open "Repository" dropdown menu, an option labeled "Repository Settings" is outlined in orange.](/assets/images/help/desktop/repository-settings-win.png)

   </div>
1. In the "Repository settings" window, in the left-hand sidebar, click **Fork Behavior**.
1. Under "I'll be using this fork...", use the radio buttons to select how you want to use the fork.

   ![Screenshot of the "Fork Behavior" pane. Two radio buttons, labeled "To contribute to the parent repository" and "For my own purposes", are outlined in orange.](/assets/images/help/desktop/mac-fork-behavior-menu-contribute.png)

1. Click **Save**.

## Creating an alias for a local repository

You can create an alias for a local repository to help differentiate between repositories of the same name in GitHub Desktop. Creating an alias does not affect the repository's name on GitHub. In the repositories list, aliases appear in italics.

1. In the upper-left corner of GitHub Desktop, to the right of the current repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="The triangle-down icon" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>.
1. Right-click the repository you want to create an alias for, then click **Create Alias**.
1. Type an alias for the repository.
1. Click **Create Alias**.

## Further reading

- [About remote repositories](/get-started/getting-started-with-git/about-remote-repositories)
