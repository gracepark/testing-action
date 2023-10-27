# GitHub Mobile

Triage, collaborate, and manage your work on GitHub from your mobile device.

## About GitHub Mobile

GitHub Mobile is available as an Android and iOS app.

GitHub Mobile gives you a way to do high-impact work on GitHub quickly and from anywhere. GitHub Mobile is a safe and secure way to access your GitHub data through a trusted, first-party client application.

With GitHub Mobile you can:

- Manage, triage, and clear notifications
- Read, review, and collaborate on issues and pull requests
- Edit files in pull requests
- Search for, browse, and interact with users, repositories, and organizations
- Receive a push notification when someone mentions your username

- Secure your GitHub.com account with two-factor authentication
- Verify your sign in attempts on unrecognized devices

The following documentation contains more information about using GitHub features on GitHub Mobile.

- For more information about notifications for GitHub Mobile, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#enabling-push-notifications-with-github-mobile)."

- For more information on two-factor authentication using GitHub Mobile, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) and [Authenticating using GitHub Mobile](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication#verifying-with-github-mobile)." 

## Installing GitHub Mobile

To install GitHub Mobile for Android or iOS, see [GitHub Mobile](https://github.com/mobile).

## Managing accounts

You can be simultaneously signed into mobile with multiple accounts on GitHub.com and on GitHub Enterprise Server. For more information about our different products, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

GitHub Enterprise Server uses background fetch to support push notifications without sending your information to a third-party service, so you may experience a delay in receiving push notifications.

GitHub Mobile may not work with your enterprise if you're required to access your enterprise over VPN.

### Prerequisites

You must install GitHub Mobile 1.4 or later on your device to use GitHub Mobile with GitHub Enterprise Server.

To use GitHub Mobile with GitHub Enterprise Server, GitHub.com must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see "[Managing GitHub Mobile for your enterprise](/enterprise-server@latest/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise)" in the GitHub Enterprise Server documentation.

During the beta for GitHub Mobile with GitHub Enterprise Server, you must be signed in with a personal account on GitHub.com.

### Adding, switching, or signing out of accounts

You can sign into mobile with any GitHub account, either on GitHub.com or on GitHub Enterprise Server. At the bottom of the app, long-press <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **Profile**, then tap <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-hidden="true"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> **Add Enterprise Account**. Follow the prompts to sign in.

After signing in with an account on GitHub Enterprise Server, you can switch between any other accounts you're currently logged into within the app. At the bottom of the app, long-press <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **Profile**, then tap the account you want to switch to.

If you no longer need to access your account on  GitHub Mobile, you can sign out of the account. At the bottom of the app, long-press <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **Profile**, swipe left on the account to sign out of, then tap **Sign out**.

Alternatively, once logged into one account, access the account switcher to log into other accounts or log out of an existing account by navigating to the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-person" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **Profile** tab, then tapping <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>, and then tapping **Manage Accounts**.

## Supported languages for GitHub Mobile

GitHub Mobile is available in the following languages.

- English
- Japanese
- Brazilian Portuguese
- Simplified Chinese
- Spanish

If you configure the language on your device to a supported language, GitHub Mobile will default to the language. You can change the language for GitHub Mobile in GitHub Mobile's **Settings** menu.

## Managing Universal Links for GitHub Mobile on iOS

GitHub Mobile automatically enables Universal Links for iOS. When you tap any GitHub link, the destination URL will open in GitHub Mobile instead of Safari. For more information, see [Universal Links](https://developer.apple.com/ios/universal-links/) on the Apple Developer site.

To disable Universal Links, long-press any GitHub link, then tap **Open**. Every time you tap a GitHub link in the future, the destination URL will open in Safari instead of GitHub Mobile.

To re-enable Universal Links, long-press any GitHub link, then tap **Open in GitHub**.

## Sharing feedback

You can submit feature requests or other feedback for GitHub Mobile on [GitHub Community](https://github.com/orgs/community/discussions/categories/mobile).

## Opting out of beta releases for iOS

If you're testing a beta release of GitHub Mobile for iOS using TestFlight, you can leave the beta at any time.

1. On your iOS device, open the TestFlight app.
1. Under "Apps", tap **GitHub**.
1. At the bottom of the page, tap **Stop Testing**.
