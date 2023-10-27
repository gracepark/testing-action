# Customizing dependency updates

You can customize how Dependabot maintains your dependencies.

**Who can use this feature**: People with write permissions to a repository can configure Dependabot for the repository.

## About customizing dependency updates

After you've enabled version updates, you can customize how Dependabot maintains your dependencies by adding further options to the `dependabot.yml` file. For example, you could:

- Specify which day of the week to open pull requests for version updates: `schedule.day`
- Set reviewers, assignees, and labels for each package manager: `reviewers`, `assignees`, and `labels`
- Define a versioning strategy for changes to each manifest file: `versioning-strategy`
- Change the maximum number of open pull requests for version updates from the default of 5: `open-pull-requests-limit`
- Open pull requests for version updates to target a specific branch, instead of the default branch: `target-branch`

For more information about the configuration options, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)."

When you update the `dependabot.yml` file in your repository, Dependabot runs an immediate check with the new configuration. Within minutes you will see an updated list of dependencies on the **Dependabot** tab, this may take longer if the repository has many dependencies. You may also see new pull requests for version updates. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/listing-dependencies-configured-for-version-updates)."

## Impact of configuration changes on security updates

If you customize the `dependabot.yml` file, you may notice some changes to the pull requests raised for security updates. These pull requests are always triggered by a security advisory for a dependency, rather than by the Dependabot schedule. However, they inherit relevant configuration settings from the `dependabot.yml` file unless you specify a different target branch for version updates.

For an example, see "[Setting custom labels](#setting-custom-labels)" below.

## Modifying scheduling

When you set a `daily` update schedule, by default, Dependabot checks for new versions at 05:00 UTC. You can use `schedule.time` to specify an alternative time of day to check for updates (format: `hh:mm`).

The example `dependabot.yml` file below expands the npm configuration to specify when Dependabot should check for version updates to dependencies.

```yaml
# `dependabot.yml` file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## Setting reviewers and assignees

By default, Dependabot raises pull requests without any reviewers or assignees.

You can use `reviewers` and `assignees`  to specify reviewers and assignees for all pull requests raised for a package manager. When you specify a team, you must use the full team name, as if you were @mentioning the team (including the organization).

The example `dependabot.yml` file below changes the npm configuration so that all pull requests opened with version and security updates for npm will have two reviewers and one assignee.

```yaml
# `dependabot.yml` file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## Setting custom labels

By default, Dependabot raises all pull requests with the `dependencies` label. If more than one package manager is defined, Dependabot includes an additional label on each pull request. This indicates which language or ecosystem the pull request will update, for example: `java` for Gradle updates and `submodules` for git submodule updates. Dependabot creates these default labels automatically, as necessary in your repository.

You can use `labels` to override the default labels and specify alternative labels for all pull requests raised for a package manager. You can't create new labels in the `dependabot.yml` file, so the alternative labels must already exist in the repository.

The example `dependabot.yml` file below changes the npm configuration so that all pull requests opened with version and security updates for npm will have custom labels. It also changes the Docker configuration to check for version updates against a custom branch and to raise pull requests with custom labels against that custom branch. The changes to Docker will not affect security update pull requests because security updates are always made against the default branch.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The new `target-branch` must contain a Dockerfile to update, otherwise this change will have the effect of disabling version updates for Docker.

</div>

```yaml
# `dependabot.yml` file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## Ignoring specific dependencies for Dependabot version updates

If you are not ready to adopt changes from dependencies in your project, you can configure Dependabot to ignore those dependencies when it opens pull requests for version updates. You can do this using one of the following methods.

- Configure the `ignore` option for the dependency in your `dependabot.yml` file. You can use this to ignore updates for specific dependencies, versions, and types of updates. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)."
- Use `@dependabot ignore` comment commands on a Dependabot pull request for version updates. You can use comment commands to ignore updates for specific dependencies and versions. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

If you would like to un-ignore a dependency or ignore condition, you can delete the ignore conditions from the `dependabot.yml` file or reopen the pull request.

## More examples

For more examples, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)."
