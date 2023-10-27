# Using a proxy server with self-hosted runners

You can configure self-hosted runners to use a proxy server to communicate with GitHub.

## Configuring a proxy server using environment variables

If you need a self-hosted runner to communicate via a proxy server, the self-hosted runner application uses proxy configurations set in the following environment variables:

- `https_proxy`: Proxy URL for HTTPS traffic. You can also include basic authentication credentials, if required. For example:
  - `http://proxy.local`
  - `http://192.168.1.1:8080`
  - `http://username:password@proxy.local`
- `http_proxy`: Proxy URL for HTTP traffic. You can also include basic authentication credentials, if required. For example:
  - `http://proxy.local`
  - `http://192.168.1.1:8080`
  - `http://username:password@proxy.local`
- `no_proxy`: Comma separated list of hosts that should not use a proxy. Only hostnames are allowed in `no_proxy`, you cannot use IP addresses. For example:
  - `example.com`
  - `example.com,myserver.local:443,example.org`

The proxy environment variables are read when the self-hosted runner application starts, so you must set the environment variables before configuring or starting the self-hosted runner application. If your proxy configuration changes, you must restart the self-hosted runner application.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: To avoid issues, it's good practice to treat environment variables as case sensitive, irrespective of the behavior of the operating system and shell you are using.

</div>

On Windows machines, the proxy environment variable names are case insensitive. On Linux and macOS machines, we recommend that you use all lowercase environment variables. If you have an environment variable in both lowercase and uppercase on Linux or macOS, for example `https_proxy` and `HTTPS_PROXY`, the self-hosted runner application uses the lowercase environment variable.

## Using a .env file to set the proxy configuration

If setting environment variables is not practical, you can set the proxy configuration variables in a file named `.env` in the self-hosted runner application directory (that is, the directory into which you downloaded and unpacked the runner software). For example, this might be necessary if you want to configure the runner application as a service under a system account. When the runner application starts, it reads the variables set in `.env` for the proxy configuration.

### Example `.env` proxy configuration

```shell
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Setting proxy configuration for Docker containers

If you use Docker container actions or service containers in your workflows, you might also need to configure Docker to use your proxy server in addition to setting the above environment variables.

For information on the required Docker configuration, see "[Configure Docker to use a proxy server](https://docs.docker.com/network/proxy/)" in the Docker documentation.
