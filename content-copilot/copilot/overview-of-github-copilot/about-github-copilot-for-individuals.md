# About GitHub Copilot for Individuals

GitHub Copilot can help you code by offering autocomplete-style suggestions. You can learn how GitHub Copilot works, and what to consider while using GitHub Copilot.

## About GitHub Copilot

GitHub Copilot is an AI pair programmer that offers autocomplete-style suggestions as you code. You can receive suggestions from GitHub Copilot either by starting to write the code you want to use, or by writing a natural language comment describing what you want the code to do. GitHub Copilot analyzes the context in the file you are editing, as well as related files, and offers suggestions from within your text editor. GitHub Copilot is powered by a generative AI model developed by GitHub, OpenAI, and Microsoft.

GitHub Copilot is trained on all languages that appear in public repositories. For each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language. For example, JavaScript is well-represented in public repositories and is one of GitHub Copilot's best supported languages. Languages with less representation in public repositories may produce fewer or less robust suggestions.

GitHub Copilot is available as an extension in Visual Studio Code, Visual Studio, Vim, Neovim, the JetBrains suite of IDEs, and Azure Data Studio. For more information on using GitHub Copilot in Visual Studio Code, Visual Studio, Vim, Neovim, and JetBrains, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot)." For more information on using GitHub Copilot in Azure Data Studio, see [GitHub Copilot extension](https://learn.microsoft.com/en-us/sql/azure-data-studio/extensions/github-copilot-extension?view=sql-server-ver16) in Microsoft Learn.

### Understanding the differences between Copilot for Individuals and Copilot for Business

<div class="ghd-tool rowheaders">

| | Copilot for Individuals | Copilot for Business |
|--- | --- | --- |
| Pricing | $10 USD per month<br>$100 USD per year | $19 USD per user per month |
| Types of GitHub accounts | Personal accounts | Organization or enterprise accounts |
| Telemetry | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-label="Not included" role="img"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> |
| Blocks suggestions matching public code | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> |
| Plugs right into your editor | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>                          | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>                                  |
| Offers multi-line function suggestions  | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>                          | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>                                  |
| Organization-wide policy management     | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-label="Not included" role="img"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg>                          | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>                                  |
| Audit logs  | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-label="Not included" role="img"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg> |<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> |
| HTTP proxy support via custom certificates    | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-x" aria-label="Not included" role="img"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg>                          | <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-check" aria-label="Included" role="img"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>                                  |

</div>

For more information about proxy support with custom certificates, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot)".

## Using GitHub Copilot

You can see real-world examples of GitHub Copilot in action. For more information, see the [GitHub Copilot](https://copilot.github.com/) website.

GitHub Copilot offers suggestions from a model that OpenAI built from billions of lines of open source code. As a result, the training set for GitHub Copilot may contain insecure coding patterns, bugs, or references to outdated APIs or idioms. When GitHub Copilot produces suggestions based on this training data, those suggestions may also contain undesirable patterns.

You are responsible for ensuring the security and quality of your code. We recommend you take the same precautions when using code generated by GitHub Copilot that you would when using any code you didn't write yourself. These precautions include rigorous testing, IP scanning, and tracking for security vulnerabilities. GitHub provides a number of features to help you monitor and improve code quality, such as GitHub Actions, Dependabot, CodeQL and code scanning. All these features are free to use in public repositories. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)" and "[AUTOTITLE](/code-security/getting-started/github-security-features)."

GitHub Copilot uses filters to block offensive words in the prompts and avoid producing suggestions in sensitive contexts. We are committed to constantly improving the filter system to more intelligently detect and remove offensive suggestions generated by GitHub Copilot, including biased, discriminatory, or abusive outputs. If you see an offensive suggestion generated by GitHub Copilot, please report the suggestion directly to copilot-safety@github.com so that we can improve our safeguards.

## About billing for GitHub Copilot

GitHub Copilot is a paid feature, requiring a monthly or yearly subscription. GitHub Copilot subscriptions can be paid for and managed through a personal account on GitHub.com with Copilot for Individuals, or paid for and managed centrally through  an organization account  with GitHub Copilot for Business.

Verified students, teachers, and maintainers of popular open source projects on GitHub are eligible to use Copilot for Individuals for free. If you meet the criteria for a free Copilot for Individuals subscription, you will be automatically notified when you visit the GitHub Copilot subscription page. If you do not meet the criteria for a free Copilot for Individuals subscription, you will be offered a 30-day free trial, after which a paid subscription is required for continued use. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

## About the license for the GitHub Copilot plugin in JetBrains IDEs

GitHub, Inc. is the licensor of the JetBrains plugin. The end user license agreement for this plugin is the [GitHub Terms for Additional Products and Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) and use of this plugin is subject to those terms. JetBrains has no responsibility or liability in connection with the plugin or such agreement. By using the plugin, you agree to the foregoing terms.

## About privacy for GitHub Copilot for Individuals

You have the ability to manage and make choices regarding the collection, retention, and processing of your data, allowing you to maintain control over your privacy while using GitHub Copilot for Individuals.

### What data does GitHub Copilot for Individuals collect?

GitHub Copilot for Individuals relies on file content and additional data to work. It collects data to provide the service, some of which is then retained for further analysis and product improvements. GitHub Copilot processes the following data for individual users.

### User Engagement Data

When you use GitHub Copilot it will collect usage information about events generated when interacting with the IDE or editor. These events include user edit actions like if Suggestions are accepted or dismissed, and error and general usage data to identify metrics like latency and features engagement. This information may include personal data, such as pseudonymous identifiers.

#### Prompts

A Prompt is the bundle of contextual information the GitHub Copilot extension sends when a user is working on a file and pauses typing, or when the user opens the Copilot pane. Prompts are retained unless you have disabled code snippet collection in your settings.

#### Suggestions

A Suggestion is one or more lines of proposed text returned to the GitHub Copilot extension after a Prompt is received and processed by the AI-model. Suggestions are retained unless you disable code snippet collection in your settings.

### How is the data in GitHub Copilot for Individuals used and shared?

User Engagement Data, Prompts and Suggestions are used by GitHub and Microsoft to improve GitHub Copilot and related services and to conduct product and academic research.

- Enhancing GitHub Copilot: The data collected is utilized to improve GitHub Copilot by evaluating different strategies for processing and predicting suggestions that users may find valuable.
- Developing related developer products and services: The insights gained from the data help in the development and improvement of other developer tools and services offered by GitHub and Microsoft.
- Detecting abuse and policy violations: The data is examined to investigate and identify any potential misuse or violation of the Acceptable Use Policies associated with GitHub Copilot.
- Conducting experiments and research: The data is used for conducting experiments and research related to developers and their utilization of developer tools and services. This aids in gaining valuable insights into user behavior and preferences.
- Evaluating GitHub Copilot: The impact of GitHub Copilot on users is assessed by measuring its positive effects and benefits.
- Improving code generation models: The collected data is employed to refine and enhance the underlying models responsible for generating code. This is achieved by utilizing both positive and negative examples.
- Fine-tuning ranking and sorting algorithms: The data helps in the optimization and improvement of algorithms used for ranking and sorting suggestions, thereby enhancing the overall user experience.

### How is the transmitted Code Snippets data protected?

To ensure the protection of sensitive data such as user edit actions, source code snippets, and repository URLs/file paths, several protective measures are implemented. These measures include:

- Encryption of transmitted data: All data is encrypted both during transit and while at rest, ensuring that it remains secure and inaccessible to unauthorized parties.
- Strict access control: Access to the data is tightly regulated and limited to specific individuals, including:
    - Named GitHub personnel working on the GitHub Copilot team or the GitHub platform health team.
    - Microsoft personnel involved with the GitHub Copilot team.
- Role-based access controls and multi-factor authentication: People who require access to code snippet data must adhere to role-based access controls. Additionally, multi-factor authentication is implemented to add an extra layer of security, ensuring that only authorized individuals can access the data.

### How can users of GitHub Copilot for Individuals control use of their Code Snippets Data?

GitHub Copilot gives you choices about how it uses the data it collects.

- User Engagement Data: User Engagement Data, including pseudonymous identifiers and general usage data, is necessary for the proper functioning of GitHub Copilot. This data is collected, processed, and shared with Microsoft while you use GitHub Copilot.
- Retention of Prompts and Suggestions: You have the option to decide whether Prompts and Suggestions are retained by GitHub and shared with Microsoft. These preferences can be adjusted in the [GitHub Copilot settings](https://github.com/settings/copilot).
- Requesting Deletion: If you wish to delete Prompts and Suggestions associated with your GitHub identity, contact us through the [GitHub Support portal](https://support.github.com).

### Will my private code be shared with other users?

No. We follow responsible practices in accordance with our [Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement) to ensure that your code snippets will not be used as suggested code for other users of GitHub Copilot.

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"
- "[GitHub Copilot FAQ](https://github.com/features/copilot#faq)"
