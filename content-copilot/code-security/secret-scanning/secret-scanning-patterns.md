# Secret scanning patterns

Lists of supported secrets and the partners that GitHub works with to prevent fraudulent use of secrets that were committed accidentally.

Secret scanning alerts for partners runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on GitHub.com.

Secret scanning alerts for users are available for free on all public repositories. Organizations using GitHub Enterprise Cloud with a license for GitHub Advanced Security can also enable secret scanning alerts for users on their private and internal repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About secret scanning patterns

GitHub maintains these different sets of default secret scanning patterns:

1. **Partner patterns.** Used to detect potential secrets in all public repositories as well as public npm packages.
To find out about our partner program, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partner-program)."

1. **User alert patterns.** Used to detect potential secrets in public repositories with secret scanning alerts for users enabled. 

Owners of public repositories, as well as organizations using GitHub Enterprise Cloud with GitHub Advanced Security, can enable secret scanning alerts for users on their repositories.

For details about all the supported patterns, see the "[Supported secrets](#supported-secrets)" section below.

If you believe that secret scanning should have detected a secret committed to your repository, and it has not, you first need to check that GitHub supports your secret. For more information, refer to the sections below. For more advanced troubleshooting information, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning)."

## About partner alerts

Partner alerts are alerts that are sent to the secret providers whenever a secret leak is reported for one of their secrets. GitHub currently scans public repositories and public npm packages for secrets issued by specific service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about secret scanning alerts for partners, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-partners)."

If access to a resource requires paired credentials, then secret scanning will create an alert only when both parts of the pair are detected in the same file. This ensures that the most critical leaks are not hidden behind information about partial leaks. Pair matching also helps reduce false positives since both elements of a pair must be used together to access the provider's resource.

## About user  alerts

User alerts are alerts that are reported to users on GitHub. When secret scanning alerts for users are enabled, GitHub scans repositories for secrets issued by a large variety of service providers and generates secret scanning alerts.

You can see these alerts on the **Security** tab of the repository. For more information about secret scanning alerts for users, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)."

If access to a resource requires paired credentials, then secret scanning will create an alert only when both parts of the pair are detected in the same file. This ensures that the most critical leaks are not hidden behind information about partial leaks. Pair matching also helps reduce false positives since both elements of a pair must be used together to access the provider's resource.

If you use the REST API for secret scanning, you can use the `Secret type` to report on secrets from specific issuers. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning)."

## Supported secrets

This table lists the secrets supported by secret scanning. You can see the types of alert that get generated for each token.
- **Provider**—name of the token provider.
- **Partner**—token for which leaks are reported to the relevant token partner. Applies to public repositories only.
- **User**—token for which leaks are reported to users on GitHub. Applies to public repositories, and to private repositories where GitHub Advanced Security is enabled.

| Provider | Token | Partner | User | Push protection
|----|:----|:----:|:----:|:----:|

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure)"
- "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partner-program)"
