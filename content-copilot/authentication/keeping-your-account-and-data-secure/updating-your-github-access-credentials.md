# Updating your GitHub access credentials

GitHub credentials include not only your password, but also the access tokens, SSH keys, and application API tokens you use to communicate with GitHub. Should you have the need, you can reset all of these access credentials yourself.

## Requesting a new password

1. To request a new password, visit https://github.com/password_reset.
1. Enter the email address associated with your account on GitHub.com, then click **Send password reset email.** The email will be sent to the backup email address if you have one configured.
1. We'll email you a link that will allow you to reset your password. You must click on this link within 3 hours of receiving the email. If you didn't receive an email from us, make sure to check your spam folder.
1. If you have enabled two-factor authentication, you will be prompted for your 2FA credentials:

   - If you have GitHub Mobile, you will be sent a push notification to verify your identity. Open the push notification or the GitHub Mobile app and enter the two-digit code shown to you on the password reset page in your browser.
      - To skip using GitHub Mobile to verify, click **Enter two-factor authentication or recovery code**.

   - Type your authentication code or one of your recovery codes and click **Verify**.
     - If you have added a security key to your account, click **Use security key** instead of typing an authentication code.
     
     - If you have set up [GitHub Mobile](https://github.com/mobile), click **Authenticate with GitHub Mobile** instead.
     
1. In the text field under **Password**, type a new password. Then, in the text field under **Confirm password**, type the password again.
1. Click **Change password**. For help creating a strong password, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-strong-password)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To avoid losing your password in the future, we suggest using a secure password manager.

</div>

## Changing an existing password

When you type a password to sign in, create an account, or change your password, GitHub will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before.

GitHub only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see [HaveIBeenPwned](https://haveibeenpwned.com/).

1. [Sign in](https://github.com/login) to GitHub.
1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Password and authentication**.
1. Under "Change password", type your old password, a strong new password, and confirm your new password. For help creating a strong password, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-strong-password)"
1. Click **Update password**.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

For greater security, enable two-factor authentication in addition to changing your password. See [About two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) for more details.

</div>

## Updating your access tokens

See "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)" for instructions on reviewing and deleting access tokens. To generate new access tokens, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

If you have reset your account password and would also like to trigger a sign-out from the GitHub Mobile app, you can revoke your authorization of the "GitHub iOS" or "GitHub Android" OAuth app. This will sign out all instances of the GitHub Mobile app associated with your account. For additional information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)."

## Updating your SSH keys

See "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)" for instructions on reviewing and deleting SSH keys. To generate and add new SSH keys, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

## Resetting API tokens

If you have any applications registered with GitHub, you'll want to reset their OAuth tokens. For more information, see the "[AUTOTITLE](/rest/apps#reset-an-authorization)" endpoint.

## Preventing unauthorized access

For more tips on securing your account and preventing unauthorized access, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access)."
