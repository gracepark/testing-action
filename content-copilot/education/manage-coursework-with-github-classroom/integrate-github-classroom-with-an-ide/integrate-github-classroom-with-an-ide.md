# Integrate GitHub Classroom with an IDE

You can preconfigure a supported integrated development environment (IDE) for assignments you create in GitHub Classroom.

**Who can use this feature**: Organization owners who are admins for a classroom can integrate GitHub Classroom with an IDE. For more information on classroom admins, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#about-management-of-classrooms)."
## About integration with an IDE

You can optionally configure an assignment to use an integrated development environment (IDE). IDEs allow your students to write code, run programs, and collaborate without installing Git and a full development toolchain on the student's computer. If you choose an IDE for an assignment, students can still check out and run code locally on a computer with the necessary software.

After a student accepts an assignment with an IDE, the README file in the student's assignment repository will contain a button to open the assignment in the IDE. The student can begin working immediately, and no additional configuration is necessary.

## Supported IDEs

GitHub Classroom supports the following IDEs. You can learn more about the student experience for each IDE.

| IDE | More information |
| :- | :- |
| GitHub Codespaces | "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)" |
| Microsoft MakeCode Arcade | "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/about-using-makecode-arcade-with-github-classroom)" |
| Visual Studio Code | [GitHub Classroom extension](https://aka.ms/classroom-vscode-ext) in the Visual Studio Marketplace |

We know cloud IDE integrations are important to your classroom and are working to bring more options.

## Configuring an IDE for an assignment

You can choose the IDE you'd like to use for an assignment when you create an assignment. To learn how to create a new assignment that uses an IDE, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" or "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)."

## Setting up an assignment in a new IDE

The first time you configure an assignment using a different IDE, you must ensure that it is set up correctly.

Unless you use GitHub Codespaces, you must authorize the OAuth app for the IDE for your organization. For all repositories, grant the app **read** access to metadata, administration, and code, and **write** access to administration and code. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."

GitHub Codespaces does not require an OAuth app, but you need to enable GitHub Codespaces for your organization to be able to configure an assignment with GitHub Codespaces. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)."

## Further reading

- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)"
