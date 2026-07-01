# Options.ini

This page lists player-facing `Options.ini` entries that were added or changed in
TheSuperHackers engine source compared with the retail source release.

Boolean values are written as `yes` or `no`; parsing is case-insensitive.

## Display and Audio

| Name | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `MoneyTransactionVolume` | Non-negative number. `100` is normal volume. | `100` in Generals, `0` in Zero Hour | Controls the deposit and withdraw money sound volume. `0` mutes these sounds. Values above `100` are not capped by `Options.ini` parsing. |
| `TextureFilter` | `None`, `Point`, `Bilinear`, `Trilinear`, `Anisotropic` | `Bilinear` | Selects the global texture filtering mode. Invalid names fall back to `None`. |
| `AnisotropyLevel` | Practical values are `2`, `4`, `8`, `16` | `2` | Selects anisotropic filtering level. Other integer values are clamped to `2` through `16` and rounded down to the highest supported power of two. |
| `ResolutionFontAdjustment` | Non-negative number. `100` means 100%. | Unset | Overrides the `GlobalLanguage.ini` resolution font adjustment. Negative values or an absent key use the `GlobalLanguage.ini` setting. |

## HUD Overlays

Set a font size to `0` to disable that overlay. The visual styling for these overlays is configured in
[`InGameUI.ini`](ingameui_ini).

| Name | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `NetworkLatencyFontSize` | `0+` | `8` | Controls the multiplayer network latency overlay font size. |
| `RenderFpsFontSize` | `0+` | `8` | Controls the render FPS and FPS limit overlay font size. |
| `SystemTimeFontSize` | `0+` | `8` | Controls the local system time overlay font size. |
| `GameTimeFontSize` | `0+` | `8` | Controls the game timer overlay font size. |
| `PlayerInfoListFontSize` | `0+` | `8` | Controls the observer player information list font size. |

## Replays and Observer View

| Name | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `ArchiveReplays` | `yes` or `no` | `no` | Copies finished replay files to the archived replay folder and renames them using a timestamp. |
| `PlayerObserverEnabled` | `yes` or `no` | `yes` | Enables observer player-view tracking and the observer player-view toggle. Set to `no` to disable the feature and its extra tracking work. |
| `ShowMoneyPerMinute` | `yes` or `no` | `no` | Shows money as current cash plus income per minute when allowed by [`GameData.ini`](gamedata_ini). Observer control bars can show it regardless of the `GameData.ini` player gate. |

## Mouse and Scrolling

`CursorCaptureMode` is not used by the current code. Use the four cursor-capture booleans below instead.

| Name | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `UseRightMouseScrollWithAlternateMouse` | `yes` or `no` | `no` in Generals, `yes` in Zero Hour | Allows right mouse scrolling while Alternate Mouse mode is enabled. |
| `CursorCaptureEnabledInWindowedGame` | `yes` or `no` | `yes` | Captures the mouse cursor while in-game and windowed. |
| `CursorCaptureEnabledInWindowedMenu` | `yes` or `no` | `no` | Captures the mouse cursor while in menus and windowed. |
| `CursorCaptureEnabledInFullscreenGame` | `yes` or `no` | `yes` | Captures the mouse cursor while in-game and fullscreen. |
| `CursorCaptureEnabledInFullscreenMenu` | `yes` or `no` | `yes` | Captures the mouse cursor while in menus and fullscreen. |
| `ScreenEdgeScrollEnabledInWindowedApp` | `yes` or `no` | `no` | Enables camera scrolling when the cursor touches the screen edge while windowed. |
| `ScreenEdgeScrollEnabledInFullscreenApp` | `yes` or `no` | `yes` | Enables camera scrolling when the cursor touches the screen edge while fullscreen. |

## Changed Retail Options

| Name | Accepted Values | Default | Current Behavior |
| --- | --- | --- | --- |
| `AntiAliasing` | `0`, `2`, `4`, `8` | `0` | Selects the MSAA level. The current code treats the value as the actual multisample level, clamps it to `0` through `8`, and rounds down to the highest supported power of two. Retail treated this value as the options-menu position: `0` for off, `1` for low, and `2` for high. |
| `ScrollFactor` | `1+` | `50` | Controls keyboard camera scroll speed as a percentage. Retail clamped this to `0` through `100`; the current code clamps only values below `1` and no longer caps the upper limit. |
| `StaticGameLOD` | `Low`, `Medium`, `High`, `VeryHigh`, `Custom` | Recommended detail level when unset | Selects the static detail preset. The current code adds `VeryHigh` as a selectable preset above `High`; retail accepted only `Low`, `Medium`, `High`, and `Custom`. |
| `IdealStaticGameLOD` | `Low`, `Medium`, `High`, `VeryHigh`, `Custom` | Recommended detail level when unset | Stores the recommended static detail preset. The current code can write and read `VeryHigh`; retail accepted only `Low`, `Medium`, `High`, and `Custom`. |
