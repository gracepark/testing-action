# About the user authorization callback URL

You can specify a URL that users will be redirected to after they authorize a GitHub App.

When you register a GitHub App, you can specify a callback URL. When you use the web application flow to generate a user access token in order to act on behalf of a user, users will be redirected to the callback URL after they authorize the GitHub App.

You can specify up to 10 callback URLs. If you specify multiple callback URLs, you can use the `redirect_uri` parameter when you prompt the user to authorize your GitHub App, to indicate which callback URL the user should be redirected to. If you do not specify `redirect_uri`, the first callback URL will be used. For more information about using the `redirect_uri` parameter, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)".

The callback URL is different from the setup URL. Users are redirected to the setup URL after they install a GitHub App. Users are redirected to the callback URL when they authorize a GitHub App via the web application flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-setup-url)."

For more information about generating user access tokens, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)". For more information about registering a GitHub App, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." For more information about modifying a GitHub App registration, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."
