# About programmatic access in your organization

As an organization owner, you can control access to your organization by  GitHub Apps and OAuth apps.

**Who can use this feature**: Organization owners can control programmatic access in their organization.

## About programmatic access

GitHub Apps, OAuth apps, and personal access tokens can be used to make API requests that read or write resources owned by an organization. As an organization owner, you can control access to your organization by GitHub Apps, OAuth apps, and personal access tokens.

## GitHub Apps

Organization owners can install GitHub Apps on their organization. Repository admins can also install a GitHub App on the organization if the app does not request organization resources and if they only grant the app access to repositories where they are an admin. Organization members can submit a request for their organization owner to install a GitHub App on the organization. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-organization)."

Organization owners can review the GitHub Apps that are installed on their organization and modify the repositories that each app can access. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-github-apps-installed-in-your-organization)."

To help maintain GitHub Apps owned by their organization, organization owners can designate other users in their organization as GitHub App managers. GitHub App managers can manage the settings of some or all of the GitHub Apps that are owned by the organization. The GitHub App manager role does not grant users permission to install GitHub Apps on an organization. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization)."

## OAuth apps

Organization managers can restrict OAuth apps from accessing organization resources. When these restrictions are enabled, organization members and outside collaborators can still request approval for individual OAuth apps. For more information, see "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)."

## Personal access tokens
