# Customizing code scanning

You can customize how GitHub scans the code in your project for vulnerabilities and errors.

**Who can use this feature**: People with write permissions to a repository can customize code scanning for the repository.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About code scanning configuration

You can run code scanning on GitHub, using GitHub Actions, or from your continuous integration (CI) system. For more information, see "[AUTOTITLE](/actions/learn-github-actions)" or "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."

This article is about running code scanning on GitHub using actions.

Before you can customize code scanning for a repository, you must configure code scanning by adding a GitHub Actions workflow to the repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

Typically, you don't need to edit the generated workflow file for code scanning. However, if required, you can edit the workflow to customize some of the settings. For example, you can edit GitHub's CodeQL analysis workflow to specify the frequency of scans, the languages or directories to scan, and what CodeQL code scanning looks for in your code. You might also need to edit the CodeQL analysis workflow if you use a specific set of commands to compile your code.

CodeQL analysis is just one type of code scanning you can do in GitHub. GitHub Marketplace contains other code scanning workflows you can use. You can find a selection of these on the "Get started with code scanning" page, which you can access from the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-label="The shield symbol" role="img"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security** tab. The specific examples given in this article relate to the CodeQL analysis workflow file.

## Editing a code scanning workflow

GitHub saves workflow files in the _.github/workflows_ directory of your repository. You can find a workflow you have added by searching for its file name. For example, by default, the workflow file for CodeQL code scanning is called _codeql-analysis.yml_.

1. In your repository, browse to the workflow file you want to edit.
1. In the upper right corner of the file view, to open the workflow editor, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>.
1. After you have edited the file, click **Start commit** and complete the "Commit changes" form. You can choose to commit directly to the current branch, or create a new branch and start a pull request.

For more information about editing workflow files, see "[AUTOTITLE](/actions/learn-github-actions)."

## Configuring frequency

You can configure the CodeQL analysis workflow to scan code on a schedule or when specific events occur in a repository.

Scanning code when someone pushes a change, and whenever a pull request is created, prevents developers from introducing new vulnerabilities and errors into the code. Scanning code on a schedule informs you about the latest vulnerabilities and errors that GitHub, security researchers, and the community discover, even when developers aren't actively maintaining the repository.

### Scanning on push

By default, the CodeQL analysis workflow uses the `on.push` event to trigger a code scan on every push to the default branch of the repository and any protected branches. For code scanning to be triggered on a specified branch, the workflow must exist in that branch. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#on)."

If you scan on push, then the results appear in the **Security** tab for your repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

Additionally, when an `on:push` scan returns results that can be mapped to an open pull request, these alerts will automatically appear on the pull request in the same places as other pull request alerts. The alerts are identified by comparing the existing analysis of the head of the branch to the analysis for the target branch. For more information on code scanning alerts in pull requests, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

### Scanning pull requests

The default CodeQL analysis workflow uses the `pull_request` event to trigger a code scan on pull requests targeted against the default branch. If a pull request is from a private fork, the `pull_request` event will only be triggered if you've selected the "Run workflows from fork pull requests" option in the repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."

For more information about the `pull_request` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request)."

If you scan pull requests, then the results appear as alerts in a pull request check. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

Using the `pull_request` trigger, configured to scan the pull request's merge commit rather than the head commit, will produce more efficient and accurate results than scanning the head of the branch on each push. However, if you use a CI/CD system that cannot be configured to trigger on pull requests, you can still use the `on:push` trigger and code scanning will map the results to open pull requests on the branch and add the alerts as annotations on the pull request. For more information, see "[Scanning on push](#scanning-on-push)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If your repository is configured with a merge queue, you need to include the `merge_group` event as an additional trigger for code scanning. This will ensure that pull requests are also scanned when they are added to a merge queue. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)."

</div>

### Avoiding unnecessary scans of pull requests

You might want to avoid a code scan being triggered on specific pull requests targeted against the default branch, irrespective of which files have been changed. You can configure this by specifying `on:pull_request:paths-ignore` or `on:pull_request:paths` in the code scanning workflow. For example, if the only changes in a pull request are to files with the file extensions `.md` or `.txt` you can use the following `paths-ignore` array.

``` yaml copy
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes**

- `on:pull_request:paths-ignore` and `on:pull_request:paths` set conditions that determine whether the actions in the workflow will run on a pull request. They don't determine what files will be analyzed when the actions _are_ run. When a pull request contains any files that are not matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, the workflow runs the actions and scans all of the files changed in the pull request, including those matched by `on:pull_request:paths-ignore` or `on:pull_request:paths`, unless the files have been excluded. For information on how to exclude files from analysis, see "[Specifying directories to scan](#specifying-directories-to-scan)."
- For CodeQL code scanning workflow files, don't use the `paths-ignore` or `paths` keywords with the `on:push` event as this is likely to cause missing analyses. For accurate results, CodeQL code scanning needs to be able to compare new changes with the analysis of the previous commit.

</div>

For more information about using `on:pull_request:paths-ignore` and `on:pull_request:paths` to determine when a workflow will run for a pull request, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

### Scanning on a schedule

If you use the default CodeQL analysis workflow, the workflow will scan the code in your repository once a week, in addition to the scans triggered by events. To adjust this schedule, edit the `cron` value in the workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onschedule)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: GitHub only runs scheduled jobs that are in workflows on the default branch. Changing the schedule in a workflow on any other branch has no effect until you merge the branch into the default branch.

</div>

### Example

The following example shows a CodeQL analysis workflow for a particular repository that has a default branch called `main` and one protected branch called `protected`.

``` yaml copy
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

This workflow scans:
- Every push to the default branch and the protected branch
- Every pull request to the default branch
- The default branch every Monday at 14:20 UTC

## Specifying an operating system

If your code requires a specific operating system to compile, you can configure the operating system in your CodeQL analysis workflow. Edit the value of `jobs.analyze.runs-on` to specify the operating system for the machine that runs your code scanning actions. 

``` yaml copy
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

If you choose to use a self-hosted runner for code scanning, you can specify an operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.

``` yaml copy
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

CodeQL code scanning supports the latest versions of Ubuntu, Windows, and macOS. Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see "[AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)."

If you use a self-hosted runner, you must ensure that Git is in the PATH variable. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

For recommended specifications (RAM, CPU cores, and disk) for running CodeQL analysis on self-hosted machines, see  "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

## Specifying the location for CodeQL databases

In general, you do not need to worry about where the CodeQL analysis workflow places CodeQL databases since later steps will automatically find databases created by previous steps. However, if you are writing a custom workflow step that requires the CodeQL database to be in a specific disk location, for example to upload the database as a workflow artifact, you can specify that location using the `db-location` parameter under the `init` action.

``` yaml copy
- uses: github/codeql-action/init@v2
  with:
    db-location: '${{ github.runner_temp }}/my_location'
```

The CodeQL analysis workflow will expect the path provided in `db-location` to be writable, and either not exist, or be an empty directory. When using this parameter in a job running on a self-hosted runner or using a Docker container, it's the responsibility of the user to ensure that the chosen directory is cleared between runs, or that the databases are removed once they are no longer needed.  This is not necessary for jobs running on GitHub-hosted runners, which obtain a fresh instance and a clean filesystem each time they run. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)."

If this parameter is not used, the CodeQL analysis workflow will create databases in a temporary location of its own choice. Currently the default value is `${{ github.runner_temp }}/codeql_databases`.

## Changing the languages that are analyzed

CodeQL code scanning automatically detects code written in the supported languages.

<!-- If you update the list of supported languages for CodeQL, update docs-internal/content/get-started/learning-about-github/github-language-support.md to reflect the changes. -->
- C/C++
- C#
- Go
- Java
- JavaScript/TypeScript
- Python
- Ruby

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes**:

- Use `javascript` to analyze code written in JavaScript, TypeScript or both.

</div>

For more information, see the documentation on the CodeQL website: "[Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)."

CodeQL uses the following language identifiers:

| Language | Identifier
|------------------|-------------------
| C/C++ | `cpp`
| C# | `csharp`
| Go | `go`
| Java | `java`
| JavaScript/TypeScript | `javascript`
| Python | `python`
| Ruby | `ruby`

The default CodeQL analysis workflow file contains a matrix called `language` which lists the languages in your repository that are analyzed. CodeQL automatically populates this matrix when you add code scanning to a repository. Using the `language` matrix optimizes CodeQL to run each analysis in parallel. We recommend that all workflows adopt this configuration due to the performance benefits of parallelizing builds. For more information about matrices, see "[AUTOTITLE](/actions/using-jobs/using-a-matrix-for-your-jobs)."

If your repository contains code in more than one of the supported languages, you can choose which languages you want to analyze. There are several reasons you might want to prevent a language being analyzed. For example, the project might have dependencies in a different language to the main body of your code, and you might prefer not to see alerts for those dependencies.

If your workflow uses the `language` matrix then CodeQL is hardcoded to analyze only the languages in the matrix. To change the languages you want to analyze, edit the value of the matrix variable. You can remove a language to prevent it being analyzed or you can add a language that was not present in the repository when code scanning was configured. For example, if the repository initially only contained JavaScript when code scanning was configured, and you later added Python code, you will need to add `python` to the matrix.

```yaml copy
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

If your workflow does not contain a matrix called `language`, then CodeQL is configured to run analysis sequentially. If you don't specify languages in the workflow, CodeQL automatically detects, and attempts to analyze, any supported languages in the repository. If you want to choose which languages to analyze, without using a matrix, you can use the `languages` parameter under the `init` action.

```yaml copy
- uses: github/codeql-action/init@v2
  with:
    languages: cpp, csharp, python
```

## Defining the alert severities that give a check failure for a pull request

By default, only alerts with the severity level of `Error` or security severity level of `Critical` or `High` will cause a pull request check failure, and a check will still succeed with alerts of lower severities. You can change the levels of alert severities and of security severities that will cause a pull request check failure in your repository settings. For more information about severity levels, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-details)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the "Security" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codescan" aria-hidden="true"><path d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z"></path><path d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z"></path></svg> Code security and analysis**. 
1. Under "Code scanning", in the "Protection rules" section, use the drop-down menu to define which alerts should cause a check failure. Choose one level for alerts of type "Security" and one level for all other alerts.

## Configuring a category for the analysis

Use `category` to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code. The category you specify in your workflow will be included in the SARIF results file.

This parameter is particularly useful if you work with monorepos and have multiple SARIF files for different components of the monorepo.

``` yaml copy
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

If you don't specify a `category` parameter in your workflow, GitHub will generate a category name for you, based on the name of the workflow file triggering the action, the action name, and any matrix variables. For example:
- The `.github/workflows/codeql-analysis.yml` workflow and the `analyze` action will produce the category `.github/workflows/codeql.yml:analyze`.
- The `.github/workflows/codeql-analysis.yml` workflow, the `analyze` action, and the `{language: javascript, os: linux}` matrix variables will produce the category `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

The `category` value will appear as the `<run>.automationDetails.id` property in SARIF v2.1.0. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)."

Your specified category will not overwrite the details of the `runAutomationDetails` object in the SARIF file, if included.

## Running additional queries

When you use CodeQL to scan code, the CodeQL analysis engine generates a database from the code and runs queries on it. CodeQL analysis uses a default set of queries, but you can specify more queries to run, in addition to the default queries.

Any additional queries you want to run must belong to a QL pack in a repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql-queries)."

You can specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. For more information about query suite definitions, see "[Creating CodeQL query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)."

We don't recommend referencing query suites directly from the `github/codeql` repository, for example, `github/codeql/cpp/ql/src@main`. Such queries would have to be recompiled, and may not be compatible with the version of CodeQL currently active on GitHub Actions, which could lead to errors during analysis.

To add one or more queries, add a `with: queries:` entry within the `uses: github/codeql-action/init@v2` section of the workflow. If the queries are in a private repository, use the `external-repository-token` parameter to specify a token that has access to checkout the private repository.

You can also specify query suites in the value of `queries`. Query suites are collections of queries, usually grouped by purpose or language.

``` yaml copy
- uses: github/codeql-action/init@v2
  with:
    # Comma-separated list of queries / packs / suites to run.
    # This may include paths or a built in suite, for example:
    # security-extended or security-and-quality.
    queries: security-extended
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```

The following query suites are built into CodeQL code scanning and are available for use.

  | Query suite | Description |
  | :- | :- |
  | `security-extended` | Queries from the default suite, plus lower severity and precision queries |
  | `security-and-quality` | Queries from `security-extended`, plus maintainability and reliability queries |

Each of these query suites contains a different subset of the queries included in the built-in CodeQL query pack for that language. The query suites are automatically generated using the metadata for each query. For more information, see "[Metadata for CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)."

You can identify which query suites a query is included in by browsing the [CodeQL query help documentation](https://codeql.github.com/codeql-query-help/). For each query, any suites that it is included in are displayed at the top of the page with the query metadata. For example: [Arbitrary file write during zip extraction (”Zip Slip”)](https://codeql.github.com/codeql-query-help/javascript/js-zipslip/) and [Client-side request forgery](https://codeql.github.com/codeql-query-help/javascript/js-client-side-request-forgery/).

When you specify a query suite, the CodeQL analysis engine will run the default set of queries and any extra queries defined in the additional query suite.

If you also use a configuration file for custom settings, any additional queries specified in your workflow are used instead of those specified in the configuration file. If you want to run the combined set of additional queries, prefix the value of `queries` in the workflow with the `+` symbol. For more information, see "[Using a custom configuration file](#using-a-custom-configuration-file)."

In the following example, the `+` symbol ensures that the specified additional queries are used together with any specified in the referenced configuration file.

``` yaml copy
- uses: github/codeql-action/init@v2
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```
<a name="using-a-custom-configuration-file"></a>

<a name="example-configuration-files"></a>

## Using a custom configuration file

A custom configuration file is an alternative way to specify additional queries to run. You can also use the file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. This example loads the configuration file _./.github/codeql/codeql-config.yml_.

``` yaml copy
- uses: github/codeql-action/init@v2
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the repository you are analyzing, or in an external repository. Using an external repository allows you to specify configuration options for multiple repositories in a single place. When you reference a configuration file located in an external repository, you can use the _OWNER/REPOSITORY/FILENAME@BRANCH_ syntax. For example, _octo-org/shared/codeql-config.yml@main_.

If the configuration file is located in an external private repository, use the `external-repository-token` parameter of the `init` action to specify a token that has access to the private repository.

```yaml copy
- uses: github/codeql-action/init@v2
  with:
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```

The settings in the configuration file are written in YAML format.

### Specifying additional queries

You specify additional queries in a `queries` array. Each element of the array contains a `uses` parameter with a value that identifies a single query file, a directory containing query files, or a query suite definition file.

``` yaml copy
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Optionally, you can give each array element a name, as shown in the example configuration files below. For more information about additional queries, see "[Running additional queries](#running-additional-queries)" above.

### Disabling the default queries

If you only want to run custom queries, you can disable the default security queries by using `disable-default-queries: true`.

### Specifying directories to scan

For the interpreted languages that CodeQL supports (Python, Ruby, and JavaScript/TypeScript), you can restrict code scanning to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from analysis by adding a `paths-ignore` array.

``` yaml copy
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**:

- The `paths` and `paths-ignore` keywords, used in the context of the code scanning configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."
- The filter pattern characters `?`, `+`, `[`, `]`, and `!` are not supported and will be matched literally.
- `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. For example, `foo/**`, `**/foo`, and `foo/**/bar` are all allowed syntax, but `**foo` isn't. However you can use single stars along with other characters, as shown in the example. You'll need to quote anything that contains a `*` character.

</div>

For compiled languages, if you want to limit code scanning to specific directories in your project, you must specify appropriate build steps in the workflow. The commands you need to use to exclude a directory from the build will depend on your build system. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

You can quickly analyze small portions of a monorepo when you modify code in specific directories. You'll need to both exclude directories in your build steps and use the `paths-ignore` and `paths` keywords for [`on.<push|pull_request>`](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) in your workflow.

### Example configuration files

This configuration file adds the `security-and-quality` query suite to the list of queries run by CodeQL when scanning your code. For more information about the query suites available for use, see "[Running additional queries](#running-additional-queries)."

``` yaml
name: "My CodeQL config"

queries:
  - uses: security-and-quality
```

The following configuration file disables the default queries and specifies a set of custom queries to run instead. It also configures CodeQL to scan files in the _src_ directory (relative to the root), except for the _src/node_modules_ directory, and except for files whose name ends in _.test.js_. Files in _src/node_modules_ and files with names ending _.test.js_ are therefore excluded from analysis.

``` yaml
name: "My CodeQL config"

disable-default-queries: true

queries:
  - name: Use an in-repository QL pack (run queries in the my-queries directory)
    uses: ./my-queries
  - name: Use an external JavaScript QL pack (run queries from an external repo)
    uses: octo-org/javascript-qlpack@main
  - name: Use an external query (run a single query from an external QL pack)
    uses: octo-org/python-qlpack/show_ifs.ql@main
  - name: Use a query suite file (run queries from a query suite in this repo)
    uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls

paths:
  - src 
paths-ignore: 
  - src/node_modules
  - '**/*.test.js'
```

## Configuring code scanning for compiled languages

CodeQL analyzes the C/C++, C#,   and Java source files in your repository that are built.

The basic CodeQL analysis workflow uses the `autobuild` action to build your code. Alternatively, you can disable `autobuild` and instead specify explicit build commands to analyze only the files that are built by these custom commands.

If `autobuild` fails, or you want to analyze a different set of source files from those built by the `autobuild` process, you'll need to remove the `autobuild` step from the workflow, and manually add build steps. For C/C++, C#, Go,  and Java projects, CodeQL will analyze whatever source code is built by your specified build steps. For more information about how to configure CodeQL code scanning for compiled languages, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages)."

## Uploading code scanning data to GitHub

GitHub can display code analysis data generated externally by a third-party tool. You can upload code analysis data with the `upload-sarif` action. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."
