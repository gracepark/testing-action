# Viewing a project's contributors

You can see who contributed commits to a repository and its dependencies.

This repository insights graph is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/about-repository-graphs)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."
## About contributors

You can view the top 100 contributors to a repository in the contributors graph. Merge commits and empty commits aren't counted as contributions for this graph.

You can also see a list of people who have contributed to the project's Python dependencies. To access this list of community contributors, visit `https://github.com/REPO-OWNER/REPO-NAME/graphs/contributors`.

## Accessing the contributors graph

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-graph" aria-hidden="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> **Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/repository/repo-nav-insights-tab.png)
1. In the left sidebar, click **Contributors**.
   ![Screenshot of the "Contributors" tab. The tab is highlighted with a dark orange outline.](/assets/images/help/graphs/contributors-tab.png)
1. Optionally, to view contributors during a specific time period, click, then drag until the time period is selected. The contributors graph sums weekly commit numbers onto each Sunday, so your time period must include a Sunday.
   ![Screenshot of a selection of a specific time period in the contributors graph. The selection is highlighted with a dark orange outline.](/assets/images/help/graphs/repo-contributors-click-drag-graph.png)

## Troubleshooting contributors

If you don't appear in a repository's contributors graph, it may be because:
- You aren't one of the top 100 contributors.
- Your commits haven't been merged into the default branch.
- The email address you used to author the commits isn't connected to your account on GitHub.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To list all commit contributors in a repository, see "[AUTOTITLE](/rest/repos/repos#list-repository-contributors)."

</div>

If all your commits in the repository are on non-default branches, you won't be in the contributors graph. For example, commits on the `gh-pages` branch aren't included in the graph unless `gh-pages` is the repository's default branch. To have your commits merged into the default branch, you can create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

If the email address you used to author the commits is not connected to your account on GitHub, your commits won't be linked to your account, and you won't appear in the contributors graph. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."
