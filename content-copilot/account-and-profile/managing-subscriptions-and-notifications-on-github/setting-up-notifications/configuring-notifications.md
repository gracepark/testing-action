# Configuring notifications

Choose the type of activity on GitHub that you want to receive notifications for and how you want these updates delivered.

## Notification delivery options

You can receive notifications for activity on GitHub.com in the following locations.

- The notifications inbox in the GitHub.com web interface
- The notifications inbox on GitHub Mobile, which syncs with the inbox on GitHub.com
- An email client that uses a verified email address, which can also sync with the notifications inbox on GitHub.com and GitHub Mobile

To use the notifications inbox on GitHub and GitHub Mobile, you must enable web and mobile notifications in your notification settings. For more information, see "[Choosing your notification settings](#choosing-your-notification-settings)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** If you receive both web and email notifications, you can automatically sync the read or unread status of the notification so that web notifications are automatically marked as read once you've read the corresponding email notification. To enable this sync, your email client must be able to view images from `notifications@github.com`.

</div>

### Benefits of the notifications inbox

The notifications inbox on GitHub.com and GitHub Mobile includes triaging options designed specifically for your GitHub notifications flow, including options to:
- Triage multiple notifications at once.
- Mark completed notifications as **Done** and remove them from your inbox. To view all of your notifications marked as **Done**, use the `is:done` query.
- Save a notification to review later. Saved notifications are flagged in your inbox and kept indefinitely. To view all of your saved notifications, use the `is:saved` query.
- Unsubscribe and remove a notification from your inbox.
- Preview the issue or pull request where the notification originates on GitHub.com from within the notifications inbox.
- See one of the latest reasons you're receiving a notification from your inbox with a `reasons` label.
- Create custom filters to focus on different notifications when you want.
- Group notifications in your inbox by repository or date to get a quick overview with less context switching

In addition, you can receive and triage notifications on your mobile device with GitHub Mobile. For more information, see "[Managing your notification settings with GitHub Mobile](#managing-your-notification-settings-with-github-mobile)" or "[AUTOTITLE](/get-started/using-github/github-mobile)."

### Benefits of using an email client for notifications

One benefit of using an email client is that all of your notifications can be kept indefinitely depending on your email client's storage capacity. Your inbox notifications are only kept for 5 months on GitHub unless you've marked them as **Saved**. **Saved** notifications are kept indefinitely. For more information about your inbox's retention policy, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications#notification-retention-policy)."

Sending notifications to your email client also allows you to customize your inbox according to your email client's settings, which can include custom or color-coded labels.

Email notifications also allow flexibility with the types of notifications you receive and allow you to choose different email addresses for updates. For example, you can send certain notifications for a repository to a  verified personal email address. For more information, about your email customization options, see "[Customizing your email notifications](#customizing-your-email-notifications)."

## About participating and watching notifications

When you watch a repository, you're subscribing to updates for activity in that repository. 

To see repositories that you're watching, go to your [watching page](https://github.com/watching). For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

You can configure notifications for a repository on the repository page, or on your watching page.

### About custom notifications

You can customize notifications for a repository. For example, you can choose to only be notified when updates to one or more types of events (issues, pull requests, releases, security alerts, or discussions) happen within a repository, or ignore all notifications for a repository. For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

### Participating in conversations

Anytime you comment in a conversation or when someone @mentions your username, you are participating in a conversation. By default, you are automatically subscribed to a conversation when you participate in it. You can unsubscribe from a conversation you've participated in manually by clicking **Unsubscribe** on the issue or pull request or through the **Unsubscribe** option in the notifications inbox.

For conversations you're watching or participating in, you can choose whether you want to receive notifications by email or through the notifications inbox on GitHub.com. For more information, see "[Choosing your notification settings](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

![Screenshot of the "Notification settings" page. The "Participating" and "Watching" settings are shown, each with two checkbox options, titled "Email" and "Web and Mobile".](/assets/images/help/notifications-v2/participating-and-watching-options.png)

For example, on your "Notification settings" page:
- If you don't want notifications to be sent to your email, deselect **email** for participating and watching notifications.
- If you want to receive notifications by email when you've participated in a conversation, then select **email** under "Participating".

If you do not enable watching or participating notifications for web, then your notifications inbox will not have any updates.

## Customizing your email notifications

After enabling email notifications, GitHub.com will send notifications to you as multipart emails that contain both HTML and plain text copies of the content. Email notification content includes any Markdown, @mentions, emojis, hash-links, and more, that appear in the original content on GitHub.com. If you only want to see the text in the email, you can configure your email client to display the plain text copy only.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** If you receive both web and email notifications, you can automatically sync the read or unread status of the notification so that web notifications are automatically marked as read once you've read the corresponding email notification. To enable this sync, your email client must be able to view images from `notifications@github.com`.

</div>

If you're using Gmail, you can click a button beside the notification email to visit the original issue or pull request that generated the notification.

Choose a default email address where you want to send updates for conversations you're participating in or watching. You can also specify which activity on GitHub.com you want to receive updates for using your default email address. For example, choose whether you want updates to your default email from:
- Comments on issues and pull requests.
- Pull request reviews.
- Pull request pushes.
- Your own updates, such as when you open, comment on, or close an issue or pull request.

Depending on the organization that owns the repository, you can also send notifications to different email addresses. Your organization may require the email address to be verified for a specific domain. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)."

You can also send notifications for a specific repository to an email address. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository)."

You'll only receive notification emails if you've chosen to receive email notifications in your notification settings.

If an organization you're a member of restricts email notifications to an approved email domain, you'll need to verify an email address in that domain to receive email notifications about activity in the organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)."

## Filtering email notifications

Each email notification that GitHub.com sends contains header information. The header information in every email is consistent, so you can use it in your email client to filter or forward all GitHub notifications, or certain types of GitHub notifications.

If you believe you're receiving notifications that don't belong to you, examine the `X-GitHub-Recipient` and `X-GitHub-Recipient-Address` headers. These headers show who the intended recipient is. Depending on your email setup, you may receive notifications intended for another user.

Email notifications from GitHub.com contain header information.

| Header | Information |
| --- | --- |
| `From` address | This address will always be '`notifications@github.com`'. |
| `To` field | This field connects directly to the thread. If you reply to the email, you'll add a new comment to the conversation. |
| `Cc` address | GitHub will `Cc` you if you're subscribed to a conversation. The second `Cc` email address matches the notification reason. The suffix for these notification reasons is `@noreply.github.com`. The possible notification reasons are: <ul><li>`assign`: You were assigned to an issue or pull request.</li><li>`author`: You created an issue or pull request.</li><li>`ci_activity`: A GitHub Actions workflow run that you triggered was completed.</li><li>`comment`: You commented on an issue or pull request.</li><li>`manual`: There was an update to an issue or pull request you manually subscribed to.</li><li>`mention`: You were mentioned on an issue or pull request.</li><li>`push`: Someone committed to a pull request you're subscribed to.</li><li>`review_requested`: You or a team you're a member of was requested to review a pull request.</li><li>`security_alert`: GitHub detected a vulnerability in a repository you receive alerts for.</li><li>`state_change`: An issue or pull request you're subscribed to was either closed or opened.</li><li>`subscribed`: There was an update in a repository you're watching.</li><li>`team_mention`: A team you belong to was mentioned on an issue or pull request.</li><li>`your_activity`: You opened, commented on, or closed an issue or pull request.</li></ul> |
| `mailing list` field | This field identifies the name of the repository and its owner. The format of this address is always `<repository name>.<repository owner>.github.com`. |
| `X-GitHub-Severity` field | Email notifications for Dependabot alerts that affect one or more repositories include the `X-GitHub-Severity`  header field. You can use the value of the `X-GitHub-Severity` header field to filter email notifications for Dependabot alerts. The possible severity levels are:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)." |

## Choosing your notification settings

1. In the upper-right corner of any page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-inbox" aria-label="You have " role="img"><path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path></svg>.

   ![Screenshot of the right corner of the header of GitHub. An inbox icon has a blue dot, indicating that there are unread notifications.](/assets/images/help/notifications/notifications-general-existence-indicator.png)
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Notification settings**.

   ![Screenshot of the "Notifications" page. A dropdown menu, titled "Manage notifications", is highlighted with an orange outline.](/assets/images/help/notifications-v2/manage-notifications-options.png)
1. On the notifications settings page, choose how you receive notifications when:
    - There are updates in repositories  you're watching or in a conversation you're participating in. For more information, see "[About participating and watching notifications](#about-participating-and-watching-notifications)."
    - You gain access to a new repository or you've joined a new team. For more information, see "[Automatic watching](#automatic-watching)."
    - There are new Dependabot alerts in your repository. For more information, see "[Dependabot alerts notification options](#dependabot-alerts-notification-options)."  
    - There are workflow runs updates on repositories set up with GitHub Actions. For more information, see "[GitHub Actions notification options](#github-actions-notification-options)."
    - There are new deploy keys added to repositories that belong to organizations that you're an owner of. For more information, see "[Organization alerts notification options](#organization-alerts-notification-options)."

## Automatic watching

By default, anytime you gain access to a new repository, you will automatically begin watching that repository. Anytime you join a new team, you will automatically be subscribed to updates and receive notifications when that team is @mentioned. If you don't want to automatically be subscribed, you can unselect the automatic watching options in your notification settings.

![Screenshot of "Automatic watching" options for teams and repositories.](/assets/images/help/notifications-v2/automatic-watching-options.png)

If "Automatically watch repositories" is disabled, then you will not automatically watch your own repositories. You must navigate to your repository page and choose the watch option.

For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

## Configuring your watch settings for an individual repository

You can choose whether to watch or unwatch an individual repository. You can also choose to only be notified of certain event types such as issues, pull requests, releases, security alerts, or discussions (if enabled for the repository) , or completely ignore an individual repository.

1. On GitHub.com, navigate to the main page of the repository.
1. In the upper-right corner, select the "Watch" drop-down menu, then click a watch option.

   If you want to further customize notifications, click **Custom**, then select specific events that you want to be notified of, such as Issues or Pull Requests, in addition to participating and @mentions.

   For example, if you select "Issues", you will be notified about, and subscribed to, updates on every issue (including those that existed prior to you selecting this option) in the repository. If you're @mentioned in a pull request in this repository, you'll receive notifications for that too, and you'll be subscribed to updates on that specific pull request, in addition to being notified about issues.

## Choosing where your organization’s email notifications are sent

If you belong to an organization, you can choose the email account you want notifications for organization activity sent to. For example, if you belong to an organization for work, you may want your notifications sent to your work email address, rather than your personal address.

You'll only receive notification emails if you've chosen to receive email notifications in your notification settings.

If an organization you're a member of restricts email notifications to an approved email domain, you'll need to verify an email address in that domain to receive email notifications about activity in the organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)."

1. In the upper-right corner of any page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-inbox" aria-label="You have " role="img"><path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path></svg>.

   ![Screenshot of the right corner of the header of GitHub. An inbox icon has a blue dot, indicating that there are unread notifications.](/assets/images/help/notifications/notifications-general-existence-indicator.png)
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Notification settings**.

   ![Screenshot of the "Notifications" page. A dropdown menu, titled "Manage notifications", is highlighted with an orange outline.](/assets/images/help/notifications-v2/manage-notifications-options.png)
1. Under "Default notifications email", select the email address you'd like notifications sent to.

### Customizing email routes per organization

If you are a member of more than one organization, you can configure each one to send notifications to any of your verified email addresses.  For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)."

1. In the upper-right corner of any page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-inbox" aria-label="You have " role="img"><path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path></svg>.

   ![Screenshot of the right corner of the header of GitHub. An inbox icon has a blue dot, indicating that there are unread notifications.](/assets/images/help/notifications/notifications-general-existence-indicator.png)
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Notification settings**.

   ![Screenshot of the "Notifications" page. A dropdown menu, titled "Manage notifications", is highlighted with an orange outline.](/assets/images/help/notifications-v2/manage-notifications-options.png)

1. Under "Custom routing," find your organization's name in the list.

1. Click **Edit** next to the email address you want to change.

1. Select one of your verified email addresses, then click **Save**.

## Dependabot alerts notification options

The notification options for your user account are available at [https://github.com/settings/notifications](https://github.com/settings/notifications). You can configure notification settings for each repository, in the repository watch settings.

To receive notifications about Dependabot alerts on repositories, you need to watch these repositories, and subscribe to receive "All Activity" notifications or configure custom settings to include "Security alerts." For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."

You can choose the delivery method for notifications, as well as the frequency at which the notifications are sent to you.
By default, you will receive notifications:

- in your inbox, as web notifications. A web notification is sent when Dependabot is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**On GitHub** option).
- by email, an email is sent when Dependabot is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Email** option).
- on the command line, warnings are displayed as callbacks when you push to repositories with any insecure dependencies (**CLI** option).

- on GitHub Mobile, as web notifications. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#enabling-push-notifications-with-github-mobile)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The email and web/GitHub Mobile notifications are:

- _Per repository_ when Dependabot is enabled on the repository, or when a new manifest file is committed to the repository.

- _Per organization_ when a new vulnerability is discovered.

- Sent when a new vulnerability is discovered. GitHub doesn't send notifications when vulnerabilities are updated.

</div>

You can customize the way you are notified about Dependabot alerts. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.

For more information about the notification delivery methods available to you, and advice on optimizing your notifications for Dependabot alerts, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

## Secret scanning notification options

When a new secret is detected, GitHub notifies all users with access to security alerts for the repository according to their notification preferences. These users include:
- Repository administrators
- Security managers
- Users with with custom roles with read/write access
- Organization owners and enterprise owners, if they are administrators of repositories where secrets were leaked

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Commit authors who've accidentally committed secrets will be notified, regardless of their notification preferences.

</div>

You will receive an email notification if:
- You are watching the repository.
- You have enabled notifications for "All Activity", or for custom "Security alerts" on the repository

For more information on how to configure notifications for secret scanning alerts, see "[Configuring notifications for secret scanning alerts](/code-security/secret-scanning/managing-alerts-from-secret-scanning#configuring-notifications-for-secret-scanning-alerts)."

## Organization alerts notification options

If you're an organization owner, you'll receive email notifications by default when organization members add new deploy keys to repositories within the organization. You can unsubscribe from these notifications. On the notification settings page, under "Organization alerts", unselect **Email**.

## Managing your notification settings with GitHub Mobile

When you install GitHub Mobile, you will automatically be opted into web notifications. Within the app, you can enable push notifications for the following events.
- Direct mentions
- Assignments to issues or pull requests
- Requests to review a pull request
- Requests to approve a deployment

You can also schedule when GitHub Mobile will send push notifications to your mobile device.

GitHub Enterprise Server uses background fetch to support push notifications without sending your information to a third-party service, so you may experience a delay in receiving push notifications.

### Managing your notification settings with GitHub for iOS

1. In the bottom menu, tap **Profile**.
1. To view your settings, tap <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="The Gear icon" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>.
1. To update your notification settings, tap **Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
1. Optionally, to schedule when GitHub Mobile will send push notifications to your mobile device, tap **Working Hours**, use the **Custom working hours** toggle, and then choose when you would like to receive push notifications.

### Managing your notification settings with GitHub for Android

1. In the bottom menu, tap **Profile**.
1. To view your settings, tap <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="The Gear icon" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>.
1. To update your notification settings, tap **Configure Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
1. Optionally, to schedule when GitHub Mobile will send push notifications to your mobile device, tap **Working Hours**, use the **Custom working hours** toggle, and then choose when you would like to receive push notifications.

## Configuring your watch settings for an individual repository with GitHub Mobile

You can choose whether to watch or unwatch an individual repository. You can also choose to only be notified of certain event types such as issues, pull requests, discussions (if enabled for the repository) and new releases, or completely ignore an individual repository.

1. On GitHub Mobile, navigate to the main page of the repository.
1. Tap **Watch**.
1. To choose what activities you receive notifications for, tap your preferred watch settings. For example, choose to only be notified when you are participating or @mentioned, or use the "Custom" option to select specific events that you want to be notified of.
