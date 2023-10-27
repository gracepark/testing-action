# Configuring two-factor authentication

You can choose among multiple options to add a second source of authentication to your account.

You can configure two-factor authentication (2FA) using a TOTP app on mobile or desktop or via text message. After you have configured 2FA using a TOTP app or via text message, you can then also add security keys as alternate 2FA methods.

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA, and security keys as backup methods instead of SMS. TOTP applications are more reliable than SMS, especially for locations outside the United States. Many TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:**
- If you're a member, billing manager, or outside collaborator to a private repository of an organization that requires two-factor authentication, you must leave the organization before you can disable 2FA on GitHub.com.
- If you disable 2FA, you will automatically lose access to the organization and any private forks you have of the organization's private repositories. To regain access to the organization and your forks, re-enable two-factor authentication and contact an organization owner.

</div>

## Configuring two-factor authentication using a TOTP app

A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. These apps can be downloaded to your phone or desktop. We recommend using cloud-based TOTP apps. GitHub is app-agnostic when it comes to TOTP apps, so you have the freedom to choose any TOTP app you prefer. Just search for `TOTP app` in your browser to find various options. You can also refine your search by adding keywords like `free` or `open source` to match your preferences.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: To configure authentication via TOTP on multiple devices, during setup, scan the QR code using each device at the same time or save the "setup key", which is the TOTP secret. If 2FA is already enabled and you want to add another device, you must re-configure your TOTP app from your security settings.

</div>

1. Download a TOTP app of your choice to your phone or desktop.
1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Password and authentication**.
1. In the "Two-factor authentication" section of the page, click **Enable two-factor authentication**.
1. Under "Setup authenticator app", do one of the following:
    - Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on GitHub.
    - If you can't scan the QR code, click **setup key** to see a code, the TOTP secret, that you can manually enter in your TOTP app instead.

   ![Screenshot of the "Setup authenticator app" section of the 2FA settings. A link, labeled "setup key", is highlighted in orange.](/assets/images/help/2fa/ghes-3.8-and-higher-2fa-wizard-app-click-code.png)
1. The TOTP application saves your account on GitHub.com and generates a new authentication code every few seconds. On GitHub, type the code into the field under "Verify the code from the app".
1. Under "Save your recovery codes", click **Download** to download your recovery codes to your device. Save them to a secure location because your recovery codes can help you get back into your account if you lose access.
1. After saving your two-factor recovery codes, click **I have saved my recovery codes** to enable two-factor authentication for your account.
1. Optionally, you can configure additional 2FA methods to reduce your risk of account lockout. For more details on how to configure each additional method, see "[Configuring two-factor authentication using GitHub Mobile](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)" and "[Configuring two-factor authentication using a security key](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

If you wish to setup a TOTP app manually, and require the parameters encoded in the QR code, they are:
- Type: `TOTP`
- Label: `GitHub:<username>` where `<username>` is your handle on GitHub, for example `monalisa`
- Secret: This is the encoded setup key, shown if you click"setup key" during configuration
- Issuer: `GitHub`
- Algorithm: The default of SHA1 is used
- Digits: The default of 6 is used
- Period: The default of 30 (seconds) is used

## Configuring two-factor authentication using text messages

If you're unable to configure a TOTP app, you can also register your phone number to receive SMS messages.

Before using this method, be sure that you can receive text messages. Carrier rates may apply.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:** We **strongly recommend** using a TOTP application for two-factor authentication instead of SMS, and security keys as backup methods instead of SMS. GitHub doesn't support sending SMS messages to phones in every country. Before configuring authentication via text message, review the list of countries where GitHub supports authentication via SMS. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)".

</div>

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Password and authentication**.
1. In the "Two-factor authentication" section of the page, click **Enable two-factor authentication**.
1. At the bottom of the page, next to "SMS authentication", click **Select**.
1. Complete the CAPTCHA challenge, which helps protect against spam and abuse.
1. Under "Setup SMS authentication", select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.
1. You'll receive a text message with a security code. On GitHub, type the code into the field under "Verify the code sent to your phone" and click **Continue**.
   - If you need to edit the phone number you entered, you'll need to complete another CAPTCHA challenge.
1. Under "Save your recovery codes", click **Download** to download your recovery codes to your device. Save them to a secure location because your recovery codes can help you get back into your account if you lose access.
1. After saving your two-factor recovery codes, click **I have saved my recovery codes** to enable two-factor authentication for your account.
1. Optionally, you can configure additional 2FA methods to reduce your risk of account lockout. For more details on how to configure each additional method, see "[Configuring two-factor authentication using GitHub Mobile](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)" and "[Configuring two-factor authentication using a security key](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

## Configuring two-factor authentication using a security key

On most devices and browsers, you can use a physical security key over USB or NFC. Most browsers can use the fingerprint reader, facial recognition, or password/PIN on your device as a security key as well.

Registering a security key for your account is available after enabling 2FA with a TOTP application or a text message. If you lose your security key, you'll still be able to use your phone's code to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
1. Ensure that you have a WebAuthn compatible security key inserted into your device, or that your device has a built-in authenticator such as Windows Hello, Face ID, or Touch ID. Most computers, phones, and tablets support this as an easier-to-use alternative to physical security keys.
1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield-lock" aria-hidden="true"><path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z"></path></svg> Password and authentication**.
1. Next to "Security keys", click **Add**.

   ![Screenshot of the "two-factor methods" section of the 2FA settings. A gray button labeled "Add" is outlined in orange.](/assets/images/help/2fa/add-security-keys-option.png)

1. Under "Security keys", click **Register new security key**.
1. Type a nickname for the security key, then click **Add**.
1. Following your security key's documentation, activate your security key. If using an authenticator that's built into your device, follow the activation instructions from your operating system. You may need to select options such as `Face`, `PIN`, or `built-in sensor` to access your device's authenticator, depending on your operating system and browser.
1. Confirm that you've downloaded and can access your recovery codes. If you haven't already, or if you'd like to generate another set of codes, download your codes and save them in a safe place. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

## Configuring two-factor authentication using GitHub Mobile

You can use GitHub Mobile for 2FA when signing into your GitHub account in a web browser. 2FA with GitHub Mobile does not rely on TOTP, and instead uses public-key cryptography to secure your account.

Once you have configured a TOTP application, or SMS, you can also use GitHub Mobile to authenticate. If, in the future, you no longer have access to GitHub Mobile, you will still be able to use security keys or TOTP applications to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
1. Install [GitHub Mobile](https://github.com/mobile).
1. Sign in to your GitHub account from GitHub Mobile.

After signing in, you can now use your device for 2FA.

## Further reading

- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"
