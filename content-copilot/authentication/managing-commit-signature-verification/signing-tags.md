# Signing tags

You can sign tags locally using GPG or S/MIME.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** [GitHub Desktop](https://desktop.github.com/) only supports commit signing if your Git client is configured to sign commits by default.

</div>

1. To sign a tag, add `-s` to your `git tag` command.

   ```shell
   $ git tag -s MYTAG
   # Creates a signed tag
   ```

1. Verify your signed tag by running `git tag -v [tag-name]`.

   ```shell
   $ git tag -v MYTAG
   # Verifies the signed tag
   ```

## Further reading

- "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
