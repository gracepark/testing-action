# Troubleshooting issues with GitHub Copilot Chat

Troubleshooting help for common issues with GitHub Copilot Chat.

GitHub Copilot Chat is currently in public beta, and is subject to changes.
<br><br>
Owners of organizations or enterprises with a GitHub Copilot for Business subscription can decide whether to grant access to the GitHub Copilot Chat beta for users in their organization or enterprise.
<br><br>
If you have a GitHub Copilot for Individuals subscription, you now have access to the GitHub Copilot Chat beta.

If you need help with GitHub Copilot Chat and can't find the answer here, you can report a bug or ask for help. For more information, see "[Sharing feedback about GitHub Copilot Chat](/copilot/github-copilot-chat/using-github-copilot-chat#sharing-feedback-about-github-copilot-chat)."

If you can't find GitHub Copilot Chat in your editor, make sure you have checked the "[Prerequisites](/copilot/github-copilot-chat/using-github-copilot-chat#prerequisites)" section.

## Troubleshooting authentication issues in your editor

You can use GitHub Copilot Chat in Visual Studio Code and Visual Studio. For troubleshooting information relevant to the editor you're using, use the tabs at the top of this article.

<div class="ghd-tool vscode">

### Troubleshooting authentication issues in Visual Studio Code

If you are experiencing authentication issues after installing the GitHub Copilot Chat extension in Visual Studio Code, you can try the following steps to resolve the issue.

1. In the bottom left corner of the Visual Studio Code window, click the **Accounts** icon, hover over your GitHub username, and click the **Sign out** button.
1. To reload Visual Studio Code, press <kbd>F1</kbd> to open the command palette, and select **Developer: Reload Window**.
1. After Visual Studio Code reloads, sign back in to your GitHub account.

</div>

<div class="ghd-tool visualstudio">

### Troubleshooting authentication issues in Visual Studio

If you are experiencing authentication issues after installing the GitHub Copilot Chat extension in Visual Studio, you can try the following steps to resolve the issue.

1. Check that the GitHub ID you are signed into Visual Studio with is the same as the one that you have been granted acess to GitHub Copilot Chat with.
1. Check whether your GitHub ID/credentials need refreshing in Visual Studio. For more information, see "[Work with GitHub accounts in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022)" in the Visual Studio documentation.
1. Try removing and re-adding your GitHub ID to Visual Studio and restarting Visual Studio.
1. If the above steps don't work, click the **Share feedback** button and select **Report a problem** to report the issue to the Visual Studio team.

    ![Screenshot of the share feedback button in Visual Studio.](/assets/images/help/copilot/vs-share-feedback-button.png)

</div>

## Error: "Oops, your response got filtered"

You may encounter this error unexpectedly while using GitHub Copilot Chat. GitHub is aware of this issue and working to fix it. You can report the error in this [GitHub Community discussion](https://github.com/orgs/community/discussions/56134).
