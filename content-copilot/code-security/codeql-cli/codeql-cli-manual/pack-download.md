# pack download

[Experimental] Download the set of qlpacks referenced by the query
spec of the command line from the registry. Packs can be provided by
name or implicitly inside of a query suite (.qls) file.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql pack download [--dir=<dir>] [--force] <options>... -- <scope/name[@version]|suite.qls>...
```

## Description

\[Experimental] Download the set of qlpacks referenced by the query
spec of the command line from the registry. Packs can be provided by
name or implicitly inside of a query suite (.qls) file.

The packs will be downloaded and unzipped into the package cache by
default.

Available since `v2.6.0`.

## Options

### Primary Options

#### `<scope/name[@version]|suite.qls>...`

\[Mandatory] List of CodeQL packs and query suites to download. If a
query suite is provided, its instructions will be inspected and all
referenced CodeQL packs will be downloaded. If you don't specify a
version for a CodeQL pack, then the latest version will be downloaded.

#### `--format=<fmt>`

Select output format, either `text` _(default)_ or `json`.

#### `-d, --dir=<dir>`

The directory to download the pack to. Defaults to installing into the
package cache.

#### `--for-pack=<pack>`

The pack whose dependencies are being downloaded. The package registry
for each pack will be determined by the 'registries' property of
\<pack>.

#### `--[no-]allow-prerelease`

Allow packs with pre-release version qualifiers (e.g.,
`X.Y.Z-qualifier`) to be used. Without this flag, pre-release packs will
be ignored.

Available since `v2.11.3`.

#### `-f, --[no-]force`

Allow overwriting already existing packs.

### Options for finding QL packs (which may be necessary to interpret query suites)

#### `--search-path=<dir>[:<dir>...]`

A list of directories under which QL packs may be found. Each directory
can either be a QL pack (or bundle of packs containing a
`.codeqlmanifest.json` file at the root) or the immediate parent of one
or more such directories.

If the path contains more than one directory, their order defines
precedence between them: when a pack name that must be resolved is
matched in more than one of the directory trees, the one given first
wins.

Pointing this at a checkout of the open-source CodeQL repository ought
to work when querying one of the languages that live there.

If you have checked out the CodeQL repository as a sibling of the
unpacked CodeQL toolchain, you don't need to give this option; such
sibling directories will always be searched for QL packs that cannot be
found otherwise. (If this default does not work, it is strongly
recommended to set up `--search-path` once and for all in a per-user
configuration file).

(Note: On Windows the path separator is `;`).

#### `--additional-packs=<dir>[:<dir>...]`

If this list of directories is given, they will be searched for packs
before the ones in `--search-path`. The order between these doesn't
matter; it is an error if a pack name is found in two different places
through this list.

This is useful if you're temporarily developing a new version of a pack
that also appears in the default path. On the other hand, it is _not
recommended_ to override this option in a config file; some internal
actions will add this option on the fly, overriding any configured
value.

(Note: On Windows the path separator is `;`).

### Options for configuring the CodeQL package manager

#### `--registries-auth-stdin`

Authenticate to GitHub Enterprise Server Container registries by passing
a comma-separated list of \<registry\_url>=\<token> pairs.

For example, you can pass
`https://containers.GHEHOSTNAME1/v2/=TOKEN1,https://containers.GHEHOSTNAME2/v2/=TOKEN2`
to authenticate to two GitHub Enterprise Server instances.

This overrides the CODEQL\_REGISTRIES\_AUTH and GITHUB\_TOKEN environment
variables. If you only need to authenticate to the github.com Container
registry, you can instead authenticate using the simpler
`--github-auth-stdin` option.

#### `--github-auth-stdin`

Authenticate to the github.com Container registry by passing a
github.com GitHub Apps token or personal access token via standard
input.

To authenticate to GitHub Enterprise Server Container registries, pass
`--registries-auth-stdin` or use the CODEQL\_REGISTRIES\_AUTH environment
variable.

This overrides the GITHUB\_TOKEN environment variable.

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