# Gists

Use the REST API to list, create, update and delete the public gists on GitHub.

## About gists

You can use the REST API to view and modify gists. For more information about gists, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists)."

### Authentication

You can read public gists  anonymously, but you must be signed into GitHub to create gists. To read or write gists on a user's behalf, you need the gist OAuth scope and a token. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps)."

### Truncation

The API provides up to one megabyte of content for each file in the gist. Each file returned for a gist through the API has a key called `truncated`. If `truncated` is `true`, the file is too large and only a portion of the contents were returned in `content`.

If you need the full contents of the file, you can make a `GET` request to the URL specified by `raw_url`. Be aware that for files larger than ten megabytes, you'll need to clone the gist via the URL provided by `git_pull_url`.

In addition to a specific file's contents being truncated, the entire files list may be truncated if the total number exceeds 300 files. If the top level `truncated` key is `true`, only the first 300 files have been returned in the files list. If you need to fetch all of the gist's files, you'll need to clone the gist via the URL provided by `git_pull_url`.

### Custom media types for gists

These are the supported media types for fetching gist contents.

    application/vnd.github.raw
    application/vnd.github.base64

For more information, see "[AUTOTITLE](/rest/overview/media-types)."