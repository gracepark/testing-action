# Moving a file to a new location

You can move a file to a different directory on GitHub or by using the command line.

In addition to changing the file location, you can also [update the contents of your file](/repositories/working-with-files/managing-files/editing-files), or [give it a new name](/repositories/working-with-files/managing-files/renaming-a-file) in the same commit.

## Moving a file to a new location on GitHub

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips**:

- If you try to move a file in a repository that you don’t have access to, we'll fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
- Some files, such as images, require that you move them from the command line. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)".
- If a repository has any protected branches, you can't edit or upload files in the protected branch using GitHub. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

You can use GitHub Desktop to move your changes to a new branch and commit them. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)."

</div>

1. In your repository, browse to the file you want to move.
1. In the upper right corner of the file view, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> to open the file editor.

   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/enterprise/repository/edit-file-edit-button.png)

1. In the filename field, change the name of the file using these guidelines:
    - To move the file **into a subfolder**, type the name of the folder you want, followed by `/`. Your new folder name becomes a new item in the navigation breadcrumbs.
    - To move the file into a directory **above the file's current location**, place your cursor at the beginning of the filename field, then either type `../` to jump up one full directory level, or type the `backspace` key to edit the parent folder's name.

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
1. Click **Commit changes** or **Propose changes**.

## Moving a file to a new location using the command line

You can use the command line to move files within a repository by removing the file from the old location and then adding it in the new location.

Many files can be [moved directly on GitHub](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location), but some files, such as images, require that you move them from the command line.

This procedure assumes you've already:

- [Created a repository on GitHub](/repositories/creating-and-managing-repositories/creating-a-new-repository), or have an existing repository owned by someone else you'd like to contribute to
- [Cloned the repository locally on your computer](/repositories/creating-and-managing-repositories/cloning-a-repository)

1. On your computer, move the file to a new location within the directory that was created locally on your computer when you cloned the repository.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Use `git status` to check the old and new file locations.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
   > # Changes not staged for commit:
   > #   (use "git add/rm <file>..." to update what will be committed)
   > #   (use "git checkout -- <file>..." to discard changes in working directory)
   > #
   > #     deleted:    /OLD-FOLDER/IMAGE.PNG
   > #
   > # Untracked files:
   > #   (use "git add <file>..." to include in what will be committed)
   > #
   > #     /NEW-FOLDER/IMAGE.PNG
   > #
   > # no changes added to commit (use "git add" and/or "git commit -a")
   ```

1. Stage the file for commit to your local repository. This will delete, or `git rm`, the file from the old location and add, or `git add`, the file to the new location.

   ```shell
   $ git add .
   # Adds the file to your local repository and stages it for commit.
   # To unstage a file, use 'git reset HEAD YOUR-FILE'.
   ```

1. Use `git status` to check the changes staged for commit.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
   > # Changes to be committed:
   > #   (use "git reset HEAD <file>..." to unstage)
   > #
   > #    renamed:    /old-folder/image.png -> /new-folder/image.png
   # Displays the changes staged for commit
   ```

1. Commit the file that you've staged in your local repository.

   ```shell
   $ git commit -m "Move file to new directory"
   # Commits the tracked changes and prepares them to be pushed to a remote repository.
   # To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
   ```

1. [Push the changes](/get-started/using-git/pushing-commits-to-a-remote-repository) in your local repository to GitHub.com.

   ```shell
   $ git push origin YOUR_BRANCH
   # Pushes the changes in your local repository up to the remote repository you specified as the origin
   ```
