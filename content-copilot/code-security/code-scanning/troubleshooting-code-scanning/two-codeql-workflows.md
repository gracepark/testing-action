# Two CodeQL workflows

If you see two workflows named "CodeQL", one workflow may be a pre-existing CodeQL workflow file which has been disabled by default setup.

Default setup overrides existing CodeQL setups by disabling any existing CodeQL workflows, and blocking any CodeQL analysis API uploads. This behavior stops you using GitHub Actions minutes to run workflows for CodeQL advanced setup when only the results from default setup will be used. For more information about switching between advanced and default setups, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/results-are-different-than-expected)."

Optionally, if you are certain you no longer need the pre-existing workflow file, you can delete the file from your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/deleting-files-in-a-repository)."

In some cases, your repository may use multiple code scanning configurations. These configurations can generate duplicate alerts. Additionally, stale configurations that no longer run will display outdated alert statuses, and the stale alerts will stay open indefinitely. To avoid outdated alerts, you should remove stale code scanning configurations from a branch. For more information on multiple configurations and deleting stale configurations, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alerts-from-multiple-configurations)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#removing-stale-configurations-and-alerts-from-a-branch)."
