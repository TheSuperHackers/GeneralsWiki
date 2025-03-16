# PushButton Control

The **PushButton** control is used for creating buttons that can be clicked by the user.
You can define the position, size, and appearance of the button,
as well as how it behaves in different states (enabled, disabled, highlighted).

## Available Tags

The PushButton control does not include any unique tags beyond the [default control tags](/user.md).
It uses the same general set of tags applicable to all controls.

## Default values and usage

The following section list the default values and available textures for each tag
<details>
  <summary>Click to expand</summary>

### ENABLEDDRAWDATA

- Buttons-Left
- Buttons-Middle
- Buttons-Right

### DISABLEDDRAWDATA

- Buttons-Disabled-Left
- Buttons-Disabled-Middle
- Buttons-Disabled-Right

### HILITEDRAWDATA

- Buttons-HiLite-Left
- Buttons-HiLite-Middle
- Buttons-HiLite-Right
- Buttons-Pushed-Left
- Buttons-Pushed-Middle
- Buttons-Pushed-Right

</details>

## Example

Here example from Accept button in `OptionsMenu.wnd` file:
<details>
  <summary>Click to expand</summary>

```nasm
WINDOW
    WINDOWTYPE = PUSHBUTTON;
    SCREENRECT = UPPERLEFT: 319 497,
                 BOTTOMRIGHT: 481 529,
                 CREATIONRESOLUTION: 800 600;
    NAME = "OptionsMenu.wnd:ButtonAccept";
    STATUS = ENABLED+IMAGE;
    STYLE = PUSHBUTTON+MOUSETRACK;
    SYSTEMCALLBACK = "[None]";
    INPUTCALLBACK = "[None]";
    TOOLTIPCALLBACK = "[None]";
    DRAWCALLBACK = "[None]";
    FONT = NAME: "Generals", SIZE: 15, BOLD: 0;
    HEADERTEMPLATE = "MainButton";
    TOOLTIPTEXT = "TOOLTIP:OptionsAccept";
    TOOLTIPDELAY = -1;
    TEXT = "GUI:Accept";
    TEXTCOLOR = ENABLED:  255 255 255 255, ENABLEDBORDER:  0 0 0 255,
                DISABLED: 62 64 92 255, DISABLEDBORDER: 31 32 47 255,
                HILITE:   186 255 12 255, HILITEBORDER:   0 2 0 255;
    ENABLEDDRAWDATA = IMAGE: Buttons-Left, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                      IMAGE: NoImage, COLOR: 47 55 168 255, BORDERCOLOR: 254 254 254 255,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: Buttons-Middle, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: Buttons-Right, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    DISABLEDDRAWDATA = IMAGE: Buttons-Disabled-Left, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                       IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 128 128 128 255,
                       IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                       IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                       IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                       IMAGE: Buttons-Disabled-Middle, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                       IMAGE: Buttons-Disabled-Right, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                       IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                       IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    HILITEDRAWDATA = IMAGE: Buttons-HiLite-Left, COLOR: 209 253 4 255, BORDERCOLOR: 59 60 52 255,
                     IMAGE: Buttons-Pushed-Left, COLOR: 47 55 168 255, BORDERCOLOR: 254 254 254 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: Buttons-Pushed-Middle, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: Buttons-Pushed-Right, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: Buttons-HiLite-Middle, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: Buttons-HiLite-Right, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
END
```

</details>

## See also

- [Default control](wnd_controls_user)
- [Texturing](../texturing.md)

[Category:](../Categories.md) [Controls](../Controls.md)
