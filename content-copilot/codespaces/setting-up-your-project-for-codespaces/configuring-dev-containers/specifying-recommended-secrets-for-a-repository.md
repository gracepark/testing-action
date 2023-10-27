# Specifying recommended secrets for a repository

You can add a setting to your dev container configuration that will prompt people to set specific secrets when they create a codespace.

**Who can use this feature**: People with write permissions to a repository can create or edit the codespace configuration.

## About recommended secrets

If a project needs user-specific secrets to be set up, you can prompt people to do this when they create a codespace. You do this by adding a setting to a dev container configuration file for the repository.

After you specify recommended secrets, if people have not already created those secrets in their personal settings for Codespaces, they will be prompted to do so when they use the advanced options method of creating a codespace. This is done on GitHub.com by clicking the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code** button, then clicking the **Codespaces** tab, then selecting <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Codespace repository configuration" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> and clicking **New with options**.

![Screenshot of the options dropdown in the "Codespaces" tab, with the option "New with options" highlighted.](/assets/images/help/codespaces/default-machine-type.png)

Recommended secrets are listed at the bottom of the page.

<img src="/assets/images/help/codespaces/recommended-secrets.png" style="max-height:50rem"  alt='Screenshot of the "Create codespace" page with four recommended secrets highlighted with a dark orange outline.' />

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: The names of the recommended secrets are only listed on this page when the container configuration on the selected branch specifies these secrets.

</div>

Each recommended secret is displayed in one of three ways:

- If the person has not set the recommended secret in their Codespaces settings, an input box is displayed, allowing them to create the secret now. A description and link to more information are displayed if you have configured them. Entering a value is optional.
- If the person has already created the recommended secret but has not associated it with this repository, they can select a checkbox to add this association. Doing so is optional.
- If the person has already created the recommended secret and associated it with this repository, a preselected checkbox is displayed.

### When to specify recommended secrets for a project

You should use recommended secrets for secrets that the user who creates the codespace, rather than the owner of the repository or organization, must provide. For example, if you have a public project, and users must provide a personal API key to run the application in your project, you can specify a recommended secret so that users will be prompted to provide the key as the value of the secret when they use the advanced options page to create a codespace.

Alternatively, for secrets that the owner of the repository or organization can provide, such as API keys shared across a team, you can set secrets at the level of the repository or organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces)."

## Specifying recommended secrets in the dev container configuration

1. You can configure the codespaces that are created for your repository by adding settings to a `devcontainer.json` file. If your repository doesn't already contain a `devcontainer.json` file, you can add one now. See "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."
1. Edit the `devcontainer.json` file, adding the `secrets` property at the top level of the file, within the enclosing JSON object. For example:

   ```json copy
   "secrets": {
     "NAME_OF_SECRET_1": {
       "description": "This is the description of the secret.",
       "documentationUrl": "https://example.com/link/to/info"
     },
     "NAME_OF_SECRET_2": { }
   }
   ```

1. Add a property within `secrets` for each secret you want to recommend.  For example, change `NAME_OF_SECRET_1` and `NAME_OF_SECRET_2`, in the previous code example, to the names of the secrets that people should create in their personal settings for Codespaces.
1. Optionally, supply a description for each secret and a URL for more information about this secret.

   You can omit `description` and `documentationUrl`, as shown by `NAME_OF_SECRET_2` in the previous code example.

1. Specify additional secrets, as required.
1. Save the file and commit your changes to the required branch of the repository.

## Further reading

- "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository?tool=webui#creating-a-codespace-for-a-repository)"
