# Timeline events

Use the REST API to receive events triggered by timeline activity in issues and pull requests.

## About timeline events

You can use the REST API to view different types of events triggered by timeline activity in issues and pull requests. For more information about the specific events that you can receive, see "[AUTOTITLE](/webhooks-and-events/events/issue-event-types)." To view GitHub activity outside of issues and pull requests, see "[AUTOTITLE](/webhooks-and-events/events/github-event-types)."

You can use timeline events to display information about issues and pull requests or determine who should be notified of issue comments.

Every pull request is an issue, but not every issue is a pull request. For this reason, "shared" actions for both features, like managing assignees, labels, and milestones, are provided within the Issues endpoints.
