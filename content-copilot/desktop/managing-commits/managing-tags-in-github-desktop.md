# Managing tags in GitHub Desktop

You can use GitHub Desktop to create, push, and view tags.

## About tags in GitHub Desktop

GitHub Desktop allows you to create annotated tags. Tags are associated with commits, so you can use a tag to mark an individual point in your repository's history, including a version number for a release. For more information about release tags, see "[AUTOTITLE](/repositories/releasing-projects-on-github/about-releases)."

By default, GitHub Desktop will push the tag that you create to your repository with the associated commit.

## Creating a tag

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Right-click the commit and click **Create Tag...**.

   ![Screenshot of a list of commits in the "History" tab. Next to a commit, in a context menu, the cursor hovers over the "Create Tag" option.](/assets/images/help/desktop/select-create-tag.png)
1. In the "Create a Tag" dialog window, type the name of the tag.
1. Click **Create Tag**.

## Viewing tags

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Click the commit.
   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: GitHub Desktop displays an arrow <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-arrow-up" aria-label="The up arrow icon" role="img"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg> if the tag has not been pushed to the remote repository.

   </div>

   ![Screenshot of a list of commits in the "History" tab. Next to a commit, a "hello-tag" label and an "up arrow" icon are outlined in orange.](/assets/images/help/desktop/viewing-tags-in-history.png)

1. All tags associated with the commit are visible in that commit's metadata.

   ![Screenshot of the detailed view of a commit. Above the commit's diff, in the commit's metadata, a tag icon and the label "hello-tag" are outlined in orange.](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Deleting tags

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: You can only delete tags associated with commits that have not yet been pushed.

</div>

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)
1. Right-click the commit.

   - If a commit has only one tag, click **Delete Tag TAG NAME**.
     ![Screenshot of a list of commits in the "History" tab. Next to a commit, in a context menu, the cursor hovers over an option labeled "Delete tag hello-tag".](/assets/images/help/desktop/select-delete-tag.png)
   - If a commit has multiple tags, hover over **Delete Tag...** and then click the tag that you want to delete.
     ![Screenshot of a context menu in the "History" tab. Next to "Delete tag", a second menu is expanded, and the cursor hovers over an option labeled "hello-tag".](/assets/images/help/desktop/delete-tag-multiple.png)

## Further reading

- "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation
