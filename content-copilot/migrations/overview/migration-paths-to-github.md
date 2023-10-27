# Migration paths to GitHub

See an overview of the paths available for migration to GitHub from other products, or between GitHub products.

## About migration paths to GitHub

If you're moving between GitHub products, such as from GitHub Enterprise Server to GitHub Enterprise Cloud, or from another code hosting platform, such as Bitbucket Server or GitLab, to GitHub, you'll want to bring your work with you: your code, the code's history, and all of your past conversations and collaboration.

To plan for your migration, consider the destination and source. These considerations determine the path for your migration. For some migration paths, we offer specialist tools that allow you to migrate source, history, and metadata. For others, you'll need to perform a simpler "source and history" or "source snapshot" migration.

Some migration paths require tools that are only available with expert-led migrations. For more information, contact your account manager on [GitHub's Sales team](https://github.com/enterprise/contact) or see the [GitHub Expert Services](https://github.com/services/) website.

In our recommendations, we'll assume that you want the highest level of fidelity if possible, which includes source, history, and metadata.

## Migrations to GitHub.com

You can review the scope and tooling for your migration to GitHub.com, which includes migrations to GitHub Enterprise Cloud. You can also review any additional information or caveats.

- [GitHub Enterprise Server 3.4.1 or newer to GitHub.com](#github-enterprise-server-341-or-newer-to-githubcom)
- [GitHub Enterprise Server 3.4.0 or older to GitHub.com](#github-enterprise-server-340-or-older-to-githubcom)
- [GitHub.com to GitHub.com](#githubcom-to-githubcom)
- [Azure DevOps Services (Azure DevOps Cloud) to GitHub.com](#azure-devops-services-azure-devops-cloud-to-githubcom)
- [Azure DevOps Server to GitHub.com](#azure-devops-server-to-githubcom)
- [Bitbucket Cloud (Bitbucket.org-to-githubcom) to GitHub.com](#bitbucket-cloud-bitbucketorg-to-githubcom)
- [Bitbucket Server or Bitbucket Data Center to GitHub.com](#bitbucket-server-or-bitbucket-data-center-to-githubcom)
- [GitLab to GitHub.com](#gitlab-to-githubcom)
- [Any Git repository to GitHub.com](#any-git-repository-to-githubcom)
- [Any Mercurial repository to GitHub.com](#any-mercurial-repository-to-githubcom)
- [Any Subversion (SVN) repository to GitHub.com](#any-subversion-svn-repository-to-githubcom)
- [Any Team Foundation Version Control (TFVC) repository to GitHub.com](#any-team-foundation-version-control-tfvc-repository-to-githubcom)
- [Any Perforce repository to GitHub.com](#any-perforce-repository-to-githubcom)
- [Any other repository to GitHub.com](#any-other-repository-to-githubcom)

### GitHub Enterprise Server 3.4.1 or newer to GitHub.com

- **Scope**: Source, history, and metadata
- **Tooling**: GitHub Enterprise Importer
- **More information**:
  - "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  - [GitHub Expert Services](https://github.com/services/) website
- **Caveats**:
  - For complex repositories larger than around 5 GB, you may need to use `ghe-migrator` and Enterprise Cloud Importer instead. Enterprise Cloud Importer is only available for expert-led migrations.
  - If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Migrations from any Git repository to GitHub.com](#any-git-repository-to-githubcom)."

### GitHub Enterprise Server 3.4.0 or older to GitHub.com

- **Scope**: Source, history, and metadata
- **Tooling**: GitHub Enterprise Importer
- **More information**:
  - "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  - [GitHub Expert Services](https://github.com/services/) website
- **Caveats**:
  - For complex repositories larger than around 5 GB, you may need to use `ghe-migrator` and Enterprise Cloud Importer instead. Enterprise Cloud Importer is only available for expert-led migrations.
  - If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Migrations from any Git repository to GitHub.com](#any-git-repository-to-githubcom)."

### GitHub.com to GitHub.com

Migrations from GitHub.com include GitHub Enterprise Cloud. This path includes adoption of Enterprise Managed Users or a move between managed enterprises.

- **Scope**: Source, history, and metadata
- **Tooling**: GitHub Enterprise Importer or GitHub Expert Services
- **More information**:
  - "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  - [GitHub Expert Services](https://github.com/services/) website
- **Caveats**:
  - For complex repositories larger than around 5 GB, you may need to use `ghe-migrator` and Enterprise Cloud Importer instead. Enterprise Cloud Importer is only available for expert-led migrations.
  - If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Migrations from any Git repository to GitHub.com](#any-git-repository-to-githubcom)."

### Azure DevOps Services (Azure DevOps Cloud) to GitHub.com

- **Scope**: Source, history, and metadata
- **Tooling**: GitHub Enterprise Importer
- **More information**: "[AUTOTITLE](/migrations/using-github-enterprise-importer)"

### Azure DevOps Server to GitHub.com

- **Scope**: Source, history, and metadata
- **Tooling**: Migration to Azure DevOps Services, then GitHub Enterprise Importer
- **More information**:
  - [Migrate data from Azure DevOps Server to Azure DevOps Services](https://learn.microsoft.com/en-us/azure/devops/migrate/migration-overview?view=azure-devops) in the Microsoft Docs
  - "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
- **Caveats**: If you can't migrate to Azure DevOps Services first, you must  perform a "source and history" migration instead. For more information, "[Migrations from any Git repository to GitHub.com](#migrations-from-any-git-repository)."

### Bitbucket Cloud (Bitbucket.org) to GitHub.com

- **Scope**: Source and history
- **Tooling**: Git CLI or GitHub Importer
- **More information**:
  - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"
  - "[AUTOTITLE](/migrations/importing-source-code/using-github-importer/about-github-importer)"

### Bitbucket Server or Bitbucket Data Center to GitHub.com

- **Scope**: Source, history, and metadata
- **Tooling**: GitHub Enterprise Importer
- **More information**:
  - "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  - [GitHub Expert Services](https://github.com/services/) website
- **Caveats**:
  - For complex repositories larger than around 5 GB, you may need to use `bbs-exporter` and Enterprise Cloud Importer instead. Enterprise Cloud Importer is only available for expert-led migrations.
  - If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Migrations from any Git repository to GitHub.com](#any-git-repository-to-githubcom)."

### GitLab to GitHub.com

- **Scope**: Source, history, and metadata
- **Tooling**: `gl-exporter`, then Enterprise Cloud Importer (expert-led migrations only)
- **More information**: [GitHub Expert Services](https://github.com/services/) website
- **Caveats**:
  - Enterprise Cloud Importer is only available for expert-led migrations.
  - If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Migrations from any Git repository to GitHub.com](#any-git-repository-to-githubcom)."

### Any Git repository to GitHub.com

- **Scope**: Source and history
- **Tooling**: Git CLI or GitHub Importer if the repository is accessible over the public internet
- **More information**:
  - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"
  - "[AUTOTITLE](/migrations/importing-source-code/using-github-importer/about-github-importer)"

### Any Mercurial repository to GitHub.com

- **Scope**: Source and history
- **Tooling**: Mercurial, Git CLI, and Python
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"

### Any Subversion (SVN) repository to GitHub.com

- **Scope**: Source and history
- **Tooling**: Subversion and Git CLI
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"

### Any Team Foundation Version Control (TFVC) repository to GitHub.com

- **Scope**: Source and history
- **Tooling**: Azure Repos, then Git CLI
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"

### Any Perforce repository to GitHub.com

- **Scope**: Source and history
- **Tooling**: `git-p4`, then Git CLI
- **More information**:
  - [git-p4](https://git-scm.com/docs/git-p4) in the Git documentation
  - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#importing-a-git-repository-with-the-command-line)"

### Any other repository to GitHub.com

- **Scope**: Source snapshot
- **Tooling**: GitHub CLI or Git CLI
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)"

## Migrations to GitHub Enterprise Server

You can review the scope and tooling for your migration to GitHub Enterprise Server, including any additional information or caveats.

- [GitHub.com to GitHub Enterprise Server](#githubcom-to-github-enterprise-server)
- [GitHub Enterprise Server to GitHub Enterprise Server](#github-enterprise-server-to-github-enterprise-server)
- [Azure DevOps to GitHub Enterprise Server](#azure-devops-to-github-enterprise-server)
- [Bitbucket Cloud (Bitbucket.org) to GitHub Enterprise Server](#bitbucket-cloud-bitbucketorg-to-github-enterprise-server)
- [Bitbucket Server or Bitbucket Data Center to GitHub Enterprise Server](#bitbucket-server-or-bitbucket-data-center-to-github-enterprise-server)
- [GitLab to GitHub Enterprise Server](#gitlab-to-github-enterprise-server)
- [Any Git repository to GitHub Enterprise Server](#any-git-repository-to-github-enterprise-server)
- [Any Mercurial repository to GitHub Enterprise Server](#any-mercurial-repository-to-github-enterprise-server)
- [Any Subversion (SVN) repository to GitHub Enterprise Server](#any-subversion-svn-repository-to-github-enterprise-server)
- [Any Team Foundation Version Control (TFVC) repository to GitHub Enterprise Server](#any-team-foundation-version-control-tfvc-repository-to-github-enterprise-server)
- [Any Perforce repository to GitHub Enterprise Server](#any-perforce-repository-to-github-enterprise-server)
- [Any other repository to GitHub Enterprise Server](#any-other-repository-to-github-enterprise-server)

### GitHub.com to GitHub Enterprise Server

Migrations from GitHub.com include GitHub Enterprise Cloud.

- **Scope**: Source, history, and metadata
- **Tooling**: Organization migrations API, then `ghe-migrator`
- **More information**:
  - "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/exporting-migration-data-from-githubcom)"
  - "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"

### GitHub Enterprise Server to GitHub Enterprise Server

- **Scope**: Source, history, and metadata
- **Tooling**: Organization migrations API, then `ghe-migrator`
- **More information**:
  - "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/exporting-migration-data-from-github-enterprise-server)"
  - "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"

### Azure DevOps to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: Git CLI
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"

### Bitbucket Cloud (Bitbucket.org) to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: Git CLI
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"

### Bitbucket Server or Bitbucket Data Center to GitHub Enterprise Server

- **Scope**: Source, history, and metadata
- **Tooling**: `bbs-exporter` (expert-led migrations only), then `ghe-migrator`
- **More information**:
  - [GitHub Expert Services](https://github.com/services/) website
  - "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"
- **Caveats**: If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Any Git repository to GitHub Enterprise Server](#any-git-repository-to-github-enterprise-server)."

### GitLab to GitHub Enterprise Server

- **Scope**: Source, history, and metadata
- **Tooling**: `gl-exporter` (expert-led migrations only), then `ghe-migrator`
- **More information**:
  - [GitHub Expert Services](https://github.com/services/) website
  - "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"
- **Caveats**: If an expert-led migration isn't right for you, you can perform a "source and history" migration of the affected repositories instead. For more information, see "[Any Git repository to GitHub Enterprise Server](#any-git-repository-to-github-enterprise-server)."

### Any Git repository to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: Git CLI
- **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"

### Any Mercurial repository to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: Mercurial, Git CLI, and Python
- **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"

### Any Subversion (SVN) repository to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: Subversion and Git CLI
- **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"

### Any Team Foundation Version Control (TFVC) repository to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: Azure Repos, then Git CLI
- **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"

### Any Perforce repository to GitHub Enterprise Server

- **Scope**: Source and history
- **Tooling**: `git-p4`, then Git CLI
- **More information**:
  - [git-p4](https://git-scm.com/docs/git-p4) in the Git documentation
  - "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#importing-a-git-repository-with-the-command-line)"

### Any other repository to GitHub Enterprise Server

- **Scope**: Source snapshot
- **Tooling**: GitHub CLI or Git CLI
- **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)"
