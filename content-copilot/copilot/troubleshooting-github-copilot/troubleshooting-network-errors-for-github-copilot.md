# Troubleshooting network errors for GitHub Copilot

Resolve common errors related to proxies and custom certificates.

GitHub Copilot can be managed through personal accounts with GitHub Copilot for Individuals or through organization accounts with GitHub Copilot for Business.<br><br>

GitHub Copilot is free to use for verified students, teachers, and maintainers of popular open source projects. If you are not a student, teacher, or maintainer of a popular open source project, you can try GitHub Copilot for free with a one-time 30-day trial. After the free trial, you will need a paid subscription for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

If you're working on company equipment and connecting to a corporate network, you may be connecting to the Internet via a VPN or an HTTP proxy server. In some cases, these types of network setups may prevent GitHub Copilot from connecting to GitHub's server. For more information about the options for setting up proxies with GitHub Copilot, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot)."

This article provides guidance for common issues related to HTTP proxies and custom certificates. If you use a firewall, this may also interfere with GitHub Copilot's connection. For more information, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot)."

## Diagnosing network issues

If you're troubleshooting network issues, it may help to make `curl` requests to test your connection. If you add the `--verbose` flag, these requests give you more information to diagnose the issue, or to share with your company's IT department or GitHub Support. You can contact GitHub Support through the [GitHub Support portal](https://support.github.com/).

To check if you can access at least some of GitHub's endpoints from your environment, you can run the following command from the command line.

```shell copy
curl --verbose https://copilot-proxy.githubusercontent.com/_ping
```

If you're able to connect, you should receive an HTTP 200 response.

If you know you are connecting via an HTTP proxy, you can check if the request succeeds when made via the proxy. In the following example, replace `YOUR-PROXY-URL:PORT` with the details for your proxy.

```shell copy
curl --verbose -x http://YOUR-PROXY-URL:PORT -i -L https://copilot-proxy.githubusercontent.com/_ping
```

If you receive an error related to "revocation for the certificate," you can try the request again with the `--insecure` flag. If the request only succeeds when the `--insecure` flag is added, this may indicate that GitHub Copilot will only connect successfully if you ignore certificate errors. For more information, see "[Troubleshooting certificate-related errors](#troubleshooting-certificate-related-errors)."

If you're unable to connect and the `curl` requests don't help to identify the error, it may help to collect detailed diagnostic logs in your editor. If you're working with your company's IT department or [GitHub Support](https://support.github.com), sharing these diagnostics may help to resolve the error. Enabling debug logging in your editor will help you to share more specific information. For more information, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment)."

## Troubleshooting proxy errors

If there is a problem with your proxy setup, you may see the following error: `GitHub Copilot could not connect to server. Extension activation failed: "read ETIMEDOUT" or "read ECONNRESET"`. This error can be caused by a range of network issues.

If you know you are connecting via a proxy, make sure the proxy is configured correctly in your environment. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#configuring-proxy-settings-for-github-copilot)."

GitHub Copilot uses custom code to connect to proxies. This means a proxy setup that is supported by your editor is not necessarily supported by GitHub Copilot. Some common causes for errors related to proxies are:

- If your proxy's URL starts `https://`, it is not currently supported by GitHub Copilot.
- You may need to authenticate to the proxy. GitHub Copilot supports basic authentication or authentication with Kerberos. If you are using Kerberos, ensure you have a valid ticket for the proxy service and that you are using the correct service principal name for the service. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#authentication-with-kerberos)."
- GitHub Copilot may reject custom certificates. For more information, see "[Troubleshooting certificate-related errors](#troubleshooting-certificate-related-errors)."

## Troubleshooting certificate-related errors

Depending on your proxy setup, you may encounter errors like "certificate signature failure," "custom certificate," or "unable to verify the first certificate." These errors are usually caused by a corporate proxy setup that uses custom certificates to intercept and inspect secure connections.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** GitHub Copilot only supports custom certificates if you use GitHub Copilot for Business. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-business)."

</div>

Some possible ways to resolve certificate-related errors are:
- Configure a different proxy that does not intercept secure connections.
- If you are using a corporate proxy, contact your IT department to see if they can configure the proxy to not intercept secure connections.
- Ensure the custom certificates are properly installed in your operating system's trust store. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#allowing-github-copilot-to-use-custom-certificates)." If the certificates are installed on your machine but GitHub Copilot isn't detecting them, it may help you to know the mechanisms that GitHub Copilot uses to find certificates.
  - On Windows, Copilot uses the [win-ca package](https://www.npmjs.com/package/win-ca).
  - On macOS, Copilot uses the [mac-ca package](https://www.npmjs.com/package/mac-ca).
  - On Linux, Copilot checks the standard OpenSSL files `/etc/ssl/certs/ca-certificates.crt` and `/etc/ssl/certs/ca-bundle.crt`.
- Configure GitHub Copilot to ignore certificate errors. In your proxy settings, you can deselect **Proxy Strict SSL** in Visual Studio Code, or select **Accept non-trusted certificates automatically** in a JetBrains IDE. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#configuring-proxy-settings-for-github-copilot)."

  <div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

  **Warning:** Ignoring certificate errors can cause security issues and is not recommended.

  </div>
