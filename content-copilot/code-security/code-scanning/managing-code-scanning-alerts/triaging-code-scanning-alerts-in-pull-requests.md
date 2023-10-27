# Triaging code scanning alerts in pull requests

When code scanning identifies a problem in a pull request, you can review the highlighted code and resolve the alert.

**Who can use this feature**: If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve code scanning alerts for that repository.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About code scanning results on pull requests

In repositories where code scanning is configured as a pull request check, code scanning checks the code in the pull request. By default, this is limited to pull requests that target the default branch, but you can change this configuration within GitHub Actions or in a third-party CI/CD system. If merging the changes would introduce new code scanning alerts to the target branch, the alerts are reported in the following places.

- Check results in the pull request 
- The **Files changed** tab of the pull request

If you have write permission for the repository, you can see any existing code scanning alerts on the **Security** tab. For information about repository alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

In repositories where code scanning is configured to scan each time code is pushed, code scanning will also map the results to any open pull requests and add the alerts as annotations in the same places as other pull request checks. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#scanning-on-push)."

If your pull request targets a protected branch that uses code scanning, and the repository owner has configured required status checks, then the "Code scanning results" check must pass before you can merge the pull request. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)."

## About code scanning as a pull request check

There are many options for configuring code scanning as a pull request check, so the exact configuration of each repository will vary and some will have more than one check.

### Code scanning results check

For all configurations of code scanning, the check that contains the results of code scanning is: **Code scanning results**. The results for each analysis tool used are shown separately. Any new alerts caused by changes in the pull request are shown as annotations.

To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)."

![Screenshot of the Code scanning results check on a pull request. The "View all branch alerts" link is highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-results-check.png)

### Code scanning results check failures

If the code scanning results check finds any problems with a severity of `error`, `critical`, or `high`, the check fails and the error is reported in the check results. If all the results found by code scanning have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![Screenshot of the merge box for a pull request. Next to the "Code scanning results / CodeQL" check is "1 new alert including 1 high severity security v..."](/assets/images/help/repository/code-scanning-check-failure.png)

You can override the default behavior in your repository settings, by specifying the level of severities and security severities that will cause a pull request check failure. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Other code scanning checks

Depending on your configuration, you may see additional checks running on pull requests with code scanning configured. These are usually workflows that analyze the code or that upload code scanning results. These checks are useful for troubleshooting when there are problems with the analysis.

For example, if the repository uses the CodeQL analysis workflow a **CodeQL / Analyze (LANGUAGE)** check is run for each language before the results check runs. The analysis check may fail if there are configuration problems, or if the pull request breaks the build for a language that the analysis needs to compile (for example, C/C++, C#, or Java).

As with other pull request checks, you can see full details of the check failure on the **Checks** tab. For more information about configuring and troubleshooting, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" or "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."

## Viewing an alert on your pull request

You can see any code scanning alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation.

![Screenshot showing an alert annotation within a pull request diff.](/assets/images/help/repository/code-scanning-pr-annotation.png)

If you have write permission for the repository, some annotations contain links with extra context for the alert. In the example above, from CodeQL analysis, you can click **user-provided value** to see where the untrusted data enters the data flow (this is referred to as the source). In this case you can also view the full path from the source to the code that uses the data (the sink) by clicking **Show paths**. This makes it easy to check whether the data is untrusted or if the analysis failed to recognize a data sanitization step between the source and the sink. For information about analyzing data flow using CodeQL, see "[About data flow analysis](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)."

To see more information about an alert, users with write permission can click the **Show more details** link shown in the annotation. This allows you to see all of the context and metadata provided by the tool in an alert view. In the example below, you can see tags showing the severity, type, and relevant common weakness enumerations (CWEs) for the problem. The view also shows which commit introduced the problem.

The status and details on the alert page only reflect the state of the alert on the default branch of the repository, even if the alert exists in other branches. You can see the status of the alert on non-default branches in the **Affected branches** section on the right-hand side of the alert page. If an alert doesn't exist in the default branch, the status of the alert will display as "in pull request" or "in branch" and will be colored grey.

In the detailed view for an alert, some code scanning tools, like CodeQL analysis, also include a description of the problem and a **Show more** link for guidance on how to fix your code.

![Screenshot showing the description for a code scanning alert. A link labeled "Show more" is highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-pr-alert.png)

## Fixing an alert on your pull request

Anyone with push access to a pull request can fix a code scanning alert that's identified on that pull request. If you commit changes to the pull request this triggers a new run of the pull request checks. If your changes fix the problem, the alert is closed and the annotation removed.

## Dismissing an alert on your pull request

An alternative way of closing an alert is to dismiss it. You can dismiss an alert if you don't think it needs to be fixed. For example, an error in code that's used only for testing, or when the effort of fixing the error is greater than the potential benefit of improving the code. If you have write permission for the repository, a **Dismiss alert** button is available in code annotations and in the alerts summary. When you click **Dismiss alert** you will be prompted to choose a reason for closing the alert.

![Choosing a reason for dismissing an alert.](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

It's important to choose the appropriate reason from the drop-down menu as this may affect whether a query continues to be included in future analysis. 

If you dismiss a CodeQL alert as a false positive result, for example because the code uses a sanitization library that isn't supported, consider contributing to the CodeQL repository and improving the analysis. For more information about CodeQL, see "[Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md)."

For more information about dismissing alerts, see  "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)."
