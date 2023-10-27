# Using GitHub Codespaces for pull requests

You can use GitHub Codespaces in your web browser, or in Visual Studio Code to create pull requests, review pull requests, and address review comments.

Using a codespace to work on a pull request gives you all the benefits of GitHub Codespaces. For more information, see "[AUTOTITLE](/codespaces/overview#benefits-of-github-codespaces)."

## About pull requests in GitHub Codespaces

GitHub Codespaces provides you with many of the capabilities you might need to work with pull requests:

- [Create a pull request](/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#raising-a-pull-request) - Using either the Terminal and Git commands or the "Source Control" view, you can create pull requests just as you would on GitHub.com. If the repository uses a pull request template, you'll be able to use this within the "Source Control" view.
- [Open a pull request](#opening-a-pull-request-in-codespaces) – You can open an existing pull request in a codespace, provided you have codespace access to the branch that is being merged in.
- [Review a pull request](#reviewing-a-pull-request-in-codespaces) - Once you have opened a pull request in a codespace, you can use the "GitHub Pull Request" view to add review comments and approve pull requests. You can also use GitHub Codespaces to [view review comments](#view-comments-from-a-review-in-codespaces).

## Opening a pull request in Codespaces

1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-pull-request" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg> **Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

1. In the list of pull requests, click the pull request you'd like to open in Codespaces.
1. On the right-hand side of your screen, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code**.
1. In the Codespaces tab, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="Create a codespace on BRANCH" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>.

   ![Screenshot of the "Code" dropdown with the "Codespaces" tab selected. The message "No codespaces" is displayed. The plus button is highlighted.](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   A codespace is created for the pull request branch and is opened in your default editor for GitHub Codespaces.

## Reviewing a pull request in Codespaces

1. With your default editor set to either Visual Studio Code or Visual Studio Code for Web, open the pull request in a codespace, as described in "[Opening a pull request in Codespaces](#opening-a-pull-request-in-codespaces)" previously in this article.
1. In the Activity Bar, click the Git pull request icon to display the "GitHub Pull Request" side bar. This icon is only displayed in the Activity Bar when you open a pull request in a codespace.

   ![Screenshot of the VS Code Activity Bar. The mouse pointer is hovering over an icon displaying the tooltip "GitHub Pull Request."](/assets/images/help/codespaces/github-pr-view.png)

   If you opened a pull request in a codespace and the pull request icon is not displayed in the Activity Bar, make sure you are signed in to GitHub. Click the GitHub icon in the Activity Bar then click **Sign in**.

   ![Screenshot of the GitHub side bar showing the "Sign in" button. The GitHub icon in the Activity Bar is highlighted with an orange outline.](/assets/images/help/codespaces/sign-in-to-github.png)

1. To review the changes that have been made to a specific file, click the file's name in the "GitHub Pull Request" side bar.

   ![Screenshot of the "GitHub Pull Request" side bar. A file name is highlighted with a dark orange outline.](/assets/images/help/codespaces/changes-in-files.png)

   This displays a diff view in the editor, with the version of the file from the base branch on the left, and the new version of the file, from the head branch of the pull request, on the right.

1. To add a review comment, click the **+** sign next to the line number in the file displayed on the right side of the editor.

   ![Screenshot of the diff view. In the head version of the file, on the right side of the editor, the plus sign next to a line is highlighted.](/assets/images/help/codespaces/create-review-comment.png)

1. Type your review comment and then click **Start Review**.

   ![Screenshot of a comment being added, reading "Yes, I agree, this is clearer." The "Start Review" button is shown below the comment.](/assets/images/help/codespaces/start-review.png)

1. When you are finished adding review comments, you can add a summary comment for your pull request review in the "GitHub Pull Request" side bar. You can then click **Comment and Submit**, or click the dropdown arrow and select **Approve and Submit** or **Request Changes and Submit**.

   ![Screenshot of the side bar showing the dropdown options "Comment and Submit," "Approve and Submit," and "Request Changes and Submit."](/assets/images/help/codespaces/submit-review.png)

For more information on reviewing a pull request, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

## View comments from a review in Codespaces

Once you have received feedback on a pull request, you can [open it in a codespace](#opening-a-pull-request-in-codespaces) in your web browser, or in VS Code, to see the [review comments](#reviewing-a-pull-request-in-codespaces). From there you can respond to comments, add reactions, or dismiss the review.
