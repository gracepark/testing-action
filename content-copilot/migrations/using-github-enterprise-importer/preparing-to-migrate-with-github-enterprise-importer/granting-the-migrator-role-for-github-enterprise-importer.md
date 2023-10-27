# Granting the migrator role for GitHub Enterprise Importer

To allow someone who isn't an organization owner to run migrations, you can grant a person or team the migrator role.

**Who can use this feature**: Organization owners can grant the migrator role.

## About the migrator role

To remove the need for organization owners to complete migrations, GitHub.com includes a distinct role for using GitHub Enterprise Importer. Granting the migrator role allows you to designate other teams or individuals to handle your migrations.

You can grant the migrator role to an individual user or a team. We strongly recommend that you assign the migrator role to a team. Then, you can further customize who can run a migration by adjusting team membership. For more information about changing team membership, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)" or "[AUTOTITLE](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)."

You can only grant the migrator role for an organization on GitHub.com. If you're migrating a repository between two organizations on GitHub.com, you can grant the migrator role to the same person or team for both organizations, but you must grant each separately.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You cannot grant the migrator role for enterprise accounts. Therefore, you can only run an organization migration if you're an owner of the destination enterprise. However, you can grant the migrator role to that enterprise owner for the source organization.

</div>

After you grant the migrator role, make sure the migrator uses a personal access token that meets all the requirements for running migrations. For the details of those requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."

<div class="ghd-tool cli">

To see instructions for using the API, use the tool switcher at the top of the page.

## Granting the migrator role with the ADO2GH extension

1. On GitHub.com, create and record a personal access token that meets all the requirements for granting the migrator role. For a full list of requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#creating-a-personal-access-token-for-github-enterprise-importer)."
1. Set the personal access token as an environment variable, replacing TOKEN in the commands below with the personal access token you recorded above.

   - If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      ```

   - If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      ```
1. Use the `gh ado2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh ado2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

## Granting the migrator role with the BBS2GH extension

1. On GitHub.com, create and record a personal access token that meets all the requirements for granting the migrator role. For a full list of requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#creating-a-personal-access-token-for-github-enterprise-importer)."
1. Set the personal access token as an environment variable, replacing TOKEN in the commands below with the personal access token you recorded above.

   - If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      ```

   - If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      ```
1. Use the `gh bbs2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh bbs2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

## Granting the migrator role with the GEI extension

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The GitHub CLI does not support granting the migrator role for organizations on GitHub Enterprise Server, so you must be an organization owner of the source organization to migrate repositories from GitHub Enterprise Server.

</div>

1. On GitHub.com, create and record a personal access token that meets all the requirements for granting the migrator role. For a full list of requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#creating-a-personal-access-token-for-github-enterprise-importer)."
1. Set the personal access token as an environment variable, replacing TOKEN in the commands below with the personal access token you recorded above.

   - If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      ```

   - If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      ```
1. Use the `gh gei grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh gei grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

</div>

<div class="ghd-tool api">

To see instructions for using the GitHub CLI, use the tool switcher at the top of the page.

## Granting the migrator role with the GraphQL API

You can use the `grantMigratorRole` GraphQL mutation to assign the migrator role and the `revokeMigratorRole` mutation to revoke the migrator role.

You must use a personal access token (PAT) that meets all access requirements. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."

### `grantMigratorRole` mutation

This GraphQL mutation sets the migration role.

```graphql
mutation grantMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  grantMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```

| Query variable | Description |
|----|----|
| `organizationId` | The `ownerId` (or organization ID) for your organization, from the `GetOrgInfo` query.
| `actor` | The team or username who you want to assign the migration role to.
|  `actor_type` | Specify whether the migrator is a `USER` or `TEAM`.

### `revokeMigratorRole` mutation

This mutation removes the migrator role.

```graphql
mutation revokeMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  revokeMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```

</div>
