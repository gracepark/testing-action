# Keeping your actions up to date with Dependabot

You can use Dependabot to keep the actions you use updated to the latest versions.

## About Dependabot version updates for actions

Actions are often updated with bug fixes and new features to make automated processes more reliable, faster, and safer. When you enable Dependabot version updates for GitHub Actions, Dependabot will help ensure that references to actions in a repository's _workflow.yml_ file are kept up to date.

For each action in the file, Dependabot checks the action's reference (typically a version number or commit identifier associated with the action) against the latest version. For information about how action creators version their actions, see "[Using release management for your custom actions](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)."

If a more recent version of the action is available, Dependabot will send you a pull request that updates the reference in the workflow file to the latest version. For more information about Dependabot version updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)." For more information about configuring workflows for GitHub Actions, see "[AUTOTITLE](/actions/learn-github-actions)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:**  Workflow runs triggered by Dependabot pull requests run as if they are from a forked repository, and therefore use a read-only `GITHUB_TOKEN`. These workflow runs cannot access any secrets. For information about strategies to keep these workflows secure, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions)."

</div>

## Enabling Dependabot version updates for actions

You can configure Dependabot version updates to maintain your actions as well as the libraries and packages you depend on.

1. If you have already enabled Dependabot version updates for other ecosystems or package managers, simply open the existing `dependabot.yml` file. Otherwise, create a `dependabot.yml` configuration file in the `.github` directory of your repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)."
1. Specify `"github-actions"` as a `package-ecosystem` to monitor.
1. Set the `directory` to `"/"` to check for workflow files in `.github/workflows`.
1. Set a `schedule.interval` to specify how often to check for new versions.
1. Check the `dependabot.yml` configuration file in to the `.github` directory of the repository. If you have edited an existing file, save your changes.

You can also enable Dependabot version updates on forks. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-version-updates-on-forks)."

### Example `dependabot.yml` file for GitHub Actions

The example `dependabot.yml` file below configures version updates for GitHub Actions. The `directory` must be set to `"/"` to check for workflow files in `.github/workflows`. The `schedule.interval` is set to `"weekly"`. After this file has been checked in or updated, Dependabot checks for new versions of your actions. Dependabot will raise pull requests for version updates for any outdated actions that it finds. After the initial version updates, Dependabot will continue to check for outdated versions of actions once a week.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Configuring Dependabot version updates for actions

When enabling Dependabot version updates for actions, you must specify values for `package-ecosystem`, `directory`, and `schedule.interval`. There are many more optional properties that you can set to further customize your version updates. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)."

## Further reading

- "[AUTOTITLE](/actions/learn-github-actions)"
