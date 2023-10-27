# Autolinked references and URLs

References to URLs, issues, pull requests, and commits are automatically shortened and converted into links.

## URLs

GitHub automatically creates links from standard URLs.

`Visit https://github.com`

![Screenshot of rendered GitHub Markdown showing how a URL beginning with "http" becomes as a blue clickable link. The text reads, "Visit https://github.com."](/assets/images/help/writing/url-autolink-rendered.png)

For more information on creating links, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)."

## Issues and pull requests

Within conversations on GitHub, references to issues and pull requests are automatically converted to shortened links.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Autolinked references are not created in wikis or files in a repository.

</div>

| Reference type | Raw reference | Short link |
| --- | --- | --- |
| Issue or pull request URL | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` and issue or pull request number | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` and issue or pull request number | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` and issue or pull request number | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` and issue or pull request number | github-linguist/linguist#4039 | [github-linguist/linguist#4039](https://github.com/github-linguist/linguist/pull/4039)

If you reference an issue, pull request, or discussion in a list, the reference will unfurl to show the title and state instead. For more information about task lists, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."

## Labels

When referencing the URL of a label in Markdown, the label is automatically rendered. Only labels of the same repository are rendered, URLs pointing to a label from a different repository are rendered as any [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls).

The URL of a label can be found by navigating to the labels page and clicking on a label. For example, the URL of the label "enhancement" in our public [docs repository](https://github.com/github/docs/) is

```markdown
https://github.com/github/docs/labels/enhancement
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If the label name contains a period (`.`), the label will not automatically render from the label URL.

</div>

## Commit SHAs

References to a commit's SHA hash are automatically converted into shortened links to the commit on GitHub.

| Reference type | Raw reference | Short link |
| --- | --- | --- |
| Commit URL | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## Custom autolinks to external resources

If custom autolink references are configured for a repository, then references to external resources, like a JIRA issue or Zendesk ticket, convert into shortened links. To know which autolinks are available in your repository, contact someone with admin permissions to the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-autolinks-to-reference-external-resources)."

## Further reading

- "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)"
