# Getting started with GitHub Copilot

You can start using GitHub Copilot by installing the extension in your preferred environment.

GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

<a href="https://github.com/github-copilot/signup" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Try GitHub Copilot</span> <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link-external" aria-hidden="true"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path></svg></a>

<div class="ghd-tool jetbrains">

## About GitHub Copilot and JetBrains IDEs

GitHub Copilot provides autocomplete-style suggestions from an AI pair programmer as you code. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)."

If you use a JetBrains IDE, you can view and incorporate suggestions from GitHub Copilot directly within the editor. This guide demonstrates how to use GitHub Copilot within a JetBrains IDE for macOS, Windows, or Linux.

## Prerequisites

- To use GitHub Copilot you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."
- To use GitHub Copilot in JetBrains, you must have a compatible JetBrains IDE installed. GitHub Copilot is compatible with the following IDEs:
  - IntelliJ IDEA (Ultimate, Community, Educational)
  - Android Studio
  - AppCode
  - CLion
  - Code With Me Guest
  - DataGrip
  - DataSpell
  - GoLand
  - JetBrains Client
  - MPS
  - PhpStorm
  - PyCharm (Professional, Community, Educational)
  - Rider
  - RubyMine
  - RustRover
  - WebStorm

  For more information, see the [JetBrains IDEs](https://www.jetbrains.com/products/) tool finder.

## Installing the GitHub Copilot extension in your JetBrains IDE

To use GitHub Copilot in a JetBrains IDE, you must install the GitHub Copilot extension. The following procedure will guide you through installation of the GitHub Copilot plugin in IntelliJ IDEA. Steps to install the plugin in another supported IDE may differ.

1. In your JetBrains IDE, under the **File** menu for Windows or under the name of your IDE for Mac (for example, **PyCharm** or **IntelliJ**), click **Settings** for Windows or **Preferences** for Mac.
1. In the left-side menu of the **Settings/Preferences** dialog box, click **Plugins**.
1. At the top of the **Settings/Preferences** dialog box, click **Marketplace**. In the search bar, search for **GitHub Copilot**, then click **Install**.

   ![Screenshot of the "Preferences" window. A tab labeled "Marketplace" is highlighted with an orange outline. In a list of search results, the installed "GitHub Copilot" plugin is marked by a selected checkbox.](/assets/images/help/copilot/jetbrains-marketplace.png)
1. After GitHub Copilot is installed, click **Restart IDE**.
1. After your JetBrains IDE has restarted, click the **Tools** menu. Click **GitHub Copilot**, then click **Login to GitHub**.

    ![Screenshot of the expanded "Tools" menu and "GitHub Copilot" sub-menu. The "Login to GitHub" option is highlighted in blue.](/assets/images/help/copilot/jetbrains-tools-menu.png)

1. In the "Sign in to GitHub" dialog box, to copy the device code and open the device activation window, click **Copy and Open**.

    ![Screenshot of the "Sign in to GitHub" dialog. A device code is displayed above a button labeled "Copy and Open".](/assets/images/help/copilot/device-code-copy-and-open.png)
1. A device activation window will open in your browser. Paste the device code, then click **Continue**.
1. GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize GitHub Copilot Plugin**.
1. After the permissions have been approved, your JetBrains IDE will show a confirmation. To begin using GitHub Copilot, click **OK**.

## Seeing your first suggestion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have duplication detection enabled for GitHub Copilot, you may receive limited suggestions, or no suggestions, when using the code examples provided. As an alternative, you can start by typing your own code to see suggestions from GitHub Copilot. For more information on duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom#enabling-or-disabling-duplication-detection)."

</div>

GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases. The following samples are in Java, but other languages will work similarly.

1. In your JetBrains IDE, create a new Java (_*.java_) file.
1. In the Java file, create a class by typing `class Test`.
   GitHub Copilot will automatically suggest a class body in grayed text. The exact suggestion may vary.
1. To accept the suggestion, press <kbd>Tab</kbd>.
1. To prompt GitHub Copilot to suggest a function body, type the following line below the bracket of the `main` function. The exact suggestion may vary.
   ```java copy
   int calculateDaysBetweenDates(
   ```
1. To accept the suggestion, press <kbd>Tab</kbd>.

GitHub Copilot will attempt to match the context and style of your code. You can always edit the suggested code.

## Seeing alternative suggestions

For any given input, GitHub Copilot may offer multiple suggestions. You can select which suggestion to use, or reject all suggestions.

1. In your JetBrains IDE, create a new Java (_*.java_) file.
1. To prompt GitHub Copilot to show you a suggestion, type the following line in the Java file.
   ```java copy
   int calculateDaysBetweenDates(
   ```
1. Optionally, you can see alternative suggestions, if any are available.

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
1. To accept a suggestion, press <kbd>Tab</kbd>. To reject all suggestions, press <kbd>Esc</kbd>.

## Seeing multiple suggestions in a new tab

You may not want any of the initial suggestions GitHub Copilot offers. You can use a keyboard shortcut to prompt GitHub Copilot to show you multiple suggestions in a new tab.

1. In your JetBrains IDE, create a new Java (_*.java_) file.
1. To prompt GitHub Copilot to show you a suggestion, type the following line in the Java file.
   ```java copy
   int calculateDaysBetweenDates(
   ```
1. Open a new tab with multiple additional suggestions.
    - On macOS, press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>, then click **Open GitHub Copilot**, or press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> to open the new tab immediately.
    - On Windows or Linux, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, then click **Open GitHub Copilot**.

1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

You can describe something you want to do using natural language within a comment, and GitHub Copilot will suggest the code to accomplish your goal.

1. In your JetBrains IDE, create a new Java (_*.java_) file.
1. To prompt GitHub Copilot to suggest an implementation of a function in the Java file, type the following lines.

    ```java copy
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```

## Enabling and disabling GitHub Copilot

You can enable or disable GitHub Copilot for all languages, or for individual languages. The GitHub Copilot status icon in the bottom panel of your JetBrains IDE window indicates whether GitHub Copilot is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable GitHub Copilot, click the status icon in the bottom panel of the JetBrains window.

   ![Screenshot of the IntelliJ IDEA toolbar. The GitHub Copilot logo is highlighted with an orange outline.](/assets/images/help/copilot/status-icon-jetbrains.png)
1. If you are disabling GitHub Copilot, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing.

   - To disable suggestions from GitHub Copilot globally, click **Disable Completions**.
   - To disable suggestions from GitHub Copilot for the specified language, click **Disable Completions for _LANGUAGE_**.

   ![Screenshot of option to disable GitHub Copilot globally or for the current language.](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

</div>

<div class="ghd-tool visualstudio">

## About GitHub Copilot and Visual Studio

GitHub Copilot provides autocomplete-style suggestions from an AI pair programmer as you code. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)."

If you use Visual Studio, you can view and incorporate suggestions from GitHub Copilot directly within the editor. This guide demonstrates how to use GitHub Copilot within Visual Studio for Windows.

## Prerequisites

- To use GitHub Copilot you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

- To use GitHub Copilot in Visual Studio, you must have Visual Studio 2022 17.6 or later installed. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: GitHub Copilot is not currently available for use with Visual Studio for Mac.

</div>

## Installing the GitHub Copilot extension in Visual Studio

To use GitHub Copilot, you must first install the GitHub Copilot extension.

1. In the Visual Studio menu bar, click **Extensions**, then click **Manage Extensions**.

   ![Screenshot of the menu bar in Visual Studio. The "Extensions" menu is open, and the "Manage Extensions" option is highlighted with an orange outline.](/assets/images/help/copilot/visual-studio-toolbar.png)
1. In the "Manage Extensions" window, click **Visual Studio Marketplace**, search for the GitHub Copilot extension, then click **Download**.

   ![Screenshot of a list of search results. Next to the GitHub Copilot extension, the "Download" button is highlighted with an orange outline.](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Close the "Manage Extensions" window, then exit and relaunch Visual Studio.
1. Optionally, to check that GitHub Copilot is installed and enabled, go back to **Manage Extensions**, click **Installed** to view your currently installed extensions, then click **GitHub Copilot** to see status information.

   ![Screenshot of a list of installed extensions in Visual Studio. The "GitHub Copilot" extension is highlighted with an orange outline.](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Open or create a new project in Visual Studio.
1. To enable GitHub Copilot, ensure you have added your GitHub account to Visual Studio. For more information, see [Work with GitHub accounts in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts) in the Microsoft documentation.

## Seeing your first suggestion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have duplication detection enabled for GitHub Copilot, you may receive limited suggestions, or no suggestions, when using the code examples provided. As an alternative, you can start by typing your own code to see suggestions from GitHub Copilot. For more information on duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom#enabling-or-disabling-duplication-detection)."

</div>
GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases. The following samples are in C#, but other languages will work similarly.

1. In Visual Studio, create a new C# (_*.cs_) file.
1. In the C# file, type the following function signature. GitHub Copilot will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.

   ```csharp copy
   int CalculateDaysBetweenDates(
   ```

1. To accept the suggestion, press <kbd>Tab</kbd>.

## Seeing alternative suggestions

For any given input, GitHub Copilot may offer multiple suggestions. You can select which suggestion to use, or reject all suggestions.
1. In Visual Studio, create a new C# (_*.cs_) file.
1. In the C# file, type the following function signature. GitHub Copilot will show you a suggestion.

   ```csharp copy
   int CalculateDaysBetweenDates(
   ```

1. If alternative suggestions are available, you can see these alternatives by pressing <kbd>Alt</kbd>+<kbd>.</kbd> (or <kbd>Alt</kbd>+<kbd>,</kbd>).
1. Optionally, you can hover over the suggestion to see the GitHub Copilot command palette for choosing suggestions.
1. To accept a suggestion, press <kbd>Tab</kbd>. To reject all suggestions, press <kbd>Esc</kbd>.

## Generating code suggestions from comments

You can describe something you want to do using natural language within a comment, and GitHub Copilot will suggest the code to accomplish your goal.

1. In Visual Studio, create a new C# (_*.cs_) file.
1. In the C# file, type the following comment. GitHub Copilot will suggest an implementation of the function.

   ```csharp copy
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");

   // find all images
   ```

1. To accept the suggestion, press <kbd>Tab</kbd>.

## Enabling or disabling GitHub Copilot

The GitHub Copilot status icon in the bottom panel of the Visual Studio window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, it will have a diagonal line through it.

1. To enable or disable GitHub Copilot, click the GitHub Copilot icon in the bottom panel of the Visual Studio window.

   ![Screenshot of editor margin in Visual Studio with the GitHub Copilot icon emphasized.](/assets/images/help/copilot/editor-margin-visual-studio.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from GitHub Copilot globally, click **Enable Globally**.
   - To disable suggestions from GitHub Copilot for the specified language, click **Enable for LANGUAGE**.

</div>

<div class="ghd-tool vscode">

## About GitHub Copilot and Visual Studio Code

GitHub Copilot provides autocomplete-style suggestions from an AI pair programmer as you code. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)."

If you use Visual Studio Code, you can view and incorporate suggestions from GitHub Copilot directly within the editor. This guide demonstrates how to use GitHub Copilot within Visual Studio Code for macOS, Windows, or Linux.

## Prerequisites

- To use GitHub Copilot you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

- To use GitHub Copilot in Visual Studio Code, you must have Visual Studio Code installed. For more information, see the [Visual Studio Code download page](https://code.visualstudio.com/Download).

## Installing the GitHub Copilot extension in Visual Studio Code

To use GitHub Copilot, you must first install the GitHub Copilot extension.

1. In the Visual Studio Code Marketplace, go to the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
1. A popup will appear, asking to open Visual Studio Code. Click **Open Visual Studio Code**.
1. In the "Extension: GitHub Copilot" tab in Visual Studio Code, click **Install**.
1. If you have not previously authorized Visual Studio Code in your GitHub account, you will be prompted to sign in to GitHub in Visual Studio Code.

   - If you have previously authorized Visual Studio Code for your account on GitHub, GitHub Copilot will be automatically authorized.
   - If you don't get the prompt to authorize, click the bell icon in the bottom panel of the Visual Studio Code window.

     ![Screenshot of the Visual Studio Code task bar with GitHub Copilot icons. The bell icon is outlined in dark orange.](/assets/images/help/copilot/copilot-activate.png)

1. In your browser, GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize Visual Studio Code**.
1. To confirm the authentication, in Visual Studio Code, in the "Visual Studio Code" dialog box, click **Open**.

## Seeing your first suggestion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have duplication detection enabled for GitHub Copilot, you may receive limited suggestions, or no suggestions, when using the code examples provided. As an alternative, you can start by typing your own code to see suggestions from GitHub Copilot. For more information on duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom#enabling-or-disabling-duplication-detection)."

</div>

GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases. The following samples are in JavaScript, but other languages will work similarly.

1. In Visual Studio Code, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header. GitHub Copilot will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.

   ```javascript copy
   function calculateDaysBetweenDates(begin, end) {
   ```

1. To accept the suggestion, press <kbd>Tab</kbd>.

## Seeing alternative suggestions

For any given input, GitHub Copilot may offer multiple suggestions. You can select which suggestion to use, or reject all suggestions.

1. In Visual Studio Code, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header. GitHub Copilot will show you a suggestion.

   ```javascript copy
   function calculateDaysBetweenDates(begin, end) {
   ```

1. Optionally, you can see alternative suggestions, if any are available.

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. Alternatively, you can hover over the suggestion to see the GitHub Copilot command palette for choosing suggestions.
1. To accept a suggestion, press <kbd>Tab</kbd>. To reject all suggestions, press <kbd>Esc</kbd>.

## Seeing multiple suggestions in a new tab

You may not want any of the initial suggestions GitHub Copilot offers. You can use a keyboard shortcut to prompt GitHub Copilot to show you multiple suggestions in a new tab.

1. In Visual Studio Code, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header. GitHub Copilot will show you a suggestion.

   ```javascript copy
   function calculateDaysBetweenDates(begin, end) {
   ```

1. To open a new tab with multiple additional options, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>.
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

You can describe something you want to do using natural language within a comment, and GitHub Copilot will suggest the code to accomplish your goal.

1. In Visual Studio Code, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following comment. GitHub Copilot will suggest an implementation of the function.

   ```javascript copy
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Using a framework

You can also use GitHub Copilot to generate suggestions for APIs and frameworks. The following example uses GitHub Copilot to create a simple Express server that returns the current time.

1. In Visual Studio Code, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following comment and then press <kbd>Enter</kbd>. GitHub Copilot will suggest an implementation of the Express app.

   ```javascript copy
   // Express server on port 3000
   ```

1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. GitHub Copilot will suggest an implementation for the default handler.

   ```javascript copy
   // Return the current time
   ```

1. To accept each line, press <kbd>Tab</kbd>.

## Enabling or disabling GitHub Copilot

You can enable or disable GitHub Copilot from within Visual Studio Code. The GitHub Copilot status icon in the bottom panel of the Visual Studio Code window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, the background color of the icon will contrast with the color of the status bar.

1. To enable or disable GitHub Copilot, click the status icon in the bottom panel of the Visual Studio Code window.

    ![Screenshot of the bottom panel in Visual Studio Code. The GitHub Copilot icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-visual-studio-code.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from GitHub Copilot globally, click **Disable Globally**.
   - To disable suggestions from GitHub Copilot for the specified language, click **Disable for LANGUAGE**.
   ![Screenshot of option to disable GitHub Copilot globally or for the current language.](/assets/images/help/copilot/disable-copilot-global-or-langugage.png)

</div>

<div class="ghd-tool vimneovim">

## About GitHub Copilot and Vim/Neovim

GitHub Copilot provides autocomplete-style suggestions from an AI pair programmer as you code. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)."

If you use Vim/Neovim, you can view and incorporate suggestions from GitHub Copilot directly within the editor.

## Prerequisites

- To use GitHub Copilot you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

- To use GitHub Copilot in Vim/Neovim you must have Vim version 9.0.0185 / Neovim version 0.6 or above and Node.js version 17 or below installed. For more information, see the [Vim](https://vimhelp.org/) / [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

## Installing the GitHub Copilot extension in Vim/Neovim on macOS

1. GitHub recommends that you install the GitHub Copilot plugin with Vim/Neovim's built-in plugin manager. Alternatively, you can use a plugin manager of your choice to install `github/copilot.vim`.
   - To install GitHub Copilot with Vim's built-in plugin manager, enter the following command in Terminal:

         git clone https://github.com/github/copilot.vim \
            ~/.vim/pack/github/start/copilot.vim

   - To install GitHub Copilot with Neovim's built-in plugin manager, enter the following command in Terminal:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

1. To configure GitHub Copilot, open Vim/Neovim and enter the following command.
  
   ```shell
   :Copilot setup
   ```
  
1. Enable GitHub Copilot in your Vim/Neovim configuration, or with the Vim/Neovim command.
  
   ```shell
   :Copilot enable
   ```

## Installing the GitHub Copilot extension in Vim/Neovim on Windows

1. GitHub recommends that you install the GitHub Copilot plugin with Vim/Neovim's built-in plugin manager. Alternatively, you can use a plugin manager of your choice to install `github/copilot.vim`.
   - To install GitHub Copilot with Vim's built-in plugin manager, enter the following command in Git Bash:

           git clone https://github.com/github/copilot.vim.git \
            $HOME/vimfiles/pack/github/start/copilot.vim

   - To install GitHub Copilot with Neovim's built-in plugin manager, enter the following command in Git Bash:

           git clone https://github.com/github/copilot.vim.git \
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

1. To configure GitHub Copilot, open Vim/Neovim and enter the following command.
  
   ```shell
   :Copilot setup
   ```
  
1. Enable GitHub Copilot in your Vim/Neovim configuration, or with the Vim/Neovim command.
  
   ```shell
   :Copilot enable
   ```

## Installing the GitHub Copilot extension in Vim/Neovim on Linux

1. GitHub recommends that you install the GitHub Copilot plugin with Vim/Neovim's built-in plugin manager. Alternatively, you can use a plugin manager of your choice to install `github/copilot.vim`.
   - To install GitHub Copilot with Vim's built-in plugin manager, enter the following command:

         git clone https://github.com/github/copilot.vim \
            ~/.vim/pack/github/start/copilot.vim

   - To install GitHub Copilot with Neovim's built-in plugin manager, enter the following command:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

1. To configure GitHub Copilot, open Vim/Neovim and enter the following command.
  
   ```shell
   :Copilot setup
   ```
  
1. Enable GitHub Copilot in your Vim/Neovim configuration, or with the Vim/Neovim command.
  
   ```shell
   :Copilot enable
   ```

## Learning to use GitHub Copilot in Vim/Neovim

For guidance on using GitHub Copilot in Vim/Neovim, you can view the plugin documentation. To see the documentation, open Vim/Neovim and run the following command:

```shell
:help copilot
```

</div>

<div class="ghd-tool azure_data_studio">

## About GitHub Copilot and Azure Data Studio

GitHub Copilot provides autocomplete-style suggestions from an AI pair programmer as you code. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)."

If you use Azure Data Studio, you can view and incorporate suggestions from GitHub Copilot directly within the editor. This guide demonstrates how to use GitHub Copilot within Azure Data Studio for macOS, Windows, or Linux.

## Prerequisites

- To use GitHub Copilot you must have an active GitHub Copilot subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."
- To use GitHub Copilot in Azure Data Studio, you must have Azure Data Studio version 1.44.0 or later installed. For more information, see the [Azure Data Studio download page](https://docs.microsoft.com/sql/azure-data-studio/download-azure-data-studio) in the Azure Data Studio documentation.

## Installing the GitHub Copilot extension in Azure Data Studio

To use GitHub Copilot, you must first install the GitHub Copilot extension.

1. In Azure Data Studio, click the **Extensions** icon in the left-side menu.
   ![Screenshot of the Azure Data Studio left-side menu. The "Extensions" icon is highlighted with an orange outline.](/assets/images/help/copilot/azure-data-studio-extensions-icon.png)
1. In the "Extensions" tab, search for **GitHub Copilot** and then click **Install**.
1. If a popup window in Azure Data Studio prompts you to sign in to use GitHub Copilot, click **Sign in to GitHub** and follow the instructions on screen.

   - If you have previously authorized Azure Data Studio for your account on GitHub, GitHub Copilot will be automatically authorized.
   - If you don't get the prompt to authorize, you can view notifications by clicking the bell icon in the bottom panel of the Azure Data Studio window.

1. If you are following the authorization steps, in your browser, GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize Azure Data Studio**.

## Seeing your first suggestion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have duplication detection enabled for GitHub Copilot, you may receive limited suggestions, or no suggestions, when using the code examples provided. As an alternative, you can start by typing your own code to see suggestions from GitHub Copilot. For more information on duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom#enabling-or-disabling-duplication-detection)."

</div>

GitHub Copilot can provide you with inline suggestions as you create SQL databases in Azure Data Studio. For example, if you're writing a query that joins two tables, Copilot may suggest the join condition from columns in the open editor, other files in the workspace, and common syntax patterns.

1. In Azure Data Studio, create a new SQL file.
1. In the SQL file, type the following query. GitHub Copilot will automatically suggest a join condition in grayed text. The exact suggestion may vary.

   ```sql copy
   SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
   FROM [Tag].[Scoreboard]
   INNER JOIN 
   ```

1. To accept the suggestion, press <kbd>Tab</kbd>.

## Seeing alternative suggestions

For some suggestions, GitHub Copilot may provide multiple alternatives. You can select which suggestion you want to use, or reject all suggestions.

1. In Azure Data Studio, create a new SQL file.
1. In the SQL file, type the following query. GitHub Copilot will show you a suggestion.

   ```sql copy
   SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
   FROM [Tag].[Scoreboard]
   INNER JOIN 
   ```

1. Optionally, you can see alternative suggestions, if any are available.

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   | Windows | <kbd>Alt</kbd>+<kbd>[</kbd> | <kbd>Alt</kbd>+<kbd>]</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>[</kbd> | <kbd>Alt</kbd>+<kbd>]</kbd> |
   | macOS | <kbd>Option</kbd>+<kbd>[</kbd> | <kbd>Option</kbd>+<kbd>]</kbd> |

## Generating code suggestions from comments

You can describe something you want to do using natural language within a comment, and GitHub Copilot will suggest the code to accomplish your goal.

1. In Azure Data Studio, create a new SQL file.
1. In the SQL file, type the following query and comment. GitHub Copilot will suggest an implementation of the query.

   ```sql copy
   SELECT TokenColor, COUNT(UserID) AS UserCount
   FROM Tag.Users
   GROUP BY TokenColor
   -- pivot that query on tokencolor for Purple, Blue, Green, Yellow, Orange, Red
   -- and rename the columns to match the colors
   SELECT [Purple], [Blue], [Green], [Yellow], [Orange], [Red]
   ```

## Enabling or disabling GitHub Copilot

You can enable or disable GitHub Copilot from within Azure Data Studio. The GitHub Copilot status icon in the bottom panel of the Azure Data Studio window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, the background color of the icon will contrast with the color of the status bar.

1. To enable or disable GitHub Copilot, click the status icon in the bottom panel of the Azure Data Studio window.

    ![Screenshot of the bottom panel in Azure Data Studio. The GitHub Copilot icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-azure-data-studio.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from GitHub Copilot globally, click **Disable Globally**.
   - To disable suggestions from GitHub Copilot for the specified language, click **Disable for LANGUAGE**.
   ![Screenshot of option to disable GitHub Copilot globally or for the current language.](/assets/images/help/copilot/disable-copilot-global-or-langugage-ads.png)

</div>

## Next steps

You successfully installed GitHub Copilot and received your first suggestion, but that's just the beginning! Here are some helpful resources for taking your next steps with GitHub Copilot.

- [GitHub Copilot](https://copilot.github.com/): See practical examples of how GitHub Copilot can help you work.
- [AUTOTITLE](/copilot/configuring-github-copilot): These guides provide details on how to configure GitHub Copilot to your personal preferences.
- [AUTOTITLE](/billing/managing-billing-for-github-copilot): Learn more about billing for GitHub Copilot.
- [AUTOTITLE](/copilot/troubleshooting-github-copilot): These guides provide information for troubleshooting GitHub Copilot.

## Further reading

- [The GitHub Copilot website](https://copilot.github.com/)
- [About GitHub Copilot for Individuals](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
