# Error: "is not a .ql file, .qls file, a directory, or a query pack specification"

CodeQL was unable to locate one of the queries or sets of queries that are specified for analysis.

You will see `Error: "is not a .ql file, .qls file, a directory, or a query pack specification"` if CodeQL is unable to find the named query, query suite, or query pack at the location requested in the workflow. There are two common reasons for this error.

- There is a typo in the workflow.
- A resource the workflow refers to by path was renamed, deleted, or moved to a new location.

After verifying the location of the resource, you can update the workflow to specify the correct location. 
