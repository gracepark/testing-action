# About anonymized URLs

If you upload an image or video to GitHub, the URL of the image or video will be modified so your information is not trackable.

To host your images, GitHub uses the [open-source project Camo](https://github.com/atmos/camo). Camo generates an anonymous URL proxy for each file which hides your browser details and related information from other users. The URL starts `https://<subdomain>.githubusercontent.com/`, with different subdomains depending on how you uploaded the image.

Videos also get anonymized URLs with the same format as image URLs, but are not processed through Camo. This is because GitHub does not support externally hosted videos, so the anonymized URL is a link to the uploaded video hosted by GitHub.

Anyone who receives your anonymized URL, directly or indirectly, may view your image or video. To keep sensitive media files private, restrict them to a private network or a server that requires authentication instead of using Camo.

## Troubleshooting issues with Camo

In rare circumstances, images that are processed through Camo might not appear on GitHub. Here are some steps you can take to determine where the problem lies.

<div class="ghd-tool windows">

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

Windows users will either need to use the Git PowerShell (which is installed alongside [GitHub Desktop](https://desktop.github.com/)) or download [curl for Windows](http://curl.haxx.se/download.html).

</div>

</div>

### An image is not showing up

If an image is showing up in your browser but not on GitHub, you can try requesting it locally.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Request the image headers using `curl`.

   ```shell
   $ curl -I https://www.my-server.com/images/some-image.png
   > HTTP/2 200
   > Date: Fri, 06 Jun 2014 07:27:43 GMT
   > Expires: Sun, 06 Jul 2014 07:27:43 GMT
   > Content-Type: image/x-png
   > Server: Google Frontend
   > Content-Length: 6507
   ```

1. Check the value of `Content-Type`. In this case, it's `image/x-png`.
1. Check that content type against [the list of types supported by Camo](https://github.com/atmos/camo/blob/master/mime-types.json).

If your content type is not supported by Camo, you can try several actions:
- If you own the server that's hosting the image, modify it so that it returns a correct content type for images.
- If you're using an external service for hosting images, contact support for that service.
- Make a pull request to Camo to add your content type to the list.

### An image that changed recently is not updating

If you changed an image recently and it's showing up in your browser but not GitHub, you can try resetting the cache of the image.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Request the image headers using `curl`.

   ```shell
   $ curl -I https://www.my-server.com/images/some-image.png
   > HTTP/2 200
   > Expires: Fri, 01 Jan 1984 00:00:00 GMT
   > Content-Type: image/png
   > Content-Length: 2339
   > Server: Jetty(8.y.z-SNAPSHOT)
   ```

Check the value of `Cache-Control`. In this example, there's no `Cache-Control`. In that case:
- If you own the server that's hosting the image, modify it so that it returns a `Cache-Control` of `no-cache` for images.
- If you're using an external service for hosting images, contact support for that service.

If `Cache-Control` _is_ set to `no-cache`, contact us through the [GitHub Support portal](https://support.github.com) or search the [GitHub Community discussions](https://github.com/orgs/community/discussions).

### Removing an image from Camo's cache

Purging the cache forces every GitHub user to re-request the image, so you should use it very sparingly and only in the event that the above steps did not work.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Purge the image using `curl -X PURGE` on the Camo URL.

   ```shell
   $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
   > {"status": "ok", "id": "216-8675309-1008701"}
   ```

### Viewing images on private networks

If an image is being served from a private network or from a server that requires authentication, it can't be viewed by GitHub. In fact, it can't be viewed by any user without asking them to log into the server.

To fix this, please move the image to a service that is publicly available.

## Further reading

- "[Proxying user images](https://github.com/blog/1766-proxying-user-images)" on the GitHub Blog
