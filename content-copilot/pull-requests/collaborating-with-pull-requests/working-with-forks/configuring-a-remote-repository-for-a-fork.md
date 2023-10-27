# Configuring a remote repository for a fork

You must configure a remote that points to the upstream repository in Git to [sync changes you make in a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) with the original repository. This also allows you to sync changes made in the original repository with the fork.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
1. List the current configured remote repository for your fork.

   ```shell
   $ git remote -v
   > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
   > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
   ```

1. Specify a new remote _upstream_ repository that will be synced with the fork.

   ```shell
   git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
   ```

1. Verify the new upstream repository you've specified for your fork.

   ```shell
   $ git remote -v
   > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
   > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
   > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
   > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
   ```
