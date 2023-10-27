# GitHub token is required to upload SARIF results

You need to provide an authentication method for the upload process to use to access the repository.

## About this error

```text
A GitHub token is required to upload SARIF results but none was specified
```

This error is reported if the upload process does not reference an authentication method, or if that method has the wrong permission. The permissions required to upload SARIF file to a repository are the same no matter what process you use to upload the data.

- Fine-grained personal access tokens require `write` scope for the repository.
- Classic personal access tokens require `security_events` scope for the repository for private or internal repositories. You can use tokens with the `public_repo` scope for public repositories.
- GitHub Apps require `security_events` scope for the repository.

You could see this error for SARIF files created using any tool and uploaded using any method.

## Fixing the problem

Create a new personal access token or GitHub App with the correct permission. For more information see, "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)", or "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app)" and  "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app)."
