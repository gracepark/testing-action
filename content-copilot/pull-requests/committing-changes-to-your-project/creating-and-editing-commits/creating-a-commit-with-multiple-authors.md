# Creating a commit with multiple authors

You can attribute a commit to more than one author by adding one or more `Co-authored-by` trailers to the commit's message. Co-authored commits are visible on GitHub.

## Required co-author information

Before you can add a co-author to a commit, you must know the appropriate email to use for each co-author. For the co-author's commit to count as a contribution, you must use the email associated with their account on GitHub.com.

If a person chooses to keep their email address private, you should use their GitHub-provided `no-reply` email to protect their privacy. Otherwise, the co-author's email will be available to the public in the commit message. If you want to keep your email private, you can choose to use a GitHub-provided `no-reply` email for Git operations and ask other co-authors to list your `no-reply` email in commit trailers.

For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

  <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

  **Tip:** You can help a co-author find their preferred email address by sharing this information:
- To find your GitHub-provided `no-reply` email, navigate to your email settings page under "Keep my email address private."
- To find the email you used to configure Git on your computer, run `git config user.email` on the command line.

  </div>

## Creating co-authored commits using GitHub Desktop

You can use GitHub Desktop to create a commit with a co-author. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes)" and [GitHub Desktop](https://desktop.github.com).

## Creating co-authored commits on the command line

1. Collect the name and email address for each co-author. If a person chooses to keep their email address private, you should use their GitHub-provided `no-reply` email to protect their privacy.

1. Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add two empty lines.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Tip:** If you're using a text editor on the command line to type your commit message, ensure there are two newlines between the end of your commit description and the `Co-authored-by:` commit trailer.

   </div>

1. On the next line of the commit message, type `Co-authored-by: name <name@example.com>` with specific information for each co-author. After the co-author information, add a closing quotation mark.

   If you're adding multiple co-authors, give each co-author their own line and `Co-authored-by:` commit trailer. Do not add blank lines between each co-author line.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   Co-authored-by: NAME <NAME@EXAMPLE.COM>
   Co-authored-by: ANOTHER-NAME <ANOTHER-NAME@EXAMPLE.COM>"
   ```

The new commit and message will appear on GitHub.com the next time you push. For more information, see "[AUTOTITLE](/get-started/using-git/pushing-commits-to-a-remote-repository)."

## Creating co-authored commits on GitHub

After you've made changes in a file using the web editor on GitHub, you can create a co-authored commit by adding a `Co-authored-by:` trailer to the commit's message.

1. Collect the name and email address for each co-author. If a person chooses to keep their email address private, you should use their GitHub-provided `no-reply` email to protect their privacy.
1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add `Co-authored-by: name <name@example.com>` with specific information for each co-author. If you're adding multiple co-authors, give each co-author their own line and `Co-authored-by:` commit trailer.
1. Click **Commit changes** or **Propose changes**.

The new commit and message will appear on GitHub.com.

## Further reading

- "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors)"
- "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)"
- "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#4-write-a-commit-message-and-push-your-changes)" in the GitHub Desktop documentation
