# Warning: "1 issue was detected with this workflow: git checkout HEAD^2 is no longer necessary"

If you see this warning, you should update your workflow to follow current best practice.

If you're using an old CodeQL workflow you may get the following warning in the output from the "Initialize CodeQL" action:

```shell
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer
necessary. Please remove this step as Code Scanning recommends analyzing the merge
commit for best results.
```

Fix this by removing the following lines from the CodeQL workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the CodeQL workflow.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: ${{ github.event_name == 'pull_request' }}
```

The revised `steps` section of the workflow will look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # Initializes the CodeQL tools for scanning.
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v2

      ...
```

For more information about editing the CodeQL workflow file, see  "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#editing-a-code-scanning-workflow)."
