# Removing a label when a card is added to a project board column

You can use GitHub Actions to automatically remove a label when an issue or pull request is added to a specific column on a classic project.

## Introduction

This tutorial demonstrates how to use the [`actions/github-script` action](https://github.com/marketplace/actions/github-script) along with a conditional to remove a label from issues and pull requests that are added to a specific column on a classic project. For example, you can remove the `needs review` label when project cards are moved into the `Done` column.

In the tutorial, you will first make a workflow file that uses the [`actions/github-script` action](https://github.com/marketplace/actions/github-script). Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. Choose a repository where you want to apply this project management workflow. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. Choose a classic project that belongs to the repository. This workflow cannot be used with projects that belong to users or organizations. You can use an existing classic project, or you can create a new classic project. For more information about creating a project, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)."
1. In your repository, create a file called `.github/workflows/YOUR_WORKFLOW.yml`, replacing `YOUR_WORKFLOW` with a name of your choice. This is a workflow file. For more information about creating new files on GitHub, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
1. Copy the following YAML contents into your workflow file.

    ```yaml copy
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: actions/github-script@v6
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

1. Customize the parameters in your workflow file:
   - In `github.event.project_card.column_id == '12345678'`, replace `12345678` with the ID of the column where you want to un-label issues and pull requests that are moved there.

     To find the column ID, navigate to your classic project. Next to the title of the column, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Column menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> then click **Copy column link**. The column ID is the number at the end of the copied link. For example, `24687531` is the column ID for `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     If you want to act on more than one column, separate the conditions with `||`. For example, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` will act whenever a project card is added to column `12345678` or column `87654321`. The columns may be on different project boards.
   - Change the value for `name` in the `github.rest.issues.removeLabel()` function to the name of the label that you want to remove from issues or pull requests that are moved to the specified column(s). For more information on labels, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-labels-to-issues-and-pull-requests)."
1. Commit your workflow file to the default branch of your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."

## Testing the workflow

Every time a project card on a classic project in your repository moves, this workflow will run. If the card is an issue or a pull request and is moved into the column that you specified, then the workflow will remove the specified label from the issue or a pull request. Cards that are notes will not be affected.

Test your workflow out by moving an issue on your classic project into the target column.

1. Open an issue in your repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."
1. Label the issue with the label that you want the workflow to remove. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-labels-to-issues-and-pull-requests)."
1. Add the issue to the classic project column that you specified in your workflow file. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board)."
1. To see the workflow run that was triggered by adding the issue to the project, view the history of your workflow runs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
1. When the workflow completes, the issue that you added to the project column should have the specified label removed.

## Next steps

- To learn more about additional things you can do with the `actions/github-script` action, see the [`actions/github-script` action documentation](https://github.com/marketplace/actions/github-script).
- [Search GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) for examples of workflows using this action.
