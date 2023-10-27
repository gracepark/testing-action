# Remembering your GitHub username or email

Are you signing in to GitHub.com for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on GitHub, you can try these methods for remembering it.

## GitHub Desktop users

<div class="ghd-tool mac">

1. In the **GitHub Desktop** menu, click **Preferences**.
1. In the Preferences window, verify the following:
    - To view your GitHub username, click **Accounts**.
    - To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary GitHub email](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

</div>

<div class="ghd-tool windows">

1. In the **File** menu, click **Options**.
1. In the Options window, verify the following:
    - To view your GitHub username, click **Accounts**.
    - To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary GitHub email](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

</div>

## Finding your username in your `user.name` configuration

During set up, you may have [set your username in Git](/get-started/getting-started-with-git/setting-your-username-in-git). If so, you can review the value of this configuration setting:

```shell
$ git config user.name
# View the setting
YOUR_USERNAME
```

## Finding your username in the URL of remote repositories

If you have any local copies of personal repositories you have created or forked, you can check the URL of the remote repository.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: This method only works if you have an original repository or your own fork of someone else's repository. If you clone someone else's repository, their username will show instead of yours. Similarly, organization repositories will show the name of the organization instead of a particular user in the remote URL.

</div>

```shell
$ cd YOUR_REPOSITORY
# Change directories to the initialized Git repository
$ git remote -v
origin	https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git (fetch)
origin	https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git (push)
```

Your user name is what immediately follows the `https://github.com/`.

## Further reading

- "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)"
