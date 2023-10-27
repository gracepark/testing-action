# Repository invitations

Use the REST API to view and manage invitations to collaborate on a repository.

## About repository invitations

You can view and manage invitations to collaborate on a repository. The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

To add a user as a collaborator, use the Collaborators endpoints instead. For more information, see "[AUTOTITLE](/rest/collaborators/collaborators#add-a-repository-collaborator)."

Note that the `repo:invite` [OAuth scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.
