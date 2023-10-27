# Automatic build failed for a compiled language

If automatic build fails, you can configure code scanning to use specific build steps for compiled languages.

If an automatic build of code for a compiled language within your project fails, you can try removing the `autobuild` step from your code scanning workflow and adding specific build steps. If you're not already using advanced setup, you'll need to enable it first to create a workflow you can edit. For more information about advanced setup, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning)." For more information about specifically replacing the `autobuild` step, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
