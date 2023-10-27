# About Dependabot alert rules

Auto-triage rules are a powerful tool to help you better manage your security alerts at scale. Dependabot's default rulesets are curated for you and filter out a substantial amount of false positives. Custom auto-triage rules provide control over which alerts are ignored, snoozed, or trigger a Dependabot security update to resolve the alert.

**Who can use this feature**: People with write permissions can view Dependabot alert rules for the repository. People with admin permissions to a repository can enable or disable Dependabot alert rules for the repository.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Dependabot alert rules are currently in beta and are subject to change.

</div>

## About Dependabot alert rules

Dependabot alert rules allow you to instruct Dependabot to automatically triage Dependabot alerts. You can use alert rules to auto-dismiss or snooze certain alerts.

Whilst you may find it useful to auto-dismiss alerts, you can still reopen auto-dismissed alerts and filter to see which alerts have been auto-dismissed. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/managing-automatically-dismissed-alerts)."

Additionally, auto-dismissed alerts are still available for reporting and reviewing, and can be auto-reopened if the alert metadata changes, for example:
- If you change the scope of a dependency from development to production.
- If GitHub modifies certain metadata for the related advisory.

Auto-dismissed alerts are defined by the `resolution:auto-dismiss` close reason. Automatic dismissal activity is included in alert webhooks, REST and GraphQL APIs, and the audit log. For more information, see "[AUTOTITLE](/rest/dependabot/alerts)" in the REST API documentation, and the "`repository_vulnerability_alert`" section in "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions)."

## Further reading

- [AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/using-github-curated-alert-rules-to-prioritize-dependabot-alerts)
- [AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/customizing-alert-rules-to-prioritize-dependabot-alerts)
