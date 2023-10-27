# Error: Permission to user/repo denied to user/other-repo

This error means the key you are pushing with is attached to another repository as a deploy key, and does not have access to the repository you are trying to push to.

To fix this, remove the deploy key from the repository, and [add the key to your personal account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) instead.

If the key you are using is intended to be a deploy key, check out [our guide on deploy keys](/authentication/connecting-to-github-with-ssh/managing-deploy-keys) for more details.
