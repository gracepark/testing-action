# Creating an issue

Issues can be created in a variety of ways, so you can choose the most convenient method for your workflow.

**Who can use this feature**: People with read access can create an issue in a repository where issues are enabled. 

Issues can be used to keep track of bugs, enhancements, or other requests. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."

Repository administrators can disable issues for a repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues)."

## Creating an issue from a repository

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-issue-opened" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg> **Issues**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-issues.png)

1. Click **New issue**.
1. If your repository uses issue templates, next to the type of issue you'd like to open, click **Get started**.

   If the type of issue you'd like to open isn't included in the available options, click **Open a blank issue**.

   ![Screenshot of the template chooser for an issue. Below the template choices, a link, labeled "Open a blank issue," is outlined in dark orange.](/assets/images/help/issues/blank-issue-link.png)
1. In the "Title" field, type a title for your issue.
1. In the comment body field, type a description of your issue.
1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project board](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).
1. When you're finished, click **Submit new issue**.

## Creating an issue with GitHub CLI

GitHub CLI is an open source tool for using GitHub from your computer's command line. When you're working from the command line, you can use the GitHub CLI to save time and avoid switching context. To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

To create an issue, use the `gh issue create` subcommand. To skip the interactive prompts, include the `--body` and the `--title` flags.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

You can also specify assignees, labels, milestones, and projects.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Creating an issue from a comment

You can open a new issue from a comment in an issue or pull request. When you open an issue from a comment, the issue contains a snippet showing where the comment was originally posted.

1. Navigate to the comment that you would like to open an issue from.
1. In that comment, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Show options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.

   ![Screenshot of a comment on a pull request. The kebab button is outlined in dark orange.](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)

1. Click **Reference in new issue**.
1. Use the "Repository" dropdown menu, and select the repository you want to open the issue in.
1. Type a descriptive title and body for the issue.
1. Click **Create issue**.
1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project board](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).
1. When you're finished, click **Submit new issue**.

## Creating an issue from code

You can open a new issue from a specific line or lines of code in a file or pull request. When you open an issue from code, the issue contains a snippet showing the line or range of code you chose. You can only open an issue in the same repository where the code is stored.

1. On GitHub.com, navigate to the main page of the repository.
1. Locate the code you want to reference in an issue:
    - To open an issue about code in a file, navigate to the file.
    - To open an issue about code in a pull request, navigate to the pull request and click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-diff" aria-hidden="true"><path d="M8.75 1.75V5H12a.75.75 0 0 1 0 1.5H8.75v3.25a.75.75 0 0 1-1.5 0V6.5H4A.75.75 0 0 1 4 5h3.25V1.75a.75.75 0 0 1 1.5 0ZM4 13h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 4 13Z"></path></svg> **Files changed**. Then, browse to the file that contains the code you want included in your comment, and click **View**.
1. Choose whether to select a single line or a range.

   - To select a single line of code, click the line number to highlight the line.
   - To select a range of code, click the number of the first line in the range to highlight the line of code. Then, hover over the last line of the code range, press <kbd>Shift</kbd>, and click the line number to highlight the range.
1. To the left of the code range, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Code line X options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>. In the dropdown menu, click **Reference in new issue**.

   ![Screenshot of a file, with 8 lines selected. To the left of the first selected line, a button labeled with a kebab icon is outlined in dark orange.](/assets/images/help/repository/open-new-issue-specific-line.png)
1. In the "Title" field, type a title for your issue.
1. In the comment body field, type a description of your issue.
1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project board](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).
1. When you're finished, click **Submit new issue**.

## Creating an issue from a task list item

Within an issue, you can use task lists to break work into smaller tasks and track the full set of work to completion. If a task requires further tracking or discussion, you can convert the task to an issue by hovering over the task and clicking <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-issue-opened" aria-label="The issue opened icon" role="img"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg> in the upper-right corner of the task. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."

## Creating an issue from a URL query

You can use query parameters to open issues. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or an issue template on GitHub. To create your own query parameters, you must match the key and value pair.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You can also create issue templates that open with default labels, assignees, and an issue title. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

</div>

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to add a label to an issue to use the `labels` query parameter. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

Query parameter | Example
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` creates an issue with the label "bug" and title "New bug report."
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` creates an issue with the title "New bug report" and the comment "Describe the problem" in the issue body.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` creates an issue with the labels "help wanted" and "bug".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` creates an issue with the milestone "testing milestones."
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` creates an issue and assigns it to @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` creates an issue with the title "Bug fix" and adds it to the organization's project board 1. 
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` creates an issue with a template in the issue body. The `template` query parameter works with templates stored in an `ISSUE_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

You can also use URL query parameters to fill custom text fields that you have defined in issue form templates. Query parameters for issue form fields can also be passed to the issue template chooser. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)."

## Further reading

- "[AUTOTITLE](/get-started/writing-on-github)"
