# Packages

Use the REST API to interact with GitHub Packages.

## About GitHub Packages

GitHub Packages supports a range of package managers for publishing packages. For more information, see "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#supported-clients-and-formats)."

After you publish a package, you can use the REST API to manage the package in your GitHub repositories and organizations. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)."

To use the REST API to manage GitHub Packages, you must authenticate using a personal access token.
- To access package metadata, your token must include the `read:packages` scope.
- To delete packages and package versions, your token must include the `read:packages` and `delete:packages` scopes.
- To restore packages and package versions, your token must include the `read:packages` and `write:packages` scopes.

If your package is in a registry that supports granular permissions, then your token does not need the `repo` scope to access or manage this package. If your package is in a registry that only supports repository-scoped permissions, then your token must also include the `repo` scope since your package inherits permissions from a GitHub repository. For a list of registries that only support repository-scoped permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
