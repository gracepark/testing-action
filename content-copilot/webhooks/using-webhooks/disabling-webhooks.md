# Disabling webhooks

You can disable a webhook to unsubscribe from events that occur on GitHub.

## About disabling webhooks

You can disable a webhook that was previously enabled for a repository, organization, GitHub Marketplace account, GitHub Sponsors account, or GitHub App.

To disable a webhook, you can choose to deactivate or delete it. When you deactivate a webhook, the webhook deliveries will stop, and you can choose to reactivate the webhook at a later time. When you delete a webhook, it cannot be restored.

For more information, see "[AUTOTITLE](/webhooks/about-webhooks)" and "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks)."

## Disabling a repository webhook

To disable a repository webhook, you can deactivate or delete it. You must be a repository owner, or have admin access in the repository, to disable webhooks.

You can use the GitHub web interface or the REST API to delete a webhook for a repository. For more information about using the REST API to delete a repository webhook, see "[AUTOTITLE](/rest/webhooks/repos#delete-a-repository-webhook)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-webhook" aria-hidden="true"><path d="M5.5 4.25a2.25 2.25 0 0 1 4.5 0 .75.75 0 0 0 1.5 0 3.75 3.75 0 1 0-6.14 2.889l-2.272 4.258a.75.75 0 0 0 1.324.706L7 7.25a.75.75 0 0 0-.309-1.015A2.25 2.25 0 0 1 5.5 4.25Z"></path><path d="M7.364 3.607a.75.75 0 0 1 1.03.257l2.608 4.349a3.75 3.75 0 1 1-.628 6.785.75.75 0 0 1 .752-1.299 2.25 2.25 0 1 0-.033-3.88.75.75 0 0 1-1.03-.256L7.107 4.636a.75.75 0 0 1 .257-1.03Z"></path><path d="M2.9 8.776A.75.75 0 0 1 2.625 9.8 2.25 2.25 0 1 0 6 11.75a.75.75 0 0 1 .75-.751h5.5a.75.75 0 0 1 0 1.5H7.425a3.751 3.751 0 1 1-5.55-3.998.75.75 0 0 1 1.024.274Z"></path></svg> Webhooks**.
1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.

## Disabling an organization webhook

To disable an organization webhook, you can deactivate or delete it. Only organization owners can disable webhooks in an organization.

You can use the GitHub web interface or the REST API to delete an organization webhook. For more information about using the REST API to delete an organization webhook, see "[AUTOTITLE](/rest/orgs/webhooks#delete-an-organization-webhook)."

1. In the upper-right corner of any page on GitHub.com, click your profile photo.
1. Click **Your organizations**.
1. To the right of the organization, click **Settings**.
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-webhook" aria-hidden="true"><path d="M5.5 4.25a2.25 2.25 0 0 1 4.5 0 .75.75 0 0 0 1.5 0 3.75 3.75 0 1 0-6.14 2.889l-2.272 4.258a.75.75 0 0 0 1.324.706L7 7.25a.75.75 0 0 0-.309-1.015A2.25 2.25 0 0 1 5.5 4.25Z"></path><path d="M7.364 3.607a.75.75 0 0 1 1.03.257l2.608 4.349a3.75 3.75 0 1 1-.628 6.785.75.75 0 0 1 .752-1.299 2.25 2.25 0 1 0-.033-3.88.75.75 0 0 1-1.03-.256L7.107 4.636a.75.75 0 0 1 .257-1.03Z"></path><path d="M2.9 8.776A.75.75 0 0 1 2.625 9.8 2.25 2.25 0 1 0 6 11.75a.75.75 0 0 1 .75-.751h5.5a.75.75 0 0 1 0 1.5H7.425a3.751 3.751 0 1 1-5.55-3.998.75.75 0 0 1 1.024.274Z"></path></svg> Webhooks**.
1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.

## Disabling a GitHub Marketplace webhook

You can deactivate a webhook that was previously enabled for events relating to an app that you published on GitHub Marketplace. You cannot delete the webhook. Only the owner of the app can deactivate the GitHub Marketplace webhook for the app. If an organization has designated any app managers for a GitHub App owned by the organization, the app managers can also deactivate the GitHub Marketplace webhook.

1. Navigate to your [GitHub Marketplace listing page](https://github.com/marketplace/manage).
1. Next to the GitHub Marketplace listing that you want to view webhook deliveries for, click **Manage listing**.
1. In the sidebar, click **Webhook**.
1. Deselect **Active**.
1. Click **Update webhook**.

## Disabling a GitHub Sponsors webhook

You can disable webhooks that were previously enabled for events relating to GitHub Sponsors. Only the owner of the sponsored account can disable sponsorship webhooks for that account.

1. In the upper-right corner of any page, click your profile photo, then click **Your sponsors**.
1. Next to the account you want to edit a webhook for, click **Dashboard**.
1. In the left sidebar, click **Webhooks**.
1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.

## Disabling webhooks for a GitHub App

Each GitHub App has one webhook. You cannot delete the webhook, but you can deactivate the webhook. The owner of a GitHub App can deactivate the webhook the app. If an organization has designated any app managers for a GitHub App owned by the organization, the app managers can also deactivate the webhook for the app.

1. In the upper-right corner of any page on GitHub, click your profile photo.
1. Navigate to your account settings.
   - For a GitHub App owned by a personal account, click **Settings**.
   - For a GitHub App owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Developer settings**.
1. In the left sidebar, click **GitHub Apps**.
1. Next to the GitHub App that you want to deactivate the webhook for, click **Edit**.
1. Under "Webhook," deselect **Active** to disable the webhook.
1. Click **Save changes**.
