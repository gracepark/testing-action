# Searching for packages

You can search for packages on GitHub and narrow the results using search qualifiers.

**Who can use this feature**: Anyone can search for packages they have access to.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## About searching for packages

You can search for packages globally across all of GitHub, or search for packages within a particular organization. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips:**
- For a list of search syntaxes that you can add to any search qualifier to further improve your results, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)".
- Use quotations around multi-word search terms. For example, if you want to search for issues with the label "In progress," you'd search for `label:"in progress"`. Search is not case sensitive.

</div>

## Searching within a user's or organization's packages

To find packages owned by a certain user or organization, use the `user` or `org` qualifier.

| Qualifier        | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) matches packages owned by @codertocat
| <code>org:<em>ORGNAME</em></code> | [**`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) matches packages owned by the GitHub organization

## Filtering by package visibility

To filter your search by whether a package is public or private, use the `is` qualifier.

| Qualifier  | Example |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) matches public packages that contain the word "angular"
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) matches private packages that contain the word "php"
