# Creating and highlighting code blocks

Share samples of code with fenced code blocks and enabling syntax highlighting.

## Fenced code blocks

You can create fenced code blocks by placing triple backticks <code>\`\`\`</code> before and after the code block. We recommend placing a blank line before and after code blocks to make the raw formatting easier to read.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Screenshot of rendered GitHub Markdown showing how triple backticks cause a code block to render in raw formatting. The block begins with "function test() {."](/assets/images/help/writing/fenced-code-block-rendered.png)

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Tip:** To preserve your formatting within a list, make sure to indent non-fenced code blocks by eight spaces.

</div>

To display triple backticks in a fenced code block, wrap them inside quadruple backticks.

<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Screenshot of rendered GitHub Markdown showing how quadruple backticks cause triple backticks surrounding a code block to remain visible. The block reads, "Look! You can see my backticks."](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

## Syntax highlighting

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

Syntax highlighting changes the color and style of source code to make it easier to read.

For example, to syntax highlight Ruby code:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

This will display the code block with syntax highlighting:  

![Screenshot of three lines of Ruby code as displayed on GitHub. Elements of the code display in purple, blue, and red type, making the lines more visually scannable.](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

We use [Linguist](https://github.com/github-linguist/linguist) to perform language detection and to select [third-party grammars](https://github.com/github-linguist/linguist/blob/master/vendor/README.md) for syntax highlighting. You can find out which keywords are valid in [the languages YAML file](https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml).

## Further reading

- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)"
