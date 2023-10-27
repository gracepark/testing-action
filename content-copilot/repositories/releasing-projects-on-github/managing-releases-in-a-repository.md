# Managing releases in a repository

You can create releases to bundle and deliver iterations of a project to users.

**Who can use this feature**: Repository collaborators and people with write access to a repository can create, edit, and delete a release.
## About release management

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases. You can also create, modify, and delete releases by using the Releases API. For more information, see "[AUTOTITLE](/rest/releases/releases)" in the REST API documentation.

You can also publish an action from a specific release in GitHub Marketplace. For more information, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

You can choose whether Git Large File Storage (Git LFS) objects are included in the ZIP files and tarballs that GitHub creates for each release. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

## Creating a release

<div class="ghd-tool webui">

1. On GitHub.com, navigate to the main page of the repository.
1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)
1. At the top of the page, click **Draft a new release**.
1. To choose a tag for the release, select the **Choose a tag** dropdown menu.
   - To use an existing tag, click the tag.
   - To create a new tag, type a version number for your release, then click **Create new tag**.
1. If you created a new tag, select the **Target** dropdown menu, then click the branch that contains the project you want to release.

1. In the "Release title" field, type a title for your release.
1. In the "Describe this release" field, type a description for your release.
   If you @mention anyone in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
    Alternatively, you can automatically generate your release notes by clicking **Auto-generate release notes**.
1. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.
1. Optionally, to notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.
1. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create TAG
   ```

1. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the GitHub CLI manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```

If you @mention any GitHub users in the notes, the published release on GitHub.com will include a **Contributors** section with an avatar list of all the mentioned users.

</div>

## Editing a release

<div class="ghd-tool webui">

1. On GitHub.com, navigate to the main page of the repository.
1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)
1. Next to the release you want to edit, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>.

   ![Screenshot of a release in the releases list. A pencil icon is highlighted with an orange outline.](/assets/images/help/releases/edit-release-pencil.png)
1. Edit the details for the release in the form, then click **Update release**. If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.

</div>

<div class="ghd-tool cli">

Releases cannot currently be edited with GitHub CLI.

</div>

## Deleting a release

<div class="ghd-tool webui">

1. On GitHub.com, navigate to the main page of the repository.
1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)
1. On the right side of the page, next to the release you want to delete, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-label="Delete" role="img"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>.

   ![Screenshot of a release in the releases list. A trash icon is highlighted with an orange outline.](/assets/images/help/releases/delete-release-trash.png)
1. Click **Delete this release**.

</div>

<div class="ghd-tool cli">

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete TAG -y
   ```

</div>
