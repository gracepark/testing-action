# Subversion properties supported by GitHub

There are several Subversion workflows and properties that are similar to existing functionality on GitHub.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Subversion support will be removed from GitHub
on January 8, 2024. A future release of GitHub Enterprise Server after January 8, 2024
will also remove Subversion support. To read more about this, see [the GitHub blog][svn-sunset-blog].

[svn-sunset-blog]: https://github.blog/2023-01-20-sunsetting-subversion-support/

</div>

## Executable files (`svn:executable`)

We convert `svn:executable` properties by updating the file mode directly before adding it to the Git repository.

## MIME types (`svn:mime-type`)

GitHub internally tracks the mime-type properties of files and the commits that added them.

## Ignoring unversioned items (`svn:ignore`)

If you've set files and directories to be ignored in Subversion, GitHub will track them internally. Files ignored by subversion clients are completely distinct from entries in a _.gitignore_ file.

## Currently unsupported properties

GitHub doesn't currently support `svn:externals`, `svn:global-ignores`, or any properties not listed above, including custom properties.
