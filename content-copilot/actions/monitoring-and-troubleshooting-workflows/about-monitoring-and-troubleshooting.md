# About monitoring and troubleshooting

You can use the tools in GitHub Actions to monitor and debug your workflows.

## Monitoring your workflows

### Using the visualization graph

Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug workflows. For example:

   ![Screenshot of the visualization graph of a workflow run.](/assets/images/help/actions/workflow-graph.png)

For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

### Adding a workflow status badge

A status badge shows whether a workflow is currently failing or passing. A common place to add a status badge is in the `README.md` file of your repository, but you can add it to any web page you'd like. By default, badges display the status of your default branch. You can also display the status of a workflow run for a specific branch or event using the `branch` and `event` query parameters in the URL.

![Screenshot of a workflow status badge. The left side contains the octocat logo and "GitHub Actions Demo", the name of the workflow. The right half is green with the text "passing."](/assets/images/help/repository/actions-workflow-status-badge.png)

For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)."

### Viewing job execution time

To identify how long a job took to run, you can view its execution time. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)."

### Viewing workflow run history

You can view the status of each job and step in a workflow. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."

## Troubleshooting your workflows

### Using workflow run logs

Each workflow run generates activity logs that you can view, search, and download. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)."

### Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."

### Canceling a workflow

If you attempt to cancel a workflow and the cancellation doesn't succeed, make sure you aren't using the `always` expression. The `always` expression causes a workflow step to run even when the workflow is canceled, which results in a hanging cancellation. For more information, see "[AUTOTITLE](/actions/learn-github-actions/expressions#always)".

## Monitoring and troubleshooting self-hosted runners

If you use self-hosted runners, you can view their activity and diagnose common issues.

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners)."
