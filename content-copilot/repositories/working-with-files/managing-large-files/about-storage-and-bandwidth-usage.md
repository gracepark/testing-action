# About storage and bandwidth usage

Every account using Git Large File Storage receives 1 GiB of free storage and 1 GiB a month of free bandwidth. If the bandwidth and storage quotas are not enough, you can choose to purchase an additional quota for Git LFS.

Git LFS is available for every repository on GitHub, whether or not your account or organization has a paid subscription.

## Tracking storage and bandwidth use

When you commit and push a change to a file tracked with Git LFS, a new version of the entire file is pushed and the total file size is counted against the repository owner's storage limit. When you download a file tracked with Git LFS, the total file size is counted against the repository owner's bandwidth limit. Git LFS uploads do not count against the bandwidth limit.

For example:
- If you push a 500 MB file to Git LFS, you'll use 500 MB of your allotted storage and none of your bandwidth. If you make a 1 byte change and push the file again, you'll use another 500 MB of storage and no bandwidth, bringing your total usage for these two pushes to 1 GB of storage and zero bandwidth.
- If you download a 500 MB file that's tracked with LFS, you'll use 500 MB of the repository owner's allotted bandwidth. If a collaborator pushes a change to the file and you pull the new version to your local repository, you'll use another 500 MB of bandwidth, bringing the total usage for these two downloads to 1 GB of bandwidth.
- If GitHub Actions downloads a 500 MB file that is tracked with LFS, it will use 500 MB of the repository owner's allotted bandwidth.

If Git Large File Storage (Git LFS) objects are included in [source code archives](/repositories/working-with-files/using-files/downloading-source-code-archives) for your repository, downloads of those archives will count towards bandwidth usage for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips**:
- Bandwidth and storage usage only count against the repository owner's quotas. In forks, bandwidth and storage usage count against the root of the repository network. Anyone with write access to a repository can push files to Git LFS without affecting their personal bandwidth and storage quotas or purchasing data packs. Forking and pulling a repository counts against the parent repository's bandwidth limit.
- Unused bandwidth doesn't roll over month-to-month.

</div>

## Storage quota

If you use more than 1 GiB of storage without purchasing a data pack, you can still clone repositories with large assets, but you will only retrieve the pointer files, and you will not be able to push new files back up. For more information about pointer files, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage#pointer-file-format)."

## Bandwidth quota

If you use more than 1 GiB of bandwidth per month without purchasing a data pack, Git LFS support is disabled on your account until the next month.

## Further reading

- "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage)"
- "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage)"
