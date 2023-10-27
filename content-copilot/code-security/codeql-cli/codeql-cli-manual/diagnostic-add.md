# diagnostic add

[Experimental] [Plumbing] Add a piece of diagnostic information.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql diagnostic add (--diagnostic-dir=<diagnosticDir>) --source-id=<id> --source-name=<name> <options>...
```

## Description

\[Experimental] \[Plumbing] Add a piece of diagnostic information.

Available since `v2.12.6`.

## Options

### Primary Options

#### `--markdown-message=<markdownMessage>`

Message for the diagnostic, in GitHub-flavored Markdown format.

#### `--plaintext-message=<plaintextMessage>`

Message for the diagnostic, in plain text. This option should only be
used when populating a Markdown message with --markdown-message is not
practical.

#### `--severity=<severity>`

Severity of the diagnostic. Can be "error", "warning", or "note".

#### `--help-link=<helpLinks>`

Help links relevant to the diagnostic.

#### `--attributes-json=<attributesJson>`

Structured metadata relevant to the diagnostic.

### Options specifying where to save the diagnostic information

Exactly one of these options must be given.

#### `--diagnostic-dir=<diagnosticDir>`

Directory to which we should add the diagnostic.

### Options that indicate where the diagnostic message can be displayed

#### `--ready-for-status-page`

Indicate that the diagnostic is suitable for display on the status page.

#### `--ready-for-cli-summary-table`

Indicate that the diagnostic is suitable for display in the diagnostics
summary table printed by commands like `database analyze`.

### Options describing the source of the diagnostic

#### `--source-id=<id>`

\[Mandatory] An identifier for the source of this diagnostic.

#### `--source-name=<name>`

\[Mandatory] A human-readable description of the source of this
diagnostic.

#### `--extractor-name=<extractorName>`

The name of the CodeQL extractor, if this diagnostic was produced by a
CodeQL extractor.

### Options describing the diagnostic's location

#### `--file-path=<file>`

The path of the file to which the diagnostic applies, relative to the
source root.

#### `--start-line=<startLine>`

The 1-based line number (inclusive) where the diagnostic's location
starts.

#### `--start-column=<startColumn>`

The 1-based column number (inclusive) where the diagnostic's location
starts.

#### `--end-line=<endLine>`

The 1-based line number (inclusive) where the diagnostic's location
ends.

#### `--end-column=<endColumn>`

The 1-based column number (inclusive) where the diagnostic's location
ends.

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