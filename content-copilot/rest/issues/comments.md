# Issue comments

Use the REST API to manage comments on issues and pull requests.

## About issue and pull request comments

You can use the REST API to create and manage comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request. For this reason, "shared" actions for both features, like managing assignees, labels, and milestones, are provided within the Issues endpoints. To manage pull request review comments, see "[AUTOTITLE](/rest/pulls/comments)."

### Custom media types

These are the supported media types for this set of endpoints:

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json

For more information about media types, see "[AUTOTITLE](/rest/overview/media-types)."
