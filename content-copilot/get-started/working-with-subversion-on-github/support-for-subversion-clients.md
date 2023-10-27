# Support for Subversion clients

GitHub repositories can be accessed from both Git and Subversion (SVN) clients. This article covers using a Subversion client on GitHub and some common problems that you might run into.

GitHub supports Subversion clients via the HTTPS protocol. We use a Subversion bridge to communicate svn commands to GitHub.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Subversion support will be removed from GitHub
on January 8, 2024. A future release of GitHub Enterprise Server after January 8, 2024
will also remove Subversion support. To read more about this, see [the GitHub blog][svn-sunset-blog].

[svn-sunset-blog]: https://github.blog/2023-01-20-sunsetting-subversion-support/

</div>

## Supported Subversion features on GitHub

### Checkout

The first thing you'll want to do is a Subversion checkout.  Since Git clones keep the working directory (where you edit files) separate from the repository data, there is only one branch in the working directory at a time.

Subversion checkouts are different: they mix the repository data in the working directories, so there is a working directory for each branch and tag you've checked out.  For repositories with many branches and tags, checking out everything can be a bandwidth burden, so you should start with a partial checkout.

1. On GitHub.com, navigate to the main page of the repository.
1. Above the list of files, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> **Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)

1. Copy the URL for the repository.

   - To clone the repository using HTTPS, under "HTTPS", click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-paste" aria-label="Copy to clipboard" role="img"><path d="M3.626 3.533a.249.249 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.249.249 0 0 0-.126-.217.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298ZM5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1Zm.75 3h3V2.5h-3Z"></path></svg>.
   - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-paste" aria-label="Copy to clipboard" role="img"><path d="M3.626 3.533a.249.249 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.249.249 0 0 0-.126-.217.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298ZM5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1Zm.75 3h3V2.5h-3Z"></path></svg>.
   - To clone a repository using GitHub CLI, click **GitHub CLI**, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.
  
     ![Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/https-url-clone-cli.png)

1. Make an empty checkout of the repository:

   ```shell
   $ svn co --depth empty https://github.com/USER/REPO
   > Checked out revision 1.
   $ cd REPO
   ```

1. Get the `trunk` branch. The Subversion bridge maps trunk to the Git HEAD branch.

   ```shell
   $ svn up trunk
   > A    trunk
   > A    trunk/README.md
   > A    trunk/gizmo.rb
   > Updated to revision 1.
   ```

1. Get an empty checkout of the `branches` directory.  This is where all of the non-`HEAD` branches live, and where you'll be making feature branches.

   ```shell
   $ svn up --depth empty branches
   Updated to revision 1.
   ```

### Creating branches

You can also create branches using the Subversion bridge to GitHub.

From your svn client, make sure the default branch is current by updating `trunk`:

```shell
$ svn up trunk
> At revision 1.
```

Next, you can use `svn copy` to create a new branch:

```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

You can confirm that the new branch exists in the repository's branch dropdown:

   ![Screenshot of the repository page. A dropdown menu, labeled with a branch icon and "main", is highlighted with an orange outline.](/assets/images/help/branches/branch-selection-dropdown.png)

You can also confirm the new branch via the command line:

```shell
$ git fetch
> From https://github.com/USER/REPO/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Making commits to Subversion

After you've added some features and fixed some bugs, you'll want to commit those
changes to GitHub. This works just like the Subversion you're used to. Edit your files, and use `svn commit` to record your changes:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### Switching between branches

To switch between branches, you'll probably want to start with a checkout of `trunk`:

```shell
svn co --depth empty https://github.com/USER/REPO/trunk
```

Then, you can switch to another branch:

```shell
svn switch https://github.com/USER/REPO/branches/more_awesome
```

## Finding the Git commit SHA for a Subversion commit

GitHub's Subversion server exposes the Git commit sha for each Subversion commit.

To see the commit SHA, you should ask for the `git-commit` unversioned remote property.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/USER/REPO
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

With this commit SHA, you can, for example, look up the corresponding Git commit on GitHub.
