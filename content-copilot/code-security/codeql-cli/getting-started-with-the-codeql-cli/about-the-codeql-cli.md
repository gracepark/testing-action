# About the CodeQL CLI

You can use the CodeQL CLI to run CodeQL processes locally on software projects or to generate code scanning results for upload to GitHub.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About the CodeQL CLI

Software developers and security researchers can secure their code
using CodeQL analysis. For more information about CodeQL, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."

The CodeQL CLI is a standalone, command-line tool that you can use to analyze code. Its main purpose is to generate a database representation of a codebase, a CodeQL database. Once the database is ready, you can query it interactively, or run a suite of queries to generate a set of results in SARIF format and upload the results to GitHub.com.

You can use the CodeQL CLI to:

- Run CodeQL analyses using queries provided by GitHub engineers and the open source community
- Generate code scanning alerts that you can upload to display in GitHub
- Create CodeQL databases to use in the CodeQL for Visual Studio Code extension.
- Develop and test custom CodeQL queries to use in your own analyses

The CodeQL CLI can analyze:

- Dynamic languages, for example, JavaScript and Python.
- Compiled languages, for example, C/C++, C#, and Java.
- Codebases written in a mixture of languages.

For information about setting up the CodeQL CLI, see
"[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

## About using the CodeQL CLI for code scanning

You can use the CodeQL CLI to run code scanning on code that you're processing in a third-party continuous integration (CI) system. Code scanning is a feature that you use to analyze the code in a GitHub repository to find security vulnerabilities and coding errors. Any problems identified by the analysis are shown in GitHub. For an overview of using code scanning with external CI systems, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)." For recommended specifications (RAM, CPU cores, and disk) for running CodeQL analysis, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

Alternatively, you can use GitHub Actions or Azure DevOps pipelines to scan code using the CodeQL CLI. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)" or [Configure GitHub Advanced Security for Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

For an overview of all the options for using CodeQL analysis for code scanning, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:** 
- The CodeQL CLI is free to use on public repositories. The CodeQL CLI is also available in private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For information, see "[GitHub CodeQL Terms and Conditions](https://securitylab.github.com/tools/codeql/license)" and "[CodeQL CLI](https://codeql.github.com/docs/codeql-cli/)."
- The CodeQL CLI is currently not compatible with non-glibc Linux distributions such as (musl-based) Alpine Linux.

</div>

## About generating code scanning results with the CodeQL CLI

If you choose to run the CodeQL CLI directly, you first have to install the CodeQL CLI locally. If you are planning to use the CodeQL CLI with an external CI system, you need to make the CodeQL CLI available to servers in your CI system. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

Once the CodeQL CLI is set up, you can use three different commands to generate results and upload them to GitHub:

1. `database create` to create a CodeQL database to represent the hierarchical structure of each supported programming language in the repository. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis)."
1. `database analyze` to run queries to analyze each CodeQL database and summarize the results in a SARIF file. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)."
1. `github upload-results` to upload the resulting SARIF files to GitHub where the results are matched to a branch or pull request and displayed as code scanning alerts. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/uploading-codeql-analysis-results-to-github)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Uploading SARIF data to display as code scanning results in GitHub is supported for organization-owned repositories with GitHub Advanced Security enabled, and public repositories on GitHub.com. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

</div>

### Example CI configuration for CodeQL analysis

This is an example of the full series of commands for the CodeQL CLI that you might use to analyze a codebase with two supported languages and then upload the results to GitHub.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'
# The GitHub App or personal access token created for authentication
# with GitHub's REST API is available in the `GITHUB_TOKEN` environment variable.

codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif

# Upload the SARIF file with the Python results: 'python-results.sarif'

codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif
```

## About the GitHub CodeQL license

**License notice:** If you don’t have a GitHub Enterprise license then, by installing this product, you are agreeing to the [GitHub CodeQL Terms and Conditions](https://securitylab.github.com/tools/codeql/license).

GitHub CodeQL is licensed on a per-user basis. Under the license restrictions, you can use CodeQL to perform the following tasks:

- To perform academic research.
- To demonstrate the software.
- To test CodeQL queries that are released under an OSI-approved License to confirm that new versions of those queries continue to find the right vulnerabilities.

Where "OSI-approved License" means an Open Source Initiative (OSI)-approved open source software license.

If you are working with an Open Source Codebase (that is, a codebase that is released under an OSI-approved License) you can also use CodeQL for the following tasks:

- To perform analysis of the Open Source Codebase.
- If the Open Source Codebase is hosted and maintained on GitHub.com, to generate CodeQL databases for or during automated analysis, continuous integration, or continuous delivery.

CodeQL can’t be used for automated analysis, continuous integration or continuous delivery, whether as part of normal software engineering processes or otherwise, except in the express cases set forth herein. For these uses, contact the [sales team](https://enterprise.github.com/contact).
