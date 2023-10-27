# Managing privately reported security vulnerabilities

Repository maintainers can manage security vulnerabilities that have been privately reported to them by security reseachers for repositories where private vulnerability reporting is enabled.

**Who can use this feature**: Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.

Owners and administrators of public repositories can enable private vulnerability reporting on their repositories. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository)."

## About privately reporting a security vulnerability

Private vulnerability reporting makes it easy for security researchers to report vulnerabilities directly to you using a simple form.

When a security researcher reports a vulnerability privately, you are notified and can choose to either accept it, ask more questions, or reject it. If you accept the report, you're ready to collaborate on a fix for the vulnerability in private with the security researcher.

## Managing security vulnerabilities that are privately reported

When a new vulnerability is privately reported on a repository where private vulnerability reporting is enabled, GitHub notifies repository maintainers and security managers if:

- They're watching the repository for all activity.
- They have notifications enabled for the repository.

For more information about configuring notification preferences, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository#configuring-notifications-for-private-vulnerability-reporting)."

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the left sidebar, under "Reporting", click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Advisories**.
1. Click the advisory you want to review. An advisory that was reported privately has a status of `Triage`.

   ![Screenshot of a "Security Advisories" list.](/assets/images/help/security/advisory-list.png)

1. Carefully review the report, then choose how to proceed.
   - To collaborate on a patch in private, click **Start a temporary private fork** to create a place for further discussions with the contributor. This does not change the status of the proposed advisory from `Triage`.
   - To accept the reported vulnerability, click **Accept and open as draft** to accept the vulnerability report as a draft advisory on GitHub. If you choose this option:
      - This doesn't make the report public.
      - The report becomes a draft repository security advisory and you can work on it in the same way as any draft advisory that you create.
     For more information on security advisories, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."
   - To ask for more information, or to open a discussion with the reporter, you can comment on the advisory. Any comments are visible only to the reporter and to any collaborators on the advisory.
   - If you have enough information to determine that the problem the reporter describes is not a security risk, click **Close security advisory**. Where possible, you should add a comment explaining why you don't consider the report a security risk before you close the advisory.

     ![Screenshot showing the options available to the repository maintainer when reviewing an externally submitted vulnerability report.](/assets/images/help/security/advisory-maintainer-options.png)
