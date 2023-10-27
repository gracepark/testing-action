# About pull request merges

You can [merge pull requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) by retaining all the commits in a feature branch, squashing all commits into a single commit, or by rebasing individual commits from the `head` branch onto the `base` branch.

## Merge your commits

When you click the default **Merge pull request** option on a pull request on GitHub.com, all commits from the feature branch are added to the base branch in a merge commit. The pull request is merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository.

![Diagram of a standard merge and commit flow, where commits from a feature branch and an additional merge commit are both added to `main`.](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)

## Squash and merge your commits

When you select the **Squash and merge** option on a pull request on GitHub.com, the pull request's commits are squashed into a single commit. Instead of seeing all of a contributor's individual commits from a topic branch, the commits are combined into one commit and merged into the default branch. Pull requests with squashed commits are merged using the [fast-forward option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To squash and merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository, and the repository must [allow squash merging](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).

![Diagram of commit squashing, where multiple commits from a feature branch are combined into only one commit that is added to `main`.](/assets/images/help/pull_requests/commit-squashing-diagram.png)

You can use squash and merge to create a more streamlined Git history in your repository. Work-in-progress commits are helpful when working on a feature branch, but they aren’t necessarily important to retain in the Git history. If you squash these commits into one commit while merging to the default branch, you can retain the original changes with a clear Git history.

### Merge message for a squash merge

When you squash and merge, GitHub generates a default commit message, which you can edit. The default message depends on the number of commits in the pull request, not including merge commits.

Number of commits | Summary | Description |
----------------- | ------- | ----------- |
One commit | The title of the commit message for the single commit, followed by the pull request number | The body text of the commit message for the single commit
More than one commit | The pull request title, followed by the pull request number | A list of the commit messages for all of the squashed commits, in date order

Number of commits | Summary | Description |
----------------- | ------- | ----------- |
One commit | The title of the commit message for the single commit, followed by the pull request number | The body text of the commit message for the single commit
More than one commit | The pull request title, followed by the pull request number | A list of the commit messages for all of the squashed commits, in date order

### Squashing and merging a long-running branch

If you plan to continue work on the [head branch](/get-started/quickstart/github-glossary#head-branch) of a pull request after the pull request is merged, we recommend you don't squash and merge the pull request.

When you create a pull request, GitHub identifies the most recent commit that is on both the head branch and the [base branch](/get-started/quickstart/github-glossary#base-branch): the common ancestor commit. When you squash and merge the pull request, GitHub creates a commit on the base branch that contains all of the changes you made on the head branch since the common ancestor commit.

Because this commit is only on the base branch and not the head branch, the common ancestor of the two branches remains unchanged. If you continue to work on the head branch, then create a new pull request between the two branches, the pull request will include all of the commits since the common ancestor, including commits that you squashed and merged in the previous pull request. If there are no conflicts, you can safely merge these commits. However, this workflow makes merge conflicts more likely. If you continue to squash and merge pull requests for a long-running head branch, you will have to resolve the same conflicts repeatedly.

## Rebase and merge your commits

When you select the **Rebase and merge** option on a pull request on GitHub.com, all commits from the topic branch (or head branch) are added onto the base branch individually without a merge commit. In that way, the rebase and merge behavior resembles a [fast-forward merge](https://git-scm.com/docs/git-merge#_fast_forward_merge) by maintaining a linear project history. However, rebasing achieves this by re-writing the commit history on the base branch with new commits.

The rebase and merge behavior on GitHub deviates slightly from `git rebase`. Rebase and merge on GitHub will always update the committer information and create new commit SHAs, whereas `git rebase` outside of GitHub does not change the committer information when the rebase happens on top of an ancestor commit. For more information about `git rebase`, see [git-rebase](https://git-scm.com/docs/git-rebase) in the Git documentation.

To rebase and merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository, and the repository must [allow rebase merging](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests).

For a visual representation of `git rebase`, see [The "Git Branching - Rebasing" chapter from the _Pro Git_ book](https://git-scm.com/book/en/Git-Branching-Rebasing).

You aren't able to automatically rebase and merge on GitHub.com when:
- The pull request has merge conflicts.
- Rebasing the commits from the base branch into the head branch runs into conflicts.
- Rebasing the commits is considered "unsafe," such as when a rebase is possible without merge conflicts but would produce a different result than a merge would.

If you still want to rebase the commits but can't rebase and merge automatically on GitHub.com you must:
- Rebase the topic branch (or head branch) onto the base branch locally on the command line
- [Resolve any merge conflicts on the command line](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).
- Force-push the rebased commits to the pull request's topic branch (or remote head branch).

Anyone with write permissions in the repository, can then [merge the changes](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) using the rebase and merge button on GitHub.com.

## Indirect merges

A pull request can be merged automatically if its head branch is directly or indirectly merged into the base branch externally. In other words, if the head branch's tip commit becomes reachable from the tip of the target branch. For example:

- Branch `main` is at commit **C**.
- Branch `feature` has been branched off of `main` and is currently at commit **D**. This branch has a pull request targeting `main`.
- Branch `feature_2` is branched off of `feature` and is now at commit **E**. This branch also has a pull request targeting `main`.

If pull request **E** --> `main` is merged first, pull request **D** --> `main` will be marked as merged _automatically_ because all of the commits from `feature` are now reachable from `main`. Merging `feature_2` into `main` and pushing `main` to the server from the command line will mark _both_ pull requests as merged.

Indirect merges can only occur either when the commits in the pull request's head branch are pushed directly to the repository's default branch, or when the commits in the pull request's head branch are present in another pull request and are merged into the repository's default branch using the **Create a merge commit** option.

If a pull request containing commits present in another pull request's head branch is merged using the **Squash and merge** or **Rebase and merge** options, a new commit is created on the base branch and the other pull request will not be automatically merged.

Pull requests that are merged indirectly are marked as `merged` even if [branch protection rules](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#about-branch-protection-rules) have not been satisfied.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)"
