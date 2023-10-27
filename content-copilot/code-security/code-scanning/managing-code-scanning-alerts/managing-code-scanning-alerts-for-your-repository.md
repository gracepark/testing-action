# Managing code scanning alerts for your repository

From the security view, you can view, fix, or dismiss alerts for potential vulnerabilities or errors in your project's code.

**Who can use this feature**: If you have write permission to a repository you can manage code scanning alerts for that repository.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## Viewing the alerts for a repository

Anyone with read permission for a repository can see code scanning annotations on pull requests. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

You need write permission to view a summary of all the alerts for a repository on the **Security** tab.

By default, the code scanning alerts page is filtered to show alerts for the default branch of the repository only.

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the left sidebar, click **Code scanning alerts**.
1. Optionally, use the free text search box or the drop-down menus to filter alerts. For example, you can filter by the tool that was used to identify alerts.
1. Under "Code scanning," click the alert you'd like to explore to display the detailed alert page.
   The status and details on the alert page only reflect the state of the alert on the default branch of the repository, even if the alert exists in other branches. You can see the status of the alert on non-default branches in the **Affected branches** section on the right-hand side of the alert page. If an alert doesn't exist in the default branch, the status of the alert will display as "in pull request" or "in branch" and will be colored grey.
1. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used.
   ![Screenshot of a code scanning alert. The "Show paths" link is highlighted with a dark orange outline. The "Show more" link, described in the next step, is also highlighted.](/assets/images/help/repository/code-scanning-alert-details.png)

1. Alerts from CodeQL analysis include a description of the problem. Click **Show more** for guidance on how to fix your code.

For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** For code scanning analysis with CodeQL, you can see information about the latest run in a header at the top of the list of code scanning alerts for the repository.

For example, you can see when the last scan ran, the number of lines of code analyzed compared to the total number of lines of code in your repository, and the total number of alerts that were generated.

</div>

## Filtering code scanning alerts

You can filter the alerts shown in the code scanning alerts view. This is useful if there are many alerts as you can focus on a particular type of alert. There are some predefined filters and a range of keywords that you can use to refine the list of alerts displayed.

When you select a keyword from either a drop-down list, or as you enter a keyword in the search field, only values with results are shown. This makes it easier to avoid setting filters that find no results.

![Screenshot of the search field on the code scanning alerts view. The user has typed "branch:dependabot" into the field. The names of all valid branches with a name including "dependabot" are shown in a drop-down menu.](/assets/images/help/repository/code-scanning-filter-keywords.png)

If you enter multiple filters, the view will show alerts matching _all_ these filters. For example, `is:closed severity:high branch:main` will only display closed high-severity alerts that are present on the `main` branch. The exception is filters relating to refs (`ref`, `branch` and `pr`): `is:open branch:main branch:next` will show you open alerts from both the `main` branch and the `next` branch.

Please note that if you have filtered for alerts on a non-default branch, but the same alerts exist on the default branch, the alert page for any given alert will still only reflect the alert's status on the default branch, even if that status conflicts with the status on a non-default branch. For example, an alert that appears in the "Open" list in the summary of alerts for `branch-x` could show a status of "Fixed" on the alert page, if the alert is already fixed on the default branch. You can view the status of the alert for the branch you filtered on in the  **Affected branches** section on the right side of the alert page.

You can prefix the `tag` filter with `-` to exclude results with that tag. For example, `-tag:style` only shows alerts that do not have the `style` tag.

### Restricting results to application code only

You can use the "Only alerts in application code" filter or `autofilter:true` keyword and value to restrict results to alerts in application code. For more information about the types of code that are automatically labeled as not application code, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-labels-for-alerts-that-are-not-found-in-application-code)."

## Searching code scanning alerts

You can search the list of alerts. This is useful if there is a large number of alerts in your repository, or if you don't know the exact name for an alert for example. GitHub performs the free text search across:
- The name of the alert
- The alert details (this also includes the information hidden from view by default in the **Show more** collapsible section)

| Supported search | Syntax example | Results |
| ---- | ---- | ---- |
| Single word search | `injection` | Returns all the alerts containing the word `injection` |
| Multiple word search | `sql injection` | Returns all the alerts containing `sql` or `injection` |
| Exact match search</br>(use double quotes) |  `"sql injection"` | Returns all the alerts containing the exact phrase `sql injection` |
| OR search | `sql OR injection` | Returns all the alerts containing `sql` or `injection` |
| AND search | `sql AND injection` | Returns all the alerts containing both words `sql` and `injection` |

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips:**
- The multiple word search is equivalent to an OR search.
- The AND search will return results where the search terms are found _anywhere_, in any order in the alert name or details.

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the left sidebar, click **Code scanning alerts**.
1. To the right of the **Filters** drop-down menus, type the keywords to search for in the free text search box.
   ![Screenshot of the search field on the code scanning alerts view. The field includes the pre-defined filters "is: open branch:main". The free text of "sql or injection" is outlined in dark orange.](/assets/images/help/repository/code-scanning-search-alerts.png)
1. Press <kbd>return</kbd>. The alert listing will contain the open code scanning alerts matching your search criteria.

## Fixing an alert

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has code scanning scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger code scanning analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

If you have write permission for a repository, you can view fixed alerts by viewing the summary of alerts and clicking **Closed**. For more information, see "[Viewing the alerts for a repository](#viewing-the-alerts-for-a-repository)." The "Closed" list shows fixed alerts and alerts that users have dismissed.

You can use the free text search or the filters to display a subset of alerts and then in turn mark all matching alerts as closed.

Alerts may be fixed in one branch but not in another. You can use the "Branch" filter, on the summary of alerts, to check whether an alert is fixed in a particular branch.

![Screenshot of the search field on the code scanning, with the "Branch" dropdown menu expanded. The "Branch" button is outlined in dark orange.](/assets/images/help/repository/code-scanning-branch-filter.png)

Please note that if you have filtered for alerts on a non-default branch, but the same alerts exist on the default branch, the alert page for any given alert will still only reflect the alert's status on the default branch, even if that status conflicts with the status on a non-default branch. For example, an alert that appears in the "Open" list in the summary of alerts for `branch-x` could show a status of "Fixed" on the alert page, if the alert is already fixed on the default branch. You can view the status of the alert for the branch you filtered on in the  **Affected branches** section on the right side of the alert page.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:**
If you run code scanning using multiple configurations, then sometimes an alert will have multiple analysis origins. Unless you run all configurations regularly, you may see alerts that are fixed in one analysis origin but not in another. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-analysis-origins)."

</div>

## Dismissing  alerts

There are two ways of closing an alert. You can fix the problem in the code, or you can dismiss the alert. 

Dismissing an alert is a way of closing an alert that you don't think needs to be fixed. For example, an error in code that's used only for testing, or when the effort of fixing the error is greater than the potential benefit of improving the code. You can dismiss alerts from code scanning annotations in code, or from the summary list within the **Security** tab.

When you dismiss an alert:

- It's dismissed in all branches.
- The alert is removed from the number of current alerts for your project.
- The alert is moved to the "Closed" list in the summary of alerts, from where you can reopen it, if required.
- The reason why you closed the alert is recorded.
- Next time code scanning runs, the same code won't generate an alert.

To dismiss  alerts:

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the left sidebar, click **Code scanning alerts**.
1. If you want to dismiss an alert, it's important to explore the alert first, so that you can choose the correct dismissal reason. Click the alert you'd like to explore.
1. Review the alert, then click **Dismiss** and choose a reason for closing the alert.
   ![Choosing a reason for dismissing an alert.](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)
   It's important to choose the appropriate reason from the drop-down menu as this may affect whether a query continues to be included in future analysis. 

   If you dismiss a CodeQL alert as a false positive result, for example because the code uses a sanitization library that isn't supported, consider contributing to the CodeQL repository and improving the analysis. For more information about CodeQL, see "[Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md)."

### Dismissing multiple alerts at once

If a project has multiple alerts that you want to dismiss for the same reason, you can bulk dismiss them from the summary of alerts. Typically, you'll want to filter the list and then dismiss all of the matching alerts. For example, you might want to dismiss all of the current alerts in the project that have been tagged for a particular Common Weakness Enumeration (CWE) vulnerability.

## Auditing responses to code scanning alerts

You can audit the actions taken in response to code scanning alerts using GitHub tools. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

## Further reading

- "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)"
- "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)"
- "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/about-integration-with-code-scanning)"
