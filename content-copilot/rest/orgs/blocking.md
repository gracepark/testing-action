# Blocking users

Use the REST API to block and unblock users in an organization.

## About blocking users

The token used to authenticate the call must have the `admin:org` scope in order to make any blocking calls for an organization. Otherwise, the response returns `HTTP 404`.
