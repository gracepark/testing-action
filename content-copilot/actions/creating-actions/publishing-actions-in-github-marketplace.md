# Publishing actions in GitHub Marketplace

You can publish actions in GitHub Marketplace and share actions you've created with the GitHub community.

You must accept the terms of service to publish actions in GitHub Marketplace.

## About publishing actions

Before you can publish an action, you'll need to create an action in your repository. For more information, see "[AUTOTITLE](/actions/creating-actions)."

When you plan to publish your action to GitHub Marketplace, you'll need to ensure that the repository only includes the metadata file, code, and files necessary for the action. Creating a single repository for the action allows you to tag, release, and package the code in a single unit. GitHub also uses the action's metadata on your GitHub Marketplace page.

Actions are published to GitHub Marketplace immediately and aren't reviewed by GitHub as long as they meet these requirements:

- The action must be in a public repository.
- Each repository must contain a single action.
- Each repository must _not_ contain any workflow files.
- The action's metadata file (`action.yml` or `action.yaml`) must be in the root directory of the repository.
- The `name` in the action's metadata file must be unique.
  - The `name` cannot match an existing action name published on GitHub Marketplace.
  - The `name` cannot match a user or organization on GitHub, unless the user or organization owner is publishing the action. For example, only the GitHub organization can publish an action named `github`.
  - The `name` cannot match an existing GitHub Marketplace category.
  - GitHub reserves the names of GitHub features.

## Publishing an action

You can add the action you've created to GitHub Marketplace by tagging it as a new release and publishing it.

To draft a new release and publish the action to GitHub Marketplace, follow these instructions:

1. On GitHub.com, navigate to the main page of the repository.
1. Navigate to the action metadata file in your repository (`action.yml` or `action.yaml`), and you'll see a banner to publish the action to GitHub Marketplace. Click **Draft a release**.
1. Under "Release Action", select **Publish this Action to the GitHub Marketplace**.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: The "Publish" checkbox is disabled if the account that owns the repository has not yet accepted the GitHub Marketplace Developer Agreement. If you own the repository or are an organization owner, click the link to "accept the GitHub Marketplace Developer Agreement", then accept the agreement. If there is no link, send the organization owner a link to this "Release Action" page and ask them to accept the agreement.

   </div>
1. If the labels in your metadata file contain any problems, you will see an error message. Address them by updating your metadata file. Once complete, you will see an "Everything looks good!" message.
1. Select the **Primary Category** dropdown menu and click a category that will help people find your action in GitHub Marketplace.
1. Optionally, select the **Another Category** dropdown menu and click a secondary category.
1. In the tag field, type a version for your action. This helps people know what changes or features the release includes. People will see the version in the action's dedicated GitHub Marketplace page.
1. In the title field, type a release title.
1. Complete all other fields and click **Publish release**. Publishing requires you to use two-factor authentication. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

## Removing an action from GitHub Marketplace

To remove a published action from GitHub Marketplace, you'll need to update each published release. Perform the following steps for each release of the action you've published to GitHub Marketplace.

1. On GitHub.com, navigate to the main page of the repository.
1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)
1. Next to the release you want to edit, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>.

   ![Screenshot of a release in the releases list. A pencil icon is highlighted with an orange outline.](/assets/images/help/releases/edit-release-pencil.png)
1. Select **Publish this action to the GitHub Marketplace** to remove the check from the box.
1. Click **Update release** at the bottom of the page.

## Transferring an action repository

You can transfer an action repository to another user or organization. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository)."

When a repository admin transfers an action repository, GitHub automatically creates a redirect from the previous URL to the new URL, meaning workflows that use the affected action do not need to be updated.

Actions published on GitHub Marketplace are linked to a repository by their unique `name` identifier, meaning you can publish new releases of an action from the transferred repository under the same GitHub Marketplace listing. If an action repository is deleted, the GitHub Marketplace listing is also deleted, and the unique `name` identifier becomes available.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The "Verified" badge seen on an organization's GitHub profile is different from the verified creator badge on GitHub Marketplace. If you transfer an action repository, the GitHub Marketplace listing will lose the verified creator badge unless the new owner is also a verified creator.

</div>
  
## About badges in GitHub Marketplace

Actions with the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-verified" aria-label="The verified badge" role="img"><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>, or  verified creator badge,  indicate that GitHub has verified the creator of the action as a partner organization. Partners can email <a href="mailto:partnerships@github.com">partnerships@github.com</a> to request the verified creator badge.

![Screenshot of GitHub Actions with the verified creator badge.](/assets/images/marketplace/verified-creator-badge-for-actions.png)
