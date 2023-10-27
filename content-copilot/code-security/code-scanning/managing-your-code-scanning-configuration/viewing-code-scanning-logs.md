# Viewing code scanning logs

You can view the output generated during code scanning analysis in GitHub.com.

**Who can use this feature**: If you have write permissions to a repository, you can view the code scanning logs for that repository.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About your code scanning configuration

You can use a variety of tools to configure code scanning in your repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

The log and diagnostic information available to you depends on the method you use for code scanning in your repository. You can check the type of code scanning you're using in the **Security** tab of your repository, by using the **Tool** drop-down menu in the alert list. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

## About analysis and diagnostic information

You can see analysis and diagnostic information for code scanning run using CodeQL analysis on GitHub.

Analysis information is shown for the most recent analysis in a header at the top of the list of alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

Diagnostic information is displayed in the Action workflow logs and consists of summary metrics and extractor diagnostics. For information about accessing code scanning logs on GitHub, see "[Viewing the logging output from code scanning](#viewing-the-logging-output-from-code-scanning)" below.

If you're using the CodeQL CLI outside GitHub, you'll see diagnostic information in the output generated during database analysis. This information is also included in the SARIF results file you upload to GitHub with the code scanning results.

For information about the CodeQL CLI, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries#viewing-log-and-diagnostic-information)."

### About summary metrics

Summary metrics include:

- Lines of code in the codebase (used as a baseline), before creation and extraction of the CodeQL database
- Lines of code in the CodeQL database extracted from the code, including external libraries and auto-generated files
- Lines of code in the CodeQL database excluding auto-generated files and external libraries

### About CodeQL source code extraction diagnostics

Extractor diagnostics only cover files that were seen during the analysis, metrics include:
- Number of files successfully analyzed
- Number of files that generated extractor errors during database creation
- Number of files that generated extractor warnings during database creation

## Viewing the logging output from code scanning

This section applies to code scanning run using GitHub Actions (CodeQL or third-party).

After configuring code scanning for your repository, you can watch the output of the actions as they run.

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

   You'll see a list that includes an entry for running the code scanning workflow. The text of the entry is the title you gave your commit message.

   ![Screenshot of the "All workflows" page. In the list of workflow runs is a run labeled "Create .github/workflows/codeql.yml."](/assets/images/help/repository/code-scanning-actions-list.png)

1. Click the entry for the code scanning workflow.1. Click the job name on the left. For example, **Analyze (LANGUAGE)**.

   ![Screenshot of the log output for the "Analyze (go)" job. In the left sidebar, under the "Jobs" heading, "Analyze (go)" is listed.](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Review the logging output from the actions in this workflow as they run.

1. Optionally, to see more detail about the commit that triggered the workflow run, click the short commit hash. The short commit hash is 7 lowercase characters immediately following the commit author's username.

1. Once all jobs are complete, you can view the details of any code scanning alerts that were identified. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
