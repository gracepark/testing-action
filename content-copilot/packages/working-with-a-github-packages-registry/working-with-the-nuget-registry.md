# Working with the NuGet registry

You can configure the `dotnet` command-line interface (CLI) to publish NuGet packages to GitHub Packages and to use packages stored on GitHub Packages as dependencies in a .NET project.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server 3.0 or higher, and GitHub AE.

<br>GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access registries that support granular permissions, because these accounts are billed by repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## Authenticating to GitHub Packages

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token to authenticate to GitHub Packages or the GitHub API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:
- `GITHUB_TOKEN` to publish packages associated with the workflow repository.
- a personal access token with at least `read:packages` scope to install packages associated with other private repositories (which `GITHUB_TOKEN` can't access).

### Authenticating in a GitHub Actions workflow

Use the following command to authenticate to GitHub Packages in a GitHub Actions workflow using the `GITHUB_TOKEN` instead of hardcoding a personal access token in a nuget.config file in the repository:

```shell
dotnet nuget add source --username USERNAME --password ${{ secrets.GITHUB_TOKEN }} --store-password-in-clear-text --name github "https://nuget.pkg.github.com/NAMESPACE/index.json"
```

Replace `NAMESPACE` with the name of the personal account or organization that owns the repository where your packages are hosted.

For more information about `GITHUB_TOKEN` used in GitHub Actions workflows, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)."

### Authenticating with a personal access token

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token to authenticate to GitHub Packages or the GitHub API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:
- `GITHUB_TOKEN` to publish packages associated with the workflow repository.
- a personal access token with at least `read:packages` scope to install packages associated with other private repositories (which `GITHUB_TOKEN` can't access).

You must use a personal access token with the appropriate scopes to publish and install packages in GitHub Packages. For more information, see "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)."

To authenticate to GitHub Packages with the `dotnet` command-line interface (CLI), create a _nuget.config_ file in your project directory specifying GitHub Packages as a source under `packageSources` for the `dotnet` CLI client.

You must replace:
- `USERNAME` with the name of your personal account on GitHub.
- `TOKEN` with your personal access token.
- `NAMESPACE` with the name of the personal account or organization that owns the repository where your packages are hosted.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/NAMESPACE/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```

## Publishing a package

You can publish a package to GitHub Packages by authenticating with a _nuget.config_ file, or by using the `--api-key` command line option with your GitHub personal access token.

### Publishing a package using a GitHub personal access token as your API key

If you don't already have a personal access token to use for your account on GitHub.com, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

1. Create a new project. Replace `PROJECT_NAME` with the name you'd like to give the project.

   ```shell
   dotnet new console --name PROJECT_NAME
   ```

1. Package the project.

   ```shell
   dotnet pack --configuration Release
   ```

1. Publish the package using your personal access token as the API key. Replace `PROJECT_NAME` with the name of the project, `1.0.0` with the version number of the package, and `YOUR_GITHUB_PAT` with your personal access token.

   ```shell
   dotnet nuget push "bin/Release/PROJECT_NAME.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
   ```

After you publish a package, you can view the package on GitHub. For more information, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages)."

### Publishing a package using a _nuget.config_ file

When publishing, the `OWNER` of the repository specified in your _.csproj_ file must match the `NAMESPACE` that you use in your _nuget.config_ authentication file. Specify or increment the version number in your _.csproj_ file, then use the `dotnet pack` command to create a _.nuspec_ file for that version. For more information on creating your package, see "[Create and publish a package](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" in the Microsoft documentation.

1. Authenticate to GitHub Packages. For more information, see "[Authenticating to GitHub Packages](#authenticating-to-github-packages)."
1. Create a new project. Replace `PROJECT_NAME` with the name you'd like to give the project.

   ```shell
   dotnet new console --name PROJECT_NAME
   ```

1. Add your project's specific information to your project's file, which ends in _.csproj_.  Make sure to replace:

   - `1.0.0` with the version number of the package.
   - `OWNER` with the name of the personal account or organization that owns the repository to which you want to publish your package.
   - `REPOSITORY` with the name of the repository to which you want to connect your package.

   ``` xml
   <Project Sdk="Microsoft.NET.Sdk">

     <PropertyGroup>
       <OutputType>Exe</OutputType>
       <TargetFramework>netcoreapp3.0</TargetFramework>
       <PackageId>PROJECT_NAME</PackageId>
       <Version>1.0.0</Version>
       <Authors>AUTHORS</Authors>
       <Company>COMPANY_NAME</Company>
       <PackageDescription>PACKAGE_DESCRIPTION</PackageDescription>
       <RepositoryUrl>https://github.com/OWNER/REPOSITORY</RepositoryUrl>
     </PropertyGroup>

   </Project>
   ```

1. Package the project.

   ```shell
   dotnet pack --configuration Release
   ```

1. Publish the package using the `key` you specified in the _nuget.config_ file. Replace `PROJECT_NAME` with the name of the project, and replace `1.0.0` with the version number of the package.

   ```shell
   dotnet nuget push "bin/Release/PROJECT_NAME.1.0.0.nupkg" --source "github"
   ```

After you publish a package, you can view the package on GitHub. For more information, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages)."

## Publishing multiple packages to the same repository

To connect multiple packages to the same repository, use the same GitHub repository URL in the `RepositoryURL` fields in all _.csproj_ project files. GitHub matches the repository based on that field.

The following example publishes the projects MY_APP and MY_OTHER_APP to the same repository:

``` xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>MY_APP</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds a singing Octocat!</PackageDescription>
    <RepositoryUrl>https://github.com/my-org/my-repo</RepositoryUrl>
  </PropertyGroup>

</Project>
```

``` xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>MY_OTHER_APP</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds a dancing Octocat!</PackageDescription>
    <RepositoryUrl>https://github.com/my-org/my-repo</RepositoryUrl>
  </PropertyGroup>

</Project>
```

## Installing a package

Using packages from GitHub in your project is similar to using packages from _nuget.org_. Add your package dependencies to your _.csproj_ file, specifying the package name and version. For more information on using a _.csproj_ file in your project, see "[Working with NuGet packages](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)" in the Microsoft documentation.

1. Authenticate to GitHub Packages. For more information, see "[Authenticating to GitHub Packages](#authenticating-to-github-packages)."

1. To use a package, add `ItemGroup` and configure the `PackageReference` field in the _.csproj_ project file. Replace the `PACKAGE_NAME` value in `Include="PACKAGE_NAME"` with your package dependency, and replace the `X.X.X` value in `Version="X.X.X"` with the version of the package you want to use:

   ``` xml
   <Project Sdk="Microsoft.NET.Sdk">

     <PropertyGroup>
       <OutputType>Exe</OutputType>
       <TargetFramework>netcoreapp3.0</TargetFramework>
       <PackageId>My-app</PackageId>
       <Version>1.0.0</Version>
      <Authors>Octocat</Authors>
       <Company>GitHub</Company>
      <PackageDescription>This package adds an Octocat!</PackageDescription>
       <RepositoryUrl>https://github.com/OWNER/REPOSITORY</RepositoryUrl>
     </PropertyGroup>

     <ItemGroup>
       <PackageReference Include="PACKAGE_NAME" Version="X.X.X" />
     </ItemGroup>

   </Project>
   ```

1. Install the packages with the `restore` command.

   ```shell
   dotnet restore
   ```

## Troubleshooting

Your NuGet package may fail to push if the `RepositoryUrl` in _.csproj_ is not set to the expected repository.

If you're using a nuspec file, ensure that it has a `repository` element with the required `type` and `url` attributes.

If you're using a `GITHUB_TOKEN` to authenticate to a GitHub Packages registry within a GitHub Actions workflow, the token cannot access private repository-based packages in a different repository other than where the workflow is running in. To access packages associated with other repositories, instead generate a personal access token with the `read:packages` scope and pass this token in as a secret.

## Further reading

- "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)"
