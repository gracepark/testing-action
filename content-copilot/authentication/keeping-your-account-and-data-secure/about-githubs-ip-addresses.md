# About GitHub's IP addresses

GitHub serves applications from multiple IP address ranges, which are available using the API.

You can retrieve a list of GitHub's IP addresses from the [meta](https://api.github.com/meta) API endpoint. For more information, see "[AUTOTITLE](/rest/meta)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** The list of GitHub IP addresses returned by the Meta API is not intended to be an exhaustive list. For example, IP addresses for some GitHub services might not be listed, such as LFS or GitHub Packages.

</div>

These IP addresses are used by GitHub to serve our content, deliver webhooks, and perform hosted GitHub Actions builds.

These ranges are in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). You can use an online conversion tool to convert from CIDR notation to IP address ranges, for example: [CIDR to IPv4 conversion site](https://www.ipaddressguide.com/cidr).

We make changes to our IP addresses from time to time. We do not recommend allowing by IP address, however if you use these IP ranges we strongly encourage regular monitoring of our API.

For applications to function, you must allow TCP ports 22, 80, and 443 via our IP ranges for `github.com`.

## Further reading

- "[AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)"
- "[AUTOTITLE](/get-started/using-github/allowing-access-to-githubs-services-from-a-restricted-network)"
