# Managing security and analysis settings for your personal account

You can control features that secure and analyze the code in your projects on GitHub.

## About management of security and analysis settings

GitHub can help secure your repositories. This topic tells you how you can manage the security and analysis features for all your existing or new repositories.

You can still manage the security and analysis features for individual repositories. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

You can also review the security log for all activity on your personal account. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can't disable some security and analysis features that are enabled by default for public repositories.

</div>

If you enable security and analysis features, GitHub performs read-only analysis on your repository.

For an overview of repository-level security, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."

## Enabling or disabling features for existing repositories

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Code security and analysis**.
1. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all**.
1. Optionally, enable the feature by default for new repositories that you own.

   ![Screenshot of the "Enable FEATURE" modal dialog, with the "Enable by default for new private repositories" option highlighted with a dark orange outline.](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)

1. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own.

When you enable one or more security and analysis features for existing repositories, you will see any results displayed on GitHub within minutes:

- All the existing repositories will have the selected configuration.
- New repositories will follow the selected configuration if you've enabled the checkbox for new repositories.
- If enabled, Dependabot security updates will create pull requests to upgrade vulnerable dependencies when Dependabot alerts are triggered.

## Enabling or disabling features for new repositories

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Code security and analysis**.
1. Under "Code security and analysis", to the right of the feature, enable or disable the feature by default for new repositories that you own.

## Further reading

- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates)"
