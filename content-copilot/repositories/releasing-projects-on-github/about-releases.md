# About releases

You can create a release to package software, along with release notes and links to binary files, for other people to use.

## About releases

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository)."

You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."

When viewing the details for a release, the creation date for each release asset is shown next to the release asset.

People with admin permissions to a repository can choose whether Git Large File Storage (Git LFS) objects are included in the ZIP files and tarballs that GitHub creates for each release. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

If a release fixes a security vulnerability, you should publish a security advisory in your repository. GitHub reviews each published security advisory and may use it to send Dependabot alerts to affected repositories. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[AUTOTITLE](/rest/releases)."

## Storage and bandwidth quotas

 Each file included in a release must be under 2 GiB. There is no limit on the total size of a release, nor bandwidth usage.
