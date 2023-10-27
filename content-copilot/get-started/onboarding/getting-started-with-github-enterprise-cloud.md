# Getting started with GitHub Enterprise Cloud

Get started with setting up and managing your enterprise account with GitHub Enterprise Cloud.

This guide will walk you through setting up, configuring and managing your GitHub Enterprise Cloud account as an enterprise owner.

GitHub provides two types of Enterprise products:

- **GitHub Enterprise Cloud**
- **GitHub Enterprise Server**

The main difference between the products is that GitHub Enterprise Cloud is hosted by GitHub, while GitHub Enterprise Server is self-hosted.

GitHub Enterprise Cloud includes an enterprise account, which allows you to manage multiple organizations. You can choose to let enterprise members create and manage their own personal accounts, or you can use Enterprise Managed Users. For more information about GitHub Enterprise Cloud, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)."

Enterprise Managed Users is a feature of GitHub Enterprise Cloud that provides even greater control over enterprise members and resources. With Enterprise Managed Users, all members are provisioned and managed through your identity provider (IdP) instead of users creating their own accounts on GitHub. Organization and team membership can be managed using groups on your IdP. Managed user accounts are restricted to their enterprise and are unable to push code, collaborate, or interact with users, repositories, and organizations outside of their enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)" in the GitHub Enterprise Cloud documentation.

## Part 1: Setting up your enterprise account

To get started with GitHub Enterprise Cloud, create an enterprise account and add one or more organizations.

### 1. About enterprise accounts

An enterprise account allows you to centrally manage policy and settings for multiple GitHub organizations, including member access, billing and usage and security. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)."

### 2. Creating an enterprise account

To create your enterprise account, start a free 30-day trial of GitHub Enterprise Cloud. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)."

<a href="https://github.com/account/enterprises/new" class="btn btn-primary btn-large f4 mt-3 mr-3">Try GitHub Enterprise Cloud for free</a>

### 3. Adding organizations to your enterprise account

You can add any number of new or existing organizations to manage within your enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)."

### 4. Viewing the subscription and usage for your enterprise account

You can view your current subscription, license usage, invoices, payment history, and other billing information for your enterprise account at any time. Both enterprise owners and billing managers can access and manage billing settings for enterprise accounts. For more information, see  "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)."

## Part 2: Managing your enterprise members with GitHub Enterprise Cloud

If your enterprise uses Enterprise Managed Users, your members are fully managed through your identity provider. Adding members, making changes to their membership, and assigning roles is all managed using your IdP. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

If your enterprise does not use Enterprise Managed Users, follow the steps below.

### 1. Assigning roles in an enterprise

By default, everyone in an enterprise is a member of the enterprise. There are also administrative roles, including enterprise owner and billing manager, that have different levels of access to enterprise settings and data. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

### 2. Inviting people to manage your enterprise

You can invite people to manage your enterprise as enterprise owners or billing managers or remove administrators who no longer need access. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

You can also grant enterprise members the ability to manage support tickets in the support portal. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."

### 3. Viewing people in your enterprise

To audit access to enterprise-owned resources or user license usage, you can view every enterprise administrator, enterprise member, and outside collaborator in your enterprise. You can see the organizations that a member belongs to and the specific repositories that an outside collaborator has access to. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)."

## Part 3: Managing security with GitHub Enterprise Cloud

- [Managing security with Enterprise Managed Users](#managing-security-with-enterprise-managed-users)
- [Managing security without Enterprise Managed Users](#managing-security-without-enterprise-managed-users)

### Managing security with Enterprise Managed Users

With Enterprise Managed Users, access and identity is managed centrally through your identity provider. Two-factor authentication and other access requirements should be enabled and enforced on your IdP.

#### 1. Enabling SAML single sign-on and provisioning in your enterprise with managed users

In an enterprise with managed users, all members are provisioned and managed by your identity provider. You must enable SSO and SCIM provisioning before you can start using your enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#getting-started-with-enterprise-managed-users)."

#### 2. Managing organization and team membership in your enterprise with managed users with your identity provider

To manage organization and team membership within your enterprise from your IdP, you can connect teams in your organizations to security groups in your identity provider. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)."

#### 3. Managing allowed IP addresses for organizations in your enterprise with managed users

You can configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your enterprise with managed users. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)."

#### 4. Enforcing policies for Advanced Security features in your enterprise with managed users

If you have a GitHub Advanced Security license for your enterprise account, you can enforce policies to manage GitHub Advanced Security features for organizations owned by an enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."

### Managing security without Enterprise Managed Users

To manage security for your enterprise, you can require two-factor authentication, manage allowed IP addresses, enable SAML single sign-on and team synchronization, and sign up for and enforce GitHub Advanced Security features.

#### 1. Requiring two-factor authentication and managing allowed IP addresses for organizations in your enterprise account

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise account use two-factor authentication to secure their personal accounts. Before doing so, we recommend notifying all who have access to organizations in your enterprise. You can also configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your enterprise account.

For more information about enforcing two-factor authentication and allowed IP address lists, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)."

#### 2. Enabling and enforcing SAML single sign-on for organizations in your enterprise account

You can centrally manage access to your enterprise's resources from your IdP using SAML single sign-on (SSO). Enterprise owners can enable SAML SSO across all organizations owned by an enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)."

#### 3. Managing team synchronization

You can enable and manage team synchronization between an identity provider (IdP) and GitHub to allow organizations owned by your enterprise account to manage team membership with IdP groups. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."

#### 4. Enforcing policies for Advanced Security features in your enterprise account

If you have a GitHub Advanced Security license for your enterprise account, you can enforce policies to manage GitHub Advanced Security features for organizations owned by an enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."

## Part 4: Managing organization and enterprise level policies and settings

To manage and moderate your enterprise, you can set policies for organizations within the enterprise, view audit logs, configure webhooks, and restrict email notifications.

### 1. Managing policies for organizations in your enterprise account

You can choose to enforce a number of policies for all organizations owned by your enterprise, or choose to allow these policies to be set in each organization. Types of policies you can enforce include repository management, project board, and team policies. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies)."

### 2. Viewing audit logs, configuring webhooks, and restricting email notifications for your enterprise

You can view actions from all of the organizations owned by your enterprise account in the enterprise audit log. You can also configure webhooks to receive events from organizations owned by your enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)."

You can also restrict email notifications for your enterprise account so that enterprise members can only use an email address in a verified or approved domain to receive notifications. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."

## Part 5: Customizing and automating your enterprise's work on GitHub

Members of your organization or enterprise can use tools from the GitHub Marketplace, the GitHub API, and existing GitHub features to customize and automate your work.

### 1. Using GitHub Marketplace

GitHub Marketplace contains integrations that add functionality and improve your workflow. You can discover, browse, and install free and paid tools, including GitHub Apps, OAuth apps, and GitHub Actions, in [GitHub Marketplace](https://github.com/marketplace).

### 2. Using the GitHub API

There are two versions of the GitHub API: the REST API and the GraphQL API. You can use the GitHub APIs to automate common tasks, [back up your data](/repositories/archiving-a-github-repository/backing-up-a-repository), or [create integrations](/get-started/exploring-integrations/about-integrations) that extend GitHub. For more information, see "[AUTOTITLE](/rest/overview/about-githubs-apis)."

### 3. Building GitHub Actions

With GitHub Actions, you can automate and customize GitHub.com's development workflow on GitHub. You can create your own actions, and use and customize actions shared by the GitHub community. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

### 4. Publishing and managing GitHub Packages

GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. For more information, see "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages)."

### 5. Using GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository and publishes a website. You can manage the publication of GitHub Pages sites at the organization level. For more information, see  "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" and "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages)."

## Part 6: Participating in GitHub's community

You and your enterprise members can use GitHub's learning and support resources to get the help they need. You can also support the open source community.

### 1. Reading about GitHub Enterprise Cloud on GitHub Docs

You can read documentation that reflects the features available with GitHub Enterprise Cloud. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-versions-of-github-docs)."

To learn how your enterprise can use GitHub most effectively, see "[AUTOTITLE](/admin/overview/best-practices-for-enterprises)."

### 2. Learning with GitHub Skills

Enterprise members can learn new skills by completing fun, realistic projects in your very own GitHub repository with [GitHub Skills](https://skills.github.com/). Each course is a hands-on lesson created by the GitHub community and taught by a friendly bot.

For more information, see "[AUTOTITLE](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)."

### 3. Supporting the open source community

GitHub Sponsors allows you to make a monthly recurring payment to a developer or organization who designs, creates, or maintains open source projects you depend on. For more information, see "[AUTOTITLE](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)."

### 4. Contacting GitHub Support

GitHub Support can help you troubleshoot issues you run into while using GitHub. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support)."

GitHub Enterprise Cloud allows you to submit priority support requests with a target eight-hour response time. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support)."
