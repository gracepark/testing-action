# Viewing and re-running checks in GitHub Desktop

You can view the status of checks and re-run them in GitHub Desktop.

## About checks in GitHub Desktop

GitHub Desktop displays the status of checks that have run in your pull request branches. The checks badge next to the branch name will display the _pending, passing,_ or _failing_ state of the checks. You can also re-run all, failed, or individual checks when viewing the status of the checks in GitHub Desktop. For more information on setting up checks in your repository, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."

GitHub Desktop will also show a system notification when checks fail. For more information on enabling notifications, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)."

## Viewing and re-running checks

1. In GitHub Desktop, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-branch" aria-hidden="true"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg> **Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)
1. At the top of the drop-down menu, click **Pull Requests**.

   ![Screenshot of the "Current Branch" dropdown menu. A tab, labeled "Pull Requests", is highlighted with an orange outline.](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
1. In the list of pull requests, click the pull request you want to view.
1. Click on the pull request number, to the right of the pull request branch name.

   ![Screenshot of the repository bar. Next to the "Current Branch" button, a numbered label, displayed with a red cross for failing checks, is outlined in orange.](/assets/images/help/desktop/checks-dialog.png)
1. To re-run failed checks, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sync" aria-hidden="true"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg> Re-run** and select **Re-run Failed Checks**.

   ![Screenshot of a dropdown view from a pull request label. Next to the message "Some checks were not successful", a button labeled "Re-run" is outlined in orange.](/assets/images/help/desktop/re-run-failed-checks.png)
1. To re-run individual checks, hover over the individual check you want to re-run and select the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sync" aria-label="The sync icon" role="img"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg> icon to re-run the check.

   ![Screenshot of a dropdown view from a pull request label. The cursor hovers over a check, and an icon of two arrows forming a circle is outlined in orange.](/assets/images/help/desktop/re-run-individual-checks.png)
1. You will see a confirmation dialog with the summary of the checks that will be re-run. Click **Re-run Checks** to confirm that you want to perform the re-run.
