# Creating a new repository

You can create a new repository on your personal account or any organization where you have sufficient permissions.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** Owners can restrict repository creation permissions in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)."

</div>

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: You can also create a repository using the GitHub CLI. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the GitHub CLI documentation.

</div>

1. In the upper-right corner of any page, select <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="Create something new" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>, then click **New repository**.

   ![Screenshot of a GitHub dropdown menu showing options to create new items. The menu item "New repository" is outlined in dark orange.](/assets/images/help/repository/repo-create.png)

1. Optionally, to create a repository with the directory structure and files of an existing repository, select the **Choose a template** dropdown menu and click a template repository. You'll see template repositories that are owned by you and organizations you're a member of or that you've used before. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)."
1. Optionally, if you chose to use a template, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.
1. Use the **Owner** dropdown menu to select the account you want to own the repository.
   ![Screenshot of the owner menu for a new GitHub repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)
1. Type a name for your repository, and an optional description.

   ![Screenshot of a the first step in creating a GitHub repository. The "Repository name" field contains the text "hello-world" and is outlined in dark orange.](/assets/images/help/repository/create-repository-name.png)
1. Choose a repository visibility. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."
1. If you're not using a template, there are a number of optional items you can pre-populate your repository with. If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict. You can add or create new files using the user interface or choose to add new files using the command line later. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)," "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)," and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)."
    - You can create a README, which is a document describing your project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."
    - You can create a _.gitignore_ file, which is a set of ignore rules. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/ignoring-files)."
    - You can choose to add a software license for your project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."

1. Optionally, if the personal account or organization in which you're creating uses any GitHub Apps from GitHub Marketplace, select any apps you'd like to use in the repository.

1. Click **Create repository**.

1. At the bottom of the resulting Quick Setup page, under "Import code from an old repository", you can choose to import a project to your new repository. To do so, click **Import code**.

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories)"
- [Open Source Guides](https://opensource.guide/)
- [GitHub Skills](https://skills.github.com/)
