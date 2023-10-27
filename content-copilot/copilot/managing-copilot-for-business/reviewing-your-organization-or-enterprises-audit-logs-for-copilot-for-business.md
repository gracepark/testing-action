# Reviewing your organization's audit logs for Copilot for Business

Review the audit logs for your Copilot for Business subscription to understand what actions have been taken and by which users.

**Who can use this feature**: Organization owners can interact with the audit log.
Audit logs for GitHub Copilot are available for organizations with a Copilot for Business subscription.

## About audit logs for Copilot for Business

Audit logs for Copilot for Business can help you understand what actions have been taken and by whom. You can use the audit logs to review actions taken by users in your organization, such as changes to an organization's Copilot settings and policies, or the addition or removal of seats from your Copilot for Business subscription. The audit log lists events related to your Copilot for Business subscription for the current month and previous six months. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."

## Viewing your organization's audit logs

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Archives" section of the  sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-log" aria-hidden="true"><path d="M5 8.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 5 8.25ZM4 10.5A.75.75 0 0 0 4 12h4a.75.75 0 0 0 0-1.5H4Z"></path><path d="M13-.005c1.654 0 3 1.328 3 3 0 .982-.338 1.933-.783 2.818-.443.879-1.028 1.758-1.582 2.588l-.011.017c-.568.853-1.104 1.659-1.501 2.446-.398.789-.623 1.494-.623 2.136a1.5 1.5 0 1 0 2.333-1.248.75.75 0 0 1 .834-1.246A3 3 0 0 1 13 16H3a3 3 0 0 1-3-3c0-1.582.891-3.135 1.777-4.506.209-.322.418-.637.623-.946.473-.709.923-1.386 1.287-2.048H2.51c-.576 0-1.381-.133-1.907-.783A2.68 2.68 0 0 1 0 2.995a3 3 0 0 1 3-3Zm0 1.5a1.5 1.5 0 0 0-1.5 1.5c0 .476.223.834.667 1.132A.75.75 0 0 1 11.75 5.5H5.368c-.467 1.003-1.141 2.015-1.773 2.963-.192.289-.381.571-.558.845C2.13 10.711 1.5 11.916 1.5 13A1.5 1.5 0 0 0 3 14.5h7.401A2.989 2.989 0 0 1 10 13c0-.979.338-1.928.784-2.812.441-.874 1.023-1.748 1.575-2.576l.017-.026c.568-.853 1.103-1.658 1.501-2.448.398-.79.623-1.497.623-2.143 0-.838-.669-1.5-1.5-1.5Zm-10 0a1.5 1.5 0 0 0-1.5 1.5c0 .321.1.569.27.778.097.12.325.227.74.227h7.674A2.737 2.737 0 0 1 10 2.995c0-.546.146-1.059.401-1.5Z"></path></svg> **Logs**, then click **Audit log**.

## Audit log events for Copilot for Business

You can search for any of the GitHub Copilot audit log events using the `action` qualifier, and the `copilot` category. For example, `action:copilot.cfb_seat_assignment_created`. Alternatively, you can review all of the GitHub Copilot audit log events for your organization by searching for `action:copilot`.

| Action | Description
|------------------|-------------------
|`cfb_org_settings_changed`| Settings for Copilot for Business were changed at the organization level.
|`copilot.cfb_seat_cancelled_by_staff`| A seat was cancelled from the Copilot for Business subscription manually by GitHub staff.
|`cfb_seat_management_changed`| The seat management setting was changed for the Copilot for Business subscription.
|`copilot.cfb_seat_added`|A seat was added to the Copilot for Business subscription and the user received access to GitHub Copilot.
|`copilot.cfb_seat_cancelled`|A seat was canceled from the Copilot for Business subscription and the user's access to GitHub Copilot was revoked.
|`copilot.cfb_seat_assignment_reused`| A seat assignment was re-created for a user who already had a seat assignment with no pending cancellation date.
|`copilot.cfb_seat_assignment_refreshed`| A seat that was previously pending cancellation was re-assigned, revoking the cancellation.
|`copilot.cfb_seat_assignment_created`| A seat assignment was newly created for a user.
|`copilot.cfb_seat_assignment_unassigned`| A seat assignment was unassigned from a user and the seat is pending cancellation.
|`editor_chat_setting`| Confirms the status of the editor chat setting. Possible values: `enabled`, `disabled`, `unconfigured`.
|`code_referencing_setting`| Confirms the status of the code referencing setting. Possible values: `enabled`, `disabled`, `unconfigured`.
