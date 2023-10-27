# test extract

[Plumbing] Build a dataset for a test directory.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql test extract <options>... -- <testDir>
```

## Description

\[Plumbing] Build a dataset for a test directory.

Build a database for a specified test directory, without actually
running any test queries. Outputs the path to the raw QL dataset to
execute test queries against.

## Options

### Primary Options

#### `<testDir>`

\[Mandatory] The path to the test directory.

#### `--database=<dir>`

Override the location of the database being created. By default it will
be a subdirectory whose name is derived from the name of the test
directory itself with '.testproj' appended.

#### `--search-path=<dir>[:<dir>...]`

A list of directories under which extractor packs may be found. The
directories can either be the extractor packs themselves or directories
that contain extractors as immediate subdirectories.

If the path contains multiple directory trees, their order defines
precedence between them: if the target language is matched in more than
one of the directory trees, the one given first wins.

The extractors bundled with the CodeQL toolchain itself will always be
found, but if you need to use separately distributed extractors you need
to give this option (or, better yet, set up `--search-path` in a
per-user configuration file).

(Note: On Windows the path separator is `;`).

#### `--cleanup`

Remove the test database instead of creating it.

#### `--[no-]show-extractor-output`

\[Advanced] Show the output from extractor scripts that create test
databases. This can be useful while developing or editing test cases.
Beware that it can cause duplicated or malformed output if you use this
with multiple threads!

#### `--[no-]check-undefined-labels`

\[Advanced] Report errors for undefined labels.

#### `--[no-]check-unused-labels`

\[Advanced] Report errors for unused labels.

#### `--[no-]check-repeated-labels`

\[Advanced] Report errors for repeated labels.

#### `--[no-]check-redefined-labels`

\[Advanced] Report errors for redefined labels.

#### `--[no-]check-use-before-definition`

\[Advanced] Report errors for labels used before they're defined.

#### `--[no-]fail-on-trap-errors`

\[Advanced] Exit non-zero if an error occurs during trap import.

#### `--[no-]include-location-in-star`

\[Advanced] Construct entity IDs that encode the location in the TRAP
file they came from. Can be useful for debugging of TRAP generators, but
takes up a lot of space in the dataset.

#### `--format=<fmt>`

Select output format, either `text` _(default)_ or `json`.

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
