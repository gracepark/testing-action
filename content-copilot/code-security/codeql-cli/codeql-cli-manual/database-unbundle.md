# database unbundle

Extracts a CodeQL database archive.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql database unbundle <options>... -- <archive>
```

## Description

Extracts a CodeQL database archive.

This command extracts a CodeQL database archive created by [codeql database bundle](/code-security/codeql-cli/codeql-cli-manual/database-bundle). It is similar to using unzip to extract the database, but performs better in certain scenarios (for instance, unzip is very slow on Windows) and supports additional options such as setting the name of the database extracted.

## Options

### Primary Options

#### `<archive>`

\[Mandatory] Path to the CodeQL database archive to unzip.

#### `--name=<name>`

The name to give the CodeQL database created. If not provided, this will
match whatever name the database has in the archive.

#### `--target=<target>`

The directory to unzip the CodeQL database in. If not provided, this
will default to the current working directory.

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
