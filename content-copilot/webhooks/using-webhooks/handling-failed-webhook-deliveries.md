# Handling failed webhook deliveries

GitHub does not automatically redeliver failed webhook deliveries, but you can handle failed deliveries manually or by writing code.

## About webhook delivery failures

A webhook delivery can fail for multiple reasons. For example, if your server is down or takes longer than 10 seconds to respond, GitHub will record the delivery as a failure.

GitHub does not automatically redeliver failed deliveries.

## Handling delivery failures

You can manually redeliver failed deliveries. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/redelivering-webhooks)."

You can also write a script that checks for failed deliveries and attempts to redeliver any that failed. Your script should run on a schedule and do the following:

1. Use the GitHub REST API to fetch data about any webhook deliveries that were attempted since the last time that your script ran. For more information, see "[AUTOTITLE](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook)," "[AUTOTITLE](/rest/orgs/webhooks#list-deliveries-for-an-organization-webhook)," and "[AUTOTITLE](/rest/apps/webhooks#list-deliveries-for-an-app-webhook)."

   There are no API endpoints to get data about GitHub Marketplace webhooks or GitHub Sponsors webhooks.

1. Look at the fetched data to see if any deliveries failed. The data for a failed delivery will have a `status` value that is not `OK`.
1. Use the GitHub REST API to redeliver any deliveries that failed. For more information, see "[AUTOTITLE](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook)," "[AUTOTITLE](/rest/orgs/webhooks#redeliver-a-delivery-for-an-organization-webhook)," and "[AUTOTITLE](/rest/apps/webhooks#redeliver-a-delivery-for-an-app-webhook)."

For example scripts, see:

- "[AUTOTITLE](/webhooks/using-webhooks/creating-a-script-to-automatically-redeliver-failed-deliveries-for-a-repository-webhook)"
- "[AUTOTITLE](/webhooks/using-webhooks/creating-a-script-to-automatically-redeliver-failed-deliveries-for-an-organization-webhook)"
- "[AUTOTITLE](/webhooks/using-webhooks/creating-a-script-to-automatically-redeliver-failed-deliveries-for-a-github-app-webhook)"

If a webhook delivery fails repeatedly, you should investigate the cause. Each failed delivery will give a reason for failure. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/troubleshooting-webhooks)."
