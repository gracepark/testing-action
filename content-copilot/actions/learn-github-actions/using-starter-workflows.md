# Using starter workflows

GitHub provides starter workflows for a variety of languages and tooling.

## About starter workflows

Starter workflows are templates that help you to create your own GitHub Actions workflows for a repository. They offer an alternative to starting from a blank workflow file and are useful because some of the work will already have been done for you.

GitHub offers starter workflows for a variety of languages and tooling. When you set up workflows in your repository, GitHub analyzes the code in your repository and recommends workflows based on the language and framework in your repository. For example, if you use Node.js, GitHub will suggest a starter workflow file that installs your Node.js packages and runs your tests.

GitHub provides ready-to-use starter workflows for the following high level categories:
- **Deployment (CD)**. For more information, see "[AUTOTITLE](/actions/deployment/about-deployments/about-continuous-deployment)."
- **Security**. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-third-party-actions)."
- **Continuous Integration (CI)**. For more information, see "[AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration)."
- **Automation**. Automation starter workflows offer solutions for automating workflows, such as triaging pull requests and applying a label based on the paths that are modified in the pull request, or greeting users who are first time contributors to the repository.

You can also create your own starter workflow to share with your organization. These starter workflows will appear alongside the GitHub-provided starter workflows. Anyone with write access to the organization's `github` repository can set up a starter workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Choosing and using a starter workflow

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

1. If you already have a workflow in your repository, click **New workflow**.
1. The "Choose a workflow template" page shows a selection of recommended starter workflows. Find the starter workflow that you want to use, then click **Set up this workflow**.
1. If the starter workflow contains comments detailing additional setup steps, follow these steps.

   There are guides to accompany many of the starter workflows for building and testing projects. For more information, see "[AUTOTITLE](/actions/automating-builds-and-tests)."

1. Some starter workflows use secrets. For example, `${{ secrets.npm_token }}`. If the starter workflow uses a secret, store the value described in the secret name as a secret in your repository. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."
1. Optionally, make additional changes. For example, you might want to change the value of `on` to change when the workflow runs.
1. Click **Start commit**.
1. Write a commit message and decide whether to commit directly to the default branch or to open a pull request.

## Further reading

- "[AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration)"
- "[AUTOTITLE](/actions/managing-workflow-runs)"
- "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"

- "[AUTOTITLE](/billing/managing-billing-for-github-actions)"
