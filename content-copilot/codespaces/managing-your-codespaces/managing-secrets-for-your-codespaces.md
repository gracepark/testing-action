# Managing secrets for your codespaces

You can store sensitive information, like tokens, that you want to access in your codespaces via environment variables.

## About secrets for GitHub Codespaces

You can add secrets to your personal account that you want to use in your codespaces. For example, you may want to store and access the following sensitive information as secrets:

- Access tokens to cloud services
- Service principals
- Subscription identifiers
- Credentials for a private image registry (for more information, see "[AUTOTITLE](/codespaces/reference/allowing-your-codespace-to-access-a-private-registry)")

You can choose which repositories should have access to each secret. Then, you can use the secret in any codespace you create for a repository that has access to the secret. To share a secret with a codespace created from a template, you will need to publish the codespace to a repository on GitHub, then give that repository access to the secret.

Once you have created a secret, it will be available when you create a new codespace or restart the codespace. If you've created a secret on GitHub.com and you want to use it in a currently running codespace, stop the codespace and then restart it. For information about stopping the codespace, see "[AUTOTITLE](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace)."

### Naming secrets

The following rules apply to secret names:

- Secret names can only contain alphanumeric characters (`[a-z]`, `[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed.
- Secret names must not start with the `GITHUB_` prefix.
- Secret names must not start with a number.
- Secret names are not case-sensitive.
- Secret names must be unique at the level they are created at. For example, a secret created at the repository level must have a unique name in that repository.

If a secret with the same name exists at multiple levels, the secret at the lowest level takes precedence. For example, if an organization-level secret has the same name as a repository-level secret, then the repository-level secret takes precedence.

### Limits for secrets

You can store up to 100 secrets for GitHub Codespaces.

Secrets are limited to 48 KB in size.

## Adding a secret

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. To the right of "Codespaces secrets", click **New secret**.
1. Under "Name," type a name for your secret.
1. Under "Value", type the value of your secret.
1. Select the "Repository access" drop-down menu, then click a repository you want to have access to the secret. Repeat for every repository you want to have access to the secret.

   ![Screenshot of the "Repository access" dropdown menu. Two repositories are listed in the dropdown menu.](/assets/images/help/codespaces/select-repository-access.png)
1. Click **Add secret**.

## Editing a secret

You can update the value of an existing secret, and you can change which repositories can access a secret.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. Under "Codespaces secrets," to the right of the secret you want to edit, click **Update**.
1. Under "Value," click the link "**enter a new value**."

   ![Screenshot of the "Codespaces / Update secret" page. The "enter a new value" link is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-secret-update-value-text.png)

1. Under "Value", type the value of your secret.
1. Select the "Repository access" drop-down menu, then click a repository you want to have access to the secret. Repeat for every repository you want to have access to the secret.

   ![Screenshot of the "Repository access" dropdown menu. Two repositories are listed in the dropdown menu.](/assets/images/help/codespaces/select-repository-access.png)
1. Optionally, to remove the secret's access to a repository, deselect the repository.

   ![Screenshot showing a list of two repositories. Each has a selected checkbox.](/assets/images/help/codespaces/codespaces-secret-repository-checkboxes.png)

1. Click **Save changes**.

## Deleting a secret

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Codespaces**.
1. Under "Codespaces secrets," to the right of the secret you want to delete, click **Delete**.
1. Read the warning, then click **OK**.

## Using secrets

A secret is exported as an environment variable into the user's terminal session.

![Screenshot of the Terminal in VS Code. The command "echo $EXAMPLE_API_KEY" has returned "aBCdeFG1234567."](/assets/images/help/codespaces/exported-codespace-secret.png)

You can use secrets in a codespace after the codespace is built and is running. For example, a secret can be used:

- When launching an application from the integrated terminal or ssh session.
- Within a dev container lifecycle script that is run after the codespace is running. For more information about dev container lifecycle scripts, see the documentation on the Development Containers website: [Specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Codespace secrets cannot be used:

- During codespace build time (that is, within a Dockerfile or custom entry point).
- Within a dev container feature. For more information, see the `features` property in the [dev containers specification](https://containers.dev/implementors/json_reference/#general-properties) on the Development Containers website.

## Further reading

- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces)"
- "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#recommended-secrets)"
