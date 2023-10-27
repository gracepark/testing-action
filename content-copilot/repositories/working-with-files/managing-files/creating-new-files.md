# Creating new files

You can create new files directly on GitHub in any repository you have write access to.

When creating a file on GitHub, consider the following:

- If you try to create a new file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
- File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, [create and commit the files locally, then push them to the repository on GitHub](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

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

1. On GitHub.com, navigate to the main page of the repository.
1. In your repository, browse to the folder where you want to create a file.

1. Above the list of files, using the **Add file** drop-down, click **Create new file**.

1. In the file name field, type the name and extension for the file. To create subdirectories, type the `/` directory separator.
1. In the file contents text box, type content for the file.
1. To review the new content, above the file contents, click **Preview**.

   ![Screenshot of a file in edit mode. Above the text box for editing file contents, a tab, labeled "Preview", outlined in dark orange.](/assets/images/enterprise/repository/new-file-preview.png)

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."

1. If you have more than one email address associated with your account on GitHub.com, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address.  For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
1. Click **Commit changes** or **Propose changes**.
