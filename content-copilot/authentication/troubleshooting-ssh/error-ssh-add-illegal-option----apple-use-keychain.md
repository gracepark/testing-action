# Error: ssh-add: illegal option -- apple-use-keychain

This error means your version of `ssh-add` does not support macOS keychain integration, which allows you to store your passphrase in the keychain.

The `--apple-use-keychain` option is in Apple's standard version of `ssh-add`, which stores the passphrase in your keychain for you when you add an ssh key to the ssh-agent. If you have installed a different version of `ssh-add`, it may lack support for `--apple-use-keychain`.

## Solving the issue

To add your SSH private key to the ssh-agent, you can specify the path to the Apple version of `ssh-add`:

```shell
/usr/bin/ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Notes:**

- The `--apple-use-keychain` option is in Apple's standard version of `ssh-add`. In MacOS versions prior to Monterey (12.0), use `-K` instead of `--apple-use-keychain`.
- If you created your key with a different name, or if you are adding an existing key that has a different name, replace _id_ed25519_ in the command with the name of your private key file.

</div>

## Further reading

- "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Linux man page for ssh-add](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- To view Apple's man page for SSH-ADD, run `man ssh-add` in Terminal
