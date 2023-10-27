# Reordering commits in GitHub Desktop

You can use GitHub Desktop to reorder commits in your branch's history.

## About reordering a commit

Reordering allows you to alter your commit history to provide a more meaningful progression of commits. GitHub Desktop allows you to drag-and-drop commits in your branch's history to reorder them.

## Reordering a commit

1. In GitHub Desktop, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)
1. In the list of branches, click the branch with the commits that you want to reorder.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Drag the commit that you want to reorder and drop it between two adjoining commits.

   ![Screenshot of a list of commits in the "History" tab. The cursor hovers over a narrow horizontal line between two commits, with a "one" icon indicating one commit is being moved.](/assets/images/help/desktop/reorder-drag-and-drop.png)

While the application reorders the commits, a **Reorder in process** dialog indicates the progress of the change.

## Error messages when reordering commits

When you reorder commits, you may see one of the following notifications or error messages.

- A notification states that the requested change to the branch will require a force push to update the remote branch. This is shown when the commits that you reordered were previously pushed to the remote branch. Force pushing alters the commit history of the branch and will affect other collaborators who are working in that branch.  Select **Begin reorder** to start the reorder, and then click **Force push origin** to push your changes.
- An error states that the reorder failed because there is a merge commit among the reordered commits.
- A notification is shown indicating that there are uncommitted changes present on your current branch. Select **Stash Changes and Continue** to store the changes and proceed, or select **Close** to dismiss the message and commit the changes. When there are no longer any uncommitted changes, you can reorder your commits.
- A message states that there are merge conflicts that you must resolve before the application can continue reordering commits on your branch.
    1. Click **View conflicts**.

       ![Screenshot of a notification about conflicts. At the end of the message, a link, labeled "View commits", is highlighted with an orange outline.](/assets/images/help/desktop/reorder-resolve-conflicts.png)
    1. Resolve any merge conflicts in your preferred way, using a text editor, the command line, or another tool. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)."

    1. When all conflicts are resolved, you can reorder your commits.
