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
| CursorCaptureMode | Controls when the game window captures the mouse cursor. | None, InGame, Always, Auto | Auto |

## CommandMap.ini

| Name                    | Description                              | Default Keybinding |
|-------------------------|------------------------------------------|-------------------|
| TOGGLE_PAUSE           | Toggles pause in replay playback         | <kbd>P</kbd>        |
| STEP_FRAME             | Steps one frame in replay playback       | <kbd>O</kbd>        |
| SELECT_NEXT_IDLE_WORKER | Selects the next idle worker unit        | <kbd>Ctrl</kbd>+<kbd>I</kbd> |

## GameData.ini

| Name | Description | Accepted Values | Default Value |
|------|-------------|-----------------|---------------|
| ViewportHeightScale | Controls the height scale of the tactical view. Used to hide the world behind the Control Bar for 'Control Bar Pro' Addons. | 0.0 - 1.0 | 0.8 |

## Command Line Arguments

| Argument | Description |
|----------|-------------|
| -forcefullviewport | Forces full viewport mode for 'Control Bar Pro' Addons by setting ViewportHeightScale to 1.0 |

## CursorCaptureMode Details

The `CursorCaptureMode` option controls when the game window captures the mouse cursor, preventing it from  
leaving the game window boundaries. This is particularly useful for windowed mode gameplay.

| Mode | Behavior |
|------|----------|
| **None** | Game window does not capture the cursor |
| **InGame** | Game window captures the cursor when playing and observing |
| **Always** | Game window captures the cursor always in menus and game |
| **Auto** | Applies mode "InGame" when Windowed, "Always" when Fullscreen |

The cursor capture is automatically released when the game window loses focus (e.g., when Alt+Tab is used to  
switch to another application).

## ViewportHeightScale Details

The `ViewportHeightScale` setting controls the height of the tactical view as a fraction of the screen height.  
This feature is specifically designed to support 'Control Bar Pro' Addons that modify the game's interface.

**Values:**

- `0.8` (default): Traditional control bar mode, tactical view uses 80% of screen height
- `1.0`: Full viewport mode, tactical view uses entire screen height (control bar overlays the view)
- Custom values between `0.0` and `1.0` for custom control bar configurations

**Integration with Control Bar Pro Addons:**
The game reads a `GenTool/fullviewport.dat` file to automatically enable full viewport mode when detected.
