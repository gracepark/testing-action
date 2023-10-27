# Managing an individual's access to an organization repository

You can manage a person's access to a repository owned by your organization.

**Who can use this feature**: People with admin access to a repository can manage access to the repository.

## About access to organization repositories

When you remove a collaborator from a repository in your organization, the collaborator loses read and write access to the repository. If the repository is private and the collaborator has forked the repository, then their fork is also deleted, but the collaborator will still retain any local clones of your repository.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:**

- If you remove a person’s access to a private repository, any of their forks of that private repository are deleted. Local clones of the private repository are retained. If a team's access to a private repository is revoked or a team with access to a private repository is deleted, and team members do not have access to the repository through another team, private forks of the repository will be deleted.
- You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.

- People with admin permissions to a private repository can disallow forking of that repository, and organization owners can disallow forking of any private repository in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" and "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)."

</div>

## Managing an individual's access to an organization repository

You can give a person access to a repository or change a person's level of access to a repository in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)."

## Further reading

- "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
