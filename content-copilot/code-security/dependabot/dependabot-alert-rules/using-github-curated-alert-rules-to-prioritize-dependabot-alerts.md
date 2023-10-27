# Using GitHub-curated alert rules to prioritize Dependabot alerts

You can use a GitHub-curated alert rule to auto-dismiss low impact development alerts for npm dependencies.

**Who can use this feature**: People with write permissions can view Dependabot alert rules for the repository. People with admin permissions to a repository can enable or disable GitHub-curated alert rules for the repository.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Dependabot alert rules are currently in beta and are subject to change.

</div>

## About GitHub-curated alert rules

The GitHub-curated alert rule, `Dismiss low impact alerts`, auto-dismisses certain types of vulnerabilities that are found in npm dependencies used in development. These alerts cover cases that feel like false alarms to most developers as the associated vulnerabilities:

- Are unlikely to be exploitable in a developer (non-production or runtime) environment.
- May relate to resource management, programming and logic, and information disclosure issues.
- At worst, have limited effects like slow builds or long-running tests.
- Are not indicative of issues in production.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Automatic dismissal of low impact development alerts is currently only supported for npm.

</div>

The GitHub-curated `Dismiss low impact alerts` rule includes vulnerabilities relating to resource management, programming and logic, and information disclosure issues. For more information, see "[Publicly disclosed CWEs used by the `Dismiss low impact alerts` rule](#publicly-disclosed-cwes-used-by-the-dismiss-low-impact-alerts-rule)."

Filtering out these low impact alerts allows you to focus on alerts that matter to you, without having to worry about missing potentially high-risk development-scoped alerts.

By default, GitHub-curated Dependabot alert rules are enabled on public repositories and disabled for private repositories. Administrators of private repositories can opt in by enabling alert rules for their repository.

## Enabling the `Dismiss low impact alerts` rule for your private repository

You first need to enable Dependabot alerts for the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-repository)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codescan" aria-hidden="true"><path d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z"></path><path d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z"></path></svg> Code security and analysis**.

1. Under "Dependabot alerts", click **Dismiss low impact alerts**.

   ![Screenshot of the "Code security and analysis" page for a repository. The "Dismiss low impact alerts" option is highlighted with an orange outline.](/assets/images/help/repository/enable-autodismissal-low-impact-dependabot-alerts.png)

## Publicly disclosed CWEs used by the `Dismiss low impact alerts` rule

Along with the `ecosystem:npm` and `scope:development` alert metadata, we use the following GitHub-curated Common Weakness Enumerations (CWEs) to filter out low impact alerts for the `Dismiss low impact alerts` rule. We regularly improve this list and vulnerability patterns covered by built-in rules.

### Resource Management Issues

- CWE-400 Uncontrolled Resource Consumption
- CWE-770 Allocation of Resources Without Limits or Throttling
- CWE-409 Improper Handling of Highly Compressed Data (Data Amplification)
- CWE-908 Use of Uninitialized Resource
- CWE-1333 Inefficient Regular Expression Complexity
- CWE-835 Loop with Unreachable Exit Condition ('Infinite Loop')
- CWE-674 Uncontrolled Recursion
- CWE-1119 Excessive Use of Unconditional Branching

### Programming and Logic Errors

- CWE-185 Incorrect Regular Expression
- CWE-754 Improper Check for Unusual or Exceptional Conditions
- CWE-755 Improper Handling of Exceptional Conditions
- CWE-248 Uncaught Exception
- CWE-252 Unchecked Return Value
- CWE-391 Unchecked Error Condition
- CWE-696 Incorrect Behavior Order
- CWE-1254 Incorrect Comparison Logic Granularity
- CWE-665 Improper Initialization
- CWE-703 Improper Check or Handling of Exceptional Conditions
- CWE-178 Improper Handling of Case Sensitivity

### Information Disclosure Issues

- CWE-544 Missing Standardized Error Handling Mechanism
- CWE-377 Insecure Temporary File
- CWE-451 User Interface (UI) Misrepresentation of Critical Information
- CWE-668 Exposure of Resource to Wrong Sphere
