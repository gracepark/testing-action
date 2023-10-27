# Removing workflow artifacts

You can reclaim used GitHub Actions storage by deleting artifacts before they expire on GitHub.

## Deleting an artifact

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:** Once you delete an artifact, it cannot be restored.

</div>

Write access to the repository is required to perform these steps.

By default, GitHub stores build logs and artifacts for 90 days, and this retention period can be customized. For more information, see "[AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

1. In the left sidebar, click the workflow you want to see.

   ![Screenshot of the left sidebar of the "Actions" tab. A workflow, "CodeQL," is outlined in dark orange.](/assets/images/help/actions/superlinter-workflow-sidebar.png)
1. From the list of workflow runs, click the name of the run to see the workflow run summary.
1. Under **Artifacts**, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-label="Remove artifact ARTIFACT-NAME" role="img"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg> next to the artifact you want to remove.

    ![Screenshot showing artifacts created during a workflow run. A trash can icon, used to remove an artifact, is outlined in dark orange.](/assets/images/help/repository/actions-delete-artifact-updated.png)

## Setting the retention period for an artifact

Retention periods for artifacts and logs can be configured at the repository, organization, and enterprise level. For more information, see "[AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)."

You can also define a custom retention period for individual artifacts using the `actions/upload-artifact` action in a workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)."

## Finding the expiration date of an artifact

You can use the API to confirm the date that an artifact is scheduled to be deleted. For more information, see the `expires_at` value returned by "[AUTOTITLE](/rest/actions#artifacts)."
