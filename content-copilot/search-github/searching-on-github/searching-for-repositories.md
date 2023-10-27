# Searching for repositories

You can search for repositories on GitHub and narrow the results using these repository search qualifiers in any combination.

You can search for repositories globally across all of GitHub.com, or search for repositories within a particular organization. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

To include forks in the search results, you will need to add `fork:true` or `fork:only` to your query. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-in-forks)."

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tips:**
- For a list of search syntaxes that you can add to any search qualifier to further improve your results, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)".
- Use quotations around multi-word search terms. For example, if you want to search for issues with the label "In progress," you'd search for `label:"in progress"`. Search is not case sensitive.

</div>

## Search by repository name, description, or contents of the README file

With the `in` qualifier you can restrict your search to the repository name, repository description, repository topics, contents of the README file, or any combination of these. When you omit this qualifier, only the repository name, description, and topics are searched.

| Qualifier  | Example
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) matches repositories with "jquery" in the repository name.
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) matches repositories with "jquery" in the repository name or description.
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) matches repositories labeled with "jquery" as a topic.
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) matches repositories mentioning "jquery" in the repository's README file.
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) matches a specific repository name.

## Search based on the contents of a repository

You can find a repository by searching for content in the repository's README file using the `in:readme` qualifier. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."

Besides using `in:readme`, it's not possible to find repositories by searching for specific content within the repository. To search for a specific file or content within a repository, you can use the file finder or code-specific search qualifiers. For more information, see "[AUTOTITLE](/search-github/searching-on-github/finding-files-on-github)" and "[AUTOTITLE](/search-github/searching-on-github/searching-code)."

| Qualifier  | Example
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) matches repositories mentioning "octocat" in the repository's README file.

## Search within a user's or organization's repositories

To search in all repositories owned by a certain user or organization, you can use the  `user` or `org` qualifier.

| Qualifier  | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) matches repositories from @defunkt that have more than 100 forks.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) matches repositories from GitHub.

## Search by repository size

The `size` qualifier finds repositories that match a certain size (in kilobytes), using greater than, less than, and range qualifiers. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier  | Example
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) matches repositories that are 1 MB exactly.
| <code>size:><em>n</em></code> | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) matches repositories that are at least 30 MB.
| <code>size:<<em>n</em></code> | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) matches repositories that are smaller than 50 KB.
| <code>size:<em>n..n</em></code> | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) matches repositories that are between 50 KB and 120 KB.

## Search by number of followers

You can filter repositories based on the number of users who follow the repositories, using the `followers` qualifier with greater than, less than, and range qualifiers. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier        | Example
| ------------- | -------------
| <code>followers:>=<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) matches repositories with 10,000 or more followers mentioning the word "node".
| <code>followers:<em>n..n</em></code> | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) matches repositories with between 1 and 10 followers, mentioning the word "styleguide linter."

## Search by number of forks

The `forks` qualifier specifies the number of forks a repository should have, using greater than, less than, and range qualifiers. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier  | Example
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) matches repositories with only five forks.
| <code>forks:><em>n</em></code> | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) matches repositories with at least 205 forks.
| <code>forks:<<em>n</em></code> | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) matches repositories with fewer than 90 forks.
| <code>forks:<em>n..n</em></code> | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) matches repositories with 10 to 20 forks.

## Search by number of stars

You can search repositories based on the number of stars the repositories have, using greater than, less than, and range qualifiers. For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/saving-repositories-with-stars)" and "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier  | Example
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) matches repositories with exactly 500 stars.
| <code>stars:<em>n..n</em></code> <code>size:<<em>n</em></code> | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) matches repositories 10 to 20 stars, that are smaller than 1000 KB.
| <code>stars:>=<em>n</em></code> `fork:true` <code>language:<em>LANGUAGE</em></code> | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) matches repositories with the at least 500 stars, including forked ones, that are written in PHP.

## Search by when a repository was created or last updated

You can filter repositories based on time of creation or time of last update. For repository creation, you can use the `created` qualifier; to find out when a repository was last updated, you'll want to use the `pushed` qualifier. The `pushed` qualifier will return a list of repositories, sorted by the most recent commit made on any branch in the repository.

Both take a date as a parameter. Date formatting must follow the [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) standard, which is `YYYY-MM-DD` (year-month-day). You can also add optional time information `THH:MM:SS+00:00` after the date, to search by the hour, minute, and second. That's `T`, followed by `HH:MM:SS` (hour-minutes-seconds), and a UTC offset (`+00:00`).

When you search for a date, you can use greater than, less than, and range qualifiers to further filter results. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier  | Example
| ------------- | -------------
| <code>created:<<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) matches repositories with the word "webos" that were created before 2011.
| <code>pushed:><em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) matches repositories with the word "css" that were pushed to after January 2013.
| <code>pushed:>=<em>YYYY-MM-DD</em></code> `fork:only` | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) matches repositories with the word "case" that were pushed to on or after March 6th, 2013, and that are forks.

## Search by language

You can search repositories based on the language of the code in the repositories.

| Qualifier  | Example
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) matches repositories with the word "rails" that are written in JavaScript.

## Search by topic

You can find all of the repositories that are classified with a particular topic. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)."

| Qualifier  | Example
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [**`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) matches repositories that have been classified with the topic "Jekyll."

## Search by number of topics

You can search repositories by the number of topics that have been applied to the repositories, using the `topics` qualifier along with greater than, less than, and range qualifiers. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)" and "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier  | Example
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) matches repositories that have five topics.
| <code>topics:><em>n</em></code> | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) matches repositories that have more than three topics.

## Search by license

You can search repositories by the type of license in the repositories. You must use a license keyword to filter repositories by a particular license or license family. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."

| Qualifier  | Example
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) matches repositories that are licensed under Apache License 2.0.

## Search by repository visibility

You can filter your search based on the visibility of the repositories. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

| Qualifier  | Example
| ------------- | ------------- |
| `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) matches public repositories owned by GitHub.
| `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) matches private repositories that you can access and contain the word "pages."

## Search based on whether a repository is a mirror

You can search repositories based on whether the repositories are mirrors and hosted elsewhere. For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)."

| Qualifier  | Example
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) matches repositories that are mirrors and contain the word "GNOME."
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) matches repositories that are not mirrors and contain the word "GNOME."

## Search based on whether a repository is a template

You can search repositories based on whether the repositories are templates. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)".

| Qualifier  | Example
| ------------- | -------------
| `template:true` | [**template:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=template%3Atrue+GNOME&type=) matches repositories that are templates and contain the word "GNOME".
| `template:false` | [**template:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=template%3Afalse+GNOME&type=) matches repositories that are not templates and contain the word "GNOME".

## Search based on whether a repository is archived

You can search repositories based on whether or not the repositories are archived. For more information, see "[AUTOTITLE](/repositories/archiving-a-github-repository/archiving-repositories)."

| Qualifier  | Example
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) matches repositories that are archived and contain the word "GNOME."
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) matches repositories that are not archived and contain the word "GNOME."

## Search based on number of issues with `good first issue` or `help wanted` labels

You can search for repositories that have a minimum number of issues labeled `help-wanted` or `good-first-issue` with the qualifiers `help-wanted-issues:>n` and `good-first-issues:>n`. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)."

| Qualifier  | Example
| ------------- | -------------
| `good-first-issues:>n` | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) matches repositories with more than two issues labeled `good-first-issue` and that contain the word "javascript."
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) matches repositories with more than four issues labeled `help-wanted` and that contain the word "React."

## Search based on ability to sponsor

You can search for repositories whose owners can be sponsored on GitHub Sponsors with the `is:sponsorable` qualifier. For more information, see "[AUTOTITLE](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)."

You can search for repositories that have a funding file using the `has:funding-file` qualifier. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository#about-funding-files)."

| Qualifier  | Example
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) matches repositories whose owners have a GitHub Sponsors profile.
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) matches repositories that have a FUNDING.yml file.

## Further reading

- "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/sorting-search-results)"
- "[AUTOTITLE](/search-github/searching-on-github/searching-in-forks)"
