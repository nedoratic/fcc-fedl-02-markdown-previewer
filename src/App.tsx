import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
	const [markdownText, setMarkdownText] = useState<string>('');

	return (
		<>
			<div>
				<h1>Markdown Previewer</h1>
				<div>
					<div id="editor">
						<h2>Editor</h2>
						<textarea name="" id="" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
					</div>
					<div id="preview">
						<h2>Previewer</h2>
						<ReactMarkdown>{markdownText}</ReactMarkdown>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
