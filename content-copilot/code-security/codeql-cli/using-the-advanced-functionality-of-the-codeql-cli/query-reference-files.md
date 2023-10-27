# Query reference files

You can use query reference files to define the location of a query you want to run in tests.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About query reference files

A query reference file is text file that defines the location of one query to test.

You use a query reference file when you want to tell the `test run` subcommand
to run a query that’s not part of a test directory.
There are two ways to specify queries that you want to run as tests:

1. Use a query reference file to specify the location of a query to test.
This is useful when you create tests for alert and path queries that
are intended to identify problems in real codebases. You might create
several directories of test code, each focusing on different
aspects of the query. Then you would add a query reference file to
each directory of test code, to specify the query to test.
1. Add the query directly to a directory of tests.
These is typically useful when you’re writing queries explicitly to test the behavior
of QL libraries. Often these queries contain just a few calls to library predicates,
wrapping them in a `select` statement so their output can be tested.

## Defining a query reference file

Each query reference file, `.qlref`, contains a single line that defines
where to find one query. The location must be defined relative
to the root of the CodeQL pack that contains the query.
Usually, this is either the CodeQL pack that contains the `.qlref`, a CodeQL pack specified in the `dependencies` block for the test pack, or a transitive dependency of the CodeQL pack.

You should use forward slashes in the path on all operating
systems to ensure compatibility between systems.

### Example

A query reference file to test a JavaScript alert query:
[DeadAngularJSEventListener.qlref](https://github.com/github/codeql/blob/main/javascript/ql/test/query-tests/AngularJS/DeadAngularJSEventListener/DeadAngularJSEventListener.qlref)

The `qlpack.yml` file, https://github.com/github/codeql/blob/main/javascript/ql/test/qlpack.yml,
for the CodeQL pack at `javascript/ql/test` defines `codeql/javascript-queries` as
a dependency. So the query reference file defines the location of the query relative
to the `codeql/javascript-queries` CodeQL pack:

```shell
AngularJS/DeadAngularJSEventListener.ql
```