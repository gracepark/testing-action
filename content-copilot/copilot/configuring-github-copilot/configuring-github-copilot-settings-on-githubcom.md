# Configuring GitHub Copilot settings on GitHub.com

You can configure GitHub Copilot's behavior on GitHub.com, which affects how GitHub Copilot functions in any IDE that you use.

**Who can use this feature**: People with individual GitHub Copilot subscriptions can configure their settings on GitHub.com.
GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

## About GitHub Copilot settings on GitHub.com

In addition to the configuration for the GitHub Copilot plugin in your supported IDE, you can configure settings for GitHub Copilot on GitHub.com. The settings apply wherever you use GitHub Copilot.

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
