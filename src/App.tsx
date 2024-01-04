import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './App.css';

const markdownTemplate = `
# This is a heading

## This is a sub-heading

### And here are some other markdown options:

Here is a random code snippet: \`<div>Some code goes here</div>\`

To create one you surround your code with backticks.

This is multi-line code:

\`\`\`
function anotherCodeExample(firstPar, secondPar) {
	if (firstPar === lastPar) {
		return "The arguments you have entered are of the same type and value.";
	} else {
		return "The arguments you have entered are not of the same type and value";
	}
}
\`\`\`

To create one you surround your multi-line code with three backticks.

You can also make text **bold** by surrounding it with double asterisk.

You can make text _italic_ by surrounding it with underscore.

You can mix and match **_bold-italic_**.

You can create a blockquote by adding greater than sing in front of the text.

> Blockquote text here 

You can also create links like this: [Visit My GitHub Page](https://github.com/nedoratic).

You can create some lists by using dashes and indentation like this:

- List name
	- List item
	- List item
	- List item

You can also create ordered lists by using number one followed by dot instead of using dashes like this:

1. List item one
1. List item two
1. List item three

You can also separate the text form a single line into a new row<br>like this.

You can add images like this:

![Alternative text for the image](https://res.cloudinary.com/practicaldev/image/fetch/s--U_TEB7k7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/5zhubbpov3m3ly9a1t9c.png)

To find out more you can visit this website [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)

Have fun using this markdown app.
`;

function App() {
	const [markdownText, setMarkdownText] = useState<string>(markdownTemplate);

	return (
		<>
			<div className="app">
				<h1 className="app__title">Markdown Previewer App</h1>
				<div className="app__frames">
					<div className="app__frame">
						<h2 className="app__frame__title">Markdown Editor</h2>
						<textarea className="app__windows__editor" name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
					</div>
					<div className="app__frame">
						<h2 className="app__frame__title">Markdown Previewer</h2>
						<div className="app__windows__previewer" id="preview">
							<ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownText}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
