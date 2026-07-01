# Object Module Fields

This page lists mod-facing object module fields added in TheSuperHackers engine source compared with
the retail source release. Existing retail fields are not repeated.

Boolean values use `Yes` or `No`.

## CrateCollide

Available in Generals and Zero Hour.

| Field | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `AllowMultiPickup` | `Yes` or `No` | Build-dependent | Allows multiple objects to pick up the same crate on the same frame. The default is enabled in retail-compatible or preserved-multi-crate-pickup builds, and disabled otherwise. |

## CreateObjectDie

The `CreateObjectDie` module exists in both Generals and Zero Hour. The added field below is available
only in Zero Hour.

| Field | Accepted Values | Default | Description |
| --- | --- | --- | --- |
| `TransferSelection` | `Yes` or `No` | `No` | If the dying object was selected and the module creates a replacement object, selects the replacement object. This is useful for objects such as the Sneak Attack tunnel. |
