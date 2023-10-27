# Push protection for users

You can use secret scanning to block commits containing secrets in any public repository by enabling push protection for yourself.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Push protection for users is currently in beta and subject to change.

</div>

## About push protection for users

With push protection for users, you can enable push protection for yourself, so that no matter which public repository you push to, you will be protected. Additionally, if you are a repository administrator, or an organization owner, you can enable push protection for your repository or organization, respectively. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations)."

If push protection is not enabled for the repository you are pushing to, but you have push protection for yourself enabled, no alerts will be created after you push a secret. However, if the bypassed secret is a GitHub token, the token will be revoked and you will be notified by email.

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

## Enabling push protection for yourself

You can enable push protection for yourself through your personal account settings.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Code security and analysis**.
1. Under "User", to the right of "Push protection for yourself", click **Enable**.

   ![Screenshot of the "User" section of the "Code security and analysis" settings page. A button labeled "Enable" is outlined in dark orange.](/assets/images/help/security/push-protection-for-yourself.png)
