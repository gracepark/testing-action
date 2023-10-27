# Cherry-picking a commit in GitHub Desktop

You can use GitHub Desktop to pick a specific commit on one branch and copy the commit to another branch.

## About Git cherry-pick

You can cherry-pick a commit on one branch to create a copy of the commit with the same changes on another branch. If you commit changes to the wrong branch or want to make the same changes to another branch, you can cherry-pick the commit to apply the changes to another branch. You can also use cherry-picking to apply specific changes before you are ready to create or merge a pull request. For example, if you commit a bug fix to a feature branch, you can cherry-pick the commit with the bug fix to other branches of your project.

You can also use cherry-picking when collaborating with a team. Some projects incorporate contributions by cherry-picking commits. For more information, see [Distributed Git - Maintaining a Project](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) in the Git documentation.

## Cherry-picking a commit

1. In GitHub Desktop, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)
1. In the list of branches, click the branch that has the commit that you want to cherry-pick.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Select the commit you would like to cherry-pick.

   <div class="ghd-tool mac">

   You can select one commit or select multiple commits using <kbd>Command</kbd> or <kbd>Shift</kbd>.

   </div>

   <div class="ghd-tool windows">

   You can select one commit or select multiple commits using <kbd>Ctrl</kbd> or <kbd>Shift</kbd>.

   </div>

1. Right-click the selected commit and click **Cherry pick commit**, then select the branch that you want to copy the commit to. You can also drag the commit that you want to cherry-pick from the "History" tab to the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch** dropdown menu, then drop the commit on the branch that you want to copy the commit to.

   ![Screenshot of the "History" tab and the "Current Branch" dropdown view. The cursor hovers over the "my-feature" branch, and "plus one" icons indicate the addition of one commit.](/assets/images/help/desktop/cherry-picking.png)

1. The current branch changes to the branch onto which you cherry-picked the commit. You can now push the cherry-picked commit to the remote repository.

## Further reading

- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) in the Git documentation
