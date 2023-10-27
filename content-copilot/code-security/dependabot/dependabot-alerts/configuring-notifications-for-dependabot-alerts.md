# Configuring notifications for Dependabot alerts

Optimize how you receive notifications about  Dependabot alerts.

## About notifications for Dependabot alerts

When Dependabot detects vulnerable dependencies in your repositories, we generate a Dependabot alert and display it on the **Security** tab for the repository. GitHub notifies the maintainers of affected repositories about the new alert according to their notification preferences. Dependabot is enabled by default on all public repositories, and needs to be enabled on private repositories. By default, you will receive Dependabot alerts by email. You can override the default overall behavior by choosing the type of notifications you want to receive, or switching notifications off altogether in the settings page for your user notifications at [https://github.com/settings/notifications](https://github.com/settings/notifications).

If you're an organization owner, you can enable or disable Dependabot alerts for all repositories in your organization with one click. You can also set whether Dependabot alerts will be enabled or disabled for newly-created repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."

## Configuring notifications for Dependabot alerts

When a new Dependabot alert is detected, GitHub notifies all users with access to Dependabot alerts for the repository according to their notification preferences. You will receive alerts if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, and are not ignoring the repository. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."

You can configure notification settings for yourself or your organization from the Manage notifications drop-down <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-bell" aria-label="The notifications bell" role="img"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path></svg> shown at the top of each page. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

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

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You can filter your notifications on GitHub to show  Dependabot alerts. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#dependabot-custom-filters)."

</div>

Email notifications for Dependabot alerts that affect one or more repositories include the `X-GitHub-Severity`  header field. You can use the value of the `X-GitHub-Severity` header field to filter email notifications for Dependabot alerts. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#filtering-email-notifications)."

## How to reduce the noise from notifications for Dependabot alerts

If you are concerned about receiving too many notifications for Dependabot alerts, we recommend you opt into the weekly email digest, or turn off notifications while keeping Dependabot alerts enabled. You can still navigate to see your Dependabot alerts in your repository's **Security** tab. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

## Further reading

- "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)"
- "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#supported-is-queries)"
