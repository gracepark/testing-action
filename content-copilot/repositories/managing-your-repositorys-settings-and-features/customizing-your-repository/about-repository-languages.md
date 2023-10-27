# About repository languages

The files and directories within a repository determine the languages that make up the repository. You can view a repository's languages to get a quick overview of the repository.

GitHub uses the open source [Linguist library](https://github.com/github-linguist/linguist) to
determine file languages for syntax highlighting and repository statistics. Language statistics will update after you push changes to your default branch.

Some files are hard to identify, and sometimes projects contain more library and vendor files than their primary code. If you're receiving incorrect results, please consult the Linguist [troubleshooting guide](https://github.com/github-linguist/linguist/blob/master/docs/troubleshooting.md) for help. Note that Linguist only works for repositories with fewer than 100,000 files.

## Markup languages

Markup languages are rendered to HTML and displayed inline using our open-source [Markup library](https://github.com/github/markup). At this time, we are not accepting new markup languages to show within GitHub. However, we do actively maintain our current markup languages. If you see a problem, [please create an issue](https://github.com/github/markup/issues/new).
