# Monitoring and troubleshooting self-hosted runners

You can monitor your self-hosted runners to view their activity and diagnose common issues.

## Checking the status of a self-hosted runner

A self-hosted runner can be located in either your repository, organization, or enterprise account settings on GitHub. To manage a self-hosted runner, you must have the following permissions, depending on where the self-hosted runner was added:
- **User repository**: You must be the repository owner.
- **Organization**: You must be an organization owner.
- **Organization repository**: You must be an organization owner, or have admin access to the repository.

1. In your organization or repository, navigate to the main page and click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-gear" aria-label="The Settings gear" role="img"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg> **Settings**.
1. In the left sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-play" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg> **Actions**, then click **Runners**.
1. Under "Runners", you can view a list of registered runners, including the runner's name, labels, and status.

    The status can be one of the following:

    - **Idle**: The runner is connected to GitHub and is ready to execute jobs.
    - **Active**: The runner is currently executing a job.
    - **Offline**: The runner is not connected to GitHub. This could be because the machine is offline, the self-hosted runner application is not running on the machine, or the self-hosted runner application cannot communicate with GitHub.

## Troubleshooting network connectivity

### Checking self-hosted runner network connectivity

You can use the self-hosted runner application's `run` script with the `--check` parameter to check that a self-hosted runner can access all required network services on GitHub.com.

In addition to `--check`, you must provide two arguments to the script:

- `--url` with the URL to your GitHub repository, organization, or enterprise. For example, `--url https://github.com/octo-org/octo-repo`.
- `--pat` with the value of a personal access token, which must have the `workflow` scope. For example, `--pat ghp_abcd1234`. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

For example:

<div class="ghd-tool mac">

```shell
./run.sh --check --url URL --pat ghp_abcd1234
```

</div>
<div class="ghd-tool linux">

```shell
./run.sh --check --url URL --pat ghp_abcd1234
```

</div>
<div class="ghd-tool windows">

```shell
run.cmd --check --url https://github.com/YOUR-ORG/YOUR-REPO --pat GHP_ABCD1234
```

</div>

The script tests each service, and outputs either a `PASS` or `FAIL` for each one. If you have any failing checks, you can see more details on the problem in the log file for the check. The log files are located in the `_diag` directory where you installed the runner application, and the path of the log file for each check is shown in the console output of the script.

If you have any failing checks, you should also verify that your self-hosted runner machine meets all the communication requirements. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#communication-requirements)."

### Disabling TLS certificate verification

By default, the self-hosted runner application verifies the TLS certificate for GitHub.  If you encounter network problems, you may wish to disable TLS certificate verification for testing purposes.

To disable TLS certification verification in the self-hosted runner application, set the `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` environment variable to `1` before configuring and running the self-hosted runner application.

<div class="ghd-tool linux">

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

</div>
<div class="ghd-tool mac">

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

</div>
<div class="ghd-tool windows">

```powershell
[Environment]::SetEnvironmentVariable('GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY', '1')
./config.cmd --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

</div>

<div class="ghd-spotlight ghd-spotlight-warning border rounded-1 my-3 p-3 f5 color-border-danger-emphasis color-bg-danger">

**Warning**: Disabling TLS verification is not recommended since TLS provides privacy and data integrity between the self-hosted runner application and GitHub. We recommend that you install the GitHub certificate in the operating system certificate store for your self-hosted runner. For guidance on how to install the GitHub certificate, check with your operating system vendor.

</div>

## Reviewing the self-hosted runner application log files

You can monitor the status of the self-hosted runner application and its activities. Log files are kept in the `_diag` directory where you installed the runner application, and a new log is generated each time the application is started. The filename begins with \_Runner__, and is followed by a UTC timestamp of when the application was started.

For detailed logs on workflow job executions, see the next section describing the \_Worker__ files.

## Reviewing a job's log file

The self-hosted runner application creates a detailed log file for each job that it processes. These files are stored in the `_diag` directory where you installed the runner application, and the filename begins with \_Worker__.

<div class="ghd-tool linux">

## Using journalctl to check the self-hosted runner application service

For Linux-based self-hosted runners running the application using a service, you can use `journalctl` to monitor their real-time activity. The default systemd-based service uses the following naming convention: `actions.runner.<org>-<repo>.<runnerName>.service`. This name is truncated if it exceeds 80 characters, so the preferred way of finding the service's name is by checking the _.service_ file. For example:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

If this fails due to the service being installed elsewhere, you can find the service name in the list of running services. For example, on most Linux systems you can use the `systemctl` command:

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

You can use `journalctl` to monitor the real-time activity of the self-hosted runner:

```shell
sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

In this example output, you can see `runner01` start, receive a job named `testAction`, and then display the resulting status:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

To view the `systemd` configuration, you can locate the service file here: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
If you want to customize the self-hosted runner application service, do not directly modify this file. Follow the instructions described in "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)."

</div>

<div class="ghd-tool mac">

## Using `launchd` to check the self-hosted runner application service

For macOS-based self-hosted runners running the application as a service, you can use `launchctl` to monitor their real-time activity. The default launchd-based service uses the following naming convention: `actions.runner.<org>-<repo>.<runnerName>`. This name is truncated if it exceeds 80 characters, so the preferred way of finding the service's name is by checking the _.service_ file in the runner directory:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

The `svc.sh` script uses `launchctl` to check whether the application is running. For example:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

The resulting output includes the process ID and the name of the application’s `launchd` service.

To view the `launchd` configuration, you can locate the service file here: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
If you want to customize the self-hosted runner application service, do not directly modify this file. Follow the instructions described in "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)."

</div>

<div class="ghd-tool windows">

## Using PowerShell to check the self-hosted runner application service

For Windows-based self-hosted runners running the application as a service, you can use PowerShell to monitor their real-time activity. The service uses the naming convention `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. You can also find the service's name by checking the _.service_ file in the runner directory:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

You can view the status of the runner in the Windows _Services_ application (`services.msc`). You can also use PowerShell to check whether the service is running:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

You can use PowerShell to check the recent activity of the self-hosted runner. In this example output, you can see the application start, receive a job named `testAction`, and then display the resulting status:

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

</div>

## Monitoring the automatic update process

We recommend that you regularly check the automatic update process, as the self-hosted runner will not be able to process jobs if it falls below a certain version threshold. The self-hosted runner application automatically updates itself, but note that this process does not include any updates to the operating system or other software; you will need to separately manage these updates.

You can view the update activities in the \_Runner__ log files. For example:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

In addition, you can find more information in the _SelfUpdate_ log files located in the `_diag` directory where you installed the runner application.

<div class="ghd-tool linux">

## Troubleshooting containers in self-hosted runners

### Checking that Docker is installed

If your jobs require containers, then the self-hosted runner must be Linux-based and needs to have Docker installed. Check that your self-hosted runner has Docker installed and that the service is running.

You can use `systemctl` to check the service status:

```shell
$ sudo systemctl is-active docker.service
active
```

If Docker is not installed, then dependent actions will fail with the following errors:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Checking the Docker permissions

If your job fails with the following error:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Check that the self-hosted runner's service account has permission to use the Docker service. You can identify this account by checking the configuration of the self-hosted runner in `systemd`. For example:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

</div>

### Checking which Docker engine is installed on the runner

If your build fails with the following error:

```shell
Error: Input required and not supplied: java-version
```

Check which Docker engine is installed on your self-hosted runner. To pass the inputs of an action into the Docker container, the runner uses environment variables that might contain dashes as part of their names. The action may not able to get the inputs if the Docker engine is not a binary executable, but is instead a shell wrapper or a link (for example, a Docker engine installed on Linux using `snap`). To address this error, configure your self-hosted runner to use a different Docker engine.

To check if your Docker engine was installed using `snap`, use the `which` command. In the following example, the Docker engine was installed using `snap`:

```shell
$ which docker
/snap/bin/docker
```
