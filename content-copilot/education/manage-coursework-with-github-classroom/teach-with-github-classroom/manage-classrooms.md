# Manage classrooms

You can create and manage a classroom for each course that you teach using GitHub Classroom.

**Who can use this feature**: Organization owners who are admins for a classroom can manage the classroom for an organization. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."

## About classrooms

A classroom in GitHub Classroom is where teachers and students interact during a course. Teachers can create a student roster for the classroom, then create, assign, review, and grade assignments within the classroom.

## About management of classrooms

GitHub Classroom uses organization accounts on GitHub to manage permissions, administration, and security for each classroom that you create. Each organization can have multiple classrooms.

After you create a classroom, GitHub Classroom will prompt you to invite teaching assistants (TAs) and admins to the classroom. Each classroom can have one or more admins. Admins can be teachers, TAs, or any other course administrator who you'd like to have control over your classrooms on GitHub Classroom.

Invite TAs and admins to your classroom by inviting the personal accounts on GitHub to your organization as organization owners and sharing the URL for your classroom. Organization owners can administer any classroom for the organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" and "[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)."

When you're done using a classroom, you can archive the classroom and refer to the classroom, roster, and assignments later, or you can delete the classroom if you no longer need the classroom.

You can reuse existing assignments in any other classroom you have admin access to, including classrooms in a different organization. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)."

You can also view your classrooms and assignments directly from the GitHub command line interface with the GitHub Classroom extension. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)."

## About classroom rosters

Each classroom has a roster. A roster is a list of identifiers for the students who participate in your course.

When you first share the URL for an assignment with a student, the student must sign into GitHub with a personal account to link the personal account to an identifier for the classroom. After the student links a personal account, you can see the associated personal account in the roster. You can also see when the student accepts or submits an assignment.

## Prerequisites

You must have an organization account on GitHub to manage classrooms on GitHub Classroom. For more information, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)" and "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

You must authorize the OAuth app for GitHub Classroom for your organization to manage classrooms for your organization account. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."

## Creating a classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. Click **New classroom** on the right side of the page.
1. In the list of organizations, click the organization you'd like to use for your classroom. Optionally, you can create a new organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."
1. Under "Classroom name", type the name for your classroom.
1. Click **Create classroom**.

After you create a classroom, you can begin creating assignments for students. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-the-git-and-github-starter-assignment)," "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)," "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)," or "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)."

## Creating a roster for your classroom

You can create a roster of the students who participate in your course.

If your course already has a roster, you can update the students on the roster or delete the roster. For more information, see "[Adding a student to the roster for your classroom](#adding-students-to-the-roster-for-your-classroom)" or "[Deleting a roster for a classroom](#deleting-a-roster-for-a-classroom)."

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-people" aria-hidden="true"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path></svg> **Students**.

   ![Screenshot of the tabs in a classroom. The "Students" tab is outlined in dark orange.](/assets/images/help/classroom/click-students.png)
1. To connect GitHub Classroom to your LMS and import a roster, your LMS administrator will first need to register your LMS instance and then you will need to connect your LMS course to your classroom. Once connected, you can click the **Import from...** button to import a roster from your LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)."

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** Google Classroom does not use the LTI protocol, so does not need to be connected to GitHub Classroom before importing the roster. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom#importing-a-roster-from-google-classroom)."

   </div>

1. Provide the student identifiers for your roster.

   - To import a roster by uploading a file containing student identifiers, click **Upload a CSV or text file**.
   - To create a roster manually, type your student identifiers in the text field.

1. Click **Create roster**.

## Adding students to the roster for your classroom

Your classroom must have an existing roster to add students to the roster. For more information about creating a roster, see "[Creating a roster for your classroom](#creating-a-roster-for-your-classroom)."

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-people" aria-hidden="true"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path></svg> **Students**.

   ![Screenshot of the tabs in a classroom. The "Students" tab is outlined in dark orange.](/assets/images/help/classroom/click-students.png)
1. To the right of "Classroom roster", click **Update students**. If you have already linked your classroom to an LMS course, then you will see a **Sync from...** button instead.
1. Follow the instructions to add students to the roster.
   - To import students from an LMS, your LMS administrator will first need to register your LMS instance and then you will need to connect your LMS course to your classroom. Once connected, you can click the **Sync from...** button. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)."
     <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

     **Note:** Google Classroom does not use the LTI protocol, so does not need to be connected to GitHub Classroom before importing the roster. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom#importing-a-roster-from-google-classroom)."

     </div>
   - To manually add students, under "Manually add students", click **Upload a CSV or text file** or type the identifiers for the students, then click **Add roster entries**.

## Renaming a classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.

   ![Screenshot of the tabs in a classroom. The "Settings" tab is outlined in dark orange.](/assets/images/help/classroom/click-settings.png)
1. Under "Classroom name", type a new name for the classroom.
1. Click **Rename classroom**.

## Archiving or unarchiving a classroom

You can archive a classroom that you no longer use on GitHub Classroom. When you archive a classroom, you can't create new assignments or edit existing assignments for the classroom. Students can't accept invitations to assignments in archived classrooms.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. To the right of a classroom's name, select the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> dropdown menu, then click **Archive**.

   ![Screenshot of a tile for a classroom. A dropdown menu labeled with a kebab icon is expanded and the "Archive" option is outlined in dark orange.](/assets/images/help/classroom/use-drop-down-then-click-archive.png)

1. To view an archived classroom, use the dropdown menu next to the search bar to change the view to "Archived" or "All".
1. To unarchive a classroom, to the right of a classroom's name, select the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> drop-down menu, then click **Unarchive**.

   ![Screenshot of a tile for a classroom. A dropdown menu labeled with a kebab icon is expanded and the "Unarchive" option is outlined in dark orange.](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Deleting a roster for a classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-people" aria-hidden="true"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path></svg> **Students**.

   ![Screenshot of the tabs in a classroom. The "Students" tab is outlined in dark orange.](/assets/images/help/classroom/click-students.png)
1. Below the list of students, under "Delete this roster", click **Delete roster**.
1. Read the warnings, then click **Delete roster**.

## Deleting a classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.

   ![Screenshot of the tabs in a classroom. The "Settings" tab is outlined in dark orange.](/assets/images/help/classroom/click-settings.png)
1. To the right of "Delete this classroom", click **Delete classroom**.
1. **Read the warnings**.
1. To verify that you're deleting the correct classroom, type the name of the classroom you want to delete.
1. Click **Delete classroom**.

## Further reading

- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)"
