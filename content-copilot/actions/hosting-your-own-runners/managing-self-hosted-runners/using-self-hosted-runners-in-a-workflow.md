# Using self-hosted runners in a workflow

To use self-hosted runners in a workflow, you can use labels to specify the runner for a job.

You can target self-hosted runners for use in a workflow based on the labels assigned to the runners.

## About self-hosted runner labels

Labels allow you to send workflow jobs to specific types of self-hosted runners, based on their shared characteristics. For example, if your job requires a particular hardware component or software package, you can assign a custom label to a runner and then configure your job to only execute on runners with that label.

To specify a self-hosted runner for your job, configure `runs-on` in your workflow file with self-hosted runner labels.

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, we recommend providing an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed. When you specify an array of labels, jobs will be queued on runners that have all the labels that you specify.

Although the `self-hosted` label is not required, we strongly recommend specifying it when using self-hosted runners to ensure that your job does not unintentionally specify any current or future GitHub-hosted runners.

For information on creating custom and default labels, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)."

## Using default labels to route jobs

A self-hosted runner automatically receives certain labels when it is added to GitHub Actions. These are used to indicate its operating system and hardware platform:

- `self-hosted`: Default label applied to all self-hosted runners.
- `linux`, `windows`, or `macOS`: Applied depending on operating system.
- `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

You can use your workflow's YAML to send jobs to a combination of these labels. In this example, a self-hosted runner that matches all three labels will be eligible to run the job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - Run this job on a self-hosted runner.
- `linux` - Only use a Linux-based runner.
- `ARM64` - Only use a runner based on ARM64 hardware.

The default labels are fixed and cannot be changed or removed. Consider using custom labels if you need more control over job routing.

## Using custom labels to route jobs

You can create custom labels and assign them to your self-hosted runners at any time. Custom labels let you send jobs to particular types of self-hosted runners, based on how they're labeled.

For example, if you have a job that requires a specific type of graphics hardware, you can create a custom label called `gpu` and assign it to the runners that have the hardware installed. A self-hosted runner that matches all the assigned labels will then be eligible to run the job.

This example shows a job that combines default and custom labels:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - Run this job on a self-hosted runner.
- `linux` - Only use a Linux-based runner.
- `x64` - Only use a runner based on x64 hardware.
- `gpu` - This custom label has been manually assigned to self-hosted runners with the GPU hardware installed.

These labels operate cumulatively, so a self-hosted runner must have all four labels to be eligible to process the job.

## Routing precedence for self-hosted runners

When routing a job to a self-hosted runner, GitHub looks for a runner that matches the job's `runs-on` labels:

- If GitHub finds an online and idle runner that matches the job's `runs-on` labels, the job is then assigned and sent to the runner.
  - If the runner doesn't pick up the assigned job within 60 seconds, the job is re-queued so that a new runner can accept it.
- If GitHub doesn't find an online and idle runner that matches the job's `runs-on` labels , then the job will remain queued until a runner comes online.
- If the job remains queued for more than 24 hours, the job will fail.
