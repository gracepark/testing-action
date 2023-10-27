# Types of GitHub accounts

Accounts on GitHub allow you to organize and control access to code.

## About accounts on GitHub

With GitHub, you can store and collaborate on code. Accounts allow you to organize and control access to that code. There are three types of accounts on GitHub.
- Personal accounts
- Organization accounts
- Enterprise accounts

Every person who uses GitHub signs into a personal account. An organization account enhances collaboration between multiple personal accounts, and an enterprise account allows central management of multiple organizations.

## Personal accounts

Every person who uses GitHub.com signs into a personal account. Your personal account is your identity on GitHub.com and has a username and profile. For example, see [@octocat's profile](https://github.com/octocat).

Your personal account can own resources such as repositories, packages, and projects. Any time you take any action on GitHub.com, such as creating an issue or reviewing a pull request, the action is attributed to your personal account.

Each personal account uses either GitHub Free or GitHub Pro. All personal accounts can own an unlimited number of public and private repositories, with an unlimited number of collaborators on those repositories. If you use GitHub Free, private repositories owned by your personal account have a limited feature set. You can upgrade to GitHub Pro to get a full feature set for private repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)." 

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: Personal accounts are intended for humans, but you can create accounts to automate activity on GitHub. This type of account is called a machine user. For example, you can create a machine user account to automate continuous integration (CI) workflows.

</div>

Most people will use one personal account for all their work on GitHub.com, including both open source projects and paid employment. If you're currently using more than one personal account that you created for yourself, we suggest combining the accounts. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/merging-multiple-personal-accounts)."

## Organization accounts

Organizations are shared accounts where an unlimited number of people can collaborate across many projects at once.

Like personal accounts, organizations can own resources such as repositories, packages, and projects. However, you cannot sign into an organization. Instead, each person signs into their own personal account, and any actions the person takes on organization resources are attributed to their personal account. Each personal account can be a member of multiple organizations.

The personal accounts within an organization can be given different roles in the organization, which grant different levels of access to the organization and its data. All members can collaborate with each other in repositories and projects, but only organization owners and security managers can manage the settings for the organization and control access to the organization's data with sophisticated security and administrative features. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure)."

Even if you're a member of an organization that uses SAML single sign-on, you will still sign into your own personal account on GitHub.com, and that personal account will be linked to your identity in your organization's identity provider (IdP). For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" in the GitHub Enterprise Cloud documentation

However, if you're a member of an enterprise that uses Enterprise Managed Users, instead of using a personal account that you created, a new account will be provisioned for you by the enterprise's IdP. To access any organizations owned by that enterprise, you must authenticate using their IdP instead of a GitHub.com username and password. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)" in the GitHub Enterprise Cloud documentation.

You can also create nested sub-groups of organization members called teams, to reflect your group's structure and simplify access management. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

All organizations can own an unlimited number of public and private repositories. You can use organizations for free, with GitHub Free, which includes limited features on private repositories. To get the full feature set on private repositories and additional features at the organization level, including SAML single sign-on and improved support coverage, you can upgrade to GitHub Team or GitHub Enterprise Cloud. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

For more information about how you can try GitHub Enterprise Cloud for free, see "[Setting up a trial of GitHub Enterprise Cloud](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)."

For more information about all the features of organizations, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

## Enterprise accounts

GitHub Enterprise Cloud and GitHub Enterprise Server include enterprise accounts, which allow administrators to centrally manage policy and billing for multiple organizations and enable innersourcing between the organizations. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" in the GitHub Enterprise Cloud documentation.

## Further reading

- "[AUTOTITLE](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)"
- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)"
- [Organizing people for successful collaboration](https://vimeo.com/333786093) video in GitHub Resources
