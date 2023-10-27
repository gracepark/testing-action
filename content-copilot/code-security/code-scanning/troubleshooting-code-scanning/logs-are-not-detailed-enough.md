# Logs are not detailed enough

If you'd like to increase the level of detail in your logs, try these steps.

If your logs are not detailed enough, there are several steps you can take to make them more useful.

## Enable step debug logging

You can enable step debug logging in GitHub Actions to increase the verbosity of a job's logs during and after a job's execution. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging)."

## Creating CodeQL debugging artifacts

You can obtain artifacts to help you debug CodeQL.
The debug artifacts will be uploaded to the workflow run as an artifact named `debug-artifacts`. The data contains the CodeQL logs, CodeQL database(s), and any SARIF file(s) produced by the workflow.

These artifacts will help you debug problems with CodeQL code scanning. If you contact GitHub support, they might ask for this data.

### Creating CodeQL debugging artifacts using a workflow flag

You can create CodeQL debugging artifacts by using a flag in your workflow. For this, you need to modify the `init` step of your CodeQL analysis workflow file and set `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: github/codeql-action/init@v2
  with:
    debug: true
```
