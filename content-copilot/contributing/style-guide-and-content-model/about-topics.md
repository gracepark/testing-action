# About topics

Use topics to make articles searchable.

Articles in the "Contributing to GitHub Docs" section refer to the documentation itself and are a resource for GitHub staff and open source contributors.

Topics are used to filter articles and are searchable across the GitHub Docs site. For some layouts, such as landing pages or guides, people can select which articles are displayed by filtering topics. Use these guidelines to help choose which topics to add to an article's frontmatter. For more information on adding topics to an article see, "[Topics](https://github.com/github/docs/tree/main/content#topics)" and for a list of all allowed topics, see [`allowed-topics`](https://github.com/github/docs/blob/main/data/allowed-topics.js).

## Topics for all content types

- All articles should have at least one topic
- Use nouns as topics
- Topics help people meaningfully group content
  - When possible, use more specific topics that are relevant and not just broad topics. For example, `REST` or `GraphQL` rather than just `API`
  - Ensure that topics on similar articles are consistent so that people who filter by a topic get all of the relevant articles. For example, all articles about CI should have the `CI` topic plus more specific topics
  - Avoid ambiguous topics. For example, `Actions` may not be a useful topic within the Actions product since it could refer to the product GitHub Actions or the product element called an action
- Topics add value beyond and do not replicate the article’s title, type, or category
  - For example, within the Actions product, `Actions` does not add value since someone in this section of the docs would already know that they are looking at Actions docs
- Use `Fundamentals` for articles related to the core concepts of a product area.
  - Use: `Fundamentals` in an article like “Introduction to GitHub Actions”
  - Avoid: `Actions` in an article like "Introduction to GitHub Actions"
- Commonly-recognized abbreviations can be used, but obscure or ambiguous abbreviations should be avoided
  - Use: `CI` instead of `Continuous integration`
  - Avoid: `AS` instead of `Advanced Security`
- Use the short forms of GitHub product names
  - Use: `Actions` instead of `GitHub Actions`

## Checklist for choosing topics

Consider these questions to help choose topics for an article. Not every article will have a topic for each item in the checklist.

- What is the feature or product area?
  - Example: `Enterprise`
   Is the article about a sub-feature (unless the product name matches the feature name)?
  - Example: `Dependabot`
- Is the feature part of a restricted program?
  - Example: `Advanced Security`
- What element of the feature or product is the article?
  - Example: `Organizations`
- What is the broad purpose of the article?
  - Example: `Permissions`
- What programming languages, package managers, or ecosystems does the article explicitly address? Only include these topics if it adds value to someone filtering the docs, not just if an article lists supported languages, package managers, or ecosystems.
  - Example: `Ruby`
