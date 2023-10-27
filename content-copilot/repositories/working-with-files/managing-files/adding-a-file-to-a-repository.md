# Adding a file to a repository

You can upload and commit an existing file to a repository on GitHub or by using the command line.

## Adding a file to a repository on GitHub

Files that you add to a repository via a browser are limited to 25 MiB per file. You can add larger files, up to 100 MiB each, via the command line. For more information, see "[Adding a file to a repository using the command line](#adding-a-file-to-a-repository-using-the-command-line)." To add files larger than 100 MiB, you must use Git Large File Storage. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips:**
- You can upload multiple files to GitHub at the same time.
- If a repository has any protected branches, you can't edit or upload files in the protected branch using GitHub. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

You can use GitHub Desktop to move your changes to a new branch and commit them. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)."

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Above the list of files, select the **Add file** dropdown menu and click **Upload files**. Alternatively, you can drag and drop files into your browser.

   ![Screenshot of the main page of the repository. Above the list of a files, a button, labeled "Add file," is outlined in dark orange.](/assets/images/help/repository/upload-files-button.png)
1. To select the files you want to upload, drag and drop the file or folder, or click **choose your files**.
1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
1. Click **Propose changes**.

## Adding a file to a repository using the command line

You can upload an existing file to a repository on GitHub.com using the command line.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You can also [add an existing file to a repository from the GitHub website](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

</div>

This procedure assumes you've already:

- [Created a repository on GitHub](/repositories/creating-and-managing-repositories/creating-a-new-repository), or have an existing repository owned by someone else you'd like to contribute to
- [Cloned the repository locally on your computer](/repositories/creating-and-managing-repositories/cloning-a-repository)

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:** Never `git add`, `commit`, or `push` sensitive information to a remote repository. Sensitive information can include, but is not limited to:

- Passwords
- SSH keys
- [AWS access keys](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html)
- API keys
- Credit card numbers
- PIN numbers

For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

</div>

1. On your computer, move the file you'd like to upload to GitHub into the local directory that was created when you cloned the repository.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Change the current working directory to your local repository.
1. Stage the file for commit to your local repository.

   ```shell
   $ git add .
   # Adds the file to your local repository and stages it for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
   ```

1. Commit the file that you've staged in your local repository.

   ```shell
   $ git commit -m "Add existing file"
   # Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
   ```

1. [Push the changes](/get-started/using-git/pushing-commits-to-a-remote-repository) in your local repository to GitHub.com.

   ```shell
   $ git push origin YOUR_BRANCH
   # Pushes the changes in your local repository up to the remote repository you specified as the origin
   ```

## Further reading

- "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)"
