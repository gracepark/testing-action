# About Git Large File Storage

GitHub limits the size of files allowed in repositories. To track files beyond this limit, you can use Git Large File Storage.

## About Git Large File Storage

Git LFS handles large files by storing references to the file in the repository, but not the actual file itself. To work around Git's architecture, Git LFS creates a pointer file which acts as a reference to the actual file (which is stored somewhere else). GitHub manages this pointer file in your repository. When you clone the repository down, GitHub uses the pointer file as a map to go and find the large file for you.

Different maximum size limits for Git LFS apply depending on your GitHub plan.

| Product | Maximum file size |
|------- | ------- |
| GitHub Free | 2 GB |
| GitHub Pro | 2 GB |
| GitHub Team | 4 GB |
| GitHub Enterprise Cloud | 5 GB |

If you exceed the per file limit of 5 GB, the file will be rejected silently by Git LFS.

You can also use Git LFS with GitHub Desktop. For more information about cloning Git LFS repositories in GitHub Desktop, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)."

You can choose whether Git LFS objects are included in [source code archives](/repositories/working-with-files/using-files/downloading-source-code-archives), such as ZIP files and tarballs, that GitHub creates for your repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

## Pointer file format

Git LFS's pointer file looks like this:

```text
version https://git-lfs.github.com/spec/v1
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

It tracks the `version` of Git LFS you're using, followed by a unique identifier for the file (`oid`). It also stores the `size` of the final file.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes**:
- Git LFS cannot be used with GitHub Pages sites.
- Git LFS cannot be used with template repositories.

</div>

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage)"
