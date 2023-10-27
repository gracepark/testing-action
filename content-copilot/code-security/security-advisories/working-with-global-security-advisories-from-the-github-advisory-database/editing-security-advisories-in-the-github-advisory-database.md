# Editing security advisories in the GitHub Advisory Database

You can submit improvements to any advisory published in the GitHub Advisory Database.

## Editing advisories in the GitHub Advisory Database

The advisories in the GitHub Advisory Database are global security advisories. For more information about global security advisories, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-global-security-advisories)."

Anyone can suggest improvements on any global security advisory in the GitHub Advisory Database. You can edit or add any detail, including additionally affected ecosystems, severity level or description of who is impacted. The GitHub Security Lab curation team will review the submitted improvements and publish them onto the GitHub Advisory Database if accepted.

Only repository owners and administrators can edit repository-level security advisories. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory)."

1. Navigate to https://github.com/advisories.
1. Select the security advisory you would like to contribute to.
1. On the right-hand side of the page, click the **Suggest improvements for this vulnerability** link.
1. In the "Improve security advisory" form, make the desired improvements. You can edit or add any detail. For information about correctly specifying information on the form, including affected versions, see "[AUTOTITLE](/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/best-practices-for-writing-repository-security-advisories)."
1. When you finish editing the advisory, click **Submit improvements**.
1. Once you submit your improvements, a pull request containing your changes will be created for review in [github/advisory-database](https://github.com/github/advisory-database) by the GitHub Security Lab curation team. If the advisory originated from a GitHub repository, we will also tag the original publisher for optional commentary. You can view the pull request and get notifications when it is updated or closed.

You can also open a pull request directly on an advisory file in the [github/advisory-database](https://github.com/github/advisory-database) repository. For more information, see the [contribution guidelines](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md).
