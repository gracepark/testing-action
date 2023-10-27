# Connect a learning management system course to a classroom

You can configure an LTI-compliant learning management system (LMS) course to connect to GitHub Classroom so that you can import a roster for your classroom.

**Who can use this feature**: Organization owners who are admins for a classroom can connect learning management systems to GitHub Classroom. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."
## About connecting an LMS to your classroom

You can connect a learning management system (LMS) to GitHub Classroom and import a roster of student identifiers from the LMS.

## Prerequisites

Before you can connect your LMS to a classroom, an administrator for your LMS instance needs to register your LMS with GitHub Classroom to initiate the OAuth handshake. An admin only needs to do this registration process once, then any teacher who uses their LMS instance may sync their LMS courses to classrooms. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Google Classroom does not use the LTI protocol, so does not need to be connected to GitHub Classroom before importing the roster. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom#importing-a-roster-from-google-classroom)."

</div>

To configure an LMS to connect to GitHub Classroom, you must first create a classroom. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#creating-a-classroom)."

## Supported LMSes

GitHub Classroom supports connecting with LMSes that implement Learning Tools Interoperability (LTI) standards.

- LTI version 1.3
- LTI Advantage

Using LTI helps keep your information safe and secure. LTI is an industry-standard protocol and GitHub Classroom's use of LTI is certified by the Instructional Management System (IMS) Global Learning Consortium. For more information, see [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) and [About IMS Global Learning Consortium](https://www.imsglobal.org/aboutims.html) on the IMS Global Learning Consortium website.

GitHub has tested and verified registration, connection and the import of roster data from the following LMSes into GitHub Classroom.

- Canvas
- Moodle
- Sakai
- Google Classroom

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Other LMSes that implement LTI 1.3 may also work with GitHub Classroom, but have not yet been verified. LMS admins may need to configure custom settings around privacy and button placement and may need to provide teachers with documentation on how to launch into GitHub Classroom from the LMS.

</div>

Google Classroom does not use the LTI protocol, so does not need to be connected to GitHub Classroom before importing the roster. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom#importing-a-roster-from-google-classroom)."

## Linking a Canvas course with a classroom

You can link your Canvas course with a classroom in GitHub Classroom. For more information about Canvas, see the [Canvas website](https://www.instructure.com/canvas/).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-canvas-for-github-classroom)."

1. Sign into [Canvas](https://www.instructure.com/canvas/#login).
1. Select the Canvas course to integrate with GitHub Classroom.
1. Click "Settings" in the left sidebar, then click the "Apps" tab.
1. Click the **+ App** button.
1. Under "Configuration Type", select **By Client ID** from the dropdown menu.
1. Under "Client ID", input the Client ID that your LMS administrator created when registering your LMS instance with GitHub Classroom.
1. Click **Submit**, then click **Install**.
1. Refresh the page, and you should see a **GitHub Classroom** link in the course sub-navigation menu on the right hand side of the course details page. Note that the name may be different if your LMS admin named it something else when registering your LMS.
1. Clicking the **GitHub Classroom** link will launch you into GitHub Classroom, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see "[Importing a roster from your LMS](#importing-a-roster-from-your-lms)."

## Linking a Moodle course with a classroom

You can link your Moodle course with a classroom in GitHub Classroom. For more information about Moodle, see the [Moodle website](https://moodle.org).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)."

You must be using Moodle version 3.0 or greater.

1. Sign into [Moodle](https://moodle.org/login/).
1. Select the Moodle course to integrate with GitHub Classroom.
1. Under "External Tools, under "General", you should see a button with the name "GitHub Classroom". Note that the name may be different if your LMS admin named it something else when registering your LMS.
1. Clicking the **GitHub Classroom** button will launch you into GitHub Classroom, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see "[Importing a roster from your LMS](#importing-a-roster-from-your-lms)."

## Linking a Sakai course with a classroom

You can link your Sakai course with a classroom in GitHub Classroom. For more information about Sakai, see the [Sakai website](https://www.sakailms.org/).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)."

1. Sign into your Sakai instance.
1. Select the Sakai course to integrate with GitHub Classroom.
1. Click on **External Tools**.
1. Click on **Tool Links**.
1. Clicking the "GitHub Classroom" link will launch you into GitHub Classroom, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see "[Importing a roster from your LMS](#importing-a-roster-from-your-lms)."

## Importing a roster from your LMS

To import your roster from your LMS:
1. Open your linked classroom in GitHub Classroom and select the "Students" tab.
1. Click the **Import from...** button containing the name of your LMS (Canvas, Sakai, or Moodle).
1. Select which identifier you'd like to use for your students, then click **Import roster entries**, and your roster will be imported.

To update an existing roster:
1. Open your linked classroom in GitHub Classroom and select the "Students" tab.
1. Click the **Sync from...** button containing the name of your LMS (Canvas, Sakai, or Moodle).

## Importing a roster from Google Classroom

Google Classroom does not use the LTI protocol so does not need to be connected to GitHub Classroom before importing the roster.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-people" aria-hidden="true"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path></svg> **Students**.

   ![Screenshot of the tabs in a classroom. The "Students" tab is outlined in dark orange.](/assets/images/help/classroom/click-students.png)
1. If your classroom already has a roster, you can either update the roster or delete the roster and create a new roster.
    - For more information about deleting and creating a roster, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" and "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."
    - For more information about updating a roster, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)."
1. In the list of LMSes, click **Google Classroom**.
1. Sign in to Google, then select the Classroom to link to.

## Disconnecting your LMS

You can disconnect your classroom from your LMS in GitHub Classroom settings.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.

   ![Screenshot of the tabs in a classroom. The "Settings" tab is outlined in dark orange.](/assets/images/help/classroom/click-settings.png)
1. Under "Connect to a learning management system (LMS)", click **Connection Settings**.
1. Under "Delete Connection to your learning management system", click **Disconnect from your learning management system**.
