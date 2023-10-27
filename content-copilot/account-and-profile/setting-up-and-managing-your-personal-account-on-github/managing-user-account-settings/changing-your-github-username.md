# Changing your GitHub username

You can change the username for your account on GitHub.com.

## About username changes

You can change your username to another username that is not currently in use. If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/free-pro-team@latest/site-policy/content-removal-policies/github-trademark-policy) page.

If you do not hold a trademark for the name, you can choose another username or keep your current username. GitHub Support cannot release the unavailable username for you. For more information, see "[Changing your username](#changing-your-username)."

After changing your username, your old username becomes available for anyone else to claim. Most references to your repositories under the old username automatically change to the new username. However, some links to your profile won't automatically redirect.

GitHub cannot set up redirects for:
- [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) using your old username
- Links to [gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) that include your old username

If you're a member of an enterprise with managed users, you cannot make changes to your username. For more information, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts#enterprise-managed-users)."

If the account namespace includes any public repositories that contain an action listed on GitHub Marketplace, or that had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to you renaming your account, GitHub permanently retires the old owner name and repository name combination (`OLD-OWNER/REPOSITORY-NAME`) when you rename your account. If you try to create a repository using a retired owner name and repository name combination, you will see the error: "The repository `<REPOSITORY_NAME>` has been retired and cannot be reused."

If the account namespace includes any packages or container images stored in a GitHub Packages registry, GitHub transfers the packages and container images to the new namespace. By renaming your account, you may break projects that depend on these packages. If the namespace includes any container images that are public and have more than 5,000 downloads, the full former name of these container images (`OLD-NAMESPACE/IMAGE-NAME`) is permanently retired when you rename the account to ensure the container image name cannot be reused in the future.

## Repository references

After you change your username, GitHub will automatically redirect references to your repositories.
- Web links to your existing repositories will continue to work. This can take a few minutes to complete after you make the change.
- Command line pushes from your local repository clones to the old remote tracking URLs will continue to work.

If the new owner of your old username creates a repository with the same name as your repository, that will override the redirect entry and your redirect will stop working. Because of this possibility, we recommend you update all existing remote repository URLs after changing your username. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."

## Links to your previous profile page

After changing your username, links to your previous profile page, such as `https://github.com/previoususername`, will return a 404 error. We recommend updating any links to your account on GitHub.com from elsewhere, such as your LinkedIn or Twitter profile.

## Your Git commits

If your Git commits are associated with another email address you've added to your GitHub account, they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. For more information on setting your email address, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

If you've been using a GitHub-provided private commit email address, whether or not your commit history will be retained after an account rename depends on the format of the email address. Git commits that are associated with your GitHub-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph, unless your `noreply` email address is in the form of `ID+USERNAME@users.noreply.github.com`. Older versions of the `noreply` email address that do not contain a numeric ID will not be associated with your GitHub account after changing your username.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warnings:**

- After a username change, verified commits signed using the previous GitHub-provided `noreply` email address will lose their "Verified" status.
- When verifying a signature, GitHub checks that the email address of the committer or tagger exactly matches one of the email addresses associated with the GPG key's identities. Additionally, GitHub confirms that the email address is verified and linked to the user's account. This ensures that the key belongs to you and that you created the commit or tag. Because the username of the `noreply` email address changes, these commits can no longer be verified.

</div>

## Your gists

After changing your username, the URLs to any public or secret gists will also change and previous links to these will return a 404 error. We recommend updating the links to these gists anywhere you may have shared them.

## CODEOWNERS files

After changing your username, CODEOWNERS files that include your old username will need to be manually updated. When you view the CODEOWNERS files on GitHub.com, an error message is displayed if the file contains any unknown users, or users without write access. We recommend updating all relevant CODEOWNERS files with your new username. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."

## Changing your username

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> Account**.
1. In the "Change username" section, click **Change username**.
1. Read the warnings about changing your username. If you still want to change your username, click **I understand, let's change my username**.
1. Type a new username.
1. If the username you've chosen is available, click **Change my username**. If the username you've chosen is unavailable, you can try a different username or one of the suggestions you see.

## Further reading

- "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-username-policy)"
