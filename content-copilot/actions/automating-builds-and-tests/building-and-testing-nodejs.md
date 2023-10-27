# Building and testing Node.js

You can create a continuous integration (CI) workflow to build and test your Node.js project.

## Introduction

This guide shows you how to create a continuous integration (CI) workflow that builds and tests Node.js code. If your CI tests pass, you may want to deploy your code or publish a package.

## Prerequisites

We recommend that you have a basic understanding of Node.js, YAML, workflow configuration options, and how to create a workflow file. For more information, see:

- "[AUTOTITLE](/actions/learn-github-actions)"
- "[Getting started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

## Using a Node.js starter workflow

To get started quickly, add a starter workflow to the `.github/workflows` directory of your repository.

GitHub provides a starter workflow for Node.js that should work for most Node.js projects. The subsequent sections of this guide give examples of how you can customize this starter workflow.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab.png)

1. If you already have a workflow in your repository, click **New workflow**.
1. The "Choose a workflow template" page shows a selection of recommended starter workflows. Search for "Node.js".
1. Filter the selection of workflows by clicking **Continuous integration**.
1. On the "Node.js" workflow, click **Set up this workflow**.

1. Edit the workflow as required. For example, change the Node versions you want to use.
1. Click **Commit changes**.

   The `node.js.yml` workflow file is added to the `.github/workflows` directory of your repository.

## Specifying the Node.js version

The easiest way to specify a Node.js version is by using the `setup-node` action provided by GitHub. For more information see, [`setup-node`](https://github.com/actions/setup-node/).

The `setup-node` action takes a Node.js version as an input and configures that version on the runner. The `setup-node` action finds a specific version of Node.js from the tools cache on each runner and adds the necessary binaries to `PATH`, which persists for the rest of the job. Using the `setup-node` action is the recommended way of using Node.js with GitHub Actions because it ensures consistent behavior across different runners and different versions of Node.js. If you are using a self-hosted runner, you must install Node.js and add it to `PATH`.

The starter workflow includes a matrix strategy that builds and tests your code with the Node.js versions listed in `node-version`. The 'x' in the version number is a wildcard character that matches the latest minor and patch release available for a version. Each version of Node.js specified in the `node-version` array creates a job that runs the same steps.

Each job can access the value defined in the matrix `node-version` array using the `matrix` context. The `setup-node` action uses the context as the `node-version` input. The `setup-node` action configures each job with a different Node.js version before building and testing code. For more information about matrix strategies and contexts, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" and "[AUTOTITLE](/actions/learn-github-actions/contexts)."

```yaml copy
strategy:
  matrix:
    node-version: ['14.x', '16.x', '18.x']

steps:
- uses: actions/checkout@v4
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v3
  with:
    node-version: ${{ matrix.node-version }}
```

Alternatively, you can build and test with exact Node.js versions.

```yaml copy
strategy:
  matrix:
    node-version: ['10.17.0', '17.9.0']
```

Or, you can build and test using a single version of Node.js too.

```yaml copy
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.x'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

If you don't specify a Node.js version, GitHub uses the environment's default Node.js version.
 For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".

## Installing dependencies

GitHub-hosted runners have npm and Yarn dependency managers installed. You can use npm and Yarn to install dependencies in your workflow before building and testing your code. The Windows and Linux GitHub-hosted runners also have Grunt, Gulp, and Bower installed.

### Example using npm

This example installs the versions in the _package-lock.json_ or _npm-shrinkwrap.json_ file and prevents updates to the lock file. Using `npm ci` is generally faster than running `npm install`. For more information, see [`npm ci`](https://docs.npmjs.com/cli/ci.html) and "[Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)."

```yaml copy
steps:
- uses: actions/checkout@v4
- name: Use Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20.x'
- name: Install dependencies
  run: npm ci
```

Using `npm install` installs the dependencies defined in the _package.json_ file. For more information, see [`npm install`](https://docs.npmjs.com/cli/install).

```yaml copy
steps:
- uses: actions/checkout@v4
- name: Use Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20.x'
- name: Install dependencies
  run: npm install
```

### Example using Yarn

This example installs the dependencies defined in the _yarn.lock_ file and prevents updates to the _yarn.lock_ file. For more information, see [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

```yaml copy
steps:
- uses: actions/checkout@v4
- name: Use Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

Alternatively, you can install the dependencies defined in the _package.json_ file.

```yaml copy
steps:
- uses: actions/checkout@v4
- name: Use Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20.x'
- name: Install dependencies
  run: yarn
```

### Example using a private registry and creating the .npmrc file

You can use the `setup-node` action to create a local _.npmrc_ file on the runner that configures the default registry and scope. The `setup-node` action also accepts an authentication token as input, used to access private registries or publish node packages. For more information, see [`setup-node`](https://github.com/actions/setup-node/).

To authenticate to your private registry, you'll need to store your npm authentication token as a secret. For example, create a repository secret called `NPM_TOKEN`. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

In the example below, the secret `NPM_TOKEN` stores the npm authentication token. The `setup-node` action configures the _.npmrc_ file to read the npm authentication token from the `NODE_AUTH_TOKEN` environment variable. When using the `setup-node` action to create an _.npmrc_ file, you must set the `NODE_AUTH_TOKEN` environment variable with the secret that contains your npm authentication token.

Before installing dependencies, use the `setup-node` action to create the _.npmrc_ file. The action has two input parameters. The `node-version` parameter sets the Node.js version, and the `registry-url` parameter sets the default registry. If your package registry uses scopes, you must use the `scope` parameter. For more information, see [`npm-scope`](https://docs.npmjs.com/misc/scope).

```yaml copy
steps:
- uses: actions/checkout@v4
- name: Use Node.js
  uses: actions/setup-node@v3
  with:
    always-auth: true
    node-version: '20.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

The example above creates an _.npmrc_ file with the following contents:

```shell
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

## Building and testing your code

You can use the same commands that you use locally to build and test your code. For example, if you run `npm run build` to run build steps defined in your _package.json_ file and `npm test` to run your test suite, you would add those commands in your workflow file.

```yaml copy
steps:
- uses: actions/checkout@v4
- name: Use Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## Packaging workflow data as artifacts

You can save artifacts from your build and test steps to view after a job completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

## Publishing to package registries

You can configure your workflow to publish your Node.js package to a package registry after your CI tests pass. For more information about publishing to npm and GitHub Packages, see "[AUTOTITLE](/actions/publishing-packages/publishing-nodejs-packages)."
