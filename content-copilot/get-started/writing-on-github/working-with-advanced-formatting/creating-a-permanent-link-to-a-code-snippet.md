# Creating a permanent link to a code snippet

You can create a permanent link to a specific line or range of lines of code in a specific version of a file or pull request.

## Linking to code

This type of permanent link will render as a code snippet only in the repository it originated in. In other repositories, the permalink code snippet will render as a URL.

![Screenshot of an issue comment. A code snippet has a header that lists the file name and line numbers, and a body that lists the code on those lines.](/assets/images/help/repository/rendered-code-snippet.png)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To create a permalink for an entire file, see "[AUTOTITLE](/repositories/working-with-files/using-files/getting-permanent-links-to-files)."

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Locate the code you'd like to link to:
    - To link to code from a file, navigate to the file.
    - To link to code from a pull request, navigate to the pull request and click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-diff" aria-hidden="true"><path d="M8.75 1.75V5H12a.75.75 0 0 1 0 1.5H8.75v3.25a.75.75 0 0 1-1.5 0V6.5H4A.75.75 0 0 1 4 5h3.25V1.75a.75.75 0 0 1 1.5 0ZM4 13h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 4 13Z"></path></svg> **Files changed**. Then, browse to the file that contains the code you want include in your comment, and click **View**.
1. Choose whether to select a single line or a range.

   - To select a single line of code, click the line number to highlight the line.
   - To select a range of code, click the number of the first line in the range to highlight the line of code. Then, hover over the last line of the code range, press <kbd>Shift</kbd>, and click the line number to highlight the range.
1. To the left of the line or range of lines, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Code line X options" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>. In the drop-down menu, click **Copy permalink**.

   ![Screenshot of a file, with 8 lines selected. To the left of the first selected line, a button labeled with a kebab icon is outlined in dark orange.](/assets/images/help/repository/open-new-issue-specific-line.png)
1. Navigate to the conversation where you want to link to the code snippet.
1. Paste your permalink into a comment, and click **Comment**.

## Linking to Markdown

You can link to specific lines in Markdown files by loading the Markdown file without Markdown rendering. To load a Markdown file without rendering, you can use the `?plain=1` parameter at the end of the url for the file. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

You can link to a specific line in the Markdown file the same way you can in code. Append `#L` with the line number or numbers at the end of the url. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` will highlight line 14 in the plain README.md file.

## Further reading

- "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)"
