# Quickstart for GitHub Copilot

GitHub Copilot can help you work, by offering inline suggestions as you code.

GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

## Introduction

GitHub Copilot is an AI pair programmer. You can use GitHub Copilot to get suggestions for whole lines or entire functions right inside your editor.

This guide will show you how to set up a GitHub Copilot subscription for your personal or organization account, install the GitHub Copilot extension in Visual Studio Code, and get your first suggestion. For more information on GitHub Copilot, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)." For more in-depth information on how to use GitHub Copilot in a variety of environments, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot)."

## Signing up for GitHub Copilot for your personal account

Before you can start using GitHub Copilot, you will need to set up a free trial or subscription for your personal account.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you were part of the free GitHub Copilot technical preview that was run between July 2021 and June 2022, you are not eligible for a 30-day trial.

</div>

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-hidden="true"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> GitHub Copilot**.
1. On the GitHub Copilot settings page, click **Enable GitHub Copilot**.
1. Choose whether you want to pay monthly or yearly, and click **Continue to get access to Copilot**.

   - If your personal account meets the criteria for a free GitHub Copilot subscription instead of a trial or paid subscription, you will automatically be taken to step 6.

1. Follow the steps to confirm your payment details, then click **Submit**.
1. Select your preferences, then click **Save and get started**.

   You can change these preferences at a later time by returning to your GitHub Copilot settings. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment?tool=vscode#configuring-github-copilot-settings-on-githubcom)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** As a member of an organization owned by a GitHub Enterprise Cloud account with a GitHub Copilot subscription, you must be assigned a GitHub Copilot seat by your organization before you can use GitHub Copilot.
</div>

## Signing up for GitHub Copilot for your organization account

Before you can start using GitHub Copilot in your organization account, you will need to set up a subscription.

1. Go to the [GitHub Copilot for Business sign up page](https://github.com/github-copilot/business_signup/choose_business_type).
1. Select an organization for which you want to purchase GitHub Copilot and click **Continue**.
1. Follow the steps to confirm your payment details, then click **Save**.

   If you don't have a payment method on file, you'll be prompted to add one.

1. In the "Public code suggestions" dropdown, select **Allow** or **Block** to allow or block suggestions that match public code, and click **Save and continue**. You can change these preferences later by returning to your GitHub Copilot settings.
1. Either grant access to GitHub Copilot for all current and future users in your organization, or for specific users in your organization.
   - If you selected **Allow for all members**, click **Confirm** in the "Confirm seat assignment" dialog to confirm that you want to enable GitHub Copilot for all current and future users in your organization.
   - If you selected **Selected teams/users**, you can choose **Add people** or **Add team**.
     - If you selected **Add people**, in the "Enable GitHub Copilot access for selected members of ORGANIZATION" dialog, you can either search for individual members, or you can add members in bulk by uploading a CSV file.
     - If you selected **Add team**, in the "Enable GitHub Copilot access for selected teams of ORGANIZATION" dialog, start typing the team name in the search bar, select the team you want to add and click **Add team(s) to access list**.
1. To finish setting up your GitHub Copilot for Business subscription, click **Save and finish**. Organization members will receive an email with instructions on how to start using GitHub Copilot.

## Installing the GitHub Copilot extension for Visual Studio Code

To use GitHub Copilot, you must first install the Visual Studio Code extension.

1. In the Visual Studio Code Marketplace, go to the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
1. A popup will appear, asking to open Visual Studio Code. Click **Open Visual Studio Code**.
1. In the "Extension: GitHub Copilot" tab in Visual Studio Code, click **Install**.
1. If you have not previously authorized Visual Studio Code in your GitHub account, you will be prompted to sign in to GitHub in Visual Studio Code.

   - If you have previously authorized Visual Studio Code in your GitHub account, GitHub Copilot will be automatically authorized.

1. In your browser, GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize Visual Studio Code**.
1. In Visual Studio Code, in the "Visual Studio Code" dialogue box, to confirm the authentication, click **Open**.

## Getting your first suggestion

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have duplication detection enabled for GitHub Copilot, you may receive limited suggestions, or no suggestions, when using the code examples provided. As an alternative, you can start by typing your own code to see suggestions from GitHub Copilot. For more information on duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom#enabling-or-disabling-duplication-detection)."

</div>

GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases. The following samples are in JavaScript, but other languages will work similarly.

1. Open Visual Studio Code.
1. In Visual Studio Code, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header.

    ```javascript copy
    function calculateDaysBetweenDates(begin, end) {
    ```
   GitHub Copilot will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. To accept the suggestion, press <kbd>Tab</kbd>.

## Next steps

You successfully installed GitHub Copilot and received your first suggestion, but that's just the beginning! Here are some helpful resources for taking your next steps with GitHub Copilot.

- [AUTOTITLE](/copilot/getting-started-with-github-copilot): You've learned how to get your first suggestion in Visual Studio Code. These guides show you how to set up and navigate the various functions of GitHub Copilot across all of the supported environments.
- [GitHub Copilot](https://copilot.github.com/): See practical examples of how GitHub Copilot can help you work.
- [AUTOTITLE](/copilot/configuring-github-copilot): These guides provide details on how to configure GitHub Copilot to your personal preferences.

## Further reading

- [AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)
- [AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-business)
