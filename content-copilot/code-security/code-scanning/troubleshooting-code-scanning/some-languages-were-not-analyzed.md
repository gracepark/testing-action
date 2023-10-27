# Some languages were not analyzed with CodeQL advanced setup

If some languages were not analyzed, you can modify your code scanning workflow to add a matrix specifying the languages you want to analyze.

If you're using advanced setup and your workflow doesn't explicitly specify the languages to analyze, CodeQL implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages C/C++, C#,   and Java, CodeQL only analyzes the language with the most source files. Edit the workflow and add a matrix specifying the languages you want to analyze. The default CodeQL analysis workflow uses such a matrix.

  The following extracts from a workflow show how you can use a matrix within the job strategy to specify languages, and then reference each language within the "Initialize CodeQL" step:

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix: 
          language: ['csharp', 'cpp', 'javascript'] 

      steps:
      ...
        - name: Initialize CodeQL
          uses: github/codeql-action/init@v2
          with:
            languages: ${{ matrix.language }}
  ```

  For more information about editing the workflow, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."
