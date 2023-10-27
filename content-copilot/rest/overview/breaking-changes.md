# Breaking changes

Learn about breaking changes that were introduced in each REST API version.

## About breaking changes in the REST API

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

For more information about API versions, see "[AUTOTITLE](/rest/overview/api-versions)."

## Upgrading to a new API version

Before upgrading to a new REST API version, you should read the section on this page that corresponds to the new API version to understand what breaking changes are included and to learn more about how to upgrade to that API version.

When you update your integration to specify the new API version in the `X-GitHub-Api-Version` header, you'll also need to make any changes required for your integration to work with the new API version.

Once your integration is updated, test your integration to verify that it works with the new API version.

## Breaking changes for 

Version `` is the first version of the GitHub REST API after date-based versioning was introduced. This version does not include any breaking changes.
