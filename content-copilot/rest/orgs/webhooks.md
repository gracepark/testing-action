# Organization webhooks

Use the REST API to interact with webhooks in an organization.

## About organization webhooks

Organization webhooks allow your server to receive HTTP `POST` payloads whenever certain events happen in an organization. For more information, see "[AUTOTITLE](/webhooks)."

### Scopes and restrictions

You must be an organization owner to use these endpoints. OAuth tokens require the `admin:org_hook` scope to use these endpoints.

In order to protect sensitive data which may be present in webhook configurations, we also enforce the following access control rules:

- OAuth apps cannot list, view, or edit webhooks which they did not create.
- Users cannot list, view, or edit webhooks which were created by OAuth apps.
