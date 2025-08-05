<!-- markdownlint-disable MD033 -->
<!-- Needed to allow for <kbd> tags for keyboard key styling. -->
# New Configuration Options

Several new configuration options have been added to the game. The new configuration options can be
configured from the following locations:

## Options.ini

| Name            | Description                                                                                 | Accepted Values | Default Value |
|-----------------|---------------------------------------------------------------------------------------------|-----------------|----------------|
| MoneyTransactionVolume | Controls the volume of money deposit and withdraw audio events. Set to 0 to mute these sounds. | 0-100 | 100 (Generals), 0 (Zero Hour) |
| SystemTimeFontSize | Controls the font size for system time display. Set to 0 to disable the system time display. | 0+ | 8 |
| GameTimeFontSize | Controls the font size for game time display. Set to 0 to disable the game time display. | 0+ | 8 |

## CommandMap.ini

| Name                    | Description                              | Default Keybinding |
|-------------------------|------------------------------------------|-------------------|
| TOGGLE_PAUSE           | Toggles pause in replay playback         | <kbd>P</kbd>        |
| STEP_FRAME             | Steps one frame in replay playback       | <kbd>O</kbd>        |
| SELECT_NEXT_IDLE_WORKER | Selects the next idle worker unit        | <kbd>Ctrl</kbd>+<kbd>I</kbd> |
