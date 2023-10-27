# Migrating from Bitbucket Server with GitHub Enterprise Importer

Learn about the process of migrating from Bitbucket Server to GitHub, from planning to implementation to completing follow-up tasks.

## About migrations from Bitbucket Server

With GitHub Enterprise Importer, you can migrate to GitHub Enterprise Cloud on a repository-by-repository basis. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)".

If you're migrating from Bitbucket Server, you can use this guide to plan and implement your migration and complete follow-up tasks.

## Planning your migration

To plan your migration, ask yourself the following questions.

- [How soon do we need to complete the migration?](#how-soon-do-we-need-to-complete-the-migration)
- [Do we understand what will be migrated?](#do-we-understand-what-will-be-migrated)
- [Who will run the migration?](#who-will-run-the-migration)
- [What organizational structure do we want in GitHub?](#what-organizational-structure-do-we-want-in-github)

### How soon do we need to complete the migration?

Determine your timeline, which will largely dictate your approach. The first step for determining your timeline is to get an inventory of what you need to migrate.

- Number of repositories
- Number of pull requests

Migration timing is largely based on the number of pull requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests on average, and only 50 users have contributed to the repositories, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests on average, and 5,000 users, the migration will take much longer and require much more planning and testing.

After you take inventory of the repositories you need to migrate, you can weigh your inventory data against your desired timeline. If your organization can withstand a higher degree of change, then you might be able to migrate all your repositories at once, completing your migration efforts in a few days. However, you may have various teams that are not able to migrate at the same time. In this case, you might want to batch and stagger your migrations to fit the teams' timelines, extending your migration effort.

1. Determine how many repositories and pull requests you need to migrate.
1. To understand when teams can be ready to migrate, interview stakeholders.
1. Fully review the rest of this guide, then decide on a migration timeline.

### Do we understand what will be migrated?

Ensure that you and your stakeholders understand what data can be migrated by GitHub Enterprise Importer.

For migrations from Bitbucket Server, GitHub Enterprise Importer only migrates Git repositories and pull requests. Any other assets, such as CI pipelines, will remain in Bitbucket Server.

Because permissions work differently in GitHub than in Bitbucket Server, GitHub Enterprise Importer does not attempt to migrate repository permissions from Bitbucket Server. For more information, see "[Configuring permissions](#configuring-permissions)."

1. Review the data that's migrated from Bitbucket Server. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer#bitbucket-server-migration-support)."
1. Make a list of any data that you'll need to manually migrate or recreate.

### Who will run the migration?

To migrate a repository, you must be an organization owner for the destination organization in GitHub, or an organization owner must grant you the migrator role.

You must also have required permissions and access to your Bitbucket Server instance:

- Admin or super admin permissions
- If your Bitbucket Server instance runs Linux, SFTP access to the instance, using a supported SSH private key (see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#required-permissions-for-bitbucket-server)")
- If your Bitbucket Server instance runs Windows, file sharing (SMB) access to the instance

1. Decide whether you want an organization owner of the destination organization to perform your migrations, or whether you need to grant the migrator role to someone else.
1. If you chose to grant the migrator role, decide which person or team you'll grant the role to.
1. Grant the migrator role to the person or team. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."
1. Confirm that the person has correctly configured personal access tokens to meet all the access requirements. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."
1. Confirm the migrator has admin or super admin permissions and SFTP access for your Bitbucket Server instance.

### What organizational structure do we want in GitHub?

Next, plan the organizational structure you'll create in GitHub.

In Bitbucket Server, repositories are grouped into projects. In GitHub, repositories are owned by organizations. However, you should not assume that the best approach is to create one organization in GitHub per project in Bitbucket Server.

After migrating to GitHub, you should have only one enterprise account and a small number of organizations owned by that enterprise.

Each migrated repository will be owned by one of these organizations, which may result in a large list of ungrouped repositories within each organization. However, you can manage access to groups of repositories by creating teams on GitHub. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

If you want to break your migration effort into batches, consider batching by organization.

1. Decide what your new organization structural will be.
1. Decide if you need to break up your migration effort into smaller batches.
1. If so, decide how you want to break up your migrations.

## Running your migrations

After you complete your planning, you can start the actual migrations. To help uncover problems that might be unique to your enterprise during and after the migration, we highly recommend performing trial runs of all migrations. After resolving any issues uncovered by the trial runs, you can run your production migrations.

Trial migrations help you determine several critical pieces of information.

- Whether the migration for a given repository can complete successfully
- Whether you can get the repository back to a state where your users can successfully start working
- How long a migration will take to run, which is useful for planning migration schedules and setting stakeholder expectations

Trial runs do not require much time coordination. GitHub Enterprise Importer never requires downtime for users of a repository being migrated. However, we recommend halting work during production migrations to ensure that new data isn't created during the migration, which would then be missing from the migrated repository. This isn't a concern for trial migrations, so trial runs can take place at any time. To reduce the time it takes to complete your trial migrations, you can schedule the batches for your trial runs back-to-back. Users of those repositories can then validate the results on their own time.

We recommend creating a test organization to use as a destination for your trial migrations. You can use a single organization for all trial runs, or you can create one test organization for each intended destination organization. Consider including `-sandbox` at the end of the organization names, to clarify that the organizations are intended only for migration validation and not for production. You can delete the test organizations after you're done.

1. Create a test organization for your trial migrations.
1. Run the trial migrations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/preparing-to-run-a-migration-with-github-enterprise-importer)."
1. Complete the follow-up tasks described below for the trial migrations.
1. Ask users to validate the results of the migrations.
1. Resolve any issues uncovered by your trial migrations.
1. If your destination uses IP allow lists, configure the list to allow access by GitHub Enterprise Importer. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#configuring-ip-allow-lists-for-migrations)."
1. Run your production migrations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-bitbucket-server-to-github-enterprise-cloud)."
1. Optionally, delete the test organization.

## Completing follow-up tasks

After each migration has finished, you will need to complete some additional tasks before the repository is ready for work.

- [Reviewing the migration log](#reviewing-the-migration-log)
- [Setting repository visibility](#setting-repository-visibility)
- [Configuring permissions](#configuring-permissions)
- [Reclaiming mannequins](#reclaiming-mannequins)
- [Configuring IP allow lists](#configuring-ip-allow-lists)

### Reviewing the migration log

First, review the migration log for each migrated repository. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer)."

If any specific items within the repository could not be migrated, you'll see a warning in the migration log.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If the "Migration Log" issue includes "Migration completed" at the bottom, the repository was migrated. Error messages only indicate that specific items within the repository, such as a comment on a pull request, may not have migrated correctly.

</div>

1. Review your migration logs.
1. Review any warnings each log, and ensure that none are blocking the acceptance of the migration. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#troubleshooting-successful-migrations)."

### Setting repository visibility

All repositories are migrated as private, and only the user that ran the migration and organization owners will have access to the repository. If you don't want the repository to be private, change the visibility.

- You can change a repository's visibility in the browser. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."
- Alternatively, you can use GitHub CLI to change repository visibility from the command line. You can even add this command to the script that was generated to run your migrations. For more information, see [`gh repo edit`](https://cli.github.com/manual/gh_repo_edit) in the GitHub CLI documentation.

### Configuring permissions

Because permissions work differently in GitHub than in Bitbucket Server, GitHub Enterprise Importer does not attempt to migrate repository permissions from Bitbucket Server.

To give access to migrated repositories, you can create teams and give each team access to the repository.

1. Create teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."
1. Add organization members to teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."
1. Give each team access to the repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)."

### Reclaiming mannequins

After you run a migration with GitHub Enterprise Importer, all user activity in the migrated repository (except Git commits) is attributed to placeholder identities called mannequins.

You can reattribute the history for each mannequin to an organization member with the GitHub CLI or in your browser. If you use the GitHub CLI, you can reclaim mannequins in bulk. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Only organization owners can reclaim mannequins. If you've been granted the migrator role, contact an organization owner to perform this step.

</div>

1. Decide if you want to reclaim mannequins.
1. Plan when you'll complete reclaims.
1. Reclaim mannequins.
1. If any of the members do not already have appropriate access to the repository via team membership, give the members access to the repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)."

### Configuring IP allow lists

If you added the IP ranges for GitHub Enterprise Importer to the IP allow list for your destination organization, you can remove those entries. If you disabled your identity provider's IP allow list restrictions for your destination enterprise, you can re-enable them now.

For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#configuring-ip-allow-lists-for-migrations)."
