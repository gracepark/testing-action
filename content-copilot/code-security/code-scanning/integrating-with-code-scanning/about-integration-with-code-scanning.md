# About integration with code scanning

You can perform code scanning externally and then display the results in GitHub, or configure webhooks that listen to code scanning activity in your repository.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About integration with code scanning

As an alternative to running code scanning within GitHub, you can perform analysis elsewhere, using the CodeQL CLI or another static analysis tool, and then upload the results. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."

If you run code scanning using multiple configurations, an alert will sometimes have multiple analysis origins. If an alert has multiple analysis origins, you can view the status of the alert for each analysis origin on the alert page. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-analysis-origins)."

## Integrations with webhooks

You can use code scanning webhooks to build or configure integrations, such as [GitHub Apps](/apps/creating-github-apps/setting-up-a-github-app) or [OAuth apps](/apps/oauth-apps/building-oauth-apps), that subscribe to code scanning events in your repository. For example, you could build an integration that creates an issue on GitHub or sends you a Slack notification when a new code scanning alert is added in your repository. For more information, see "[AUTOTITLE](/webhooks)" and "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#code_scanning_alert)."

## Further reading

- "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)"
- "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)"
- "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)"
