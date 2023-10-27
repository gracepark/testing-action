# Tracking code scanning alerts in issues using task lists

You can add code scanning alerts to issues using task lists. This makes it easy to create a plan for development work that includes fixing alerts.

**Who can use this feature**: If you have write permission to a repository you can track code scanning alerts in issues using task lists.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About tracking code scanning alerts in issues

Code scanning alerts integrate with task lists in GitHub Issues to make it easy for you to prioritize and track alerts with all your development work. To track a code scanning alert in an issue, add the URL for the alert as a task list item in the issue. For more information about task lists, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."

You can also quickly create a new issue to track an alert:
- From a code scanning alert. For more information, see "[Creating a tracking issue from a code scanning alert](#creating-a-tracking-issue-from-a-code-scanning-alert)."
- From the API. For more information, see "[Creating a tracking issue from the API](#creating-a-tracking-issue-from-the-api)."

You can use more than one issue to track the same code scanning alert, and issues can belong to different repositories from the repository where the code scanning alert was found.

GitHub provides visual cues in different locations of the user interface to indicate when you are tracking code scanning alerts in issues.

- The code scanning alerts list page will show which alerts are tracked in issues so that you can view at a glance which alerts still require processing and how many issues they are tracked in.

  ![Screenshot of the code scanning alerts view. The first entry includes the issue icon followed by the number 2. The third entry includes the issue icon followed by the number 1. Both are outlined in dark orange.](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- A "tracked in" section will also show in the corresponding alert page.

  ![Screenshot of a code scanning alert. Under the alert title, "Tracked by #1, #2" is outlined in dark orange.](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png)

- On the tracking issue, GitHub displays a security badge icon in the task list and on the hovercard.

  <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

  Only users with write permissions to the repository will see the unfurled URL to the alert in the issue, as well as the hovercard. For users with read permissions to the repository, or no permissions at all, the alert will appear as a plain URL.

  </div>

  The color of the icon is grey because an alert has a status of "open" or "closed" on every branch. The issue tracks an alert, so the alert cannot have a single open/closed state in the issue. If the alert is closed on one branch, the icon color will not change.

  ![Screenshot showing an issue that tracks a code scanning alert. The hovercard for the alert is displayed, with a grey security badge icon preceding the title.](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

The status of the tracked alert won't change if you change the checkbox state of the corresponding task list item (checked/unchecked) in the issue.

## Creating a tracking issue

Instead of tracking a code scanning alert in an existing issue, you can create a new issue to track an alert directly. You can create tracking issues for code scanning alerts from the alert itself, or from the API.

### Creating a tracking issue from a code scanning alert

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the left sidebar, click **Code scanning alerts**.
1. Under "Code scanning," click the alert you'd like to explore to display the detailed alert page.
1. Optionally, to find the alert to track, you can use the free-text search or the drop-down menus to filter and locate the alert. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)."
1. Towards the top of the page, on the right side, click **Create issue**.

   ![Screenshot of a code scanning alert. The "Create issue" button is outlined in dark orange.](/assets/images/help/repository/code-scanning-create-issue-for-alert.png)

   GitHub automatically creates an issue to track the alert and adds the alert as a task list item.
   GitHub prepopulates the issue:
   - The title contains the name of the code scanning alert.
   - The body contains the task list item with the full URL to the code scanning alert.
1. Optionally, edit the title and the body of the issue.
   <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

    **Warning:** You may want to edit the title of the issue as it may expose security information. You can also edit the body of the issue. Make sure that you keep the task list item with a link to the alert otherwise the issue will no longer track the alert.
   </div>

1. Click **Submit new issue**.

### Creating a tracking issue from the API

1. Begin creating an issue through the API. For more information, see "[Create an issue](/rest/issues/issues#create-an-issue)."
1. Provide the code scanning link within the body of the issue. You must use the following task list syntax to create the tracked relationship: `- [ ] FULL-URL-TO-THE-CODE-SCANNING-ALERT`.

   For example, if you add `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` to an issue, the issue will track the code scanning alert that has an ID number of 17 in the **Security** tab of the `octocat-repo` repository in the `octocat-org` organization.
