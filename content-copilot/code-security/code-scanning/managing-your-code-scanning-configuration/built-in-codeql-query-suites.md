# Built-in CodeQL query suites

You can choose from different built-in CodeQL query suites to use in your CodeQL code scanning setup.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About CodeQL query suites

With CodeQL code scanning, you can select a specific group of CodeQL queries, called a CodeQL query suite, to run against your code. The following built-in query suites are available through GitHub:

- the `default` query suite.
- the `security-extended` query suite. This suite is referred to as the "Extended" query suite on GitHub.

Currently, both the `default` query suite and the `security-extended` query suite are available for default setup for code scanning. For more information on default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."

To use a custom query suite, you must configure advanced setup for CodeQL code scanning. For more information on advanced setups and creating a query suite, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)" and "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites)."

## Built-in CodeQL query suites

The built-in CodeQL query suites, `default` and `security-extended`, are created and maintained by GitHub. Both of these query suites are available for every CodeQL-supported language. For more information on CodeQL-supported languages, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."

### `default` query suite

- The `default` query suite is the group of queries run by default in CodeQL code scanning on GitHub.
- The queries in the `default` query suite are highly precise and return few false positive code scanning results. Relative to the `security-extended` query suite, the `default` suite returns fewer low-confidence code scanning results.
- This query suite is available for use with default setup for code scanning.

### `security-extended` query suite

- The `security-extended` query suite consists of all the queries in the `default` query suite, plus additional queries with slightly lower precision and severity.
- Relative to the `default` query suite, the `security-extended` suite may return a greater number of false positive code scanning results.
- This query suite is available for use with default setup for code scanning, and is referred to as the "Extended" query suite on GitHub.

## Further reading

- "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites)"
