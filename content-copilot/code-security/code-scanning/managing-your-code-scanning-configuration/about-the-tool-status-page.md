# About the tool status page for code scanning

The tool status page shows useful information about all of your code scanning tools. If code scanning is not working as you'd expect, the tool status page is a good starting point for debugging problems.

Code scanning is available for all public repositories on GitHub.com. Code scanning is also available for private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About the tool status page

The tool status page shows useful information about all of your code scanning tools. If code scanning is not working as you'd expect, the tool status page is a good starting point for debugging problems.

Using the tool status page, you can see how well code scanning tools are working for a repository, when files in the repository were first scanned and most recently scanned, and when scans are scheduled. For integrated tools like CodeQL, you can also see more detailed information, including a percentage of files scanned and specific error messages.

You can also see the rules your code was checked against by each configuration of a code scanning tool and download a summary of the results.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The tool status page shows how tools are working at the repository level, not the organization level. The tool status is only shown for the default branch of the repository for which that tool is configured.

</div>

## Viewing the tool status page for a repository

The code scanning alerts page for each repository includes a tools banner with a summary of the health of your code scanning analysis, and access to the tool status page to explore your setup.

1. On GitHub.com, navigate to the main page of the repository.
1. Under the repository name, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-hidden="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security**. If you cannot see the "Security" tab, select the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-hidden="true"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** dropdown menu, and then click **Security**.
![Screenshot of a repository header showing the tabs. The "Security" tab is highlighted by a dark orange outline.](/assets/images/help/repository/security-tab.png)
1. In the left sidebar, click **Code scanning alerts**.
1. Click **Tool status** in the tools banner.
   ![Screenshot showing how to access the tool status page from a repository. The "Tool status" button is highlighted in a dark orange outline.](/assets/images/help/repository/code-scanning-tool-status-page-access.png)

## Using the tool status page

In the tool status page, you'll see a summary for one tool, highlighted in the sidebar. You can use the sidebar to view summaries for different tools.

![Screenshot showing the tool status page, with the CodeQL tool selected.](/assets/images/help/repository/code-scanning-tool-status-page.png)

For integrated tools such as CodeQL, you can see a percentage total of all the files most recently scanned in your repository, organized by programming language. For information about what files are considered to have been scanned by CodeQL, see "[How CodeQL defines scanned files](#how-codeql-defines-scanned-files)." You can also download detailed language reports in CSV format. For more information, see "[Downloading details of the files analyzed](#downloading-details-of-the-files-analyzed)."

The three possible tool statuses are: all configurations are working, some configurations need attention, and some configurations are not working.

### Accessing detailed information about tools

When you want to see more detailed information for the currently displayed tool, you can select a specific setup under "Setup types".

Under "Configurations" on the left of the screen, you can see information for each analysis run by this setup type, and any relevant error messages. To see detailed information about the most recent analysis run, select a configuration in the sidebar. You can download details of exactly which rules were run in that scan of the code and how many alerts were found by each rule. For more information, see "[Downloading lists of rules used](#downloading-lists-of-rules-used)."

![Screenshot showing detailed information about CodeQL in the tool status page.](/assets/images/help/repository/code-scanning-tool-status-page-detailed.png)

This view will also show error messages. For more information, see "[Debugging using the tool status page](#debugging-using-the-tool-status-page)."

### How CodeQL defines scanned files

A file is reported as scanned by CodeQL if some of the lines of code in that file were processed. If you're using a standard configuration of the CodeQL action, the scanned files shown in the tool status page will include source code files for all languages that CodeQL can analyze. If you use advanced setup, you can optionally define which files for interpreted languages should be scanned using the `paths` and `paths-ignore` configuration properties. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

For compiled languages, the tool status page reports files that were present before running autobuild or any manual build steps. This means that files generated during the build process are not shown in the tool status page. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#about-autobuild-for-codeql)."

The tool status page will calculate the percentage of files that were scanned by CodeQL for each language supported by CodeQL. This percentage respects any files excluded by the `paths` and `paths-ignore` configuration properties.

### Downloading details of the files analyzed

For integrated tools such as CodeQL, you can download detailed reports from the tool status page in CSV format. This will show:

- Which configuration was used to scan each file.
- The file path.
- The programming language of the file.
- Whether the file was successfully extracted.

To download a report, select a tool you're interested in. Then on the top right of the page, click the **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-download" aria-label="Download language CSV report" role="img"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg>** button.

### Downloading lists of rules used

You can download the list of rules that code scanning is checking against, in CSV format. This will show:

- The configuration used.
- The rule source.
- The SARIF identifier.
- How many alerts were found.

To download a report, select a configuration you're interested in. Then click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Configuration menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** on the top right of the page, and select **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-download" aria-hidden="true"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg> Download list of rules used**.

### Removing configurations

You can remove stale, duplicate, or unwanted configurations for the default branch of your repository.

To remove a configuration, select the configuration you want to delete. Then click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="Configuration menu" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>** on the top right of the page, and select **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg> Delete configuration**. Once you have read the warning about alerts, to confirm the deletion, click the **Delete** button.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** You can only use the tool status page to remove configurations for the default branch of a repository. For information about removing configurations from non-default branches, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#removing-stale-configurations-and-alerts-from-a-branch)."

</div>

## Debugging using the tool status page

If you see that there is a problem with your analysis from the code scanning alerts page, you can use the tool status page to identify the problem. For integrated tools, you can see specific error messages in the detailed information section, related to specific code scanning tools. These error messages contain information about why the tool may not be performing as expected, and actions you can take. For more information about how to access this section of the tool status page, see "[Accessing detailed information about tools](#accessing-detailed-information-about-tools)."

For integrated tools such as CodeQL, you can also use file coverage information to improve your analysis. For each language displayed on the tool status page:

- If the language has a high scanned percentage, this shows that code scanning is scanning that language as expected.
- If the language has a low scanned percentage, you may wish to investigate diagnostic output produced by CodeQL for that language: for more information see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/codeql-scanned-fewer-lines-than-expected)."
- If the language has a scanned percentage of zero, you may have source code in your repository written in languages supported by CodeQL but not currently being analyzed with CodeQL. In this case, you may wish to update your setup to start analyzing these additional languages. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** If you have set up CodeQL using advanced setup and then set up default setup on the same repository, the tool status page will only show default setup.

</div>

For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."
