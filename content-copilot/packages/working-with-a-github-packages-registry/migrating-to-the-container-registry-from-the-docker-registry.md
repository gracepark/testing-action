# Migrating to the Container registry from the Docker registry

GitHub will migrate Docker images previously stored in the Docker registry on GitHub.com to the Container registry.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## About the Container registry

The Container registry stores container images within your organization or personal account, and allows you to associate an image with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository. You can also access public container images anonymously. For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

## About migration from the Docker registry

The Container registry replaces GitHub's Docker registry. If you've stored Docker images in the Docker registry, GitHub will gradually migrate the images to the Container registry. No action is required on your part.

After a Docker image has been migrated to the Container registry, you'll see the following changes to the details for the package.

- The package icon will be the Container registry logo (a <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-container" aria-label="The container icon" role="img"><path d="m10.41.24 4.711 2.774c.544.316.878.897.879 1.526v5.01a1.77 1.77 0 0 1-.88 1.53l-7.753 4.521-.002.001a1.769 1.769 0 0 1-1.774 0H5.59L.873 12.85A1.761 1.761 0 0 1 0 11.327V6.292c0-.304.078-.598.22-.855l.004-.005.01-.019c.15-.262.369-.486.64-.643L8.641.239a1.752 1.752 0 0 1 1.765 0l.002.001ZM9.397 1.534l-7.17 4.182 4.116 2.388a.27.27 0 0 0 .269 0l7.152-4.148-4.115-2.422a.252.252 0 0 0-.252 0Zm-7.768 10.02 4.1 2.393V9.474a1.807 1.807 0 0 1-.138-.072L1.5 7.029v4.298c0 .095.05.181.129.227Zm8.6.642 1.521-.887v-4.45l-1.521.882ZM7.365 9.402h.001c-.044.026-.09.049-.136.071v4.472l1.5-.875V8.61Zm5.885 1.032 1.115-.65h.002a.267.267 0 0 0 .133-.232V5.264l-1.25.725Z"></path></svg> icon) instead of the Docker logo.
- The domain in the pull URL will be `ghcr.io` instead of `docker.pkg.github.com`.

Any scripts or GitHub Actions workflows that use the namespace for the Docker registry, `docker.pkg.github.com`, will continue to work after migration to the Container registry at `ghcr.io`.

## About billing for Container registry

For more information about billing for the Container registry, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."
