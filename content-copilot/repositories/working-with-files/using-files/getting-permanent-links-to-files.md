# Getting permanent links to files

When viewing a file on GitHub.com, you can press the "y" key to update the URL to a permalink to the exact version of the file you see.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: Press "?" on any page in GitHub to see all available keyboard shortcuts.

</div>

## File views show the latest version on a branch

When viewing a file on GitHub.com, you usually see the version at the current head of a branch.  For example:

- [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

refers to GitHub's `codeql` repository, and shows the `main` branch's current version of the `README.md` file.

The version of a file at the head of branch can change as new commits are made, so if you were to copy the normal URL, the file contents might not be the same when someone looks at it later.

## Press <kbd>Y</kbd> to permalink to a file in a specific commit

For a permanent link to the specific version of a file that you see, instead of using a branch name in the URL (i.e. the `main` part in the example above), put a commit id.  This will permanently link to the exact version of the file in that commit.  For example:

- [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

replaces `main` with a specific commit id and the file content will not change.

Looking up the commit SHA by hand is inconvenient, however, so as a shortcut you can type <kbd>y</kbd> to automatically update the URL to the permalink version.  Then you can copy the URL knowing that anyone you share it with will see exactly what you saw.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: You can put any identifier that can be resolved to a commit in the URL, including branch names, specific commit SHAs, or tags!

</div>

## Creating a permanent link to a code snippet

You can create a permanent link to a specific line or range of lines of code in a specific version of a file or pull request. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet)."

## Further reading

- "[AUTOTITLE](/repositories/archiving-a-github-repository)"
