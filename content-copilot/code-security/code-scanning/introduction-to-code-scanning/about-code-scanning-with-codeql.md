# About code scanning with CodeQL

You can use CodeQL to identify vulnerabilities and errors in your code. The results are shown as code scanning alerts in GitHub.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About code scanning with CodeQL

CodeQL is the code analysis engine developed by GitHub to automate security checks. You can analyze your code using CodeQL and display the results as code scanning alerts.

There are two main ways to use CodeQL analysis for code scanning:

- Add the CodeQL workflow to your repository. This uses the [github/codeql-action](https://github.com/github/codeql-action/) to run the CodeQL CLI. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-the-codeql-action)."

- Run the CodeQL CLI directly in an external CI system and upload the results to GitHub. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."

For information about code scanning alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)."

## About CodeQL

CodeQL treats code like data, allowing you to find potential vulnerabilities in your code with greater confidence than traditional static analyzers.

1. You generate a CodeQL database to represent your codebase.
1. Then you run CodeQL queries on that database to identify problems in the codebase.
1. The query results are shown as code scanning alerts in GitHub when you use CodeQL with code scanning.

CodeQL supports both compiled and interpreted languages, and can find vulnerabilities and errors in code that's written in the supported languages.

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

## About CodeQL queries

GitHub experts, security researchers, and community contributors write and maintain the default CodeQL queries used for code scanning. The queries are regularly updated to improve analysis and reduce any false positive results. The queries are open source, so you can view and contribute to the queries in the [`github/codeql`](https://github.com/github/codeql) repository. For more information, see [CodeQL](https://codeql.github.com/) on the CodeQL website. You can also write your own queries. For more information, see "[About CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" in the CodeQL documentation.

If you are scanning your code with advanced setup or an external CI system, you can run additional queries as part of your analysis.
The queries you want to run must belong to a QL pack in a repository. Queries must only depend on the standard libraries (that is, the libraries referenced by an `import LANGUAGE` statement in your query), or libraries in the same QL pack as the query.
