# Troubleshooting common issues with GitHub Copilot

This guide describes the most common issues with GitHub Copilot and how to resolve them.

For questions about the general use of GitHub Copilot, product impact, human oversight, and privacy, see the comprehensive list of [GitHub Copilot FAQs](https://github.com/features/copilot#:~:text=Frequently%20asked%C2%A0questions).

If GitHub Copilot stops working, check GitHub's [Status page](https://githubstatus.com) for any active incidents.

## Unable to use the GitHub Copilot extension in the IDE

We recommend you follow the quickstart guide for GitHub Copilot while setting up GitHub Copilot on your machine. For more information, see "[AUTOTITLE](/copilot/quickstart)."

The GitHub Copilot extension is frequently updated to fix bugs and add new features. It's important to keep your extension up to date because older clients cannot communicate with the GitHub Copilot servers. Update your GitHub Copilot extension on all the machines you have it installed.

For more information about configuring GitHub Copilot in a supported IDE, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment)."

## Error: "GitHub Copilot could not connect to server. Extension activation failed"

This error indicates that you either do not have a GitHub Copilot subscription, or there was an error connecting to the GitHub API to request a token to use GitHub Copilot.

To request another token from api.github.com, try signing in and out of GitHub Copilot from your IDE. Once you've logged out, GitHub Copilot will prompt you to sign back in.

If you still cannot connect to the server, you can create a discussion in our [discussion forum](https://github.com/orgs/community/discussions/categories/copilot). You can include log files from your IDE to help us troubleshoot the issue. For more information on obtaining log files from your specific IDE, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment)."

## GitHub Copilot not suggesting multiple lines of code

This is a known issue and our team is working towards a fix. For more information, see this comment on a [GitHub Community discussion](https://github.com/orgs/community/discussions/40522#discussioncomment-4701470).

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-and-trade-controls)"
