# Create a group assignment

You can create a collaborative assignment for teams of students who participate in your course.

**Who can use this feature**: Organization owners who are admins for a classroom can create and manage group assignments for a classroom. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."
## About group assignments

A group assignment is collaborative coursework for groups of students on GitHub Classroom. Students can work together on a group assignment in a shared repository, like a team of professional developers.

When a student accepts a group assignment, the student can create a new team or join an existing team. GitHub Classroom saves the teams for an assignment as a set. You can name the set of teams for a specific assignment when you create the assignment, and you can reuse that set of teams for a later assignment.

For each group assignment, GitHub Classroom automatically creates a single shared repository for the team to access. The repository can be empty, or you can create the repository from a template repository with starter code, documentation, tests, and other resources. The repository belongs to your organization account on GitHub, and GitHub Classroom grants access to teams that students create or join when accepting the assignment.

Each assignment has a title and an optional deadline. You can choose the visibility of repositories that GitHub Classroom creates and choose access permissions. You can also automatically grade assignments and create a dedicated space to discuss the assignment with the student.

You can decide how many teams one assignment can have, and how many members each team can have. Each team that a student creates for an assignment is a team within your organization on GitHub. The visibility of the team is secret. Teams that you create on GitHub will not appear in GitHub Classroom. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

You can reuse existing assignments in any other classroom you have admin access to, including classrooms in a different organization. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)."

## Prerequisites

You must create a classroom before you can create an assignment. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms)."

## Creating an assignment

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. Navigate to a classroom.
1. In the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-repo" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg> **Assignments** tab, create the assignment.
   - If this your first assignment, click **Create an assignment**.
   - Otherwise, click **New assignment** on the right side.

## Setting up the basics for an assignment

Name your assignment, decide whether to assign a deadline, define teams, and choose the visibility of assignment repositories.

- [Naming an assignment](#naming-an-assignment)
- [Assigning a deadline for an assignment](#assigning-a-deadline-for-an-assignment)
- [Choosing an assignment type](#choosing-an-assignment-type)
- [Defining teams for an assignment](#defining-teams-for-an-assignment)
- [Choosing a visibility for assignment repositories](#choosing-a-visibility-for-assignment-repositories)

### Naming an assignment

For a group assignment, GitHub Classroom names repositories by the repository prefix and the name of the team. By default, the repository prefix is the assignment title. For example, if you name an assignment "assignment-1" and the team's name on GitHub is "student-team", the name of the assignment repository for members of the team will be `assignment-1-student-team`.

Under "Assignment title", type a title for the assignment. Optionally, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="The pencil icon" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> to edit the prefix.

### Assigning a deadline for an assignment

Optionally, you can assign a deadline to the assignment. Under "Deadline (optional)", click in the text field, then use the date picker to assign a deadline.

Optionally, to make the deadline a cutoff date, select **This is a cutoff date**. If you use a cutoff date, students will lose write access to their assignment repositories after the cutoff date has passed unless they receive an extension. For more information on extending assignment deadlines, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/extending-an-assignments-deadline-for-an-individual-or-group)."

### Choosing an assignment type

Under "Individual or group assignment", select the drop-down menu, then click **Group assignment**. You can't change the assignment type after you create the assignment. If you'd rather create an individual assignment, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)."

### Defining teams for an assignment

If you've already created a group assignment for the classroom, you can reuse a set of teams for the new assignment. To create a new set with the teams that your students create for the assignment, type the name for the set. Optionally, type the maximum number of team members and total teams.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**:

- We recommend including details about the set of teams in the name for the set. For example, if you want to use the set of teams for one assignment, name the set after the assignment. If you want to reuse the set throughout a semester or course, name the set after the semester or course.

- If you'd like to assign students to a specific team, give your students a name for the team and provide a list of members.

</div>

### Choosing a visibility for assignment repositories

The repositories for an assignment can be public or private. If you use private repositories, only the student or team can see the feedback you provide.

You can also decide whether to grant students admin permissions to the repository for an assignment. Grant admin permissions if the student should be able to perform administrative tasks for the assignment repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

Under "Repository visibility", select a visibility. Optionally, select **Grant students admin access to their repository**.

When you're done, click **Continue** to configure starter code and a development environment for the assignment.

## Adding starter code and configuring a development environment

Optionally, decide whether to provide empty repositories or starter code, and preconfigure a development environment for your students.

- [Choosing a template repository](#choosing-a-template-repository)
- [Choosing an integrated development environment (IDE)](#choosing-an-integrated-development-environment-ide)

### Choosing a template repository

By default, a new assignment will create an empty repository for each team that a student creates. You can optionally choose a template repository as starter code for the assignment. For more information about template repositories, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The template repository must belong to your organization or be a public repository on GitHub.

</div>

Under "Add a template repository to give students starter code", select the **Select a repository** drop-down, then type a search query. In the list of results, click the template repository you'd like to use for starter code.

### Choosing an integrated development environment (IDE)

You can optionally configure an assignment to use an integrated development environment (IDE). IDEs allow your students to write code, run programs, and collaborate without installing Git and a full development toolchain on the student's computer. If you choose an IDE for an assignment, students can still check out and run code locally on a computer with the necessary software. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

You can choose to configure an assignment with GitHub Codespaces to give students access to a browser-based Visual Studio Code environment with one-click setup. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)."

To choose an IDE for the assignment, select the Add an editor drop-down menu and click the IDE you'd like your students to use.

When you're done, click **Continue** to configure automatic grading and feedback for the project.

## Providing feedback

Optionally, you can automatically grade assignments and create a space for discussing each submission with the team.

- [Testing assignments automatically](#testing-assignments-automatically)
- [Creating a pull request for feedback](#creating-a-pull-request-for-feedback)

### Testing assignments automatically

You can use autograding to automatically check a student's work for an assignment on GitHub Classroom. You configure tests for an assignment, and the tests run immediately every time a student pushes to an assignment repository on GitHub.com. The student can view the test results, make changes, and push to see new results. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding)."

Under "Add autograding tests", select the **Add test** drop-down menu, then click the grading method you want to use. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding#grading-methods)."

Define the parameters of your test case, like the name, commands, inputs, outputs, timeout, and points. When you're done, click **Save test case**.

You can add more tests with the **Add test** drop-down menu, and you can edit or delete existing tests with <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="The pencil icon" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> or <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-label="The trash icon" role="img"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>.

### Creating a pull request for feedback

You can automatically create a pull request where you can provide feedback and answer a student's questions about an assignment. For more information about the review of changes in a pull request, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)." For more information on leaving feedback in a pull request, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/leave-feedback-with-pull-requests)."

To create pull requests for the discussion of feedback, select **Enable feedback pull requests**.

To create the assignment, click **Create assignment**.

## Inviting students to an assignment

By default, GitHub Classroom enables an invitation URL for each assignment you create. Students can accept and submit the assignment while the invitation URL is enabled. You can share the URL with your students on your LMS, course homepage, or wherever you post assignments. Students can also navigate to the assignment on GitHub Classroom if the student has already accepted an assignment for the classroom.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: Be careful where you share invitation URLs. Anyone with an invitation URL for an assignment can accept the invitation and associate a personal account on GitHub with an identifier in your roster.

</div>

You can see the teams that are working on or have submitted an assignment in the **Teams** tab for the assignment. To prevent acceptance or submission of an assignment by students, you can change the "Assignment Status" within the "Edit assignment" view. When an assignment is Active, students will be able to accept it using the invitation link. When it is Inactive, this link will no longer be valid.

## Monitoring students' progress

The assignment overview page provides an overview of your assignment acceptances and student progress. For more information on viewing and using the assignment overview page, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/monitor-students-progress-with-the-assignment-overview-page)."

## Next steps

- After you create the assignment and your students form teams, team members can start work on the assignment using Git and GitHub's features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and the team can review the commit history for the repository. For more information, see "[AUTOTITLE](/get-started)," "[AUTOTITLE](/repositories)," "[AUTOTITLE](/get-started/using-git)," and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests)," and the free course on [resolving merge conflicts](https://github.com/skills/resolve-merge-conflicts) from GitHub Skills.

- When a team finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand how the team collaborated. For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository)."

- You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" and "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)." For more information about creating saved replies to provide feedback for common errors, see "[AUTOTITLE](/get-started/writing-on-github/working-with-saved-replies/about-saved-replies)."

## Further reading

- "[GitHub Global Campus for teachers](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)"
- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)"
