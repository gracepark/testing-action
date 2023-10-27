# Blocking users

Use the REST API to manage blocked users.

## About blocking users

If a request URL does not include a `{username}` parameter then the response will be for the signed-in user (and you must pass [authentication information](/rest/overview/authenticating-to-the-rest-api) with your request). Additional private information, such as whether a user has two-factor authentication enabled, is included when authenticated through OAuth with the `user` scope.
