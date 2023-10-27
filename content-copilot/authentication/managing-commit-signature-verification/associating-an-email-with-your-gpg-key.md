# Associating an email with your GPG key

Your GPG key must be associated with a GitHub verified email that matches your committer identity.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on GitHub.com, then you can begin signing commits and signing tags.

</div>

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. Use the `gpg --list-secret-keys --keyid-format=long` command to list the long form of the GPG keys for which you have both a public and private key. A private key is required for signing commits or tags.

   ```shell copy
   gpg --list-secret-keys --keyid-format=long
   ```

   <div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

   **Note:** Some GPG installations on Linux may require you to use `gpg2 --list-keys --keyid-format LONG` to view a list of your existing keys instead. In this case you will also need to configure Git to use `gpg2` by running `git config --global gpg.program gpg2`.

   </div>
1. From the list of GPG keys, copy the long form of the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell copy

   $ gpg --list-secret-keys --keyid-format=long
   /Users/hubot/.gnupg/secring.gpg
   ------------------------------------
   sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
   uid                          Hubot <hubot@example.com>
   ssb   4096R/4BB6D45482678BE3 2016-03-10
   ```
1. Enter `gpg --edit-key GPG key ID`, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell
   gpg --edit-key 3AA5C34371567BD2
   ```

1. Enter `gpg> adduid` to add the user ID details.

   ```shell
   gpg> adduid
   ```

1. Follow the prompts to supply your real name, email address, and any comments. You can modify your entries by choosing `N`, `C`, or `E`. 
To keep your email address private, use your GitHub-provided `no-reply` email address.
  For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

   ```shell
   Real Name: OCTOCAT
   Email address: "octocat@github.com"
   Comment: GITHUB-KEY
   Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
   ```

1. Enter `O` to confirm your selections.
1. Enter your key's passphrase.
1. Enter `gpg> save` to save the changes

   ```shell
   gpg> save
   ```

1. Enter `gpg --armor --export GPG key ID`, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell
   $ gpg --armor --export 3AA5C34371567BD2
   # Prints the GPG key, in ASCII armor format
   ```

1. Upload the GPG key by [adding it to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)"
- "[AUTOTITLE](/authentication/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"
