# Configuring automatic deletion of your codespaces

Inactive codespaces are automatically deleted. You can choose how long your stopped codespaces are retained, up to a maximum of 30 days.

By default, GitHub Codespaces are automatically deleted after they have been stopped and have remained inactive for 30 days.

However, because GitHub Codespaces incurs storage charges, you may prefer to reduce the retention period by changing your default period in your personal settings for GitHub Codespaces. For more information about storage charges, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Whether or not you have set a personal codespace retention period, it's a good idea to get into the habit of deleting codespaces that you no longer need. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/deleting-a-codespace)."

</div>

Automatic deletion happens irrespective of whether a codespace contains unpushed changes. To prevent automatic deletion of a codespace, just open the codespace again. The retention period is reset every time you connect to a codespace, and the retention countdown restarts when the codespace is stopped.

If a repository belongs to an organization, the organization owner may have set a retention period for the whole organization. If this period is less than the default retention period in your personal settings then the organization retention period will apply to codespaces you create for this repository. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)."

Each codespace has its own retention period. You may, therefore, have codespaces with different retention periods. For example, if:
- You created a codespace, changed your default retention period, then created another codespace.
- You created a codespace using GitHub CLI and specified a different retention period.
- You created a codespace for an organization-owned repository that has a retention period configured in the organization settings. The ownership of the codespaces you create is shown on the "[Your codespaces](https://github.com/settings/codespaces)" page.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: The retention period is specified in days. A day represents a 24-hour period, beginning at the time of day when you stop a codespace.

</div>

<div class="ghd-tool webui">

## Setting a default retention period for your codespaces

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. Under "Default retention period", enter the number of days for which you want your codespaces to be retained, by default, after they have been stopped.

   ![Screenshot of the "Default retention period" setting, currently set to 1 day. Next to the number of days is the "Save" button.](/assets/images/help/codespaces/setting-default-retention.png)

   You can set your default retention period between `0` and `30` days.

   <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

   **Warning**: Setting the period to `0` will result in your codespaces being immediately deleted when you stop them, or when they timeout due to inactivity. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

   </div>

1. Click **Save**.

When you create a codespace using GitHub CLI you can override this default. If you create a codespace in an organization that specifies a shorter retention period, the organization-level value overrides your personal setting.

If you set a retention period of more than a day, you'll be sent an email notification one day prior to its deletion.

## Checking the remaining time until autodeletion

You can check whether a codespace is due to be automatically deleted soon.

When an inactive codespace is approaching the end of its retention period, this is indicated in your list of codespaces on GitHub at [https://github.com/codespaces](https://github.com/codespaces).

![Screenshot of a list of three codespaces. The third of these is labeled "Expiring in 4 days" which is highlighted with a dark orange outline.](/assets/images/help/codespaces/retention-deletion-message.png)

## Avoiding automatic deletion of codespaces

You may have a codespace that you want to keep for longer than the retention period defined in your personal settings. You can do this by using the "Keep codespace" option. When you select this option, your codespace will be retained indefinitely, until you delete it manually.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: The "Keep codespace" option is not available for organization-owned codespaces affected by an organization retention policy.

</div>

Codespaces incur storage costs, or consume your included storage allowance if the codespace is owned by your personal GitHub account. You should therefore be aware of the cost implications of storing codespaces indefinitely. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-storage-usage)."

1. Navigate to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).
1. To the right of the codespace you want to exempt from automatic deletion, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Codespace configuration" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>, then click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-bookmark" aria-hidden="true"><path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path></svg> Keep codespace**.

   ![Screenshot of the dropdown menu for an active codespace. The "Keep codespace" option has a tooltip saying "Expires 10 days after shutdown."](/assets/images/help/codespaces/keep-codespace.png)

Codespaces that you have exempted from automatic deletion are indicated in your list of codespaces with the bookmark icon (<svg version="1.1" width="24" height="24" viewBox="0 0 24 24" class="octicon octicon-bookmark-fill" aria-hidden="true"><path d="M6.69 2h10.56c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.585L12 17.21l-5.781 4.626A.75.75 0 0 1 5 21.253L4.94 3.756A1.748 1.748 0 0 1 6.69 2Z"></path></svg>).

![Screenshot of a section of the codespaces list, showing a codespace labeled with the bookmark icon.](/assets/images/help/codespaces/keep-codespace-bookmarked.png)

</div>

<div class="ghd-tool cli">

## Setting a retention period for a codespace

If you have installed GitHub CLI, you can use it to work with GitHub Codespaces. For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).

To set the codespace retention period when you create a codespace, use the `--retention-period` flag with the `codespace create` subcommand. Specify the period in days. The period must be between 0 and 30 days.

```shell
gh codespace create --retention-period DAYS
```

If you don't specify a retention period when you create a codespace, then either your default retention period, or an organization retention period, will be used, depending on which is lower. For information about setting your default retention period, click the "Web browser" tab on this page.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

</div>

<div class="ghd-tool vscode">

## Setting the retention period

You can set your default retention period in your web browser, on GitHub.com. Alternatively, if you use GitHub CLI to create a codespace you can set a retention period for that particular codespace. For more information, click the appropriate tab above.

## Checking whether codespaces will be autodeleted soon

You can check, in the Visual Studio Code desktop application, whether a codespace is due to be automatically deleted soon.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. Choose **GitHub Codespaces** from the dropdown menu at the top right of the Remote Explorer, if it is not already selected.
1. Under "GITHUB CODESPACES," position the mouse pointer over the codespace that you're interested in. A pop-up box is displayed showing you information about the codespace.

   If the codespace is nearing the end of its retention period, a line is included telling when this period is due to expire.

   ![Screenshot of the "Remote Explorer" side bar. In the right-click menu for a codespace, "Expiring in 19 days" is highlighted with an orange outline.](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

</div>
