# About remote repositories

GitHub's collaborative approach to development depends on publishing commits from your local repository to GitHub for other people to view, fetch, and update.

## About remote repositories

A remote URL is Git's fancy way of saying "the place where your code is stored." That URL could be your repository on GitHub, or another user's fork, or even on a completely different server.

You can only push to two types of URL addresses:

- An HTTPS URL like `https://github.com/user/repo.git`
- An SSH URL, like `git@github.com:user/repo.git`

Git associates a remote URL with a name, and your default remote is usually called `origin`.

## Creating remote repositories

You can use the `git remote add` command to match a remote URL with a name.
For example, you'd type the following in the command line:

```shell
git remote add origin <REMOTE_URL>
```

This associates the name `origin` with the `REMOTE_URL`.

You can use the command `git remote set-url` to [change a remote's URL](/get-started/getting-started-with-git/managing-remote-repositories).

## Choosing a URL for your remote repository

There are several ways to clone repositories available on GitHub.com.

When you view a repository while signed in to your account, the URLs you can use to clone the project onto your computer are available below the repository details.

For information on setting or changing your remote URL, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."

## Cloning with HTTPS URLs

The `https://` clone URLs are available on all repositories, regardless of visibility. `https://` clone URLs work even if you are behind a firewall or proxy.

When you `git clone`, `git fetch`, `git pull`, or `git push` to a remote repository using HTTPS URLs on the command line, Git will ask for your GitHub username and password. When Git prompts you for your password, enter your personal access token. Alternatively, you can use a credential helper like [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md). Password-based authentication for Git has been removed in favor of more secure authentication methods. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

If you are accessing an organization that uses SAML SSO, you must also authorize your personal access token to access the organization before you authenticate. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" and "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips**:
- You can use a credential helper so Git will remember your GitHub credentials every time it talks to GitHub. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)."
- To clone a repository without authenticating to GitHub on the command line, you can use GitHub Desktop to clone instead. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)."

</div>

 If you'd rather use SSH but cannot connect over port 22, you might be able to use SSH over the HTTPS port. For more information, see "[AUTOTITLE](/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)."

## Cloning with SSH URLs

SSH URLs provide access to a Git repository via SSH, a secure protocol. To use these URLs, you must generate an SSH keypair on your computer and add the **public** key to your account on GitHub.com. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

When you `git clone`, `git fetch`, `git pull`, or `git push` to a remote repository using SSH URLs, you'll be prompted for a password and must provide your SSH key passphrase. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)."

If you are accessing an organization that uses SAML single sign-on (SSO), you must authorize your SSH key to access the organization before you authenticate. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" and "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)" in the GitHub Enterprise Cloud documentation.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: You can use an SSH URL to clone a repository to your computer, or as a secure way of deploying your code to production servers. You can also use SSH agent forwarding with your deploy script to avoid managing keys on the server. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/using-ssh-agent-forwarding)."

</div>

## Cloning with GitHub CLI

You can also install GitHub CLI to use GitHub workflows in your terminal. For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

## Cloning with Subversion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Subversion support will be removed from GitHub
on January 8, 2024. A future release of GitHub Enterprise Server after January 8, 2024
will also remove Subversion support. To read more about this, see [the GitHub blog][svn-sunset-blog].

[svn-sunset-blog]: https://github.blog/2023-01-20-sunsetting-subversion-support/

</div>

You can also use a [Subversion](https://subversion.apache.org/) client to access any repository on GitHub. Subversion offers a different feature set than Git. For more information, see "[AUTOTITLE](/get-started/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git)"

You can also access repositories on GitHub from Subversion clients. For more information, see "[AUTOTITLE](/get-started/working-with-subversion-on-github/support-for-subversion-clients)."
