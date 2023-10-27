# Managing notifications from your inbox

Use your inbox to quickly triage and sync your notifications across email and mobile.

## About your inbox

To use the notifications inbox on GitHub and GitHub Mobile, you must enable web and mobile notifications in your notification settings. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

To access your notifications inbox, in the upper-right corner of any page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-bell" aria-label="The notifications bell" role="img"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path></svg>.

Your inbox shows all of the notifications that you haven't unsubscribed to or marked as **Done.** You can customize your inbox to best suit your workflow using filters, viewing all or just unread notifications, and grouping your notifications to get a quick overview.

By default, your inbox will show read and unread notifications. To only see unread notifications, click **Unread** or use the `is:unread` query.

## Triaging options

You have several options for triaging notifications from your inbox.

| Triaging option | Description |
|-----------------|-------------|
| Save            | Saves your notification for later review. To save a notification, to the right of the notification, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-bookmark" aria-label="Save" role="img"><path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path></svg>. <br> <br> Saved notifications are kept indefinitely and can be viewed by clicking **Saved** in the sidebar or with the `is:saved` query. If your saved notification is older than 5 months and becomes unsaved, the notification will disappear from your inbox within a day. |
| Done            | Marks a notification as completed and removes the notification from your inbox. You can see all completed notifications by clicking **Done** in the sidebar or with the `is:done` query. Notifications marked as **Done** are saved for 5 months.
| Unsubscribe     | Automatically removes the notification from your inbox and unsubscribes you from the conversation until you are @mentioned, a team you're on is @mentioned, or you're requested for review.
| Read            | Marks a notification as read. To only view read notifications in your inbox, use the `is:read` query. This query doesn't include notifications marked as **Done**.
| Unread          | Marks notification as unread. To only view unread notifications in your inbox, use the `is:unread` query. |

To see the available keyboard shortcuts, see "[AUTOTITLE](/get-started/using-github/keyboard-shortcuts#notifications)."

Before choosing a triage option, you can preview your notification's details first and investigate. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/triaging-a-single-notification)."

## Triaging multiple notifications at the same time

To triage multiple notifications at once, select the relevant notifications and use the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> drop-down to choose a triage option.

![Screenshot of the "Notifications" page. A drop-down menu is highlighted with an orange outline.](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Default notification filters

By default, your inbox has filters for when you are assigned, participating in a thread, requested to review a pull request, or when your username is @mentioned directly or a team you're a member of is @mentioned.

## Customizing your inbox with custom filters

You can add up to 15 of your own custom filters.

1. In the upper-right corner of any page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-inbox" aria-label="You have " role="img"><path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path></svg>.

   ![Screenshot of the right corner of the header of GitHub. An inbox icon has a blue dot, indicating that there are unread notifications.](/assets/images/help/notifications/notifications-general-existence-indicator.png)
1. To open the filter settings, in the left sidebar, next to "Filters", click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="Customize filters" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>.

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Tip:** You can quickly preview a filter's inbox results by creating a query in your inbox view and clicking **Save**, which opens the custom filter settings.

   </div>

1. Add a name for your filter and a filter query. For example, to only see notifications for a specific repository, you can create a filter using the query `repo:octocat/open-source-project-name reason:participating`. You can also add emojis with a native emoji keyboard. For a list of supported search queries, see "[Supported queries for custom filters](#supported-queries-for-custom-filters)."

   ![Screenshot showing notification filters. Two input fields, with an example name and filter query filled in, are highlighted with an orange outline.](/assets/images/help/notifications-v2/custom-filter-example.png)

1. Click **Create**.

## Custom filter limitations

Custom filters do not currently support:
- Full text search in your inbox, including searching for pull request or issue titles.
- Distinguishing between the `is:issue`, `is:pr`, and `is:pull-request` query filters. These queries will return both issues and pull requests.
- Creating more than 15 custom filters.
- Changing the default filters or their order.
- Search [exclusion](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#exclude-certain-results) using `NOT` or `-QUALIFIER`.

## Supported queries for custom filters

These are the types of filters that you can use:
- Filter by repository with `repo:`
- Filter by discussion type with `is:`
- Filter by notification reason with `reason:`
- Filter by notification author with `author:`
- Filter by organization with `org:`

### Supported `repo:` queries

To add a `repo:` filter, you must include the owner of the repository in the query: `repo:owner/repository`. An owner is the organization or the user who owns the GitHub asset that triggers the notification. For example, `repo:octo-org/octo-repo` will show notifications triggered in the octo-repo repository within the octo-org organization.

### Supported `is:` queries

To filter notifications for specific activity on GitHub.com, you can use the  `is` query. For example, to only see repository invitation updates, use `is:repository-invitation`, and to only see Dependabot alerts, use `is:repository-vulnerability-alert`.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`
- `is:repository-advisory`
- `is:discussion`

For information about reducing noise from notifications for Dependabot alerts, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

You can also use the `is:` query to describe how the notification was triaged.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### Supported `reason:` queries

To filter notifications by why you've received an update, you can use the `reason:` query. For example, to see notifications when you (or a team you're on) is requested to review a pull request, use `reason:review-requested`. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications#reasons-for-receiving-notifications)."

| Query | Description |
|-----------------|-------------|
| `reason:assign` | When there's an update on an issue or pull request you've been assigned to.
| `reason:author` | When you opened a pull request or issue and there has been an update or new comment.
| `reason:comment`| When you commented on an issue or pull request.
| `reason:participating` | When you have commented on an issue or pull request or you have been @mentioned.
| `reason:invitation` | When you're invited to a team, organization, or repository.
| `reason:manual` | When you click **Subscribe** on an issue or pull request you weren't already subscribed to.
| `reason:mention` | You were directly @mentioned.
| `reason:review-requested` | You or a team you're on have been requested to review a pull request.
| `reason:security-alert` | When a security alert is issued for a repository.
| `reason:state-change`  | When the state of a pull request or issue is changed. For example, an issue is closed or a pull request is merged.
| `reason:team-mention` | When a team you're a member of is @mentioned.
| `reason:ci-activity` | When a repository has a CI update, such as a new workflow run status.

### Supported `author:` queries

To filter notifications by user, you can use the `author:` query. An author is the original author of the thread (issue, pull request, gist, discussions, and so on) for which you are being notified. For example, to see notifications for threads created by the Octocat user, use `author:octocat`.

### Supported `org:` queries

To filter notifications by organization, you can use the  `org` query. The organization you need to specify in the query is the organization of the repository for which you are being notified on GitHub. This query is useful if you belong to several organizations, and want to see notifications for a specific organization.

For example, to see notifications from the octo-org organization, use `org:octo-org`.

## Dependabot custom filters

If you use Dependabot to keep your dependencies up-to-date, you can use and save these custom filters:
- `is:repository_vulnerability_alert` to show notifications for Dependabot alerts.
- `reason:security_alert` to show notifications for Dependabot alerts and security update pull requests.
- `author:app/dependabot` to show notifications generated by Dependabot. This includes Dependabot alerts, security update pull requests, and version update pull requests.

For more information about Dependabot, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
