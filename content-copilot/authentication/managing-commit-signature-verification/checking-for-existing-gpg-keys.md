# Checking for existing GPG keys

Before you generate a GPG key, you can check to see if you have any existing GPG keys.

### Supported GPG key algorithms

GitHub supports several GPG key algorithms. If you try to add a key generated with an unsupported algorithm, you may encounter an error.

- RSA
- ElGamal
- DSA
- ECDH
- ECDSA
- EdDSA

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:** GPG does not come installed by default on macOS or Windows. To install GPG command line tools, see [GnuPG's Download page](https://www.gnupg.org/download/).

</div>

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Use the `gpg --list-secret-keys --keyid-format=long` command to list the long form of the GPG keys for which you have both a public and private key. A private key is required for signing commits or tags.

   ```shell copy
   gpg --list-secret-keys --keyid-format=long
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** Some GPG installations on Linux may require you to use `gpg2 --list-keys --keyid-format LONG` to view a list of your existing keys instead. In this case you will also need to configure Git to use `gpg2` by running `git config --global gpg.program gpg2`.

   </div>
1. Check the command output to see if you have a GPG key pair.
    - If there are no GPG key pairs or you don't want to use any that are available for signing commits and tags, then [generate a new GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
    - If there's an existing GPG key pair and you want to use it to sign commits and tags, you can display the public key using the following command, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

      ```shell
      $ gpg --armor --export 3AA5C34371567BD2
      # Prints the GPG key ID, in ASCII armor format
      ```

      You can then [add your GPG key to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"
