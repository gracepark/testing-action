# Publishing Java packages with Maven

You can use Maven to publish Java packages to a registry as part of your continuous integration (CI) workflow.

## Introduction

This guide shows you how to create a workflow that publishes Java packages to GitHub Packages and the Maven Central Repository. With a single workflow, you can publish packages to a single repository or to multiple repositories.

## Prerequisites

We recommend that you have a basic understanding of workflow files and configuration options. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

For more information about creating a CI workflow for your Java project with Maven, see "[AUTOTITLE](/actions/automating-builds-and-tests/building-and-testing-java-with-maven)."

You may also find it helpful to have a basic understanding of the following:

- "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[AUTOTITLE](/actions/learn-github-actions/variables)"
- "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)"
- "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)"

## About package configuration

The `groupId` and `artifactId` fields in the _pom.xml_ file create a unique identifier for your package that registries use to link your package to a registry.  For more information see [Guide to uploading artifacts to the Central Repository](https://maven.apache.org/repository/guide-central-repository-upload.html) in the Apache Maven documentation.

The _pom.xml_ file also contains configuration for the distribution management repositories that Maven will deploy packages to. Each repository must have a name and a deployment URL. Authentication for these repositories can be configured in the _.m2/settings.xml_ file in the home directory of the user running Maven.

You can use the `setup-java` action to configure the deployment repository as well as authentication for that repository. For more information, see [`setup-java`](https://github.com/actions/setup-java).

## Publishing packages to the Maven Central Repository

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to the Maven Central Repository if CI tests pass. For more information on the `release` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#release)."

In this workflow, you can use the `setup-java` action. This action installs the given version of the JDK into the `PATH`, but it also configures a Maven _settings.xml_ for publishing packages. By default, the settings file will be configured for GitHub Packages, but it can be configured to deploy to another package registry, such as the Maven Central Repository. If you already have a distribution management repository configured in _pom.xml_, then you can specify that `id` during the `setup-java` action invocation.

For example, if you were deploying to the Maven Central Repository through the OSSRH hosting project, your _pom.xml_ could specify a distribution management repository with the `id` of `ossrh`.

```xml copy
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```

With this configuration, you can create a workflow that publishes your package to the Maven Central Repository by specifying the repository management `id` to the `setup-java` action. You’ll also need to provide environment variables that contain the username and password to authenticate to the repository.

In the deploy step, you’ll need to set the environment variables to the username that you authenticate with to the repository, and to a secret that you’ve configured with the password or token to authenticate with.  For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

```yaml copy
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Maven Central Repository
        uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'temurin'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```

This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Sets up the Java JDK, and also configures the Maven _settings.xml_ file to add authentication for the `ossrh` repository using the `MAVEN_USERNAME` and `MAVEN_PASSWORD` environment variables.
1. Runs the `mvn --batch-mode deploy` command to publish to the `ossrh` repository. The `MAVEN_USERNAME` environment variable will be set with the contents of your `OSSRH_USERNAME` secret, and the `MAVEN_PASSWORD` environment variable will be set with the contents of your `OSSRH_TOKEN` secret.

   For more information about using secrets in your workflow, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

## Publishing packages to GitHub Packages

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to GitHub Packages if CI tests pass. For more information on the `release` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#release)."

In this workflow, you can use the `setup-java` action. This action installs the given version of the JDK into the `PATH`, and also sets up a Maven _settings.xml_ for publishing the package to GitHub Packages. The generated _settings.xml_ defines authentication for a server with an `id` of `github`, using the `GITHUB_ACTOR` environment variable as the username and the `GITHUB_TOKEN` environment variable as the password. The `GITHUB_TOKEN` environment variable is assigned the value of the special `GITHUB_TOKEN` secret.

The `GITHUB_TOKEN` secret is set to an access token for the repository each time a job in a workflow begins. You should set the permissions for this access token in the workflow file to grant read access for the `contents` scope and write access for the `packages` scope. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

For a Maven-based project, you can make use of these settings by creating a distribution repository in your _pom.xml_ file with an `id` of `github` that points to your GitHub Packages endpoint.

For example, if your organization is named "octocat" and your repository is named "hello-world", then the GitHub Packages configuration in _pom.xml_ would look similar to the below example.

```xml copy
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```

With this configuration, you can create a workflow that publishes your package to GitHub Packages by making use of the automatically generated _settings.xml_.

```yaml copy
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'temurin'
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Sets up the Java JDK, and also automatically configures the Maven _settings.xml_ file to add authentication for the `github` Maven repository to use the `GITHUB_TOKEN` environment variable.
1. Runs the `mvn --batch-mode deploy` command to publish to GitHub Packages. The `GITHUB_TOKEN` environment variable will be set with the contents of the `GITHUB_TOKEN` secret. The `permissions` key specifies the access granted to the `GITHUB_TOKEN`.

   For more information about using secrets in your workflow, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

## Publishing packages to the Maven Central Repository and GitHub Packages

You can publish your packages to both the Maven Central Repository and GitHub Packages by using the `setup-java` action for each registry.

Ensure your _pom.xml_ file includes a distribution management repository for both your GitHub repository and your Maven Central Repository provider. For example, if you deploy to the Central Repository through the OSSRH hosting project, you might want to specify it in a distribution management repository with the `id` set to `ossrh`, and you might want to specify GitHub Packages in a distribution management repository with the `id` set to `github`.

```yaml copy
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - name: Set up Java for publishing to Maven Central Repository
        uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'temurin'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
      - name: Set up Java for publishing to GitHub Packages
        uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'temurin'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This workflow calls the `setup-java` action twice.  Each time the `setup-java` action runs, it overwrites the Maven _settings.xml_ file for publishing packages.  For authentication to the repository, the _settings.xml_ file references the distribution management repository `id`, and the username and password.

This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Calls `setup-java` the first time. This configures the Maven _settings.xml_ file for the `ossrh` repository, and sets the authentication options to environment variables that are defined in the next step.
1. Runs the `mvn --batch-mode deploy` command to publish to the `ossrh` repository. The `MAVEN_USERNAME` environment variable will be set with the contents of your `OSSRH_USERNAME` secret, and the `MAVEN_PASSWORD` environment variable will be set with the contents of your `OSSRH_TOKEN` secret.
1. Calls `setup-java` the second time. This automatically configures the Maven _settings.xml_ file for GitHub Packages.
1. Runs the `mvn --batch-mode deploy` command to publish to GitHub Packages. The `GITHUB_TOKEN` environment variable will be set with the contents of the `GITHUB_TOKEN` secret. The `permissions` key specifies the access granted to the `GITHUB_TOKEN`.

   For more information about using secrets in your workflow, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."