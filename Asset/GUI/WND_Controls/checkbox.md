# Checkbox Control

The **Checkbox** control is used for creating checkboxes that allow users to select or deselect options. You can define
the position, size, and appearance of the checkbox, and the game will handle the visual state changes when the user
interacts with it.

## Available Tags

The Checkbox control does not have any unique tags beyond the [default control tags](/user.md).
It uses the same general set of tags applicable to all controls.

## Default Values and Usage

The following section lists the default values and available textures for each tag:

### ENABLEDDRAWDATA

- `Active-Unchecked`
- `Active-Checked`

### DISABLEDDRAWDATA

- `Disabled-Unchecked`
- `Disabled-Checked`

### HILITEDRAWDATA

- `Active-HiLighted`
- `Active-Checked`

## Example

Here's an example from the `OptionsMenu.wnd` file:

<details>
  <summary>Click to expand</summary>

```nasm
        WINDOW
          WINDOWTYPE = CHECKBOX;
          SCREENRECT = UPPERLEFT: 160 260,
                       BOTTOMRIGHT: 387 285,
                       CREATIONRESOLUTION: 800 600;
          NAME = "OptionsMenu.wnd:CheckAlternateMouse";
          STATUS = ENABLED+IMAGE+BORDER;
          STYLE = CHECKBOX+MOUSETRACK;
          SYSTEMCALLBACK = "[None]";
          INPUTCALLBACK = "[None]";
          TOOLTIPCALLBACK = "[None]";
          DRAWCALLBACK = "[None]";
          FONT = NAME: "Arial", SIZE: 14, BOLD: 0;
          HEADERTEMPLATE = "MinorTitle";
          TOOLTIPTEXT = "TOOLTIP:AlternateMouse";
          TOOLTIPDELAY = -1;
          TEXT = "GUI:AlternateMouse";
          TEXTCOLOR = ENABLED:  255 255 255 255, ENABLEDBORDER:  0 0 0 255,
                      DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
                      HILITE:   186 255 12 255, HILITEBORDER:   0 0 0 255;
          ENABLEDDRAWDATA = IMAGE: NoImage, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                            IMAGE: Active-Unchecked, COLOR: 255 255 255 0, BORDERCOLOR: 128 128 255 255,
                            IMAGE: Active-Checked, COLOR: 0 0 255 255, BORDERCOLOR: 128 128 255 255,
                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
          DISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                             IMAGE: Disabled-Unchecked, COLOR: 255 255 255 0, BORDERCOLOR: 192 192 192 255,
                             IMAGE: Disabled-Checked, COLOR: 64 64 64 255, BORDERCOLOR: 254 254 254 255,
                             IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                             IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                             IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                             IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                             IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                             IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
          HILITEDRAWDATA = IMAGE: NoImage, COLOR: 0 255 0 255, BORDERCOLOR: 128 255 128 255,
                           IMAGE: Active-HiLighted, COLOR: 255 255 255 0, BORDERCOLOR: 128 128 255 255,
                           IMAGE: Active-Checked, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                           IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                           IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                           IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                           IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                           IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                           IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
        END
```

</details>

## See also

- [Default control](user.md)
- [Texturing](../texturing.md)
- [Statuses](../statuses.md)

[Category:](../Categories.md) [Controls](../Controls.md)
