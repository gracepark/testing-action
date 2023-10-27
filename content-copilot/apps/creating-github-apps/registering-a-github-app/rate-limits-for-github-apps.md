# Rate limits for GitHub Apps

Rate limits restrict the rate of traffic to GitHub.com, to help ensure consistent access for all users.

## About rate limits for GitHub Apps

GitHub sets a limit on the number of requests a GitHub App can send to the server within a specific time period. This limit helps to prevent abuse and denial-of-service attacks, and ensures that the system remains available for all users.

GitHub may apply additional secondary rate limits to some actions, to ensure API availability. You can avoid secondary rate limits by following best practices and staying within the rate limit guidelines listed below. For more information about secondary rate limits, see "[AUTOTITLE](/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" and "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#secondary-rate-limits)."

## Determining rate limits for a GitHub App

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

You can confirm your current rate limit status at any time using the REST API. For more information, see "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#checking-your-rate-limit-status)."

</div>

The rate limits for requests made by a GitHub App depend on where the app is installed. If the app is installed on an organization or repository owned by an enterprise on GitHub.com, the rate limit will be higher than for an app that is installed outside an enterprise. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)" and "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)."

Rate limits also depend on whether the GitHub App authenticates with a user access token or with an installation access token. A user access token allows an app to act on behalf of a specific user, after the user authorizes the app. An installation access token allows an app to attribute actions to the app itself. For more information about user and installation access tokens, "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

### Installation access tokens on GitHub.com

GitHub Apps authenticating with an installation access token use the installation's minimum rate limit of 5,000 requests per hour. If an application is installed on an organization with more than 20 users, the application receives another 50 requests per hour for each user. Installations that have more than 20 repositories receive another 50 requests per hour for each repository. The maximum rate limit for an installation is 12,500 requests per hour.

### Installation access tokens on GitHub Enterprise Cloud

GitHub Apps that are installed on an organization within an enterprise on GitHub.com are subject to a limit of 15,000 requests per hour per organization that has installed the app.

### User access tokens on GitHub.com

User access token requests are limited to 5,000 requests per hour and per authenticated user.

### User access tokens on GitHub Enterprise Cloud

User access token requests are subject to a higher limit of 15,000 requests per hour and per authenticated user when the request is from a GitHub App that is owned by a GitHub Enterprise Cloud organization.

## Further reading

- "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#rate-limiting)" in the REST API documentation
- "[AUTOTITLE](/graphql/overview/resource-limitations)" in the GraphQL API documentation
