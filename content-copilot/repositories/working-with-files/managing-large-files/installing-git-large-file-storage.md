# Installing Git Large File Storage

In order to use Git LFS, you'll need to download and install a new program that's separate from Git.

<div class="ghd-tool mac">

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**. Alternatively, you can install Git LFS using a package manager:
   - To use [Homebrew](https://brew.sh/), run `brew install git-lfs`.
   - To use [MacPorts](https://www.macports.org/), run `port install git-lfs`.

   If you install Git LFS with Homebrew or MacPorts, skip to step six.

1. On your computer, locate and unzip the downloaded file.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Change the current working directory into the folder you downloaded and unzipped.

   ```shell
   cd ~/Downloads/git-lfs-1.X.X
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the Git LFS download.

   </div>
1. To install the file, run this command:

   ```shell
   $ ./install.sh
   > Git LFS initialized.
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** You may have to use `sudo ./install.sh` to install the file.

   </div>
1. Verify that the installation was successful:

   ```shell
   $ git lfs install
   > Git LFS initialized.
   ```

1. If you don't see a message indicating that `git lfs install` was successful, please contact us through the [GitHub Support portal](https://support.github.com). Be sure to include the name of your operating system.

</div>

<div class="ghd-tool windows">

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**.

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Tip:** For more information about alternative ways to install Git LFS for Windows, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

   </div>
1. On your computer, locate the downloaded file.
1. Double click on the file called _git-lfs-windows-1.X.X.exe_, where 1.X.X is replaced with the Git LFS version you downloaded. When you open this file Windows will run a setup wizard to install Git LFS.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>. As the setup wizard may have modified your system `PATH`, opening a new session will ensure Git can locate Git LFS.
1. Verify that the installation was successful:

   ```shell
   $ git lfs install
   > Git LFS initialized.
   ```

1. If you don't see a message indicating that `git lfs install` was successful, please contact us through the [GitHub Support portal](https://support.github.com). Be sure to include the name of your operating system.

</div>

<div class="ghd-tool linux">

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**.

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Tip:** For more information about alternative ways to install Git LFS for Linux, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

   </div>
1. On your computer, locate and unzip the downloaded file.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Change the current working directory into the folder you downloaded and unzipped.

   ```shell
   cd ~/Downloads/git-lfs-1.X.X
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the Git LFS download.

   </div>
1. To install the file, run this command:

   ```shell
   $ ./install.sh
   > Git LFS initialized.
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** You may have to use `sudo ./install.sh` to install the file.

   </div>
1. Verify that the installation was successful:

   ```shell
   $ git lfs install
   > Git LFS initialized.
   ```

1. If you don't see a message indicating that `git lfs install` was successful, please contact us through the [GitHub Support portal](https://support.github.com). Be sure to include the name of your operating system.

</div>

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage)"
