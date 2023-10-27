# Troubleshooting secret scanning

If you have problems with secret scanning, you can use these tips to help resolve issues.

Secret scanning alerts for partners runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on GitHub.com.

Secret scanning alerts for users are available for free on all public repositories. Organizations using GitHub Enterprise Cloud with a license for GitHub Advanced Security can also enable secret scanning alerts for users on their private and internal repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## Detection of pattern pairs

Secret scanning will only detect pattern pairs, such as AWS Access Keys and Secrets, if the ID and the secret are found in the same file, and both are pushed to the repository. Pair matching helps reduce false positives since both elements of a pair (the ID and the secret) must be used together to access the provider's resource.

Pairs pushed to different files, or not pushed to the same repository, will not result in alerts. For more information about the supported pattern pairs, see the table in "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns)."
