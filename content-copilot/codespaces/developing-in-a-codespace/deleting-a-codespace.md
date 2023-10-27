# Deleting a codespace

You can delete a codespace you no longer need.

## Overview

GitHub Codespaces are automatically deleted after they have been stopped and have remained inactive for a defined number of days. The retention period for each codespace is set when the codespace is created and does not change. The default retention period is 30 days. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces?tool=webui)."

You can manually delete a codespace in a variety of ways:
- In the terminal by using GitHub CLI
- In Visual Studio Code
- In your web browser

Use the tabs at the top of this article to display instructions for each of these ways of deleting a codespace.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can't delete a codespace from within the JetBrains Gateway, or the JetBrains client application, or from within JupyterLab.

</div>

## Why you should delete unused codespaces

There are costs associated with storing codespaces. You should therefore delete any codespaces you no longer need. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

There are limits to the number of codespaces you can create, and the number of codespaces you can run at the same time. These limits vary based on a number of factors. If you reach the maximum number of codespaces and try to create another, a message is displayed telling you that you must remove an existing codespace before you can create a new one.

## Deleting a codespace

<div class="ghd-tool webui">

1. Navigate to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).
1. To the right of the codespace you want to delete, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Codespace configuration" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>, then click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg> Delete**.

   ![Screenshot of a list of codespaces with the dropdown menu for one of them displayed, showing the "Delete" option.](/assets/images/help/codespaces/delete-codespace.png)

</div>

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You may have prebuild codespaces that are consuming additional storage which are not displayed on this dashboard. To delete them, follow the steps for “[Deleting a prebuild configuration](/codespaces/prebuilding-your-codespaces/managing-prebuilds#deleting-a-prebuild-configuration).”

</div>

<div class="ghd-tool vscode">

You can delete codespaces from within VS Code when you are not currently working in a codespace.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Note**: If the Remote Explorer is not displayed in the Activity Bar:
   
   1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
   1. Type: `details`.
   1. Click **Codespaces: Details**.
   
   </div>
1. Under "GitHub Codespaces," right-click the codespace you want to delete.
1. Click **Delete Codespace**.

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

To delete a codespace use the `gh codespace delete` subcommand and then choose a codespace from the list that's displayed.

```shell
gh codespace delete
```

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `--force` flag to force deletion, avoiding this prompt.

For more information about this command, see [the GitHub CLI manual](https://cli.github.com/manual/gh_codespace_delete).

</div>

## Bulk deleting codespaces

<div class="ghd-tool webui">

You can use GitHub CLI to delete several or all of your codespaces with a single command. For more information, click the "GitHub CLI" tab near the top of this page.

</div>

<div class="ghd-tool vscode">

You can use GitHub CLI to delete several or all of your codespaces with a single command. For more information, click the "GitHub CLI" tab near the top of this page.

</div>

<div class="ghd-tool cli">

You can delete several or all of your codespaces with a single command, using `gh codespace delete` followed by one of these flags:

`--all` - Delete all of your codespaces.

`--repo REPOSITORY` - Delete all of your codespaces for this repository. Or use together with the `--days` flag to filter by age of the codespace.

`--days NUMBER` - Delete all of your codespaces that are older than the specified number of days. Can be used together with the `--repo` flag.

By default you are prompted to confirm deletion of any codespaces that contain unsaved changes. You can use the `--force` flag to skip this confirmation.

### Example

Delete all of the codespaces for the `octo-org/octo-repo` repository that you created more than 7 days ago.

```shell
gh codespace delete --repo octo-org/octo-repo --days 7
```

</div>

## Deleting codespaces in your organization

As an organization owner, you can use GitHub CLI to delete any codespace in your organization.

<div class="ghd-tool webui">

For more information, click the "GitHub CLI" tab near the top of this page.

</div>

<div class="ghd-tool vscode">

For more information, click the "GitHub CLI" tab near the top of this page.

</div>

<div class="ghd-tool cli">

1. Enter one of these commands to display a list of codespaces.
   - `gh codespace delete --org ORGANIZATION` - Lists the current codespaces in the specified organization.
   - `gh codespace delete --org ORGANIZATION --user USER` - Lists only those codespaces created by the specified user.
   You must be an owner of the specified organization.
1. In the list of codespaces, navigate to the codespace you want to delete.
1. To delete the selected codespace press <kbd>Enter</kbd>.

   If the codespace contains unsaved changes you will be prompted to confirm deletion.

</div>

You can also use the REST API to delete codespaces for your organization. For more information, see "[AUTOTITLE](/rest/codespaces/organizations#delete-a-codespace-from-the-organization)."

## Further reading

- "[AUTOTITLE](/codespaces/getting-started/understanding-the-codespace-lifecycle)"
- "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)"
- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
