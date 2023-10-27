# Customizing GitHub-hosted runners

You can install additional software on GitHub-hosted runners as a part of your workflow.

If you require additional software packages on GitHub-hosted runners, you can create a job that installs the packages as part of your workflow.

To see which packages are already installed by default, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)."

This guide demonstrates how to create a job that installs additional software on a GitHub-hosted runner.

## Installing software on Ubuntu runners

The following example demonstrates how to install an `apt` package as part of a job.

```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v4
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Always run `sudo apt-get update` before installing a package. In case the `apt` index is stale, this command fetches and re-indexes any available packages, which helps prevent package installation failures.

</div>

## Installing software on macOS runners

The following example demonstrates how to install Brew packages and casks as part of a job.

```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v4
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```

## Installing software on Windows runners

The following example demonstrates how to use [Chocolatey](https://community.chocolatey.org/packages) to install the GitHub CLI as part of a job.

```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
