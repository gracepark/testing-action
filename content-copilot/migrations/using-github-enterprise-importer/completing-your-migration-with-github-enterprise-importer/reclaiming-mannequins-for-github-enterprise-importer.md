# Reclaiming mannequins for GitHub Enterprise Importer

After your migration, you can assign the history of a placeholder identity, or mannequin, to a member of your organization.

**Who can use this feature**: Organization owners can reclaim mannequins.

## About mannequins

After you run a migration with GitHub Enterprise Importer, all user activity in the migrated repository (except Git commits) is attributed to placeholder identities called mannequins.

Each mannequin only has a display name, which comes from the display name in the source repository. Mannequins do not have organization membership or repository access. Mannequins always use the same avatar, a ghost octocat, and include a mannequin label following the display name.

![Screenshot of the header of an issue comment. The commenter is labeled as a mannequin, and the "Mannequin" label is outlined in dark orange.](/assets/images/help/github-enterprise-importer/mannequin-example.png)

You can reattribute the history for each mannequin to an organization member with the GitHub CLI or in your browser. If you use the GitHub CLI, you can reclaim mannequins in bulk.

Reclaiming is optional and can happen any time after a migration is finished. For this reason, you can allow your team to begin working in migrated repositories before reclaiming.

Mannequins are not used for Git commit attribution. For more details about commit attribution, see "[Managing authorship for commit commits](#managing-authorship-for-git-commits)" below.

## Reclaiming mannequins

You can reclaim mannequins with GitHub CLI (recommended) or the browser.

- [Reclaiming mannequins with the GitHub CLI (recommended)](#reclaiming-mannequins-with-the-github-cli-recommended)
- [Reclaiming mannequins in your browser](#reclaiming-mannequins-in-your-browser)

By default, reclaiming a mannequin will send an attribution invitation to the target user.

The target user can choose to accept or reject the invitation. After a user accepts an attribution invitation, all contributions previously attributed to the mannequin will be attributed to the user instead. In future migrations to the same organization, any contributions from the same mannequin will be automatically reclaimed for the same user.

If your organization uses Enterprise Managed Users and you choose to reclaim mannequins with the GitHub CLI, you can optionally skip the invitation process, immediately reclaiming the mannequin without the user's approval.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:**
- You cannot reclaim mannequins after you have transferred a repository to another organization. If you wish to transfer a repository to another organization after your migration, you must reclaim the mannequins before the transfer.
- When reclaiming mannequins, you can only target existing organization members. Before attempting to reclaim a mannequin, verify that the GitHub user you want to invite is already added to the organization.

</div>

GitHub Enterprise Importer does not migrate user access to repositories. After reclaiming mannequins, if any of the users do not already have appropriate access to the repository via team membership, you must separately give the users access to the repository. For more information, see "[Managing an individual's access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)."

### Reclaiming mannequins with the GitHub CLI (recommended)

You can use the GitHub CLI to reclaim mannequins individually or in bulk. For more information about installing and updating migration extensions for the GitHub CLI, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer)."

The exact command you need to use depends on which extension of the GitHub CLI that you're using.

- [Reclaiming mannequins with the GEI extension](#reclaiming-mannequins-with-the-gei-extension)
- [Reclaiming mannequins with the ADO2GH extension](#reclaiming-mannequins-with-the-ado2gh-extension)

#### Reclaiming mannequins with the GEI extension

If your migration source is a GitHub product, you can reclaim mannequins with the GEI extension of the GitHub CLI.

If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN` to each of the commands below, replacing `TOKEN` with the personal access token. For personal access token requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#required-scopes-for-github-enterprise-importer)."

1. Optionally, to reclaim mannequins in bulk, create a CSV file that maps mannequins to organization members.

   - To generate a CSV file with a list of mannequins for an organization, use the `gh gei generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.

     ```shell copy
     gh gei generate-mannequin-csv --github-target-org DESTINATION --output FILENAME.csv
     ```

   - Edit the CSV file, adding the username of the organization member that corresponds to each mannequin.
   - Save the file.
1. To reclaim mannequins, use the `gh gei reclaim-mannequin` command.

   - To reclaim mannequins in bulk with the mapping file you created earlier, replace DESTINATION with the destination organization and FILENAME with the file name of the mapping file.

      ```shell copy
      gh gei reclaim-mannequin --github-target-org DESTINATION --csv FILENAME.csv
      ```

   - To reclaim an individual mannequin, replace DESTINATION with the destination organization, MANNEQUIN with the login of mannequin, and USERNAME with the username of the organization member that corresponds to the mannequin.
   
       If there are multiple mannequins with the same login, you can replace `--mannequin-user MANNEQUIN` with `--mannequin-ID ID`, replacing ID with the ID of the mannequin.
   
       If your organization uses Enterprise Managed Users and you want to skip the attribution invitation to reclaim the mannequin immediately, add the `--skip-invitation` argument.

      ```shell copy
      gh gei reclaim-mannequin --github-target-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.

#### Reclaiming mannequins with the ADO2GH extension

If your migration source is Azure DevOps, you can reclaim mannequins with the ADO2GH extension of the GitHub CLI.

If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN` to each of the commands below, replacing `TOKEN` with the personal access token. For personal access token requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#required-scopes-for-github-enterprise-importer)."

1. Optionally, to reclaim mannequins in bulk, create a CSV file that maps mannequins to organization members.

   - To generate a CSV file with a list of mannequins for an organization, use the `gh ado2gh generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.

     ```shell copy
     gh ado2gh generate-mannequin-csv --github-org DESTINATION --output FILENAME.csv
     ```

   - Edit the CSV file, adding the username of the organization member that corresponds to each mannequin.
   - Save the file.
1. To reclaim mannequins, use the `gh ado2gh reclaim-mannequin` command.

    - To reclaim mannequins in bulk with the mapping file you created earlier, replace DESTINATION with the destination organization and FILENAME with the file name of the mapping file.

      ```shell copy
      gh ado2gh reclaim-mannequin --github-org DESTINATION --csv FILENAME.csv
      ```

   - To reclaim an individual mannequin, replace DESTINATION with the destination organization, MANNEQUIN with the login of mannequin, and USERNAME with the username of the organization member that corresponds to the mannequin.
   
       If there are multiple mannequins with the same login, you can replace `--mannequin-user MANNEQUIN` with `--mannequin-ID ID`, replacing ID with the ID of the mannequin.
   
       If your organization uses Enterprise Managed Users and you want to skip the attribution invitation to reclaim the mannequin immediately, add the `--skip-invitation` argument.

      ```shell copy
      gh ado2gh reclaim-mannequin --github-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.

### Reclaiming mannequins in your browser

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-arrow-switch" aria-hidden="true"><path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z"></path></svg> Import/Export**.
1. To the right of the mannequin you want to reclaim, click **Reattribute**.
1. In the search field, type the username of the organization member you want to attribute the mannequin's contributions to, then click the member.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** You can only send attribution invitations to user accounts that are already members of the organization.

   </div>
1. Click **Invite**.
By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.

## Viewing the status of your attribution invitations

You can view the status of all attribution invitations for your organization.

- Invited: The user has been sent an invitation, but has not replied to the invitation yet.
- Completed: The user has accepted, or the invitation process was skipped. The user's contributions have been reattributed.
- Rejected: The user chose not to be credited for the mannequin's contributions.

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-arrow-switch" aria-hidden="true"><path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z"></path></svg> Import/Export**.
1. Under "<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-arrow-switch" aria-hidden="true"><path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z"></path></svg> Import/Export", click **Attribution Invitations**.

   ![Screenshot of the "Import/Export" page for a repository. A tab, labeled "Attribution Invitations," is outlined in dark orange.](/assets/images/help/github-enterprise-importer/attribution-invitations-tab.png)

## Managing authorship for Git commits

Authorship for Git commits is not associated with mannequins and cannot be attributed to GitHub users by reclaiming mannequins. Instead, commit authorship is attributed to user accounts on GitHub based on the email address that was used to author the commit in Git.

In many cases, users can reattribute commits to themselves by adding the email address used to author the commit to their user account on GitHub. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

However, if you use Enterprise Managed Users, users cannot add email addresses to their user account on GitHub and will therefore not be able to reattribute Git commits. Only commits authored by a user's primary email address in your identity provider (IdP) will be attributed to managed user accounts.

Additionally, commits authored by a GitHub-provided `noreply` email address cannot be reattributed, because you can't manually add a `noreply` email address to a user account. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."
