# Securing your organization

You can use a number of GitHub features to help keep your organization secure.

**Who can use this feature**: Organization owners and security managers can manage security features for an organization.

## Introduction

As an organization owner or security manager, you can use GitHub's security features to keep your organization's code, dependencies, and secrets secure. For more information, see "[AUTOTITLE](/code-security/getting-started/github-security-features)."

Your organization's security needs are unique. You may want to enable a feature if your organization has been impacted by a vulnerability that a certain feature would have prevented, or if the feature will help your organization meet a compliance requirement.

You can enable security features across multiple repositories in an organization at the same time. For each feature you want to enable, you must decide how to roll out the feature across your organization's repositories. Different features have different effects on your organization and its contributors, so it's important to assess the impact each feature will have. For example:

- Some features can generate notifications to inform your organization's members about specific vulnerabilities: to ensure these notifications are targeted and relevant, you may want to ask members to check their notification settings before you enable a feature. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)."
- Some features can consume resources for each repository in which they're enabled. For example, enabling code scanning in a private repository may consume a GitHub Advanced Security license, and running code scanning analysis in a repository will incur usage of GitHub Actions or another CI system.

As an organization owner, you can give certain users permission to enable or disable security features by assigning the "security manager" role to a team. Security managers can configure security settings and monitor usage of security features across your organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

## About prerequisites of features

Some security features have prerequisites. For example, Dependabot alerts use information from the dependency graph, so enabling Dependabot alerts automatically enables the dependency graph.

Some features are enabled by default in public repositories. In private repositories, some features are only available to enterprises that use GitHub Advanced Security and have enabled Advanced Security as a feature for repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security#about-advanced-security-features)."

There are some features you must configure for each repository individually. For example, to enable Dependabot version updates in a repository, you must add a `dependabot.yml` file specifying where to find information about the project's dependencies. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

## Enabling security features in your organization

When you have decided to enable a security feature, the next step is to decide how to roll out that feature across your organization.

- If you want to roll out a feature as quickly as possible, you can enable it for all eligible repositories at once. For more information, see "[Enabling a feature for all repositories](#enabling-a-feature-for-all-repositories)."
- If you want control over how quickly you roll out a feature, and which features are enabled in which repositories, you can enable a feature for a selection of repositories. For more information, see "[Enabling a feature for a selection of repositories](#enabling-a-feature-for-a-selection-of-repositories)."

When you have decided how to enable a feature for your organization's existing repositories, you must also decide how to handle any new repositories that are created in your organization in the future. For more information, see "[Enabling a feature for new repositories](#enabling-a-feature-for-future-repositories)."

### Enabling a feature for all repositories

The quickest way to roll out a security feature is to enable it for all repositories in your organization at once. If you've identified a critical need for a feature, enabling it for all repositories offers you protection across your entire organization, without requiring you to pause to devise a rollout plan.

Before you enable a feature for all repositories, you should consider the impact this action will have. If you're not sure about the effects a feature will have, it is safest to start by enabling the feature for a limited selection of repositories. Enabling a feature for all repositories at once is likely to be a suitable option in the following situations.

- You have an overview of all the repositories in your organization, and you're confident that they'll all benefit from a certain feature.
- If a feature requires resources such as GitHub Advanced Security licenses or GitHub Actions minutes, you have assessed the resources that will be required and are happy to proceed.
- If the feature generates notifications or pull requests, you're confident that these will be targeted and relevant for the members who receive them or have to review them.

When you're ready to proceed, follow these steps to enable a feature for all repositories.

1. On GitHub.com, navigate to the main page of the organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings.png)

1. In the left sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codescan" aria-hidden="true"><path d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z"></path><path d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z"></path></svg> **Code security and analysis**.
1. To enable a feature in all repositories in your organization where the feature is supported, next to the name of the feature, click **Enable all**.

When you click **Enable all**, you'll be prompted to confirm your choice. You'll also be told if the feature depends on another feature, or requires GitHub Advanced Security. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)."

### Enabling a feature for a selection of repositories

In some cases, it is better to identify a selection of repositories that require a feature, then enable the feature just for those repositories.

If you're not sure about the impact a feature will have, you may want to test the feature on a limited selection of repositories before you commit to enabling the feature for all repositories, or you may want to roll out the feature gradually over several phases. You may also be aware that some repositories in your organization require a different set of features than others.

When you have identified the repositories that require a feature, you can enable the feature for each repository individually. As an organization owner or security manager, you can configure the security settings for each repository in your organization. For more information, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."

For organizations on GitHub Enterprise Cloud, you can use the "Security coverage" view to identify repositories that require a feature, then enable that feature for those repositories. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/code-security/security-overview/enabling-security-features-for-multiple-repositories)" in the GitHub Enterprise Cloud documentation.

### Enabling a feature for new repositories

You can choose to enable a security feature automatically in all new repositories that are created in your organization. Enabling features in new repositories ensures they are protected immediately, and ensures any vulnerabilities in the repositories are identified as early as possible. However, to use security features as efficiently as possible, you may prefer to review each new repository individually.

1. On GitHub.com, navigate to the main page of the organization.
1. Under your organization name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings.png)

1. In the left sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codescan" aria-hidden="true"><path d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z"></path><path d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z"></path></svg> **Code security and analysis**.
1. Below the name of the feature, select the option for automatically enabling the feature in applicable future repositories.

   ![Screenshot of the "Code security and analysis" page. Below "Dependabot alerts", a checkbox for enabling the feature in future repositories is highlighted with an orange outline.](/assets/images/help/security/enable-for-new-repos.png)

## Monitoring the impact of security features

When you have enabled a feature, you should communicate with repository administrators and contributors in your organization to assess the impact of the feature. You may need to adjust the configuration of some features at the repository level, or reassess the distribution of security features across your organization. You should also monitor the security alerts that a feature generates, and your members' responses to these alerts.

Organizations that use GitHub Enterprise Cloud can use security overview to see which teams and repositories are affected by security alerts, with a breakdown of alerts by severity. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/code-security/security-overview/assessing-code-security-risk)" in the GitHub Enterprise Cloud documentation.

You can use various tools to monitor the actions that your organization's members are taking in response to security alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)".

## Next steps

To help users report security vulnerabilities, you can create a default security policy that will display in any of your organization's public repositories that do not have their own security policy. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."
