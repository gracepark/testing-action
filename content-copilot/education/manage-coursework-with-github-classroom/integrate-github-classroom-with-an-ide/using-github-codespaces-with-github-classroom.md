# Using GitHub Codespaces with GitHub Classroom

You can use GitHub Codespaces as the preferred editor in your assignments to give students access to a browser-based Visual Studio Code environment with one-click setup.

**Who can use this feature**: Organization owners who are admins for a classroom can enable GitHub Codespaces for their organization and integrate GitHub Codespaces as the supported editor for an assignment. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."
GitHub Codespaces is available to use with GitHub Classroom for organizations that use GitHub Team. To find out if you qualify for a free upgrade to GitHub Team, see "[AUTOTITLE](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)."
## About GitHub Codespaces

GitHub Codespaces is an instant, cloud-based development environment that uses a container to provide you with common languages, tools, and utilities for development. GitHub Codespaces is also configurable, allowing you to create a customized development environment that is the same for all users of your project. For more information, see "[AUTOTITLE](/codespaces/overview)."

Once GitHub Codespaces is enabled in an organization or enterprise, users can create a codespace from any branch or commit in an organization or enterprise repository and begin developing using cloud-based compute resources. You can connect to a codespace from the browser or locally using Visual Studio Code.

To get started with GitHub Codespaces, see "[AUTOTITLE](/codespaces/getting-started/quickstart)." For more information on creating a codespace, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)" or "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)." If you want to return to a codespace you've already created, see "[AUTOTITLE](/codespaces/developing-in-codespaces/opening-an-existing-codespace)." To learn more about how GitHub Codespaces works, see "[AUTOTITLE](/codespaces/getting-started/deep-dive)."

Setting GitHub Codespaces as the preferred editor for an assignment in GitHub Classroom assignments, is beneficial for both students and teachers. GitHub Codespaces is a good option for students using loaned devices or without access to a local IDE setup, since each codespace is cloud-based and requires no local setup. Students can launch a codespace for an assignment repository in Visual Studio Code directly in their browser, and begin developing right away without needing any further configuration.

For assignments with complex setup environments, teachers can customize the dev container configuration for a repository's codespaces. This ensures that when a student creates a codespace, it automatically opens with the development environment configured by the teacher. For more information on dev containers, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: Individual codespaces are automatically deleted if they are stopped and left unused for a prolonged period. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)."

</div>

Verified students get free use of GitHub Codespaces, up to 180 core hours per month, for their personal accounts. The monthly amount of storage and core hours of usage available to students is equivalent to the amount included with GitHub Pro accounts. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If students use GitHub Codespaces in their assignment repositories for GitHub Classroom, the usage will be charged to the organization that owns the classroom, and will not affect the usage for a student's personal account.

</div>

## About the Codespaces Education benefit for verified teachers

The Codespaces Education benefit gives verified teachers a free monthly allowance of GitHub Codespaces hours to use in GitHub Classroom. The free allowance is estimated to be enough for a class of 50 with 5 assignments per month, on a 2 core machine with 1 codespace stored per student.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: The Codespaces Education benefit is currently in public beta and subject to change. During the beta release, your organization will not be charged if you exceed the free allowance.

</div>

To become a verified teacher, you need to be approved for an educator or teacher benefit. For more information, see "[AUTOTITLE](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)."

After you have confirmation that you are a verified teacher, visit [GitHub Global Campus for Teachers](https://education.github.com/globalcampus/teacher) to upgrade the organization to GitHub Team. For more information, see [GitHub's products](/get-started/learning-about-github/githubs-plans#github-team).

If you are eligible for the Codespaces Education benefit, when you enable GitHub Codespaces in GitHub Classroom for your organization, GitHub automatically adds a Codespace policy to restrict machine types for all codespaces in the organization to 2 core machines. This helps you make the most of the free GitHub Codespaces usage. However, you can change or remove these policies in your organization settings. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

When the Codespaces Education benefit moves out of beta, if your organization exceeds their free allowance for GitHub Codespaces usage, your organization will be billed for additional usage. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

## Enabling Codespaces for your organization

GitHub Codespaces is available to use with GitHub Classroom for organizations that use GitHub Team. If you are eligible for the Codespaces Education benefit, you must enable GitHub Codespaces through GitHub Classroom, instead of enabling it directly in your organization settings. Otherwise, your organization will be billed directly for all usage of GitHub Codespaces.

### Enabling Codespaces for an organization when creating a new classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. On the right side of the page, click **New classroom**.
1. In the list of organizations, click the organization you'd like to use for your classroom. Organizations that are eligible for GitHub Codespaces will have a note showing that they are eligible. Optionally, you can create a new organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."
1. In the "Name your classroom" page, under "Codespaces in your Classroom", click **Enable**. Note that this will enable GitHub Codespaces for all repositories and users in the organization.
1. When you are ready to create the new classroom, click **Create classroom**.

### Enabling Codespaces for an organization via an existing classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. In the list of classrooms, click the classroom you want to view.
1. Under the classroom name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.

   ![Screenshot of the tabs in a classroom. The "Settings" tab is outlined in dark orange.](/assets/images/help/classroom/click-settings.png)
1. Under "GitHub Codespaces", click **Enable**. This will enable GitHub Codespaces for all repositories and users in the organization. A new Codespace policy is also added to restrict machine types for all codespaces in the organization to 2 core machines.

You can use the same methods as above to disable GitHub Codespaces for your organization as well. Note that this will disable GitHub Codespaces for all users and repositories in the organization.

## Configuring an assignment to use Codespaces

To make GitHub Codespaces available to students for an assignment, you can choose GitHub Codespaces as the supported editor for the assignment. When creating a new assignment, in the "Add your starter code and choose your optional online IDE" page, under "Add a supported editor", select **GitHub Codespaces** from the dropdown menu.

If you use a template repository for an assignment, you can define a dev container in the repository to customize the tools and runtimes available to students when they launch a codespace to work on the assignment. If you do not define a dev container, GitHub Codespaces will use a default configuration, which contains many of the common tools that your students might need for development. For more information on defining a dev container, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."

## Launching an assignment using GitHub Codespaces

When a student opens an assignment, the repository's README file includes their teacher's recommendation of the IDE they should use for the work.

Students can launch a new or existing codespace by clicking the **Open in GitHub Codespace** button in the README, or by clicking the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code** button on the main page of the assignment repository, then selecting the **Codespaces** tab. From the **Codespaces** tab you can select an existing codespace or create a new one. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

![Screenshot of the assignment repository. The "Code" dropdown menu to launch a new codespace is expanded.](/assets/images/help/classroom/student-launch-new-codespace.png)

Teachers can view each student's codespace for an assignment in the assignment overview page. You can click on the Codespaces icon on the right side of each student row to launch the codespace.

![Screenshot of the assignment overview. The Codespaces icon is outlined in dark orange.](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

When you connect to a codespace through a browser, auto-save is enabled automatically. If you want to save changes to the repository, you will need to commit the changes and push them to a remote branch. If you leave your codespace running without interaction for 30 minutes by default, the codespace will timeout and stop running. Your data will be preserved from the last time you made a change. For more information on the lifecycle of a codespace, see "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle)."
