# SARIF file is invalid

Code scanning can only process syntactically invalid SARIF files. Invalid files are rejected.

## About this error

```text
Invalid SARIF
SARIF file invalid
SARIF ZIP upload is invalid
400: Bad Request if the sarif field is invalid
```

One of these errors is reported if code scanning cannot parse the SARIF file.

You are unlikely to see this error when using CodeQL analysis.

## Confirming the cause of the error

You can investigate the underlying cause of the error by looking at the log for the workflow run that uploaded the analysis and by checking the SARIF file in a validator. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)" and visit the [Microsoft SARIF validator](https://sarifweb.azurewebsites.net/).

## Fixing the problem

After you identify the invalid parts of the SARIF file, you may be able to resolve smaller issues manually, but you may need to talk to the maintainers of the tool. For information about validation and the format supported by code scanning, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)."
