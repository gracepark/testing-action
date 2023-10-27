# Signing commits

You can sign commits locally using GPG or S/MIME.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** [GitHub Desktop](https://desktop.github.com/) only supports commit signing if your Git client is configured to sign commits by default.

</div>

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips:**

To configure your Git client to sign commits by default for a local repository, in Git versions 2.0.0 and above, run `git config commit.gpgsign true`. To sign all commits by default in any local repository on your computer, run `git config --global commit.gpgsign true`.

To store your GPG key passphrase so you don't have to enter it every time you sign a commit, we recommend using the following tools:
- For Mac users, the [GPG Suite](https://gpgtools.org/) allows you to store your GPG key passphrase in the Mac OS Keychain.
- For Windows users, the [Gpg4win](https://www.gpg4win.org/) integrates with other Windows tools.

You can also manually configure [gpg-agent](http://linux.die.net/man/1/gpg-agent) to save your GPG key passphrase, but this doesn't integrate with Mac OS Keychain like ssh-agent and requires more setup.

</div>

If you have multiple keys or are attempting to sign commits or tags with a key that doesn't match your committer identity, you should [tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key).

1. When committing changes in your local branch, add the -S flag to the git commit command:

   ```shell
   $ git commit -S -m "YOUR_COMMIT_MESSAGE"
   # Creates a signed commit
   ```

1. If you're using GPG, after you create your commit, provide the passphrase you set up when you [generated your GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
1. When you've finished creating commits locally, push them to your remote repository on GitHub:

   ```shell
   $ git push
   # Pushes your local commits to the remote repository
   ```

1. On GitHub, navigate to your pull request.
1. On the pull request, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-commit" aria-hidden="true"><path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **Commits**.

   ![Screenshot of the title and tabs on a pull request. The "Commits" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-commits.png)
1. To view more detailed information about the verified signature, click **Verified.**

   ![Screenshot of a commit in the commit list for a repository. "Verified" is highlighted with an orange outline.](/assets/images/help/commits/verified-commit.png)

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"
- "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)"
