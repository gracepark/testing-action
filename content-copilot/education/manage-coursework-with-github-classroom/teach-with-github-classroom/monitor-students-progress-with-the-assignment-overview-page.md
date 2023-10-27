# Monitor students' progress with the assignment overview page

You can use the assignment overview page to track the progress of each student or team on an assignment.

**Who can use this feature**: Organization owners who are admins for a classroom can create and manage group assignments for a classroom. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."

## About the assignment overview page

Each assignment you create on GitHub Classroom has an assignment overview page. The assignment overview page provides an overview of your assignment acceptances and student progress. You may see different summary information on an assignment overview page based on the configurations of your assignments.

For individual assignments, you can view the following information at the top of the assignment overview page:

- **Rostered students**: The number of students on the classroom's roster.
- **Added students**: The number of GitHub accounts that have accepted the assignment and are not associated with a roster identifier.
- **Accepted students**: The number of accounts that have accepted this assignment.
- **Assignment submissions**: The number of students that have submitted the assignment. Submission is triggered at the assignment deadline.
- **Passing students**: The number of students currently passing the autograding tests for this assignment.

For group assignments, you can view the following information at the top of the assignment overview page:

- **Total teams**: The number of teams that have been created.
- **Rostered students**: The number of students on the classroom's roster.
- **Students not on a team**: The number of students on the classroom roster who have not yet joined a team.
- **Accepted teams**: The number of teams who have accepted this assignment.
- **Assignment submissions**: The number of teams that have submitted the assignment. Submission is triggered at the assignment deadline.
- **Passing teams**: The number of teams that are currently passing the autograding tests for this assignment.

## Viewing the assignment overview page for an assignment

The assignment overview page displays information for a specific assignment. You can view general information at a glance, or apply searches, sorts, and filters to find students or teams that meet specific criteria.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. Navigate to a classroom.
1. To open the assignment overview page for an assignment, in the "Assignments" section, click the name of that assignment.

## Searching and sorting the assignment overview page

You can search and sort the assignment overview page to find specific students or teams.

1. To find a specific student or team on the assignment overview page, in the search bar, type the student's GitHub handle, the student's identifier, or the team's name, then press <kbd>Enter</kbd> or <kbd>Return</kbd>.

   If the search term you enter matches multiple students or teams, each student or team will be shown in the search results. For example, if you have two students with the GitHub handles "@octocat" and "@monacat", and you search for "cat", both "@octocat" and "@monacat" will appear in the search results.
1. To sort the students or teams displayed on an assignment overview page, select **Sort by:** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>, then click **Alphabetical A-Z**, **Alphabetical Z-A**, **Newest**, or **Oldest**.

   The **Newest** sort orders the results from the most recently updated assignment to the least recently updated assignment, while the **Oldest** sort does the opposite.
1. Optionally, to remove all filters, searches, and sorts, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-hidden="true"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> **Clear current search query, filters, and sorts**.

## Filtering the assignment overview page

Using a series of dropdown menus, you can apply multiple filters to the assignment overview page to search for students or teams based on specific criteria. You can even apply multiple filters from a single dropdown menu to include all students or teams that match the criteria.

1. To filter for students with unlinked accounts, select the **Unlinked accounts** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> dropdown menu, then click **Student identifiers** or **GitHub accounts**.
1. To filter by which students have or haven't accepted the assignment, select the **Accepted** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> dropdown menu, then click **Accepted** or **Unaccepted**.
1. To filter by the submission status for each student's assignment repository, select the **Submitted** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> dropdown menu, then click **Submitted**, **On-time**, **Late**, or **Not submitted**.
1. To filter for students by passing or failing grades, select the **Passing** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> dropdown menu, then click **Passing** or **Failing**.
1. To unapply a filter, select the associated dropdown menu, then click the filter once more. A <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-hidden="true"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> is displayed alongside the name of an applied filter, while unapplied filters only display their names.
1. Optionally, to remove all filters, searches, and sorts, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-hidden="true"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> **Clear current search query, filters, and sorts**.
