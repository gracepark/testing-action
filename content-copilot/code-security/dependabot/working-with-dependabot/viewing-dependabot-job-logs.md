# Viewing Dependabot job logs

To support debugging of Dependabot pull requests, GitHub provides logs of all Dependabot jobs.

## About Dependabot job logs

Whenever a Dependabot job runs, the details of the job are captured in the job logs list, which is accessible from the dependency graph.

For each manifest file, the job logs record the most recent runs of Dependabot, with each log entry displaying the job type, job ID, timestamp, and, where necessary, a link to the pull request(s) associated with the job.

You may find that the log entry contains a short error message, which can be useful for debugging issues with a particular pull request or run. If you need to troubleshoot further, you can click **view logs** to access the full log files for a specific run.

You will see the following job types recorded in the log list:
- **Version update** - refers to a Dependabot version updates run.
- **Security update** - refers to a Dependabot security updates run.
- **Rebase update** - refers to a run where Dependabot has automatically rebased the pull request to resolve a conflict with the target branch. This update could apply to a pull request from a Dependabot version updates job, or a Dependabot security updates job.

## Viewing Dependabot job logs

The Dependabot job logs list is accessible from the dependency graph tab in your repository.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-graph" aria-hidden="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> **Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/repository/repo-nav-insights-tab.png)
1. In the left sidebar, click **Dependency graph**.
![Screenshot of the "Dependency graph" tab. The tab is highlighted with an orange outline.](/assets/images/help/graphs/graphs-sidebar-dependency-graph.png)
1. Under "Dependency graph", click **Dependabot**.
1. To the right of the name of manifest file that you're interested in, click **Recent update jobs**.
1. Optionally, to see the full logs files for a particular job, click **view logs**.

   ![Screenshot of a Dependabot job log entry for the Gemfile package manager. A button, called "View logs", is highlighted in a dark orange outline.](/assets/images/help/dependabot/dependabot-job-logs.png)
