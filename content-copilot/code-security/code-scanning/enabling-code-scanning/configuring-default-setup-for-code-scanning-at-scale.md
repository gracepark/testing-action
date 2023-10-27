# Configuring default setup for code scanning at scale

You can quickly configure code scanning for repositories across your organization using default setup.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About configuring default setup at scale

With default setup for code scanning, you can quickly secure code in repositories across your organization.

You can use the organization settings page labeled "Code security and analysis" to enable code scanning for all repositories in your organization that are eligible for default setup. For more information, see "[Configuring default setup for all eligible repositories in an organization](#configuring-default-setup-for-all-eligible-repositories-in-an-organization)."

You can also create different default setup configurations for individual repositories. For more information on configuring default setup at the repository level, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."

For repositories that are not eligible for default setup, you can configure advanced setup at the repository level, or at the organization level using a script. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale)."

<a name="eligible-repositories-default-setup"></a>

### Eligible repositories for CodeQL default setup at scale

A repository must meet all the following criteria to be eligible for default setup, otherwise you need to use advanced setup.

- Code scanning is not already enabled.
- GitHub Actions are enabled.
- Uses any CodeQL-supported language.
- Publicly visible.

Code scanning is configured at the repository level. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."
