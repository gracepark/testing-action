# Choosing who owns and pays for codespaces in your organization

You can choose whether codespaces are paid for and owned by your organization or by your members.

**Who can use this feature**: Organization owners can change an organization's billing details and control who owns and pays for codespaces.
Organizations on GitHub Team and GitHub Enterprise plans can pay for their members' use of GitHub Codespaces. These organizations can then access policies that apply to codespaces paid for by the organization. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)."

## Overview

If you're the owner of an organization on a GitHub Team or GitHub Enterprise Cloud plan, you can pay for your members' and collaborators' usage of GitHub Codespaces. Paying for usage will allow people to use GitHub Codespaces to work in your repositories without having to do so at their own expense and will give your organization more control over the codespaces created from your repositories.

To pay for usage, you must do all of the following things:

- Allow at least some of your members and collaborators to use GitHub Codespaces in your organization's private repositories. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization#enabling-or-disabling-github-codespaces)."
- Choose for codespaces created from your organization's repositories to be **organization-owned**. For more information, see "[Choosing who owns and pays for codespaces](#choosing-who-owns-and-pays-for-codespaces)."
- Set a non-zero spending limit for GitHub Codespaces. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-organization-account)."

## About choosing who pays for codespaces

Paying for a codespace means paying for the storage and compute costs of the codespace over the codespace's lifetime. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

Organizations on a GitHub Free plan cannot pay for GitHub Codespaces, so the user who creates the codespace always pays.

For organizations on a GitHub Team or GitHub Enterprise Cloud plan, when a user creates a codespace from a repository in the organization, either the user or the organization can pay for the codespace. The user who creates a codespace can't choose who pays for it, but the organization can choose to pay for certain users. In an organization's settings, you can choose for codespaces to be **user-owned** or **organization-owned**.

If an organization chooses for codespaces to be **user-owned**, a user who creates a codespace from a repository in the organization always pays for the codespace. The user's access to create codespaces depends on the visibility of the repository and your organization's access settings.

If an organization chooses for codespaces to be **organization-owned**, the organization will pay for a codespace if all the following things are true:

- The organization has set a non-zero spending limit for GitHub Codespaces.
- The codespace is created from one of the organization's repositories, or from a fork of one of the organization's repositories. This includes both public and private repositories.
- The user creating the codespace is a member or collaborator of the organization, and the organization has enabled GitHub Codespaces for this user. This can include all members and collaborators if the organization has chosen to enable Codespaces for all users. If Codespaces isn't enabled for a user, they can still create codespaces from public repositories in the organization, but the user will pay for these codespaces.

For more information about enabling GitHub Codespaces for members and collaborators, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)."

## About ownership of codespaces

A codespace is paid for by the account that owns it. The codespace owner can be the user who created the codespace, or it can be an organization.

If your organization owns a codespace, your organization has control over that codespace. For example, for codespaces owned by your organization, you can:

- Use the [REST API](/rest/codespaces/organizations) to manage codespaces, such as stopping or deleting a codespace
- Access audit logs to review actions related to GitHub Codespaces
- Set policies to manage constraints, such as restricting the base image or machine type that can be used in codespaces, or setting a default timeout and retention period

If a user owns a codespace, your organization does not have any of these options for managing the codespace, even if the codespace was created from one of your organization's repositories.

When a user creates a codespace, they're told who will pay for it, and therefore who owns it. From a user's point of view, apart from the policies your organization can use to set constraints on codespaces, the experience with GitHub Codespaces will be similar regardless of who owns a codespace. For example, most of a user's personal settings for GitHub Codespaces, such as dotfiles, secrets, and GPG verification, apply regardless of who owns the codespace.

## About changing your settings

When you change your ownership settings, existing codespaces can transfer to a new owner.

If you change from **organization ownership** to **user ownership**, codespaces that are currently owned by your organization will be transferred to the ownership of the user who created the codespace. Before you make this change, you should ask each user to review the codespaces that will be transferred to their ownership. These codespaces will now incur usage on the user's personal account.

If you change from **user ownership** to **organization ownership**, existing codespaces may be transferred to your organization's ownership. A codespace will be transferred if the user who currently owns the codespace is a member or collaborator, and you have enabled GitHub Codespaces for this user. Otherwise, a codespace will remain under the ownership of the user.

## Choosing who owns and pays for codespaces

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you cannot access the option to make codespaces **organization-owned**, this may be because you have disabled GitHub Codespaces for all users in your organization's private repositories. For more information, see "[About choosing who pays for codespaces](#about-choosing-who-pays-for-codespaces)."

</div>

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. Under **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**, in the left sidebar, click **General**.
1. On the Codespaces settings page, under "Codespace ownership," select the setting you want for your organization:
   - **Organization ownership**: Codespaces can be owned and paid for by your organization.
   - **User ownership**: Codespaces are always owned and paid for by the user who creates the codespace.

1. Optionally, under "Codespaces access," review the members and collaborators for whom you have enabled Codespaces. These are the only users who can create codespaces that your organization pays for. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)."

## Setting a spending limit

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You must set a non-zero spending limit on your personal, organization, or enterprise account before the account can be billed for use of GitHub Codespaces.

</div>

By default, all accounts have a GitHub Codespaces spending limit of $0 USD. This prevents new codespaces being created, or existing codespaces being opened, if doing so would incur a billable cost to your personal, organization, or enterprise account. For personal accounts, if you have access to create a codespace, you can do so as long as the account has not reached the limit of its monthly included usage. For organizations and enterprises, the default spending limit means that, to allow people to create codespaces that are billed to the organization, or its parent enterprise, the limit must be changed to a value above $0 USD.

For information on managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-organization-account)."
