# Connecting a repository to a package

You can connect a repository to a package on GitHub.com.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

When you publish a package that is scoped to a personal account or an organization, the package is not linked to a repository by default. If you connect a package to a repository, the package's landing page will show information and links from the repository, such as the README. You can also choose to have the package inherit its access permissions from the linked repository. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

## Connecting a repository to a user-scoped package on GitHub

1. On GitHub, navigate to the main page of your personal account.
1. In the top right corner of GitHub.com, click your profile photo, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu.png)

1. On your profile page, in the header, click the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-package" aria-hidden="true"><path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path></svg> **Packages** tab.
1. Search for and then click the name of the package that you want to manage.
1. Under your package versions, click **Connect repository**.
1. Select a repository to link to the package, then click **Connect repository**.

## Connecting a repository to an organization-scoped package on GitHub

1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-package" aria-hidden="true"><path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path></svg> **Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)
1. Search for and then click the name of the package that you want to manage.
1. Under your package versions, click **Connect repository**.
1. Select a repository to link to the package, then click **Connect repository**.

## Connecting a repository to a container image using the command line

1. In your Dockerfile, add this line, replacing `OWNER` and `REPO` with your details:

   ```shell
   LABEL org.opencontainers.image.source=https://github.com/OWNER/REPO
   ```

   For example, if you're the user `octocat` and own `my-repo` you would add this line to your Dockerfile:

   ```shell
   LABEL org.opencontainers.image.source=https://github.com/octocat/my-repo
   ```

   For more information, see "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" in the official Docker documentation and "[Pre-defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" in the `opencontainers/image-spec` repository.

1. Build your container image. This example builds an image from the Dockerfile in the current directory and assigns the image name `hello_docker`.

   ```shell
   docker build -t hello_docker .
   ```

1. Optionally, review the details of the Docker image you just created.

   ```shell
   $ docker images
   > REPOSITORY          TAG         IMAGE ID       CREATED         SIZE
   > hello_docker        latest      142e665b1faa   5 seconds ago   125MB
   > redis               latest      afb5e116cac0   3 months ago    111MB
   > alpine              latest      a6215f271958   5 months ago    5.29MB
   ```

1. Assign a name and hosting destination to your Docker image.

   ```shell
   docker tag IMAGE_NAME ghcr.io/NAMESPACE/NEW_IMAGE_NAME:TAG
   ```

   Replace `NAMESPACE` with the name of the personal account or organization to which you want the package to be scoped.

   For example:

   ```shell
   docker tag 38f737a91f39 ghcr.io/octocat/hello_docker:latest
   ```

1. If you haven't already, authenticate to the Container registry. For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)."
   
   ```shell
   $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
   > Login Succeeded
   ```

1. Push your container image to the Container registry.

   ```shell
   docker push ghcr.io/NAMESPACE/IMAGE-NAME:TAG
   ```

   For example:

   ```shell
   docker push ghcr.io/octocat/hello_docker:latest
   ```
