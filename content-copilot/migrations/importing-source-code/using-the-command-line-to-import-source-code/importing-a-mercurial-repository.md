# Importing a Mercurial repository

You can import a repository from Mercurial by converting the repository to Git, then pushing the Git repository to GitHub.

## Prerequisites

To follow these steps, you must use a macOS or Linux system and have the following tools installed:

- [Mercurial](https://www.mercurial-scm.org)
- [Git](https://git-scm.com/downloads)
- Git Large File Storage (Git LFS) (see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)")
- [Python](https://www.python.org), including the `pip` package manager

## Importing a Mercurial repository

1. Create a new repository on GitHub.com. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. To confirm that Mercurial is installed on your machine, run `hg --version`.

   The output should be similar to `Mercurial Distributed SCM (version 6.4)`.
1. To confirm that Git is installed on your machine, run `git --version.`

   The output should be similar to `git version 2.40.0`.
1. To confirm that Git LFS is installed on your machine, run `git lfs --version`.

   The output should be similar to `git-lfs/3.1.4 (GitHub; darwin arm64; go 1.18.1)`.
1. To confirm that `pip` is installed on your machine, run `pip --version`.

   The output should be similar to `pip 21.2.4`.
1. To install the `mercurial` Python package, run `pip install mercurial`.
1. Download the latest release of [fast-export](https://github.com/frej/fast-export/releases) to your machine, then extract the archive.
1. Move into the extracted directory, then run `./hg-fast-export.sh --help`.

   The output should start with `usage: hg-fast-export.sh`.
1. Clone your Mercurial repository.

   For example, to clone the source code of Mercurial itself to the `mercurial-repo` directory, run `hg clone https://www.mercurial-scm.org/repo/hg mercurial-repo`.
1. Create a new directory, move into the new directory, then initialize a fresh Git repository.

   For example, if you want to name your new repository `mercurial-git`, run `mkdir mercurial-git && cd mercurial-git && git init`.
1. Move into the directory for the newly-created Git repository.
1. To configure your new Git repository to handle the case of filenames in the same way as Mercurial, run `git config core.ignoreCase false`.
1. To get a list of committers in your Mercurial project and store the list in `committers.txt`, run the following script.

   ```shell copy
   hg log --template "{author}\n" | sort | uniq > committers.txt
   ```

1. Update your `committers.txt` file, mapping the committer name used in the Mercurial repository to the name you want to use in your Git repository, with the following format:

   ```text
   “The Octocat <octocato@gmail.com>”=”Octocat <octocat@github.com>”
   ```

1. In your initialized Git repository, run `hg-fast-export.sh`, passing in the path to your Mercurial repository and the path to your `committers.txt` file as arguments.

   For example, `../fast-export-221024/hg-fast-export.sh -r ../mercurial-repo -A ../mercurial-repo/committers.txt -M main`.
1. After the import finishes, to check out your newly-created Git repository, run `git checkout HEAD`.
1. To add your GitHub repository as a remote, run `git remote add origin URL`, replacing `URL` with the URL for the GitHub repository you created earlier, such as `https://github.com/octocat/example-repository.git`.
1. To push the repository to GitHub, run `git push --mirror origin`.

   If your repository contains any files that are larger than GitHub's file size limit, your push may fail. Move the large files to Git LFS by running `git lfs import`, then try again.

## Further reading

- "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"
