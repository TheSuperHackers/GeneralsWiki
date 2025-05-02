# StaticText Control

The **StaticText** control is used for displaying non-interactive text labels on the screen. You can define the
position, size, and appearance of the text, but users cannot edit or interact with it directly.

## Available Tags

In addition to the [default control tags](/user.md), the StaticText control has the following unique tag:

| Tag              | Description                                           |
|------------------|-------------------------------------------------------|
| `STATICTEXTDATA` | Defines specific properties of the static text label. |

## Default Values and Usage

The following section list the default values and available textures for each tag:

### STATICTEXTDATA

- `CENTERED`: A boolean value that defines if the text should be centered inside the static text control. `0` is not
  centered, `1` is centered.

### ENABLEDDRAWDATA, DISABLEDDRAWDATA, HILITEDRAWDATA

- Usually, `NoImage` is used for all parts, but here are some textures that can be used:
  - `StaticTextEnabled`
  - `StaticTextDisabled`
  - `StaticTextHilite`

## When to Use StaticText

The StaticText control is ideal for displaying:

- Titles and headers
- Labels for other UI elements
- Informational text
- Any text that doesn't require user interaction.

## Example

Here's an example from the `OptionsMenu.wnd` file with textures:

<details>
<summary>Click to expand</summary>

```nasm
WINDOW
  WINDOWTYPE = STATICTEXT;
  SCREENRECT = UPPERLEFT: 413 316,
               BOTTOMRIGHT: 517 341,
               CREATIONRESOLUTION: 800 600;
  NAME = "OptionsMenu.wnd:StaticTextOnlineIpAddresses";
  STATUS = ENABLED;
  STYLE = STATICTEXT+MOUSETRACK;
  SYSTEMCALLBACK = "[None]";
  INPUTCALLBACK = "[None]";
  TOOLTIPCALLBACK = "[None]";
  DRAWCALLBACK = "[None]";
  FONT = NAME: "Arial", SIZE: 10, BOLD: 0;
  HEADERTEMPLATE = "LabelRegular";
  TOOLTIPDELAY = -1;
  TEXT = "GUI:OnlineIPAddresses";
  TEXTCOLOR = ENABLED:  255 255 255 255, ENABLEDBORDER:  0 0 0 255,
              DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
              HILITE:   128 128 255 255, HILITEBORDER:   0 0 128 255;
  ENABLEDDRAWDATA = IMAGE: StaticTextEnabled, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  DISABLEDDRAWDATA = IMAGE: StaticTextDisabled, COLOR: 64 64 64 255, BORDERCOLOR: 192 192 192 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  HILITEDRAWDATA = IMAGE: StaticTextHilite, COLOR: 0 128 0 255, BORDERCOLOR: 128 255 128 255,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  STATICTEXTDATA = CENTERED: 0;
END
```

</details>

## See also

- [Default control](wnd_controls_user.md)
- [Texturing](../texturing.md)

[Category:](../Categories.md) [Controls](../Controls.md)
