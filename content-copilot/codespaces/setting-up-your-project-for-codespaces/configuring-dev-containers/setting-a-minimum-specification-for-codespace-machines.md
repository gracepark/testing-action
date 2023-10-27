# Setting a minimum specification for codespace machines

You can avoid under-resourced machine types being used for GitHub Codespaces for your repository.

**Who can use this feature**: People with write permissions to a repository can create or edit the codespace configuration.

## Overview

Each codespace that you create is hosted on a separate virtual machine. When you create a codespace from a repository, you can usually choose from different types of virtual machines. Each machine type has different resources (processor cores, memory, storage) and, by default, the machine type with the least resources is used. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."

If your project needs a certain level of compute power, you can configure GitHub Codespaces so that only machine types that meet these requirements can be used by default, or selected by users. You configure this in a `devcontainer.json` file.

Unpublished codespaces (codespaces created from a template that are not linked to a repository on GitHub) always run on a virtual machine with the same specifications. You can't change the machine type of an unpublished codespace.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Important:** Access to some machine types may be restricted at the organization level. Typically this is done to prevent people choosing higher resourced machines that are billed at a higher rate. If your repository is affected by an organization-level policy for machine types you should make sure you don't set a minimum specification that would leave no available machine types for people to choose. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

</div>

## Setting a minimum machine specification

1. You can configure the codespaces that are created for your repository by adding settings to a `devcontainer.json` file. If your repository doesn't already contain a `devcontainer.json` file, you can add one now. See "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."
1. Edit the `devcontainer.json` file, adding the `hostRequirements` property at the top level of the file, within the enclosing JSON object. For example:

   ```json copy
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb"
   }
   ```

   You can specify any or all of the options: `cpus`, `memory`, and `storage`.

   To check the specifications of the GitHub Codespaces machine types that are currently available for your repository, step through the process of creating a codespace until you see the choice of machine types. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

1. Save the file and commit your changes to the required branch of the repository.

   Now when you create a codespace for that branch of the repository, and you go to the creation configuration options, you will only be able to select machine types that match or exceed the resources you've specified.

   ![Screenshot of a list of machine types. The 2- and 4-core options are labeled "Below dev container requirements."](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Further reading

- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)"
