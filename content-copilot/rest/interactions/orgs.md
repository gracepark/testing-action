# Organization interactions

Use the REST API to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization's public repositories.

## About organization interactions

Organization owners can temporarily restrict which type of user can comment, open issues, or create pull requests in the organization's public repositories. When restrictions are enabled, only the specified type of GitHub user will be able to participate in interactions. Restrictions automatically expire after a defined duration. Here's more about the types of GitHub users:

- **Existing users:** When you limit interactions to `existing_users`, new users with accounts less than 24 hours old who have not previously contributed and are not collaborators will be temporarily restricted in the organization.
- **Contributors only:** When you limit interactions to `contributors_only`,  users who have not previously contributed and are not collaborators will be temporarily restricted in the organization.
- **Collaborators only:** When you limit interactions to `collaborators_only`, users who are not collaborators will be temporarily restricted in the organization.

Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization. To set different interaction limits for individual repositories owned by the organization, use the [Repository](/rest/interactions/repos) interactions endpoints instead.
