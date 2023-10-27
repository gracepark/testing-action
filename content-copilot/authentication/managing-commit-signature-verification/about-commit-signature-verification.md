# About commit signature verification

Using GPG or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on GitHub so other people can be confident that the changes come from a trusted source.

## About commit signature verification

You can sign commits and tags locally, to give other people confidence about the origin of a change you have made. If a commit or tag has a GPG or S/MIME signature that is cryptographically verifiable, GitHub marks the commit or tag "Verified" or "Partially verified."

![Screenshot of a commit in the commit list for a repository. "Verified" is highlighted with an orange outline.](/assets/images/help/commits/verified-commit.png)

Commits and tags have the following verification statuses, depending on whether you have enabled vigilant mode. By default vigilant mode is not enabled. For information on how to enable vigilant mode, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits)."

Signing commits differs from signing off on a commit. For more information about signing off on commits, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)."

### Default statuses

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed and the signature was successfully verified.
| **Unverified** | The commit is signed but the signature could not be verified.
| No verification status | The commit is not signed.

### Signature verification for rebase and merge

When using the **Rebase and Merge** option on a pull request, it's important to note that the commits in the head branch are added to the base branch without commit signature verification.
When you use this option, GitHub creates a modified commit, using the data and content of the original commit. This means that GitHub didn't truly create this commit, and can't therefore sign it as a generic system user.
GitHub doesn't have access to the committer's private signing keys, so it can't sign the commit on the user's behalf.

A workaround for this is to rebase and merge locally, and then push the changes to the pull request's base branch.

For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)."

### Statuses with vigilant mode enabled

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed, the signature was successfully verified, and the committer is the only author who has enabled vigilant mode.
| **Partially&nbsp;verified** | The commit is signed, and the signature was successfully verified, but the commit has an author who: a) is not the committer and b) has enabled vigilant mode. In this case, the commit signature doesn't guarantee the consent of the author, so the commit is only partially verified.
| **Unverified** | Any of the following is true:<br>- The commit is signed but the signature could not be verified.<br>- The commit is not signed and the committer has enabled vigilant mode.<br>- The commit is not signed and an author has enabled vigilant mode.<br>

Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits)."

You can check the verification status of your signed commits or tags on GitHub and view why your commit signatures might be unverified. For more information, see "[AUTOTITLE](/authentication/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status)."

GitHub will automatically use GPG to sign commits you make using the web interface. Commits signed by GitHub will have a verified status. You can verify the signature locally using the public key available at https://github.com/web-flow.gpg. The full fingerprint of the key is `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

You can optionally choose to have GitHub GPG sign commits you make in GitHub Codespaces. For more information about enabling GPG verification for your codespaces, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."

## GPG commit signature verification

You can use GPG to sign commits with a GPG key that you generate yourself.

GitHub uses OpenPGP libraries to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your account on GitHub.com.

To sign commits using GPG and have those commits verified on GitHub, follow these steps:

1. [Check for existing GPG keys](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
1. [Generate a new GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
1. [Add a GPG key to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)
1. [Tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
1. [Sign commits](/authentication/managing-commit-signature-verification/signing-commits)
1. [Sign tags](/authentication/managing-commit-signature-verification/signing-tags)

## S/MIME commit signature verification

You can use S/MIME to sign commits with an X.509 key issued by your organization.

GitHub uses [the Debian ca-certificates package](https://packages.debian.org/bullseye/ca-certificates), the same trust store used by Mozilla browsers, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key in a trusted root certificate.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** S/MIME signature verification is available in Git 2.19 or later. To update your version of Git, see the [Git](https://git-scm.com/downloads) website.

</div>

To sign commits using S/MIME and have those commits verified on GitHub, follow these steps:

1. [Tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
1. [Sign commits](/authentication/managing-commit-signature-verification/signing-commits)
1. [Sign tags](/authentication/managing-commit-signature-verification/signing-tags)

You don't need to upload your public key to GitHub.

## Signature verification for bots

Organizations and GitHub Apps that require commit signing can use bots to sign commits. If a commit or tag has a bot signature that is cryptographically verifiable, GitHub marks the commit or tag as verified.

Signature verification for bots will only work if the request is verified and authenticated as the GitHub App or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"
- "[AUTOTITLE](/authentication/troubleshooting-commit-signature-verification)"
