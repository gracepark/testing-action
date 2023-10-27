# Installing a GitHub App from GitHub Marketplace for your organizations

You can install GitHub Apps from GitHub Marketplace to use on your organizations.

## About GitHub Marketplace

This article applies to installing and purchasing GitHub Apps from GitHub Marketplace. For more information on installing GitHub Apps from a source other than GitHub Marketplace, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)."

If you install a GitHub App on your organization account and you choose a paid plan, you will pay for your app subscription on your organization's current billing date using your organization's existing payment method.

If you choose a paid plan with a free trial, you can cancel at any time during your trial period without being charged, but you will automatically lose access to the app. Your paid subscription will start at the end of the 14-day trial. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)."

For more information about installing an OAuth app instead of a GitHub App from GitHub Marketplace, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/installing-an-oauth-app-in-your-organization)."

## About installing GitHub Apps

In order to use a GitHub App on your repositories or organization, you must install the app on your organization or personal account. You can install the same GitHub App on multiple accounts. For example, if you install the app on your personal account and on a few organizations that you own, you'll be able to use the app on your personal repositories, on the organizations where you installed the app, and on repositories owned by those organizations.

When you install an app, you grant the app permission to access the organization and repository resources that it requested. During the installation process, GitHub will tell you which permissions the GitHub App requested. For more information about the REST API requests the GitHub App can make with those permissions, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps)."

When you install an app, you will also choose which repositories to grant the GitHub App access to.

Before installing a GitHub App, you should ensure you trust the owner of the GitHub App. You should also review the permissions that the GitHub App is requesting and make sure you are comfortable granting those permissions. For more information about the REST API requests the GitHub App can make with those permissions, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps)."

There is no limit to how many apps you can install.

### Difference between installation and authorization

After you install a GitHub App, you may also be asked to authorize the app.

When you **install** a GitHub App on your account or organization, you grant the app permission to access the organization and repository resources that it requested. You also specify which repositories the app can access. During the installation process, the GitHub App will indicate which repository and organization permissions you are granting. For more information about what different permissions enable a GitHub App to do, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

For example, you might grant the GitHub App permission to read repository metadata and write issues, and you might grant the GitHub App access to all of your repositories.

![Screenshot of the page to install a GitHub App. The app is requesting read access to metadata and write access to issues. The app can also request user authorization for read access to emails and write access to gists.](/assets/images/github-apps/install-app.png)

When you **authorize** a GitHub App, you grant the app access to your GitHub account, based on the account permissions the app requested. During the authorization process, the app will indicate which resources the app can access on your account. When you authorize a GitHub App, you also grant the app permission to act on your behalf.

For example, you might grant the GitHub App permission to read your email addresses and write gists.

![Screenshot of the page to authorize a GitHub App. The app is requesting read access to email and write access to gists.](/assets/images/github-apps/authorize-app.png)

You can install a GitHub App without authorizing the app. Similarly, you can authorize the app without installing the app.

For more information about authorizing GitHub Apps, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Requirements to install a GitHub App on an organization

Organization owners can install GitHub Apps on their organization.

For enterprises that pay by credit card, enterprise owners who are also organization owners can install GitHub Apps on organizations within their enterprise.

Admins of repositories that are owned by an organization can also install GitHub Apps on the organization if they only grant the app access to repositories that they are an admin of and if the app does not request any organization resources. Organization owners can prevent outside collaborators who are repository admins from installing GitHub Apps.

The "app manager" role in an organization does not give a person the ability to install a GitHub App in the organization. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers)."

## Installing a GitHub App in your organization

1. To open GitHub Marketplace, in the top-left corner of GitHub.com, select <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-three-bars" aria-label="Open global navigation menu" role="img"><path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path></svg>, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gift" aria-hidden="true"><path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path></svg> **Marketplace**.

   ![Screenshot of the navigation bar on GitHub. The "Open global navigation menu" icon is outlined in dark orange.](/assets/images/help/navigation/global-navigation-menu-icon.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: This step refers to the new global navigation, which is currently in public beta and subject to change. For more information on the new global navigation and reverting to the old global navigation, see the [GitHub Changelog](https://github.blog/changelog/2023-06-15-redesigned-navigation-enabled-for-all-users-beta/).

   </div>
1. Browse to the app you'd like to install, then click on the app's name.
1. On the app's page, under "Pricing and setup," click the pricing plan you'd like to use.
1. Click **Install it for free**, **Buy with GitHub**, or **Try free for 14 days**.
1. Choose an installation organization for the app. Depending on your organization's terms of service, this process will be slightly different.

     - If you have given GitHub permission to collect name and address information for your organization, in the "Billing information" section, select the **Switch billing account** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="The downwards-facing triangle icon" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> dropdown menu, then click the organization in which you'd like to install the app.

    ![Screenshot of the GitHub Marketplace app purchase screen. A collapsed blue dropdown menu labeled "Switch billing account" is outlined in dark orange.](/assets/images/help/marketplace/marketplace-confirm-org.png)

     - Otherwise, under "Review your order," select the **Account** dropdown menu, then click the organization in which you'd like to install the app.

    ![Screenshot of the GitHub Marketplace app purchase screen. A collapsed gray dropdown menu labeled "Account" is outlined in dark orange.](/assets/images/help/marketplace/marketplace-confirm-org-no-org-details.png)

1. If you chose a paid plan, review your payment method.
   - To change the existing payment method on file for the organization, click **Edit**, then complete the form to add a new payment method.
   - If there isn't a payment method on file for the organization, click **Add a Payment Method**, then complete the form to add a credit card or PayPal account.
1. Click **Complete order and begin installation**.
1. If the app requires access to repositories, select **All repositories** or **Only select repositories**.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
1. If you chose to give the app access to limited repositories instead of all of your repositories, type the name of each repository you'd like to give the app access to, then click on the repository name to select it.
1. Review the app's access permissions, then click **Install**.

## Further reading

- "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)"
- "[AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-personal-account)"
