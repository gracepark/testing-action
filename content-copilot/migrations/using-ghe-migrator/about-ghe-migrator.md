# About ghe-migrator

You can use `ghe-migrator` to transfer data from a *source* location (either a GitHub.com organization or a GitHub Enterprise Server instance) to a *target* GitHub Enterprise Server instance.

## Types of migrations

There are three types of migrations you can perform:

- A migration from a GitHub Enterprise Server instance to another existing GitHub Enterprise Server instance. You can migrate any number of repositories owned by any user or organization on the instance. Before performing a migration, you must have site administrator access to both instances.
- A migration from a GitHub.com organization to a GitHub Enterprise Server instance. You can migrate any number of repositories owned by the organization. Before performing a migration, you must have [administrative access](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) to the GitHub.com organization as well as site administrator access to the target instance.
- _Trial runs_ are migrations that import data to a [staging instance](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance). These can be useful to see what _would_ happen if a migration were applied to GitHub.com. **We strongly recommend that you perform a trial run on a staging instance before importing data to your production instance.**

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The use of ghe-migrator is **not recommended** for transferring a GitHub Enterprise Server instance between hypervisors. Instead, we suggest either backing up and restoring to the new location with GitHub Enterprise Server Backup Utilities, or creating a replica in the new location and then failing over to the replica appliance. For more information, see "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)", "[AUTOTITLE](/enterprise-server@latest/admin/enterprise-management/configuring-high-availability/creating-a-high-availability-replica)" and "[AUTOTITLE](/enterprise-server@latest/admin/enterprise-management/configuring-high-availability/initiating-a-failover-to-your-replica-appliance)."

</div>

## Migrated data

With ghe-migrator, everything revolves around a repository. Most data associated with a repository can be migrated. For example, a repository within an organization will migrate the repository _and_ the organization, as well as any users, teams, issues, and pull requests associated with the repository.

The items in the table below can be migrated with a repository. Any items not shown in the list of migrated data can not be migrated, including Git LFS assets.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Fork relationships do not persist after a migration.

</div>

|  Data associated with a migrated repository | Notes  |
|---------------------------------------------|--------|
| Users | **@mentions** of users are rewritten to match the target.
| Organizations | An organization's name and details are migrated.
| Repositories | Links to Git trees, blobs, commits, and lines are rewritten to match the target. The migrator follows a maximum of three repository redirects. Internal repositories are migrated as private repositories. Archive status is unset.
| Wikis | All wiki data is migrated.
| Teams | **@mentions** of teams are rewritten to match the target.
| Milestones | Timestamps are preserved.
| Project boards | Project boards associated with the repository and with the organization that owns the repository are migrated.
| Issues | Issue references and timestamps are preserved.
| Issue comments | Cross-references to comments are rewritten for the target instance.
| Pull requests | Cross-references to pull requests are rewritten to match the target. Timestamps are preserved.
| Pull request reviews | Pull request reviews and associated data are migrated.
| Pull request review comments | Cross-references to comments are rewritten for the target instance. Timestamps are preserved. File-level comments are not migrated.
| Commit comments | Cross-references to comments are rewritten for the target instance. Timestamps are preserved.
| Releases | All releases data is migrated.
| Actions taken on pull requests or issues | All modifications to pull requests or issues, such as assigning users, renaming titles, and modifying labels are preserved, along with timestamps for each action.
|  File attachments | [File attachments on issues and pull requests](/get-started/writing-on-github/working-with-advanced-formatting/attaching-files) are migrated. You can choose to disable this as part of the migration.
| Webhooks | Only active webhooks are migrated.
| Repository deploy keys | Repository deploy keys are migrated.
| Protected branches | Protected branch settings and associated data are migrated.

## About migration of external authentication data

If the source location for your migration is a GitHub product that uses LDAP or SAML authentication, `ghe-migrator` does not migrate external authentication data linked to user accounts. For more information about authentication options, see GitHub Enterprise Server, see "About authentication for your enterprise" in the [GitHub Enterprise Server docs](/enterprise-server@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)" or the [GitHub Enterprise Cloud docs](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

If you migrate to a destination instance and then configure external authentication, users must sign in to the destination instance with a user account that has the same username or user ID as the account on the source instance. Administrators can review the external attribute that an instance uses to map user account names from the Management Console. For more information, see "[AUTOTITLE](/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console)."
