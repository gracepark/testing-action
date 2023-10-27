# Sharing actions and workflows with your organization

You can share an action or reusable workflow with your organization without publishing the action or workflow publicly.

## About GitHub Actions access to private repositories

You can share actions and reusable workflows within your organization, without publishing them publicly, by allowing GitHub Actions workflows to access a private repository that contains the action or reusable workflow.

Any actions or reusable workflows stored in the private repository can be used in workflows defined in other private repositories owned by the same organization. Actions and reusable workflows stored in internal repositories cannot be used in public repositories .

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**:
- If you make an internal repository accessible to GitHub Actions workflows in other repositories, outside collaborators on the other repositories can indirectly access the internal repository, even though they do not have direct access to these repositories. The outside collaborators can view logs for workflow runs when actions or workflows from the internal repository are used.
- To allow runners to download these actions, GitHub passes a scoped installation token to the runner. This token has read access to the repository, and automatically expires after one hour.

</div>

## Sharing actions and workflows with your organization

1. Store the action or reusable workflow in a private repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."
1. Configure the repository to allow access to workflows in other private repositories. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."

## Further reading

- "[AUTOTITLE](/actions/using-workflows/reusing-workflows)"
