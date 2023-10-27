# Using submodules with GitHub Pages

You can use submodules with GitHub Pages to include other projects in your site's code.

GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

If the repository for your GitHub Pages site contains submodules, their contents will automatically be pulled in when your site is built.

You can only use submodules that point to public repositories, because the GitHub Pages server cannot access private repositories.

Use the `https://` read-only URL for your submodules, including nested submodules. You can make this change in your _.gitmodules_ file.

## Further reading

- "[Git Tools - Submodules](https://git-scm.com/book/en/Git-Tools-Submodules)" from the _Pro Git_ book
- "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
