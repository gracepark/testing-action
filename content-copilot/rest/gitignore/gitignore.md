# Gitignore

Use the REST API to get `.gitignore` templates that can be used to ignore files and directories.

## About gitignore

When you create a new repository on GitHub.com via the API, you can specify a [.gitignore template](/get-started/getting-started-with-git/ignoring-files) to apply to the repository upon creation. You can use the REST API to get .gitignore templates from the GitHub [.gitignore repository](https://github.com/github/gitignore).

You can use the `application/vnd.github.raw` custom media type when getting a gitignore template. For more information, see "[AUTOTITLE](/rest/overview/media-types)."
