# Changing the base branch of a pull request

After a pull request is opened, you can change the base branch to compare the changes in the pull request against a different branch.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: When you change the base branch of your pull request, some commits may be removed from the timeline. Review comments may also become outdated, as the line of code that the comment referenced may no longer be part of the changes in the pull request.

</div>

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the "Pull Requests" list, click the pull request you'd like to modify.
1. Next to the pull request's title, click **Edit**.

   ![Screenshot of a pull request title. A button labeled "Edit" is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-edit.png)

1. In the base branch drop-down menu, select the base branch you'd like to [compare changes against](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits#comparing-branches).

   ![Screenshot of a pull request title. The dropdown to change the base branch is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)

1. Read the information about changing the base branch and click **Change base**.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** When you open a pull request, GitHub will set the base to the commit that branch references. If the branch is updated in the future, GitHub will not update the base branch's commit.

</div>

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
