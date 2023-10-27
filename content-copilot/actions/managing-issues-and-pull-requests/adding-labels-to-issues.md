# Adding labels to issues

You can use GitHub Actions to automatically label issues.

## Introduction

This tutorial demonstrates how to use the [`actions/github-script` action](https://github.com/marketplace/actions/github-script) in a workflow to label newly opened or reopened issues. For example, you can add the `triage` label every time an issue is opened or reopened. Then, you can see all issues that need to be triaged by filtering for issues with the `triage` label.

The `actions/github-script` action allows you to easily use the GitHub API in a workflow.

In the tutorial, you will first make a workflow file that uses the [`actions/github-script` action](https://github.com/marketplace/actions/github-script). Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. Choose a repository where you want to apply this project management workflow. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. In your repository, create a file called `.github/workflows/YOUR_WORKFLOW.yml`, replacing `YOUR_WORKFLOW` with a name of your choice. This is a workflow file. For more information about creating new files on GitHub, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
1. Copy the following YAML contents into your workflow file.
  
    ```yaml copy
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - uses: actions/github-script@v6
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

1. Customize the `script` parameter in your workflow file:
   - The `issue_number`, `owner`, and `repo` values are automatically set using the `context` object. You do not need to change these.
   - Change the value for `labels` to the list of labels that you want to add to the issue. Separate multiple labels with commas. For example, `["help wanted", "good first issue"]`. For more information about labels, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-labels-to-issues-and-pull-requests)."
1. Commit your workflow file to the default branch of your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."

## Testing the workflow

Every time an issue in your repository is opened or reopened, this workflow will add the labels that you specified to the issue.

Test out your workflow by creating an issue in your repository.

1. Create an issue in your repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."
1. To see the workflow run that was triggered by creating the issue, view the history of your workflow runs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
1. When the workflow completes, the issue that you created should have the specified labels added.

## Next steps

- To learn more about additional things you can do with the `actions/github-script` action, see the [`actions/github-script` action documentation](https://github.com/marketplace/actions/github-script).
- To learn more about different events that can trigger your workflow, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#issues)."
- [Search GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) for examples of workflows using this action.
