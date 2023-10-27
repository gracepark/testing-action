# Accessing GitHub using two-factor authentication

With 2FA enabled, you'll be asked to provide your 2FA authentication code, as well as your password, when you sign in to GitHub.

With two-factor authentication enabled, you'll need to provide an authentication code, tap a notification in GitHub Mobile, or use a security key when accessing GitHub through your browser. If you access GitHub using other methods, such as the API or the command line, you'll need to use an alternative form of authentication. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)."

## Performing 2FA when signing in to the website

After you sign in to GitHub using your password, you'll need to provide an authentication code, tap a notification in GitHub Mobile, or use a security key to perform 2FA.

GitHub will only ask you to provide your 2FA authentication code again if you've logged out, are using a new device, are performing a sensitive action, or your session expires. For more information on 2FA for sensitive actions, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/sudo-mode)."

### Generating a code through a TOTP application

If you chose to set up two-factor authentication using a TOTP application, you can generate an authentication code for GitHub at any time. In most cases, just launching the application will generate a new code. You should refer to your application's documentation for specific instructions.

If you delete your authenticator application after configuring two-factor authentication, you'll need to provide your recovery code to get access to your account. Many TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)."

### Using a security key

If you've set up a security key on your account, and your browser supports security keys, you can use it to complete your sign in.

1. Using your username and password, sign in to GitHub through your browser.
1. If you use a physical security key, ensure it's connected to your device.
1. To trigger the security key prompt from your operating system, select "Use security key".
1. Select the appropriate option in the prompt. Depending on your security key configuration, you may type a PIN, complete a biometric prompt, or use a physical security key.

### Receiving a text message

If you set up two-factor authentication via text messages, GitHub will send you a text message with your authentication code.

### Verifying with GitHub Mobile

If you have installed and signed in to GitHub Mobile, you may choose to authenticate with GitHub Mobile for two-factor authentication.

1. Sign in to GitHub with your browser, using your username and password.
1. GitHub will send you a push notification to verify your sign in attempt. Opening the push notification or opening the GitHub Mobile app will display a prompt, asking you to approve or reject this sign in attempt.
   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: This prompt may require you to enter a two-digit number displayed within the browser you are signing in to.

   </div>

   - Upon approving the login attempt using GitHub Mobile, your browser will complete the sign in attempt automatically.
   - Rejecting the sign in attempt will prevent the authentication from finishing. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure)."

## Using two-factor authentication with the command line

Enabling 2FA may affect authentication to GitHub through the command line. To find out if your authentication method is affected, see the following sections.

### Authenticating on the command line using Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) is a secure Git credential helper that runs on Windows, macOS, and Linux. For more information about Git credential helpers, see [Avoiding repetition](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) in the Pro Git book.

Setup instructions vary based on your computer's operating system. For more information, see [Download and install](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) in the GitCredentialManager/git-credential-manager repository.

### Authenticating on the command line using HTTPS

You must create a personal access token to use as a password when authenticating to GitHub on the command line using HTTPS URLs.

When prompted for a username and password on the command line, use your GitHub username and personal access token. The command line prompt won't specify that you should enter your personal access token when it asks for your password.

For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

### Authenticating on the command line using SSH

Enabling 2FA doesn't change how you authenticate to GitHub on the command line using SSH URLs. For more information about setting up and using an SSH key, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

## Using two-factor authentication to access a repository using Subversion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Subversion support will be removed from GitHub
on January 8, 2024. A future release of GitHub Enterprise Server after January 8, 2024
will also remove Subversion support. To read more about this, see [the GitHub blog][svn-sunset-blog].

[svn-sunset-blog]: https://github.blog/2023-01-20-sunsetting-subversion-support/

</div>

When you access a repository via Subversion, you must provide a personal access token instead of entering your password. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

## Troubleshooting

If you lose access to your two-factor authentication credentials, you can use your recovery codes or another recovery method (if you've set one up) to regain access to your account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you cannot use any recovery methods, you have permanently lost access to your account. However, you can unlink an email address tied to the locked account. The unlinked email address can then be linked to a new or existing account. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account)."

</div>

If your authentication fails several times, you may wish to synchronize your phone's clock with your mobile provider. Often, this involves checking the "Set automatically" option on your phone's clock, rather than providing your own time zone.

## Further reading

- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)"
