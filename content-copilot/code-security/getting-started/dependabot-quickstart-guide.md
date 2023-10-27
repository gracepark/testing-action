# Dependabot quickstart guide

You can use Dependabot to alert you when your repository is using a software dependency with a known vulnerability. This guide will help get you started on enabling Dependabot for a repository, and exploring reported alerts.

Dependabot alerts are free to use for all repositories on GitHub.com. Advanced capabilities, like reachability analysis and the ability to create custom alert rules, are available on any public repositories (for free), and on any private repositories, when you have a license for GitHub Advanced Security.

## About Dependabot

This quickstart guide walks you through setting up and enabling Dependabot  and viewing Dependabot alerts and updates for a repository.

Dependabot consists of three different features that help you manage your dependencies:

- Dependabot alerts—inform you about vulnerabilities in the dependencies that you use in your repository.
- Dependabot security updates—automatically raise pull requests to update the dependencies you use that have known security vulnerabilities.
- Dependabot version updates—automatically raise pull requests to keep your dependencies up-to-date.

## Prerequisites

For the purpose of this guide, we're going to use a demo repository to illustrate how Dependabot finds vulnerabilities in dependencies, where you can see Dependabot alerts on GitHub, and how you can explore, fix, or dismiss these alerts.

You need to start by forking the demo repository.

1. Navigate to [https://github.com/dependabot/demo](https://github.com/dependabot/demo).
1. At the top of the page, on the right, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-repo-forked" aria-hidden="true"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg> Fork**.
1. Select an owner (you can select your GitHub personal account) and type a  repository name. For more information about forking repositories, see "[AUTOTITLE](/get-started/quickstart/fork-a-repo#forking-a-repository)."
1. Click **Create fork**.

## Enabling Dependabot for your repository

You need to follow the steps below on the repository you forked in "[Prerequisites](#prerequisites)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codescan" aria-hidden="true"><path d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z"></path><path d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z"></path></svg> Code security and analysis**.
1. Under "Code security and analysis", to the right of Dependabot alerts, click **Enable** for Dependabot alerts, Dependabot security updates, and Dependabot version updates.
1. Optionally, if you are interested in experimenting with Dependabot version updates, click **.github/dependabot.yml**. This will create a default `dependabot.yml` configuration file in the `/.github` directory of your repository. To enable Dependabot version updates for your repository, you typically configure this file to suit your needs by editing the default file, and committing your changes. You can refer to the snippet provided in "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#example-dependabotyml-file)" for an example.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If the dependency graph is not already enabled for the repository, GitHub will enable it automatically when you enable Dependabot.

</div>

For more information about configuring each of these Dependabot features, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)," "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)," and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

## Viewing Dependabot alerts for your repository

If Dependabot alerts are enabled for a repository, you can view Dependabot alerts on the "Security" tab for the repository. You can use the forked repository that you enabled Dependabot alerts on in the previous section.

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the "Vulnerability alerts" sidebar of security overview, click **Dependabot**. If this option is missing, it means you don't have access to security alerts and need to be given access. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

   ![Screenshot of security overview, with the "Dependabot" tab highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-tab.png)
1. Review the open alerts on the Dependabot alerts page. By default, the page displays the **Open** tab, listing the open alerts. (You'll be able to view any closed alerts by clicking **Closed**.)

   ![Screenshot showing the list of Dependabot alerts for the demo repository.](/assets/images/help/repository/dependabot-alerts-list-demo-repo.png)

   You can filter Dependabot alerts in the list, using a variety of filters or labels. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#prioritizing-dependabot-alerts)."

1. Click the "Command Injection in lodash" alert on the `javascript/package-lock.json` file. The details page for the alert will show the following information (note that some information may not apply to all alerts):
   - Whether Dependabot created a pull request that will fix the vulnerability. You can review the suggested security update by clicking **Review security update**.
   - Package involved
   - Affected versions
   - Patched version
   - Brief description of the vulnerability

   ![Screenshot of the detailed page of an alert in the demo repository, showing the main information.](/assets/images/help/repository/alert-details-page-demo-repo.png)

1. Optionally, you can also explore the information on the right-side of the page. Some of the information shown in the screenshot may not apply to every alert.
   - Severity
   - CVSS metrics—we use CVSS levels to assign severity levels. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database#about-cvss-levels)."
   - Tags
   - Weaknesses—list of CWEs related to the vulnerability, if applicable
   - CVE ID—unique CVE identifier for the vulnerability, if applicable
   - GHSA ID—unique identifier of the corresponding advisory on the GitHub Advisory Database. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database#about-ghsa-ids)."
   - Option to navigate to the advisory on the GitHub Advisory Database
   - Option to see all of your repositories that are affected by this vulnerability
   - Option to suggest improvements for this advisory on the GitHub Advisory Database

   ![Screenshot of the detailed page of an alert in the demo repository, showing the information displayed on the right-side of the page.](/assets/images/help/repository/more-alert-details-demo-repo.png)

For more information about viewing, prioritizing, and sorting Dependabot alerts, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

## Fixing or dismissing a Dependabot alert

You can fix or dismiss Dependabot alerts on GitHub. Let's continue to use the forked repository as an example, and the "Command Injection in lodash" alert described in the previous section.

1. Navigate to the Dependabot alerts tab for the repository. For more information, see the "[Viewing Dependabot alerts for your repository](#viewing-dependabot-alerts-for-your-repository)" section above.
1. Click an alert.
1. Click the "Command Injection in lodash" alert on the `javascript/package-lock.json` file.
1. Review the alert. You can:
   - Review the suggested security update by clicking **Review security update**. This will open the pull request generated by Dependabot with the security fix.

     ![Screenshot of the pull request generated by Dependabot to fix the security vulnerability highlighted by the selected alert.](/assets/images/help/repository/dependabot-pull-request-demo-repo.png)

     - On the pull request description, you can click **Commits** to explore the commits included in the pull request.
     - You can also click **Dependabot commands and options** to learn about the commands that you can use to interact with the pull request.
     - When you're ready to update your dependency and resolve the vulnerability, merge the pull request.
   - If you decide that you want to dismiss the alert
     - Go back to the alert details page.
     - On the top-right corner, click **Dismiss alert**.

       ![Screenshot of the alert details page with the **Dismiss alert** button highlighted with a dark orange outline.](/assets/images/enterprise/3.4/repository/dismiss-alert-demo-repo.png)

     - Select a reason for dismissing the alert. 
     - Click **Dismiss alert**. The alert won't appear aymore in the **Open** tab of the alert list, and you are able to view it in the **Closed** tab.

For more information about reviewing and updating Dependabot alerts, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#reviewing-and-fixing-alerts)."

## Troubleshooting

You may need to do some troubleshooting if:
- Dependabot is blocked from creating a pull request to fix an alert, or
- The information reported by Dependabot is not what you expect.

For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors)" and "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)," respectively.

## Next steps

For more information about configuring Dependabot updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

For more information about configuring Dependabot for an organization, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-organization).

For more information about viewing pull requests opened by Dependabot, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#viewing-dependabot-pull-requests)."

For more information about the security advisories that contribute to Dependabot alerts, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/browsing-security-advisories-in-the-github-advisory-database)."

For more information about configuring notifications about Dependabot alerts, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."
