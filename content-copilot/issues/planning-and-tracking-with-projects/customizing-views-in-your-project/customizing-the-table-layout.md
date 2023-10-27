# Customizing the table layout

You can use the table layout to build a spreadsheet using your project's items,  GitHub metadata, and your custom fields.

## About the table layout

The table layout is a powerful and adaptable spreadsheet comprised of your issues, pull requests, and draft issues with metadata from GitHub and the custom fields you've added to your project.  You can group, sort, and filter items, and show or hide fields in your table layouts to suit the needs of everyone on your team.

For more information about changing a view to use the table layout, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout)."

## Showing and hiding fields

You can show or hide a specific field.

1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="View options" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> next to the name of the currently open view.

   ![Screenshot showing the tabs at the top of a project. The view menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/view-menu-icon.png)
1. Under "Configuration", click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-note" aria-hidden="true"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg> **Fields**.
1. Select or deselect the fields you want to show or hide.

Alternatively, open the project command palette by pressing <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) and start typing "show", "hide", or the name of the field.

You can also hide individual fields using the field headers.

1. Next to the field you want to hide, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Status column options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.
   ![Screenshot showing a field header. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/modify-field-menu.png)
1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-eye-closed" aria-hidden="true"><path d="M.143 2.31a.75.75 0 0 1 1.047-.167l14.5 10.5a.75.75 0 1 1-.88 1.214l-2.248-1.628C11.346 13.19 9.792 14 8 14c-1.981 0-3.67-.992-4.933-2.078C1.797 10.832.88 9.577.43 8.9a1.619 1.619 0 0 1 0-1.797c.353-.533.995-1.42 1.868-2.305L.31 3.357A.75.75 0 0 1 .143 2.31Zm1.536 5.622A.12.12 0 0 0 1.657 8c0 .021.006.045.022.068.412.621 1.242 1.75 2.366 2.717C5.175 11.758 6.527 12.5 8 12.5c1.195 0 2.31-.488 3.29-1.191L9.063 9.695A2 2 0 0 1 6.058 7.52L3.529 5.688a14.207 14.207 0 0 0-1.85 2.244ZM8 3.5c-.516 0-1.017.09-1.499.251a.75.75 0 1 1-.473-1.423A6.207 6.207 0 0 1 8 2c1.981 0 3.67.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.11.166-.248.365-.41.587a.75.75 0 1 1-1.21-.887c.148-.201.272-.382.371-.53a.119.119 0 0 0 0-.137c-.412-.621-1.242-1.75-2.366-2.717C10.825 4.242 9.473 3.5 8 3.5Z"></path></svg> **Hide field**.

## Grouping by field values

You can group items by a custom field value. When items are grouped, if you drag an item to a new group, the value of that group is applied. For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`. Similarly, when you add a new item to a group, the new item is populated with the value of the group.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You cannot group by title, labels, reviewers, or linked pull requests.

</div>

1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="View options" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> next to the name of the currently open view.

   ![Screenshot showing the tabs at the top of a project. The view menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/view-menu-icon.png)
1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-rows" aria-hidden="true"><path d="M16 10.75v2.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-2.5C0 9.784.784 9 1.75 9h12.5c.966 0 1.75.784 1.75 1.75Zm0-8v2.5A1.75 1.75 0 0 1 14.25 7H1.75A1.75 1.75 0 0 1 0 5.25v-2.5C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75Zm-1.75-.25H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm0 8H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Z"></path></svg> **Group by**.
1. Click the field you want to group by.
1. Optionally, to disable grouping, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-hidden="true"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> **No grouping** at the bottom of the list.

Alternatively, open the project command palette by pressing <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) and start typing "Group by."

## Reordering fields

You can change the order of fields.

1. Click the field header.

   ![Screenshot showing three field headers. One of the headers is highlighted with an orange outline.](/assets/images/help/projects-v2/select-field-header.png)

1. While continuing to click, drag the field to the required location.

## Reordering rows

You can change the order of rows.

1. Click the number at the start of the row.

   ![Screenshot showing three rows on a table layout. One of the row numbers is highlighted with an orange outline.](/assets/images/help/projects-v2/select-row-number.png)

1. While continuing to click, drag the row to the required location.

## Sorting by field values

You can sort items by a field value.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** When a table is sorted, you cannot manually reorder rows.

</div>

1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="View options" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> next to the name of the currently open view.

   ![Screenshot showing the tabs at the top of a project. The view menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/view-menu-icon.png)
1. Click **Sort**.
1. Click the field you want to sort by.
1. Optionally, to change the direction of the sort, click the field again.

   ![Screenshot of the sort menu. The button to change the direction of the sort is highlighted with an orange outline.](/assets/images/help/projects-v2/sort-order.png)

1. Optionally, to remove a sort, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-hidden="true"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> **No sorting** at the bottom of the list.

Alternatively, open the project command palette by pressing <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) and start typing "Sort by."
