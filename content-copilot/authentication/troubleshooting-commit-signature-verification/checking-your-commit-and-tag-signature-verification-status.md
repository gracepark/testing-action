# Checking your commit and tag signature verification status

You can check the verification status of your commit and tag signatures on GitHub.

## Checking your commit signature verification status

1. On GitHub, navigate to your pull request.
1. On the pull request, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-git-commit" aria-hidden="true"><path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg> **Commits**.

   ![Screenshot of the title and tabs on a pull request. The "Commits" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-commits.png)
1. Next to your commit's abbreviated commit hash, there is a box that shows whether your commit signature is verified, partially verified, or unverified.

   ![Screenshot of a commit in the commit list for a repository. "Verified" is highlighted with an orange outline.](/assets/images/help/commits/verified-commit.png)
1. To view more detailed information about the commit signature, click **Verified**, **Partially verified**, or **Unverified**.

   GPG signed commits will show the ID of the key that was used.

## Checking your tag signature verification status

1. On GitHub.com, navigate to the main page of the repository.
1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)
1. At the top of the Releases page, click **Tags**.
1. Next to your tag description, there is a box that shows whether your tag signature is verified, partially verified, or unverified.

   ![Screenshot of a tag in the tag list for a repository. "Verified" is highlighted with an orange outline.](/assets/images/help/commits/gpg-signed-tag-verified.png)
1. To view more detailed information about the tag signature, click **Verified**, **Partially verified**, or **Unverified**.

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"
