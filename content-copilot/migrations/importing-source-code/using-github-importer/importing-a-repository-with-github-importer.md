# Importing a repository with GitHub Importer

If you have a project hosted on another version control system, you can automatically import it to GitHub using the GitHub Importer tool.

## About repository imports with GitHub Importer

GitHub Importer is not suitable for all imports. For example, if your existing code is hosted on a private network, our tool won't be able to access it. In these cases, we recommend [importing using the command line](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line) for Git repositories or an external [source code migration tool](/migrations/importing-source-code/using-the-command-line-to-import-source-code) for projects imported from other version control systems.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: Support for importing Mercurial, Subversion and Team Foundation Version Control (TFVC) repositories using GitHub Importer will end on April 12, 2024. For more information, see the [changelog](https://github.blog/changelog/2023-04-17-deprecation-importing-non-git-repositories-with-github-importer/).

</div>

If you'd like to match the commits in your repository to the authors' GitHub personal accounts during the import, make sure every contributor to your repository has a GitHub account before you begin the import.

Repositories and individual files are subject to size limits. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github)"

For more information about migration paths to GitHub from other products, or between GitHub products, see "[AUTOTITLE](/migrations/overview/migration-paths-to-github)."

## Importing a repository with GitHub Importer

1. In the upper-right corner of any page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="Create new" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>, and then click **Import repository**.

   ![Screenshot of the top-right corner of any page on GitHub. A plus icon is highlighted with an orange outline.](/assets/images/help/importer/import-repository.png)
1. Under "Your old repository's clone URL", type the URL of the project you want to import.
1. Under "Owner", select the dropdown menu and click your personal account or an organization to own the repository
1. Under "Name", type a name for the repository on GitHub.
1. Under "Privacy", select a visibility for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."
1. Review the information you entered, then click **Begin import**.
1. If your old project requires credentials, type your login information for that project. If SAML SSO or 2FA are enabled for your user account on the old project, enter a personal access token with repository read permissions in the "Password" field instead of your password.
1. Click **Submit**.
1. If there are multiple projects hosted at your old project's clone URL, select the project you'd like to import, then click **Submit**.
1. If you're moving from a version control system other than Git and your project contains files larger than 100 MB, select whether to import the large files using [Git Large File Storage](/repositories/working-with-files/managing-large-files), then click **Continue**.

You'll receive an email when the repository has been completely imported.
