# Sudo mode

To confirm access to your account before you perform a potentially sensitive action, GitHub.com prompts for authentication.

## About sudo mode

To maintain the security of your account when you perform a potentially sensitive action on GitHub.com, you must authenticate even though you're already signed in. For example, GitHub considers the following actions sensitive because each action could allow a new person or system to access your account.

- Modification of an associated email address
- Authorization of a third-party application
- Addition of a new SSH key
- Creation of a PAT or application

After you authenticate to perform a sensitive action, your session is temporarily in "sudo mode." In sudo mode, you can perform sensitive actions without authentication. GitHub has a two-hour session timeout period before prompting you for authentication again. During this time, any sensitive action that you perform will reset the timer.

"sudo" is a reference to a program on Unix systems, where the name is short for "**su**peruser **do**." For more information, see [sudo](https://wikipedia.org/wiki/Sudo) on Wikipedia.

## Confirming access for sudo mode

To confirm access for sudo mode, you must authenticate with your password.

When prompted to authenticate for sudo mode, type your password, then click **Confirm**.
