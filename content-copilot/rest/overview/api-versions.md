# API Versions

Learn how to specify which REST API version to use whenever you make a request to the REST API.

## About API versioning

The GitHub REST API is versioned. The API version name is based on the date when the API version was released. For example, the API version `` was released on .

Any breaking changes will be released in a new API version. Breaking changes are changes that can potentially break an integration. Breaking changes include:

- removing an entire operation
- removing or renaming a parameter
- removing or renaming a response field
- adding a new required parameter
- making a previously optional parameter required
- changing the type of a parameter or response field
- removing enum values
- adding a new validation rule to an existing parameter
- changing authentication or authorization requirements

Any additive (non-breaking) changes will be available in all supported API versions. Additive changes are changes that should not break an integration. Additive changes include:

- adding an operation
- adding an optional parameter
- adding an optional request header
- adding a response field
- adding a response header
- adding enum values

When a new REST API version is released, the previous API version will be supported for at least 24 more months following the release of the new API version.

## Specifying an API version

You should use the `X-GitHub-Api-Version` header to specify an API version. For example:

```shell
curl  https://api.github.com/zen
```

Requests without the `X-GitHub-Api-Version` header will default to use the `` version.

If you specify an API version that is no longer supported, you will receive a `400` error.

## Upgrading to a new API version

Before upgrading to a new REST API version, you should read the changelog of breaking changes for the new API version to understand what breaking changes are included and to learn more about how to upgrade to that specific API version. For more information, see "[AUTOTITLE](/rest/overview/breaking-changes)."

When you update your integration to specify the new API version in the `X-GitHub-Api-Version` header, you'll also need to make any changes required for your integration to work with the new API version.

Once your integration is updated, test your integration to verify that it works with the new API version.

## Supported API versions

The following REST API versions are currently supported:

2022-11-28

You can also make an API request to get all of the supported API versions. For more information, see "[AUTOTITLE](/rest/meta#get-all-api-versions)."
