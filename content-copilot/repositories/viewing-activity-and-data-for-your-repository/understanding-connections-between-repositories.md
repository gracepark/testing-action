# Understanding connections between repositories

Use the network graph and forks list to understand fork networks.

This repository insights graph is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/about-repository-graphs)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Viewing a repository's network

The network graph displays the branch history of the entire repository network, including fork branches. This graph is a timeline of the most recent commits, and shows up to 100 of the most recently pushed-to branches. The first row references the date and the first column references the branch owner. Use arrow keys or other keyboard shortcuts to more easily navigate the graph. They are provided in the “Keyboard shortcuts available” pop up under the graph.

![Screenshot of the repository network graph.](/assets/images/help/graphs/repo-network-graph.png)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To see older branches, click and drag within the graph.

</div>

### Accessing the network graph

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-graph" aria-hidden="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> **Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/repository/repo-nav-insights-tab.png)
1. In the left sidebar, click **Network**.
![Screenshot of the left sidebar. The "Network" tab is highlighted with a dark orange outline.](/assets/images/help/graphs/network-tab.png)

## Listing the forks of a repository

The Members graph  lists the forks of a repository. 

Forks are listed alphabetically by the organization or username of the person who forked the repository. You can click on the organization or username to be redirected to the organization or user's GitHub profile page or click on the fork name to be redirected to the specific fork of the repository.

### Accessing the Members graph

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-graph" aria-hidden="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> **Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/repository/repo-nav-insights-tab.png)
1. In the left sidebar, click **Forks**.

   ![Screenshot of the left sidebar. The "Forks" tab is highlighted with a dark orange outline.](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Viewing the dependencies of a repository

You can use the dependency graph to explore the code your repository depends on.

Almost all software relies on code developed and maintained by other developers, often known as a supply chain. For example, utilities, libraries, and frameworks. These dependencies are an integral part of your code and any bugs or vulnerabilities in them may affect your code. It's important to review and maintain these dependencies.

The dependency graph provides a great way to visualize and explore the dependencies for a repository. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)" and "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)."

You can also set up your repository so that GitHub alerts you automatically whenever a security vulnerability is found in one of your dependencies. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
