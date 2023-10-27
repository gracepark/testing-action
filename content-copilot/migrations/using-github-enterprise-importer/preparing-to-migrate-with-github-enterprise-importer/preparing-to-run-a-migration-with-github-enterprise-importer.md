# Preparing to run a migration with GitHub Enterprise Importer

Before running a production migration, we strongly recommend you perform a trial run of the migration with these best practices.

## About trial migrations

We recommend you follow these best practices for running a trial migration, to help uncover problems that might be unique to your enterprise during and after the migration.

Review these high-level steps to plan and guide your migration trial run.

## Step 1: Identify what to migrate

What repositories and data do you want to migrate? Are these supported by the beta version of Importer? Do you need to plan any manual migrations, such as for Git LFS resources?

To ensure you understand the known support limitations of the Importer, review "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer#support-limitations-for-github-enterprise-importer)."

## Step 2: Perform a trial run of the migration

We recommend you perform a trial run migration to test the result and help you understand how long your production migration might take. To start the trial run, you can follow the more detailed steps in "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer)" or "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-organizations-with-github-enterprise-importer)."

We recommend you note how long your trial run migration takes to complete to plan your production migration and any downtime.

While not required, we recommend halting work during your production migration. The Importer doesn't support delta migrations, so any changes that happen during the migration will not migrate. If you choose not to halt work during your production migration, you'll need to manually migrate these changes.

## Step 3: Validate the trial run migration

Review the results of the dry run migration to ensure their accuracy and completeness. You can also review the log file, which will share any errors.

## Step 4: Delete the repository or organization you migrated

After completing the trial run and validating the results, you can delete the migrated repository or organization. You can repeat this trial run process as many times as you want. In some cases, you may decide to just keep this migration as your production migration.

## Step 5: Plan your production migration

Using all you've learned from the trial run, plan your production migration and any custom steps you'll need. We recommend starting your production migration shortly after the trial run.
