# GitHub Command Palette

Use the command palette in GitHub to navigate, search, and run commands directly from your keyboard.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The GitHub Command Palette is currently in public beta and is subject to change.

</div>

## About the GitHub Command Palette

You can navigate, search, and run commands on GitHub with the GitHub Command Palette. The command palette is an on-demand way to show suggestions based on your current context and resources you've used recently. You can open the command palette with a keyboard shortcut from anywhere on GitHub, which saves you time and keeps your hands on the keyboard.

### Fast navigation

When you open the command palette, the suggestions are optimized to give you easy access from anywhere in a repository, personal account, or organization to top-level pages like the Issues page. If the location you want isn't listed, start entering the name or number for the location to refine the suggestions.

![Screenshot of the command palette. The "Issues" and "Pull requests" pages for the current repository are suggested.](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Easy access to commands

The ability to run commands directly from your keyboard, without navigating through a series of menus, may change the way you use GitHub. For example, you can switch themes with a few keystrokes, making it easy to toggle between themes as your needs change.

![Screenshot of the command palette. "switch theme to dark" is in the command palette input, and results for changing your theme are displayed.](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Opening the GitHub Command Palette

Open the command palette using one of the following default keyboard shortcuts:
- Windows and Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Command</kbd>+<kbd>K</kbd> or <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

You can customize the keyboard shortcuts you use to open the command palette in the [Accessibility section](https://github.com/settings/accessibility) of your user settings. For more information, see "[Customizing your GitHub Command Palette keyboard shortcuts](#customizing-your-github-command-palette-keyboard-shortcuts)."

When you open the command palette, it shows your location at the top left and uses it as the scope for suggestions (for example, the `octo-org` organization).

![Screenshot of the command palette. "octo-org" is highlighted with an orange outline.](/assets/images/help/command-palette/command-palette-launch.png)

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:**
- If you are editing Markdown text, open the command palette with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac).

</div>

### Customizing your GitHub Command Palette keyboard shortcuts

The default keyboard shortcuts used to open the command palette may conflict with your default OS and browser keyboard shortcuts. You have the option to customize your keyboard shortcuts in the [Accessibility section](https://github.com/settings/accessibility) of your account settings. In the command palette settings, you can customize the keyboard shortcuts for opening the command palette in both search mode and command mode.

## Navigating with the GitHub Command Palette

You can use the command palette to navigate to any page that you have access to on GitHub.

1. Use <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) or <kbd>Command</kbd>+<kbd>K</kbd> (Mac) to open the command palette with a scope determined by your current location in the UI.

1. Start typing the path you want to navigate to. The suggestions in the command palette change to match your text.

1. Optionally, narrow, expand, or completely change the scope for suggestions by editing the path in the command palette's text field.

   - To narrow the scope within a user or organization account, highlight a repository then use <kbd>Tab</kbd> to add it to the scope.
   - To expand the scope, highlight and remove an item in the scope using the <kbd>Backspace</kbd> or <kbd>delete</kbd> key.
   - To clear the scope and text box, click **Clear** or use <kbd>Ctrl</kbd>+<kbd>Backspace</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Delete</kbd> (Mac).

   You can also use keystrokes to narrow your search. For more information, see "[Keystroke functions](#keystroke-functions)."

1. Finish entering the path, or use the arrow keys to highlight the path you want from the list of suggestions.

1. Use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Searching with the GitHub Command Palette

You can use the command palette to search for anything on GitHub.com.

1. Use <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) or <kbd>Command</kbd>+<kbd>K</kbd> (Mac) to open the command palette with a scope determined by your current location in the UI.

1. Optionally, narrow, expand, or completely change the scope for suggestions by editing the path in the command palette's text field.

   - To narrow the scope within a user or organization account, highlight a repository then use <kbd>Tab</kbd> to add it to the scope.
   - To expand the scope, highlight and remove an item in the scope using the <kbd>Backspace</kbd> or <kbd>delete</kbd> key.
   - To clear the scope and text box, click **Clear** or use <kbd>Ctrl</kbd>+<kbd>Backspace</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Delete</kbd> (Mac).

1. Optionally, use keystrokes to find specific types of resource:

   - <kbd>#</kbd> Search for issues, pull requests, discussions, and projects
   - <kbd>!</kbd> Search for projects
   - <kbd>@</kbd> Search for users, organizations, and repositories
   - <kbd>/</kbd> Search for files within a repository scope

1. Begin entering your search terms. The command palette will offer you a range of suggested searches based on your search scope.

   <div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   You can also use the full syntax of GitHub's integrated search within the command palette. For more information, see "[AUTOTITLE](/search-github)."

   </div>

1. Use the arrow keys to highlight the search result you want and use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Running commands from the GitHub Command Palette

You can use the GitHub Command Palette to run commands. For example, you can create a new repository or issue, or change your theme. When you run a command, the location for its action is determined by either the underlying page or the scope shown in the command palette.

- Pull request and issue commands always run on the underlying page.
- Higher-level commands, for example, repository commands, run in the scope shown in the command palette.

For a full list of supported commands, see "[GitHub Command Palette reference](#github-command-palette-reference)."

1. The default keyboard shortcuts to open the command palette in command mode are <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac). If you already have the command palette open, press <kbd>></kbd> to switch to command mode. GitHub suggests commands based on your location.

1. Optionally, narrow, expand, or completely change the scope for suggestions by editing the path in the command palette's text field.

   - To narrow the scope within a user or organization account, highlight a repository then use <kbd>Tab</kbd> to add it to the scope.
   - To expand the scope, highlight and remove an item in the scope using the <kbd>Backspace</kbd> or <kbd>delete</kbd> key.
   - To clear the scope and text box, click **Clear** or use <kbd>Ctrl</kbd>+<kbd>Backspace</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Delete</kbd> (Mac).

1. If the command you want is not displayed, check your scope then start entering the command name in the text box.

1. Use the arrow keys to highlight the command you want and use <kbd>Enter</kbd> to run it.

## Closing the command palette

When the command palette is active, you can use one of the following keyboard shortcuts to close the command palette:

- Search and navigation mode: <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows and Linux)  <kbd>Command</kbd>+<kbd>K</kbd> (Mac)
- Command mode: <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows and Linux)  <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac)

If you have customized the command palette keyboard shortcuts in the Accessibility settings, your customized keyboard shortcuts will be used for both opening and closing the command palette.

## GitHub Command Palette reference

### Keystroke functions

These keystrokes are available when the command palette is in navigation and search modes, that is, they are not available in command mode.

| Keystroke | Function |
| :- | :- |
|<kbd>></kbd>| Enter command mode. For more information, see "[Running commands from the GitHub Command Palette](#running-commands-from-the-github-command-palette)." |
|<kbd>#</kbd>| Search for issues, pull requests, discussions, and projects. For more information, see "[Searching with the GitHub Command Palette](#searching-with-the-github-command-palette)."|
|<kbd>@</kbd>| Search for users, organizations, and repositories. For more information, see "[Searching with the GitHub Command Palette](#searching-with-the-github-command-palette)."|
|<kbd>/</kbd>| Search for files within a repository scope or repositories within an organization scope. For more information, see "[Searching with the GitHub Command Palette](#searching-with-the-github-command-palette)." |
|<kbd>!</kbd>| Search just for projects. For more information, see "[Searching with the GitHub Command Palette](#searching-with-the-github-command-palette)."|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Command</kbd>+<kbd>C</kbd>| Copy the search or navigation URL for the highlighted result to the clipboard.|
|<kbd>Enter</kbd>| Jump to the highlighted result or run the highlighted command.|
|<kbd>Ctrl</kbd>+<kbd>Enter</kbd> or <kbd>Command</kbd>+<kbd>Enter</kbd>| Open the highlighted search or navigation result in a new browser tab.|
|<kbd>?</kbd>| Display help within the command palette.|

### Global commands

These commands are available from all scopes.

| Command | Behavior|
| :- | :- |
|`Import repository`|Create a new repository by importing a project from another version control system. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer)."  |
|`New gist`|Open a new gist. For more information, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)." |
|`New organization`|Create a new organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)." |
|`New project`|Create a new project board. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)."  |
|`New repository`|Create a new repository from scratch. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)." |
|`Switch theme to <theme name>`|Change directly to a different theme for the UI. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)." |

### Organization commands

These commands are available only within the scope of an organization.

| Command | Behavior|
| :- | :- |
| `New team`| Create a new team in the current organization. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."

### Repository commands

Most of these commands are available only on the home page of the repository. If a command is also available on other pages, this is noted in the behavior column.

| Command | Behavior|
| :- | :- |
|`Clone repository: <URL type>`|Copy the URL needed to clone the repository using GitHub CLI, HTTPS, or SSH to the clipboard. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."|
|`New discussion`|Create a new discussion in the repository. For more information, see "[AUTOTITLE](/discussions/quickstart#creating-a-new-discussion)."|
|`New file`|Create a new file from any page in the repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."
|`New issue`|Open a new issue from any page in the repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."|
|`Open in github.dev editor`|Open the current repository in the github.dev editor. For more information, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."|

### File commands

These commands are available only when you open the command palette from a file in a repository.

| Command | Behavior|
| :- | :- |
|`Copy permalink`|Create a link to the file that includes the current commit SHA and copy the link to the clipboard. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)."
|`Open in github.dev editor`|Open the currently displayed file in github.dev editor. For more information, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."|

### Discussion commands

These commands are available only when you open the command palette from a discussion. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Delete discussion...`|Permanently delete the discussion. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)."
|`Edit discussion body`|Open the main body of the discussion ready for editing.
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for additions to the discussion. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Transfer discussion...`|Move the discussion to a different repository. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)."

### Issue commands

These commands are available only when you open the command palette from an issue. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Close`/`reopen issue`|Close or reopen the current issue. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."|
|`Convert issue to discussion...`|Convert the current issue into a discussion. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."
|`Delete issue...`|Delete the current issue. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/deleting-an-issue)."|
|`Edit issue body`|Open the main body of the issue ready for editing.
|`Edit issue title`|Open the title of the issue ready for editing.
|`Lock issue`|Limit new comments to users with write access to the repository. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/locking-conversations)."
|`Pin`/`unpin issue`|Change whether or not the issue is shown in the pinned issues section for the repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)."|
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for changes to this issue. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Transfer issue...`|Transfer the issue to another repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)."|

### Pull request commands

These commands are available only when you open the command palette from a pull request. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Close`/`reopen pull request`|Close or reopen the current pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."|
|`Convert to draft`/`Mark pull request as ready for review`|Change the state of the pull request to show it as ready, or not ready, for review. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."|
|`Copy current branch name`| Add the name of the head branch for the pull request to the clipboard.
|`Edit pull request body`|Open the main body of the pull request ready for editing.
|`Edit pull request title`|Open the title of the pull request ready for editing.
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for changes to this pull request. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Update current branch`|Update the head branch of the pull request with changes from the base branch. This is available only for pull requests that target the default branch of the repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)."|
