# Results differ between platforms

You may see different results depending on whether you run the CodeQL analysis workflow on Linux, macOS, or Windows.

If you are analyzing code written in Python, you may see different results depending on whether you run the CodeQL analysis workflow on Linux, macOS, or Windows.

On GitHub-hosted runners that use Linux, the CodeQL analysis workflow tries to install and analyze Python dependencies, which could lead to different results than when you run the CodeQL analysis workflow on other platforms. To disable the auto-install, add `setup-python-dependencies: false` to the "Initialize CodeQL" step of the workflow. For more information about configuring the analysis of Python dependencies, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning#analyzing-python-dependencies)."
