# bqrs diff

Compute the difference between two result sets.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql bqrs diff <options>... -- <file1> <file2>
```

## Description

Compute the difference between two result sets.

## Options

### Primary Options

#### `<file1>`

\[Mandatory] First BQRS file to compare.

#### `<file2>`

\[Mandatory] Second BQRS file to compare.

#### `--left=<file>`

Write rows only present in `file1` to this file.

#### `--right=<file>`

Write rows only present in `file2` to this file.

#### `--both=<file>`

Write rows present in both `file1` and `file2` to this file.

#### `--retain-result-sets=<result-set>[,<result-set>...]`

Comma-separated list of result set names to copy directly to the
corresponding output instead of comparing. If --both is given, that
output is taken from `file1`. Defaults to 'nodes,edges,subpaths' to
simplify handling of path-problem results.

#### `--[no-]compare-internal-ids`

\[Advanced] Include internal entity IDs in the comparison. Entity IDs
are not comparable across databases, but for result sets that originate
from the same database this can help distinguish entities with the same
location and label.

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
