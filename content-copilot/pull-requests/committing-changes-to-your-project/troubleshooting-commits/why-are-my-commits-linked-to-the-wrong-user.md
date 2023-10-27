# Why are my commits linked to the wrong user?

GitHub uses the email address in the commit header to link the commit to a GitHub user. If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings, add an email address to your account email settings, or do both.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: If your commits are linked to another user, that does not mean the user can access your repository. A user can only access a repository you own if you add them as a collaborator or add them to a team that has access to the repository.

</div>

## Commits are linked to another user

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's account on GitHub. In this case, you can change the email in your local Git configuration settings and add the new email address to your account on GitHub.com account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". If you work on multiple machines, you will need to change this setting on each one.
1. Add the email address from step 2 to your account settings by following the steps in "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)".

Commits you make from this point forward will be linked to your account.

## Commits are not linked to any user

If your commits are not linked to any user, the commit author's name will not be rendered as a link to a user profile. To check the email address used for those commits and connect commits to your account, take the following steps.

1. On GitHub.com, navigate to the main page of the repository.
1. On the main page of the repository, above the file list, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-history" aria-hidden="true"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg> **commits**.

   ![Screenshot of the main page for a repository. A clock icon and "178 commits" is highlighted with an orange outline.](/assets/images/help/commits/commits-page.png)
1. To navigate to a specific commit, click the commit message for that commit.

   ![Screenshot of a commit in the commit list for a repository. "Update README.md" is highlighted with an orange outline.](/assets/images/help/commits/commit-message-link.png)
1. To read a message about why the commit is not linked, hover over the blue <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-question" aria-label="Question mark" role="img"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> to the right of the username.

   - **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your account on GitHub. To link your commits, [add the email address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account). If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.
   - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on GitHub. You will need to [set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.
   - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address. You will need to [set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

If your local Git configuration contained a generic email address, or an email address that was already attached to another user's account, then your previous commits will not be linked to your account. While Git does allow you to change the email address used for previous commits, we strongly discourage this, especially in a shared repository.

</div>

## Further reading

- "[AUTOTITLE](/search-github/searching-on-github/searching-commits)"
