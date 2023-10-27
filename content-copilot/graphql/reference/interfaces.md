# Interfaces

Interfaces serve as parent objects from which other objects can inherit.

## About interfaces

[Interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) serve as parent objects from which other objects can inherit.

For example, [`Lockable`](/graphql/reference/interfaces#lockable) is an interface because both [`Issue`](/graphql/reference/objects#issue) and [`PullRequest`](/graphql/reference/objects#pullrequest) objects can be locked. An interface has its own list of named fields that are shared by implementing objects.

For more information, see "[AUTOTITLE](/graphql/guides/introduction-to-graphql#implementation)."
