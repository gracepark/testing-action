# Using concurrency, expressions, and a test matrix

How to use advanced GitHub Actions features for continuous integration (CI).

## Example overview

This article uses an example workflow to demonstrate some of the main CI features of GitHub Actions. When this workflow is triggered, it tests your code using a matrix of test combinations with `npm test`.

The following diagram shows a high level view of the workflow's steps and how they run within the job:

![Diagram of an event triggering a workflow that uses a test matrix.](/assets/images/help/actions/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## Features used in this example

The example workflow demonstrates the following capabilities of GitHub Actions.

| **Feature**  | **Implementation** |
| --- | --- |
| Manually running a workflow from the UI | [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)|
| Triggering a workflow to run automatically | [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request) |
| Running a workflow at regular intervals | [`schedule`](/actions/using-workflows/events-that-trigger-workflows#schedule) |
| Setting permissions for the token | [`permissions`](/actions/using-jobs/assigning-permissions-to-jobs)|
| Controlling how many workflow runs or jobs can run at the same time | [`concurrency`](/actions/using-jobs/using-concurrency)|
| Running the job on different runners, depending on the repository | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
| Preventing a job from running unless specific conditions are met | [`if`](/actions/using-jobs/using-conditions-to-control-job-execution)|
| Using a matrix to create different test configurations | [`matrix`](/actions/using-jobs/using-a-matrix-for-your-jobs)|
| Cloning your repository to the runner | [`actions/checkout`](https://github.com/actions/checkout)|
| Installing `node` on the runner | [`actions/setup-node`](https://github.com/actions/setup-node) |
| Running tests on the runner | `npm test`|

## Example workflow

The following workflow was created by the GitHub Docs Engineering team. The workflow runs tests against the code in a pull request. To review the latest version of this file in the [`github/docs`](https://github.com/github/docs) repository, see [`test.yml`](https://github.com/github/docs/blob/main/.github/workflows/test.yml).

```yaml annotate copy
# This defines the name of the workflow as it will appear in the "Actions" tab of the GitHub repository.
name: Node.js Tests

# The `on` keyword lets you define the events that trigger when the workflow is run. You can define multiple events here. For more information, see "[AUTOTITLE](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)."
on:

# Add the `workflow_dispatch` event if you want to be able to manually run this workflow. For more information, see [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
  workflow_dispatch:

# Add the `pull_request` event, so that the workflow runs automatically every time a pull request is created or updated. For more information, see [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
  pull_request:

# Add the `push` event with the `branch` filter, so that the workflow runs automatically every time a commit is pushed to a branch called "main". For more information, see [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
  push:
    branches:
      - main

# This modifies the default permissions granted to `GITHUB_TOKEN`. This will vary depending on the needs of your workflow. For more information, see "[AUTOTITLE](/actions/using-jobs/assigning-permissions-to-jobs)."
permissions:
  contents: read
  pull-requests: read

# The `concurrency` key ensures that only a single workflow in the same concurrency group will run at the same time. For more information, see "[AUTOTITLE](/actions/using-jobs/using-concurrency)."
# `concurrency.group` generates a concurrency group name from the workflow name and pull request information. The `||` operator is used to define fallback values.
# `concurrency.cancel-in-progress` cancels any currently running job or workflow in the same concurrency group.
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
  cancel-in-progress: true

# This groups together all the jobs that run in the workflow file.
jobs:

# This defines a job with the ID `test` that is stored within the `jobs` key.
  test:

# This configures the job to run on a GitHub-hosted runner or a self-hosted runner, depending on the repository running the workflow.
#
# In this example, the job will run on a self-hosted runner if the repository is named `docs-internal` and is within the `github` organization. If the repository doesn't match this path, then it will run on an `ubuntu-latest` runner hosted by GitHub. For more information on these options, see "[AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job)."
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}

# This sets the maximum number of minutes to let the job run before it is automatically canceled. For more information, see [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
    timeout-minutes: 60

# This section defines the build matrix for your jobs.
    strategy:

# Setting `fail-fast` to `false` prevents GitHub from cancelling all in-progress jobs if any matrix job fails.
      fail-fast: false

# This creates a matrix named `test-group`, with an array of test groups. These values match the names of test groups that will be run by `npm test`.
      matrix:
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]

# This groups together all the steps that will run as part of the `test` job. Each job in a workflow has its own `steps` section.
    steps:

# The `uses` keyword tells the job to retrieve the action named `actions/checkout`. This is an action that checks out your repository and downloads it to the runner, allowing you to run actions against your code (such as testing tools). You must use the checkout action any time your workflow will use your repository's code. Some extra options are provided to the action using the `with` key.
      - name: Check out repo
        uses: actions/checkout@v4
        with:
          lfs: ${{ matrix.test-group == 'content' }}
          persist-credentials: 'false'

# If the current repository is the `github/docs-internal` repository, this step uses the `actions/github-script` action to run a script to check if there is a branch called `docs-early-access`.
      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: ${{ github.repository == 'github/docs-internal' }}
        id: check-early-access
        uses: actions/github-script@v6
        env:
          BRANCH_NAME: ${{ github.head_ref || github.ref_name }}
        with:
          github-token: ${{ secrets.DOCUBOT_REPO_PAT }}
          result-encoding: string
          script: |
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }

# If the current repository is the `github/docs-internal` repository, this step checks out the branch from the `github/docs-early-access` that was identified in the previous step.
      - name: Check out docs-early-access too, if internal repo
        if: ${{ github.repository == 'github/docs-internal' }}
        uses: actions/checkout@v4
        with:
          repository: github/docs-early-access
          token: ${{ secrets.DOCUBOT_REPO_PAT }}
          path: docs-early-access
          ref: ${{ steps.check-early-access.outputs.result }}

# If the current repository is the `github/docs-internal` repository, this step uses the `run` keyword to execute shell commands to move the `docs-early-access` repository's folders into the main repository's folders.
      - name: Merge docs-early-access repo's folders
        if: ${{ github.repository == 'github/docs-internal' }}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access

# This step runs a command to check out large file storage (LFS) objects from the repository.
      - name: Checkout LFS objects
        run: git lfs checkout

# This step uses the `trilom/file-changes-action` action to gather the files changed in the pull request, so they can be analyzed in the next step. This example is pinned to a specific version of the action, using the `a6ca26c14274c33b15e6499323aac178af06ad4b` SHA.
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          output: ' '

# This step runs a shell command that uses an output from the previous step to create a file containing the list of files changed in the pull request.
      - name: Insight into changed files
        run: |

          echo "${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt

# This step uses the `actions/setup-node` action to install the specified version of the `node` software package on the runner, which gives you access to the `npm` command.
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16.14.x
          cache: npm

# This step runs the `npm ci` shell command to install the npm software packages for the project.
      - name: Install dependencies
        run: npm ci

# 
      - name: Cache nextjs build
        uses: actions/cache@v3
        with:
          path: .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}

# This step runs the build script.
      - name: Run build script
        run: npm run build

# This step runs the tests using `npm test`, and the test matrix provides a different value for `${{ matrix.test-group }}` for each job in the matrix. It uses the `DIFF_FILE` environment variable to know which files have changed, and uses the `CHANGELOG_CACHE_FILE_PATH` environment variable for the changelog cache file.
      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- tests/${{ matrix.test-group }}/
```

## Next steps

- To learn about GitHub Actions concepts, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)."
- For more step-by-step guide for creating a basic workflow, see "[AUTOTITLE](/actions/quickstart)."
- If you're comfortable with the basics of GitHub Actions, you can learn about workflows and their features at "[AUTOTITLE](/actions/using-workflows/about-workflows)."
