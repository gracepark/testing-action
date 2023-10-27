# About large files on GitHub

GitHub limits the size of files you can track in regular Git repositories. Learn how to track or remove files that are beyond the limit.

## About size limits on GitHub

GitHub tries to provide abundant storage for all Git repositories, although there are hard limits for file and repository sizes. To ensure performance and reliability for our users, we actively monitor signals of overall repository health. Repository health is a function of various interacting factors, including size, commit frequency, contents, and structure.

### File size limits

GitHub limits the size of files allowed in repositories. If you attempt to add or update a file that is larger than 50 MiB, you will receive a warning from Git. The changes will still successfully push to your repository, but you can consider removing the commit to minimize performance impact. For more information, see "[Removing files from a repository's history](#removing-files-from-a-repositorys-history)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you add a file to a repository via a browser, the file can be no larger than 25 MiB. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."

</div>

GitHub blocks files larger than 100 MiB. 

To track files beyond this limit, you must use Git Large File Storage (Git LFS). For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)."

If you need to distribute large files within your repository, you can create releases on GitHub.com instead of tracking the files. For more information, see "[Distributing large binaries](#distributing-large-binaries)."

Git is not designed to handle large SQL files. To share large databases with other developers, we recommend using a file sharing service.

### Repository size limits

We recommend repositories remain small, ideally less than 1 GB, and less than 5 GB is strongly recommended. Smaller repositories are faster to clone and easier to work with and maintain. If your repository excessively impacts our infrastructure, you might receive an email from GitHub Support asking you to take corrective action. We try to be flexible, especially with large projects that have many collaborators, and will work with you to find a resolution whenever possible. You can prevent your repository from impacting our infrastructure by effectively managing your repository's size and overall health. You can find advice and a tool for repository analysis in the [`github/git-sizer`](https://github.com/github/git-sizer) repository.

External dependencies can cause Git repositories to become very large. To avoid filling a repository with external dependencies, we recommend you use a package manager. Popular package managers for common languages include [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/), and [Maven](https://maven.apache.org/). These package managers support using Git repositories directly, so you don't need pre-packaged sources.

Git is not designed to serve as a backup tool. However, there are many solutions specifically designed for performing backups, such as [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/), and [CrashPlan](https://www.crashplan.com/en-us/).

## Removing files from a repository's history

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: These procedures will permanently remove files from the repository on your computer and GitHub.com. If the file is important, make a local backup copy in a directory outside of the repository.

</div>

### Removing a file added in the most recent unpushed commit

If the file was added with your most recent commit, and you have not pushed to GitHub.com, you can delete the file and amend the commit:

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Change the current working directory to your local repository.
1. To remove the file, enter `git rm --cached`:

   ```shell
   $ git rm --cached GIANT_FILE
   # Stage our giant file for removal, but leave it on disk
   ```

1. Commit this change using `--amend -CHEAD`:

   ```shell
   $ git commit --amend -CHEAD
   # Amend the previous commit with your change
   # Simply making a new commit won't work, as you need
   # to remove the file from the unpushed history as well
   ```

1. Push your commits to GitHub.com:

   ```shell
   $ git push
   # Push our rewritten, smaller commit
   ```

### Removing a file that was added in an earlier commit

If you added a file in an earlier commit, you need to remove it from the repository's history. To remove files from the repository's history, you can use the BFG Repo-Cleaner or the `git filter-repo` command. For more information see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

## Distributing large binaries

If you need to distribute large files within your repository, you can create releases on GitHub.com. Releases allow you to package software, release notes, and links to binary files, for other people to use. For more information, visit "[AUTOTITLE](/repositories/releasing-projects-on-github/about-releases)."

We don't limit the total size of the binary files in the release or the bandwidth used to deliver them. However, each individual file must be smaller than 2 GiB.
