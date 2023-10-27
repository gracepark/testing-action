# Adding a GPG key to your GitHub account

To configure your account on GitHub.com to use your new (or existing) GPG key, you'll also need to add the key to your account.

## About addition of GPG keys to your account

To sign commits associated with your account on GitHub, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)" and "[AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)."

You can add multiple public keys to your account on GitHub. Commits signed by any of the corresponding private keys will show as verified. If you remove a public key, any commits signed by the corresponding private key will no longer show as verified.

### Supported GPG key algorithms

GitHub supports several GPG key algorithms. If you try to add a key generated with an unsupported algorithm, you may encounter an error.

- RSA
- ElGamal
- DSA
- ECDH
- ECDSA
- EdDSA

When verifying a signature, GitHub extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to GitHub. Until a matching GPG key is added to GitHub, it cannot verify your signatures.

## Adding a GPG key

1. In the upper-right corner of any page, click your profile photo, then click **Settings**.

    ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

1. In the "Access" section of the sidebar, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-key" aria-hidden="true"><path d="M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg> SSH and GPG keys**.
1. Next to the "GPG keys" header, click **New GPG key**.
1. In the "Title" field, type a name for your GPG key.
1. In the "Key" field, paste the GPG key you copied when you [generated your GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
1. Click **Add GPG key**.
1. To confirm the action, authenticate to your GitHub account.

## Updating an expired GPG key

When verifying a signature, GitHub checks that the key is not revoked or expired. If your signing key is revoked or expired, GitHub cannot verify your signatures.

If your key is expired, you must [update its expiration](https://www.gnupg.org/gph/en/manual.html#AEN329), export the new key, delete the expired key in your account on GitHub, and add the new key to your account as described above. Your previous commits and tags will show as verified, as long as the key meets all other verification requirements.

If your key is revoked, use the primary key or another key that is not revoked to sign your commits.

If your key is invalid and you don't use another valid key in your key set, but instead generate a new GPG key with a new set of credentials, then your commits made with the revoked or expired key will continue to show as unverified. Also, your new credentials will not be able to re-sign or verify your old commits and tags.

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
