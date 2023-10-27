# Configuring Git Large File Storage

Once [Git LFS is installed](/articles/installing-git-large-file-storage/), you need to associate it with a large file in your repository.

If there are existing files in your repository that you'd like to use GitHub with, you need to first remove them from the repository and then add them to Git LFS locally. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage)."

If there are referenced Git LFS files that did not upload successfully, you will receive an error message. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/resolving-git-large-file-storage-upload-failures)."

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Change your current working directory to an existing repository you'd like to use with Git LFS.
1. To associate a file type in your repository with Git LFS, enter `git lfs track` followed by the name of the file extension you want to automatically upload to Git LFS.

   For example, to associate a _.psd_ file, enter the following command:

   ```shell
   $ git lfs track "*.psd"
   > Adding path *.psd
   ```

   Every file type you want to associate with Git LFS will need to be added with `git lfs track`. This command amends your repository's _.gitattributes_ file and associates large files with Git LFS.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** We strongly suggest that you commit your local _.gitattributes_ file into your repository.

   - Relying on a global _.gitattributes_ file associated with Git LFS may cause conflicts when contributing to other Git projects.
   - Including the _.gitattributes_ file in the repository allows people creating forks or fresh clones to more easily collaborate using Git LFS.
   - Including the _.gitattributes_ file in the repository allows Git LFS objects to optionally be included in ZIP file and tarball archives.

   </div>

1. Add a file to the repository matching the extension you've associated:

   ```shell
   git add path/to/file.psd
   ```

1. Commit the file and push it to GitHub:

   ```shell
   git commit -m "add file.psd"
   git push
   ```

   You should see some diagnostic information about your file upload:

   ```shell
   > Sending file.psd
   > 44.74 MB / 81.04 MB  55.21 % 14s
   > 64.74 MB / 81.04 MB  79.21 % 3s
   ```

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage)"
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)"
