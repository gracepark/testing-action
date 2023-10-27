# Using the GitHub CLI to forward webhooks for testing

You can use the GitHub CLI to test webhooks in your development environment without the complexity of port forwarding or third-party tools.

## About receiving webhooks with GitHub CLI

When you make changes to your integration code, running the code in a local environment lets you test and iterate quickly without deploying the code. You can use GitHub CLI to forward webhooks to your local environment.

Webhook forwarding in the GitHub CLI only works with repository and organization webhooks. If you want to test other types of webhooks locally, you'll need to do this manually. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/testing-webhooks)."

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: Webhook forwarding is only designed for use during testing and development. It is not supported for use in production environments for handling live webhooks.

</div>

## Receiving webhooks with GitHub CLI

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

To learn more about GitHub CLI, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

</div>

1. To install the GitHub CLI extension to enable webhook forwarding, use the `extension install` subcommand.

   ```shell
   gh extension install cli/gh-webhook
   ```

1. If you want to forward organization webhooks, add the `admin:org_hook` scope to your GitHub CLI login so you have the required permissions.

   ```shell
   gh auth refresh --scopes admin:org_hook
   ```

1. Start your application locally, and take a note of the URL where it's expecting to receive webhooks. This guide assumes that your application is listening for webhook events at `http://localhost:3000/webhook`.

1. To set up webhooks to be delivered to your application, run the `webhook forward` subcommand. Replace `REPOSITORY` with the name of your repository. For example, `monalisa/octocat`. Replace `EVENTS` with a comma-separated list of the events that you want to receive. For example, `issues,pull_request`. Replace `URL` with the local URL where your application expects to receive webhooks. For example, `"http://localhost:3000/webhook"`.  To listen for organization webhooks instead of repository webhooks, replace the `--repo` flag with the `--org` flag. For example `--org="octo-org"`.

   ```shell
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Leave the command running in the background. It will receive all of the specified events for the specified repository and forward them to your webhook handler running at the specified URL.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note**: Only one person can use webhook forwarding at a time for each repository and organization. If you try to set up webhook forwarding and someone else is already working with that organization or repository, you'll receive a `Hook already exists` error.

   </div>
