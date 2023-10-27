# Searching topics

You can search for topics associated with repositories on GitHub.

## Search GitHub for topics

You can search for topics on GitHub, explore related topics, and see how many repositories are associated with a certain topic.

1. Navigate to https://github.com/search.
1. Type a topic keyword.
1. In the left sidebar, to narrow your search to topics, click **Topics**.

   ![Screenshot of the repository search results page for the search term 'jekyll' with the "Topics" option in the left-hand menu outlined in dark orange.](/assets/images/help/search/topic-left-side-navigation-dotcom.png)

## Narrowing your search with search qualifiers

If you want to explore repositories about a certain topic, find projects to contribute to, or learn which topics are most popular on GitHub, you can search topics with the search qualifiers `is:featured`, `is:curated`, `repositories:n` and `created:YYYY-MM-DD`.

The `is:featured` search qualifier will narrow search results to the topics with the most repositories on GitHub. These topics are also featured at https://github.com/topics/.

The `is:curated` search qualifier will narrow search results to topics that community members have added extra information to. For more information, see the [explore repository](https://github.com/github/explore).

You can filter topics based when they were created using the date parameter and `created:` or based on how many repositories are associated with this topic using `repositories:n`. Both of these qualifiers can use the [greater than and less than range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

Date formatting must follow the [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) standard, which is `YYYY-MM-DD` (year-month-day). You can also add optional time information `THH:MM:SS+00:00` after the date, to search by the hour, minute, and second. That's `T`, followed by `HH:MM:SS` (hour-minutes-seconds), and a UTC offset (`+00:00`).

When you search for a date, you can use greater than, less than, and range qualifiers to further filter results. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier  | Example |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) matches topics that are curated and contain the word "javascript."
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) matches topics that are featured on https://github.com/topics/ and contain the word "javascript."
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) matches topics that don't have extra information, such as a description or logo, and contain the word "javascript."
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) matches topics that aren't featured on https://github.com/topics/ and contain the word "javascript."
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) matches topics that have more than 5000 repositories.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) matches topics with the word "serverless" that were created after 2018.

## Search repositories by topic

You can use the `topic:` qualifier to find every repository connected to a particular topic. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-for-repositories#search-by-topic)."

## Further reading

- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)"
