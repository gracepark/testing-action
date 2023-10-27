# Queries

The query type defines GraphQL operations that retrieve data from the server.

## About queries

Every GraphQL schema has a root type for both queries and mutations. The [query type](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) defines GraphQL operations that retrieve data from the server.

For more information, see "[AUTOTITLE](/graphql/guides/forming-calls-with-graphql#about-queries)."

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** For GitHub App requests made with user access tokens, you should use separate queries for issues and pull requests. For example, use the `is:issue` or `is:pull-request` filters and their equivalents. Using the `search` connection to return a combination of issues and pull requests in a single query will result in an empty set of nodes.

</div>
