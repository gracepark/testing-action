# Listing the codespaces in your organization

You can list all of the currently active or stopped codespaces for your organization.

**Who can use this feature**: To list all of the current codespaces for your organization, you must be an organization owner.
Organizations on GitHub Team and GitHub Enterprise plans can pay for members' and collaborators' use of GitHub Codespaces. These organizations can then access settings and policies to manage codespaces paid for by the organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization#about-ownership-of-codespaces)" and "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Overview

As an organization owner, you can list all of the currently active and stopped codespaces for your organization. You might want to do this to check how many codespaces users are creating, to make sure they aren't incurring unnecessary costs. For information about pricing, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

The easiest way to list the codespaces for an organization is by using GitHub CLI. You can also use the REST API, which provides more information about each codespace.

For information on how to see the current total Codespaces usage for your organization or enterprise, and generate a detailed report, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

### Using GitHub CLI to list codespaces

To list all of the current codespaces for a specified organization, use the following command.

```shell copy
gh codespace list --org ORGANIZATION
```

This command returns a list that includes the following information for each codespace:
- The name and display name
- The user who created the codespace
- The repository and branch
- The current state of the codespace

To list all of the current codespaces for an organization that were created by a specific user, use the following command.

```shell copy
gh codespace list --org ORGANIZATION --user USER
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: In the above commands, replace `ORGANIZATION` with the name of the organization you are querying. You must be an owner of the organization.

</div>

### Using the REST API to list codespaces

You can use the `/orgs/{org}/codespaces` API endpoint as an alternative method of listing the current codespaces for an organization. This returns more information than GitHub CLI; for example, the machine type details.

For more information about this endpoint, see "[AUTOTITLE](/rest/codespaces/organizations#list-codespaces-for-the-organization)."
