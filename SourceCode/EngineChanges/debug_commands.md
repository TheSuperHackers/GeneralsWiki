<!-- markdownlint-disable MD033 -->
<!-- Needed to allow for <kbd> tags for keyboard key styling. -->

# Added and Changed Debug Commands

This page lists debug commands whose player-facing availability, default binding, or behavior changed in
TheSuperHackers engine source compared with the EA retail source release. It does not repeat unchanged
debug commands from the [In-Game Debug Commands](ingame_debug_commands) page.

Source-only debug commands with no current default binding are intentionally omitted.

## New Commands

| Command | Default Binding | Available In | Description |
| --- | --- | --- | --- |
| `DEMO_BEGIN_ADJUST_DEFAULTPITCH` | <kbd>Ctrl</kbd>+<kbd>,</kbd> | Generals and Zero Hour | Starts adjusting the default camera pitch. |
| `DEMO_END_ADJUST_DEFAULTPITCH` | <kbd>Ctrl</kbd>+<kbd>,</kbd> release | Generals and Zero Hour | Stops adjusting the default camera pitch. |

## Newly Available in Generals

These commands existed in the EA Zero Hour retail source, but not in the EA Generals retail source. The current
TheSuperHackers source exposes them for both Generals and Zero Hour.

| Command | Default Binding | Description |
| --- | --- | --- |
| `DEMO_SHOW_AUDIO_LOCATIONS` | <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>A</kbd> | Toggles audio location markers. |
| `DEMO_TOGGLE_SUPPLY_CENTER_PLACEMENT` | <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>S</kbd> | Toggles supply-center placement logging/debugging. |
| `DEBUG_OBJECT_ID_PERFORMANCE` | <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>Q</kbd> | Runs ObjectID lookup performance tests. |
| `DEBUG_DRAWABLE_ID_PERFORMANCE` | <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>A</kbd> | Runs DrawableID lookup performance tests. |
| `DEBUG_SLEEPY_UPDATE_PERFORMANCE` | <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>W</kbd> | Reports the number of sleepy update modules. |

## Changed Commands

| Command | Default Binding | Changed Behavior |
| --- | --- | --- |
| `DEMO_REMOVE_PREREQ` | <kbd>Alt</kbd>+<kbd>P</kbd> | Retail toggled prerequisite checks for the local player only. The current source toggles the same state for every human player. In multiplayer, every client should apply the same state to avoid mismatches. |
| `DEMO_INSTANT_BUILD` | <kbd>Alt</kbd>+<kbd>F</kbd> | Retail toggled instant production for the local player only. The current source toggles the same state for every human player and ignores the command in multiplayer while any human player has production in progress. |
| `DEMO_FREE_BUILD` | <kbd>Alt</kbd>+<kbd>B</kbd> | Retail had the debug handler, but no default key binding. The current source generates a default binding and toggles zero-cost production for every human player. In multiplayer, every client should apply the same state to avoid mismatches. |
| `DEMO_GIVE_ALL_SCIENCES` | <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>K</kbd> | Retail granted all grantable sciences to the local player only. The current source grants them to every human player. In multiplayer, every client should run the command to avoid mismatches. |
| `DEMO_INSTANT_QUIT` | <kbd>Alt</kbd>+<kbd>F4</kbd> or window close | Retail Generals closed directly from the window-close path, while retail Zero Hour routed close through this message. The current source routes close/end-session through `DEMO_INSTANT_QUIT` in both games and uses the current game quit flow. |

<!-- markdownlint-restore -->
