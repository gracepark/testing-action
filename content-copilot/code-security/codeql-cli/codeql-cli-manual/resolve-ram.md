# resolve ram

[Deep plumbing] Prepare RAM options.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql resolve ram [--ram=<MB>] <options>...
```

## Description

\[Deep plumbing] Prepare RAM options.

This deep plumbing command prepares appropriate command-line options to
start a subcommand that will execute a QL query evaluator. It knows
appropriate heuristics for deciding whether to keep some of the
configured memory outside the Java heap.

In particular, this should be used to find appropriate `-J-Xmx` and
`--off-heap-ram` options before staring a query server based on a
desired _total_ RAM amount.

## Options

### Primary Options

#### `--format=<fmt>`

Select output format. Choices include:

`lines` _(default)_: Print command-line arguments on one line each.

`json`: Print them as a JSON array.

### Options from the invoking command's command line

#### `-M, --ram=<MB>`

Set total amount of RAM the query evaluator should be allowed to use.

### Common options

#### `-h, --help`

Show this help text.

#### `-J=<opt>`

\[Advanced] Give option to the JVM running the command.

(Beware that options containing spaces will not be handled correctly.)

#### `-v, --verbose`

Incrementally increase the number of progress messages printed.

#### `-q, --quiet`

Incrementally decrease the number of progress messages printed.

#### `--verbosity=<level>`

\[Advanced] Explicitly set the verbosity level to one of errors,
warnings, progress, progress+, progress++, progress+++. Overrides `-v`
and `-q`.

#### `--logdir=<dir>`

\[Advanced] Write detailed logs to one or more files in the given
directory, with generated names that include timestamps and the name of
the running subcommand.

(To write a log file with a name you have full control over, instead
give `--log-to-stderr` and redirect stderr as desired.)
