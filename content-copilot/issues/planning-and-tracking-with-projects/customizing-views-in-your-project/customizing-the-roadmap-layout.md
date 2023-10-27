# Customizing the roadmap layout

You can use the roadmap layout to view your project's items on a timeline.

## About the roadmap layout

The roadmap layout provides a high-level visualization of your project across a configurable timespan, and allows you to drag items to affect their start and target dates. Roadmaps use your custom date and iteration fields to position your issues, pull requests, and draft issues on a timeline, allowing you to track work over time and watch progress.

For more information about changing a view to use the roadmap layout, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout)."

## Setting the start and target date fields

You can set the date or iteration fields that your roadmap will use to position items. When you set a view to a roadmap layout, GitHub will attempt to use existing date and iteration fields you have already set up. For more information on creating new fields, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-date-fields)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-iteration-fields)."

1. In the top right of your roadmap, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-calendar" aria-hidden="true"><path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z"></path></svg> **Date fields**.

   ![Screenshot showing the menu items for a roadmap layout. The "Date fields" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/roadmap-menu-dates.png)

1. Optionally, to create a new date or iteration field, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-hidden="true"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> **New field**, type the name of your field, and click **Save**. You can then select the new field or create another.
1. Select a date or iteration field for "Start date" and "Target date."

## Setting the zoom level

You can choose the density of items on your roadmap. You can zoom in to show one month at a time or, for a greater overview, you can zoom out to show a quarter of a year or a full year.

1. In the top right of your roadmap, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-search" aria-label="The zoom icon next to Month" role="img"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>.

   ![Screenshot showing the menu items for a roadmap layout. The "Zoom" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/roadmap-zoom-button.png)

1. Select either **Month**, **Quarter**, or **Year**.

## Showing and hiding fields

When you show and hide fields on the roadmap layout, you define which fields are shown when the side panel opens. This setting will not affect the information visible on the roadmap layout.

1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="View options" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> next to the name of the currently open view.

   ![Screenshot showing the tabs at the top of a project. The view menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/view-menu-icon.png)
1. Under "Configuration", click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-note" aria-hidden="true"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg> **Fields**.
1. Select or deselect the fields you want to show or hide.

Alternatively, open the project command palette by pressing <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) and start typing "show", "hide", or the name of the field.

## Grouping by field values

You can group items by a custom field value.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You cannot group by title, labels, reviewers, or linked pull requests.

</div>

1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="View options" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> next to the name of the currently open view.

   ![Screenshot showing the tabs at the top of a project. The view menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/view-menu-icon.png)
1. Click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-rows" aria-hidden="true"><path d="M16 10.75v2.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-2.5C0 9.784.784 9 1.75 9h12.5c.966 0 1.75.784 1.75 1.75Zm0-8v2.5A1.75 1.75 0 0 1 14.25 7H1.75A1.75 1.75 0 0 1 0 5.25v-2.5C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75Zm-1.75-.25H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm0 8H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Z"></path></svg> **Group by**.
1. Click the field you want to group by.
1. Optionally, to disable grouping, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-hidden="true"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> **No grouping** at the bottom of the list.

Alternatively, open the project command palette by pressing <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) and start typing "Group by."
