# Adding an existing project to GitHub using GitHub Desktop

You can add an existing Git repository to GitHub using GitHub Desktop.

1. Using the command line, remove any git remotes currently configured for the repository.

   ```shell
   # Show existing remotes
   $ git remote -v
   > origin	git@git-server/octocat/hello-world.git (fetch)
   > origin	git@git-server/octocat/hello-world.git (push)
   # Remove existing remotes
   $ git remote remove origin
   ```
1. [Add the repository to GitHub Desktop](/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop).
1. In the repository bar, click **Publish repository**.

   ![Screenshot of the repository bar. A button, labeled "Publish repository", is highlighted with an orange outline.](/assets/images/help/desktop/publish-repository.png)
1. In the "Publish Repository" window, in the "Name" field, type the desired name of the repository or use the default current local repository name.
1. Optionally, add a description for the repository.
1. Optionally, to publish a public repository, deselect **Keep this code private**.
1. Select the "Organization" dropdown menu, then either click the organization where you want to publish the repository, or, to publish the repository to your personal account, click **None**.
1. Click **Publish Repository**.
