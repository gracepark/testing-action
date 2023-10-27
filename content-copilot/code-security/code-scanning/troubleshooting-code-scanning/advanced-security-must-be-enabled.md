# Error: "Advanced Security must be enabled for this repository to use code scanning"

If you see this error, make sure that GitHub Advanced Security is enabled.

## About this error

```text
Advanced Security must be enabled for this repository to use code scanning
403: GitHub Advanced Security is not enabled
```

This error is reported if you try to run code scanning in a repository where GitHub Advanced Security is not enabled or where use of this feature is blocked by a policy.

You will only see this error for repositories with private or internal visibility. GitHub Advanced Security is enabled by default for all public repositories.

## Confirming the cause of the error

If you are on a free, pro, or team plan, you can only use code scanning on repositories that are publically available. To enable code scanning for private or internal repositories, you must upgrade to GitHub Enterprise with GitHub Advanced Security and enable GitHub Advanced Security for the repository. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products#github-enterprise)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."
