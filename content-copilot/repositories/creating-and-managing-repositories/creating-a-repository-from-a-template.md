# Creating a repository from a template

You can generate a new repository with the same directory structure and files as an existing repository.

**Who can use this feature**: Anyone with read access to a template repository can create a repository from that template.
## About repository templates

You can create a template from an existing repository. Anyone with access to the template repository can create a new repository based on the template with the same directory structure, branches, and files. For more information about creation of a repository template, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: You can also create a repository from a template using the GitHub CLI. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the GitHub CLI documentation.

</div>

You can choose to include the directory structure and files from only the default branch of the template repository or to include all branches. Branches created from a template have unrelated histories, which means you cannot create pull requests or merge between the branches.

Creating a repository from a template is similar to forking a repository, but there are important differences:
- A new fork includes the entire commit history of the parent repository, while a repository created from a template starts with a single commit.
- Commits to a fork don't appear in your contributions graph, while commits to a repository created from a template do appear in your contribution graph.
- A fork can be a temporary way to contribute code to an existing project, while creating a repository from a template starts a new project quickly.

For more information about forks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

## Creating a repository from a template

1. On GitHub.com, navigate to the main page of the repository.
1. Above the file list, click **Use this template**.

1. Select **Create a new repository**.

   ![Screenshot of the "Use this template" button and the dropdown menu expanded to show the "Open in a codespace" option.](/assets/images/help/repository/use-this-template-button.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** Alternatively, you can open the template in a codespace and publish your work to a new repository later. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

   </div>

1. Use the **Owner** dropdown menu to select the account you want to own the repository.
   ![Screenshot of the owner menu for a new GitHub repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)
1. Type a name for your repository, and an optional description.

   ![Screenshot of a the first step in creating a GitHub repository. The "Repository name" field contains the text "hello-world" and is outlined in dark orange.](/assets/images/help/repository/create-repository-name.png)
1. Choose a repository visibility. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."
1. Optionally, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.

1. Optionally, if the personal account or organization in which you're creating uses any GitHub Apps from GitHub Marketplace, select any apps you'd like to use in the repository.

1. Click **Create repository from template**.
