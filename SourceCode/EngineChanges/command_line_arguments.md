# Added and Changed Command Line Arguments

This page documents command-line arguments added or changed in TheSuperHackers engine source compared
with the retail source release. It does not repeat every retail command-line argument.

## Added or Expanded Arguments

| Argument | Value | Availability | Description |
| --- | --- | --- | --- |
| `-headless` | None | Release and debug builds | Runs the game without a window, graphics, input, or audio. Intended for replay simulation and can be combined with `-replay`. Also disables intro and sizzle playback. |
| `-replay` | Replay filename ending in `.rep` | Release and debug builds | Starts replay playback or simulation from the command line. The argument can be repeated, can include wildcards, and must refer to a file in the replay folder or one of its subfolders. It disables intro, sizzle, and shell-map startup and allows another game instance to already be running. |
| `-jobs` | Positive process count | Release and debug builds | Used with `-replay`. Runs replay simulations in separate processes, up to the supplied count at the same time. If omitted, replay simulations run sequentially in the same process. |
| `-noshaders` | None | Release and debug builds | Forces the low-feature GPU path by setting the chipset type used by the renderer. In the retail source this switch was exposed for Zero Hour; the current code exposes it for both Generals and Zero Hour. |
| `-forcefullviewport` | None | Release and debug builds | Forces full viewport mode by setting `ViewportHeightScale` to `1.0`. This supports Control Bar Pro style addons and mirrors the `GenTool/fullviewport.dat` integration. |

Examples:

```text
generals.exe -headless -replay "Last Replay.rep"
generals.exe -headless -replay "*.rep" -jobs 4
generals.exe -forcefullviewport
```

## Changed Retail Arguments

| Argument | Value | Current Behavior |
| --- | --- | --- |
| `-win` | None | Forces windowed startup. It is now parsed before the game window is created. |
| `-fullscreen` | None | Forces fullscreen startup. It is now parsed before the game window is created. |
| `-nologo` | None | Disables the startup logo and is now available in release builds. |
| `-noShellAnim` | None | Disables shell/window animations and is now available in release builds. |
| `-useWaveEditor` | None | Enables the water/wave editor mode and is now available from the non-debug engine-init argument table. |

## CRC Replay Analysis

| Argument | Value | Availability | Description |
| --- | --- | --- | --- |
| `-SaveDebugCRCPerFrame` | Output folder | Builds with `DEBUG_CRC` enabled | Stores CRC debug logging in a separate file for each frame. If the first CRC logging frame is unset, this sets it to `0`. The output folder is deleted and recreated for every started game. |

`-SaveDebugCRCPerFrame` is intended for replay analysis and is commonly used with the existing CRC
debug arguments, for example `-ignoreAsserts -DebugCRCFromFrame 0 -LogObjectCRCs`.
