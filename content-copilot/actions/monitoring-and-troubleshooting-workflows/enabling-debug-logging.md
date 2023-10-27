# Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging.

These extra logs are enabled by setting secrets in the repository containing the workflow, so the same permissions requirements will apply:

- To create secrets on GitHub for a personal account repository, you must be the repository owner. To create secrets on GitHub for an organization repository, you must have `admin` access. Lastly, to create secrets for a personal account repository or an organization repository through the REST API, you must have collaborator access.
- To create secrets for an environment in a personal account repository, you must be the repository owner. To create secrets for an environment in an organization repository, you must have `admin` access. For more information on environments, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."
- To create secrets at the organization level, you must be an organization owner.

For more information on setting secrets, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

## Enabling runner diagnostic logging

Runner diagnostic logging provides additional log files that contain information about how a runner is executing a job. Two extra log files are added to the log archive:

- The runner process log, which includes information about coordinating and setting up runners to execute jobs.
- The worker process log, which logs the execution of a job.

1. To enable runner diagnostic logging, set the following secret in the repository that contains the workflow: `ACTIONS_RUNNER_DEBUG` to `true`.
1. To download runner diagnostic logs, download the log archive of the workflow run. The runner diagnostic logs are contained in the `runner-diagnostic-logs` folder. For more information on downloading logs, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#downloading-logs)."

## Enabling step debug logging

Step debug logging increases the verbosity of a job's logs during and after a job's execution.

1. To enable step debug logging, set the following secret in the repository that contains the workflow: `ACTIONS_STEP_DEBUG` to `true`.
1. After setting the secret, more debug events are shown in the step logs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)."
