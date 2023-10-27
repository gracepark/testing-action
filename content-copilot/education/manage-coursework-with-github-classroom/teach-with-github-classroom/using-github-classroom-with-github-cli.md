# Using GitHub Classroom with GitHub CLI

You can use `gh`, the GitHub command line interface, to work with GitHub Classroom directly from your command line.

## About GitHub Classroom CLI 

GitHub CLI is an open source tool for using GitHub from your computer's command line. When you're working from the command line, you can use the GitHub CLI to save time and avoid switching context. For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

You can work with GitHub Classroom in the  GitHub CLI to:

- [List classrooms](#list-classrooms)
- [View classroom information](#view-classroom-information)
- [List assignments](#list-assignments)
- [List accepted assignments](#list-accepted-assignments)
- [View assignment information](#view-assignment-information)
- [Clone an assignment's starter code repository](#clone-an-assignments-starter-code-repository)
- [Clone a student’s assignment repository](#clone-a-students-assignment-repository)

## Setting up GitHub CLI 

For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).

## Using the GitHub Classroom extension with GitHub CLI 

If you have not already done so, run `gh auth login` to authenticate with your GitHub account.

To install the GitHub Classroom extension, run `gh extension install github/gh-classroom`.

To use `gh` to work with GitHub Classroom, type `gh classroom SUBCOMMAND`.

As an example of a series of commands you might use to work with GitHub Classroom, you could:
- List your classrooms:<br>
  `gh classroom list`
- List the assignments for a specific classroom:<br>
  `gh classroom assignments`
- View information for a specific assignment:<br>
  `gh classroom assignment`

## `gh` subcommands for GitHub Classroom 

These sections give example subcommands for each of the available operations. When applicable, the CLI will prompt you to choose a classroom after you run the subcommand.

On the command line, use `gh classroom --help` for general help or `gh classroom SUBCOMMAND --help` for help with a specific subcommand.

### List classrooms

```shell
gh classroom list
```

List of classrooms you own.

### View classroom information

```shell
gh classroom view
```

Display the classroom ID, classroom slug, title, and other information about a classroom.

### List assignments

```shell
gh classroom assignments
```

Display a list of assignments for a classroom.

### List accepted assignments

```shell
gh classroom accepted-assignments
```

Display a list of accepted assignments and information about the student's assignments.

### View assignment information

```shell
gh classroom assignment
```

Displays assignment information.

### Clone an assignment's starter code repository

```shell
gh classroom clone starter-repo
```

Clones starter code repo used by an assignment. By default, the starter code is cloned into the current directory. To clone into a different directory, use the `--directory` flag. If the directory does not exists, it will be created.

### Clone a student’s assignment repository

```shell
gh classroom clone student-repos
```

Clones student repositories from a given assignment. By default, the student repos are cloned into the current directory a directory named after the assignment slug. To clone into a different directory, use the `--directory` flag. If the directory does not exists, it will be created.

By default, results are paginated by 30. To get a different number of repositories, use the `--per-page NUMBER` flag.
