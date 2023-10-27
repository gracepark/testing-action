# Adding a theme to your GitHub Pages site using Jekyll

You can personalize your Jekyll site by adding and customizing a theme.

GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

People with write permissions for a repository can add a theme to a GitHub Pages site using Jekyll.

Changes to your site are published automatically when the changes are merged into your site's publishing source. If you want to preview your changes first, you can make the changes locally instead of on GitHub. Then, test your site locally. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)."

## Adding a theme

1. On GitHub, navigate to your site's repository.
1. Navigate to the publishing source for your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. Navigate to __config.yml_.
1. In the upper right corner of the file view, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> to open the file editor.

   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/enterprise/repository/edit-file-edit-button.png)

1. Add a new line to the file for the theme name.
   - To use a supported theme, type `theme: THEME-NAME`, replacing _THEME-NAME_ with the name of the theme as shown in the README of the theme's repository. For a list of supported themes, see "[Supported themes](https://pages.github.com/themes/)" on the GitHub Pages site. For example, to select the Minima theme, type `theme: minima`.
   - To use any other Jekyll theme hosted on GitHub, type `remote_theme: THEME-NAME`, replacing THEME-NAME with the name of the theme as shown in the README of the theme's repository.

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."

1. If you have more than one email address associated with your account on GitHub.com, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address.  For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
1. Click **Commit changes** or **Propose changes**.

## Customizing your theme's CSS

These instructions work best with themes that are officially supported by GitHub Pages. For a complete list of supported themes, see "[Supported themes](https://pages.github.com/themes/)" on the GitHub Pages site.

Your theme's source repository may offer some help in customizing your theme. For example, see [Minima's README](https://github.com/jekyll/minima#customizing-templates).

1. On GitHub, navigate to your site's repository.
1. Navigate to the publishing source for your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. Create a new file called _/assets/css/style.scss_.
1. Add the following content to the top of the file:

   ```scss
   ---
   ---

   @import "{{ site.theme }}";
   ```

1. Add any custom CSS or Sass (including imports) you'd like immediately after the `@import` line.

## Customizing your theme's HTML layout

These instructions work best with themes that are officially supported by GitHub Pages. For a complete list of supported themes, see "[Supported themes](https://pages.github.com/themes/)" on the GitHub Pages site.

Your theme's source repository may offer some help in customizing your theme. For example, see [Minima's README](https://github.com/jekyll/minima#customizing-templates).

1. On GitHub, navigate to your theme's source repository. For example, the source repository for Minima is https://github.com/jekyll/minima.
1. In the __layouts_ folder, navigate to your theme's _default.html_ file.
1. Copy the contents of the file.
1. On GitHub, navigate to your site's repository.
1. Navigate to the publishing source for your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. Create a file called __layouts/default.html_.
1. Paste the default layout content you copied earlier.
1. Customize the layout as you'd like.

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)"
