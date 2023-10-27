# Team members

Use the REST API to create and manage membership of teams in your GitHub organization.

## About team members

These endpoints are only available to authenticated members of the team's [organization](/rest/orgs). OAuth access tokens require the `read:org` [scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps). GitHub generates the team's `slug` from the team `name`.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API to make changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)."

</div>
