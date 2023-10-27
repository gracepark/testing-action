# Requesting a pull request review

After you create a pull request, you can ask a specific person to review the changes you've proposed. If you're an organization member, you can also request a specific team to review your changes.

The ability to add multiple pull request reviewers or request reviews from teams is available in public repositories with GitHub Free for organizations and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server, and GitHub Enterprise Cloud. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

Repositories belong to a personal account (a single individual owner) or an organization account (a shared account with numerous collaborators or maintainers). For more information, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)." Owners and collaborators on a repository owned by a personal account can assign pull request reviews. Organization members with triage permissions can also assign a reviewer for a pull request.

To assign a reviewer to a pull request, you will need write access to the repository. For more information about repository access, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)." If you have write access, you can assign anyone who has read access to the repository as a reviewer.

Organization members with write access can also assign a pull request review to any person or team with read access to a repository. The requested reviewer or team will receive a notification that you asked them to review the pull request. If you request a review from a team and code review assignment is enabled, specific members will be requested and the team will be removed as a reviewer. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Pull request authors can't request reviews unless they are either a repository owner or collaborator with write access to the repository.

</div>

You can request a review from either a suggested or specific person. Suggested reviewers are based on [git blame data](/repositories/working-with-files/using-files/viewing-a-file). If you request a review, other people with read access to the repository can still review your pull request. Once someone has reviewed your pull request and you've made the necessary changes, you can re-request review from the same reviewer. If the requested reviewer does not submit a review, and the pull request meets the repository's [mergeability requirements](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests), you can still merge the pull request.

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the list of pull requests, click the pull request that you'd like to ask a specific person or a team to review.
1. To request a review from a suggested person under **Reviewers**, next to their username, click **Request**.

   ![Screenshot of the "Reviewers" section of a pull request's sidebar. To the right of @octocat, a "Request" link is outlined in dark orange.](/assets/images/help/pull_requests/request-suggested-review.png)

1. Optionally, to request a review from someone other than a suggested person, click **Reviewers**.

   If you know the name of the person or team you'd like a review from, type the username of the person or the name of the team you're asking to review your changes. Click their team name or username to request a review.

1. After your pull request is reviewed and you've made the necessary changes, you can ask a reviewer to re-review your pull request. Navigate to **Reviewers** in the right sidebar and click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sync" aria-label="Re-request review" role="img"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg> next to the reviewer's name whose review you'd like.

   ![Screenshot of the "Reviewers" section of a pull request's sidebar. To the right of @octocat, a sync icon is outlined in dark orange.](/assets/images/help/pull_requests/request-re-review.png)

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
