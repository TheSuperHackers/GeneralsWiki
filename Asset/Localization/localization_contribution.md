# Localization Contribution

Thank you for assisting us with this meticulous task. Below are the instructions on how you can help fix or add
localizations.

Sections Included:

1. Checking Submitted Changes
2. Working on Existing Languages
3. Adding a New Localization
4. Testing and Verifying Changes in the Game

## 1. Checking Submitted Changes

1.1 **Create a GitHub account** - [https://github.com/](https://github.com/)

1.2 **Review existing edits**: Here you can find all the language edits used in the game:

- **US**: [United States English](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2535)
- **DE**: [German](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2536)
- **FR**: [French](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2639)
- **ES**: [Spanish](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2538)
- **IT**: [Italian](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2539)
- **BP**: [Brazilian Portuguese](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2542)
- **PL**: [Polish](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2543)

1.2.1 **Arabic & RTL Languages**: Arabic and other Right-to-Left (RTL) languages are currently compiled with an error
when used in the game. This issue will be fixed soon. If you would like to help resolve this issue or test the upcoming
fix, please let us know in the comment section of the
*AR: [Arabic](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2546) localization edit*.
More info in [Adding RTL markers in RTL localization for GameTextCompiler](https://github.com/TheSuperHackers/GeneralsGamePatch/discussions/2659).

1.3 **Leave Comments on Edits**: You can reply to existing comments or review the changes yourself. To do so, click on
the **Files changed** tab under the pull request title. If prompted, press **Load diff** to view the changes (if an
error appears, press *Retry*). You can hover over any change you're interested in and click the plus sign at the start
of the line to leave a comment.

1.4 **Provide Full Text in Comments**: When commenting, please provide the full text line with the change you want to
implement. This helps us process the change faster.

1.5 **Non-English Localization**: If you contributed to non-English localization (e.g., Polish), please also check these
two branches for text changes in all languages:
**[United States English](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2535)** and **[Missing text lines](https://github.com/TheSuperHackers/GeneralsGamePatch/pull/2571)**.

## 2. Working on Existing Languages

2.1 **Find Original and Edited Text**: You can find the original game text (without changes) and a version with all
changes already commented on in the file:

- [Original file](https://github.com/TheSuperHackers/GeneralsGamePatch/blob/4815538dd574dd7e9d20de4f58a78502b082e761/Patch104pZH/GameFilesEdited/Data/generals.str)
- [Edited file](https://github.com/TheSuperHackers/GeneralsGamePatch/blob/main/Patch104pZH/GameFilesEdited/Data/generals.str)

2.2 **Editing Tools**: I use **[Notepad++](https://notepad-plus-plus.org/downloads/)** for editing files. If you're
using Linux or macOS, you can use similar programs that offer the same features as Notepad++.
It is **required** to use **UTF-8** text format to avoid compatibility issues across different platforms and text
editors. Ensure that your editor is set to save files in UTF-8 encoding to maintain proper character representation
and prevent any potential issues with special characters.

2.3 **Translation Tools**: I use
**[Google Translate](https://translate.google.ca/?hl=en&tab=TT&sl=auto&tl=en&op=translate)** for quick translations,
but I recommend using your language dictionary in some cases. I personally use **[Multitran](https://www.multitran.com/)**
for this.

2.4 **Grammar Checking**: For additional grammar checks, I use **[Free Grammar Checker](https://languagetool.org/)**.

2.5 If you made a change to non-RU, AR, or UK lines (i.e., non-original languages), you need to leave a comment above
the modified line in the following format:

```text
// Patch104p @fix dmgreen(your GitHub name) 04/12/2024 (date of the change) Changes US (Name of localization language in the line) from "And everywhere that Mary went, the lamb was sure to go" (#2535)
```

(The number is GitHub pull request, you will get this number when you make a pull request to the GitHub repository)

```diff
+ // Patch104p @fix dmgreen 04/12/2024 Changes US from "And everywhere that Mary when, the lamb was sure to go" (#2535)
+
MSG: Test2
-US: "And everywhere that Mary when, the lamb was sure to go"
+US: "And everywhere that Mary went, the lamb was sure to go"
-DE: "And everywhere that Mary when, the lamb was sure to go."
+DE: "And everywhere that Mary went, the lamb was sure to go."
FR: "And everywhere that Mary when, the lamb was sure to go."
ES: "And everywhere that Mary when, the lamb was sure to go."
 ```

**Note**: I recommend using the original lines from the *
*[Original file](https://github.com/TheSuperHackers/GeneralsGamePatch/blob/4815538dd574dd7e9d20de4f58a78502b082e761/Patch104pZH/GameFilesEdited/Data/generals.str)
** when making comments, to avoid duplicating work if the modified line was previously touched in the Superhackers
patch.

2.6 **Important Note**: The **US language** is the main reference language for all other languages. Your edits and
translations should be based on it.

2.7 We are currently reorganizing the Super Patch GitHub page. If you want to submit your localization edit, please
create a discussion on the [GeneralsGamePatch discussions page](https://github.com/TheSuperHackers/GeneralsGamePatch/discussions).
We will fix this situation soon, so you can post it yourself. You can check the situation and
updates on the [reorganization discussion](https://github.com/TheSuperHackers/GeneralsGamePatch/discussions/2637).

From line - 59939 `DIALOGEVENT:EvaChina_AllyUnderAttackSubtitle` until line - 96720
`DIALOGEVENT:UnitDescriptXUSA037Subtitle` you can find Voiceover text used in game Dialogues. We have 3 official game
voiceovers - English, German and French. Also, I know of one non-official(fanmade) - Russian. If you want to do your own
localization edit, you can ignore these lines.

Of course, if you want to have subtitles or fan made voiceover for your localization later, you can add your own
language lines there instead of English ones. If you do want to do that, please do that in another file/branch. For
example, first file - all text lines excluding `DIALOGEVENT` lines and in second file only `DIALOGEVENT` lines.

## 3. Adding a New Localization

Please refer to the instructions provided by **xezon** on how to add a new language.

3.1 **Options for Getting Started**:  
You can choose one of the following methods to begin adding your new localization:

- **Work directly in the multi-str file**:  
  The `Patch104pZH/GameFilesEdited/Data/generals.str` file is a multi-language file created using the **GameTextCompiler
  ** tool. To add a new language, you can append new entries (e.g., `EL: ""` for Greek) to each block in the file and
  then proceed with your edits.

- **Work on a regular English str file**:  
  If you prefer working with a single-language file, you will first need to convert the multi-language `generals.str`
  file (US version) into a single-language file. After making your changes, we can merge it back into the multi-language
  file using a script. This process has already been successfully applied with the UK localization.

3.2 **Using Tools for Conversion and Merging**:  
To assist with your work, we have utility scripts that can help you manage `.str` files. These scripts can be found in
the following directory:  
[**str utility scripts**](https://github.com/TheSuperHackers/GeneralsGamePatch/tree/main/Patch104pZH/Design/Scripts/str).

The **GameTextCompiler** tool, which is essential for compiling and converting `.str` and `.csf` files, can be
downloaded from:  
[**GameTextCompiler**](https://github.com/TheSuperHackers/GeneralsTools/tree/main/Tools/gametextcompiler).

3.3 **Consistent Edits**: Ensure all changes are made consistently throughout the text, without leaving comments on your
edits.

3.4 **Submitting Your Localization**: We are currently in the process of reorganizing the Super Patch GitHub page. If
you want to submit your localization edit, please create a
discussion on the [GeneralsGamePatch discussions page](https://github.com/TheSuperHackers/GeneralsGamePatch/discussions).
We will resolve this situation soon so you can post it yourself. You can check the situation and
updates on the [reorganization discussion](https://github.com/TheSuperHackers/GeneralsGamePatch/discussions/2637).

## 4. Testing and Verifying Changes in the Game

To test and verify your changes in the game, you will need to use a tool
called [GameTextCompiler](https://github.com/TheSuperHackers/GeneralsTools/tree/main/Tools/gametextcompiler). This tool
allows you to compile a selected language and generate a `generals.csf` file, which you can then place in the
appropriate language folder under `Command & Conquer Generals - Zero Hour/Data/<your language>`.

(For testing purposes, you can place it in the English language folder by default.)

The tool operates via the command line, and here are some common commands to use:
(Note: "D" refers to your file path. Ensure that you back up your files before proceeding.)

### Save the Selected Language from a Multi-Language `.str` File to a `.csf` File

```bash
gametextcompiler.exe -load_str D:\generals.str -load_str_languages English -save_csf D:\generals.csf
```

### Convert a Single Language `.csf` File to a `.str` File

```bash
gametextcompiler.exe -load_csf D:\generals.csf -save_str D:\generals.str
```
