# Configuring custom deployment protection rules

Use GitHub Apps to automate protecting deployments with third-party systems.

Custom deployment protection rules are available in public repositories for all plans. For access to custom deployment protection rules in private or internal repositories, you must use GitHub Enterprise. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Custom deployment protection rules are currently in public beta and subject to change.

</div>

## About custom deployment protection rules

Custom deployment protection rules are powered by GitHub Apps. Once a deployment protection rule is configured and installed in a repository, it can be enabled for any environments in the repository.

After you enable a custom deployment protection rule on an environment, every time a workflow step targets that environment, the deployment protection rule will run automatically. For more information about targeting an environment for deployments, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

For more information about creating your own custom deployment protection rules, see "[AUTOTITLE](/actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Any number of GitHub Apps-based deployment protection rules can be installed on a repository. However, a maximum of 6 deployment protection rules can be enabled on any environment at the same time.

</div>

## Using existing custom deployment protection rules

You can choose to create your own custom deployment protection rules or you may use any existing custom deployment protection rules.

The following is a list of official partner implementations for deployment protection rules.

- Datadog: you can enforce protection rules on your GitHub Actions deployment workflows using Datadog monitors. For more information, see [Gating your GitHub Actions Deployments with Datadog Monitors](https://docs.datadoghq.com/continuous_integration/guides/github_gating/) in the Datadog documentation.
- Honeycomb: you can define thresholds to reject or approve deployments based on data you are sending to Honeycomb. For more information, see [the Honeycomb app](https://github.com/apps/honeycomb-io) in the GitHub Marketplace.
- New Relic: for more information, see [the New Relic app](https://github.com/apps/new-relic-gate) in the GitHub Marketplace.
- NCM NodeSource: for more information, see [the NCM NodeSource app](https://github.com/apps/ncm-nodesource) in the GitHub Marketplace.
- Sentry: for more information, see [the Sentry Deployment Gate app](https://github.com/apps/sentry-deployment-gate) in the GitHub Marketplace.
- ServiceNow: for more information, see [GitHub integration with DevOps Change Velocity](https://docs.servicenow.com/bundle/utah-devops/page/product/enterprise-dev-ops/concept/github-integration-dev-ops.html) in the ServiceNow documentation.

## Prerequisites

In order for a custom deployment protection rule to be available to all environments in a repository, you must first install the custom deployment protection rule on the repository. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps)."

After a custom deployment protection rule has been installed in a repository, it must be enabled for each environment where you want the rule to apply.

## Enabling custom deployment protection rules for the environment

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the left sidebar, click **Environments**.
1. Select the environment you want to configure.
1. Under "Deployment protection rules," check the box next to each custom deployment protection rule you want to enable for the environment.
1. Click **Save protection rules**.

Once a custom deployment protection rule has been enabled for an environment, it will automatically run whenever a workflow reaches a job that references the environment. You can see the results of an approval or rejection for your deployment by reviewing the details of the deployment. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
