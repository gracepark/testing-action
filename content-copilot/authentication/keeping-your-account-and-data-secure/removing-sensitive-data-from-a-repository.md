# Removing sensitive data from a repository

If you commit sensitive data, such as a password or SSH key into a Git repository, you can remove it from the history. To entirely remove unwanted files from a repository's history you can use either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.

The `git filter-repo` tool and the BFG Repo-Cleaner rewrite your repository's history, which changes the SHAs for existing commits that you alter and any dependent commits. Changed commit SHAs may affect open pull requests in your repository. We recommend merging or closing all open pull requests before removing files from your repository.

You can remove the file from the latest commit with `git rm`. For information on removing a file that was added with the latest commit, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)."

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: This article tells you how to make commits with sensitive data unreachable from any branches or tags in your repository on GitHub.com. However, those commits may still be accessible in any clones or forks of your repository, directly via their SHA-1 hashes in cached views on GitHub, and through any pull requests that reference them. You cannot remove sensitive data from other users' clones of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on GitHub by contacting us through the [GitHub Support portal](https://support.github.com).

Once you have pushed a commit to GitHub, you should consider any sensitive data in the commit compromised. If you have committed a password, you should change it. If you have committed a key, generate a new one. Removing the compromised data doesn't resolve its initial exposure, especially in existing clones or forks of your repository.

If the commit that introduced the sensitive data exists in any forks of your repository, it will continue to be accessible unless the fork owner also removes the sensitive data from their fork or deletes the fork entirely. You will need to coordinate with the owners of any forks of your repository, asking them to take the appropriate actions. Please note that GitHub cannot provide contact information for these owners. 

Consider these limitations and challenges in your decision to rewrite your repository's history.

</div>

## Purging a file from your repository's history

You can purge a file from your repository's history using either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

 **Note:** If sensitive data is located in a file that's identified as a binary file, you'll need to remove the file from the history, as you can't modify it to remove or replace the data.

</div>

### Using the BFG

The [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) is a tool that's built and maintained by the open source community. It provides a faster, simpler alternative to `git filter-repo` for removing unwanted data.

For example, to remove your file with sensitive data and leave your latest commit untouched, run:

```shell
bfg --delete-files YOUR-FILE-WITH-SENSITIVE-DATA
```

To replace all text listed in `passwords.txt` wherever it can be found in your repository's history, run:

```shell
bfg --replace-text passwords.txt
```

After the sensitive data is removed, you must force push your changes to GitHub. Force pushing rewrites the repository history, which removes sensitive data from the commit history. If you force push, it may overwrite commits that other people have based their work on.

```shell
git push --force
```

See the [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)'s documentation for full usage and download instructions.

### Using git filter-repo

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:** If you run `git filter-repo` after stashing changes, you won't be able to retrieve your changes with other stash commands. Before running `git filter-repo`, we recommend unstashing any changes you've made. To unstash the last set of changes you've stashed, run `git stash show -p | git apply -R`. For more information, see [Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

</div>

To illustrate how `git filter-repo` works, we'll show you how to remove your file with sensitive data from the history of your repository and add it to `.gitignore` to ensure that it is not accidentally re-committed.

1. Install the latest release of the [git filter-repo](https://github.com/newren/git-filter-repo) tool. You can install `git-filter-repo` manually or by using a package manager. For example, to install the tool with HomeBrew, use the `brew install` command.

   ```shell
   brew install git-filter-repo
   ```

   For more information, see [_INSTALL.md_](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the `newren/git-filter-repo` repository.

1. If you don't already have a local copy of your repository with sensitive data in its history, [clone the repository](/repositories/creating-and-managing-repositories/cloning-a-repository) to your local computer.

   ```shell
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   > Initialized empty Git repository in /Users/YOUR-FILE-PATH/YOUR-REPOSITORY/.git/
   > remote: Counting objects: 1301, done.
   > remote: Compressing objects: 100% (769/769), done.
   > remote: Total 1301 (delta 724), reused 910 (delta 522)
   > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
   > Resolving deltas: 100% (724/724), done.
   ```

1. Navigate into the repository's working directory.

   ```shell
   cd YOUR-REPOSITORY
   ```

1. Run the following command, replacing `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` with the **path to the file you want to remove, not just its filename**. These arguments will:
    - Force Git to process, but not check out, the entire history of every branch and tag
    - Remove the specified file, as well as any empty commits generated as a result
    - Remove some configurations, such as the remote URL, stored in the _.git/config_ file. You may want to back up this file in advance for restoration later.
    - **Overwrite your existing tags**

      ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
  
   **Note:** If the file with sensitive data used to exist at any other paths (because it was moved or renamed), you must run this command on those paths, as well.
  
   </div>

1. Add your file with sensitive data to `.gitignore` to ensure that you don't accidentally commit it again.

   ```shell
   $ echo "YOUR-FILE-WITH-SENSITIVE-DATA" >> .gitignore
   $ git add .gitignore
   $ git commit -m "Add YOUR-FILE-WITH-SENSITIVE-DATA to .gitignore"
   > [main 051452f] Add YOUR-FILE-WITH-SENSITIVE-DATA to .gitignore
   >  1 files changed, 1 insertions(+), 0 deletions(-)
   ```

1. Double-check that you've removed everything you wanted to from your repository's history, and that all of your branches are checked out.
1. The `git filter-repo` tool will automatically remove your configured remotes. Use the `git remote set-url` command to restore your remotes, replacing `OWNER` and `REPO` with your repository details. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories#adding-a-remote-repository)."
  
   ```shell
   git remote add origin https://github.com/OWNER/REPOSITORY.git
   ```

1. Once you're happy with the state of your repository, and you have set the appropriate remote, force-push your local changes to overwrite your repository on GitHub.com, as well as all the branches you've pushed up. A force push is required to remove sensitive data from your commit history.

   ```shell
   $ git push origin --force --all
   > Counting objects: 1074, done.
   > Delta compression using 2 threads.
   > Compressing objects: 100% (677/677), done.
   > Writing objects: 100% (1058/1058), 148.85 KiB, done.
   > Total 1058 (delta 590), reused 602 (delta 378)
   > To https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   >  + 48dc599...051452f main -> main (forced update)
   ```

1. In order to remove the sensitive file from [your tagged releases](/repositories/releasing-projects-on-github/about-releases), you'll also need to force-push against your Git tags:

   ```shell
   $ git push origin --force --tags
   > Counting objects: 321, done.
   > Delta compression using up to 8 threads.
   > Compressing objects: 100% (166/166), done.
   > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
   > Total 321 (delta 124), reused 269 (delta 108)
   > To https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   >  + 48dc599...051452f main -> main (forced update)
   ```

## Fully removing the data from GitHub

After using either the BFG tool or `git filter-repo` to remove the sensitive data and pushing your changes to GitHub, you must take a few more steps to fully remove the data from GitHub.

1. Contact us through the [GitHub Support portal](https://support.github.com), and ask to remove cached views and references to the sensitive data in pull requests on GitHub. Please provide the name of the repository and/or a link to the commit you need removed.

1. Tell your collaborators to [rebase](https://git-scm.com/book/en/Git-Branching-Rebasing), _not_ merge, any branches they created off of your old (tainted) repository history. One merge commit could reintroduce some or all of the tainted history that you just went to the trouble of purging.

1. After some time has passed and you're confident that the BFG tool / `git filter-repo` had no unintended side effects, you can force all objects in your local repository to be dereferenced and garbage collected with the following commands (using Git 1.8.5 or newer):

   ```shell
   $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
   $ git reflog expire --expire=now --all
   $ git gc --prune=now
   > Counting objects: 2437, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (1378/1378), done.
   > Writing objects: 100% (2437/2437), done.
   > Total 2437 (delta 1461), reused 1802 (delta 1048)
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** You can also achieve this by pushing your filtered history to a new or empty repository and then making a fresh clone from GitHub.

   </div>

## Avoiding accidental commits in the future

Preventing contributors from making accidental commits can help you prevent sensitive information from being exposed. For more information see "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)."

There are a few simple tricks to avoid committing things you don't want committed:

- Use a visual program like [GitHub Desktop](https://desktop.github.com/) or [gitk](https://git-scm.com/docs/gitk) to commit changes. Visual programs generally make it easier to see exactly which files will be added, deleted, and modified with each commit.
- Avoid the catch-all commands `git add .` and `git commit -a` on the command line—use `git add filename` and `git rm filename` to individually stage files, instead.
- Use `git add --interactive` to individually review and stage changes within each file.
- Use `git diff --cached` to review the changes that you have staged for commit. This is the exact diff that `git commit` will produce as long as you don't use the `-a` flag.

## Further reading

- [`git filter-repo` man page](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git Tools - Rewriting History](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)"
