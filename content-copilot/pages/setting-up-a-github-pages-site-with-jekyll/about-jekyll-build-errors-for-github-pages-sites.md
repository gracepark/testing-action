# About Jekyll build errors for GitHub Pages sites

If Jekyll encounters an error building your GitHub Pages site locally or on GitHub, you'll receive an error message with more information.

GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

## About Jekyll build errors

Sometimes, GitHub Pages will not attempt to build your site after you push changes to your site's publishing source.
- The person who pushed the changes hasn't verified their email address. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)."
- You're pushing with a deploy key. If you want to automate pushes to your site's repository, you can set up a machine user instead. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#machine-users)."
- You're using a CI service that isn't configured to build your publishing source. For example, Travis CI won't build the `gh-pages` branch unless you add the branch to a safe list. For more information, see "[Customizing the build](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)" on Travis CI, or your CI service's documentation.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub.

</div>

If Jekyll does attempt to build your site and encounters an error, you will receive a build error message. There are two main types of Jekyll build error messages.
- A "Page build warning" message means your build completed successfully, but you may need to make changes to prevent future problems.
- A "Page build failed" message means your build failed to complete. If Jekyll is able to detect a reason for the failure, you'll see a descriptive error message.

For more information about troubleshooting build errors, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)."

## Viewing your repository's build failures on GitHub

You can see build failures (but not build warnings) for your site on GitHub in the **Settings** tab of your site's repository.

## Viewing Jekyll build error messages locally

We recommend testing your site locally, which allows you to see build error messages on the command line, and addressing any build failures before pushing changes to GitHub. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)."

## Viewing Jekyll build error messages in your pull request

When you create a pull request to update your publishing source on GitHub, you can see build error messages on the **Checks** tab of the pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."

## Viewing Jekyll build errors by email

When you push changes to your publishing source on GitHub, GitHub Pages will attempt to build your site. If the build fails, you'll receive an email at your primary email address. 

## Viewing Jekyll build error messages in your pull request with a third-party CI service

You can configure a third-party service, such as [Travis CI](https://travis-ci.com/), to display error messages after each commit.

1. If you haven't already, add a file called _Gemfile_ in the root of your publishing source, with the following content:

   ```ruby
   source `https://rubygems.org`
   gem `github-pages`
   ```

1. Configure your site's repository for the testing service of your choice. For example, to use [Travis CI](https://travis-ci.com/), add a file named _.travis.yml_ in the root of your publishing source, with the following content:

   ```yaml
   language: ruby
   rvm:
     - 2.3
   script: "bundle exec jekyll build"
   ```

1. You may need to activate your repository with the third-party testing service. For more information, see your testing service's documentation.
