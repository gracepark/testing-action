# Merging a pull request

Merge a pull request into the upstream branch when work is completed. Anyone with push access to the repository can complete the merge.

## About pull request merges

In a pull request, you propose that changes you've made on a head branch should be merged into a base branch. By default, any pull request can be merged at any time, unless the head branch is in conflict with the base branch. However, there may be restrictions on when you can merge a pull request into a specific branch. For example, you may only be able to merge a pull request into the default branch if required status checks are passing. Repository administrators can add constraints like this to branches using branch protection rules. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

You can configure a pull request to merge automatically when all merge requirements are met. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

If the pull request has merge conflicts, or if you'd like to test the changes before merging, you can [check out the pull request locally](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) and merge it using the command line.

You can't merge a draft pull request. For more information about draft pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)."

The repository may be configured so that the head branch for a pull request is automatically deleted when you merge a pull request. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you delete a head branch after its pull request has been merged, GitHub checks for any open pull requests in the same repository that specify the deleted branch as their base branch. GitHub automatically updates any such pull requests, changing their base branch to the merged pull request's base branch.
For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#working-with-branches)."

</div>

Pull requests are merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge), except for [pull requests with squashed or rebased commits](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), which are merged using the fast-forward option.

You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when someone merges the pull request. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."

If you decide you don't want the changes in a topic branch to be merged to the upstream branch, you can [close the pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) without merging.

## Merging a pull request

<div class="ghd-tool webui">

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the "Pull Requests" list, click the pull request you'd like to merge.
1. Scroll down to the bottom of the pull request. Depending on the merge options enabled for your repository, you can:

    - [Merge all of the commits into the base branch](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) by clicking **Merge pull request**. If the **Merge pull request** option is not shown, click the merge dropdown menu and select **Create a merge commit**.

      ![Screenshot of the merge options for a pull request. The arrow to expand the dropdown is outlined in dark orange.](/assets/images/help/pull_requests/merge-pull-request-options.png)

    - [Squash the commits into one commit](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-pull-request-commits) by clicking the merge dropdown menu, selecting **Squash and merge** and then clicking **Squash and merge**.

    - [Rebase the commits individually onto the base branch](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#rebase-and-merge-your-pull-request-commits) by clicking the merge dropdown menu, selecting **Rebase and merge** and then clicking **Rebase and merge**.

    <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

    **Note:** Rebase and merge will always update the committer information and create new commit SHAs. For more information, see "[About pull request merges](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)."

    </div>
1. If prompted, type a commit message, or accept the default message.

   For information about the default commit messages for squash merges, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#merge-message-for-a-squash-merge)."

1. If you have more than one email address associated with your account on GitHub.com, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address.  For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** The email selector is not available for rebase merges, which do not create a merge commit, or for squash merges, which credit the user who created the pull request as the author of the squashed commit.

   </div>
1. Click **Confirm merge**, **Confirm squash and merge**, or **Confirm rebase and merge**.
1. Optionally, [delete the branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request). This keeps the list of branches in your repository tidy.

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

To merge a pull request, use the `gh pr merge` subcommand. Replace `pull-request` with the number, URL, or head branch of the pull request.

```shell
gh pr merge PULL-REQUEST
```

Follow the interactive prompts to complete the merge. For more information about the merge methods that you can choose, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

Alternatively, you can use flags to skip the interactive prompts. For example, this command will squash the commits into a single commit with the commit message "my squash commit", merge the squashed commit into the base branch, and then delete the local and remote branch.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

</div>

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request)"
- "[AUTOTITLE](/desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch)" using GitHub Desktop
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)"
