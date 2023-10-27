# Troubleshooting port forwarding for GitHub Codespaces

Troubleshooting steps for common port forwarding issues.

When an application running inside a codespace outputs a port to the console, GitHub Codespaces  detects the localhost URL pattern and automatically forwards the port. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)."

If a port is not automatically forwarded, you can forward it manually. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace#forwarding-a-port)."

If port forwarding is set up, check the following:

- Use the link in the notification "toast" message, that pops up in the bottom right corner of VS Code, or click the URL in Terminal, to open the forwarded port. Typing in `localhost:8000` (as an example) to your local machine will not work if you're connected to the codespace via the browser.
- Make sure to check that your application is still running from within your codespace. If your codespace has stopped after a period of inactivity, you'll need to ensure to restart your application once the codespace has restarted.

Typically, you can make a forwarded port accessible publicly, or within the organization that owns a repository. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)." If either, or both, of the options for public or organization visibility are not available, this indicates that an organization-level policy has been configured. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)."

The domain GitHub uses for port forwarding may change from time to time. If you reference a forwarded port in your code, for example in a test, we recommend that you use an environment variable instead of hardcoding the URL. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/default-environment-variables-for-your-codespace#list-of-default-environment-variables)."
