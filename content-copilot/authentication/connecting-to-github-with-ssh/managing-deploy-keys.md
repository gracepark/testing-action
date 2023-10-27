# Managing deploy keys

Learn different ways to manage SSH keys on your servers when you automate deployment scripts and which way is best for you.

You can manage SSH keys on your servers when automating deployment scripts using SSH agent forwarding, HTTPS with OAuth tokens, deploy keys, or machine users.

## SSH agent forwarding

In many cases, especially in the beginning of a project, SSH agent forwarding is the quickest and simplest method to use. Agent forwarding uses the same SSH keys that your local development computer uses.

### Pros of SSH agent forwarding

- You do not have to generate or keep track of any new keys.
- There is no key management; users have the same permissions on the server that they do locally.
- No keys are stored on the server, so in case the server is compromised, you don't need to hunt down and remove the compromised keys.

### Cons of SSH agent forwarding

- Users **must** SSH in to deploy; automated deploy processes can't be used.
- SSH agent forwarding can be troublesome to run for Windows users.

### Set up SSH agent forwarding

1. Turn on agent forwarding locally. See [our guide on SSH agent forwarding][ssh-agent-forwarding] for more information.
1. Set your deploy scripts to use agent forwarding. For example, on a bash script, enabling agent forwarding would look something like this:
`ssh -A serverA 'bash -s' < deploy.sh`

## HTTPS cloning with OAuth tokens

If you don't want to use SSH keys, you can use HTTPS with OAuth tokens.

### Pros of HTTPS cloning with OAuth tokens

- Anyone with access to the server can deploy the repository.
- Users don't have to change their local SSH settings.
- Multiple tokens (one for each user) are not needed; one token per server is enough.
- A token can be revoked at any time, turning it essentially into a one-use password.

### Cons of HTTPS cloning with OAuth tokens

- You must make sure that you configure your token with the correct access scopes.
- Tokens are essentially passwords, and must be protected the same way.

### Set up HTTPS cloning with OAuth tokens

See [our guide on creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Deploy keys

You can launch projects from a repository on GitHub.com to your server by using a deploy key, which is an SSH key that grants access to a single repository. GitHub attaches the public part of the key directly to your repository instead of a personal account, and the private part of the key remains on your server. For more information, see "[AUTOTITLE](/rest/guides/delivering-deployments)."

Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)."

### Pros of deploy keys

- Anyone with access to the repository and server has the ability to deploy the project.
- Users don't have to change their local SSH settings.
- Deploy keys are read-only by default, but you can give them write access when adding them to a repository.

### Cons of deploy keys

- Deploy keys only grant access to a single repository. More complex projects may have many repositories to pull to the same server.
- Deploy keys are usually not protected by a passphrase, making the key easily accessible if the server is compromised.
- If the user who created the deploy key is removed from the repository, the deploy key will still be active as it isn't tied to the specific user, but rather to the repository.

### Set up deploy keys

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server, and remember where you save the generated public and private rsa key pair.
1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**. If you cannot see the "Settings" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="More" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)
1. In the sidebar, click **Deploy Keys**.
1. Click **Add deploy key**.
1. In the "Title" field, provide a title.
1. In the "Key" field, paste your public key.
1. Select **Allow write access** if you want this key to have write access to the repository. A deploy key with write access lets a deployment push to the repository.
1. Click **Add key**.

### Using multiple repositories on one server

If you use multiple repositories on one server, you will need to generate a dedicated key pair for each one. You can't reuse a deploy key for multiple repositories.

In the server's SSH configuration file (usually `~/.ssh/config`), add an alias entry for each repository. For example:

```bash
Host github.com-repo-0
        Hostname github.com
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host github.com-repo-1
        Hostname github.com
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

- `Host github.com-repo-0` - The repository's alias.
- `Hostname github.com` - Configures the hostname to use with the alias.
- `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Assigns a private key to the alias.

You can then use the hostname's alias to interact with the repository using SSH, which will use the unique deploy key assigned to that alias. For example:

```bash
git clone git@github.com-repo-1:OWNER/repo-1.git
```

## GitHub App installation access tokens

If your server needs to access repositories across one or more organizations, you can use a GitHub App to define the access you need, and then generate _tightly-scoped_, installation access tokens from that GitHub App. The installation access tokens can be scoped to single or multiple repositories, and can have fine-grained permissions. For example, you can generate a token with read-only access to a repository's contents.

Since GitHub Apps are a first class actor on  GitHub, the installation access tokens are decoupled from any GitHub user, which makes them comparable to "service tokens". Additionally, installation access tokens have dedicated rate limits that scale with the size of the organizations that they act upon. For more information, see [Rate limits for GitHub Apps](/apps/creating-github-apps/setting-up-a-github-app/rate-limits-for-github-apps).

### Pros of installation access tokens

- Tightly-scoped tokens with well-defined permission sets and expiration times (1 hour, or less if revoked manually using the API).
- Dedicated rate limits that grow with your organization.
- Decoupled from GitHub user identities, so they do not consume any licensed seats.
- Never granted a password, so cannot be directly signed in to.

### Cons of installation access tokens

- Additional setup is needed to create the GitHub App.
- Installation access tokens expire after 1 hour, and so need to be re-generated, typically on-demand using code.

### Set up installation access tokens

1. Determine if your GitHub App should be public or private. If your GitHub App will only act on repositories within your organization, you likely want it private.
1. Determine the permissions your GitHub App requires, such as read-only access to repository contents.
1. Create your GitHub App via your organization's settings page. For more information, see [Creating a GitHub App](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app).
1. Note your GitHub App `id`.
1. Generate and download your GitHub App's private key, and store this safely. For more information, see [Generating a private key](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps).
1. Install your GitHub App on the repositories it needs to act upon, optionally you may install the GitHub App on all repositories in your organization.
1. Identify the `installation_id` that represents the connection between your GitHub App and the organization repositories it can access.  Each GitHub App and organization pair have at most a single `installation_id`. You can identify this `installation_id` via [Get an organization installation for the authenticated app](/rest/apps#get-an-organization-installation-for-the-authenticated-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app).
1. Generate an installation access token using the corresponding REST API endpoint, [Create an installation access token for an app](/rest/apps#create-an-installation-access-token-for-an-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app), and [Authenticating as an installation](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).
1. Use this installation access token to interact with your repositories, either via the REST or GraphQL APIs, or via a Git client.

For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app)."

## Machine users

If your server needs to access multiple repositories, you can create a new account on GitHub.com and attach an SSH key that will be used exclusively for automation. Since this account on GitHub.com won't be used by a human, it's called a _machine user_. You can add the machine user as a [collaborator][collaborator] on a personal repository (granting read and write access), as an [outside collaborator][outside-collaborator] on an organization repository (granting read, write, or admin access), or to a [team][team] with access to the repositories it needs to automate (granting the permissions of the team).

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** Our [terms of service][tos] state:

> _Accounts registered by "bots" or other automated methods are not permitted._

This means that you cannot automate the creation of accounts. But if you want to create a single machine user for automating tasks such as deploy scripts in your project or organization, that is totally cool.

</div>

### Pros of machine users

- Anyone with access to the repository and server has the ability to deploy the project.
- No (human) users need to change their local SSH settings.
- Multiple keys are not needed; one per server is adequate.

### Cons of machine users

- Only organizations can restrict machine users to read-only access. Personal repositories always grant collaborators read/write access.
- Machine user keys, like deploy keys, are usually not protected by a passphrase.

### Set up machine users

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server and attach the public key to the machine user account.
1. Give the machine user account access to the repositories you want to automate. You can do this by adding the account as a [collaborator][collaborator], as an [outside collaborator][outside-collaborator], or to a [team][team] in an organization.

[ssh-agent-forwarding]: /authentication/connecting-to-github-with-ssh/using-ssh-agent-forwarding
[generating-ssh-keys]: /authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/site-policy/github-terms/github-terms-of-service
[collaborator]: /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /organizations/organizing-members-into-teams/adding-organization-members-to-a-team

## Further reading

- [Configuring notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
