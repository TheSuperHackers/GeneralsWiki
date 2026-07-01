# GameData.ini

This page lists mod-facing `GameData.ini` settings added in TheSuperHackers engine source compared
with the retail source release.

Boolean values use `Yes` or `No`.

| Name | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `ViewportHeightScale` | Real number, usually `0.0` through `1.0` | `0.8` | Scales the tactical viewport height. `0.8` preserves the original control bar area; `1.0` makes the tactical view use the full screen height so custom control bars can overlay it. |
| `AllowMoneyPerMinuteForPlayer` | `Yes` or `No` | `No` | Allows regular player control bars to show money per minute when `Options.ini` has `ShowMoneyPerMinute=yes`. Observer control bars can show money per minute regardless of this setting. |
| `ObjectPlacementOpacity` | Real number, usually `0.0` through `1.0` | `0.45` | Controls the opacity of the build-placement preview object. |
| `ObjectPlacementShadows` | `Yes` or `No` | `Yes` | Enables shadows on build-placement preview objects. If disabled, increasing `ObjectPlacementOpacity` can help preserve preview contrast. |

`ViewportHeightScale` is also forced to `1.0` by `-forcefullviewport` and by the `GenTool/fullviewport.dat`
compatibility check.
