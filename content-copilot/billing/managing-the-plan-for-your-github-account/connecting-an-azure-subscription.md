# Connecting an Azure subscription

If you use GitHub through a Microsoft Enterprise Agreement, you can enable and pay for usage-based billing on GitHub.com by connecting an Azure subscription.

## About connection of an Azure subscription

You can pay for usage of GitHub features through Azure by connecting an Azure Subscription ID to your organization  account on GitHub.com. For more information about organization accounts, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

## About usage-based billing on GitHub.com

GitHub provides usage-based billing for the following features and situations. You can learn more about billing and spending limits.

| Billed feature or situation | Information about billing | Information about spending limits |
| :- | :- | -: |
| GitHub Codespaces usage | "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" | "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" |
| GitHub Actions usage beyond the amounts included with your plan | "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)" | "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-spending-limits)" |
| GitHub Packages usage beyond the amounts included with your plan | "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)" | "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages#about-spending-limits)" |
| Copilot for Business usage | "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)" | N/A |

## About billing through Azure

If you link your GitHub account to Azure, any usage-based costs starting from that point will be billed through Azure and charged on the 1st of each month. However, remaining GitHub charges, for example charges for your GitHub plan, will still be billed on your usual billing date.

For example, you link your Azure subscription to your organization  account on June 16th and you also have a GitHub Copilot for Business subscription. From that date onwards, any usage costs for Copilot for Business will be included in your Azure bill and charged on July 1st. However, any charges incurred before June 16th for Copilot for Business will be billed separately through GitHub on your account's usual billing date.

## Prerequisites

- You must have  organization  account on GitHub.com. For more information about the differences between these two types of accounts, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."
  - If the organization you want to connect an Azure subscription to belongs to an enterprise account, you must connect your Azure subscription to the enterprise account, not the organization. For more information, see [the GitHub Enterprise Cloud version](/enterprise-cloud@latest/) of this article.

- You must be an owner of the organization account. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

- You must be logged into Azure as a user who is able to provide tenant-wide admin consent, which is required to install GitHub's Subscription Permission Validation app on the Azure AD tenant. The app requires read access to display a list of available subscriptions, and is only used during this one-time process of connecting the Azure subscription. For more information, see [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent) in Microsoft Docs.

    - Alternatively, before following the instructions in this article, users who are not able to provide tenant-wide admin consent can work with an Azure AD global administrator to configure an admin consent workflow. For more information, see [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

- To select an Azure subscription from the list of available subscriptions, the user must be an owner of the Azure subscription. For more information, see [Assign a user as an administrator of an Azure subscription](https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal-subscription-admin) in Microsoft docs.

- You must know your Azure subscription ID. For more information, see [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs or [contact Azure support](https://azure.microsoft.com/support/).

## Connecting your Azure subscription to your organization account

To connect your Azure subscription, you must have owner permissions to the Azure subscription and be an organization owner on GitHub.

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**.
1. Under "Billing Management", to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   If you don't see a "Permissions requested" prompt, and instead see a message indicating that you need admin approval, see "[Message: "Need admin approval"](#message-need-admin-approval)."
1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your enterprise. To select an Azure subscription, you must have owner permissions to the subscription. If the default tenant does not have the right permissions, you may need to specify a different tenant ID. For more information, see "[Prerequisites](#prerequisites)" and [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in Microsoft Docs.
1. Click **Connect**.
1. To the right of "Metered billing via Azure", click **Enable**.

## Disconnecting your Azure subscription from your organization account

After you disconnect your Azure subscription from your organization account, your usage can no longer exceed the amounts included with your plan.

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-credit-card" aria-hidden="true"><path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path></svg> Billing and plans**.
1. Under "Billing Management", then under "Metered billing via Azure", to the right of the subscription ID you want to disconnect, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-label="The trash icon" role="img"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>**.
1. Review the prompt, then click **Remove**.

## Troubleshooting connection of an Azure subscription

You can troubleshoot some common issues with connection of an Azure subscription to your account on GitHub.com.

### Message: "Need admin approval"

If the user account you used to sign into Azure does not have adequate permissions to install the app that GitHub uses to connect a subscription, you'll see a message with the following text.

> **Need admin approval**
>
> GitHub Inc needs permission to access resources in your organisation that only an admin can grant. Please ask an admin to grant permission to this app before you can use it.

To avoid this message when you try again, you must either ensure that the Azure user can provide tenant-wide admin consent, or you must work with an Azure administrator to configure the admin consent workflow. For more information, review "[Prerequisites](#prerequisites)".
