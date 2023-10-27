# Required workflows

You can specify which workflows will run as required status checks in all repositories or selected repositories in your organization.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** GitHub is deprecating support for required workflows for GitHub Actions.

</div>

## Overview

You can configure a workflow that must run in repositories in an organization for all pull requests opened against the default branch. Required workflows allow you to implement organization-wide CI/CD policies that apply to current and future repositories. A required workflow is triggered by pull request events and appears as a required status check, which blocks the ability to merge the pull request until the required workflow succeeds.

Required workflows are not the same as reusable workflows. Reusable workflows can be called by another workflow. Required workflows are enforced on repositories by an organization owner.

## Prerequisites

Before configuring a required workflow, note the following prerequisites:

- GitHub Actions must be enabled for a repository in the organization's settings in order for required workflows to run. Once enabled at an organization-level, required workflows will run even when GitHub Actions is disabled in the repository's settings. For more information on managing GitHub Actions in your organization's repositories, see "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)."
- Required workflows are available for organizations and only in repositories where the organization's plan supports required status checks. If required status checks are not supported, the workflow will still run, but it will not be a required check and will not block merging. For more information about support for required status checks, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."
- The repository's default branch must match the organization's default branch setting in order for required workflows to run as required status checks. If the default branch names do not match, the workflow will still run, but it will not be a required check. For more information about managing default branch names, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)" and "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)."
- For required workflows to run, the pull request's source repository must be in the same organization as the target repository. GitHub will source the required workflow from the HEAD commit of the default branch from the repository containing the workflow.
- Secrets used in a required workflow should be created at either the organization level or in the target repositories.
- Secrets in the source repository will not be fetched when a workflow runs in the target repository.

- Required workflows are not automatically triggered on already existing pull requests even though they automatically appear as expected checks. To trigger required workflows for an already existing pull request, push a new change to that pull request.

## Restrictions and behaviors for the source repository

Note the following restrictions and behaviors for the source repository and workflow:

- Required workflows can be stored in any repository folder and are not restricted to the `.github/workflows` folder like normal workflows. If a required workflow calls a reusable workflow, the reusable workflow must be stored in the `.github/workflows` folder. When calling a reusable workflow, a required workflow must use the full path and ref to the reusable workflow. For example, `{owner}/{repo}/.github/workflows/{filename}@{ref}`.
- If the required workflow is contained in a private repository, you must ensure that workflows within the repository are accessible by other repositories in your organization. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-access-for-a-private-repository)."
- Workflows stored in a public repository can be configured as required workflows for any repository in your organization. Workflows stored in a private repository can only be configured as required workflows for other private repositories in your organization. 
- CodeQL is not supported in required workflows because CodeQL requires configuration at the repository level. For information on configuring code scanning, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

## Restrictions and behaviors for the target repository

Note the following restrictions and behaviors for the target repositories:

- When configuring a required workflow to run on all or selected repositories, the visibility of the repository containing the required workflow will affect which repositories in your organization the workflow runs on. Required workflows stored in public repositories will run on all repositories. Required workflows stored in private repositories will only run on other private repositories. 
- Required workflows cannot be configured to run in the repository the workflow is created in. You should consider creating a separate repository to store your required workflows.
- When configuring a required workflow to run on all or selected repositories, required workflows will not run in repositories where actions is disabled in the organization settings.

## Viewing workflow runs for required workflows

After a required workflow has run at least once in a repository, you can view its workflow runs in that repository's "Actions" tab. To make changes to what workflows are configured as required in an organization, you must contact an organization owner. To make changes to a required workflow itself, anyone with write permissions for the repository that contains the required workflow can make changes to it.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

1. In the left sidebar, you can view workflow runs for required workflows under "Required workflows."

   ![Screenshot of the sidebar on the "Actions" page. A subsection, labeled "Required workflows", contains an entry called "Test required workflow" and is outlined in dark orange.](/assets/images/help/settings/view-required-workflows.png)

## Adding a required workflow to an organization

Organization owners can configure required workflows in their organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#adding-a-required-workflow-to-an-organization)."
