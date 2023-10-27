# Adding or editing wiki pages

You can add and edit wiki pages directly on GitHub or locally using the command line.

 Wikis are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Adding wiki pages

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-book" aria-hidden="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg> **Wiki**.

   ![Screenshot of the menu in a repository. The "Wiki" option is outlined in dark orange.](/assets/images/help/wiki/wiki-menu-link.png)
1. In the upper-right corner of the page, click **New Page**.
1. Optionally, to write in a format other than Markdown, use the "Edit mode" dropdown to choose a different format.

   ![Screenshot of the "Create new page" page. The "Edit mode" dropdown is outlined in dark orange.](/assets/images/help/wiki/wiki-edit-mode-dropdown.png)

1. Use the text editor to add your page's content.
1. In the "Edit message" field, type a commit message describing the new file you’re adding.
1. To commit your changes to the wiki, click **Save Page**.

## Editing wiki pages

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-book" aria-hidden="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg> **Wiki**.

   ![Screenshot of the menu in a repository. The "Wiki" option is outlined in dark orange.](/assets/images/help/wiki/wiki-menu-link.png)
1. Using the wiki sidebar on the right, navigate to the page you want to change. In the upper-right corner of the page, click **Edit**.
1. Use the text editor to edit the page's content.
1. In the "Edit message" field, type a commit message describing the new file you’re adding.
1. To commit your changes to the wiki, click **Save Page**.

## Adding or editing wiki pages locally

Wikis are part of Git repositories, so you can make changes locally and push them to your repository using a Git workflow.

### Cloning wikis to your computer

Every wiki provides an easy way to clone its contents down to your computer.
Once you've created an initial page on GitHub, you can clone the repository to your computer with the provided URL:

```shell
$ git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.wiki.git
# Clones the wiki locally
```

Once you have cloned the wiki, you can add new files, edit existing ones, and commit your changes. You and your collaborators can create branches when working on wikis, but only changes pushed to the default branch will be made live and available to your readers.

## About wiki filenames

The filename determines the title of your wiki page, and the file extension determines how your wiki content is rendered.

Wikis use [our open-source Markup library](https://github.com/github/markup) to convert the markup, and it determines which converter to use by a file's extension. For example, if you name a file _foo.md_ or _foo.markdown_, wiki will use the Markdown converter, while a file named _foo.textile_ will use the Textile converter.

Don't use the following characters in your wiki page's titles: `\ / : * ? " < > |`. Users on certain operating systems won't be able to work with filenames containing these characters. Be sure to write your content using a markup language that matches the extension, or your content won't render properly.
