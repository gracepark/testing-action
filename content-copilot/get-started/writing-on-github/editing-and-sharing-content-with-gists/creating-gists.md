# Creating gists

You can create two kinds of gists: public and secret. Create a public gist if you're ready to share your ideas with the world or a secret gist if you're not.

**Who can use this feature**: 
## About gists

Gists provide a simple way to share code snippets with others. Every gist is a Git repository, which means that it can be forked and cloned. If you are signed in to GitHub when you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your [gist home page](https://gist.github.com/).

Gists can be public or secret. Public gists show up in [Discover](https://gist.github.com/discover), where people can browse new gists as they're created. They're also searchable, so you can use them if you'd like other people to find and see your work.

Secret gists don't show up in [Discover](https://gist.github.com/discover) and are not searchable unless you are logged in and are the author of the secret gist. Secret gists aren't private. If you send the URL of a secret gist to a friend, they'll be able to see it. However, if someone you don't know discovers the URL, they'll also be able to see your gist. If you need to keep your code away from prying eyes, you may want to [create a private repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) instead.

After creating a gist, you cannot convert it from public to secret.. However, a secret gist can be made public by editing the gist and updating the visibility to public.

You'll receive a notification when:
- You are the author of a gist.
- Someone mentions you in a gist.
- You subscribe to a gist, by clicking **Subscribe** at the top of any gist.

You can pin gists to your profile so other people can see them easily. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)."

You can discover public gists others have created by going to the [gist home page](https://gist.github.com/) and clicking **All Gists**. This will take you to a page of all gists sorted and displayed by time of creation or update. You can also search gists by language with [Gist Search](https://gist.github.com/search). 

Since gists are Git repositories, you can view their full commit history, complete with diffs. You can also fork or clone gists. For more information, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists/forking-and-cloning-gists)."

You can download a ZIP file of a gist by clicking the **Download ZIP** button at the top of the gist. You can embed a gist in any text field that supports Javascript, such as a blog post. To get the embed code, click the clipboard icon next to the **Embed** URL of a gist. To embed a specific gist file, append the **Embed** URL with `?file=FILENAME`.

Gist supports mapping GeoJSON files. These maps are displayed in embedded gists, so you can easily share and embed maps. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)."

## Creating a gist

Follow the steps below to create a gist.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

You can also create a gist using the GitHub CLI. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the GitHub CLI documentation.

Alternatively, you can drag and drop a text file from your desktop directly into the editor.

</div>

1. Sign in to GitHub.
1. Navigate to your [gist home page](https://gist.github.com/).
1. Optionally, in the "Gist description" field, type a description for your gist.
1. In the "Filename including extension" field, type a file name for your gist, including the file extensions.
1. In the file contents field, type the text of your gist.
1. Optionally, to create a public gist, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="The downwards triangle icon" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>, then click **Create public gist**.

   ![Screenshot of the visibility dropdown menu for a new gist. Next to a button labeled "Create secret gist", a dropdown icon is outlined in dark orange.](/assets/images/help/gist/gist-visibility-drop-down.png)
1. Click **Create secret Gist** or **Create public gist**.