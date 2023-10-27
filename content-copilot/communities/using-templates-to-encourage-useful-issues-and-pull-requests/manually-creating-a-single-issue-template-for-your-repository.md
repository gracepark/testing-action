# Manually creating a single issue template for your repository

When you add a manually-created issue template to your repository, project contributors will automatically see the template's contents in the issue body.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

This is the legacy workflow to create an issue template. We recommend using the upgraded multiple issue template builder or issue forms to create issue templates. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

</div>

You can create an _ISSUE_TEMPLATE/_ subdirectory in any of the supported folders to contain multiple issue templates, and use the `template` query parameter to specify the template that will fill the issue body. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

You can add YAML frontmatter to each issue template to pre-fill the issue title, automatically add labels and assignees, and give the template a name and description that will be shown in the template chooser that people see when creating a new issue in your repository.

Here is example YAML front matter.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If a front matter value includes a YAML-reserved character such as `:` , you must put the whole value in quotes. For example, `":bug: Bug"` or `":new: triage needed, :bug: bug"`.

</div>

To be displayed with a <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Added" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> checkmark in the community profile checklist, issue templates must be located in the `.github/ISSUE_TEMPLATE` folder and contain valid `name:` and `about:` keys in the YAML frontmatter (for issue templates defined in `.md` files) or valid `name:` and `description:` keys (for issue forms defined in `.yml` files).

You can create default issue templates and a default configuration file for issue templates for your organization or personal account. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

## Adding an issue template

1. On GitHub.com, navigate to the main page of the repository.

1. Above the list of files, using the **Add file** drop-down, click **Create new file**.

1. In the file name field:
    - To make your issue template visible in the repository's root directory, type the name of your _issue_template_. For example, `issue_template.md`.
    - To make your issue template visible in the repository's `docs` directory, type _docs/_ followed by the name of your _issue_template_. For example, `docs/issue_template.md`,
    - To store your file in a hidden directory, type _.github/_ followed by the name of your _issue_template_. For example, `.github/issue_template.md`.
    - To create multiple issue templates and use the `template` query parameter to specify a template to fill the issue body, type _.github/ISSUE_TEMPLATE/_, then the name of your issue template. For example, `.github/ISSUE_TEMPLATE/issue_template.md`. You can also store multiple issue templates in an `ISSUE_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."
1. In the body of the new file, add your issue template. This could include:
    - YAML frontmatter
    - Expected behavior and actual behavior
    - Steps to reproduce the problem
    - Specifications like the version of the project, operating system, or hardware

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png) Templates are available to collaborators when they are merged into the repository's default branch.
1. Click **Commit changes** or **Propose changes**.

## Further reading

- "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)"
- "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
