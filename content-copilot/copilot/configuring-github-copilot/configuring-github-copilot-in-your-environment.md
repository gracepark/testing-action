# Configuring GitHub Copilot in your environment

You can enable, configure, or disable GitHub Copilot in a supported IDE.

GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

<div class="ghd-tool jetbrains">

## About GitHub Copilot in JetBrains IDEs

If you use a JetBrains IDE, GitHub Copilot can autocomplete code as you type. After installation, you can enable or disable GitHub Copilot, and you can configure advanced settings within your IDE or on GitHub.com. This article describes how to configure GitHub Copilot in the IntelliJ IDE, but the user interfaces of other JetBrains IDEs may differ.

## Prerequisites

To configure GitHub Copilot in a JetBrains IDE, you must install the GitHub Copilot plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=jetbrains)."

## Using or rebinding keyboard shortcuts for GitHub Copilot

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using GitHub Copilot. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

### Keyboard shortcuts for macOS

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Option (⌥)</kbd>+<kbd>\\</kbd>|
|Open GitHub Copilot (additional suggestions in separate pane)|<kbd>Option (⌥) or Alt</kbd>+<kbd>Return</kbd> |

### Keyboard shortcuts for Windows

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|
|Open GitHub Copilot (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

### Keyboard shortcuts for Linux

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|
|Open GitHub Copilot (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

## Enabling or disabling GitHub Copilot

You can enable or disable GitHub Copilot from within your JetBrains IDE. The GitHub Copilot status icon in the bottom panel of the JetBrains window indicates whether GitHub Copilot is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable GitHub Copilot, click the status icon in the bottom panel on the right of the JetBrains window.

    ![Screenshot of the bottom panel in a JetBrains IDE. The GitHub Copilot status icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-jetbrains.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable GitHub Copilot for the specified language.

    ![Screenshot of the menu to disable GitHub Copilot globally or for the current language in a JetBrains IDE.](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuring advanced settings for GitHub Copilot

You can manage advanced settings for GitHub Copilot in your JetBrains IDE, such as how your IDE displays code completions, and which languages you want to enable or disable for GitHub Copilot.

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Languages & Frameworks**, click **GitHub Copilot**.
1. Edit the settings according to your personal preferences.
   - To adjust the behavior and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   - If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.

## Configuring language settings for GitHub Copilot

You can specify which languages you want to activate or deactivate GitHub Copilot for either in the IDE or by editing your `github-copilot.xml` file. If you make changes to language settings in your IDE, you can individually select and deselect the languages you want to activate or deactivate.

If you make changes to the language settings in your `github-copilot.xml` file, you can specify individual languages, or you can use a wildcard to activate or deactivate GitHub Copilot for all languages. You can also specify exceptions, which will override the wild card setting for the specified languages. For example, you can deactivate GitHub Copilot for all languages, except for Python and YAML. By default, when you install the GitHub Copilot extension, GitHub Copilot is activated for all languages.

### Configuring language settings in the IDE

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Languages & Frameworks**, click **GitHub Copilot**.
1. Under "Languages," select or deselect the checkboxes for the languages you want to activate or deactivate GitHub Copilot for.
1. Click **Apply**, and then click **OK**.
1. Restart your JetBrains IDE for the changes to take effect.

### Editing your `github-copilot.xml` file

To configure language settings in the `github-copilot.xml` file, you must edit the `languageAllowList`. Every line you add to the `languageAllowList` must contain an entry key and a value. The entry key is the name of the language, or (`*`) for a wildcard. The value is either `true` or `false`. If the value is `true`, GitHub Copilot is activated for the specified language. If the value is `false`, GitHub Copilot is deactivated for the specified language.

The file is located in the following directory:

- **macOS**: `~/Library/Application Support/JetBrains/<product><version>/options/github-copilot.xml`
- **Windows**: `%APPDATA%\JetBrains\<product><version>\options\github-copilot.xml`
- **Linux**: `~/.config/JetBrains/<product><version>/options/github-copilot.xml`

For example, if you are using IntelliJ IDEA 2021.1 on macOS, the file is located at `~/Library/Application Support/JetBrains/IdeaIC2021.1/options/github-copilot.xml`.

The `github-copilot.xml` file might not be generated until you make a change to your default language configuration in the IDE's settings. If you cannot locate the file, you should try modifying the default language settings in the IDE. For more information, see "[Configuring language settings in the IDE](#configuring-language-settings-in-the-ide)."

Alternatively, you can create the file manually and save it in the location for your operating system listed above. For more information, see "[Example language configurations](#example-language-configurations)."

1. Open the `github-copilot.xml` file in a text editor.
1. Between the `<map>` tags, add the line or lines for the languages you want to activate or deactivate GitHub Copilot for. For example, to deactivate GitHub Copilot for all languages:

    ```xml copy
    <entry key="*" value="false" />
    ```

1. Save the changes to the `github-copilot.xml` file.
1. Restart your JetBrains IDE for the changes to take effect.

### Example language configurations

The default configuration of the `github-copilot.xml` file, which enables GitHub Copilot for all languages is as follows:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

To deactivate GitHub Copilot for all languages, the wildcard (`*`) value is changed to `false`:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="false" />
      </map>
    </languageAllowList>
  </component>
</application>
```

To specify languages individually, add an entry for each language you want to activate or deactivate GitHub Copilot for. Specific language settings will override the wildcard. For example, to activate GitHub Copilot for Python and YAML, and deactivate GitHub Copilot for all other languages, add the following entries:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="false" />
        <entry key="Python" value="true" />
        <entry key="YAML" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

You can also add a configuration to make the `languageAllowList` readonly in the IDE's settings. This will prevent you from changing the language settings in the IDE. For example:

```xml copy
<application>
  <component name="github-copilot">
    <option name="languageAllowListReadOnly" value="true" />
    <languageAllowList>
      <map>
        <entry key="*" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

## Configuring GitHub Copilot settings on GitHub.com

Before you can start using GitHub Copilot, you will need to set up a free trial or subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)" or "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

Once you have an active GitHub Copilot trial or subscription, you can adjust GitHub Copilot settings for your personal account on GitHub in the [GitHub Copilot settings](https://github.com/settings/copilot). The settings apply anywhere that you use GitHub Copilot. You can configure the suggestions that GitHub Copilot offers and how GitHub uses your telemetry data.

### Enabling or disabling duplication detection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you are a member of an organization on GitHub Enterprise Cloud who has been assigned a GitHub Copilot seat through your organization, you will not be able to configure duplication detection in your personal account settings. Your duplication detection setting will be inherited from your organization or enterprise.

</div>

GitHub Copilot includes a filter which detects code suggestions matching public code on GitHub. You can choose to enable or disable the filter. When the filter is enabled, GitHub Copilot checks code suggestions with their surrounding code of about 150 characters against public code on GitHub. If there is a match or near match, the suggestion will not be shown to you.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
1. To confirm your new settings, click **Save**.

### Enabling or disabling Prompt and Suggestion collection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Copilot for Business does not retain any Prompts or Suggestions.

</div>

You can choose whether your Prompts and Suggestions are collected and retained by GitHub and further processed and shared with Microsoft and by adjusting your user settings. For more information about data that GitHub Copilot may collect depending on your settings, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [GitHub Copilot privacy FAQ](https://github.com/features/copilot/#faq-privacy-copilot-for-business).

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. To allow or prevent GitHub using your data, select or deselect **Allow GitHub to use my code snippets for product improvements**.
1. To confirm your new settings, click **Save**.

## Further reading

- [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

</div>

<div class="ghd-tool visualstudio">

## About GitHub Copilot in Visual Studio

If you use Visual Studio, GitHub Copilot can autocomplete code as you type. After installation, you can enable or disable GitHub Copilot, and you can configure advanced settings within Visual Studio or on GitHub.com.

## Prerequisites

To configure GitHub Copilot in Visual Studio, you must install the GitHub Copilot plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=visualstudio)."

## Using or rebinding keyboard shortcuts for GitHub Copilot

You can use the default keyboard shortcuts in Visual Studio when using GitHub Copilot. Alternatively, you can rebind the shortcuts in the Tools settings for Visual Studio using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by its command name in the Keyboard Shortcuts editor.

### Using default keyboard shortcuts

| Action | Shortcut | Command name |
|:---|:---|:---|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>.</kbd>|Tools.Nextsuggestion|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>,</kbd>|Tools.Previoussuggestion|
|Trigger inline suggestion|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

### Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in Visual Studio when using GitHub Copilot, you can rebind the shortcuts in the Keyboard editor using your preferred keyboard shortcuts for each specific command.

1. In the Visual Studio menu bar, under **Tools**, click **Options**.

   ![Screenshot of the Visual Studio menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, under **Environment**, click **Keyboard**.
1. Under "Show commands containing:", search for the command you want to rebind.

   ![Screenshot of the "Show commands containing" search bar. The string "tools.next" is entered in the search field.](/assets/images/help/copilot/vs-show-commands-containing.png)

1. Under "Press shortcut keys," type the shortcut you want to assign to the command, then click **Assign**.

   ![Screenshot of the fields for entering a new keyboard shortcut assignment.](/assets/images/help/copilot/vs-rebind-shortcut.png)

## Enabling or disabling GitHub Copilot

The GitHub Copilot status icon in the bottom panel of the Visual Studio window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, it will have a diagonal line through it.

1. To enable or disable GitHub Copilot, click the GitHub Copilot icon in the bottom panel of the Visual Studio window.

   ![Screenshot of editor margin in Visual Studio with the GitHub Copilot icon emphasized.](/assets/images/help/copilot/editor-margin-visual-studio.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from GitHub Copilot globally, click **Enable Globally**.
   - To disable suggestions from GitHub Copilot for the specified language, click **Enable for LANGUAGE**.

## Configuring ReSharper for GitHub Copilot

If you use ReSharper, GitHub Copilot may work best when you configure ReSharper to use GitHub Copilot's native IntelliSense. For more information about ReSharper, see the [ReSharper documentation](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. In the Visual Studio menu bar, under **Tools**, click **Options**.
   ![Screenshot of Visual Studio menu bar. In the "Tools" menu, the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)
1. In the "Options" dialog, under **Environment**, click **IntelliSense** and then click **General**.
1. Under "General" select **Visual Studio** and then click **Save**.

## Configuring GitHub Copilot settings on GitHub.com

Before you can start using GitHub Copilot, you will need to set up a free trial or subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)" or "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

Once you have an active GitHub Copilot trial or subscription, you can adjust GitHub Copilot settings for your personal account on GitHub in the [GitHub Copilot settings](https://github.com/settings/copilot). The settings apply anywhere that you use GitHub Copilot. You can configure the suggestions that GitHub Copilot offers and how GitHub uses your telemetry data.

### Enabling or disabling duplication detection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you are a member of an organization on GitHub Enterprise Cloud who has been assigned a GitHub Copilot seat through your organization, you will not be able to configure duplication detection in your personal account settings. Your duplication detection setting will be inherited from your organization or enterprise.

</div>

GitHub Copilot includes a filter which detects code suggestions matching public code on GitHub. You can choose to enable or disable the filter. When the filter is enabled, GitHub Copilot checks code suggestions with their surrounding code of about 150 characters against public code on GitHub. If there is a match or near match, the suggestion will not be shown to you.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
1. To confirm your new settings, click **Save**.

### Enabling or disabling Prompt and Suggestion collection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Copilot for Business does not retain any Prompts or Suggestions.

</div>

You can choose whether your Prompts and Suggestions are collected and retained by GitHub and further processed and shared with Microsoft and by adjusting your user settings. For more information about data that GitHub Copilot may collect depending on your settings, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [GitHub Copilot privacy FAQ](https://github.com/features/copilot/#faq-privacy-copilot-for-business).

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. To allow or prevent GitHub using your data, select or deselect **Allow GitHub to use my code snippets for product improvements**.
1. To confirm your new settings, click **Save**.

## Further reading

- [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

</div>

<div class="ghd-tool vscode">

## About GitHub Copilot in Visual Studio Code

If you use Visual Studio Code, GitHub Copilot can autocomplete code as you type. After installation, you can enable or disable GitHub Copilot, and you can configure advanced settings within Visual Studio Code or on GitHub.com.

## Prerequisites

To configure GitHub Copilot in Visual Studio Code, you must install the GitHub Copilot plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=vscode)."

## Keyboard shortcuts for GitHub Copilot

You can use the default keyboard shortcuts in Visual Studio Code when using GitHub Copilot. Alternatively, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. For more information, see "[Rebinding keyboard shortcuts](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment?tool=vscode#rebinding-keyboard-shortcuts-1)."

You can search for each keyboard shortcut by command name in the Keyboard Shortcuts editor.

### Keyboard shortcuts for macOS

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>\\</kbd><br> |editor.action.inlineSuggest.trigger|
|Open GitHub Copilot (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Toggle GitHub Copilot on/off|_No default shortcut_|github.copilot.toggleCopilot|

### Keyboard shortcuts for Windows

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|editor.action.inlineSuggest.trigger|
|Open GitHub Copilot (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle GitHub Copilot on/off|_No default shortcut_|github.copilot.toggleCopilot|

### Keyboard shortcuts for Linux

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|editor.action.inlineSuggest.trigger|
|Open GitHub Copilot (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle GitHub Copilot on/off|_No default shortcut_|github.copilot.toggleCopilot|

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in Visual Studio Code when using GitHub Copilot, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command.

### Rebinding keyboard shortcuts for macOS

1. In the menu bar, click **Code**, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of the menu bar in Visual Studio Code, with the "Code" menu expanded. In the "Preferences" sub-menu, the "Keyboard Shortcuts" option is highlighted in blue.](/assets/images/help/copilot/vsc-keyboard-shortcuts-mac.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of the "Keyboard Shortcuts" editor. Next to a command labeled "Accept Inline Suggestion," a pencil icon is highlighted with an orange outline.](/assets/images/help/copilot/vsc-edit-shortcuts-mac.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Rebinding keyboard shortcuts for Windows

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of the menu bar in Visual Studio Code, with the "File" menu expanded. In the "Preferences" sub-menu, the "Keyboard Shortcuts" option is highlighted with an orange outline.](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of "Keyboard Shortcuts" editor. Next to a command labeled "Accept Inline Suggestion," a pencil icon is highlighted with an orange outline.](/assets/images/help/copilot/vsc-edit-shortcuts.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Rebinding keyboard shortcuts for Linux

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of the menu bar in Visual Studio Code, with the "File" menu expanded. In the "Preferences" sub-menu, the "Keyboard Shortcuts" option is highlighted with an orange outline.](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of "Keyboard Shortcuts" editor. Next to a command labeled "Accept Inline Suggestion," a pencil icon is highlighted with an orange outline.](/assets/images/help/copilot/vsc-edit-shortcuts.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

## Enabling or disabling GitHub Copilot

You can enable or disable GitHub Copilot from within Visual Studio Code. The GitHub Copilot status icon in the bottom panel of the Visual Studio Code window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, the background color of the icon will contrast with the color of the status bar.

1. To enable or disable GitHub Copilot, click the status icon in the bottom panel of the Visual Studio Code window.

    ![Screenshot of the bottom panel in Visual Studio Code. The GitHub Copilot icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-visual-studio-code.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from GitHub Copilot globally, click **Disable Globally**.
   - To disable suggestions from GitHub Copilot for the specified language, click **Disable for LANGUAGE**.
   ![Screenshot of option to disable GitHub Copilot globally or for the current language.](/assets/images/help/copilot/disable-copilot-global-or-langugage.png)

## Enabling or disabling inline suggestions

You can choose to enable or disable inline suggestions for GitHub Copilot in Visual Studio Code.

1. In the **File** menu, navigate to **Preferences** and click **Settings**.

    ![Screenshot of Visual Studio Code settings.](/assets/images/help/copilot/vsc-settings.png)
1. In the left-side panel of the settings tab, click **Extensions** and then select **Copilot**.
1. Under "Inline Suggest:Enable," select or deselect the checkbox to enable or disable inline suggestions.

## Enabling or disabling GitHub Copilot for specific languages

You can specify which languages you want to enable or disable GitHub Copilot for.

1. From the Visual Studio Code, click the **Extensions** tab, then navigate to the **Copilot** section. For more information, see "[Enabling and disabling inline suggestions](#enabling-and-disabling-inline-suggestions)."
1. Under "Enable or disable Copilot for specified languages," click **Edit in settings.json**.
1. In the _settings.json_ file, add or remove the languages you want to enable or disable GitHub Copilot for. For example, to enable Python in GitHub Copilot, add `"python": true` to the list, ensuring there is a trailing comma after all but the last list item.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

## Revoking GitHub Copilot authorization

Visual Studio Code retains authorization to use GitHub Copilot through a particular GitHub account. If you want to prevent your GitHub account being used for GitHub Copilot on a device you no longer have access to, you can revoke authorization and then go through the authorization process again. The device you previously used will not have the new authorization.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Integrations" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-apps" aria-hidden="true"><path d="M1.5 3.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 5.75 7.5h-2.5A1.75 1.75 0 0 1 1.5 5.75Zm7 0c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 8.5 5.75Zm-7 7c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75Zm7 0c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75ZM3.25 3a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5A.25.25 0 0 0 6 5.75v-2.5A.25.25 0 0 0 5.75 3Zm7 0a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm-7 7a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm7 0a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Z"></path></svg> Applications**.
1. Click the **Authorized OAuth Apps** tab.

   ![Screenshot of the "Applications" page. A tab, labeled "Authorized OAuth Apps," is highlighted with an orange outline.](/assets/images/help/settings/settings-authorized-oauth-apps-tab.png)
1. Click the **...** next to **GitHub for VS Code** and click **Revoke**.
1. Click the **Authorized GitHub Apps** tab.
1. If the **GitHub Copilot** plugin is listed, click **Revoke**.

After revoking authorization, Visual Studio Code will be able to continue using GitHub Copilot in a current session for a maximum of 30 minutes. After that time, you will need to reauthorize GitHub Copilot for use in Visual Studio Code again.

## Re-authorizing GitHub Copilot

After you have revoked authorization, if you want to continue using GitHub Copilot, you will need to complete the reauthorization process.

1. In the bottom left corner of Visual Studio Code, click the **Accounts** icon, hover over your username, and click **Sign out**.

   ![Screenshot of the menu in Visual Studio Code. The "Sign out" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-out.png)

1. In the "Visual Studio Code" pop-up, click **Sign Out**.

1. In the bottom left corner of Visual Studio Code, click the **Accounts** icon, hover over your username, and click **Sign in with GitHub to use GitHub Copilot**.

   ![Screenshot of the accounts menu in Visual Studio Code. The "Sign in with GitHub to use GitHub Copilot (1)" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-in.png)

1. In your browser, GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Continue**.
1. In the "Open Visual Studio Code?" pop-up, click **Open Visual Studio Code**.

## Configuring GitHub Copilot settings on GitHub.com

Before you can start using GitHub Copilot, you will need to set up a free trial or subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)" or "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

Once you have an active GitHub Copilot trial or subscription, you can adjust GitHub Copilot settings for your personal account on GitHub in the [GitHub Copilot settings](https://github.com/settings/copilot). The settings apply anywhere that you use GitHub Copilot. You can configure the suggestions that GitHub Copilot offers and how GitHub uses your telemetry data.

### Enabling or disabling duplication detection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you are a member of an organization on GitHub Enterprise Cloud who has been assigned a GitHub Copilot seat through your organization, you will not be able to configure duplication detection in your personal account settings. Your duplication detection setting will be inherited from your organization or enterprise.

</div>

GitHub Copilot includes a filter which detects code suggestions matching public code on GitHub. You can choose to enable or disable the filter. When the filter is enabled, GitHub Copilot checks code suggestions with their surrounding code of about 150 characters against public code on GitHub. If there is a match or near match, the suggestion will not be shown to you.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
1. To confirm your new settings, click **Save**.

### Enabling or disabling Prompt and Suggestion collection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Copilot for Business does not retain any Prompts or Suggestions.

</div>

You can choose whether your Prompts and Suggestions are collected and retained by GitHub and further processed and shared with Microsoft and by adjusting your user settings. For more information about data that GitHub Copilot may collect depending on your settings, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [GitHub Copilot privacy FAQ](https://github.com/features/copilot/#faq-privacy-copilot-for-business).

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. To allow or prevent GitHub using your data, select or deselect **Allow GitHub to use my code snippets for product improvements**.
1. To confirm your new settings, click **Save**.

## Further reading

- [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

</div>

<div class="ghd-tool vimneovim">

## Configuring GitHub Copilot in Vim/Neovim

For guidance on configuring GitHub Copilot in Vim/Neovim, invoke the GitHub Copilot documentation in Vim/Neovim by running the following command:

    :help copilot

## Rebinding keyboard shortcuts

You can rebind the keyboard shortcuts in Vim/Neovim when using GitHub Copilot to use your preferred keyboard shortcuts for each specific command. For more information, see the [Map](https://neovim.io/doc/user/map.html) article in the Neovim documentation.

## Configuring GitHub Copilot settings on GitHub.com

Before you can start using GitHub Copilot, you will need to set up a free trial or subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)" or "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

Once you have an active GitHub Copilot trial or subscription, you can adjust GitHub Copilot settings for your personal account on GitHub in the [GitHub Copilot settings](https://github.com/settings/copilot). The settings apply anywhere that you use GitHub Copilot. You can configure the suggestions that GitHub Copilot offers and how GitHub uses your telemetry data.

### Enabling or disabling duplication detection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you are a member of an organization on GitHub Enterprise Cloud who has been assigned a GitHub Copilot seat through your organization, you will not be able to configure duplication detection in your personal account settings. Your duplication detection setting will be inherited from your organization or enterprise.

</div>

GitHub Copilot includes a filter which detects code suggestions matching public code on GitHub. You can choose to enable or disable the filter. When the filter is enabled, GitHub Copilot checks code suggestions with their surrounding code of about 150 characters against public code on GitHub. If there is a match or near match, the suggestion will not be shown to you.

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
1. To confirm your new settings, click **Save**.

### Enabling or disabling Prompt and Suggestion collection

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** Copilot for Business does not retain any Prompts or Suggestions.

</div>

You can choose whether your Prompts and Suggestions are collected and retained by GitHub and further processed and shared with Microsoft and by adjusting your user settings. For more information about data that GitHub Copilot may collect depending on your settings, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [GitHub Copilot privacy FAQ](https://github.com/features/copilot/#faq-privacy-copilot-for-business).

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the left sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. To allow or prevent GitHub using your data, select or deselect **Allow GitHub to use my code snippets for product improvements**.
1. To confirm your new settings, click **Save**.

## Further reading

- [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

</div>
