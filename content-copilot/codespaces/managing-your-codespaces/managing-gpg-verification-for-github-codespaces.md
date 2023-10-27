# Managing GPG verification for GitHub Codespaces

You can allow GitHub to automatically use GPG to sign commits you make in your codespaces, so other people can be confident that the changes come from a trusted source.

## About GPG verification in GitHub Codespaces

After you enable GPG verification, GitHub will automatically sign commits you make in GitHub Codespaces, and the commits will have a verified status on GitHub. For more information about GitHub-signed commits, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

By default, GPG verification is disabled for codespaces you create. If you enable GPG verification, your commits are signed in repositories that you trust.

Your list of trusted repositories for GitHub Codespaces is shared between the GPG verification and Settings Sync features. Assuming you have both features enabled, if you have added a selected list of trusted repositories for GPG verification, Settings Sync is turned on in codespaces created from these repositories. If you trust a new repository for Settings Sync, GPG verification is enabled for the same repository. Although the features share the same list of trusted repositories, you can enable or disable GPG verification and Settings Sync independently.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have previously enabled GPG verification for all repositories, we recommend changing your preferences to use a selected list of trusted repositories. For more information, see "[AUTOTITLE](/codespaces/codespaces-reference/security-in-github-codespaces#using-settings-sync)."

</div>

For more information about managing your preferences for Settings Sync, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#managing-your-preferences-for-settings-sync)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have linked a dotfiles repository with GitHub Codespaces, the Git configuration in your dotfiles may conflict with the configuration that GitHub Codespaces requires to sign commits. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)."

</div>

## Enabling or disabling GPG verification

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. On the page that's displayed, under "GPG verification," enable or disable GPG verification by selecting or deselecting **Enable**.
1. To change your trusted repositories for GPG verification and Settings Sync, under "Trusted repositories," either select **All repositories**, or select **Selected repositories** and use the "Select repositories" dropdown to add repositories you trust.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** We recommend using a selected list of trusted repositories. For more information, see "[AUTOTITLE](/codespaces/codespaces-reference/security-in-github-codespaces#using-settings-sync)."

   </div>

Once you enable GPG verification, it will automatically take effect in any new codespaces you create from the relevant repositories. To have GPG verification take effect in an existing active codespace, you will need to stop and restart the codespace. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)."
