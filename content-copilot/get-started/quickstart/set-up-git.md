# Set up Git

At the heart of GitHub is an open-source version control system (VCS) called Git. Git is responsible for everything GitHub-related that happens locally on your computer.

## Using Git

To use Git on the command line, you will need to download, install, and configure Git on your computer. You can also install GitHub CLI to use GitHub from the command line. For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

If you want to work with Git locally, but do not want to use the command line, you can download and install the [GitHub Desktop](https://desktop.github.com/) client.  For more information, see "[AUTOTITLE](/desktop/overview/about-github-desktop)."

If you do not need to work with files locally, GitHub lets you complete many Git-related actions directly in the browser, including:

- [Creating a repository](/get-started/quickstart/create-a-repo)
- [Forking a repository](/get-started/quickstart/fork-a-repo)
- [Managing files](/repositories/working-with-files/managing-files)
- [Being social](/get-started/quickstart/be-social)

## Setting up Git

1. [Download and install the latest version of Git](https://git-scm.com/downloads).

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: If you are using a Chrome OS device, additional setup is required:

   1. Install a terminal emulator such as Termux from the Google Play Store on your Chrome OS device.
   1. From the terminal emulator that you installed, install Git. For example, in Termux, enter `apt install git` and then type `y` when prompted.

   </div>

1. [Set your username in Git](/get-started/getting-started-with-git/setting-your-username-in-git).
1. [Set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

## Authenticating with GitHub from Git

When you connect to a GitHub repository from Git, you will need to authenticate with GitHub using either HTTPS or SSH.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You can authenticate to GitHub using GitHub CLI, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

</div>

### Connecting over HTTPS (recommended)

If you clone with HTTPS, you can cache your GitHub credentials in Git using a credential helper. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)" and "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)."

### Connecting over SSH

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from GitHub. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls)" and "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Next steps

You now have Git and GitHub all set up. You may now choose to create a repository where you can put your projects. Saving your code in a repository allows you to back up your code and share it around the world.

- Creating a repository for your project allows you to store code in GitHub. This provides a backup of your work that you can choose to share with other developers. For more information, see “[Create a repository](/get-started/quickstart/create-a-repo).".

- Forking a repository will allow you to make changes to another repository without affecting the original. For more information, see "[AUTOTITLE](/get-started/quickstart/fork-a-repo)."

- Each repository on GitHub is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on GitHub. For more information, see "[AUTOTITLE](/get-started/quickstart/be-social)."

- GitHub has a great support community where you can ask for help and talk to people from around the world. Join the conversation on [GitHub Community](https://github.com/orgs/community/discussions).
