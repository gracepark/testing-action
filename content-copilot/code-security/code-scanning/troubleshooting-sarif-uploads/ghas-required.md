# Upload fails because GitHub Advanced Security is disabled

You can only upload SARIF results to private or internal repositories where GitHub Advanced Security is enabled.

## About this error

```text
GitHub Advanced Security not enabled
GitHub Advanced Security blocked by a policy
403: GitHub Advanced Security is not enabled
```

This error is reported if a process attempts to upload a SARIF file to a repository where GitHub Advanced Security is not enabled or where use of this feature is blocked by a policy.

You will only see this error for SARIF files that contain results created using CodeQL and for uploads to repositories with private or internal visibility. GitHub Advanced Security is enabled by default for all public repositories.

For information on how to confirm this error and fix the problem, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/advanced-security-must-be-enabled)."
