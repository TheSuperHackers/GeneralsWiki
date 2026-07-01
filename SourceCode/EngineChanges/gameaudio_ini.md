# GameAudio.ini

This page lists mod-facing `GameAudio.ini` settings added in TheSuperHackers engine source compared
with the retail source release.

Boolean values use `Yes` or `No`. Percentage values use the existing INI percentage syntax, such as
`75%` or `100%`.

| Name | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `Use3DSoundRangeVolumeFade` | `Yes` or `No` | `Yes` | Enables volume fading for 3D sounds as they approach maximum range, avoiding abrupt cutoff at the edge of the sound range. |
| `3DSoundRangeVolumeFadeExponent` | Real number | `4.0` | Controls the non-linear 3D sound range fade curve. Higher values make volume fall off more sharply near maximum range. |
| `DefaultMoneyTransactionVolume` | Percentage | `100%` in Generals, `0%` in Zero Hour | Sets the default money deposit and withdraw sound volume used when `Options.ini` does not contain `MoneyTransactionVolume`. |
