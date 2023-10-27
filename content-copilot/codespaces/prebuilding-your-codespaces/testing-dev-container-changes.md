# Testing dev container configuration changes on a prebuild-enabled branch

When you change the dev container configuration for a branch that's enabled for prebuilds, you should test your changes in a codespace.

**Who can use this feature**: People with write permissions to a repository can create or edit the dev container configuration for a branch.

Any changes you make to the dev container configuration for a prebuild-enabled branch will result in an update to the codespace configuration and the associated prebuild. It’s therefore important to test such changes in a codespace from a test branch before committing your changes to a branch of your repository that's actively used. This will ensure you’re not introducing breaking changes for your team.

For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

## Testing changes to the dev container configuration

1. Create a codespace from the prebuild-enabled branch whose dev container you want to change. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."
1. In the codespace, check out a test branch. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#creating-or-switching-branches)."
1. Make the required changes to the dev container configuration.
1. Apply the changes by rebuilding the container. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."
1. After everything looks good, we also recommend creating a new codespace from your test branch to ensure everything is working. You can then commit your changes to your repository's default branch or an active feature branch, triggering an update of the prebuild for that branch.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: Creating this codespace will take longer than usual because it will not be created from a prebuild.

   </div>
