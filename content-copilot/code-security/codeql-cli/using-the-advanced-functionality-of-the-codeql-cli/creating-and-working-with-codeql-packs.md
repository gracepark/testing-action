# Creating and working with CodeQL packs

You can use CodeQL packs to create, share, depend on, and run CodeQL queries and libraries.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The CodeQL package management functionality, including CodeQL packs, is currently available as a beta release and is subject to change. During the beta release, CodeQL packs are available only using GitHub Packages - the Container registry. To use this beta functionality, install the latest version of the CodeQL CLI bundle from: https://github.com/github/codeql-action/releases.

</div>

## About CodeQL packs and the CodeQL CLI

CodeQL packs are used to create, share, depend on, and run CodeQL queries and libraries. CodeQL packs contain queries, library files, query suites, and metadata. With CodeQL packs and the package management commands in the CodeQL CLI, you can publish your custom queries and integrate them into your codebase analysis.

There are two types of CodeQL packs:  query packs and library packs.

- Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and a compilation cache. This ensures consistent and efficient execution of the queries in the pack.

- Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled and there is no compilation cache included when the pack is published.

You can use the `pack` command in the CodeQL CLI to create CodeQL packs, add dependencies to packs, and install or update dependencies. You can also publish and download CodeQL packs using the `pack` command. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)."

The standard CodeQL packages for all supported languages are published in the [Container registry](https://github.com/orgs/codeql/packages). The [CodeQL repository](https://github.com/github/codeql) contains source files for the standard CodeQL packs for all supported languages. The core query packs, which are included in the CodeQL CLI bundle, but you can otherwise download, are:

  - `codeql/cpp-queries`
  - `codeql/csharp-queries`
  - `codeql/go-queries`
  - `codeql/java-queries`
  - `codeql/javascript-queries`
  - `codeql/python-queries`
  - `codeql/ruby-queries`

## CodeQL pack structure

A CodeQL pack must contain a file called `qlpack.yml` in its root directory. In the `qlpack.yml` file, the `name:` field must have a value that follows the format of `<scope>/<pack>`, where `<scope>` is the GitHub organization or user account that the pack will be published to and `<pack>` is the name of the pack. Additionally, query packs and library packs with CodeQL tests contain a `codeql-pack.lock.yml` file that contains the resolved dependencies of the pack. This file is generated during a call to the `codeql pack install` command, is not meant to be edited by hand, and should be added to your version control system.

The other files and directories within the pack should be logically organized. For example, typically:

- Queries are organized into directories for specific categories.

- Queries for specific products, libraries, and frameworks are organized into
their own top-level directories.

## Creating a CodeQL pack

You can create a CodeQL pack by running the following command from the checkout root of your project:

```shell
codeql pack init <scope>/<pack>
```

You must specify:

- `<scope>`: the name of the GitHub organization or user account that you will publish to.

- `<pack>`: the name for the pack that you are creating.

The `codeql pack init` command creates the directory structure and configuration files for a CodeQL pack. By default, the command creates a query pack. If you want to create a library pack, you must edit the `qlpack.yml` file to explicitly declare the file as a library pack by including the `library:true` property.

## Modifying an existing legacy QL pack to create a CodeQL query pack

If you already have a `qlpack.yml` file, you can edit it manually to convert it into a CodeQL pack.

1. Edit the `name` property so that it matches the format `<scope>/<name>`, where `<scope>` is the name of the GitHub organization or user account that you will publish to.

1. In the `qlpack.yml` file, include a `version` property with a semver identifier, as well as an optional `dependencies` block.

1. Migrate the list of dependencies in `libraryPathDependencies` to the `dependencies` block. Specify the version range for each dependency. If the range is unimportant, or you are unsure of compatibility, you can specify `"\*"`, which indicates that any version is acceptable and will default to the latest version when you run `codeql pack install`.

For more information about the properties, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)."

## Adding and installing dependencies on a CodeQL pack

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** This is only supported for CodeQL query and library packs.

</div>

You can add dependencies on CodeQL packs using the command `codeql pack add`. You must specify the scope, name, and (optionally) a compatible version range.

```shell
codeql pack add <scope>/<name>@x.x.x <scope>/<other-name>
```

If you don’t specify a version range, the latest version will be added. Otherwise, the latest version that satisfies the requested range will be added.

This command updates the `qlpack.yml` file with the requested dependencies and downloads them into the package cache. Please note that this command will reformat the file and remove all comments.

You can also manually edit the `qlpack.yml` file to include dependencies and install the dependencies with the command:

```shell
codeql pack install
```

This command downloads all dependencies to the shared cache on the local disk.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:**

- Running the `codeql pack add` and `codeql pack install` commands will generate or update the `codeql-pack.lock.yml` file. This file should be checked-in to version control. The `codeql-pack.lock.yml` file contains the precise version numbers used by the pack. For more information, see "[About codeql-pack.lock.yml files](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs##about-codeql-packlockyml-files)."

- By default `codeql pack install` will install dependencies from the Container registry on GitHub.com. You can install dependencies from a GitHub Enterprise Server Container registry by creating a `qlconfig.yml` file. For more information, see "[AUTOTITLE](/enterprise-server@latest/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)" in the GitHub Enterprise Server documentation.

</div>
