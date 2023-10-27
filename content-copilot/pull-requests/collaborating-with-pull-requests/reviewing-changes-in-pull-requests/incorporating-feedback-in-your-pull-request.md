# Incorporating feedback in your pull request

When reviewers suggest changes in a pull request, you can automatically incorporate the changes into the pull request or open an issue to track out-of-scope suggestions.

## Applying suggested changes

Other people can suggest specific changes to your pull request. You can apply these suggested changes directly in a pull request if you have write access to the repository. If the pull request was created from a fork and the author allowed edits from maintainers, you can also apply suggested changes if you have write access to the upstream repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)."

To quickly incorporate more than one suggested change into a single commit, you can also apply suggested changes as a batch. Applying one suggested change or a batch of suggested changes creates a single commit on the compare branch of the pull request.

Each person who suggested a change included in the commit will be a co-author of the commit. The person who applies the suggested changes will be a co-author and the committer of the commit. For more information about the term committer in Git, see "[Git Basics - Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)" from the _Pro Git_ book site.

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the list of pull requests, click the pull request you'd like to apply a suggested change to.
1. Navigate to the first suggested change you'd like to apply.
    - To apply the change in its own commit, click **Commit suggestion**.

       ![Screenshot of a review comment with a suggestion. The "Commit suggestion" option is outlined in dark orange.](/assets/images/help/pull_requests/commit-suggestion-button.png)

    - To add the suggestion to a batch of changes, click **Add suggestion to batch**. Continue to add the suggested changes you want to include in a single commit. When you've finished adding suggested changes, click **Commit suggestions**.

      ![Screenshot of a review comment with a suggestion. The "Add suggestion to batch" option is outlined in dark orange.](/assets/images/help/pull_requests/add-suggestion-to-batch.png)

1. In the commit message field, type a short, meaningful commit message that describes the change you made to the file or files.
1. Click **Commit changes.**

## Re-requesting a review

You can re-request a review, for example, after you've made substantial changes to your pull request.
To request a fresh review from a reviewer, in the sidebar of the **Conversation** tab, click the <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sync" aria-label="The sync icon" role="img"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg> icon.

## Opening an issue for an out-of-scope suggestion

If someone suggests changes to your pull request and the changes are out of the pull request's scope, you can open a new issue to track the feedback. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
