# Viewing a wiki's history of changes

Because wikis are Git repositories, every change you make is a commit that you can view.

 Wikis are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## Viewing wiki history

Wiki history includes:
- The user who made the change
- The commit message they provided
- When the change was made

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-book" aria-hidden="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg> **Wiki**.

   ![Screenshot of the menu in a repository. The "Wiki" option is outlined in dark orange.](/assets/images/help/wiki/wiki-menu-link.png)
1. Using the wiki sidebar, navigate to the page whose history you want to view.
1. At the top of the wiki, click the revision link.

   ![Screenshot of the title of a wiki page. The revision link is outlined in dark orange.](/assets/images/help/wiki/wiki-revision-link.png)

## Viewing previous content

On the wiki history table, you can click a [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1)
(the sequence of letters and numbers to the far right) to see a wiki page as it
existed at a particular point in time.

![Screenshot of the revisions page. The wiki's SHA number is outlined in dark orange.](/assets/images/help/wiki/wiki-sha-number.png)

## Comparing two revisions

1. Select two rows that you want to compare.
1. At the top of the history table, on the right side, click **Compare Revisions**.
1. You'll see a diff of the changes showing which lines were added, removed, and
modified.

## Reverting previous changes

You can only revert changes if you have permission to edit the wiki.

1. Select a row that you want to revert.
1. At the top of the history table, on the right side, click **Compare Revisions**.
1. You'll see a diff of the changes showing which lines were added, removed, and modified.
1. To revert the newer changes, click **Revert Changes**.
