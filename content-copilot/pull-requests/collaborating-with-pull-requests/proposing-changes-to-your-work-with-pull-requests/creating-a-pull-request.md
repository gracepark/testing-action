# Creating a pull request

Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.

**Who can use this feature**: Anyone with read access to a repository can create a pull request. 

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)" and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

You can specify which branch you'd like to merge your changes into when you create your pull request. Pull requests can only be opened between two branches that are different.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: To open a pull request in a public repository, you must have write access to the head or the source branch or, for organization-owned repositories, you must be a member of the organization that owns the repository to open a pull request.

</div>

You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when someone merges the pull request. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."

## Changing the branch range and destination repository

By default, pull requests are based on the parent repository's default branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch)."

If the default parent repository isn't correct, you can change both the parent repository and the branch with the drop-down lists. You can also swap your head and base branches with the drop-down lists to establish diffs between reference points. References here must be branch names in your GitHub repository.

![Screenshot of a pull request. The dropdown to edit the compare branch is expanded.](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

When thinking about branches, remember that the _base branch_ is **where** changes should be applied, the _head branch_ contains **what** you would like to be applied.

When you change the base repository, you also change notifications for the pull request. Everyone that can push to the base repository will receive an email notification and see the new pull request in their dashboard the next time they sign in.

When you change any of the information in the branch range, the Commit and Files changed preview areas will update to show your new range.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips**:
- Using the compare view, you can set up comparisons across any timeframe. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)."
- Project maintainers can add a pull request template for a repository. Templates include prompts for information in the body of a pull request. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

</div>

## Creating the pull request

<div class="ghd-tool webui">

1. On GitHub.com, navigate to the main page of the repository.
1. In the "Branch" menu, choose the branch that contains your commits.

   ![Screenshot of the branch dropdown menu on the main page of a repository.](/assets/images/help/pull_requests/branch-dropdown.png)

1. Above the list of files, in the yellow banner, click **Compare & pull request** to create a pull request for the associated branch.

   ![Screenshot of the banner above the list of files.](/assets/images/help/pull_requests/pull-request-compare-pull-request.png)
1. Use the _base_ branch dropdown menu to select the branch you'd like to merge your changes into, then use the _compare_ branch drop-down menu to choose the topic branch you made your changes in.
1. Type a title and description for your pull request.
1. To create a pull request that is ready for review, click **Create Pull Request**.
To create a draft pull request, use the drop-down and select **Create Draft Pull Request**, then click **Draft Pull Request**. For more information about draft pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** After you create a pull request, you can ask a specific person to [review your proposed changes](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request). For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)."

</div>

After your pull request has been reviewed, it can be [merged into the repository](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

To create a pull request, use the `gh pr create` subcommand.

```shell
gh pr create
```

To assign a pull request to an individual, use the `--assignee` or `-a` flags. You can use `@me` to self-assign the pull request.

```shell
gh pr create --assignee "@octocat"
```

To specify the branch into which you want the pull request merged, use the `--base` or `-B` flags. To specify the branch that contains commits for your pull request, use the `--head` or `-H` flags.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

To include a title and body for the new pull request, use the `--title` and `--body` flags.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

To mark a pull request as a draft, use the `--draft` flag.

```shell
gh pr create --draft
```

To add a labels or milestones to the new pull request, use the `--label` and `--milestone`  flags.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

To add the new pull request to a specific project, use the `--project` flag.

```shell
gh pr create --project octocat-project
```

To assign an individual or team as reviewers, use the `--reviewer` flag.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

To create the pull request in your default web browser, use the `--web` flag.

```shell
gh pr create --web
```

</div>

<div class="ghd-tool desktop">

1. Click **Preview Pull Request**. GitHub Desktop will open a preview dialog showing the diff of the changes between your current branch and the base branch.

   <div class="ghd-tool mac">

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

   </div>

   <div class="ghd-tool windows">

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/windows-preview-pull-request.png)

   </div>

   Alternatively, to go straight to GitHub to create your pull request, select the dropdown icon and click **Create Pull Request**.

1. Confirm that the branch in the **base:** dropdown menu is the branch where you want to merge your changes.

   ![Screenshot of the "Open a Pull Request" dialog window. A button with a dropdown icon, labeled "base: development", is outlined in orange.](/assets/images/help/desktop/base-branch-selection.png)

   GitHub Desktop will advise you whether the current branch can be automatically merged into the base branch.

   ![Screenshot of the "Open a Pull Request" dialog window. A status label stating "Can't automatically merge" is highlighted with an orange outline.](/assets/images/help/desktop/preview-dialog-merge-status.png)

1. Click **Create Pull Request**. GitHub Desktop will open your default browser to take you to GitHub.
1. Type a title and description for your pull request.
1. To create a pull request that is ready for review, click **Create Pull Request**.
To create a draft pull request, use the drop-down and select **Create Draft Pull Request**, then click **Draft Pull Request**. For more information about draft pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)."

</div>

<div class="ghd-tool codespaces">

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon.
![Screenshot of the top of the "Source Control" side bar. The pull request icon is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description.
![Screenshot of the "GitHub Pull Request" side bar with a form for creating a pull request, including "Title" and "Description" fields.](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Click **Create**.

For more information on creating pull requests in GitHub Codespaces, see "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)."

</div>

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[AUTOTITLE](/get-started/writing-on-github)"
