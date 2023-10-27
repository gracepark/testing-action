# Archiving items automatically

You can configure your project's built-in workflows to automatically archive items that match a filter.

## About automatically archiving items

You can configure your project's built-in workflows to automatically archive items. Archiving items will help you stay below the limit of 1,200 items in each project.

The auto-archive workflow supports a subset of filters. You can use the following filters when configuring your workflow.

| Qualifier | Possible values
| --- | --- |
| `is` | `open`, `closed`, `merged`, `draft`, `issue`, `pr`
| `reason` | `completed`, `reopened`, `"not planned"`
| `updated` | <code><@today-<em>14</em>d</code> (the last 14 days), <code><@today-<em>3</em>w</code> (the last 3 weeks), <code><@today-<em>1</em>m</code> (the last month)

GitHub marks an issue or pull request as updated when it is:

- Created
- Reopened
- Edited
- Commented
- Labeled
- Assignees are updated
- Milestones are updated
- Transferred to another repository

Additionally, items are also marked as updated when field values in your project are changed.

When you enable automatic archiving for issues or pull requests, items in your project that already meet your criteria will also be archived. There may be some delay in archiving large numbers of items that already meet the criteria.

Projects also have a limit on the number of archived items they can contain. Your project can contain up to 10,000 archived items. For more information on permanently deleting items, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)."

## Configuring automatic archiving in your project

1. Navigate to your project.
1. In the top-right, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The menu icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)

1. In the menu, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-workflow" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z"></path></svg> **Workflows**.
1. In the "Default workflows" list, click **Auto-archive items**.
1. Next to **When**, check the item type(s) that you want to automatically archive.
1. In the "Filters" field, type the filter criteria you want to use to automatically archive items. You can only use the `is`, `reason`, and `updated` filters.
1. If the workflow is disabled, click the toggle next to **Off** to enable the workflow.

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
