# Allowing access to GitHub's services from a restricted network

If your network restricts access to specific domains, a network administrator may be able to grant access to GitHub's services by creating exceptions for GitHub's domain names.

## About access to GitHub from a restricted network

In rare cases, an institution's network access policy may restrict access to specific domain names for end users. For example, the policy may use DNS filtering to deny access to sites like GitHub.com. If your institution requires this level of control, but you still want to permit access to services on GitHub.com, you can create exceptions in your policy to allow access to the necessary domains.

## Retrieving GitHub's domain names using the REST API

You can use the REST API to retrieve a list of GitHub's domain names.

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: The list of domains from the REST API is not intended to be comprehensive. If you block access to services using DNS, but selectively allow access to GitHub's domain names, any or all of GitHub.com and related services may not function properly or at all for your end users.

</div>

For more information, see "[AUTOTITLE](/rest/meta)" in the REST API documentation.
