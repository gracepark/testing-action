# Managing bots and service accounts with two-factor authentication

You can manage shared access to bots and service accounts that have two-factor authentication enabled.

## About managing bots or service accounts with two-factor authentication (2FA)

You should ensure that 2FA is enabled for unattended or shared access accounts in your organization, such as bots and service accounts, so that these accounts stay protected. Enabling 2FA for a bot or service account ensures that users must authenticate with 2FA to sign in to the account on GitHub.com. It does not affect the account's ability to authenticate with its existing tokens in automations.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** When you require use of two-factor authentication for your organization, unattended accounts that do not use 2FA will be removed from the organization and will lose access to its repositories.

</div>

## Managing shared access to bots or service accounts with 2FA

GitHub recommends the following steps for managing shared access to bots or service accounts with 2FA enabled. The steps ensure that only people who have access to a mailing list (controlled by you) and a centrally stored TOTP secret can sign in to the account.

1. Set up a mailing list for the bot or service account which has all of the account owners as members of the alias.
1. Add the new mailing list address as a verified email address in the settings of the shared account. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."
1. If you haven't already done so, configure 2FA for the bot or service account using an authenticator app (TOTP). For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa)."
1. Store the TOTP secret that's offered during 2FA setup in the password manager used by your organization.
   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** Don't store the password for the shared account in the password manager. You will use the password reset functionality every time you need to sign in to the shared account.

   </div>

   If you have already configured 2FA using TOTP and you need to locate the TOTP secret, use the following steps:

   1. In the shared account's settings, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Password and authentication**.
   1. Under "Two-factor methods", to the right of "Authenticator app", click **Edit**.
   1. In "Authenticator app", immediately below the QR code, click **setup key**.

      ![Screenshot of the "Authenticator app" settings. An embedded link, titled "setup key", is highlighted in a dark orange outline.](/assets/images/help/2fa/2fa-totp-secret-setup-key-link.png)

   1. Copy the secret that's displayed in the dialog box.
   1. Reconfigure 2FA using the copied secret.
1. Select a CLI app (such as oathtool) for generating TOTP codes from the TOTP secret. You will use the app to generate a new TOTP code from the TOTP secret every time you need to access the account. For more information, see [oathtool](https://www.nongnu.org/oath-toolkit/man-oathtool.html) in the OATH Toolkit documentation.
1. When you need to access the account, use the password reset functionality to reset the password (via the mailing list), and use the CLI app to generate a TOTP code.
