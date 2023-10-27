# Deleting an issue

People with admin permissions in a repository can permanently delete an issue from a repository.

The ability to delete issues depends on whether the repository is owned by a personal account or an organization:
- The only account that can delete issues in a repository owned by a personal account is that account.
- Only accounts with admin or owner permissions can delete issues in a repository owned by an organization.

  To delete an issue in a repository owned by an organization, an organization owner must enable deleting issues for the organization's repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/allowing-people-to-delete-issues-in-your-organization)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

Collaborators do not receive a notification when issues are deleted. When visiting the URL of a deleted issue, collaborators will see a message stating that the web page can't be found (but they can use the API to determine that it was deleted). People with admin or owner permissions in the repository will additionally see the username of the person who deleted the issue and when it was deleted.

1. Navigate to the issue you want to delete.
1. On the right side bar, under "Notifications", click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg> Delete issue**.

   ![Screenshot of the issue sidebar. A trash can icon and "Delete issue" are outlined in dark orange.](/assets/images/help/issues/delete-issue.png)
1. To confirm deletion, click **Delete this issue**.

## Further reading

- "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)"
