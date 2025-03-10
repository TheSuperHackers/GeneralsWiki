# ZeroSyntax VSCode Extension

Working with INI files can be a bit of a pain, because of the custom syntax defined by the developers. If a single
line contains a syntax error, the entire game can crash. Because of this, an extension for Visual Studio Code was
created by @ViTeXFTW to help with linting INI files. This extension is called ZeroSyntax.

## Features

The ZeroSyntax extension pack comes with 4 main features:

1. Syntax highlighting for INI files.  
This changes how VSCode displays the INI files, making it easier to read and understand the contents.

2. Formatting for INI files.  
When working with older files or when expirmenting, INI files can be come messy. This feature will clean up the file
and make correct indentation based on the indentation settings in VSCode.

3. Linting for INI files.  
This feature will check the INI file for syntax errors and highlight them in the editor. This can help prevent crashes
when working with INI files.

4. Code Completion for INI files.  
This feature will provide suggestions for tags and values when working with INI files. This can help speed up
development and prevent typos.

## Installation

Instaltion is super easy, and can be done stright from the editor.  
Use this link: [ZeroSyntax Pack](vscode:extension/vitexftw.zs-pack) or one of the following methods:  

### Visual Studio Code

1. Go to the extensions tab in the sidebar.
2. Search for `ZeroSyntax`.
3. Select the desired extension and click install.

### Visual Studio Code Marketplace

1. Go to the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ViTeXFTW.zs-pack).
2. Click on the install button.
3. Press the `Open in Visual Studio Code` button.
4. Select the desired extension and click install.

### Visual Studio Extension

**Comming Soon...**

> [!NOTE]  
> You might need to reload the editor after installing the extension for it to take effect.

## How to use

### Highlighting

The highlighter will automatically start working once the extension is installed. You can open up an INI file and see
the syntax highlighting in action.

### Linting

Similarly to the highlighting, the linting will automatically start working once the extension is installed. If there
are any syntax errors in the file, they will be highlighted in the editor.

### Formatting

If you want to format the file, you can press `Ctrl + Shift + P` and find the `Format Document` command. This will
clean up the file and make it easier to read.

### Code Completion

When working in an INI file the editor will provide you with suggestions for the next token. This can be Classes
like `Objects`, `Armor`, `Weapons`, etc. or Modules like `Draw`, `Body`, `Behavior`, etc. If an assignment is
expected to have an object as a value, the editor will only suggest objects.
