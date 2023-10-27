# Listing dependencies configured for version updates

You can view the dependencies that Dependabot monitors for updates.

## Viewing dependencies monitored by Dependabot

After you've enabled version updates, you can confirm that your configuration is correct using the **Dependabot** tab in the dependency graph for the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-graph" aria-hidden="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> **Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/repository/repo-nav-insights-tab.png)
1. In the left sidebar, click **Dependency graph**.
![Screenshot of the "Dependency graph" tab. The tab is highlighted with an orange outline.](/assets/images/help/graphs/graphs-sidebar-dependency-graph.png)
1. Under "Dependency graph", click **Dependabot**.
1. Optionally, to view the files monitored for a package manager, to the right of the package manager, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Show monitored" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>.

   ![Screenshot of the Dependabot tab under "Insights". A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/dependabot/monitored-dependency-files.png)

If any dependencies are missing, check the log files for errors. If any package managers are missing, review the configuration file.

## Viewing Dependabot log files

1. On the **Dependabot** tab, click **Last checked _TIME_ ago** to see the log file that Dependabot generated during the last check for version updates.
1. Optionally, to rerun the version check, click **Check for updates**.
