# resolve files

[Deep plumbing] Expand a set of file inclusion/exclusion globs.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql resolve files <options>... -- <dir>
```

## Description

\[Deep plumbing] Expand a set of file inclusion/exclusion globs.

This plumbing command is responsible for expanding the command-line
parameters of subcommands that operate on multiple files, identified by
their paths. By default, all files are included, and so running this
command without any filter arguments will collect all files in a
directory.

The `--include`, `--exclude`, and `--prune` options all take glob
patterns, which can use the following wildcard characters:

- A single "?" matches any character other than a forward/backward
  slash;
- A single "\*" matches any number of characters other than a
  forward/backward slash;
- The pattern "\*\*" matches zero or more complete directory
  components.

## Options

### Primary Options

#### `<dir>`

The directory to be searched.

#### `--format=<fmt>`

Select output format, either `text` _(default)_ or `json`.

### Options for limiting the set of collected files

#### `--include-extension=<.ext>`

Include all files in the search directory tree that have the given
extension. Typically, you should include the dot before the extension.
For example, passing `--include-extension .xml` will include all files
with the ".xml" extension. This option is incompatible with negated
`--include` options.

#### `--include=<glob>`

Include all files and directories in the search directory tree that
match the given glob, using each file and directory's relative path
from the search directory. If the glob begins with a `!` character, the
matching files and directories would instead be excluded.

`--include` options are processed in order, with later options
overriding earlier ones. For example,
`--include ** --include !sub/*.ts --include sub/main.*` would include
`sub/main.ts` (because it is included by `sub/main.*`), exclude
`sub/index.ts` (because it is excluded by `!sub/*.ts`), and include
`sub/test.js` (because it is included by `**` without being subsequently
excluded.)

#### `--also-match=<glob>`

Require all results to also match the given glob, using each file and
directory's relative path from the search directory. This option has
the same structure and the same interpretation as `--include` but
specifies a separate sequence of globs that are applied in conjunction
with `--include`.

#### `--exclude=<glob>`

Exclude all files and directories that match the given glob, using each
file and directory's relative path from the search directory. This
option overrides all include options. This option is incompatible with
negated `--include` options.

#### `--prune=<glob>`

Exclude all files and directories that match the given glob, using each
file and directory's relative path from the search directory. This
option overrides all include options. This option is incompatible with
negated `--include` options.

#### `--size-limit=<bytes>`

Exclude all files whose size exceeds the given limit. The size limit is
in bytes, or in kibibytes (KiB) with the "k" suffix, in mebibytes
(MiB) with the "m" suffix, and in gibibytes (GiB) with the "g"
suffix. This option overrides all include options.

#### `--total-size-limit=<bytes>`

Make the command exit with an error if the combined size of all resolved
files would exceed the given limit. The size limit is in bytes, or in
kibibytes (KiB) with the "k" suffix, in mebibytes (MiB) with the "m"
suffix, and in gibibytes (GiB) with the "g" suffix.

#### `--[no-]follow-symlinks`

Follow any symbolic links to their targets.

#### `--[no-]find-any`

Find at most one match (as opposed to all matches).

Available since `v2.11.3`.

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
