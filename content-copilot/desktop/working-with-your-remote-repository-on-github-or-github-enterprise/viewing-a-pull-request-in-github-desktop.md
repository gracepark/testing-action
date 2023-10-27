# Viewing a pull request in GitHub Desktop

You can open a pull request branch in GitHub Desktop to view the commit history, run checks, or make changes.

## About pull requests in GitHub Desktop

Pull requests let you propose changes to projects, provide feedback and reviews, and merge changes into projects. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

When someone creates a pull request, they make changes on a "head branch" and suggest these changes to a "base branch," such as `main`. In GitHub Desktop, you can open (or "check out") the head branch of a pull request to view the changes a contributor is suggesting. For example, you can see a history of the commits that the contributor has made, and see which files the commits modified, added, or deleted.

Checking out the head branch can be useful if you want to make changes to the branch that are too complex for you to leave as suggestions in a review. For example, you might want to make structural changes to some content, add or remove files, or resolve a merge conflict that is too complex to resolve on GitHub. From GitHub Desktop, you can view the branch in your preferred editor to view any changes or make additional updates.

Alternatively, you might just want to view information such as commit history and status checks in an environment you're familiar with, without needing to navigate to the pull request on GitHub. If checks have been enabled in your repository, GitHub Desktop will show the status of the checks on the pull request and allow you to re-run checks. For more information, see "[Working with a pull request in GitHub Desktop](#working-with-a-pull-request-in-github-desktop)."

You cannot comment on a pull request from GitHub Desktop. After reviewing changes in a pull request, you can give feedback on GitHub. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)" and "[Viewing a pull request on GitHub](#viewing-a-pull-request-on-github)."

## Opening a pull request branch in GitHub Desktop

1. In GitHub Desktop, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)
1. At the top of the drop-down menu, click **Pull Requests**.

   ![Screenshot of the "Current Branch" dropdown menu. A tab, labeled "Pull Requests", is highlighted with an orange outline.](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
1. In the list of pull requests, click the pull request you want to view.

   Optionally, to refresh the list of pull requests, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sync" aria-label="The sync icon" role="img"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg>.

   ![Screenshot of the "Pull Requests" tab. A button, labeled with an icon of two arrows forming a circle, is highlighted with an orange outline.](/assets/images/help/desktop/pull-request-list-sync.png)

When you have opened a pull request branch, you can view the contents of the branch in an editor, view the diff and commit history of the contributor's updates, and view and re-run checks. For more information, see "[Working with a pull request in GitHub Desktop](#working-with-a-pull-request-in-github-desktop)."

## Opening a pull request branch in GitHub Desktop from GitHub

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the list of pull requests, click the pull request that you would like to open in GitHub Desktop.
1. To the right of the title of the pull request, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code**, then, on the **Local** tab, click **Checkout with GitHub Desktop**.

   ![Screenshot of a pull request on GitHub. The "Code" dropdown menu is expanded, and a button, labeled "Checkout with GitHub Desktop" is outlined in orange.](/assets/images/help/desktop/open-pr-in-desktop-button.png)

When you have opened a pull request branch, you can view the contents of the branch in an editor, view the diff and commit history of the contributor's updates, and view and re-run checks. For more information, see "[Working with a pull request in GitHub Desktop](#working-with-a-pull-request-in-github-desktop)."

## Working with a pull request in GitHub Desktop

When you have checked out a pull request branch, you can use GitHub Desktop and your local editor to view the contributor's changes or make further changes to the branch. For example, you can:

- [Open the branch in your editor](#open-the-branch-in-your-editor)
- [View the commit history](#view-the-commit-history)
- [View and re-run checks](#view-and-re-run-checks)

### Open the branch in your editor

If you want to look at changes in context or make additional updates to a pull request, you can view the contents of the branch in your local editor.

1. In the "GitHub Desktop" menu bar, select **Repository**.
1. Click **Open in EDITOR**.

   ![Screenshot of a menu bar on a Mac. Under the open "Repository" dropdown menu, a cursor hovers over "Open in Visual Studio Code", highlighted in blue.](/assets/images/help/desktop/open-in-editor.png)

For more information, see "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-a-default-editor-in-github-desktop)."

### View the commit history

You can view the commit history of the branch if you want to see how the contributor arrived at the set of changes they're suggesting.

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. In "Select Branch to Compare...", search for and select the base branch of the pull request.
1. Click the **Ahead** tab.

   ![Screenshot of the "History" tab. Above a list of commits, "main" is entered as the branch to compare, and a tab labeled "Ahead" is outlined in orange.](/assets/images/help/desktop/ahead-tab.png)

For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/viewing-the-branch-history-in-github-desktop)."

### View and re-run checks

You can view the status of checks that have run against the pull request branch. Failed checks may indicate problems with the proposed changes, which could prevent the branch from merging. You can re-run checks from GitHub Desktop. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop#viewing-and-re-running-checks)."

## Viewing a pull request on GitHub

To add comments to a pull request, leave a review, or merge the pull request, you will need to navigate to the pull request on GitHub. When you have checked out a pull request branch in GitHub Desktop, you can quickly open the corresponding pull request on GitHub.

1. In the GitHub Desktop menu bar, click **Branch**.
1. Select **View Pull Request on GitHub**.

   ![Screenshot of the menu bar on a Mac. The "Branch" dropdown menu is expanded, and the cursor hovers over "View Pull Request on GitHub".](/assets/images/help/desktop/view-pr-on-github.png)
