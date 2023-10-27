# Verifying your custom domain for GitHub Pages

You can increase the security of your custom domain and avoid takeover attacks by verifying your domain.

GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## About domain verification for GitHub Pages

When you verify your custom domain for your personal account or organization, only repositories owned by your personal account or organization may be used to publish a GitHub Pages site to the verified custom domain or the domain's immediate subdomains.

Verifying your domain stops other GitHub users from taking over your custom domain and using it to publish their own GitHub Pages site. Domain takeovers can happen when you delete your repository, when your billing plan is downgraded, or after any other change which unlinks the custom domain or disables GitHub Pages while the domain remains configured for GitHub Pages and is not verified.

When you verify a domain, any immediate subdomains are also included in the verification. For example, if the `github.com` custom domain is verified, `docs.github.com`, `support.github.com`, and any other immediate subdomains will also be protected from takeovers.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning:** We strongly recommend that you do not use wildcard DNS records, such as `*.example.com`. These records put you at an immediate risk of domain takeovers, even if you verify the domain. For example, if you verify `example.com` this prevents someone from using `a.example.com` but they could still take over `b.a.example.com` (which is covered by the wildcard DNS record). For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."

</div>

It's also possible to verify a domain for your organization, which displays a "Verified" badge on the organization  profile. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

### Verifying a domain that is already taken

If you are verifying a domain you own, which is currently in use by another user or organization, to make it available for your GitHub Pages website; note that the process to release the domain from its current location will take 7 days to complete. If you are attempting to verify an already verified domain (verified by another user or organization), the release process will not be successful.

## Verifying a domain for your user site

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-browser" aria-hidden="true"><path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"></path></svg> Pages**.
1. On the right, click **Add a domain**.
1. Under "What domain would you like to add?," enter the domain you wish to verify and select **Add domain**.
    ![Screenshot of a text box to add a verified domain on GitHub Pages, filled in with "example.com." Below the text is a green button labeled "Add domain."](/assets/images/help/pages/verify-enter-domain.png)
1. Follow the instructions under "Add a DNS TXT record" to create the TXT record with your domain hosting service.
    ![Screenshot of GitHub Pages instructions to add a TXT record to the DNS configuration of example.com.](/assets/images/help/pages/verify-dns.png)
1. Wait for your DNS configuration to change, this may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `USERNAME` with your username and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
   ```

1. After confirming that your DNS configuration has updated, you can verify the domain. If the change wasn't immediate, and you have navigated away from the previous page, return to your Pages settings by following the first few steps and, to the right of the domain, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> and then click **Continue verifying**.

   ![Screenshot of GitHub Pages settings showing verified domains. Under the horizontal kebab icon to the right, the "Continue verifying" dropdown option is outlined in dark orange.](/assets/images/help/pages/verify-continue.png)
1. To verify your domain, click **Verify**.
1. To make sure your custom domain remains verified, keep the TXT record in your domain's DNS configuration.

## Verifying a domain for your organization site

Organization owners can verify custom domains for their organization.

1. In the upper-right corner of GitHub.com, select your profile photo, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> **Your organizations**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your organizations" is outlined in dark orange.](/assets/images/help/profile/your-organizations.png)

1. Next to the organization, click **Settings**.
1. In the "Code, planning, and automation" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-browser" aria-hidden="true"><path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"></path></svg> Pages**.
1. On the right, click **Add a domain**.
1. Under "What domain would you like to add?," enter the domain you wish to verify and select **Add domain**.
    ![Screenshot of a text box to add a verified domain on GitHub Pages, filled in with "example.com." Below the text is a green button labeled "Add domain."](/assets/images/help/pages/verify-enter-domain.png)
1. Follow the instructions under "Add a DNS TXT record" to create the TXT record with your domain hosting service.
    ![Screenshot of GitHub Pages instructions to add a TXT record to the DNS configuration of example.com.](/assets/images/help/pages/verify-dns.png)
1. Wait for your DNS configuration to change. This may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `ORGANIZATION` with the name of your organization and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```

1. After confirming that your DNS configuration has updated, you can verify the domain. If the change wasn't immediate, and you have navigated away from the previous page, return to your Pages settings by following the first few steps and, to the right of the domain, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg> and then click **Continue verifying**.

   ![Screenshot of GitHub Pages settings showing verified domains. Under the horizontal kebab icon to the right, the "Continue verifying" dropdown option is outlined in dark orange.](/assets/images/help/pages/verify-continue.png)
1. To verify your domain, click **Verify**.
1. To make sure your custom domain remains verified, keep the TXT record in your domain's DNS configuration.
