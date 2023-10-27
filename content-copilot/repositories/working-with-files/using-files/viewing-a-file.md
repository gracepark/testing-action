# Viewing a file

You can view raw file content or trace changes to lines in a file and discover how parts of the file evolved over time.

## Viewing or copying the raw file content

With the raw view, you can view or copy the raw content of a file without any styling.

1. On GitHub.com, navigate to the main page of the repository.
1. Click the file that you want to view.
1. In the upper-right corner of the file view, click **Raw**.

   ![Screenshot of a file. In the header, a button, labeled "Raw," outlined in dark orange.](/assets/images/enterprise/repository/raw-file-button.png)

1. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy raw content" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>**. 

## Viewing the line-by-line revision history for a file

Within the blame view, you can view the line-by-line revision history for an entire file.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** On the command line, you can also use `git blame` to view the revision history of lines within a file. For more information, see [Git's `git blame` documentation](https://git-scm.com/docs/git-blame).

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Click to open the file whose line history you want to view.

1. In the upper-right corner of the file view, click **Blame** to open the blame view.

   ![Screenshot showing the header for a file. The "Blame" button is outlined in dark orange.](/assets/images/enterprise/repository/blame-button.png)
1. To see earlier revisions of a specific line, or reblame, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-versions" aria-label="View blame prior to this change" role="img"><path d="M7.75 14A1.75 1.75 0 0 1 6 12.25v-8.5C6 2.784 6.784 2 7.75 2h6.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14Zm-.25-1.75c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25ZM4.9 3.508a.75.75 0 0 1-.274 1.025.249.249 0 0 0-.126.217v6.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.75 1.75 0 0 1 3 11.25v-6.5c0-.649.353-1.214.874-1.516a.75.75 0 0 1 1.025.274ZM1.625 5.533h.001a.249.249 0 0 0-.126.217v4.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 0 10.25v-4.5a1.748 1.748 0 0 1 .873-1.516.75.75 0 1 1 .752 1.299Z"></path></svg> until you've found the changes you're interested in viewing.

   ![Screenshot of the "Blame" view of a file. To the right of a commit message, the versions icon is outlined in dark orange.](/assets/images/enterprise/repository/git-blame.png)

## Bypassing `.git-blame-ignore-revs` in the blame view

If the blame view for a file shows **Ignoring revisions in .git-blame-ignore-revs**, you can still bypass `.git-blame-ignore-revs` and see the normal blame view. In the URL, append a `~` to the SHA and the **Ignoring revisions in .git-blame-ignore-revs** banner will disappear.
