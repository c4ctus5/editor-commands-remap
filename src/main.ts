import { Plugin, Editor, EditorCommandName } from 'obsidian';


export default class EditorCommandsRemapPlugin extends Plugin {

	async onload() {

		this.addCommand({
			id: 'go-left',
			name: 'go left',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'goLeft')
		});

		this.addCommand({
			id: 'go-right',
			name: 'go right',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'goRight')
		});

		this.addCommand({
			id: 'go-up',
			name: 'go up',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'goUp')
		});

		this.addCommand({
			id: 'go-down',
			name: 'go down',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'goDown')
		});

		this.addCommand({
			id: 'go-start',
			name: 'go to start',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'goStart')
		});

		this.addCommand({
			id: 'go-end',
			name: 'go to end',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'goEnd')
		});

		this.addCommand({
			id: 'indent-more',
			name: 'indent more',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'indentMore')
		});

		this.addCommand({
			id: 'indent-less',
			name: 'indent less',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'indentLess')
		});

		this.addCommand({
			id: 'new-line-indent',
			name: 'new line and indent',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'newlineAndIndent')
		});

		this.addCommand({
			id: 'swap-line-up',
			name: 'swap line up',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'swapLineUp')
		});

		this.addCommand({
			id: 'swap-line-down',
			name: 'swap line down',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'swapLineDown')
		});

		this.addCommand({
			id: 'delete-line',
			name: 'delete line',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'deleteLine')
		});

		this.addCommand({
			id: 'toggle-fold',
			name: 'toggle fold',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'toggleFold')
		});

		this.addCommand({
			id: 'fold-all',
			name: 'fold all',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'foldAll')
		});

		this.addCommand({
			id: 'unfold-all',
			name: 'unfold all',
			editorCallback: (editor, view) => this.execEditorCmd(editor, 'unfoldAll')
		});
	}

	execEditorCmd(editor: Editor, cmd: EditorCommandName) {
		editor.exec(cmd)
	}
}