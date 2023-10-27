# Installing a GitHub App from a third party

You can install GitHub Apps directly from the app owner to use on your personal account or organizations.

## About installing GitHub Apps

This article describes how to install a GitHub App directly from the app owner instead of from GitHub Marketplace. For more information on installing GitHub Apps from GitHub Marketplace, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-in-your-personal-account)" and "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-in-your-organization)." For more information about installing GitHub Apps that you own, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-your-own-github-app)."

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

## Requirements to install a GitHub App

Anyone can install GitHub Apps on their personal account.

Organization owners can install GitHub Apps on their organization.

Admins of repositories that are owned by an organization can also install GitHub Apps on the organization if they only grant the app access to repositories that they are an admin of and if the app does not request any organization resources. Organization owners can prevent outside collaborators who are repository admins from installing GitHub Apps.

Organization members who are not organization owners or repository admins can still select the organization during the install process. Instead of installing the app, GitHub will send a notification to the organization owner to request the organization owner to install the app.

The "app manager" role in an organization does not give a person the ability to install a GitHub App in the organization. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers)."

## Installing a GitHub App

During the installation process, the app owner will direct you to a GitHub URL to install the GitHub App. The URL will look something like `https://github.com/apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the GitHub App.

1. Select the location where you want to install the GitHub App. You can select your personal account or an organization that you are a member of.

1. If the app requires repository permissions, select **All repositories** or **Only select repositories**. The app will always have at least read-only access to all public repositories on GitHub.

   If the app does not require repository permissions, these options will be omitted.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the app to access.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
1. Review the permissions that the app is requesting. For more information about the REST API requests the GitHub App can make with those permissions, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps)."
1. Click **Install**, **Install and request**, or **Request**. The button that is presented depends on whether your organization owner must approve none, some, or all of the requested access for the app. For more information, see "[Requirements to install a GitHub App](#requirements-to-install-a-github-app)."
