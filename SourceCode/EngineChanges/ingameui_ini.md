# InGameUI.ini

This page lists mod-facing `InGameUI.ini` overlay styling settings added in TheSuperHackers engine
source compared with the retail source release.

These settings style overlays that are enabled or disabled by the matching `Options.ini` font-size entries.
Positions use `X:<number> Y:<number>`. Colors use `R:<0-255> G:<0-255> B:<0-255> [A:<0-255>]`;
alpha is optional and defaults to `255`.

## Network Latency

| Name | Default | Description |
| --- | --- | --- |
| `NetworkLatencyFont` | `Tahoma` | Font used by the multiplayer network latency overlay. |
| `NetworkLatencyBold` | `Yes` | Enables bold text for the network latency overlay. |
| `NetworkLatencyPosition` | `X:3 Y:-1` | Overlay position. `X:3 Y:-1` uses the shared HUD anchor and draws inline with the other top HUD counters. |
| `NetworkLatencyColor` | `R:173 G:216 B:255 A:255` | Main text color. |
| `NetworkLatencyDropColor` | `R:0 G:0 B:0 A:255` | Drop-shadow color. |

## Render FPS

| Name | Default | Description |
| --- | --- | --- |
| `RenderFpsFont` | `Tahoma` | Font used by the render FPS overlay. |
| `RenderFpsBold` | `Yes` | Enables bold text for the render FPS overlay. |
| `RenderFpsPosition` | `X:3 Y:-1` | Overlay position. `X:3 Y:-1` uses the shared HUD anchor and draws inline with the other top HUD counters. |
| `RenderFpsColor` | `R:255 G:255 B:0 A:255` | Current render FPS text color. |
| `RenderFpsLimitColor` | `R:119 G:119 B:119 A:255` | FPS limit text color. |
| `RenderFpsDropColor` | `R:0 G:0 B:0 A:255` | Drop-shadow color. |
| `RenderFpsRefreshMs` | `1000` | Milliseconds between render FPS text refreshes. `0` updates every frame. |

## System Time

| Name | Default | Description |
| --- | --- | --- |
| `SystemTimeFont` | `Tahoma` | Font used by the local system time overlay. |
| `SystemTimeBold` | `Yes` | Enables bold text for the system time overlay. |
| `SystemTimePosition` | `X:3 Y:-1` | Overlay position. `X:3 Y:-1` uses the shared HUD anchor and draws inline with the other top HUD counters. |
| `SystemTimeColor` | `R:255 G:255 B:255 A:255` | Main text color. |
| `SystemTimeDropColor` | `R:0 G:0 B:0 A:255` | Drop-shadow color. |

## Game Time

| Name | Default | Description |
| --- | --- | --- |
| `GameTimeFont` | `Tahoma` | Font used by the game timer overlay. |
| `GameTimeBold` | `Yes` | Enables bold text for the game timer overlay. |
| `GameTimePosition` | `X:3 Y:-1` | Overlay position. The `X` coordinate is applied from the right edge of the screen. |
| `GameTimeColor` | `R:255 G:255 B:255 A:255` | Main timer text color. |
| `GameTimeDropColor` | `R:0 G:0 B:0 A:255` | Drop-shadow color. |

## Player Info List

| Name | Default | Description |
| --- | --- | --- |
| `PlayerInfoListFont` | `Tahoma` | Font used by the observer player information list. |
| `PlayerInfoListBold` | `Yes` | Enables bold text for the player information list. |
| `PlayerInfoListPosition` | `X:0.0 Y:0.5` | Normalized screen position. `X` and `Y` are multiplied by the current display width and height. |
| `PlayerInfoListLabelColor` | `R:125 G:124 B:122 A:255` | Label text color. |
| `PlayerInfoListValueColor` | `R:253 G:251 B:251 A:255` | Value text color. Player names still use player colors. |
| `PlayerInfoListDropColor` | `R:0 G:0 B:0 A:255` | Drop-shadow color. |
| `PlayerInfoListBackgroundAlpha` | `170` | Background rectangle alpha, from `0` to `255`. |
