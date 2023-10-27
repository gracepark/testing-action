# Setting up a trial of GitHub Enterprise Cloud

You can try GitHub Enterprise Cloud for free.

<a href="https://github.com/account/enterprises/new" class="btn btn-primary btn-large f4 mt-3 mr-3">Try GitHub Enterprise Cloud for free</a>

## About GitHub Enterprise Cloud

GitHub Enterprise Cloud is designed for large businesses or teams who collaborate on GitHub.com. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)."

You can set up a trial to evaluate the additional features that come with GitHub Enterprise Cloud, such as SAML single sign-on (SSO), internal repositories, audit log streaming, and included GitHub Actions minutes. For a detailed list of the features available with GitHub Enterprise Cloud, see our [Pricing](https://github.com/pricing) page.

## About trials of GitHub Enterprise Cloud

You can set up a 30-day trial to evaluate GitHub Enterprise Cloud. Your trial includes an enterprise account, which allows you to manage multiple organizations. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts)."

During the trial, you can add up to three new organizations to your enterprise. There are no limitations on the number of existing organizations you can transfer to your enterprise. For existing organizations, billing is paused during the trial and any coupons are removed. To reapply a coupon, contact [GitHub's Sales team](https://github.com/enterprise/contact). Organizations created during the trial cannot be removed from the enterprise account until after you purchase GitHub Enterprise.

Your trial also includes 50 seats. If you need more seats to evaluate GitHub Enterprise Cloud, contact [GitHub's Sales team](https://github.com/enterprise/contact). At the end of the trial, you can choose a different number of seats, up to 1,000.

You do not need to provide a payment method during the trial.

If you configure SAML SSO, members of your organization will continue to sign into their personal accounts on GitHub.com. When a member accesses most resources within your organization, GitHub redirects the member to your IdP to authenticate. After successful authentication, your IdP redirects the member back to GitHub. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** SAML SSO does not replace the normal sign-in process for GitHub. Unless you use Enterprise Managed Users, members will continue to sign into their personal accounts on GitHub.com, and each personal account will be linked to an external identity in your IdP.

</div>

If your enterprise account on GitHub.com is on a free trial of GitHub Enterprise Cloud, you cannot connect an Azure subscription.

## Features not included in the trial

The following features are not included in the trial of GitHub Enterprise Cloud:

- Enterprise Managed Users: If you're interested in Enterprise Managed Users, please contact [GitHub's Sales team](https://enterprise.github.com/contact).
- GitHub Codespaces
- GitHub Copilot for Business
- GitHub Sponsors
- Paid GitHub Marketplace apps (free apps are supported as part of the trial)
- GitHub Connect
- For GitHub Actions, increased minutes, job concurrency, and larger runners
- If you set up your own trial, access to GitHub Enterprise Server is not included. If you would like to use GitHub Enterprise Server, contact [GitHub's Sales team](https://github.com/enterprise/contact).

If you invite an existing organization into your trial enterprise, all of these features will be disabled. If you remove the organization from the enterprise, the features will be re-enabled.

## Setting up your trial of GitHub Enterprise Cloud

Before you can try GitHub Enterprise Cloud, you must be signed into a personal account. If you don't already have a personal account on GitHub.com, you must create one. For more information, see "[AUTOTITLE](/free-pro-team@latest/get-started/signing-up-for-github/signing-up-for-a-new-github-account)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: If your company has a Microsoft Enterprise Agreement, do not set up your trial manually. You must contact [GitHub's Sales team](https://github.com/enterprise/contact) to begin your trial and ensure the trial is connected to your Enterprise Agreement.

</div>

1. Navigate to [Set up your Enterprise trial](https://github.com/account/enterprises/new).

1. Follow the prompts to configure your trial.

## Exploring GitHub Enterprise Cloud

After you set up your trial, you can explore GitHub Enterprise Cloud by following the suggested tasks on the "Getting started" tab of your enterprise account.

You can read documentation that reflects the features available to you on GitHub. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-versions-of-github-docs)."

To learn how your enterprise can use GitHub most effectively, see "[AUTOTITLE](/admin/overview/best-practices-for-enterprises)."

During your trial, you can evaluate the extra security features that GitHub offers to customers on GitHub Enterprise by setting up a free trial of GitHub Advanced Security. GitHub Advanced Security is a separate license that gives you access to extra security features in private repositories in your enterprise, such as automatically scanning code for vulnerabilities and detecting leaked secrets. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security)."

For information on planned features and products, see the [GitHub public roadmap](https://github.com/github/roadmap#github-public-roadmap).

## Finishing your trial

You can finish your trial at any time by purchasing GitHub Enterprise or canceling the trial. If you don't purchase GitHub Enterprise or cancel your trial by the end of the 30 days, your trial will expire.

Purchasing GitHub Enterprise ends your trial, removing the 50-seat maximum and initiating payment.

If you cancel your trial or your trial expires, any existing organizations that you added to the enterprise account during the trial will be removed and reverted to their previous plans and settings. For more information about the effects of downgrading an organization, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan#downgrading-your-organizations-plan)."

If you cancel your trial, all enterprise owners and members also lose access to the enterprise account and any organizations that were created during the trial. If your trial expires, everyone retains access to the enterprise account and organizations created during the trial in a downgraded state, giving you a chance to either upgrade to GitHub Enterprise or move your assets elsewhere.

1. In the enterprise account sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.
1. Under <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**, click **Billing**.
1. At the top of the page, click **Buy Enterprise** or **Cancel trial**.
1. Follow the prompts.
