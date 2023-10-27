# Troubleshooting GPG verification for GitHub Codespaces

This article provides troubleshooting advice for errors related to signing your commits in codespaces.

If you enable GPG verification, GitHub Codespaces automatically signs your commits in codespaces that you create from selected repositories. For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."

Once you enable GPG verification, it will automatically take effect in any new codespaces you create from the relevant repositories. To have GPG verification take effect in an existing active codespace, you will need to stop and restart the codespace. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)."

If GitHub Codespaces fails to sign a commit, you may see the error message `gpg failed to sign the data` in the command line or in a Visual Studio Code pop-up window.

The following sections of this article provide troubleshooting advice for common causes of this error.

- If GPG verification has previously been enabled in your settings for GitHub Codespaces, and you have recently disabled GPG verification or removed a repository from your list of trusted repositories, Git may still be trying to sign your commits. For more information, see "[Errors after disabling GPG verification](#errors-after-disabling-gpg-verification)."
- If GPG verification is enabled for the codespace, you may have overridden the Git configuration required to sign your commits. For more information, see "[Errors caused by conflicting Git configuration](#errors-caused-by-conflicting-git-configuration)."
- If GPG verification is disabled for the codespace, and you're encountering the error when trying to commit from the "Source Control" view in VS Code, this may be because of your VS Code settings. For more information, see "[Errors in the VS Code "Source Control" view](#errors-in-the-vs-code-source-control-view)."

## Errors after disabling GPG verification

When you enable GPG verification, GitHub Codespaces signs all the commits you make in codespaces by default. It does this by setting the `commit.gpgsign` Git configuration value to `true`.

If you have disabled GPG verification, and are working in an existing codespace, then this value will still be set to `true`. This means that GitHub Codespaces will try to sign your commits, but will be unable to do so, because you have disabled the GPG verification setting.

To keep making regular, unsigned commits in your codespace, reset `commit.gpgsign` to the default value of `false` by entering the following command in the terminal.

```shell copy
git config --unset commit.gpgsign
```

To check that the value has been correctly removed from your configuration, you can enter `git config --list`. You should not see a value for `commit.gpgsign` in the list.

## Errors caused by conflicting Git configuration

To automatically sign your commits, GitHub Codespaces sets certain Git configuration values in your codespace. If you override the values set by GitHub Codespaces, you may be unable to sign your commits.

You may be inadvertently overriding these values if you have linked GitHub Codespaces with a dotfiles repository that contains Git configuration files. For more information about using dotfiles with GitHub Codespaces, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)."

### Checking for conflicting configuration

To sign your commits with GPG, GitHub Codespaces automatically sets the following Git configuration values at the system level.

| Configuration setting | Required value |
| --------------------- | -------------- |
| `user.name` | Must match the full name set on your GitHub profile |
| `credential.helper` | Must be set to `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Must be set to `/.codespaces/bin/gh-gpgsign` |

To check that these values are set correctly in a codespace, you can use the `git config --list --show-origin` command. Because GitHub Codespaces sets this configuration at the system level, the required configuration settings should come from `/usr/local/etc/gitconfig`.

```shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

In addition to the values listed above, you may run into errors if the dotfiles used in your codespaces contain any of the following values.

- The `user.signingkey` Git config value
- The `commit.gpgsign` Git config value
- A manually set `GITHUB_TOKEN`

### Removing conflicting configuration

If you want to keep automatic GPG verification for GitHub Codespaces enabled, you will need to remove any conflicting configuration from the dotfiles used in your codespaces.

For example, if the global `.gitconfig` file on your local machine contains a `gpg.program` value, and you have pushed this file to a dotfiles repository that is linked with GitHub Codespaces, then you may want to remove `gpg.program` from this file and set it at the system level on your local machine instead.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Any changes to your dotfiles repository will apply to new codespaces you create, but not to your existing codespaces.

</div>

1. On your local machine, open a terminal.
1. To remove the conflicting value from `~/.gitconfig` (Mac/Linux) or `C:\Users\YOUR-USER\.gitconfig` (Windows), use the `git config --global --unset` command.

   ```shell
   git config --global --unset gpg.program
   ```

1. Push the change to your dotfiles repository on GitHub.
1. Optionally, to keep your local configuration, set the value again in a Git configuration file that you do not push to your dotfiles repository.

   For example, you can use the `--system` flag to set the configuration in the system-level file at `PATH/etc/gitconfig`, where `PATH` is the directory in which Git is installed on your system.

   ```shell
   git config --system gpg.program gpg2
   ```

Alternatively, if your dotfiles repository contains an installation script in a recognized file such as `install.sh`, you can use the `$CODESPACES` environment variable to add conditional logic, such as only setting `gpg.program` when you are not in a codespace. In the following example, `-z "$CODESPACES"` returns `true` if you are not in a codespace.

```shell copy
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Errors in the VS Code "Source Control" view

If GPG verification is disabled in your settings for GitHub Codespaces, or the repository you created the codespace from isn't in your list of trusted repositories, then Git should not attempt to sign your commits. If you encounter a signing error when trying to commit from the "Source Control" view in VS Code, you should check the VS Code settings in your codespace.

1. In the lower-left corner of the window, select **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="Manage" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>**, then click **Settings**.

   ![Screenshot of a section of the VS Code web client. A gear icon and the "Settings" option in a menu are both highlighted with an orange outline.](/assets/images/help/codespaces/vscode-settings.png)

1. On the "User" tab, in the search bar, search for "gpg".
1. Verify that the "Enables commit signing with GPG or X.509" setting is deselected.

   ![Screenshot of the "User" settings tab. A deselected checkbox, labeled "Enables commit signing with GPG or X.509," is highlighted with an orange outline.](/assets/images/help/codespaces/gpg-vscode-setting.png)

If you find this setting is enabled, you should either deselect the checkbox to stop VS Code trying to sign your commits, or you should enable GPG verification for the repository you're working in so your commits can be signed successfully.

If you change your VS Code settings, you must ensure Settings Sync is enabled if you want to share your changes with other codespaces you create. You should only turn on Settings Sync in a codespace created from a repository you trust. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)."

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
- [`git config`](https://git-scm.com/docs/git-config) in the official Git documentation
