# Viewing and updating Dependabot alerts

If GitHub discovers insecure dependencies in your project, you can view details on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the alert.

**Who can use this feature**: Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.

Your repository's Dependabot alerts tab lists all open and closed Dependabot alerts and corresponding Dependabot security updates. You can filter alerts by package, ecosystem, or manifest. You can sort the list of alerts, and you can click into specific alerts for more details. You can also dismiss or reopen alerts.  For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

You can enable automatic security updates for any repository that uses Dependabot alerts and the dependency graph. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

## About updates for vulnerable dependencies in your repository

GitHub generates Dependabot alerts when we detect that the default branch of your codebase is using dependencies with known security risks. For repositories where Dependabot security updates are enabled, when GitHub detects a vulnerable dependency in the default branch, Dependabot creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.

Each Dependabot alert has a unique numeric identifier and the Dependabot alerts tab lists an alert for every detected vulnerability. Legacy Dependabot alerts grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy Dependabot alert, you will be redirected to a Dependabot alerts tab filtered for that package. 

You can filter and sort Dependabot alerts using a variety of filters and sort options available on the user interface. For more information, see "[Prioritizing Dependabot alerts](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)" below.

You can also audit actions taken in response to Dependabot alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

## Prioritizing Dependabot alerts

GitHub helps you prioritize fixing Dependabot alerts. 

## Viewing Dependabot alerts

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the "Vulnerability alerts" sidebar of security overview, click **Dependabot**. If this option is missing, it means you don't have access to security alerts and need to be given access. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

   ![Screenshot of security overview, with the "Dependabot" tab highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-tab.png)
1. Optionally, to filter alerts, select a filter in a dropdown menu then click the filter that you would like to apply. You can also type filters into the search bar.  For more information about filtering and sorting alerts, see "[Prioritizing Dependabot alerts](#prioritizing-dependabot-alerts)."
1. Click the alert that you would like to view.

## Reviewing and fixing alerts

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When Dependabot discovers vulnerabilities  in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application.

If a patched version of the dependency is available, you can generate a Dependabot pull request to update this dependency directly from a Dependabot alert. If you have Dependabot security updates enabled, the pull request may be linked in the Dependabot alert.

In cases where a patched version is not available, or you can’t update to the secure version, Dependabot shares additional information to help you determine next steps. When you click through to view a Dependabot alert, you can see the full details of the security advisory for the dependency including the affected functions. You can then check whether your code calls the impacted functions. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security advisory.

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see "[Viewing Dependabot alerts](#viewing-dependabot-alerts)" (above).

1. If you have Dependabot security updates enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create Dependabot security update** at the top of the alert details page to create a pull request.

   ![Screenshot of a Dependabot alert with the "Create Dependabot security update" button highlighted with a dark orange outline.](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)

1. Optionally, if you do not use Dependabot security updates, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.

1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request.

   Each pull request raised by Dependabot includes information on commands you can use to control Dependabot. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

## Dismissing Dependabot alerts

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You can only dismiss open alerts.
</div>

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-dependabot-alerts)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.

   ![Screenshot of the page for a Dependabot alert, with the "Dismiss" dropdown and its options highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

## Reviewing the audit logs for Dependabot alerts

When a member of your organization performs an action related to Dependabot alerts, you can review the actions in the audit log. For more information about accessing the log, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log)."

Events in your audit log for Dependabot alerts include details such as who performed the action, what the action was, and when the action was performed.  For information on the Dependabot alerts actions, see the `repository_vulnerability_alert` category in "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#repository_vulnerability_alert)."
