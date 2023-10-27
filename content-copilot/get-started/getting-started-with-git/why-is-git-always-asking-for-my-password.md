# Why is Git always asking for my password?

If Git prompts you for a username and password every time you try to interact with GitHub, you're probably using the HTTPS clone URL for your repository.

Using an HTTPS remote URL has some advantages compared with using SSH. It's easier to set up than SSH, and usually works through strict firewalls and proxies. However, it also prompts you to enter your GitHub credentials every time you pull or push a repository.

When Git prompts you for your password, enter your personal access token. Alternatively, you can use a credential helper like [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md). Password-based authentication for Git has been removed in favor of more secure authentication methods. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

You can avoid being prompted for your password by configuring Git to [cache your credentials](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) for you. Once you've configured credential caching, Git automatically uses your cached personal access token when you pull or push a repository using HTTPS.

## Further reading

- "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories)."
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)"
- "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
