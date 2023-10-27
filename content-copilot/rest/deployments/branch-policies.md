# Deployment branch policies

Use the REST API to manage custom deployment branch policies.

## About deployment branch policies

You can use the REST API to specify custom name patterns that branches must match in order to deploy to an environment. The `deployment_branch_policy.custom_branch_policies` property for the environment must be set to `true` to use these endpoints. To update the `deployment_branch_policy` for an environment, see "[AUTOTITLE](/rest/deployments/environments#create-or-update-an-environment)."

For more information about restricting environment deployments to certain branches, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)."