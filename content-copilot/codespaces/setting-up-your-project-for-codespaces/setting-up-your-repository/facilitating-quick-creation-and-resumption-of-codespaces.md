# Facilitating quick creation and resumption of codespaces

You can add a link to take people straight to a page for creating a codespace, with your choice of options preconfigured. Alternatively you can link to the "Resume codespace" page.

## Overview

You can make it easy for people to work on your repository in a codespace by providing a link to the codespace creation page. One place you might want to do this is in the README file for your repository. For example, you can add the link to an "Open in GitHub Codespaces" badge.

![Screenshot of an "Open in GitHub Codespaces" badge on a README page.](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

The link to the codespace creation page can include specific configuration options to help people create an appropriate codespace. People who use the link will be able to choose different options, if they want, before creating the codespace. For information about the available options, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

Alternatively, you can link to the "Resume codespace" page, which provides a quick way for people to open a codespace they were working on recently.

## Creating a link to the codespace creation page for your repository

You can use these URLs to link to the codespace creation page for your repository. Replace the text in uppercase letters.

- Create a codespace for the default branch of the repository:
  `https://codespaces.new/OWNER/REPO-NAME`
- Create a codespace for a specific branch of the repository:
  `https://codespaces.new/OWNER/REPO-NAME/tree/BRANCH-NAME`
- Create a codespace for the topic branch of a pull request:
  `https://codespaces.new/OWNER/REPO-NAME/pull/PR-SHA`

### Configuring more options

You can use the "Share a deep link" option to configure more options for the codespace and build a custom URL, then copy a Markdown or HTML snippet for an "Open in GitHub Codespaces" badge.

1. On GitHub.com, navigate to the main page of the repository.
1. If you want to create a link for a branch other than the repository's default branch, under the repository name, click the button labeled with the name of the current branch. In the dropdown menu, select the branch for which you want to create a link.

   ![Screenshot of the expanded branch dropdown menu, listing various branches. The dropdown menu, labeled with a branch icon and "trunk," is highlighted with a dark orange outline.](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code** button, then click the **Codespaces** tab.
1. To open the "Share codespace configuration" window, at the top right of the **Codespaces** tab, select <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Codespace repository configuration" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>, then click **Share a deep link**.

   ![Screenshot of the options dropdown in the "Codespaces" tab. The "Share a deep link" option is highlighted with an orange outline.](/assets/images/help/codespaces/share-deep-link.png)

1. Optionally, to take users to a page where they can quickly resume a recent codespace or create a new one, select **Quick start**. For more information, see "[Creating a link to resume a codespace](#creating-a-link-to-resume-a-codespace)."
1. Optionally, to specify a dev container configuration, select **Configuration file**, then use the dropdown menu to choose a configuration. If you don't specify a configuration, the default configuration for your repository is used. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."
1. Under "Snippets," you can copy the URL you have built, or copy a Markdown or HTML snippet including an "Open in GitHub Codespaces" badge. To copy the URL or snippet, select between the **URL**, **HTML**, and **Markdown** tabs, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy text to the system clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.

   ![Screenshot of the "Share codespace configuration" window. Next to the "new codespace" URL, an icon of two overlapping squares is outlined in orange.](/assets/images/help/codespaces/copy-codespace-url.png)

## Creating a link to resume a codespace

You can create a link to a page for resuming your most recent codespace that matches the repository, branch, and other options specified in the URL.

Add `?quickstart=1` to a `codespaces.new` URL, such as the URLs listed in the previous section of this article. This produces a URL that displays a "Resume codespace" page.

For example, the URL `https://codespaces.new/octo-org/octo-repo?quickstart=1` opens a page to allow you to resume your most recent codespace for the default branch of the `octo-org/octo-repo` repository.

![Screenshot of the "Resume codespace" page showing the "Resume this codespace" and "Create a new one" buttons.](/assets/images/help/codespaces/resume-codespace.png)

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes**:

- If the `codespaces.new` URL already contains a query string, add `&quickstart=1` at the end of the query string.
- This type of URL will always open a codespace in the VS Code web client, even if this is not set as your default editor for GitHub Codespaces.

</div>

If no matching codespaces are found, the page is titled "Create codespace" and a button is displayed for creating a new codespace with matching parameters.

This type of URL is useful, for instance, in a README for your repository as it gives people a way of either creating a codespace, or resuming their codespace, in just a couple of clicks.

## Creating an "Open in GitHub Codespaces" badge

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You can use the "Share a deep link" option to create a Markdown or HTML snippet that includes an "Open in GitHub Codespaces" badge with a custom URL. For more information, see "[Configuring more options](#configuring-more-options)."

</div>

1. Get the URL to the codespace creation page, or the "Resume codespace" page, as described in the previous sections.
1. Add the following Markdown to, for example, the `README.md` file of your repository:

   ```markdown copy
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](URL)
   ```

   For example:

   ```markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/github/docs)
   ```

   The example Markdown is rendered like this:

   [![Open in GitHub Codespaces.](https://github.com/codespaces/badge.svg)](https://codespaces.new/github/docs)
