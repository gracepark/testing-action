# Default environment variables for your codespace

GitHub sets default environment variables for each codespace.

## About default environment variables

GitHub sets default environment variables for every codespace. Commands run in codespaces can create, read, and modify environment variables.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Environment variables are case-sensitive.

</div>

## List of default environment variables

| Environment variable | Description |
| ---------------------|------------ |
| `CODESPACE_NAME` | The name of the codespace For example, `octocat-literate-space-parakeet-mld5` |
| `CODESPACES` | Always `true` while in a codespace |
| `GIT_COMMITTER_EMAIL` | The email for the "author" field of future `git` commits. |
| `GIT_COMMITTER_NAME` | The name for the "committer" field of future `git` commits. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| Returns the domain of the GitHub Codespaces forwarded port. For example, `app.github.dev`. |
| `GITHUB_API_URL` | Returns the API URL. For example, `https://api.github.com`. |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example, `https://api.github.com/graphql`. |
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Returns the URL of the GitHub server. For example, `https://github.com`. |
| `GITHUB_TOKEN` | A signed auth token representing the user in the codespace. You can use this to make authenticated calls to the GitHub API. For more information, see "[AUTOTITLE](/codespaces/reference/security-in-github-codespaces#authentication)."  |
| `GITHUB_USER` | The name of the user that initiated the codespace. For example, `octocat`. |
