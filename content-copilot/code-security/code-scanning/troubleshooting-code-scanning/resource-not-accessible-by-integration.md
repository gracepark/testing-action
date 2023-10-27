# Error: 403 "Resource not accessible by integration"

This error may be seen on pull requests created by Dependabot and can be resolved in a couple of different ways.

You may see `Error: 403 "Resource not accessible by integration"` when using Dependabot.

Dependabot is considered untrusted when it triggers a workflow run, and the workflow will run with read-only scopes. Uploading code scanning results for a branch usually requires the `security_events: write` scope. However, code scanning always allows the uploading of results when the `pull_request` event triggers the action run. This is why, for Dependabot branches, we recommend you use the `pull_request` event instead of the `push` event.

A simple approach is to run on pushes to the default branch and any other important long-running branches, as well as pull requests opened against this set of branches:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

An alternative approach is to run on all pushes except for Dependabot branches:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

## Analysis still failing on the default branch

If the CodeQL analysis workflow still fails on a commit made on the default branch, you need to check:

- whether Dependabot authored the commit
- whether the pull request that includes the commit has been merged using `@dependabot squash and merge`

This type of merge commit is authored by Dependabot and therefore, any workflows running on the commit will have read-only permissions. If you enabled code scanning and Dependabot security updates or version updates on your repository, we recommend you avoid using the Dependabot `@dependabot squash and merge` command. Instead, you can enable auto-merge for your repository. This means that pull requests will be automatically merged when all required reviews are met and status checks have passed. For more information about enabling auto-merge, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)."
