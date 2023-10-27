# Working with the RubyGems registry

You can configure RubyGems to publish a package to GitHub Packages and to use packages stored on GitHub Packages as dependencies in a Ruby project with Bundler.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## Prerequisites

- You must have RubyGems 2.4.1 or higher. To find your RubyGems version:

  ```shell
  gem --version
  ```

- You must have bundler 1.6.4 or higher. To find your Bundler version:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Authenticating to GitHub Packages

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token to authenticate to GitHub Packages or the GitHub API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:
- `GITHUB_TOKEN` to publish packages associated with the workflow repository.
- a personal access token with at least `read:packages` scope to install packages associated with other private repositories (which `GITHUB_TOKEN` can't access).

### Authenticating with a personal access token

You must use a personal access token with the appropriate scopes to publish and install packages in GitHub Packages. For more information, see "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)."

To publish and install gems, you can configure RubyGems or Bundler to authenticate to GitHub Packages using your personal access token.

To publish new gems, you need to authenticate to GitHub Packages with RubyGems by editing your _~/.gem/credentials_ file to include your personal access token. Create a new _~/.gem/credentials_ file if this file doesn't exist.

For example, you would create or edit a _~/.gem/credentials_ to include the following, replacing TOKEN with your personal access token.

```shell
---
:github: Bearer TOKEN
```

To install gems, you need to authenticate to GitHub Packages by updating your gem sources to include `https://USERNAME:TOKEN@rubygems.pkg.github.com/NAMESPACE/`. You must replace:
- `USERNAME` with your GitHub username.
- `TOKEN` with your personal access token.
- `NAMESPACE` with the name of the personal account or organization that owns the repository containing the gem.

If you would like your package to be available globally, you can run the following command to add your registry as a source.

```shell
gem sources --add https://USERNAME:TOKEN@rubygems.pkg.github.com/NAMESPACE/
```

To authenticate with Bundler, configure Bundler to use your personal access token, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and NAMESPACE with the name of the personal account or organization that owns the repository containing the gem.

```shell
bundle config https://rubygems.pkg.github.com/NAMESPACE USERNAME:TOKEN
```

## Publishing a package

By default, GitHub publishes the package to an existing repository with the same name as the package. For example, when you publish `GEM_NAME` to the `octo-org` organization, GitHub Packages publishes the gem to the `octo-org/GEM_NAME` repository. For more information on creating your gem, see "[Make your own gem](http://guides.rubygems.org/make-your-own-gem/)" in the RubyGems documentation.

1. Authenticate to GitHub Packages. For more information, see "[Authenticating to GitHub Packages](#authenticating-to-github-packages)."

1. Build the package from the _gemspec_ to create the _.gem_ package. Replace `GEM_NAME` with the name of your gem.

   ```shell
   gem build GEM_NAME.gemspec
   ```

1. Publish a package to GitHub Packages, replacing `NAMESPACE` with the name of the personal account or organization that owns the repository containing your project and `GEM_NAME` with the name of your gem package.

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** The maximum uncompressed size of a gem's `metadata.gz` file must be less than 2 MB. Requests to push gems that exceed that limit will fail.

   </div>

   ```shell
   $ gem push --key github \
   --host https://rubygems.pkg.github.com/NAMESPACE \
   GEM_NAME-0.0.1.gem
   ```

## Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the GitHub repository in the `github_repo` field in `gem.metadata`. If you include this field, GitHub matches the repository based on this value, instead of using the gem name.

```ruby
gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
```

## Installing a package

You can use gems from GitHub Packages much like you use gems from _rubygems.org_. You need to authenticate to GitHub Packages by adding your GitHub user or organization as a source in the _~/.gemrc_ file or by using Bundler and editing your _Gemfile_.

1. Authenticate to GitHub Packages. For more information, see "[Authenticating to GitHub Packages](#authenticating-to-github-packages)."
1. For Bundler, add your GitHub user or organization as a source in your _Gemfile_ to fetch gems from this new source. For example, you can add a new `source` block to your _Gemfile_ that uses GitHub Packages only for the packages you specify, replacing `GEM_NAME` with the package you want to install from GitHub Packages and `NAMESPACE` with the personal account or organization that owns the repository containing the gem you want to install.

   ```ruby
   source "https://rubygems.org"

   gem "rails"

   source "https://rubygems.pkg.github.com/NAMESPACE" do
     gem "GEM_NAME"
   end
   ```

1. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](https://bundler.io/gemfile.html).

   ```ruby
   source "https://rubygems.pkg.github.com/NAMESPACE"
   source "https://rubygems.org"

   gem "rails"
   gem "GEM_NAME"
   ```

1. Install the package:

   ```shell
   gem install GEM_NAME --version "0.1.1"
   ```

## Further reading

- "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)"
