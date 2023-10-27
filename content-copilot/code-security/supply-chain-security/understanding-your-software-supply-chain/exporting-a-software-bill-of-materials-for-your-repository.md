# Exporting a software bill of materials for your repository

You can export a software bill of materials or SBOM for your repository from the dependency graph. SBOMs allow transparency into your open source usage and help expose supply chain vulnerabilities, reducing supply chain risks.

**Who can use this feature**: Anyone can export the dependency graph of a repository as a software bill of materials. The SBOM export will contain a list of the dependencies that are used in the repository.

## About the dependency graph and SBOM exports

The dependency graph is a summary of the manifest and lock files stored in a repository. For each repository, it shows:

- Dependencies, the ecosystems and packages it depends on
- Dependents, the repositories and packages that depend on it

You can export the current state of the dependency graph for your repository as a Software Bill of Materials (SBOM) using the industry standard [SPDX](https://spdx.github.io/spdx-spec/v2.3/) format:
- Via the GitHub UI
- Using the REST API

An SBOM is a formal, machine-readable inventory of a project's dependencies and associated information (such as versions, package identifiers, and licenses). SBOMs help reduced supply chain risks by:

- providing transparency about the dependencies used by your repository
- allowing vulnerabilities to be identified early in the process
- providing insights in the license compliance, security, or quality issues that may exist in your codebase
- enabling you to better comply with various data protection standards

If your company provides software to the US federal government per [Executive Order 14028](https://www.gsa.gov/technology/technology-products-services/it-security/executive-order-14028-improving-the-nations-cybersecurity), you will need to provide an SBOM for your product. You can also use SBOMs as part of your audit process and use them to comply with regulatory and legal requirements.

## Exporting a software bill of material for your repository from the UI

1. On GitHub.com, navigate to the main page of the repository.
1. Under your repository name, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-graph" aria-hidden="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> **Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/repository/repo-nav-insights-tab.png)
1. In the left sidebar, click **Dependency graph**.
1. On the top right side of the **Dependencies** tab, click **Export SBOM** to generate an SBOM file for download from your browser.

## Exporting a software bill of material for your repository using the REST API

If you want to use the REST API to export an SBOM for your repository, see [AUTOTITLE](/rest/dependency-graph/sboms#export-a-software-bill-of-materials-sbom-for-a-repository) in the REST API documentation for more information.
