# Squashing commits in GitHub Desktop

You can use GitHub Desktop to squash commits in your branch's history.

## About squashing a commit

Squashing allows you to combine multiple commits in your branch's history into a single commit. This can help keep your repository's history more readable and understandable.

## Squashing a commit

1. In GitHub Desktop, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)
1. In the list of branches, select the branch that has the commits that you want to squash.
1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Select the commits to squash and drop them on the commit you want to combine them with.

   <div class="ghd-tool mac">

   You can select one commit or select multiple commits using <kbd>Command</kbd> or <kbd>Shift</kbd>.

   </div>

   <div class="ghd-tool windows">

   You can select one commit or select multiple commits using <kbd>Ctrl</kbd> or <kbd>Shift</kbd>.

   </div>

   ![Screenshot of a list of commits in the "History" tab. The cursor hovers over a commit, highlighted in blue. A hover-over text box says, "Squash 2 commits".](/assets/images/help/desktop/squash-drag-and-drop.png)

1. Modify the commit message of your new commit. The commit messages of the selected commits you want to squash are pre-filled into the **Summary** and **Description** fields.
1. Click **Squash Commits**.

## Error messages when squashing commits

When you squash commits, you may see one of the following notifications or error messages.

- A notification states that the requested change to the branch will require a force push to update the remote branch. Force pushing alters the commit history of the branch and will affect other collaborators who are working in that branch.  Select **Begin Squash** to start the squash, and then click **Force push origin** to push your changes.
- An error states that the squash failed because there is a merge commit among the squashed commits.
- A notification is shown indicating that there are uncommitted changes present on your current branch. Select **Stash Changes and Continue** to store the changes and proceed, or select **Close** to dismiss the message and commit the changes. When there are no longer any uncommitted changes you can squash your commits.
