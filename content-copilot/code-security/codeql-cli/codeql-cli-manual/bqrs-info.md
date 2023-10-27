# bqrs info

Display metadata for a BQRS file.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql bqrs info <options>... -- <file>
```

## Description

Display metadata for a BQRS file.

This command displays an overview of the data contained in the compact
binary BQRS file that is the result of executing a query. It shows the
names and sizes of each result set (table) in the BQRS file, and the
column types of each result set.

It can also optionally precompute offsets for using the pagination
options of [codeql bqrs decode](/code-security/codeql-cli/codeql-cli-manual/bqrs-decode). This is mainly useful for IDE plugins.

## Options

### Primary Options

#### `<file>`

\[Mandatory] BQRS file to show information about.

#### `--format=<fmt>`

Select output format, either `text` _(default)_ or `json`.

### Supporting pagination in codeql bqrs decode

#### `--paginate-rows=<num>`

\[Advanced] When given together with `--format=json`, compute a table
of byte offsets that can later be given to the `--start-at` option of
[codeql bqrs decode](/code-security/codeql-cli/codeql-cli-manual/bqrs-decode), to start streaming results at positions 0, _\<num>_, 2\*_\<num>_, and so
forth.

#### `--paginate-result-set=<name>`

\[Advanced] Only process `--paginate-rows` for result sets with this
name. (If the name does not match any result set, `--paginate-rows` is a
no-op).

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
