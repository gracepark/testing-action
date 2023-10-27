# Pushing a branch blocked by push protection

The push protection feature of secret scanning proactively protects you against leaked secrets in your repositories. You can resolve blocked pushes and, once the detected secret is removed, you can push changes to your working branch from the command line or the web UI.

Secret scanning alerts for partners runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on GitHub.com.

Secret scanning alerts for users are available for free on all public repositories. Organizations using GitHub Enterprise Cloud with a license for GitHub Advanced Security can also enable secret scanning alerts for users on their private and internal repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About push protection for secret scanning

The push protection feature of secret scanning helps to prevent security leaks by scanning for secrets before you push changes to your repository. When you enable push protection for your organization or repository, secret scanning also checks pushes for high-confidence secrets (those identified with a low false positive rate). Secret scanning lists any secrets it detects so the author can review the secrets and remove them or, if needed, allow those secrets to be pushed. For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

If you confirm a secret is real, you need to remove the secret from your branch, _from all the commits it appears in_, before pushing again.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip**
If GitHub blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed. For more information about bypassing push protection for a secret, see "[Allowing a blocked secret to be pushed](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)" and "[Bypassing push protection for a secret](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)" for the command line and the web UI, respectively.

</div>

## Resolving a blocked push on the command line

When you attempt to push a supported secret to a repository or organization with secret scanning as a push protection enabled, GitHub will block the push. You can remove the secret from your branch or follow a provided URL to allow the push.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes**:

- If your git configuration supports pushes to multiple branches, and not only to the current branch, your push may be blocked due to additional and unintended refs being pushed. For more information, see the [`push.default` options](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) in the Git documentation.
- If secret scanning upon a push times out, GitHub will still scan your commits for secrets after the push.

</div>

If the blocked secret was introduced by the latest commit on your branch, you can follow the guidance below.

1. Remove the secret from your code.
1. Commit the changes, by using `git commit --amend`.
1. Push your changes with `git push`.

You can also remove the secret if the secret appears in an earlier commit in the Git history.

1. Use `git log` to determine which commit surfaced in the push error came first in history.
1. Start an interactive rebase with `git rebase -i <commit-id>~1`. <commit-id> is the id of the commit from step 1.
1. Identify your commit to edit by changing `pick` to `edit` on the first line of the text that appears in the editor.
1. Remove the secret from your code.
1. Commit the change with `git commit --amend`.
1. Run `git rebase --continue` to finish the rebase.

## Resolving a blocked commit in the web UI

When you use the web UI to attempt to commit a supported secret to a repository or organization with secret scanning as a push protection enabled, GitHub will block the commit.

You will see a dialog box with information about the secret's location, as well as options allowing you to push the secret. The secret will also be underlined in the file so you can easily find it.

To resolve a blocked commit in the web UI, you need to remove the secret from the file, or use the options displayed in the dialog box to allow the secret. For more information about bypassing push protection from the web UI, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)."

If you confirm a secret is real, you need to remove the secret from the file. Once you remove the secret, you will be able to commit your changes.
