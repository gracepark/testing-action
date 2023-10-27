# Configuring code scanning with CodeQL at scale

You can use a script to configure code scanning for a specific group of repositories in your organization.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About configuring code scanning with CodeQL at scale

To configure code scanning across multiple repositories, you can write a bulk configuration script. To successfully execute the script, GitHub Actions must be enabled for the organization.

## Using a script to configure code scanning

1. Identify a group of repositories that can be analyzed using the same code scanning configuration. For example, all repositories that build Java artifacts using the production environment.
1. Create and test a GitHub Actions workflow to call the CodeQL action with the appropriate configuration. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-the-codeql-action)."
1. Use one of the example scripts create a custom script to add the workflow to each repository in the group.
   - PowerShell example: [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository
   - NodeJS example: [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) repository
