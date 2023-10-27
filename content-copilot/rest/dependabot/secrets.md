# Dependabot secrets

Use the REST API to manage Dependabot secrets for an organization or repository.

## About Dependabot secrets

You can create, update, delete, and retrieve information about encrypted secrets using the REST API. Secrets allow you to store sensitive information, such as access tokens, in your repository, repository environments, or organization. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)."

These endpoints are available for authenticated users, OAuth apps, and GitHub Apps. Access tokens require [`repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) for private repositories and [`public_repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) for public repositories. GitHub Apps must have the `dependabot_secrets` permission to use these endpoints. Authenticated users must have collaborator access to a repository to create, update, or read secrets.
