# About GitHub Pages

You can use GitHub Pages to host a website about yourself, your organization, or your project directly from a repository on GitHub.com.

GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## About GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website. You can see examples of GitHub Pages sites in the [GitHub Pages examples collection](https://github.com/collections/github-pages-examples).

You can host your site on GitHub's `github.io` domain or your own custom domain. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site)."

You can create GitHub Pages sites that are publicly available on the internet. Organizations that use GitHub Enterprise Cloud can also publish sites privately by managing access control for the site.
 For more information, see "[Changing the visibility of your GitHub Pages site](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)" in the GitHub Enterprise Cloud documentation.

To get started, see "[AUTOTITLE](/pages/getting-started-with-github-pages/creating-a-github-pages-site)."

Organization owners can disable the publication of GitHub Pages sites from the organization's repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

## Types of GitHub Pages sites

There are three types of GitHub Pages sites: project, user, and organization. Project sites are connected to a specific project hosted on GitHub, such as a JavaScript library or a recipe collection. User and organization sites are connected to a specific account on GitHub.com.

To publish a user site, you must create a repository owned by your personal account that's named `<username>.github.io`. To publish an organization site, you must create a repository owned by an organization that's named `<organization>.github.io`. Unless you're using a custom domain, user and organization sites are available at `http(s)://<username>.github.io` or `http(s)://<organization>.github.io`.

The source files for a project site are stored in the same repository as their project. Unless you're using a custom domain, project sites are available at `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`.

For more information about how custom domains affect the URL for your site, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)."

You can only create one user or organization site for each account on GitHub. Project sites, whether owned by an organization or a personal account, are unlimited.

## Publishing sources for GitHub Pages sites

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: GitHub Pages sites are publicly available on the internet, even if the repository for the site is private. If you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

</div>

Your GitHub Pages site will publish whenever changes are pushed to a specific branch. You can specify which branch and folder to use as your publishing source. The source branch can be any branch in your repository, and the source folder can either be the root of the repository (`/`) on the source branch or a `/docs` folder on the source branch. Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site.

For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

## Static site generators

GitHub Pages publishes any static files that you push to your repository. You can create your own static files or use a static site generator to build your site for you. You can also customize your own build process locally or on another server.

We recommend Jekyll, a static site generator with built-in support for GitHub Pages and a simplified build process. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)."

GitHub Pages will use Jekyll to build your site by default. If you want to use a static site generator other than Jekyll, disable the Jekyll build process by creating an empty file called `.nojekyll` in the root of your publishing source, then follow your static site generator's instructions to build your site locally.

GitHub Pages does not support server-side languages such as PHP, Ruby, or Python.

## Limits on use of GitHub Pages

GitHub Pages sites created after June 15, 2016, and using `github.io` domains are served over HTTPS. If you created your site before June 15, 2016, you can enable HTTPS support for traffic to your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)."

### Prohibited uses

GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers.

In addition, your use of GitHub Pages is subject to the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service), including the restrictions on get-rich-quick schemes, sexually obscene content, and violent or threatening content or activity.

### Educational exercises

Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited. However, in addition to complying with the the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service), you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes.

### Usage limits

GitHub Pages sites are subject to the following usage limits:

- GitHub Pages source repositories have a recommended limit of 1 GB. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github#file-and-repository-size-limitations)"
- Published GitHub Pages sites may be no larger than 1 GB.
- GitHub Pages deployments will timeout if they take longer than 10 minutes.

- GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month.
- GitHub Pages sites have a _soft_ limit of 10 builds per hour.
- In order to provide consistent quality of service for all GitHub Pages sites, rate limits may apply. These rate limits are not intended to interfere with legitimate uses of GitHub Pages. If your request triggers rate limiting, you will receive an appropriate response with an HTTP status code of `429`, along with an informative HTML body.

If your site exceeds these usage quotas, we may not be able to serve your site, or you may receive a polite email from GitHub Support suggesting strategies for reducing your site's impact on our servers, including putting a third-party content distribution network (CDN) in front of your site, making use of other GitHub features such as releases, or moving to a different hosting service that might better fit your needs.

## MIME types on GitHub Pages

A MIME type is a header that a server sends to a browser, providing information about the nature and format of the files the browser requested. GitHub Pages supports more than 750 MIME types across thousands of file extensions. The list of supported MIME types is generated from the [mime-db project](https://github.com/jshttp/mime-db).

While you can't specify custom MIME types on a per-file or per-repository basis, you can add or modify MIME types for use on GitHub Pages. For more information, see [the mime-db contributing guidelines](https://github.com/jshttp/mime-db#adding-custom-media-types).

## Data collection

When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not. For more information about GitHub's security practices, see [GitHub Privacy Statement](/site-policy/privacy-policies/github-privacy-statement).

## Further reading

- [GitHub Pages](https://github.com/skills/github-pages) on GitHub Skills
- "[AUTOTITLE](/rest/repos#pages)"
