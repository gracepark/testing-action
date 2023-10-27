# Managing multiple accounts

If you use one workstation to contribute to projects for more than one account on GitHub.com, you can modify your Git configuration to simplify the contribution process.

## About management of multiple accounts

In some cases, you may need to use multiple accounts on GitHub.com. For example, you may have a personal account for open source contributions, and your employer may also create and manage a user account for you within an enterprise.

You cannot use your managed user account to contribute to public projects on GitHub.com, so you must contribute to those resources using your personal account. For more information, see "[About  Enterprise Managed Users](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)" in the GitHub Enterprise Cloud documentation.

If you want to use one workstation to contribute from both accounts, you can simplify contribution with Git by using a mixture of protocols to access repository data, or by using credentials on a per-repository basis.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: Be mindful when you use one workstation to contribute to two separate accounts. Management of two or more accounts can increase the chance of mistakenly leaking internal code to the public.

</div>

If you aren't required to use a managed user account, GitHub recommends that you use one personal account for all your work on GitHub.com. With a single personal account, you can contribute to a combination of personal, open source, or professional projects using one identity. Other people can invite the account to contribute to both individual repositories and repositories owned by an organization, and the account can be a member of multiple organizations or enterprises.

## Contributing to two accounts using HTTPS and SSH

If you contribute with two accounts from one workstation, you can access repositories by using a different protocol and credentials for each account.

Git can use either the HTTPS or SSH protocol to access and update data in repositories on GitHub.com. The protocol you use to clone a repository determines which credentials your workstation will use to authenticate when you access the repository. With this approach to account management, you store the credentials for one account to use for HTTPS connections and upload an SSH key to the other account to use for SSH connections.

You can find both the HTTPS or an SSH URLs for cloning a repository on GitHub. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."

For more information about the use of SSH to access repositories on GitHub, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

## Contributing to multiple accounts using HTTPS and personal access tokens

Alternatively, if you want to use the HTTPS protocol for both accounts, you can use different personal access tokens for each account by configuring Git to store different credentials for each repository.

<div class="ghd-tool mac">

1. Open Terminal.
1. To confirm your use of a credential manager, enter the following command and note the output.

   ```shell copy
   git config --get credential.helper
   ```
1. If the output confirms that you're using a credential manager, clear the stored credentials for the credential manager.
   - If the output doesn't include the name of a credential manager, there is no credential manager configured, and you can proceed to the next step.
   - If the output is `osxkeychain`, you're using the macOS keychain. To clear the credentials, enter the following command.

     ```shell copy
     git credential-osxkeychain erase https://github.com
     ```

   - If the output is `manager` (or `manager-core` in previous versions), you're using Git Credential Manager. To clear the credentials, run the following command.

     ```shell copy
     echo "protocol=https\nhost=github.com" | git credential-manager erase
     ```
1. To configure Git to cache credentials for the full remote URL of each repository you access on GitHub, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```
1. For each of your accounts, create a dedicated personal access token with `repo` scope.  For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
1. The first time that you use Git to clone a repository or access data in a repository that you've already cloned, Git will request credentials. Provide the personal access token for the account with access to the repository.

   Git will cache the personal access token based on the full remote URL of the repository, and you'll be able to access and write repository data on GitHub.com using the correct account.

</div>

<div class="ghd-tool windows">

1. Open Git Bash.
1. To confirm your use of a credential manager, enter the following command and note the output.

   ```shell copy
   git config --get credential.helper
   ```
1. If the output confirms that you're using a credential manager, clear the stored credentials for the credential manager.
   - If the output doesn't include the name of a credential manager, there is no credential manager configured, and you can proceed to the next step.
   - If the output is `manager` (or `manager-core` in previous versions), you're using Git Credential Manager. To clear the credentials, run the following command.

    ```shell copy
    echo "protocol=https`nhost=github.com" | git credential-manager erase
    ```

   - If the output is `wincred`, you're using the Windows Credential Manager. To clear the credentials, enter the following command.

     ```shell copy
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```

1. To configure Git to cache credentials for the full remote URL of each repository you access on GitHub, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```
1. For each of your accounts, create a dedicated personal access token with `repo` scope.  For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
1. The first time that you use Git to clone a repository or access data in a repository that you've already cloned, Git will request credentials. Provide the personal access token for the account with access to the repository.

   Git will cache the personal access token based on the full remote URL of the repository, and you'll be able to access and write repository data on GitHub.com using the correct account.

</div>

<div class="ghd-tool linux">

1. Open Terminal.
1. To confirm your use of a credential manager, enter the following command and note the output.

   ```shell copy
   git config --get credential.helper
   ```
1. If the output confirms that you're using a credential manager, clear the stored credentials for the credential manager.
   - If the output doesn't include the name of a credential manager, there is no credential manager configured, and you can proceed to the next step.
   - If the output is `manager` (or `manager-core` in previous versions), you're using Git Credential Manager. To clear the credentials, run the following command.

    ```shell copy
    echo "protocol=https\nhost=github.com" | git credential-manager erase
    ```
1. To configure Git to cache credentials for the full remote URL of each repository you access on GitHub, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```
1. For each of your accounts, create a dedicated personal access token with `repo` scope.  For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
1. The first time that you use Git to clone a repository or access data in a repository that you've already cloned, Git will request credentials. Provide the personal access token for the account with access to the repository.

   Git will cache the personal access token based on the full remote URL of the repository, and you'll be able to access and write repository data on GitHub.com using the correct account.

</div>

## Contributing to multiple accounts using SSH and `GIT_SSH_COMMAND`

If you want to use the SSH protocol for both accounts, you can use different SSH keys for each account. For more information about using SSH, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

To use a different SSH key for different repositories that you clone to your workstation, you must write a shell wrapper function for Git operations. The function should perform the following steps.
1. Determine the repository's full name with owner, using a command such as `git config --get remote.origin.url`.
1. Choose the correct SSH key for authentication.
1. Modify `GIT_SSH_COMMAND` accordingly. For more information about `GIT_SSH_COMMAND`, see [Environment Variables](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) in the Git documentation.

For example, the following command sets the `GIT_SSH_COMMAND` environment variable to specify an SSH command that uses the private key file at **_PATH/TO/KEY/FILE_** for authentication to clone the repository named OWNER/REPOSITORY on GitHub.com.

<pre>
GIT_SSH_COMMAND='ssh -i PATH/TO/KEY/FILE -o IdentitiesOnly=yes' git clone git@github.com:OWNER/REPOSITORY
</pre>
