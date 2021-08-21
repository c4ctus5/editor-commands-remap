# Editor Commands Remap : Obsidian Plugin

This plugin for [Obsidian](https://obsidian.md) let's you map hotkeys to editor commands available in the API.
Available commands are :
- `goUp` : move cursor up a line
- `goDown` : move cursor down a line
- `goLeft` : move cursor left
- `goRight` : move cursor right
- `goStart` : move cursor to the start of the note
- `goEnd` : move cursor at the end of the note
- `indentMore` : indent current or selected lines
- `indentLess` : unindent current of selected lines
- `newlineAndIndent` : create a new line and indent cursor
- `swapLineUp` : swap the current line and the line above it
- `swapLineDown` : swap the current line and the line below it
- `deleteLine` : delete the current line
- `toggleFold` : fold or unfold at current position
- `foldAll` : fold everything
- `unfoldAll` : unfold everyting

Note : swap commands are already available in Obsidian, but for the sake of completness, I added them here.

The original idea was to replicate the behaviour of the [Tabout extension for VSCode](https://github.com/albertromkes/tabout) by [Albert Romkes](https://github.com/albertromkes), but mapping `Tab` as a hotkey is not possible in Obsidian. 
While studying the Obsidian API, I discovered the editor commands and thought it would be a good idea to be able to assign hotkeys to them.
Thus, to *kinda* replicate the Tabout behaviour, just set an hotkey to the 'goRight' command.

# How to use ?
Go to `Settings > Hotkeys` and search for `Editor Commands Remap` to map hotkeys.
![settings image](./img/settings.png)

These commands are only available when an editor is opened.