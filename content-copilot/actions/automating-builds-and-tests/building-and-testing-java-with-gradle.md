# Building and testing Java with Gradle

You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Gradle.

## Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Gradle build system. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to  upload artifacts from a workflow run.

GitHub-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Gradle. For a list of software and the pre-installed versions for JDK and Gradle, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".

## Prerequisites

You should be familiar with YAML and the syntax for GitHub Actions. For more information, see:
- "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)"
- "[AUTOTITLE](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Gradle framework. For more information, see the [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html).

## Using a Gradle starter workflow

To get started quickly, add a starter workflow to the `.github/workflows` directory of your repository.

GitHub provides a starter workflow for Gradle that should work for most Java with Gradle projects. The subsequent sections of this guide give examples of how you can customize this starter workflow.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

1. If you already have a workflow in your repository, click **New workflow**.
1. The "Choose a workflow template" page shows a selection of recommended starter workflows. Search for "Java with Gradle".
1. On the "Java with Gradle" workflow, click **Set up this workflow**.

1. Edit the workflow as required. For example, change the Java version.

      <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">
   
   **Notes**:
   
   - This starter workflow contains an action that is not certified by GitHub. Actions provided by third parties are governed by separate terms of service, privacy policy, and support documentation.
   - If you use actions from third parties you should use a version specified by a commit SHA. If the action is revised and you want to use the newer version, you will need to update the SHA. You can specify a version by referencing a tag or a branch, however the action may change without warning. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)."
   
   </div>

1. Click **Commit changes**.

   The `gradle.yml` workflow file is added to the `.github/workflows` directory of your repository.

### Specifying the Java version and architecture

The starter workflow sets up the `PATH` to contain OpenJDK 8 for the x64 platform. If you want to use a different version of Java, or target a different architecture (`x64` or `x86`), you can use the `setup-java` action to choose a different Java runtime environment.

For example, to use version 11 of the JDK provided by Adoptium for the x64 platform, you can use the `setup-java` action and configure the `java-version`, `distribution` and `architecture` parameters to `'11'`, `'temurin'` and `x64`.

```yaml copy
steps:
  - uses: actions/checkout@v4
  - name: Set up JDK 11 for x64
    uses: actions/setup-java@v3
    with:
      java-version: '11'
      distribution: 'temurin'
      architecture: x64
```

For more information, see the [`setup-java`](https://github.com/actions/setup-java) action.

## Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the `build` task by default. In the default Gradle configuration, this command will download dependencies, build classes, run tests, and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to use a different task, you can specify those. For example, you may want to run the `package` task that's configured in your _ci.gradle_ file.

```yaml copy
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-java@v3
    with:
      java-version: '17'
      distribution: 'temurin'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@ccb4328a959376b642e027874838f60f8e596de3
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@749f47bda3e44aa060e82d7b3ef7e40d953bd629
    with:
      arguments: -b ci.gradle package
```

## Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

Gradle will usually create output files like JARs, EARs, or WARs in the `build/libs` directory. You can upload the contents of that directory using the `upload-artifact` action.

```yaml copy
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-java@v3
    with:
      java-version: '17'
      distribution: 'temurin'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@ccb4328a959376b642e027874838f60f8e596de3
  - name: Build with Gradle
    uses: gradle/gradle-build-action@749f47bda3e44aa060e82d7b3ef7e40d953bd629
    with:
      arguments: build
  - uses: actions/upload-artifact@v3
    with:
      name: Package
      path: build/libs
```
