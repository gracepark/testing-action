# Pushing changes to GitHub from GitHub Desktop

As you commit changes to your project locally, you can push those changes to GitHub from GitHub Desktop so that others may access them from the remote repository.

**Who can use this feature**: People with write permissions can push changes to a repository.
## About pushing changes to GitHub

When you push changes, you send the committed changes in your local repository to the remote repository on GitHub. If you change your project locally and want other people to have access to the changes, you must push the changes to GitHub.

Before pushing changes, you should update your local branch to include any commits that have been added to the remote repository. If someone has made commits on the remote that are not on your local branch, GitHub Desktop will prompt you to fetch the new commits before pushing your changes to avoid merge conflicts. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop)."

Repository administrators can enable protections on a branch. If you're working on a branch that's protected, you won't be able to delete or force push to the branch. Repository administrators can enable other protected branch settings to enforce specific workflows before a branch can be merged. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

## Pushing changes to GitHub

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** GitHub Desktop will reject a push if it exceeds certain limits.

- A push contains a large file over 100 MiB in size.
- A push is over 2 GiB in total size.

If you configure Git Large File Storage to track your large files, you can push large files that would normally be rejected. For more information, see "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/about-git-large-file-storage-and-github-desktop)."

</div>

1. To push your local changes to the remote repository, in the repository bar, click **Push origin**.

   ![Screenshot of the repository bar. A button, labeled "Push origin", is highlighted with an orange outline.](/assets/images/help/desktop/push-to-origin.png)
1. If there are commits on the remote branch that you don't have on your local branch, GitHub Desktop prompts you to fetch new commits from the remote. In the "New Commits on Remote" window, click **Fetch**.
1. Optionally, click **Preview Pull Request** to open a preview dialog where you can review your changes and begin to create a pull request. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop)."

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

## Further reading

- "[AUTOTITLE](/get-started/quickstart/github-glossary#push)" in the GitHub glossary
- "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)"
- "[AUTOTITLE](/get-started/using-git)"
