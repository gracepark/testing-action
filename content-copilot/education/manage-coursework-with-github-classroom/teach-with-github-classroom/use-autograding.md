# Use autograding

You can automatically provide feedback on code submissions from your students by configuring tests to run in the assignment repository.

**Who can use this feature**: Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."
## About autograding

You can use autograding to automatically check a student's work for an assignment on GitHub Classroom. You configure tests for an assignment, and the tests run immediately every time a student pushes to an assignment repository on GitHub.com. The student can view the test results, make changes, and push to see new results.

After a student accepts an assignment, on every push to the assignment repository, GitHub Actions runs the commands for your autograding test in a Linux environment containing the student's newest code. GitHub Classroom creates the necessary workflows for GitHub Actions. You don't need experience with GitHub Actions to use autograding. For more information on workflows and GitHub Actions, see "[AUTOTITLE](/actions/guides/about-continuous-integration)."

You can use a testing framework, run a custom command, write input/output tests, or combine different testing methods. The Linux environment for autograding contains many popular software tools. For more information, see the details for the latest version of Ubuntu in "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)."

You can see an overview of which students are passing autograding tests by navigating to the assignment in GitHub Classroom. A green checkmark means that all tests are passing for the student, and a red X means that some or all tests are failing for the student. If you award points for one or more tests, then a bubble shows the score for the tests out of the maximum possible score for the assignment.

## Grading methods

There are two grading methods: input/output tests and run command tests.

### Input/output test

An input/output test optionally runs a setup command, then provides standard input to a test command. GitHub Classroom evaluates the test command's output against an expected result.

| Setting | Description |
| :- | :- |
| **Test name** | The name of the test, to identify the test in logs |
| **Setup command** | _Optional_. A command to run before tests, such as compilation or installation |
| **Run command** | The command to run the test and generate standard output for evaluation |
| **Inputs** | Standard input for run command |
| **Expected output** | The output that you want to see as standard output from the run command |
| **Comparison** | The type of comparison between the run command's output and the expected output<br/><br/><ul><li>**Included**: Passes when the expected output appears<br/>anywhere in the standard output from the run command</li><li>**Exact**: Passes when the expected output is completely identical<br/>to the standard output from the run command</li><li>**Regex**: Passes if the regular expression in expected<br/>output matches against the standard output from the run command</li></ul> |
| **Timeout** | In minutes, how long a test should run before resulting in failure |
| **Points** | _Optional_. The number of points the test is worth toward a total score |

### Run command test

A run command test runs a setup command, then runs a test command. GitHub Classroom checks the exit status of the test command. An exit code of `0` results in success, and any other exit code results in failure.

GitHub Classroom provides presets for language-specific run command tests for a variety of programming languages. For example, the **Run node** test prefills the setup command with `npm install` and the test command with `npm test`.

| Setting | Description |
| :- | :- |
| **Test name** | The name of the test, to identify the test in logs |
| **Setup command** | _Optional_. A command to run before tests, such as compilation or installation |
| **Run command** | The command to run the test and generate an exit code for evaluation |
| **Timeout** | In minutes, how long a test should run before resulting in failure |
| **Points** | _Optional_. The number of points the test is worth toward a total score |

## Configuring autograding tests for an assignment

You can add autograding tests during the creation of a new assignment. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" or "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)."

You can add, edit, or delete autograding tests for an existing assignment. All changes made via the Classroom UI will be pushed to the existing student repositories, so use caution when editing your tests.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. To the right of the assignment you want to edit, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="The settings link for the assignment" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>.
1. In the left sidebar, click **Grading and feedback**.
1. Add, edit, or delete an autograding test.
    - To add a test, under "Add autograding tests", select the **Add test** dropdown menu, then click the grading method you want to use.
      Configure the test, then click **Save test case**.

    - To edit a test, to the right of the test name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="The pencil icon" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>.
      Configure the test, then click **Save test case**.

    - To delete a test, to the right of the test name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-label="The trash icon" role="img"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>.

1. At the bottom of the page, click **Update assignment**.

## Viewing and downloading results from autograding tests

### Download autograding results

You can also download a CSV of your students' autograding scores via the "Download" button. This will generate and download a CSV containing a link to the student's repository, their GitHub handle, roster identifier, submission timestamp, and autograding score.

### View individual logs

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. In the list of assignments, click the assignment you want to view.
1. To the right of a submission, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-checklist" aria-label="The checklist icon" role="img"><path d="M2.5 1.75v11.5c0 .138.112.25.25.25h3.17a.75.75 0 0 1 0 1.5H2.75A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8.5C12.216 0 13 .784 13 1.75v7.736a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13.274 9.537v-.001l-4.557 4.45a.75.75 0 0 1-1.055-.008l-1.943-1.95a.75.75 0 0 1 1.062-1.058l1.419 1.425 4.026-3.932a.75.75 0 1 1 1.048 1.074ZM4.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM4 7.75A.75.75 0 0 1 4.75 7h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 4 7.75Z"></path></svg>.
1. Review the test output. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)."

## Further reading

- [GitHub Actions documentation](/actions)
