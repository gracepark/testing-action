# Testing query help files

You can use the CodeQL CLI to preview your query help files as Markdown and ensure they are valid.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About testing query help files

Test query help files by rendering them as Markdown to ensure they are valid before uploading them to the CodeQL repository or using them in code scanning.

Query help is documentation that accompanies a query to explain how the query works, as well as providing information about the potential problem that the query identifies. It is good practice to write query help for all new queries. For more information, see [Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md) in the CodeQL repository.

The CodeQL CLI includes a command to test query help and render the content as markdown, so that you can easily preview the content in your IDE. Use the command to validate query help files before uploading them to the CodeQL repository or sharing them with other users. From CodeQL CLI 2.7.1 onwards, you can also include the markdown-rendered query help in SARIF files
generated during CodeQL analyses so that the query help can be displayed in the code scanning UI. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)."

## Prerequisites

- The query help (`.qhelp`) file must have an accompanying query (`.ql`) file with an identical base name.
- The query help file should follow the standard structure and style for query help documentation. For more information, see the [Query help style guide](https://github.com/github/codeql/blob/main/docs/query-help-style-guide.md) in the CodeQL repository.

## Running `codeql generate query-help`

You can test query help files by running the following command:

```shell
codeql generate query-help <qhelp|query|dir|suite> --format=<format> [--output=<dir|file>]
```

where `<qhelp|query|dir|suite>` is one of:

- the path to a `.qhelp` file.
- the path to a `.ql` file.
- the path to a directory containing queries and query help files.
- the path to a query suite, or the name of a well-known query suite for a CodeQL pack. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites)."

You must specify a `--format` option, which defines how the query help is rendered. Currently, you must specify `markdown` to render the query help as markdown.

The `--output` option defines a file path where the rendered query help will be saved.

- For directories containing `.qhelp` files or a query suites defining one or more `.qhelp` files, you must specify an `--output` directory. Filenames within the output directory will be derived from the `.qhelp` file names.
- For single `.qhelp` or `.ql` files, you may specify an `--output` option. If you don’t specify an output path, the rendered query help is written to `stdout`.

For full details of all the options you can use when testing query help files, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/generate-query-help)."

## Results

When you run the command, CodeQL attempts to render each `.qhelp` file that has an accompanying `.ql` file. For single files, the rendered content will be printed to `stdout` if you don’t specify an `--output` option. For all other use cases, the rendered content is saved to the specified output path.

By default, the CodeQL CLI will print a warning message if:

- Any of the query help is invalid, along with a description of the invalid query help elements
- Any `.qhelp` files specified in the command don’t have the same base name as an accompanying `.ql` file
- Any `.ql` files specified in the command don’t have the same base name as an accompanying `.qhelp` file

You can tell the CodeQL CLI how to handle these warnings by including a `--warnings` option in your command. For more information, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/generate-query-help#--warningsmode)."

## Further reading

- "[Query help files](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files)"
