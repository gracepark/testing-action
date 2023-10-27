# Troubleshooting firewall settings for GitHub Copilot

Troubleshooting help for firewall-related errors.

GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

If you or your organization employs security measures like a firewall or proxy server, it may be beneficial to include certain domain URLs in an "allowlist" and open specific ports and protocols. Doing so will enhance your installation and usage of GitHub Copilot for an optimal experience.

## URLs to add to an allowlist

Due to GitHub Copilot's interaction with a remote machine learning model and its update checking functionality, it is recommended to include the following domain URLs in the allowlist, marking them as trusted either in the user interface or within your deployment scripts.

| Domain and/or URL                      | Purpose |
| :------------------------------------- | :--------------------------------- |
| `https://github.com/login/*`             | Authentication |
| `https://api.github.com/user`             | User Management |
| `https://api.github.com/copilot_internal/*` | User Management |
| `https://copilot-telemetry.githubusercontent.com/telemetry` | Telemetry |
| `https://default.exp-tas.com/` | Telemetry |
| `https://copilot-proxy.githubusercontent.com/` | API service for Copilot suggestions |
| `https://origin-tracker.githubusercontent.com` | API service for Copilot suggestions |
| `https://*.githubcopilot.com` | API service for Copilot suggestions |

Additional domains and URLs may require allowlisting, depending on your organization's security policies and the editors in use. For more information about specific editors, see "[Further reading](#further-reading)."

## Further reading

- [Network Connections in Visual Studio Code](https://code.visualstudio.com/docs/setup/network)
- [Install and use Visual Studio and Azure Services behind a firewall or proxy server](https://learn.microsoft.com/en-us/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server)
- "[AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)"
