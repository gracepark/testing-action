# About Dependabot security updates

Dependabot can fix vulnerable dependencies for you by raising pull requests with security updates.

Dependabot security updates are free to use for all repositories on GitHub.com.

## About Dependabot security updates

Dependabot security updates make it easier for you to fix vulnerable dependencies in your repository. If you enable this feature, when a Dependabot alert is raised for a vulnerable dependency in the dependency graph of your repository, Dependabot automatically tries to fix it. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)" and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."

GitHub may send  Dependabot alerts to repositories affected by a vulnerability disclosed by a recently published GitHub security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/browsing-security-advisories-in-the-github-advisory-database)."

Dependabot checks whether it's possible to upgrade the vulnerable dependency to a fixed version without disrupting the dependency graph for the repository. Then Dependabot raises a pull request to update the dependency to the minimum version that includes the patch and links the pull request to the Dependabot alert, or reports an error on the alert. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors)."

The Dependabot security updates feature is available for repositories where you have enabled the dependency graph and Dependabot alerts. You will see a Dependabot alert for every vulnerable dependency identified in your full dependency graph. However, security updates are triggered only for dependencies that are specified in a manifest or lock file. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#dependencies-included)."

You can enable a related feature, Dependabot version updates, so that Dependabot raises pull requests to update the manifest to the latest version of the dependency, whenever it detects an outdated dependency. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

When Dependabot raises pull requests, these pull requests could be for _security_ or _version_ updates:

- _Dependabot security updates_ are automated pull requests that help you update dependencies with known vulnerabilities.
- _Dependabot version updates_ are automated pull requests that keep your dependencies updated, even when they don’t have any vulnerabilities. To check the status of version updates, navigate to the Insights tab of your repository, then Dependency Graph, and Dependabot.

GitHub Actions is not required for Dependabot version updates and Dependabot security updates to run on GitHub. However, pull requests opened by Dependabot can trigger workflows that run actions. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)."

## About pull requests for security updates

Each pull request contains everything you need to quickly and safely review and merge a proposed fix into your project. This includes information about the vulnerability like release notes, changelog entries, and commit details. Details of which vulnerability a pull request resolves are hidden from anyone who does not have access to Dependabot alerts for the repository.

When you merge a pull request that contains a security update, the corresponding Dependabot alert is marked as resolved for your repository. For more information about Dependabot pull requests, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** It's good practice to have automated tests and acceptance processes in place so that checks are carried out before the pull request is merged. This is particularly important if the suggested version to upgrade to contains additional functionality, or a change that breaks your project's code. For more information about continuous integration, see "[AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration)."

</div>

## About compatibility scores

Dependabot security updates may include compatibility scores to let you know whether updating a dependency could cause breaking changes to your project. These are calculated from CI tests in other public repositories where the same security update has been generated. An update's compatibility score is the percentage of CI runs that passed when updating between specific versions of the dependency.

## About notifications for Dependabot security updates

You can filter your notifications on GitHub to show Dependabot security updates. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#dependabot-custom-filters)."
