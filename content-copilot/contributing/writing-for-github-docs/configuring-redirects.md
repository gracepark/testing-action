# Configuring redirects

If an article's title, version, or location changes, you can create a redirect to the current content.

Articles in the "Contributing to GitHub Docs" section refer to the documentation itself and are a resource for GitHub staff and open source contributors.

## About redirects

If a change is made to an article that affects people's ability to find it, we create a redirect from any outdated versions to the current content. We might need to do this if an article's title is changed, a new version is added, or the location of the file is changed.

Redirects can be configured locally or externally.

## Configuring local redirects

Within the GitHub Docs, you can redirect from one file to another or from one version to another.

### Redirects across files

If you change the name of an article and want its old URL to redirect to its new URL, use the `redirect_from` frontmatter with the path to the article's old name.

In the following example, the article "All about commits" was renamed to "Creating your first commit." The `redirect_from` frontmatter redirects anyone who navigates to the old article URL to the new article URL.

```yaml
title: Creating your first commit
redirect_from:
  - /content/get-started/all-about-commits
```

See [`redirect_from`](https://github.com/github/docs/blob/main/content/README.md#redirect_from) in the GitHub Docs README file for more details.

### Automatic redirects for URLs that do not include a version

If a URL for a page is entered without a version (`https://docs.github.com/ARTICLE` instead of `https://docs.github.com/VERSION/ARTICLE`), the site will automatically redirect it to the first available version of the page.

The order of precedence is specified in [`lib/all-versions.js`](https://github.com/github/docs/blob/main/src/versions/lib/all-versions.js). The current order of precedence is:

1. GitHub Free, GitHub Pro, or GitHub Team (`fpt`)
1. GitHub Enterprise Cloud (`ghec`)
1. GitHub Enterprise Server (`ghes`)
1. GitHub AE (`ghae`)

If a page titled `ARTICLE` is only available in GitHub Enterprise Cloud and GitHub Enterprise Server, the link `https://docs.github.com/ARTICLE` will automatically redirect to `https://docs.github.com/enterprise-cloud@latest/ARTICLE` because GitHub Enterprise Cloud has precedence over GitHub Enterprise Server.

If `ARTICLE` is available in Free, Pro, or Team, no redirect will occur because `fpt` pages do not have a version segment, so the `fpt` content at `https://docs.github.com/ARTICLE` will render.

### Redirects across versions

If you want the URL for one version of an article to redirect to a URL for another version, you must update the [redirect-exceptions.txt](https://github.com/github/docs/blob/main/src/redirects/lib/static/redirect-exceptions.txt) file in the `src/redirects` directory.

For example, if you remove the Free, Pro, or Team (`fpt`) version of an article, the URL will automatically redirect to the next available version of the page. If you want it to redirect to a version that is lower in the order of precedence, or to a different page entirely, you must specify an exception.

Each entry in the `redirect-exceptions` file should start with the path you want to redirect _to_, including the version, followed by an unordered list of the paths you want to redirect _from_. In the following example, the paths in the unordered list will redirect to the GitHub Enterprise Cloud version of "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)."

```text
/enterprise-cloud@latest/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
  - /enterprise-server@3.3/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
  - /enterprise-server@3.4/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
  - /enterprise-server@3.5/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
```

## Configuring external redirects

Rarely, content will move outside the GitHub Docs site. For these types of redirects, update the [`external-sites.json`](https://github.com/github/docs/blob/main/src/redirects/lib/external-sites.json) file in the `src/redirects` directory.

Each entry in the `external-sites.json` file is a key value pair where the key is the path to where the content was and the value is the path to where it should redirect.

```json
  "/github-status": "https://www.githubstatus.com/",
  "/articles/github-security": "https://github.com/security",
```
