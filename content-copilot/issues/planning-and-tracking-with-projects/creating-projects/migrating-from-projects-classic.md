# Migrating from projects (classic)

You can migrate your classic project to the new Projects experience.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:**

- If the project you are migrating contains more than 1,200 items, open issues will be prioritized followed by open pull requests and then notes. Remaining space will be used for closed issues, merged pull requested, and closed pull requests. Items that cannot be migrated due to this limit will be moved to the archive. If the archive limit of 10,000 items is reached, additional items will not be migrated.
- Note cards are converted to draft issues, and the contents are saved to the body of the draft issue. If information appears to be missing, make any hidden fields visible. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#showing-and-hiding-fields)."
- Automation will not be migrated.
- Triage, archive, and activity will not be migrated.
- After migration, the new migrated project and old project will not be kept in sync.

</div>

## About project migration

You can migrate your project boards to the new Projects experience and try out tables, multiple views, new automation options, and powerful field types. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

## Migrating an organization project board

1. Enable "Project migration" in feature preview. For more information, see "[AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."
1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Click the name of your organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-project" aria-hidden="true"><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path></svg> **Projects**.

1. In the left sidebar, click **Projects (classic)**.
1. Next to the project you want to migrate, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Project menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.
1. In the menu, click **Migrate**.
1. In the popup, select the dropdown menu, then click what you want to happen to the project after it is migrated. We recommend selecting "Close the old project" so it's clear which project is in use.
1. Click **Start migration**.

## Migrating a user project board

1. Enable "Project migration" in feature preview. For more information, see "[AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."
1. In the upper-right corner of GitHub.com, select your profile photo, then click **Your projects**.

   ![Screenshot showing the profile photo menu. The "Your projects" link is highlighted with an orange outline.](/assets/images/help/projects-v2/projects-profile-menu.png)

1. On the top of your profile page, in the main navigation, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-table" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path></svg> **Projects**.
   ![Screenshot showing the tabs on a user profile. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png)
1. Above the list of projects, click **Projects (classic)**.
1. Next to the project you want to migrate, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Project menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.
1. In the menu, click **Migrate**.
1. In the popup, select the dropdown menu, then click what you want to happen to the project after it is migrated. We recommend selecting "Close the old project" so it's clear which project is in use.
1. Click **Start migration**.

## Migrating a repository project board

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Projects does not support repository level projects. When you migrate a repository project board, it will migrate to either the organization or personal account that owns the repository project, and the migrated project will be pinned to the original repository.

</div>

1. Enable "Project migration" in feature preview. For more information, see "[AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."
1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-table" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path></svg> **Projects**.
1. In the left sidebar, click **Projects (classic)**.
1. Next to the project you want to migrate, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Project menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.
1. In the menu, click **Migrate**.
1. In the popup, select the dropdown menu, then click what you want to happen to the project after it is migrated. We recommend selecting "Close the old project" so it's clear which project is in use.
1. Click **Start migration**.
