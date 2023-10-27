# Adding content to your GitHub Pages site using Jekyll

You can add a new page or post to your Jekyll site on GitHub Pages.

GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

People with write permissions for a repository can add content to a GitHub Pages site using Jekyll.

## About content in Jekyll sites

Before you can add content to a Jekyll site on GitHub Pages, you must create a Jekyll site. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)."

The main types of content for Jekyll sites are pages and posts. A page is for standalone content that isn't associated with a specific date, such as an "About" page. The default Jekyll site contains a file called `about.md`, which renders as a page on your site at `YOUR-SITE-URL/about`. You can edit the contents of that file to personalize your "About" page, and you can use the "About" page as a template to create new pages. For more information, see "[Pages](https://jekyllrb.com/docs/pages/)" in the Jekyll documentation.

A post is a blog post. The default Jekyll site contains a directory named `_posts` that contains a default post file. You can edit the contents of that post, and you can use the default post as a template to create new posts. For more information, see "[Posts](https://jekyllrb.com/docs/posts/)" in the Jekyll documentation.

Your theme includes default layouts, includes, and stylesheets that will automatically be applied to new pages and posts on your site, but you can override any of these defaults. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#themes)."

To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "[Front Matter](https://jekyllrb.com/docs/front-matter/)" in the Jekyll documentation.

Changes to your site are published automatically when the changes are merged into your site's publishing source. If you want to preview your changes first, you can make the changes locally instead of on GitHub. Then, test your site locally. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)."

## Adding a new page to your site

1. On GitHub, navigate to your site's repository.
1. Navigate to the publishing source for your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. In the root of your publishing source, create a new file for your page called `PAGE-NAME.md`, replacing PAGE-NAME with a meaningful filename for the page.
1. Add the following YAML frontmatter to the top of the file, replacing PAGE-TITLE with the page's title and URL-PATH with a path you want for the page's URL. For example, if the base URL of your site is `https://octocat.github.io` and your URL-PATH is `/about/contact/`, your page will be located at `https://octocat.github.io/about/contact`.

   ```shell
   layout: page
   title: "PAGE-TITLE"
   permalink: /URL-PATH
   ```

1. Below the frontmatter, add content for your page.

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."

1. If you have more than one email address associated with your account on GitHub.com, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address.  For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
1. Click **Commit changes** or **Propose changes**.
1. Create a pull request for your proposed changes.
1. In the "Pull Requests" list, click the pull request you would like to merge.
1. Click **Merge pull request**. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."
1. If prompted, type a commit message, or accept the default message.
1. Click **Confirm merge**.
1. Optionally, delete the branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."

## Adding a new post to your site

1. On GitHub, navigate to your site's repository.
1. Navigate to the publishing source for your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. Navigate to the `_posts` directory.
1. Create a new file called `YYYY-MM-DD-NAME-OF-POST.md`, replacing YYYY-MM-DD with the date of your post and NAME-OF-POST with the name of your post.
1. Add the following YAML frontmatter to the top of the file, including the post's title enclosed in quotation marks, the date and time for the post in YYYY-MM-DD hh:mm:ss -0000 format, and as many categories as you want for your post.

   ```shell
   layout: post
   title: "POST-TITLE"
   date: YYYY-MM-DD hh:mm:ss -0000
   categories: CATEGORY-1 CATEGORY-2
   ```

1. Below the frontmatter, add content for your post.

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."

1. If you have more than one email address associated with your account on GitHub.com, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address.  For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
1. Click **Commit changes** or **Propose changes**.
1. Create a pull request for your proposed changes.
1. In the "Pull Requests" list, click the pull request you would like to merge.
1. Click **Merge pull request**. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."
1. If prompted, type a commit message, or accept the default message.
1. Click **Confirm merge**.
1. Optionally, delete the branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."

Your post should now be up on your site! If the base URL of your site is `https://octocat.github.io`, then your new post will be located at `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

## Next steps

You can add a Jekyll theme to your GitHub Pages site to customize the look and feel of your site. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)."
