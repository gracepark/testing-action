# What happens to forks when a repository is deleted or changes visibility?

Deleting your repository or changing its visibility affects that repository's forks.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:**

- If you remove a person’s access to a private repository, any of their forks of that private repository are deleted. Local clones of the private repository are retained. If a team's access to a private repository is revoked or a team with access to a private repository is deleted, and team members do not have access to the repository through another team, private forks of the repository will be deleted.
- You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.

- People with admin permissions to a private repository can disallow forking of that repository, and organization owners can disallow forking of any private repository in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" and "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)."

</div>

## Deleting a private repository

When you delete a private repository, all of its private forks are also deleted.

## Deleting a public repository

When you delete a public repository, one of the existing public forks is chosen to be the new upstream repository. All other repositories are forked off of this new upstream and subsequent pull requests go to this new upstream repository.

## Private forks and permissions

Private forks inherit the permissions structure of the upstream repository. This helps owners of private repositories maintain control over their code. For example, if the upstream repository is private and gives read/write access to a team, then the same team will have read/write access to any forks of the private upstream repository. Only team permissions (not individual permissions) are inherited by private forks.

## Changing a public repository to a private repository

If a public repository is made private, its public forks are split off into a new network. As with deleting a public repository, one of the existing public forks is chosen to be the new upstream repository and all other repositories are forked off of this new upstream. Subsequent pull requests go to this new upstream repository.

In other words, a public repository's forks will remain public in their own separate repository network even after the upstream repository is made private. This allows the fork owners to continue to work and collaborate without interruption. If public forks were not moved into a separate network in this way, the owners of those forks would need to get the appropriate [access permissions](/get-started/learning-about-github/access-permissions-on-github) to pull changes from and submit pull requests to the (now private) upstream repository—even though they didn't need those permissions before.

### Deleting the private repository

If a public repository is made private and then deleted, its public forks will continue to exist in a separate network.

## Changing a private repository to a public repository

When you change a private repository to public, all the commits in that repository, including any commits made in the repositories it was forked into, will be visible to everyone. However, the private forks will not automatically become public. Instead, each private fork will become a separate private repository and create its own independent network of repositories. Any new changes made to these networks will not be accessible from the original repository.

### Deleting the public repository

If a private repository is made public and then deleted, its private forks will continue to exist as standalone private repositories in separate networks.

## Further reading

- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)"
- "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)"
