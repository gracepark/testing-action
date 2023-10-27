# User interactions

Use the REST API to temporarily restrict which type of user can comment, open issues, or create pull requests in your public repositories.

## About user interactions

You can use the REST API to temporarily restrict which type of user can comment, open issues, or create pull requests on your public repositories. When restrictions are enabled, only the specified type of GitHub user will be able to participate in interactions. Restrictions automatically expire after a defined duration. Here's more about the types of GitHub users:

- **Existing users:** When you limit interactions to `existing_users`, new users with accounts less than 24 hours old who have not previously contributed and are not collaborators will be temporarily restricted from interacting with your repositories.
- **Contributors only:** When you limit interactions to `contributors_only`,  users who have not previously contributed and are not collaborators will be temporarily restricted from interacting with your repositories.
- **Collaborators only:** When you limit interactions to `collaborators_only`, users who are not collaborators will be temporarily restricted from interacting with your repositories.

Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user. To set different interaction limits for individual repositories owned by the user, use the [Repository](/rest/interactions/repos) interactions endpoints instead.
