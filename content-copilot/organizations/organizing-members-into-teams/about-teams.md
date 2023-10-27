# About teams

Teams are groups of organization members that reflect your company or group's structure with cascading access permissions and mentions.

## About teams

You can use teams to manage access for people in an organization, and for sending notifications. Organization owners and team maintainers can give teams admin, read, or write access to organization repositories. Organization members can send a notification to an entire team by mentioning the team's name.

Organization members can also send a notification to an entire team by requesting a review from that team. Organization members can request reviews from specific teams with read access to the repository where the pull request is opened. Teams can be designated as owners of certain types or areas of code in a CODEOWNERS file.

For more information, see:
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)"
- "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams)"
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)"

Organizations that use GitHub Enterprise Cloud can use team synchronization to automatically add and remove organization members to teams through an identity provider. For more information, see "[Synchronizing a team with an identity provider group](/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)" in the GitHub Enterprise Cloud documentation.

## Team visibility

Teams can be visible or secret:

- Visible teams can be [viewed and @mentioned](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) by every organization member.
- Secret teams are only visible to the people on the team and people with owner permissions. They're great for hiding teams with sensitive names or members, such as those used for working with external partners or clients. Secret teams cannot be nested under parent teams or have child teams.

People who are not members of the organization cannot view any teams.

You can view all the teams you belong to on your personal dashboard. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams)."

## Team pages

Each team has its own page within an organization. On a team's page, you can view team members, child teams, and the team's repositories. Organization owners and team maintainers can access team settings and update the team's description and profile picture from the team's page.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Team Discussions are now deprecated and this REST API endpoint will be removed from GitHub.com on 2023-07-05. You can read more about this deprecation on the [GitHub Blog](https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/).

You can use GitHub Discussions to create organization-level discussions. For more information about GitHub Discussions, see "[AUTOTITLE](/discussions)."

</div>

## Nested teams

You can reflect your group or company's hierarchy within your GitHub organization with multiple levels of nested teams. A parent team can have multiple child teams, while each child team only has one parent team. You cannot nest secret teams.

Child teams inherit the parent's access permissions, simplifying permissions management for large groups. Members of child teams also receive notifications when the parent team is @mentioned, simplifying communication with multiple groups of people.

For example, if your team structure is Employees > Engineering > Application Engineering > Identity, granting Engineering write access to a repository means Application Engineering and Identity also get that access. If you @mention the Identity Team or any team at the bottom of the organization hierarchy, they're the only ones who will receive a notification.

To easily understand who shares a parent team's permissions and mentions, you can see all of the members of a parent team's child teams on the Members tab of the parent team's page. Members of a child team are not direct members of the parent team.

You can choose a parent when you create the team, or you can move a team in your organization's hierarchy later. For more information see, "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)."

## Preparing to nest teams in your organization

If your organization already has existing teams, you should audit each team's repository access permissions before you nest teams above or below it. You should also consider the new structure you'd like to implement for your organization.

At the top of the team hierarchy, you should give parent teams repository access permissions that are safe for every member of the parent team and its child teams. As you move toward the bottom of the hierarchy, you can grant child teams additional, more granular access to more sensitive repositories.

1. Remove all members from existing teams
1. Audit and adjust each team's repository access permissions and give each team a parent
1. Create any new teams you'd like to, choose a parent for each new team, and give them repository access
1. Add people directly to teams

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)"
