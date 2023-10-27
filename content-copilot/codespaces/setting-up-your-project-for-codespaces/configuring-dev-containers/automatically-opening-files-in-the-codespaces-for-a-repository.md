# Automatically opening files in the codespaces for a repository

You can set particular files to be opened automatically whenever someone creates a codespace for your repository and opens the codespace in the Visual Studio Code web client.

**Who can use this feature**: People with write permissions to a repository can create or edit the codespace configuration.

## Overview

If there's a particular file that's useful for people to see when they create a codespace for your repository, you can set this file to be opened automatically in the VS Code web client. You set this up in the dev container configuration file for your repository.

The file, or files, you specify are only opened the first time a codespace is opened in the web client. If the person closes the specified files, those files are not automatically reopened the next time that person opens or restarts the codespace.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: This automation only applies to the VS Code web client, not to the VS Code desktop application, or other supported editors.

</div>

## Setting files to be opened automatically

1. You can configure the codespaces that are created for your repository by adding settings to a `devcontainer.json` file. If your repository doesn't already contain a `devcontainer.json` file, you can add one now. See "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."
1. Edit the `devcontainer.json` file, adding a `customizations.codespaces.openFiles` property. The `customizations` property resides at the top level of the file, within the enclosing JSON object. For example:

   ```json copy
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   The value of the `openFiles` property is an array of one or more files in your repository. The paths are relative to the root of the repository (absolute paths are not supported). The files are opened in the web client in the order specified, with the first file in the array displayed in the editor.

1. Save the file and commit your changes to the required branch of the repository.

## Further reading

- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)"
