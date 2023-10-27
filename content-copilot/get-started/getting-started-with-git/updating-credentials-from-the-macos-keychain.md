# Updating credentials from the macOS Keychain

You'll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your username, password, or personal access token on GitHub.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Updating credentials from the macOS Keychain only applies to users who manually configured a personal access token using the `osxkeychain` helper that is built-in to macOS.

We recommend you either [configure SSH](/authentication/connecting-to-github-with-ssh) or upgrade to the [Git Credential Manager](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM) instead. GCM can manage authentication on your behalf (no more manual personal access tokens) including 2FA (two-factor auth).

</div>

When Git prompts you for your password, enter your personal access token. Alternatively, you can use a credential helper like [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md). Password-based authentication for Git has been removed in favor of more secure authentication methods. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

## Updating your credentials via Keychain Access

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar.
1. Type `Keychain Access`, then press the Enter key to launch the app.
1. In Keychain Access, search for `github.com`.
1. Find the "Internet password" entry for `github.com`.
1. Edit or delete the entry accordingly.

## Deleting your credentials via the command line

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host=github.com
protocol=https
> [Press Return]
```

If it's successful, nothing will print out. To test that it works, try and clone a private repository from GitHub.com. If you are prompted for a password, the keychain entry was deleted.

## Further reading

- "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)"
