# Troubleshooting search queries

If you encounter unexpected results while searching on GitHub, you can troubleshoot by reviewing common problems and limitations.

## Potential timeouts

Some queries are computationally expensive for our search infrastructure to execute. To keep search fast for everyone, we limit how long any individual query can run. In rare situations when a query exceeds the time limit, search returns all matches that were found prior to the timeout and informs you that a timeout occurred.

Reaching a timeout does not necessarily mean that search results are incomplete. It just means that the query was discontinued before it searched through all possible data.

## Limitations on query length

There are some limits to the length of the queries when searching across GitHub:

- Queries longer than 256 characters are not supported
- You can't construct a query using more than five `AND`, `OR`, or `NOT` operators

Specific search types, such as code search, might have additional limitations. Check the documentation for these search types for more information. 

## Further reading

- "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
