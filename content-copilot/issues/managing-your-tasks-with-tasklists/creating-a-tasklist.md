# Creating a tasklist

You can create a tasklist using the GitHub UI or Markdown.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Tasklists are in private beta and subject to change. We have currently paused onboarding to the beta.

</div>

<!-- n.b. separate note on "About tasklists" -->

## Creating tasklists in the UI

You can use the **Add tasklist** button to quickly add a tasklist to your issue. The **Add tasklist** button is available when you view or edit an issue.

1. Navigate to the issue you want to contain your new tasklist. You can also create a new issue.
1. At the bottom of the issue description, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-hidden="true"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> **Add tasklist**.

   ![Screenshot of an issue. The "Add tasklist" button is highlighted with an orange outline.](/assets/images/help/projects-v2/add-tasklist-ui.png)

1. You can then add issues, pull requests, and draft tasks to your new tasklist. For more information, see "[AUTOTITLE](/issues/managing-your-tasks-with-tasklists/managing-tasks-in-a-tasklist)."

## Creating tasklists with Markdown

You can create tasklists using Markdown in the issue description (the opening comment of an issue). You can include links to issues and pull requests or create draft issues.

You can add a tasklist by copying the Markdown below into your issue description:

````markdown copy
```[tasklist]
### My tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft task
```
````

You can also use the **Add tasklist** button while editing your issue to insert the Markdown for a tasklist:

![Screenshot an issue. The "Add tasklist" button is highlighted with an orange outline.](/assets/images/help/projects-v2/add-tasklist-markdown.png)

Once you have started editing your tasklist Markdown, you can add new tasks by preceding each new task with `- [ ] ` and then adding either:

- A draft task. Draft tasks are text that can later be converted into issues.
- The full link to an issue or pull request.  For example, `https://github.com/octo-org/octo-repo/issues/45`. If an issue or pull request is in the same repository as your tasklist, you can use the #ISSUE-NUMBER shorthand syntax. For example, `#45`.

If you add a draft task, it must meet these requirements:

- Draft tasks can be formatted using Markdown.
- Draft tasks must not exceed 512 characters in length.

Your tasklist will be rendered by GitHub when you preview your changes and when you save the issue. You can then make changes and add issues and draft tasks using the GitHub UI. If you edit the issue description, you will be able to modify the Markdown directly or copy the Markdown to duplicate the tasklist in other issues.

## Changing the title of a tasklist

When you create a new tasklist, the default title is "Tasks." You can modify the title by clicking <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-hidden="true"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> **Rename** in the tasklist's context menu or by editing the issue's markdown.

1. In the top-right of the issue body, select <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Show options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> and click **Edit**.

   ![Screenshot of the header of an issue comment. In the right corner, a horizontal kebab icon is outlined in dark orange.](/assets/images/help/issues/comment-menu.png)
1. In the fenced code block that starts with ````[tasklist]`, add a header with your new title, such as `### My new title`.

   ![Screenshot of an issue comment in edit mode. Under the line that says "```tasklist", a line that says "### My new title" is outlined in dark orange.](/assets/images/help/issues/edit-tasklist-title.png)

1. Click **Update comment**.

## Copying a tasklist

When you copy your tasklist using the "Copy Markdown" option, GitHub copies Markdown to your clipboard and includes the issue title so you can paste the tasklist outside of GitHub without losing context. See below for an example of a copied Markdown tasklist:

```markdown
- [x] [Design new landing page](https://github.com/octocat/octoproject/issues/4)
- [ ] [Translate content into supported languages](https://github.com/octocat/octoproject/issues/11)
```

1. In the top-right of your tasklist, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="tracking block item menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.

   ![Screenshot of a tasklist. The tracking block item menu, which is labeled with a horizontal kebab icon, is outlined in dark orange.](/assets/images/help/projects-v2/tasklist-kebab.png)

1. In the menu, click **Copy markdown**.
