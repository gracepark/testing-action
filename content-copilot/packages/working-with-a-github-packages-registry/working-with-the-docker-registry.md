# Working with the Docker registry

The Docker registry has now been replaced by the Container registry.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

GitHub's Docker registry (which used the namespace `docker.pkg.github.com`) has been replaced by the Container registry (which uses the namespace `https://ghcr.io`). The Container registry offers benefits such as granular permissions and storage optimizations for Docker images.

Docker images previously stored in the Docker registry are being automatically migrated into the Container registry. For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" and "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."
