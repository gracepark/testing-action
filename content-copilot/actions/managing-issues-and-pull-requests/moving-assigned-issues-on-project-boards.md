# Moving assigned issues on project boards

You can use GitHub Actions to automatically move an issue to a specific column on a project board when the issue is assigned.

## Introduction

This tutorial demonstrates how to use the [`alex-page/github-project-automation-plus` action](https://github.com/marketplace/actions/github-project-automation) to automatically move an issue to a specific column on a project board when the issue is assigned. For example, when an issue is assigned, you can move it into the `In Progress` column your project board.

In the tutorial, you will first make a workflow file that uses the [`alex-page/github-project-automation-plus` action](https://github.com/marketplace/actions/github-project-automation). Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. Choose a repository where you want to apply this project management workflow. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. In your repository, choose a project board. You can use an existing project, or you can create a new project. For more information about creating a project, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)."
1. In your repository, create a file called `.github/workflows/YOUR_WORKFLOW.yml`, replacing `YOUR_WORKFLOW` with a name of your choice. This is a workflow file. For more information about creating new files on GitHub, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
1. Copy the following YAML contents into your workflow file.

    ```yaml copy
    # This workflow uses actions that are not certified by GitHub.
    # They are provided by a third-party and are governed by
    # separate terms of service, privacy policy, and support
    # documentation.

    # GitHub recommends pinning actions to a commit SHA.
    # To get a newer version, you will need to update the SHA.
    # You can also reference a tag or branch, but the action may change without warning.

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@7ffb872c64bd809d23563a130a0a97d01dfa8f43
            with:
              project: Docs Work
              column: In Progress
              repo-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    ```

1. Customize the parameters in your workflow file:
   - Change the value for `project` to the name of your project board. If you have multiple project boards with the same name, the `alex-page/github-project-automation-plus` action will act on all projects with the specified name.
   - Change the value for `column` to the name of the column where you want issues to move when they are assigned.
   - Change the value for `repo-token`:
     1. Create a personal access token with the `repo` scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
     1. Store this personal access token as a secret in your repository. For more information about storing secrets, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."
     1. In your workflow file, replace `PERSONAL_ACCESS_TOKEN` with the name of your secret.
1. Commit your workflow file to the default branch of your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."

## Testing the workflow

Whenever an issue in your repository is assigned, the issue will be moved to the specified project board column. If the issue is not already on the project board, it will be added to the project board.

If your repository is user-owned, the `alex-page/github-project-automation-plus` action will act on all projects in your repository or personal account that have the specified project name and column. Likewise, if your repository is organization-owned, the action will act on all projects in your repository or organization that have the specified project name and column.

Test your workflow by assigning an issue in your repository.

1. Open an issue in your repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."
1. Assign the issue. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)."
1. To see the workflow run that assigning the issue triggered, view the history of your workflow runs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
1. When the workflow completes, the issue that you assigned should be added to the specified project board column.

## Next steps

- To learn more about additional things you can do with the `alex-page/github-project-automation-plus` action, like deleting or archiving project cards, visit the [`alex-page/github-project-automation-plus` action documentation](https://github.com/marketplace/actions/github-project-automation).
