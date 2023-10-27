# About branches

Use a branch to isolate development work without affecting other branches in the repository. Each repository has one default branch, and can have multiple other branches. You can merge a branch into another branch using a pull request.

## About branches

Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.

You always create a branch from an existing branch. Typically, you might create a new branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository. A branch you create to build a feature is commonly referred to as a feature branch or topic branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."

You can also use a branch to publish a GitHub Pages site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages)."

You must have write access to a repository to create a branch, open a pull request, or delete and restore branches in a pull request. For more information, see "[AUTOTITLE](/get-started/learning-about-github/access-permissions-on-github)."

## About the default branch

When you create a repository with content on GitHub.com, GitHub creates the repository with a single branch. This first branch in the repository is the default branch. The default branch is the branch that GitHub displays when anyone visits your repository. The default branch is also the initial branch that Git checks out locally when someone clones the repository. Unless you specify a different branch, the default branch in a repository is the base branch for new pull requests and code commits.

By default, GitHub names the default branch `main` in any new repository.

You can change the default branch for an existing repository. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)."

You can set the name of the default branch for new repositories. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-the-default-branch-name-for-your-repositories)," "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)," and "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)."

## Working with branches

Once you're satisfied with your work, you can open a pull request to merge the changes in the current branch (the _head_ branch) into another branch (the _base_ branch). For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

After a pull request has been merged, or closed, you can delete the head branch as this is no longer needed. You must have write access in the repository to delete branches. You can't delete branches that are directly associated with open pull requests. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)"

If you delete a head branch after its pull request has been merged, GitHub checks for any open pull requests in the same repository that specify the deleted branch as their base branch. GitHub automatically updates any such pull requests, changing their base branch to the merged pull request's base branch.
The following diagrams illustrate this.

Here someone has created a branch called `feature1` from the `main` branch, and you've then created a branch called `feature2` from `feature1`. There are open pull requests for both branches. The arrows indicate the current base branch for each pull request. At this point, `feature1` is the base branch for `feature2`. If the pull request for `feature2` is merged now, the `feature2` branch will be merged into `feature1`.

![Diagram that shows a feature1 branch with a pull request targeting main, and a feature2 branch with a pull request targeting feature1.](/assets/images/help/branches/pr-retargeting-diagram1.png)

In the next diagram, someone has merged the pull request for `feature1` into the `main` branch, and they have deleted the `feature1` branch. As a result, GitHub has automatically retargeted the pull request for `feature2` so that its base branch is now `main`.

![Diagram that shows both feature1 and feature2 branches with pull requests targeting main.](/assets/images/help/branches/pr-retargeting-diagram2.png)

Now when you merge the `feature2` pull request, it'll be merged into the `main` branch.

## Working with protected branches

Repository administrators can enable protections on a branch. If you're working on a branch that's protected, you won't be able to delete or force push to the branch. Repository administrators can additionally enable several other protected branch settings to enforce various workflows before a branch can be merged.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you're a repository administrator, you can merge pull requests on branches with branch protections enabled even if the pull request does not meet the requirements, unless branch protections have been set to "Include administrators."

</div>

To see if your pull request can be merged, look in the merge box at the bottom of the pull request's **Conversation** tab. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

When a branch is protected:

- You won't be able to delete or force push to the branch.
- If required status checks are enabled on the branch, you won't be able to merge changes into the branch until all of the required CI tests pass. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."
- If required pull request reviews are enabled on the branch, you won't be able to merge changes into the branch until all requirements in the pull request review policy have been met. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."
- If required review from a code owner is enabled on a branch, and a pull request modifies code that has an owner, a code owner must approve the pull request before it can be merged. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
- If required commit signing is enabled on a branch, you won't be able to push any commits to the branch that are not signed and verified. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)" and "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits)."
- If you use GitHub's conflict editor to fix conflicts for a pull request that you created from a protected branch, GitHub  helps you to create an alternative branch for the pull request, so that your resolution of the conflicts can be merged. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)."

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[AUTOTITLE](/get-started/quickstart/github-glossary#branch)" in the GitHub glossary
- "[Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" in the Git documentation
