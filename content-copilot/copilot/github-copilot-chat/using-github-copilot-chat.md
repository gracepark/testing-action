# Using GitHub Copilot Chat

You can start using GitHub Copilot Chat by installing the extension in your preferred environment.

GitHub Copilot Chat is currently in public beta, and is subject to changes.
<br><br>
Owners of organizations or enterprises with a GitHub Copilot for Business subscription can decide whether to grant access to the GitHub Copilot Chat beta for users in their organization or enterprise.
<br><br>
If you have a GitHub Copilot for Individuals subscription, you now have access to the GitHub Copilot Chat beta.

<div class="ghd-tool vscode">

## About GitHub Copilot Chat and Visual Studio Code

GitHub Copilot Chat is a chat interface that lets you ask and receive answers to coding-related questions directly within a supported IDE. Copilot Chat can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)."

## Prerequisites

- To use GitHub Copilot Chat you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

- To use GitHub Copilot Chat in Visual Studio Code, you must have the latest version of Visual Studio Code installed. For more information, see the [Visual Studio Code download page](https://code.visualstudio.com/).

- To use GitHub Copilot Chat in Visual Studio Code, you must be signed into Visual Studio Code with the same GitHub ID that has access to GitHub Copilot.

## Enabling or disabling GitHub Copilot Chat

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:**  If you have a GitHub Copilot for Individuals subscription, you are automatically granted access to the GitHub Copilot Chat beta.

</div>

The GitHub Copilot Chat public beta is available to all organizations and enterprises that have an active GitHub Copilot for Business license. You can enable or disable GitHub Copilot Chat for your organization or enterprise in the GitHub Copilot for Business settings page.

### Enabling or disabling GitHub Copilot Chat at the organization level

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Code planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> Copilot**, and then click **Policies**.
1. To the right of **GitHub Copilot Chat Beta**, select the dropdown menu, and then click **Enabled** or **Disabled**.

### Enabling or disabling GitHub Copilot Chat at the enterprise level

1. In the enterprise account sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-law" aria-hidden="true"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path></svg> **Policies**.
1. Under "<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-law" aria-hidden="true" aaria-hidden="true"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path></svg> Policies", click **Copilot**.
1. To the right of **GitHub Copilot Chat Beta**, select the dropdown menu, and then choose the appropriate option.
    - Click **Allowed** to enable the GitHub Copilot Chat beta for all organizations under your enterprise.
    - Click **Blocked** to disable the GitHub Copilot Chat beta for all organizations under your enterprise.
    - Click **No policy** to allow each organization under your enterprise to set their own policy.

## Installing the Visual Studio Code extension

To use GitHub Copilot Chat, you must first install the GitHub Copilot Chat extension for Visual Studio Code.

1. In Visual Studio Code, open the **Extensions** view by clicking the **Extensions** icon in the activity bar on the left side of the Visual Studio Code window.

    ![Screenshot of the extensions icon in the Activity Bar.](/assets/images/help/copilot/vsc-extensions-icon.png)

1. In the "Search Extensions in Marketplace" search box, search for the `GitHub Copilot Chat` extension, then click **Install**.

    ![Screenshot of the GitHub Copilot Chat extension in the Extensions Marketplace.](/assets/images/help/copilot/vscode-extension-search.png)

1. In the Visual Studio Code window, click **Reload required** to update Visual Studio Code.
1. If you are prompted to sign in by a toast notification in the bottom right corner of Visual Studio Code, click **Sign in to GitHub** and sign in with the same GitHub ID that has been granted access to the GitHub Copilot Chat limited public beta.
1. Follow the prompts in Visual Studio Code and on GitHub in your browser to complete the sign in and authentication process.
1. To confirm that GitHub Copilot Chat has been successfully installed, in the activity bar on the left side of the Visual Studio Code window, click the **GitHub Copilot Chat** icon to open the GitHub Copilot Chat chat window.

    ![Screenshot of the GitHub Copilot Chat icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you experience authentication issues after installing the extension, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat#troubleshooting-authentication-issues-in-your-editor)."

</div>

## Asking your first question

GitHub Copilot Chat is intended to answer exclusively coding related questions that you ask in natural language. For example, you can ask GitHub Copilot Chat to help you write a function that returns the sum of two numbers.

1. In the Visual Studio Code activity bar, click the **GitHub Copilot Chat** icon to open the GitHub Copilot Chat chat window.

    ![Screenshot of the GitHub Copilot Chat icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

1. At the bottom of the GitHub Copilot Chat window, in the **Ask Copilot a question or type `/` for topics** text box, type a coding related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".
1. GitHub Copilot Chat will process your question and provide an answer, with code suggestions when appropriate, in the chat window.

   If your question is outside the scope of GitHub Copilot Chat, it will tell you and may suggest an alternative question to ask.

1. Optionally, if GitHub Copilot Chat suggests a follow-up question above the **Ask Copilot a question or type `/` for topics** text box, click the follow-up question to ask it.

## Using code suggestions from GitHub Copilot Chat

When GitHub Copilot Chat provides code suggestions, you have a few options for how to use them.

1. In the GitHub Copilot Chat window, to show the options for a code suggestion, hover over the suggestion.

    ![Screenshot of code suggestion options in the GitHub Copilot Chat window.](/assets/images/help/copilot/vsc-code-suggestion-options.png)

1. Choose one of the options for using the code suggestion.
    - To copy the code suggestion to your clipboard, click the **Copy** icon.
    - To insert the code suggestion into your code at the current location of your cursor, click the **Insert at Cursor** icon.
    - To view additional options, click the **...** icon.
        - To create a new file and insert the suggestion into it, click **Insert Into New File**.
        - To run the code suggestion in the Visual Studio Code terminal, click **Run in Terminal**.

## Asking GitHub Copilot Chat questions about your code

GitHub Copilot Chat can provide answers and support with a wide range of coding related topics.

1. In Visual Studio Code, open the file you want GitHub Copilot Chat to help you with.
1. Ask GitHub Copilot Chat a question about the file you have open. For example:
    - To generate a description of the file's purpose, ask a question like, `What does this file do?`.
    - To generate a unit test for the file, type a request like, `Write a unit test for this file`. Alternatively, highlight the code you want to generate a unit test for, then ask a question like, `Write a unit test for this code`.
    - To generate a fix for a bug in the file, type a request like, `Fix this bug`.

## Sharing feedback about GitHub Copilot Chat

To share feedback about GitHub Copilot Chat, you can use the **share feedback** button in the GitHub Copilot Chat window.

1. Scroll to the top of the GitHub Copilot Chat window.
1. Click the **share feedback** button.
1. In your browser, in the **vscode-copilot-release** repository, create a new issue or open the GitHub Copilot community discussion.
    - To open an issue to report a bug, next to **Bug report for GitHub Copilot Chat**, click **Get started**.
    - To open an issue to request a feature, next to **Feature request for GitHub Copilot Chat**, click **Get started**.
    - To report a security vulnerability, next to **Report a security vulnerability**, click **View policy**.
    - To ask a question in a discussion, next to **Questions**, click **Open**.

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"
- [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

</div>

<div class="ghd-tool visualstudio">

## About GitHub Copilot Chat and Visual Studio

GitHub Copilot Chat is a chat interface that lets you ask and receive answers to coding-related questions directly within a supported IDE. Copilot Chat can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)."

## Prerequisites

- To use GitHub Copilot Chat you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

- To use GitHub Copilot Chat with Visual Studio, you must be running Visual Studio 2022 version 17.6 or higher. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

- To use GitHub Copilot Chat with Visual Studio, you must be signed into Visual Studio with the same GitHub ID that has access to GitHub Copilot.

## Enabling or disabling GitHub Copilot Chat

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:**  If you have a GitHub Copilot for Individuals subscription, you are automatically granted access to the GitHub Copilot Chat beta.

</div>

The GitHub Copilot Chat public beta is available to all organizations and enterprises that have an active GitHub Copilot for Business license. You can enable or disable GitHub Copilot Chat for your organization or enterprise in the GitHub Copilot for Business settings page.

### Enabling or disabling GitHub Copilot Chat at the organization level

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Code planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> Copilot**, and then click **Policies**.
1. To the right of **GitHub Copilot Chat Beta**, select the dropdown menu, and then click **Enabled** or **Disabled**.

### Enabling or disabling GitHub Copilot Chat at the enterprise level

1. In the enterprise account sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-law" aria-hidden="true"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path></svg> **Policies**.
1. Under "<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-law" aria-hidden="true" aaria-hidden="true"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path></svg> Policies", click **Copilot**.
1. To the right of **GitHub Copilot Chat Beta**, select the dropdown menu, and then choose the appropriate option.
    - Click **Allowed** to enable the GitHub Copilot Chat beta for all organizations under your enterprise.
    - Click **Blocked** to disable the GitHub Copilot Chat beta for all organizations under your enterprise.
    - Click **No policy** to allow each organization under your enterprise to set their own policy.

## Installing the Visual Studio extension

To use GitHub Copilot Chat with Visual Studio, you must install the Visual Studio extension.
1. In the Visual Studio menu bar, click **Extensions**, then click **Manage Extensions**.

   ![Screenshot of the menu bar in Visual Studio. The "Extensions" menu is open, and the "Manage Extensions" option is highlighted with an orange outline.](/assets/images/help/copilot/visual-studio-toolbar.png)
1. In the "Manage Extensions" window, click **Visual Studio Marketplace**, search for "GitHub Copilot Chat", then click **Download**.
1. Close the "Manage Extensions" window, then exit and relaunch Visual Studio.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you experience authentication issues after installing the extension, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat#troubleshooting-authentication-issues-in-your-editor)."

</div>

## Asking your first question

GitHub Copilot Chat is intended to answer exclusively coding related questions that you ask in natural language. For example, you can ask GitHub Copilot Chat to help you write a function that returns the sum of two numbers.

1. In the Visual Studio menu bar, to launch GitHub Copilot Chat, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the Copilot Chat window, in the **Ask Copilot** text box, type a coding related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".

    <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

    **Note:** If your question is outside the scope of GitHub Copilot Chat, it will tell you and may suggest an alternative question to ask.

    </div>

1. If Copilot Chat offers a code suggestion that you want to use, click the **Copy** icon to copy the code suggestion to your clipboard.
1. Optionally, if GitHub Copilot Chat suggests a follow-up question under your last answer, click the follow-up question to ask it.

## Asking GitHub Copilot Chat questions about your code

GitHub Copilot Chat can provide answers and support with a wide range of coding related topics.

1. In Visual Studio, open the file you want GitHub Copilot Chat to help you with.
1. Ask GitHub Copilot Chat a question about the file you have open. For example:
    - To generate a description of the file's purpose, ask a question like, `What does this file do?`.
    - To generate a unit test for the file, type a request like, `Write a unit test for this file`. Alternatively, highlight the code you want to generate a unit test for, then ask a question like, `Write a unit test for this code`.
    - To generate a fix for a bug in the file, type a request like, `Fix this bug`.

## Sharing feedback about GitHub Copilot Chat

To share feedback about GitHub Copilot Chat, you can use the **Send feedback** button in Visual Studio. For more information on providing feedback for Visual Studio, see the [Visual Studio Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the Visual Studio window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in Visual Studio.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    - To report a bug, click **Report a problem**.
    - To request a feature, click **Suggest a feature**.

## Further reading

- [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)
- [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
- [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

</div>
