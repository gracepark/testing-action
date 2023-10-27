# Git tags

Use the REST API to interact with tag objects in your Git database on GitHub.

## About Git tags

A Git tag is similar to a [Git reference](/rest/git#refs), but the Git commit that it points to never changes. Git tags are helpful when you want to point to specific releases. These endpoints allow you to read and write [tag objects](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) to your Git database on GitHub. The API only supports [annotated tag objects](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), not lightweight tags.
