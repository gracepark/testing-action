# About automation for projects (classic)

You can configure automatic workflows to keep the status of classic project cards in sync with the associated issues and pull requests.

To set up automatic workflows for a repository classic project, you must have write access to the repository. Organization owners and members can configure automatic workflows on an organization-wide classic project.  For more information, see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)."

You can automate actions based on triggering events for classic project columns. This eliminates some of the manual tasks in managing a classic project. For example, you can configure a "To do" column, where any new issues or pull requests you add to a classic project are automatically moved to the configured column. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/configuring-automation-for-project-boards)."  

You can use a classic project template to create a classic project with automation already configured. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards#templates-for-project-boards)."

You can also copy a classic project to reuse its customizations for similar projects. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board)."

Classic project automation can also help teams develop a shared understanding of a classic project's purpose and the team's development process by creating a standard workflow for certain actions.

When you close a classic project, any workflow automation configured for the classic project will pause. If you reopen a classic project, you have the option to sync automation, which updates the position of the cards on the board according to the automation settings configured for the project. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)" or "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)."

## Automation options

| Column preset | Configuration options |
| --- | --- |
| To do | <ul><li>Move all newly added issues here</li><li>Move all newly added pull requests here</li><li>Move all reopened issues here</li><li>Move all reopened pull requests here</li></ul> |
| In progress | <ul><li>Move all newly opened pull requests here</li><li>Move all reopened issues here</li><li>Move all reopened pull requests here</li><li>Move all pull requests that meet the base branch's minimum number of required reviews here</li><li>Move all pull requests that no longer meet the base branch's minimum number of required reviews here</li></ul> |
| Done | <ul><li>Move all closed issues here</li><li>Move all merged pull requests here</li><li>Move all closed, unmerged pull requests here</li></ul> |

## Project progress tracking

You can track the progress on your classic project. Cards in the "To do", "In progress", or "Done" columns count toward the overall project progress. If progress tracking is enabled, a progress bar appears above the classic project, on the project listing page, in the issue sidebar, and in references to the project on other classic projects.

For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/tracking-progress-on-your-project-board)."

## Further reading

- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/configuring-automation-for-project-boards)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board)"
