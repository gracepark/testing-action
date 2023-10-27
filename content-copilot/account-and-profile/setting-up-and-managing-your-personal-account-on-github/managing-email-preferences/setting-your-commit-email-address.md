# Setting your commit email address

You can set the email address that is used to author commits on GitHub.com and on your computer.

## About commit email addresses

GitHub uses your commit email address to associate commits with your account on GitHub.com. You can choose the email address that will be associated with the commits you push from the command line as well as web-based Git operations you make.

For web-based Git operations, you can set your commit email address on GitHub.com. For commits you push from the command line, you can set your commit email address in Git.

Any commits you made prior to changing your commit email address are still associated with your previous email address.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You cannot verify email addresses from disposable email address services (services that allow you to receive email at a temporary address that expires after a certain time). If you'd like to keep your email address private, you can use a GitHub-provided `noreply` email address. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github)."

</div>

If you'd like to keep your personal email address private, you can use a `noreply` email address from GitHub as your commit email address. To use your `noreply` email address for commits you push from the command line, use that email address when you set your commit email address in Git. To use your `noreply` address for web-based Git operations, set your commit email address on GitHub and choose to **Keep my email address private**.

You can also choose to block commits you push from the command line that expose your personal email address. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address)."

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your account on GitHub.com, or the `noreply` email address provided to you in your email settings. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you created your account on GitHub.com _after_ July 18, 2017, your `noreply` email address for GitHub is an ID number and your username in the form of <code>ID+USERNAME@users.noreply.github.com</code>. If you created your account on GitHub.com _prior to_ July 18, 2017, and enabled **Keep my email address private** prior to that date, your `noreply` email address from GitHub is <code>USERNAME@users.noreply.github.com</code>. You can get an ID-based `noreply` email address for GitHub by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

</div>

If you use your `noreply` email address for GitHub to make commits and then [change your username](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username), those commits will not be associated with your account on GitHub.com. This does not apply if you're using the ID-based `noreply` address from GitHub. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username)."

## Setting your commit email address on GitHub

If you haven't enabled email address privacy, you can choose which verified email address to author changes with when you edit, delete, or create files or merge a pull request on GitHub. If you enabled email address privacy, then the commit author email address cannot be changed and will be a no-reply by default. For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mail" aria-hidden="true"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg> Emails**.

1. In "Add email address", type your email address and click **Add**.
1. [Verify your email address](/get-started/signing-up-for-github/verifying-your-email-address).

1. In the "Primary email address" dropdown menu, select the email address you'd like to associate with your web-based Git operations.

   ![Screenshot of the "Email" settings page. Under "Primary email address," a dropdown menu, labeled with Octocat's email address, is outlined in orange.](/assets/images/help/settings/email-primary.png)
1. To keep your email address private when performing web-based Git operations, select **Keep my email addresses private**.

## Setting your commit email address in Git

You can use the `git config` command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to GitHub.com from the command line. Any commits you made prior to changing your commit email address are still associated with your previous email address.

### Setting your email address for every repository on your computer

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Set an email address in Git. You can use your [GitHub-provided `noreply` email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address) or any email address.

   ```shell
   git config --global user.email "YOUR_EMAIL"
   ```

1. Confirm that you have set the email address correctly in Git:

   ```shell
   $ git config --global user.email
   email@example.com
   ```

1. 
Add the email address to your account on GitHub, so that your commits are attributed to you and appear in your contributions graph. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

### Setting your email address for a single repository

GitHub uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on GitHub.com.

You can change the email address associated with commits you make in a single repository. This will override your global Git configuration settings in this one repository, but will not affect any other repositories.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
1. Set an email address in Git. You can use your [GitHub-provided `noreply` email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address) or any email address.

   ```shell
   git config user.email "YOUR_EMAIL"
   ```

1. Confirm that you have set the email address correctly in Git:

   ```shell
   $ git config user.email
   email@example.com
   ```

1. 
Add the email address to your account on GitHub, so that your commits are attributed to you and appear in your contributions graph. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."
