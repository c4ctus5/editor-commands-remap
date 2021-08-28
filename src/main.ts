import { Plugin, Editor, EditorCommandName } from 'obsidian';


export default class EditorCommandsRemapPlugin extends Plugin {

	async onload() {

		this.addCommand({
			id: 'go-left',
			name: 'go left',
			editorCallback: editor => editor.exec('goLeft')
		});

		this.addCommand({
			id: 'go-right',
			name: 'go right',
			editorCallback: editor => editor.exec('goRight')
		});

		this.addCommand({
			id: 'go-up',
			name: 'go up',
			editorCallback: editor => editor.exec('goUp')
		});

		this.addCommand({
			id: 'go-down',
			name: 'go down',
			editorCallback: editor => editor.exec('goDown')
		});

		this.addCommand({
			id: 'go-start',
			name: 'go to start',
			editorCallback: editor => editor.exec('goStart')
		});

		this.addCommand({
			id: 'go-end',
			name: 'go to end',
			editorCallback: editor => editor.exec('goEnd')
		});

		this.addCommand({
			id: 'indent-more',
			name: 'indent more',
			editorCallback: editor => editor.exec('indentMore')
		});

		this.addCommand({
			id: 'indent-less',
			name: 'indent less',
			editorCallback: editor => editor.exec('indentLess')
		});

		this.addCommand({
			id: 'new-line-indent',
			name: 'new line and indent',
			editorCallback: editor => editor.exec('newlineAndIndent')
		});

		this.addCommand({
			id: 'swap-line-up',
			name: 'swap line up',
			editorCallback: editor => editor.exec('swapLineUp')
		});

		this.addCommand({
			id: 'swap-line-down',
			name: 'swap line down',
			editorCallback: editor => editor.exec('swapLineDown')
		});

		this.addCommand({
			id: 'delete-line',
			name: 'delete line',
			editorCallback: editor => editor.exec('deleteLine')
		});

		this.addCommand({
			id: 'toggle-fold',
			name: 'toggle fold',
			editorCallback: editor => editor.exec('toggleFold')
		});

		this.addCommand({
			id: 'fold-all',
			name: 'fold all',
			editorCallback: editor => editor.exec('foldAll')
		});

		this.addCommand({
			id: 'unfold-all',
			name: 'unfold all',
			editorCallback: editor => editor.exec('unfoldAll')
		});
	}
}