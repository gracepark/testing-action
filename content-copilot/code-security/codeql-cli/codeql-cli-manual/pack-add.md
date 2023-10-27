# pack add

[Experimental] Adds a list of QL library packs with optional version
ranges as dependencies of the current package, and then installs them.

GitHub CodeQL is licensed on a per-user basis upon installation. You can use CodeQL only for certain tasks under the license restrictions. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/about-the-codeql-cli#about-the-github-codeql-license)."

If you have a GitHub Advanced Security license, you can use CodeQL for automated analysis, continuous integration, and continuous delivery. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.

To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.

</div>

## Synopsis

```shell copy
codeql pack add <options>... -- <scope/name[@range]>...
```

## Description

\[Experimental] Adds a list of QL library packs with optional version
ranges as dependencies of the current package, and then installs them.

This command modifies the qlpack.yml file of the current package.
Formatting and comments will be removed.

Available since `v2.6.0`.

## Options

### Primary Options

#### `<scope/name[@range]>...`

\[Mandatory] The scope, name, and optional version range of the pack to
add to the dependency list.

If no version range is specified, or if the version range is specified
as 'latest', the latest version of the pack is downloaded, and a
dependency is added to qlpack.yml that allows any version that is
compatible with the downloaded version.

If a single version is specified, that version of the pack is
downloaded, and a dependency is added to qlpack.yml that allows any
version that is compatible with the specified version.

If a version range is specified, the latest version of the pack that
satisfies the specified range is downloaded, and a dependency is added
to qlpack.yml with the specified version range.

#### `--dir=<dir>`

The root directory of the package.

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

#### `--[no-]allow-prerelease`

Allow packs with pre-release version qualifiers (e.g.,
`X.Y.Z-qualifier`) to be used. Without this flag, pre-release packs will
be ignored.

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