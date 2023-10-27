# Quickstart for writing on GitHub

Learn advanced formatting features by creating a README for your GitHub profile.

## Introduction

Markdown is an easy-to-read, easy-to-write language for formatting plain text. You can use Markdown syntax, along with some additional HTML tags, to format your writing on GitHub, in places like repository READMEs and comments on pull requests and issues. In this guide, you'll learn some advanced formatting features by creating or editing a README for your GitHub profile.

If you're new to Markdown, you might want to start with "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" or the [Communicate using Markdown](https://github.com/skills/communicate-using-markdown) GitHub Skills course.

If you already have a profile README, you can follow this guide by adding some features to your existing README, or by creating a gist with a Markdown file called something like `about-me.md`. For more information, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)."

## Creating or editing your profile README

Your profile README lets you share information about yourself with the community on GitHub.com. The README is displayed at the top of your profile page.

If you don't already have a profile README, you can add one.

1. Create a repository with the same name as your GitHub username, initializing the repository with a `README.md` file. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)."
1. Edit the `README.md` file and delete the template text (beginning `### Hi there`) that is automatically added when you create the file.

If you already have a profile README, you can edit it from your profile page.

1. In the upper-right corner of any GitHub page, click your profile photo, then click **Your profile**.
1. Click the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit this file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> next to your profile README.

   ![Screenshot of @octocat's profile README. A pencil icon is outlined in dark orange.](/assets/images/help/profile/edit-profile-readme.png)

## Adding an image to suit your visitors

You can include images in your communication on GitHub. Here, you'll add a responsive image, such as a banner, to the top of your profile README.

By using the HTML `<picture>` element with the `prefers-color-scheme` media feature, you can add an image that changes depending on whether a visitor is using light or dark mode. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)."

1. Copy and paste the following markup into your `README.md` file.

   ```html copy
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```

1. Replace the placeholders in the markup with the URLs of your chosen images. Alternatively, to try the feature first, you can copy the URLs from our example below.

   - Replace `YOUR-DARKMODE-IMAGE` with the URL of an image to display for visitors using dark mode.
   - Replace `YOUR-LIGHTMODE-IMAGE` with the URL of an image to display for visitors using light mode.
   - Replace `YOUR-DEFAULT-IMAGE` with the URL of an image to display in case neither of the other images can be matched, for example if the visitor is using a browser that does not support the `prefers-color-scheme` feature.
1. To make the image accessible for visitors who are using a screen reader, replace `YOUR-ALT-TEXT` with a description of the image.
1. To check the image has rendered correctly, click the **Preview** tab.

For more information on using images in Markdown, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)."

### Example of a responsive image

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>
```

### How the image looks

![Screenshot of the "Preview" tab of a GitHub comment, in light mode. An image of a smiling sun fills the box.](/assets/images/help/writing/lightmode-image-example.png)

## Adding a table

You can use Markdown tables to organize information. Here, you'll use a table to introduce yourself by ranking something, such as your most-used programming languages or frameworks, the things you're spending your time learning, or your favorite hobbies. When a table column contains numbers, it's useful to right-align the column by using the syntax `--:` below the header row.

1. Return to the **Edit file** tab.
1. To introduce yourself, two lines below the `</picture>` tag, add an `## About me` header and a short paragraph about yourself, like the following.

   ```markdown
   ## About me

   Hi, I'm Mona. You might recognize me as GitHub's mascot.
   ```

1. Two lines below this paragraph, insert a table by copying and pasting the following markup.

   ```markdown copy
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```

1. In the column on the right, replace `THING-TO-RANK` with "Languages," "Hobbies," or anything else, and fill in the column with your list of things.
1. To check the table has rendered correctly, click the **Preview** tab.

For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)."

### Example of a table

```markdown
## About me

Hi, I'm Mona. You might recognize me as GitHub's mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### How the table looks

![Screenshot of the "Preview" tab of a GitHub comment. Under the "About me" heading is a rendered table with a ranked list of languages.](/assets/images/help/writing/markdown-table-example.png)

## Adding a collapsed section

To keep your content tidy, you can use the `<details>` tag to create an expandible collapsed section.

1. To create a collapsed section for the table you created, wrap your table in `<details>` tags like in the following example.

   ```html copy
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```

1. Between the `<summary>` tags, replace `THINGS-TO-RANK` with whatever you ranked in your table.
1. Optionally, to make the section display as open by default, add the `open` attribute to the `<details>` tag.

   ```html
   <details open>
   ```

1. To check the collapsed section has rendered correctly, click the **Preview** tab.

### Example of a collapsed section

```html
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |

</details>
```

### How the collapsed section looks

![Screenshot of the "Preview" tab of a comment. To the left of the words "Top languages" is an arrow indicating that the section can be expanded.](/assets/images/help/writing/collapsed-section-example.png)

## Adding a quote

Markdown has many other options for formatting your content. Here, you'll add a horizontal rule to divide your page and a blockquote to format your favorite quote.

1. At the bottom of your file, two lines below the `</details>` tag, add a horizontal rule by typing three or more dashes.

   ```markdown
   ---
   ```

1. Below the `---` line, add a quote by typing markup like the following.

   ```markdown
   > QUOTE
   ```

   Replace `QUOTE` with a quote of your choice. Alternatively, copy the quote from our example below.
1. To check everything has rendered correctly, click the **Preview** tab.

### Example of a quote

```markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### How the quote looks

![Screenshot of the "Preview" tab of a GitHub comment. A quote is indented below a thick horizontal line.](/assets/images/help/writing/markdown-quote-example.png)

## Adding a comment

You can use HTML comment syntax to add a comment that will be hidden in the output. Here, you'll add a comment to remind yourself to update your README later.

1. Two lines below the `## About me` header, insert a comment by using the following markup.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>

   Replace `COMMENT` with a "to-do" item you remind yourself to do something later (for example, to add more items to the table).
1. To check your comment is hidden in the output, click the **Preview** tab.

### Example of a comment

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## Saving your work

When you're happy with your changes, save your profile README by clicking **Commit changes**.

Committing directly to the `main` branch will make your changes visible to any visitor on your profile. If you want to save your work but aren't ready to make it visible on your profile, you can select **Create a new branch for this commit and start a pull request**.

## Next steps

- Continue to learn about advanced formatting features. For example, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)" and "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)."
- Use your new skills as you communicate across GitHub, in issues, pull requests, and discussions. For more information, see "[AUTOTITLE](/get-started/quickstart/communicating-on-github)."
