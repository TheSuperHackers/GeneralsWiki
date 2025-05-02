# RadioButton Control

The **RadioButton** control is used for creating radio buttons, which are typically used in groups to allow the user to
select only one option from a set of choices. You can define the position, size, and appearance of the radio button, as
well as how it behaves in different states (enabled, disabled, highlighted).

## Available Tags

In addition to the [default control tags](/user.md), the RadioButton control has the following unique tag:

| Tag               | Description                                                                     |
|-------------------|---------------------------------------------------------------------------------|
| `RADIOBUTTONDATA` | Defines specific properties of the radio button, such as its group affiliation. |

## Default Values and Usage

The following section list the default values and available textures for each tag:
<details>
  <summary>Click to expand</summary>

### RADIOBUTTONDATA

- **GROUP**: An integer that defines the radio button group. Radio buttons with the same group ID act together - only
  one can be selected at a time within the group.

### ENABLEDDRAWDATA

- `RadioButtonEnabledLeft`
- `RadioButtonEnabledMiddle`
- `RadioButtonEnabledRight`

### DISABLEDDRAWDATA

- `RadioButtonDisabledLeft`
- `RadioButtonDisabledMiddle`
- `RadioButtonDisabledRight`

### HILITEDRAWDATA

- `RadioButtonEnabledLeft`
- `RadioButtonEnabledMiddle`
- `RadioButtonEnabledRight`
- `RadioButtonHilightedLeft`
- `RadioButtonHilightedMiddle`
- `RadioButtonHilightedRight`

</details>

## RadioButton Groups

Radio buttons usually work in groups, where only one button can be selected at a time. This behavior is controlled by
the `RADIOBUTTONDATA` tag, specifically by the `GROUP` parameter.

- All radio buttons within the same window that share the same group ID are considered as a single logical group.
- Selecting one radio button in a group will deselect all other buttons in that group.

## Example

Here's an example from the `OptionsMenu.wnd` file:

```nasm
WINDOW
    WINDOWTYPE = RADIOBUTTON;
    SCREENRECT = UPPERLEFT: 135 215,
               BOTTOMRIGHT: 279 247,
               CREATIONRESOLUTION: 800 600;
    NAME = "OptionsMenu.wnd:RadioMedium";
    STATUS = ENABLED+HIDDEN+IMAGE+BORDER;
    STYLE = RADIOBUTTON+MOUSETRACK;
    SYSTEMCALLBACK = "[None]";
    INPUTCALLBACK = "[None]";
    TOOLTIPCALLBACK = "[None]";
    DRAWCALLBACK = "[None]";
    FONT = NAME: "Arial", SIZE: 10, BOLD: 0;
    HEADERTEMPLATE = "LabelRegular";
    TOOLTIPDELAY = -1;
    TEXT = "GUI:Medium";
    TEXTCOLOR = ENABLED:  254 254 254 255, ENABLEDBORDER:  0 0 0 255,
              DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
              HILITE:   128 128 255 255, HILITEBORDER:   0 0 128 255;
    ENABLEDDRAWDATA = IMAGE: RadioButtonEnabledLeft, COLOR: 1 1 1 160, BORDERCOLOR: 47 55 168 255,
                    IMAGE: RadioButtonEnabledMiddle, COLOR: 128 0 0 0, BORDERCOLOR: 0 0 0 0,
                    IMAGE: RadioButtonEnabledRight, COLOR: 117 43 1 200, BORDERCOLOR: 128 128 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    DISABLEDDRAWDATA = IMAGE: RadioButtonDisabledLeft, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                     IMAGE: RadioButtonDisabledMiddle, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                     IMAGE: RadioButtonDisabledRight, COLOR: 64 64 64 255, BORDERCOLOR: 254 254 254 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    HILITEDRAWDATA = IMAGE: RadioButtonEnabledLeft, COLOR: 1 1 1 160, BORDERCOLOR: 47 55 168 255,
                   IMAGE: RadioButtonEnabledMiddle, COLOR: 128 0 0 0, BORDERCOLOR: 0 0 0 0,
                   IMAGE: RadioButtonEnabledRight, COLOR: 117 43 1 200, BORDERCOLOR: 128 128 255 255,
                   IMAGE: RadioButtonHilightedLeft, COLOR: 0 1 0 160, BORDERCOLOR: 47 55 168 255,
                   IMAGE: RadioButtonHilightedMiddle, COLOR: 0 128 0 0, BORDERCOLOR: 128 255 128 255,
                   IMAGE: RadioButtonHilightedRight, COLOR: 117 43 0 200, BORDERCOLOR: 254 254 254 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    RADIOBUTTONDATA = GROUP: 2;
END
```

## See also

- [Default control](wnd_controls_user.md)
- [Texturing](../texturing.md)
- [Statuses](../statuses.md)

[Category:](../Categories.md) [Controls](../Controls.md)
