# Recovering your account if you lose your 2FA credentials

If you lose access to your two-factor authentication credentials, you can use your recovery codes, or another recovery option, to regain access to your account.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warnings**:

- For security reasons, GitHub Support [will not be able to restore access to accounts](/free-pro-team@latest/site-policy/other-site-policies/github-account-recovery-policy) with two-factor authentication enabled if you lose your two-factor authentication credentials or lose access to your account recovery methods.

</div>

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you cannot use any recovery methods, you have permanently lost access to your account. However, you can unlink an email address tied to the locked account. The unlinked email address can then be linked to a new or existing account. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account)."

</div>

## Using a two-factor authentication recovery code

Use one of your recovery codes to automatically regain entry into your account. You may have saved your recovery codes to a password manager or your computer's downloads folder. The default filename for recovery codes is `github-recovery-codes.txt`. For more information about recovery codes, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

1. Type your username and password to prompt authentication.

    <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

    **Warning**: If you protect your personal account with two-factor authentication but do not know your password, you will not be able to follow these steps to recover your account.GitHub can send a password reset email to a verified address associated with your account. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password)."

    </div>

1. Under "Having problems?", click **Use a recovery code or request a reset**.
1. Type one of your recovery codes, then click **Verify**.

## Authenticating with a security key

If you configured two-factor authentication using a security key, you can use your security key as a secondary authentication method to automatically regain access to your account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

## Authenticating with a fallback number

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Configuring a fallback SMS number in addition to your primary SMS number is no longer supported. Instead, we strongly recommend registering multiple authentication methods.

</div>

If you lose access to your preferred TOTP app or phone number, you can provide a two-factor authentication code sent to your fallback number to automatically regain access to your account.

## Authenticating with a verified device, SSH token, or personal access token

If you know your password for GitHub.com but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. GitHub will not review additional requests submitted during this time.

</div>

You can use your two-factor authentication credentials or two-factor authentication recovery codes to regain access to your account anytime during the 3-5 day waiting period.

1. Type your username and password to prompt authentication.

    <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

    **Warning**: If you protect your personal account with two-factor authentication but do not know your password, you will not be able to follow these steps to recover your account.GitHub can send a password reset email to a verified address associated with your account. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password)."

    </div>
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of the 2FA page at sign in. A link with the text "Use a recovery code or request a reset" is outlined in orange.](/assets/images/help/2fa/use-recovery-code-or-reset-link.png)

1. To the right of "Locked out?", click **Try recovering your account**.

1. Click **I understand, get started** to request a reset of your authentication settings.
1. Click **Send one-time password** to send a one-time password to all eligible addresses associated with your account. Only verified emails are eligible for account recovery. If you've restricted password resets to your primary and/or backup addresses, these addresses are the only addresses eligible for account recovery.
1. Under "One-time password", type the temporary password from the recovery email GitHub sent, then click **Verify email address**.
1. Choose a recovery verification factor.
    - If you've used your current device to log into this account before and would like to use the device for verification, click **Verify with this device**. Device verification is recorded with cookies, and won't be available if your browser deletes cookies regularly.
    - If you've previously set up an SSH key on this account and would like to use the SSH key for verification, click **SSH key**.
    - If you've previously set up a personal access token and would like to use the personal access token for verification, click **Personal access token**.
1. A member of GitHub Support will review your request and email you within three business days. If your request is approved, you'll receive a link to complete your account recovery process. If your request is denied, the email will include a way to contact support with any additional questions.

## Further reading

- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
