# Creating a default community health file

You can create default community health files, such as CONTRIBUTING and CODE_OF_CONDUCT. Default files will be used for any repository owned by the account that does not contain its own file of that type.

## About default community health files

Default community health files are a set of predefined files that provide guidance and templates for maintaining a healthy and collaborative open source project.
You can add default community health files to a public repository called `.github`, in the root of the repository or in the `docs` or `.github` folders. These files help you automate and standardize various aspects of your project's development and community interaction. They are essential for promoting transparency, good practices, and collaboration in open source projects.

GitHub will use and display default files for any repository owned by the account that does not have its own file of that type in any of the following places:

- The root of the repository
- The `.github` folder
- The `docs` folder

For example, anyone who creates an issue or pull request in a repository that does not have its own CONTRIBUTING file will see a link to the default CONTRIBUTING file. If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder, including issue templates or a _config.yml_ file, none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

Default files won’t appear in the file browser or Git history and are not included in clones, packages, or downloads of individual repositories because they are stored only in the `.github` repository.

As a repository maintainer, you can use the community standards checklist to see if your project meets the recommended community standards to help people use and contribute to your project. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)."

## Supported file types

You can create defaults in your organization or personal account for the following community health files:

Community health file | Description
--- | ---
_CODE_OF_CONDUCT.md_ | A CODE_OF_CONDUCT file defines standards for how to engage in a community. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)."
_CONTRIBUTING.md_ | A CONTRIBUTING file communicates how people should contribute to your project. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."
_FUNDING.yml_ | A FUNDING file displays a sponsor button in your repository to increase the visibility of funding options for your open source project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)."
_GOVERNANCE.md_ | A GOVERNANCE file lets people know about how your project is governed. For example, it might discuss project roles and how decisions are made.
Issue and pull request templates and _config.yml_ | Issue and pull request templates customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."
`SECURITY.md` | A SECURITY file gives instructions for how to report a security vulnerability in your project. For more information, see "[AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository)."
_SUPPORT.md_ | A SUPPORT file lets people know about ways to get help with your project. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-support-resources-to-your-project)."

You cannot create a default license file. License files must be added to individual repositories so the file will be included when a project is cloned, packaged, or downloaded.

## Creating a repository for default files

1. In the upper-right corner of any page, select <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="Create something new" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>, then click **New repository**.

   ![Screenshot of a GitHub dropdown menu showing options to create new items. The menu item "New repository" is outlined in dark orange.](/assets/images/help/repository/repo-create.png)

1. Use the **Owner** drop-down menu, and select the organization or personal account you want to create default files for.
   ![Screenshot of the owner menu for a new GitHub repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)
1. In the "Repository name" field, type **.github**.
1. Optionally, in the "Description" field, type a description.
1. Make sure the repository status is set to **Public**. A repository for default files cannot be private.
1. Select **Initialize this repository with a README**.
1. Click **Create repository**.
1. In the repository, create one of the supported community health files. Issue templates and their configuration file must be in a folder called `.github/ISSUE_TEMPLATE`. All other supported files may be in the root of the repository, the `.github` folder, or the `docs` folder. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
