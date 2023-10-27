# Supported operating systems for GitHub Desktop

You can use GitHub Desktop on any supported operating system.

## About supported operating systems

The following operating systems are supported for GitHub Desktop.
- macOS 10.13 or later
- Windows 10 64-bit or later. You must have a 64-bit operating system to run GitHub Desktop.

## Troubleshooting problems on macOS

If you're encountering problems using GitHub Desktop on macOS, here are resolutions to try. For more information, see [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The username or passphrase you entered is not correct` error after signing into your account

This error can occur when GitHub Desktop can't access your stored credentials on Keychain.

To troubleshoot this error, follow these steps.

1. Open the "Keychain Access" app.
1. In the left sidebar, in the list of keychains, right-click **login** and then click **Lock Keychain "login"**.
1. Right-click **login** and click **Unlock Keychain "login"**. Follow any onscreen prompts to finish unlocking the Keychain "login."
1. Re-authenticate your account on GitHub or GitHub Enterprise.

### `Could not create temporary directory: Permission denied` error after checking for updates

This error can be caused by missing permissions for the `~/Library/Caches/com.github.GitHubClient.ShipIt` directory. GitHub Desktop uses this directory to create and unpack temporary files as part of updating the application.

To troubleshoot this error, follow these steps.

1. Close GitHub Desktop.
1. Open "Finder" and navigate to `~/Library/Caches/`.
1. Right-click `com.github.GitHubClient.ShipIt` and then click **Get Info**.
1. Click the arrow to the left of "Sharing & Permissions."
1. If the Privilege to the right of your user account does not say "Read & Write," click the text and then click **Read & Write**.
   ![Screenshot of the info window on a Mac. Under "Sharing and permissions", a context menu is open, with "Read & Write" marked by a checkmark.](/assets/images/help/desktop/mac-adjust-permissions.png)
1. Open GitHub Desktop and check for updates.

## Troubleshooting problems on Windows

If you're encountering problems using GitHub Desktop on Windows, here are resolutions to try. For more information, see [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The revocation function was unable to check revocation for the certificate.` error

This error can occur if you are using GitHub Desktop on a corporate network that blocks Windows from checking the revocation status of a certificate.

To troubleshoot, contact your system administrator.

### `git clone failed` error while cloning a repository configured with Folder Redirection

GitHub Desktop does not support repositories configured with Folder Redirection.

### `cygheap base mismatch detected` error

This error can occur when Mandatory ASLR is enabled. Enabling Mandatory ASLR affects the MSYS2 core library, which GitHub Desktop relies upon to emulate process forking.

To troubleshoot this error, either disable Mandatory ASLR or explicitly allow all executables under `<Git>\usr\bin` which depend on MSYS2.

### `This operating system is no longer supported. Software updates have been disabled` notification

This notification is shown if you are running a version of Windows that is no longer compatible with GitHub Desktop. GitHub Desktop supports Windows 10 64-bit or later. If you are running a supported Windows operating system and are seeing this notification, this may be because compatibility mode has been enabled for GitHub Desktop. To check if compatibility mode is enabled, follow these steps.

1. Open the Windows **Start Menu**.
1. Search for "GitHub Desktop".
1. Select and hold (or right-click) **GitHub Desktop** and click **Open file location**.
1. Select and hold (or right-click) the GitHub Desktop shortcut and click **Properties**.
1. Select the **Compatibility** tab.
1. In the "Compatibility mode" section, ensure that the **Run this program in compatibility mode** checkbox is deselected.
