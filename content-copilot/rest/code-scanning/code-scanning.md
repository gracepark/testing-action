# Code Scanning

Use the REST API to retrieve and update code scanning alerts from a repository.

## About code scanning

You can retrieve and update code scanning alerts from a repository. You can use the endpoints to create automated reports for the code scanning alerts in an organization or upload analysis results generated using offline code scanning tools. For more information, see "[AUTOTITLE](/code-security/code-scanning)."

### Custom media type for code scanning

There is one supported custom media type for code scanning endpoints.

    application/sarif+json

You can use this with `GET` requests sent to the `/analyses/{analysis_id}` endpoint. For more information about this operation, see "[Get a code scanning analysis for a repository](#get-a-code-scanning-analysis-for-a-repository)." When you use this media type with this operation, the response includes a subset of the actual data that was uploaded for the specified analysis, rather than the summary of the analysis that's returned when you use the default media type. The response also includes additional data such as the `github/alertNumber` and `github/alertUrl` properties. The data is formatted as [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

For more information, see "[AUTOTITLE](/rest/overview/media-types)."
