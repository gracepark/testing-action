# Creating a project (classic)

Classic projects can be used to create customized workflows to suit your needs, like tracking and prioritizing specific feature work, comprehensive roadmaps, or even release checklists.

You can use a classic project template to create a classic project with automation already configured. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards#templates-for-project-boards)."

You can also copy a classic project to reuse its customizations for similar projects. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board)."

You can link up to twenty-five repositories to your organization or user-owned classic project. Linking repositories makes it easier to add issues and pull requests from those repositories to your classic project using **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-hidden="true"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> Add cards** or from the issue or pull requests sidebar. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."

Once you've created your classic project, you can add issues, pull requests, and notes to it. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board)" and "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board)."

You can also configure workflow automations to keep your classic project in sync with the status of issues and pull requests. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."

You can use GitHub's API to import a project board. For more information, see "[AUTOTITLE](/graphql/reference/mutations#importproject/)."

## Creating a user-owned classic project

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You can only create a new classic project board for an organization, user, or repository that already has at least one classic project board. If you're unable to create a classic project board, create a beta project board instead. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)."

</div>

1. In the top right corner of GitHub.com, click your profile photo, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu.png)

1. In the top right corner of GitHub.com, click your profile photo, then click **Your profile**.
1. On the top of your profile page, in the main navigation, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-project" aria-hidden="true"><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path></svg> **Projects**.

   ![Screenshot showing profile tabs. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png)
1. Click **New Project**.
1. Type a name and description for your project board.
1. Optionally, to add a template to your project board, use the **Template:** drop-down menu and click a template.
1. Under "Visibility", choose to make your project board public or private. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)."
1. Optionally, under **Linked repositories**, search for a repository you'd like to link to your project board.
1. Click **Create project**.
1. On your new project board, to add your first column, **Add a column**.
1. Under "Column name", type the name of the column you want to create.
1. Optionally, under "Automation", select an automation preset using the drop-down menu.
1. Select the workflow automations you want to configure for the column.
1. Click **Create column**.
1. Add columns to best suit your workflow.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To edit or remove a column from your project board, in the upper-right corner of the column, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.

</div>

## Creating an organization-wide classic project

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You can only create a new classic project board for an organization, user, or repository that already has at least one classic project board. If you're unable to create a classic project board, create a beta project board instead. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)."

</div>

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Click the name of your organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-project" aria-hidden="true"><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path></svg> **Projects**.

1. Click **New Project**.
1. Type a name and description for your project board.
1. Optionally, to add a template to your project board, use the **Template:** drop-down menu and click a template.
1. Under "Visibility", choose to make your project board public or private. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)."
1. Optionally, under **Linked repositories**, search for a repository you'd like to link to your project board.
1. Click **Create project**.
1. On your new project board, to add your first column, **Add a column**.
1. Under "Column name", type the name of the column you want to create.
1. Optionally, under "Automation", select an automation preset using the drop-down menu.
1. Select the workflow automations you want to configure for the column.
1. Click **Create column**.
1. Add columns to best suit your workflow.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To edit or remove a column from your project board, in the upper-right corner of the column, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.

</div>

## Further reading

- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)"
