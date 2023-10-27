# Managing the commit signoff policy for your organization

You can require users to automatically sign off all commits they make in GitHub's web interface to repositories owned by your organization.

**Who can use this feature**: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.

## About commit signoffs

To affirm that a commit complies with the rules and licensing governing a repository, many organizations require developers to sign off on every commit. If your organization requires commit signoffs, you can make signing off a seamless part of the commit process by enabling compulsory commit signoffs for users committing through GitHub's web interface. After you enable compulsory commit signoffs for an organization, every commit made to repositories in that organization through GitHub's web interface will automatically be signed off on by the commit author.

People with admin access to a repository can also enable compulsory commit signoffs at the repository level. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)."

Compulsory commit signoffs only apply to commits made via the web interface. For commits made via the Git command line interface, the commit author must sign off on the commit using the `--signoff` option. For more information, see the [Git documentation](https://git-scm.com/docs/git-commit).

You can determine whether a repository you are contributing to has compulsory commit signoffs enabled by checking the header of the commit form at the bottom of the file you are editing. After compulsory commit signoff has been enabled, the header will read "Sign off and commit changes."

![Screenshot of the commit form in a repository. The title of the form is "Sign off and commit changes."](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Before signing off on a commit, you should ensure that your commit is in compliance with the rules and licensing governing the repository you're committing to. The repository may use a sign off agreement, such as the Developer Certificate of Origin from the Linux Foundation. For more information, see the [Developer Certificate of Origin](https://developercertificate.org/).

Signing off on a commit differs from signing a commit. For more information about signing a commit, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

## Managing compulsory commit signoffs for your organization

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Code, planning, and automation" section of the sidebar, select **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-repo" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg> Repository**, then click **Repository defaults**.
1. Select or deselect **Require contributors to sign off on web-based commits**.
