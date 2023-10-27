# Checking out a commit in GitHub Desktop

You can use GitHub Desktop to checkout a previous commit in your repository.

## About checking out a commit

Checking out a commit allows you to view your repository in a previous state without needing to create a new branch or modify an existing branch. This can be helpful when debugging since it allows you to see if a bug exists in your repository at a previous commit.

Checking out a commit puts your repository in a "detached HEAD" state. In Git terminology "HEAD" is the reference that points to the tip, or latest commit, of a named branch in your repository. A "detached HEAD" state means that HEAD refers to a specific commit, but not on a named branch in your repository.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Any commits made in a "detached HEAD" state will be lost when switching branches, since these commits have not been made on a named branch. If you need to recover the lost commits, see "[Troubleshooting](#troubleshooting)."

</div>

## Checking out a commit

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Right-click on the commit you would like to checkout and select **Checkout commit**.
    ![Screenshot of a list of commits in the "History" tab. Next to a commit, in a context menu, the "Checkout Commit" option is highlighted with an orange outline.](/assets/images/help/desktop/checkout-commit.png)
1. The <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch** item in the repository bar will now show "Detached HEAD", along with the SHA of the commit that was checked out.
    ![Screenshot of the repository bar. The "Current Branch" item shows a "Detached HEAD" state and is highlighted with an orange outline.](/assets/images/help/desktop/branch-item.png)
1. To exit the "detached HEAD" state you will need to switch branches. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop#switching-between-branches)."

## Troubleshooting

You can recover commits that have been made in a "detached HEAD" state using the `git reflog` command from the Git command line. You can open your repository in the command line from GitHub Desktop by going to the menu bar, selecting **Repository**, and clicking **Open in command line**.

The `git reflog` command will show the output of events that have happened in your repository, including commits. Here is a sample output of the `git reflog` command:

```shell
81fa9136f8 (HEAD -> main) HEAD@{0}: checkout: moving from 8bd5e736a27a52a7e36a856b30e6f0582d341aa1 to main
8bd5e736a2 HEAD@{1}: commit: testing out a feature
22fa76c125 HEAD@{2}: checkout: moving from main to 22fa76c1250a2847305b9325752d941dbaa55983
```

The `8bd5e736a2 HEAD@{1}: commit: testing out a feature` line is the commit that we want to recover, since it was made while the repository was in a "detached HEAD" state. To recover it you can run `git cherry-pick 8bd5e736a2` to apply the commit to the current branch in your repository.

## Further reading

- [Detached HEAD](https://git-scm.com/docs/git-checkout#_detached_head) in the Git documentation
- [Git cherry-pick](https://git-scm.com/docs/git-cherry-pick) in the Git documentation
