# Splitting a subfolder out into a new repository

You can turn a folder within a Git repository into a brand new repository.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You need Git version 2.22.0 or later to follow these instructions, otherwise `git filter-repo` will not work.

</div>
  
If you create a new clone of the repository, you won't lose any of your Git history or changes when you split a folder into a separate repository.  However, note that the new repository won't have the branches and tags of the original repository.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory to the location where you want to create your new repository.

1. Clone the repository that contains the subfolder.

   ```shell
   git clone https://github.com/USERNAME/REPOSITORY-NAME
   ```

1. Change the current working directory to your cloned repository.

   ```shell
   cd REPOSITORY-NAME
   ```

1. To filter out the subfolder from the rest of the files in the repository, install [`git-filter-repo`](https://github.com/newren/git-filter-repo), then run `git filter-repo` with the following arguments.
   - `FOLDER-NAME`: The folder within your project where you'd like to create a separate repository.

   <div class="ghd-tool windows">

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Tip:** Windows users should use `/` to delimit folders.

   </div>

   </div>
  
   ```shell
   $ git filter-repo --path FOLDER-NAME/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```

   The repository should now only contain the files that were in your subfolder(s).

1. [Create a new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) on GitHub.

1. At the top of your new repository on GitHub.com's Quick Setup page, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg> to copy the remote repository URL.

   ![Screenshot of the "Quick Setup" header in a repository. Next to the remote URL, an icon of two overlapping squares is highlighted with an orange outline.](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Tip:** For information on the difference between HTTPS and SSH URLs, see "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories)."

   </div>

1. Add a new remote name with the URL you copied for your repository. For example, `origin` or `upstream` are two common choices.

   ```shell
   git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
   ```

1. Verify that the remote URL was added with your new repository name.

    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://github.com/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://github.com/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

1. Push your changes to the new repository on GitHub.

    ```shell
    git push -u origin BRANCH-NAME
    ```
