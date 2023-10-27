# About GitHub Enterprise Importer

With GitHub Enterprise Importer, you can migrate your enterprise to GitHub Enterprise Cloud from various sources.

## About GitHub Enterprise Importer

GitHub Enterprise Importer is a highly customizable migration tool designed to help you move your enterprise to GitHub Enterprise Cloud.

You can migrate on a repository-by-repository basis or, if your migration source and destination are both GitHub.com, on an organization-by-organization basis.

GitHub Enterprise Importer allows you to customize your migration to meet your enterprise's unique needs with:
- **A distinct migration permissions role** for repository migrations, which allows you to designate teams and/or individual users to run a migration and removes the need for organization owners to complete the migration.
- **High fidelity migration**, which allows you to migrate a single repository, a series of repositories, or an entire organization.
- **Support for custom trial run migrations**, which allow you to run a migration as many times as you desire before running the production migration.
- **Clear and unblocking error logging**, so that migrations are allowed to continue with non-critical migration errors, such as not being able to move a single pull request comment. After the migration, you can review a log file that opens automatically.
- **Users retain ownership of their history**, to ensure that their Git history or GitHub metadata is maintained across the migration.

You can run your migration with either the GitHub CLI or the API.

The GitHub CLI simplifies the migration process and is recommended for most customers. Advanced customers with heavy customization needs can use the API to build their own integrations with GitHub Enterprise Importer.

## Supported migration paths

GitHub Enterprise Importer supports migrations to GitHub Enterprise Cloud from the following sources.

- Azure DevOps (ADO) Cloud
- Bitbucket Server and Bitbucket Data Center 5.14+
- GitHub.com
- GitHub Enterprise Server (GHES) 3.4.1+

For more information about which data is migrated for each source, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer)."

## Getting started with GitHub Enterprise Importer

To get started with GitHub Enterprise Importer, read the guide for your migration source. Each guide includes all the information you need to plan and implement a migration from that source, as well as follow-up tasks to complete after your migration.

- "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer)"
- "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-bitbucket-server-with-github-enterprise-importer)"
- "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-between-github-products-with-github-enterprise-importer)"
