# Merging a pull request with a merge queue

If a merge queue is required by the branch protection setting for the branch, you can add your pull requests to a merge queue and GitHub will merge the pull requests for you once all required checks have passed.

Pull request merge queues are available in any public repository owned by an organization, or in private repositories owned by organizations using GitHub Enterprise Cloud. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## About merge queues

A merge queue helps increase velocity by automating pull request merges into a busy branch and ensuring the branch is never broken by incompatible changes.

The merge queue provides the same benefits as the **Require branches to be up to date before merging** branch protection, but does not require a pull request author to update their pull request branch and wait for status checks to finish before trying to merge.

Using a merge queue is particularly useful on branches that have a relatively high number of pull requests merging each day from many different users.

Once a pull request has passed all required branch protection checks, a user with write access to the repository can add the pull request to the queue. The merge queue will ensure the pull request's changes pass all required status checks when applied to the latest version of the target branch and any pull requests already in the queue.

A merge queue may use GitHub Actions or your own CI provider to run required checks on pull requests in a merge queue. For more information, see "[AUTOTITLE](/actions)."

For more information about merge queues, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)."

## Adding a pull request to a merge queue

<div class="ghd-tool webui">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You can use GitHub CLI to add a pull request to a merge queue. For more information, click the "GitHub CLI" tab at the top of this article.

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the "Pull Requests" list, click the pull request you would like to add to a merge queue.

1. Click **Merge when ready** to add the pull request to the merge queue. Alternatively, if you are an administrator, you can:

   - Directly merge the pull request by checking **Merge without waiting for requirements to be met (administrators only)**, if allowed by branch protection settings, and follow the standard flow.

   ![Screenshot of the merge queue options for a pull request.](/assets/images/help/pull_requests/merge-queue-options.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** You can click  **Merge when ready** whenever you're ready to merge your proposed changes. GitHub will automatically add the pull request to the merge queue once required approval and status checks conditions are met.

   </div>

1. Confirm you want to add the pull request to the merge queue by clicking  **Confirm merge when ready**.

</div>

<div class="ghd-tool cli">

With GitHub CLI, you can use the `gh pr merge` command to add a pull request to a merge queue. If you are targeting a branch that requires a merge queue, this command automatically adds the pull request to the queue if required checks have passed. If required checks have not passed, this command enables auto-merge for the pull request. For more information, see [`gh pr merge`](https://cli.github.com/manual/gh_pr_merge) in the GitHub CLI manual.

</div>

## Removing a pull request from a merge queue

<div class="ghd-tool cli">

To remove a pull request from a merge queue, you must navigate to the repository's page on GitHub.com. You cannot use GitHub CLI to remove a pull request from a merge queue.

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the "Pull Requests" list, click the pull request you would like to remove from a merge queue.

1. To remove the pull request from the queue, click **Remove from queue**.

   ![Screenshot of the merge queue message at the bottom of a pull request. The "Remove from queue" button is outlined in dark orange.](/assets/images/help/pull_requests/remove-from-queue-button.png)

Alternatively, you can navigate to the merge queue page for the base branch, click **...** next to the pull request you want to remove, and select **Remove from queue**. For information on how to get to the merge queue page for the base branch, see the section below.

## Viewing merge queues

<div class="ghd-tool cli">

You can view the merge queue for a base branch in various places on GitHub. You cannot use GitHub CLI to view a merge queue.

</div>

<div class="ghd-tool webui">

You can view the merge queue for a base branch in various places on GitHub.

</div>

- On the **Branches** page for the repository. We recommend you use this route if you don't have or don't know about a pull request already in a queue, and if you want to see what's in that queue. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)."

  ![Screenshot of the "Branches" page for a repository. A link, labeled "33 pull requests queued to merge," is outlined in dark orange.](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- On the pull request page when merge queue is required for merging, scroll to the bottom of the timeline and click the **merge queue** link.

  ![Screenshot of the merge queue message at the bottom of a pull request. The "merge queue" link is outlined in dark orange.](/assets/images/help/pull_requests/merge-queue-link.png)

- The merge queue view shows the pull requests that are currently in the queue, with your pull requests clearly marked.

  ![Screenshot of the merge queue.](/assets/images/help/pull_requests/merge-queue-view.png)

## Understanding why your pull request was removed from the merge queue

After grouping a pull request with the latest version of the target branch and changes ahead of it in the queue, if there are failed required status checks or conflicts with the base branch, the pull request will be removed from the queue. The pull request timeline will display the reason why the pull request was removed from the queue.

There are a number of reasons a pull request can be removed from a merge queue:

- Configured CI service is reporting test failures for a merge group
- Timed out awaiting a successful CI result based off the configured timeout setting
- User requesting a removal via the API or merge queue interface
- Branch protection failure that could not automatically be resolved
