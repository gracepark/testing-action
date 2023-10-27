# Using the TODOCS placeholder to leave notes

You can use the `TODOCS` placeholder to indicate work that still needs to be completed.

Articles in the "Contributing to GitHub Docs" section refer to the documentation itself and are a resource for GitHub staff and open source contributors.

## Using the TODOCS placeholder

Sometimes technical writers use placeholders while writing documentation to remind themselves to come back to something later. It's a useful technique, but there's always the possibility that the placeholder will be overlooked and slip into production. At that point, the only way the Docs team will find out about it is if someone sees it and reports it.

To prevent slips, use the string `TODOCS` as your placeholder. The Docs test suite includes a [linting test](https://github.com/github/docs/tree/main/src/content-linter) that will fail if it finds this string anywhere in a Markdown or YAML file.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: If you use VS Code as your text editor, the "[TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)" extension is useful for highlighting instances of "TODOCS" in your files. Add "TODOCS" and other varieties of casing, such as "todocs," to the settings for this extension.

</div>

### Example

```markdown
1. In the dropdown, select the settings you want to sync.

   TODOCS: ADD A SCREENSHOT OF THE SETTINGS SYNC OPTIONS

1. Click **Sign in & Turn on**, then select the account to which you want your settings to be synced.
```
