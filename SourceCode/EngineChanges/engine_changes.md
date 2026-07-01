# Added and Changed Engine Features

This section documents front-facing changes in TheSuperHackers engine source compared with the EA retail
source release. It focuses on changes that players, modders, map makers, and tool authors may need to use
or account for, such as configuration settings, command-line arguments, key bindings, debug commands, and
INI fields that were added, changed, or removed.

Backend implementation details are intentionally left out unless they affect how the game is played,
configured, tested, or modded.

## Pages

- [Options.ini](options_ini): player-facing options stored in `Options.ini`.
- [Added/Changed Command Line Arguments](command_line_arguments): launch arguments added or changed by the engine.
- [Key Bindings](key_bindings): non-debug key bindings added or changed by the engine.
- [Debug Commands](debug_commands): in-game debug commands added or changed by the engine.
- [GameData.ini](gamedata_ini): mod-facing `GameData.ini` settings.
- [GameAudio.ini](gameaudio_ini): mod-facing `GameAudio.ini` settings.
- [InGameUI.ini](ingameui_ini): mod-facing `InGameUI.ini` overlay and styling settings.
- [Object Module Fields](module_fields): object module fields added for INI authors.
