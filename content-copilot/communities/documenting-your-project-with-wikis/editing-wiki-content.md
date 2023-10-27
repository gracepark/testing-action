# Editing wiki content

You can add images and links to content in your wiki, and use some supported MediaWiki formats.

 Wikis are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Adding links

You can create links in wikis using the standard markup supported by your page, or using MediaWiki syntax. For example:

- If your pages are rendered with Markdown, the link syntax is `[Link Text](full-URL-of-wiki-page)`.
- With MediaWiki syntax, the link syntax is `[[Link Text|nameofwikipage]]`.

## Adding images

Wikis can display PNG, JPEG, and GIF images.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-book" aria-hidden="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg> **Wiki**.

   ![Screenshot of the menu in a repository. The "Wiki" option is outlined in dark orange.](/assets/images/help/wiki/wiki-menu-link.png)
1. Using the wiki sidebar, navigate to the page you want to change, and then click **Edit**.
1. In the wiki toolbar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-image" aria-hidden="true"><path d="M16 13.25A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75ZM1.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h.94l.03-.03 6.077-6.078a1.75 1.75 0 0 1 2.412-.06L14.5 10.31V2.75a.25.25 0 0 0-.25-.25Zm12.5 11a.25.25 0 0 0 .25-.25v-.917l-4.298-3.889a.25.25 0 0 0-.344.009L4.81 13.5ZM7 6a2 2 0 1 1-3.999.001A2 2 0 0 1 7 6ZM5.5 6a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"></path></svg>.

   ![Screenshot of the toolbar on the edit page of the wiki. The icon to add an image is outlined in dark orange.](/assets/images/help/wiki/wiki-add-image.png)

1. In the "Insert Image" dialog box, type the image URL and the alt text (which is used by search engines and screen readers).
1. Click **OK**.

### Linking to images in a repository

You can link to an image in a repository on GitHub by copying the URL in your browser and using that as the path to the image. For example, embedding an image in your wiki using Markdown might look like this:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

## Adding mathematical expressions and diagrams

## Supported MediaWiki formats

No matter which markup language your wiki page is written in, certain MediaWiki syntax will always be available to you.
- Links ([except AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Horizontal rules via `---`
- Shorthand symbol entities (such as `&delta;` or `&euro;`)

For security and performance reasons, some syntaxes are unsupported.
- [Transclusion](https://www.mediawiki.org/wiki/Transclusion)
- Definition lists
- Indentation
- Table of contents
