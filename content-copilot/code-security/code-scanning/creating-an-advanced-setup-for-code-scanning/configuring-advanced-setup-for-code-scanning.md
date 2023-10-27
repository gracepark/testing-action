# Configuring code scanning

You can configure code scanning for a repository to find security vulnerabilities in your code.

**Who can use this feature**: People with admin permissions to a repository, or the security manager role for the repository, can configure code scanning for that repository. People with write permissions to a repository can also configure code scanning, but only by creating a workflow file or manually uploading a SARIF file.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About code scanning

Code scanning helps you catch vulnerabilities in the code in your repository. With CodeQL code scanning, you can select custom or built-in query suites for use in your analysis, set a specific scan schedule, choose which events trigger a scan, and more.

You can also configure code scanning with third-party tools. For more information, see "[Configuring code scanning using third-party actions](#configuring-code-scanning-using-third-party-actions)."

If you run code scanning using multiple configurations, an alert will sometimes have multiple analysis origins. If an alert has multiple analysis origins, you can view the status of the alert for each analysis origin on the alert page. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-analysis-origins)."

### Prerequisites

Your repository is eligible for code scanning if:
- it uses CodeQL-supported languages or you plan to generate code scanning results with a third-party tool.
- GitHub Actions are enabled.
- it is publicly visible.

## Configuring code scanning using the CodeQL action

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. To the right of "Code scanning alerts", click **Set up code scanning**. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)" or "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."
1. Under "Get started with code scanning", click **Set up this workflow** on the CodeQL analysis workflow or on a third-party workflow.

   Workflows are only displayed if they are relevant for the programming languages detected in the repository. The CodeQL analysis workflow is always displayed, but the "Set up this workflow" button is only enabled if CodeQL analysis supports the languages present in the repository.

1. To customize how code scanning scans your code, edit the workflow.

   Generally, you can commit the CodeQL analysis workflow without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages)."

1. Click **Commit changes...** to display the commit changes form.

   ![Screenshot of the form to create a new file. To the right of the file name, a green button, labeled "Commit changes...", is outlined in dark orange.](/assets/images/help/repository/start-commit-commit-new-file.png)
1. In the commit message field, type a commit message.
1. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request.
1. Click **Commit new file** or **Propose new file**.

In the suggested CodeQL analysis workflow, code scanning is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, code scanning will now commence.

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#configuring-frequency)."

For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale)."

### Configuring code scanning using third-party actions

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:**  Starter workflows for Advanced Security have been consolidated in a "Security" category in the **Actions** tab of a repository. This new configuration is currently in beta and subject to change.

</div>

GitHub provides starter workflows for security features such as code scanning. You can use these suggested workflows to construct your code scanning workflows, instead of starting from scratch.

Using actions to run code scanning will use minutes. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

1. If the repository has already at least one workflow configured and running, click **New workflow** to display starter workflows. If there are currently no workflows configured for the repository, go to the next step.

   ![Screenshot of the Actions tab for a repository. The "New workflow" button is outlined in dark orange.](/assets/images/help/security/actions-new-workflow-button.png)

1. In the "Choose a workflow" or "Get started with GitHub Actions" view, scroll down to the "Security" category and click **Configure** under the workflow you want to configure. You may need to click **View all** to find the security workflow you want to configure.

   ![Screenshot of the Security category of starter workflows. The Configure button and "View all" link are highlighted with an orange outline.](/assets/images/help/security/actions-workflows-security-section.png)

1. Follow any instructions in the workflow to customize it to your needs. For more general assistance about workflows, click **Documentation** on the right pane of the workflow page.

   ![Screenshot showing a starter workflow file open for editing. The "Documentation" button is highlighted with an orange outline.](/assets/images/help/security/actions-workflows-documentation.png)

   For more information, see "[AUTOTITLE](/actions/learn-github-actions/using-starter-workflows#choosing-and-using-a-starter-workflow)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

## Next steps

After configuring code scanning, and allowing its actions to complete, you can:

- View all of the code scanning alerts generated for this repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."
- View any alerts generated for a pull request submitted after you configure code scanning. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."
- Configure notifications for completed runs. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#github-actions-notification-options)."
- Learn about code scanning checks on pull requests. For more information, "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#about-code-scanning-as-a-pull-request-check)."
- View the logs generated by the code scanning analysis. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/viewing-code-scanning-logs)."
- Investigate any problems that occur with the initial configuration of code scanning. For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."
- Customize how code scanning scans the code in your repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."
