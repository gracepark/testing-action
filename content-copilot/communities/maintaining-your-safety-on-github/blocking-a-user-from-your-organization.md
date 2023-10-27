# Blocking a user from your organization

Organization owners and moderators can block anyone who is not a member of the organization from collaborating on the organization's repositories.

You can block non-members from within your organization's settings or from a specific comment made by a user. When you block a user in a comment, you can choose to send the user a notification explaining that they were blocked and why. Otherwise, the user is not directly notified that you've blocked them. Blocked users can still delete their existing content.

When you block a user, you can choose to block them indefinitely or for a specific amount of time. If you block someone for a specific amount of time, they are automatically unblocked after the chosen time expires. If you block someone indefinitely, you can unblock them manually at any time. For more information, see "[AUTOTITLE](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/locking-conversations)."

</div>

At the time that you block a user from your organization:
- The user stops watching your organization's repositories
- The user's stars and issue assignments are removed from your repositories
- The user's votes on discussions or comments in your organization's repositories are deleted
- The user is removed as a collaborator on your organization's repositories
- The user's contributions to your organization's repositories are no longer counted as contributions for them
- Any pending repository or organization invitations to the blocked user are canceled

After you've blocked a user from your organization, they cannot:
- Cross-reference your organization's repositories in comments
- Fork, watch, pin, or star your organization's repositories

In your organization's repositories, blocked users also cannot:
- Open issues
- Send, close, or merge pull requests
- Comment on issues, pull requests, or commits
- Add or edit wiki pages

## Blocking a user in a comment

1. Navigate to the comment whose author you would like to block.
1. In the upper-right corner of the comment, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Show options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>, then click **Block user**.

   ![Screenshot of a pull request comment by octo-user. Below an icon of three horizontal dots, a dropdown menu is expanded, and "Block user" is outlined in orange.](/assets/images/help/repository/comment-menu-block-user.png)

1. If you'd like to set a time limit for the block, select the **Block user** dropdown menu, and click the amount of time you'd like to block the user.
1. If you'd like to hide all of the comments the user has made in the organization, select **Hide this user's comments** and choose a reason.
1. If you'd like to notify the user why they're being blocked, select **Send a notification to this user**.
1. To block the user, click **Block user from organization** or **Block user from organization and send message**.

## Blocking a user in the organization settings

1. To block an organization member, first [remove the user](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) from the organization.

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the sidebar, select **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-report" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Moderation**, then click **Blocked users**.
1. Under "Block a user", in the text field, type the username of the user you'd like to block.
1. If you'd like to set a time limit for the block, next to the text field, select the **Block options** dropdown menu, and click the amount of time you'd like to block the user.
1. Click **Block user**.
1. Optionally, to add a note to describe why a user was blocked, click **Add Note**. The note will be visible to the owners and moderators of the organization.

## Further reading

- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)"
- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
