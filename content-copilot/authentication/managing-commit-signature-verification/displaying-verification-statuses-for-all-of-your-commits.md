# Displaying verification statuses for all of your commits

You can enable vigilant mode for commit signature verification to mark all of your commits and tags with a signature verification status.

## About vigilant mode

When you work locally on your computer, Git allows you to set the author of your changes and the identity of the committer. This, potentially, makes it difficult for other people to be confident that commits and tags you create were actually created by you. To help solve this problem you can sign your commits and tags. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)" and "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)." GitHub marks signed commits and tags with a verification status.

By default commits and tags are marked "Verified" if they are signed with a GPG or S/MIME key that was successfully verified. If a commit or tag has a signature that can't be verified by GitHub, we mark the commit or tag "Unverified." In all other cases no verification status is displayed.

However, you can give other users increased confidence in the identity attributed to your commits and tags by enabling vigilant mode in your GitHub settings. With vigilant mode enabled, all of your commits and tags are marked with one of three verification statuses:

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed, the signature was successfully verified, and the committer is the only author who has enabled vigilant mode.
| **Partially&nbsp;verified** | The commit is signed, and the signature was successfully verified, but the commit has an author who: a) is not the committer and b) has enabled vigilant mode. In this case, the commit signature doesn't guarantee the consent of the author, so the commit is only partially verified.
| **Unverified** | Any of the following is true:<br>- The commit is signed but the signature could not be verified.<br>- The commit is not signed and the committer has enabled vigilant mode.<br>- The commit is not signed and an author has enabled vigilant mode.<br>

You should only enable vigilant mode if you sign all of your commits and tags and use an email address that is verified for your account on GitHub as your committer email address. After enabling this mode, any unsigned commits or tags that you generate locally and push to GitHub will be marked "Unverified."

You can check the verification status of your signed commits or tags on GitHub and view why your commit signatures might be unverified. For more information, see "[AUTOTITLE](/authentication/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status)."

## Enabling vigilant mode

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-key" aria-hidden="true"><path d="M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg> SSH and GPG keys**.
1. Under "Vigilant mode," select **Flag unsigned commits as unverified**.
