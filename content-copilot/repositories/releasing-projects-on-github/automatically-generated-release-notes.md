# Automatically generated release notes

You can automatically generate release notes for your GitHub releases

**Who can use this feature**: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.

## About automatically generated release notes

Automatically generated release notes provide an automated alternative to manually writing release notes for your GitHub releases. With automatically generated release notes, you can quickly generate an overview of the contents of a release. Automatically generated release notes include a list of merged pull requests, a list of contributors to the release, and a link to a full changelog.

You can also customize your automated release notes, using labels to create custom categories to organize pull requests you want to include, and exclude certain labels and users from appearing in the output.

## Creating automatically generated release notes for a new release

1. On GitHub.com, navigate to the main page of the repository.
1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)
1. At the top of the page, click **Draft a new release**.
1. To choose a tag for the release, select the **Choose a tag** dropdown menu.
   - To use an existing tag, click the tag.
   - To create a new tag, type a version number for your release, then click **Create new tag**.
1. If you created a new tag, select the **Target** dropdown menu, then click the branch that contains the project you want to release.

1. In the "Release title" field, type a title for your release.
1. Above the description field, click **Auto-generate release notes**.
1. Check the generated notes to ensure they include all (and only) the information you want to include.
1. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.
1. Optionally, to notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.
1. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

## Configuring automatically generated release notes

1. On GitHub.com, navigate to the main page of the repository.

1. Above the list of files, using the **Add file** drop-down, click **Create new file**.

1. In the file name field, type `.github/release.yml`. This will create a new file called `release.yml` in the `.github` directory.
1. In the file, using the configuration options below, specify in YAML the pull request labels and authors you want to exclude from this release. You can also create new categories and list the pull request labels to be included in each of them.

### Configuration options

| Parameter | Description |
| :- | :- |
| `changelog.exclude.labels` | A list of labels that exclude a pull request from appearing in release notes. |
| `changelog.exclude.authors` | A list of user or bot login handles whose pull requests are to be excluded from release notes. |
| `changelog.categories[*].title` | **Required.** The title of a category of changes in release notes. |
| `changelog.categories[*].labels`| **Required.** Labels that qualify a pull request for this category. Use `*` as a catch-all for pull requests that didn't match any of the previous categories. |
| `changelog.categories[*].exclude.labels` | A list of labels that exclude a pull request from appearing in this category. |
| `changelog.categories[*].exclude.authors` | A list of user or bot login handles whose pull requests are to be excluded from this category. |

### Example configurations

A configuration for a repository that labels semver releases

```yaml copy
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```

A configuration for a repository that doesn't tag pull requests but where we want to separate out Dependabot automated pull requests in release notes (`labels: '*'` is required to display a catchall category)

```yaml copy
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```

## Further reading

- "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)"
