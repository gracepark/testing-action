# Repository interactions

Use the REST API to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository.

**Who can use this feature**: People with owner or admin access to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository.

## About repository interactions

People with owner or admin access can use the REST API to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository. When restrictions are enabled, only the specified type of GitHub user will be able to participate in interactions. Restrictions automatically expire after a defined duration. Here's more about the types of GitHub users:

- **Existing users:** When you limit interactions to `existing_users`, new users with accounts less than 24 hours old who have not previously contributed and are not collaborators will be temporarily restricted in the repository.
- **Contributors only:** When you limit interactions to `contributors_only`,  users who have not previously contributed and are not collaborators will be temporarily restricted in the repository.
- **Collaborators only:** When you limit interactions to `collaborators_only`, users who are not collaborators will be temporarily restricted in the repository.

If an interaction limit is enabled for the user or organization that owns the repository, the limit cannot be changed for the individual repository. Instead, use the [User](/rest/interactions/user) or [Organization](/rest/interactions/orgs) interactions endpoints to change the interaction limit.
