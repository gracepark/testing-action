# Filtering and searching issues and pull requests

To find detailed information about a repository on GitHub, you can filter, sort, and search issues and pull requests that are relevant to the repository.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: You can also filter issues or pull requests using the GitHub CLI. For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the GitHub CLI documentation.

</div>

## Filtering issues and pull requests

Issues and pull requests come with a set of default filters you can apply to organize your listings.

You can find a pull request where you or a team you're a member of is requested for review with the search qualifier `review-requested:[USERNAME]` or `team-review-requested:[TEAMNAME]`. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests)."

You can filter issues and pull requests to find:
- All open issues and pull requests
- Issues and pull requests that you've created
- Issues and pull requests that are assigned to you
- Issues and pull requests where you're [**@mentioned**](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**: You can also filter issues or pull requests using the GitHub CLI. For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the GitHub CLI documentation.

</div>

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-issue-opened" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg> **Issues** or <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, two tabs, labeled "Issues" and "Pull requests," are each outlined in dark orange.](/assets/images/help/repository/repo-settings-issues-pull-requests.png)

1. Above the list, select the **Filters** dropdown menu, then click the type of filter you're interested in.

   ![Screenshot of the list of issues for a repository. Above the list, a dropdown menu, labeled "Filters", is outlined in dark orange.](/assets/images/help/issues/issues-filter-dropdown.png)

## Filtering issues and pull requests by assignees

Once you've [assigned an issue or pull request to someone](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-issue-opened" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg> **Issues** or <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, two tabs, labeled "Issues" and "Pull requests," are each outlined in dark orange.](/assets/images/help/repository/repo-settings-issues-pull-requests.png)

1. Above the list of issues or pull requests, select the **Assignee** dropdown menu.

   ![Screenshot of a list of issues. In the header above the list, a dropdown menu, labeled "Assignees", is outlined in dark orange.](/assets/images/help/issues/issues-assignee-dropdown.png)
1. The Assignee drop-down menu lists everyone who has write access to your repository. Click the name of the person whose assigned items you want to see, or click **Assigned to nobody** to see which issues are unassigned.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To clear your filter selection, click **Clear current search query, filters, and sorts**.

</div>

## Filtering issues and pull requests by labels

Once you've [applied labels to an issue or pull request](/issues/using-labels-and-milestones-to-track-work/managing-labels), you can find items based on their labels.

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-issue-opened" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg> **Issues** or <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, two tabs, labeled "Issues" and "Pull requests," are each outlined in dark orange.](/assets/images/help/repository/repo-settings-issues-pull-requests.png)

1. Above the list of issues or pull requests, click **Labels**.

   ![Screenshot of the list of issues for a repository. Above the list, a button, labeled with a label icon and "Labels", is outlined in dark orange.](/assets/images/help/issues/issues-labels-button.png)
1. In the list of labels, click a label.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To clear your filter selection, click **Clear current search query, filters, and sorts**.

</div>

## Filtering pull requests by review status

You can use filters to list pull requests by review status and to find pull requests that you've reviewed or other people have asked you to review.

You can filter a repository's list of pull requests to find:
- Pull requests that haven't been [reviewed](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) yet
- Pull requests that [require a review](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging) before they can be merged
- Pull requests that a reviewer has approved
- Pull requests in which a reviewer has asked for changes
- Pull requests that you have reviewed
- Pull requests that someone has asked you directly to review
- Pull requests that [someone has asked you, or a team you're a member of, to review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the upper-right corner, select the **Reviews** dropdown menu.

   ![Screenshot of the filter menu above the list of pull requests. The "Reviews" dropdown is outlined in dark orange.](/assets/images/help/pull_requests/reviews-filter-dropdown.png)

1. Choose a filter to find all of the pull requests with that filter's status.

## Using search to filter issues and pull requests

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

<div class="ghd-tool webui">

The issues and pull requests search bar allows you to define your own custom filters and sort by a wide variety of criteria. You can find the search bar on each repository's **Issues** and **Pull requests** tabs and on your [Issues and Pull requests dashboards](/issues/tracking-your-work-with-issues/viewing-all-of-your-issues-and-pull-requests).

![Screenshot of the list of issues for a repository. Above the list, a search field, containing the query "is:issue is:open", is outlined in dark orange.](/assets/images/help/issues/issues-search-bar.png)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You can focus your cursor on the search bar above the issue or pull request list with a keyboard shortcut. For more information, see "[AUTOTITLE](/get-started/using-github/keyboard-shortcuts#issue-and-pull-request-lists)."

</div>

</div>

<div class="ghd-tool cli">

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

You can use the GitHub CLI to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

</div>

### About search terms

With issue and pull request search terms, you can:

- Filter issues and pull requests by author: `state:open type:issue author:octocat`
- Filter issues and pull requests that involve, but don't necessarily [**@mention**](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams), certain people: `state:open type:issue involves:octocat`
- Filter issues and pull requests by assignee: `state:open type:issue assignee:octocat`
- Filter issues and pull requests by label: `state:open type:issue label:"bug"`
- Filter out search terms by using `-` before the term: `state:open type:issue -author:octocat`

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

</div>

For issues, you can also use search to:

- Filter for issues that are linked to a pull request by a closing reference: `linked:pr`

For pull requests, you can also use search to:
- Filter [draft](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) pull requests: `is:draft`
- Filter pull requests that haven't been [reviewed](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) yet: `state:open type:pr review:none`
- Filter pull requests that [require a review](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging) before they can be merged: `state:open type:pr review:required`
- Filter pull requests that a reviewer has approved: `state:open type:pr review:approved`
- Filter pull requests in which a reviewer has asked for changes: `state:open type:pr review:changes_requested`
- Filter pull requests by [reviewer](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews): `state:open type:pr reviewed-by:octocat`
- Filter pull requests by the specific user [requested for review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filter pull requests that someone has asked you directly to review: `state:open type:pr user-review-requested:@me`
- Filter pull requests by the team requested for review: `state:open type:pr team-review-requested:github/docs`
- Filter for pull requests that are linked to an issue that the pull request may close: `linked:issue`

## Sorting issues and pull requests

Filters can be sorted to provide better information during a specific time period.

You can sort any filtered view by:

- The newest created issues or pull requests
- The oldest created issues or pull requests
- The most commented issues or pull requests
- The least commented issues or pull requests
- The newest updated issues or pull requests
- The oldest updated issues or pull requests
- The most added reaction on issues or pull requests

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-issue-opened" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg> **Issues** or <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, two tabs, labeled "Issues" and "Pull requests," are each outlined in dark orange.](/assets/images/help/repository/repo-settings-issues-pull-requests.png)

1. Above the list of issues or pull requests, select the **Sort** dropdown menu, then click a sort method.

   ![Screenshot of the list of issues for a repository. Above the list, a dropdown menu, labeled "Sort," is outlined in dark orange.](/assets/images/help/issues/issues-sort-dropdown.png)

To clear your sort selection, click **Sort** > **Newest**.

## Sharing filters

When you filter or sort issues and pull requests, your browser's URL is automatically updated to match the new view.

You can send the URL that issues generates to any user, and they'll be able to see the same filter view that you see.

For example, if you filter on issues assigned to Hubot, and sort on the oldest open issues, your URL would update to something like the following:

```text
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Further reading

- "[AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests)"
