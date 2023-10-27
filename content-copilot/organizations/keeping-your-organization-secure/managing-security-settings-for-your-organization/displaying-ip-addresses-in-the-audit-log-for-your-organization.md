# Displaying IP addresses in the audit log for your organization

You can display the source IP address for events in your organization's audit log.

**Who can use this feature**: Organization owners can display IP addresses in the audit log for an enterprise.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Displaying IP addresses in the audit log for an organization is in public beta and subject to change.

</div>

## About display of IP addresses in the audit log

By default, GitHub does not display the source IP address for events in your organization's audit log. Optionally, to ensure compliance and respond to threats, you can display the full IP address associated with the actor responsible for each event. Actors are typically users, but can also be apps or integrations.

You are responsible for meeting any legal obligations that accompany the viewing or storage of IP addresses displayed within your organization's audit log.

When anyone creates an account on GitHub.com, the person agrees to GitHub's collection of basic information about connections to GitHub's services, including source IP address. For more information, see "[AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)."

After you enable the feature, you can access the audit log to view events that include IP addresses. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."

## Events that display IP addresses in the audit log

GitHub displays an IP address for each event in the organization audit log that meets these criteria.

- The actor is an organization member or owner
- The target is either an organization-owned repository that is private or internal, or an organization resource that is not a repository, such as a project.

## Enabling display of IP addresses in the audit log

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. Click **Source IP disclosure**.

   ![Screenshot of the "Audit log" page for an organization. A tab, labeled "Source IP disclosure," is outlined in dark orange.](/assets/images/help/organizations/audit-log-source-ip-disclosure-tab.png)
1. Under "Disclose actor IP addresses in audit logs", select **Enable source IP disclosure**.
1. Click **Save**.
