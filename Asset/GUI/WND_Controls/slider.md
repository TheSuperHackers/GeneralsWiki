# Slider Control

The **Slider** control is used for creating sliders that allow users to select a value from a range. There are two types
of sliders: horizontal (`HORZSLIDER`) and vertical (`VERTSLIDER`). You can define the position, size, and appearance of
the slider, and it updates automatically as the user interacts with it.

## Available Tags

In addition to the [default control tags](/user.md), the Slider control has the following unique tags:

| Tag                           | Description                                                                       |
|-------------------------------|-----------------------------------------------------------------------------------|
| `SLIDERDATA`                  | Defines specific properties of the slider, such as the minimum and maximum value. |
| `SLIDERTHUMBENABLEDDRAWDATA`  | Visual texture for the slider thumb (handle) when enabled.                        |
| `SLIDERTHUMBDISABLEDDRAWDATA` | Visual texture for the slider thumb (handle) when disabled.                       |
| `SLIDERTHUMBHILITEDRAWDATA`   | Visual texture for the slider thumb (handle) when highlighted.                    |

## Default Values and Usage

The following section list the default values and available textures for each tag

### SLIDERDATA

- `MINVALUE`: The minimum value for the slider (e.g., 10).
- `MAXVALUE`: The maximum value for the slider (e.g., 145).

### ENABLEDDRAWDATA, DISABLEDDRAWDATA, HILITEDRAWDATA (Track)

- `hilightedbox` / `dehilightedbox` / `NoImage`
- `linebox`/ `arrow` / `NoImage`

### SLIDERTHUMBENABLEDDRAWDATA, SLIDERTHUMBDISABLEDDRAWDATA, SLIDERTHUMBHILITEDRAWDATA

- `NoImage` /  `NoImage` /  `arrow`
- `WindowResizeEnabled` / `WindowResizeDisabled` / `WindowResizeHilite`
- `WindowResizePushed` /  `NoImage` / `WindowResizePushed`

## How it Works

The `Slider` control consists of the following parts:

- **Track:** The track represents the line or area that the thumb moves on.
- **Thumb:** The thumb is the interactive handle that the user drags to select a value.

The game automatically updates the visual position of the thumb based on the selected value.

## Slider Types

- **Horizontal Slider (`HORZSLIDER`):** The slider moves horizontally.

- **Vertical Slider (`VERTSLIDER`):** The slider moves vertically.

## Examples

<details>
  <summary>Click to expand</summary>

### Horizontal Slider (`HORZSLIDER`)

Here's an example from the `OptionsMenu.wnd` file:

```nasm
WINDOW
    WINDOWTYPE = HORZSLIDER;
    SCREENRECT = UPPERLEFT: 160 456,
               BOTTOMRIGHT: 387 481,
               CREATIONRESOLUTION: 800 600;
    NAME = "OptionsMenu.wnd:SliderScrollSpeed";
    STATUS = ENABLED+IMAGE+TABSTOP;
    STYLE = HORZSLIDER+MOUSETRACK;
    SYSTEMCALLBACK = "[None]";
    INPUTCALLBACK = "[None]";
    TOOLTIPCALLBACK = "[None]";
    DRAWCALLBACK = "[None]";
    FONT = NAME: "Times New Roman", SIZE: 14, BOLD: 0;
    HEADERTEMPLATE = "[None]";
    TOOLTIPTEXT = "ToolTip:ScrollSpeed";
    TOOLTIPDELAY = -1;
    TEXTCOLOR = ENABLED:  0 0 0 0, ENABLEDBORDER:  0 0 0 0,
              DISABLED: 0 0 0 0, DISABLEDBORDER: 0 0 0 0,
              HILITE:   0 0 0 0, HILITEBORDER:   0 0 0 0;
    ENABLEDDRAWDATA = IMAGE: NoImage, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
    DISABLEDDRAWDATA = IMAGE: hilightedbox, COLOR: 128 128 128 255, BORDERCOLOR: 64 64 64 255,
                     IMAGE: dehilightedbox, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
    HILITEDRAWDATA = IMAGE: linebox, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                   IMAGE: arrow, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                   IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                   IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                   IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                   IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                   IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                   IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
    SLIDERDATA = MINVALUE: 10,
               MAXVALUE: 145;
    SLIDERTHUMBENABLEDDRAWDATA = IMAGE: NoImage, COLOR: 255 128 128 255, BORDERCOLOR: 255 0 0 255,
                               IMAGE: NoImage, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                               IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
    SLIDERTHUMBDISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 64 64 64 255, BORDERCOLOR: 128 128 128 255,
                                IMAGE: NoImage, COLOR: 0 0 0 255, BORDERCOLOR: 64 64 64 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                                IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
    SLIDERTHUMBHILITEDRAWDATA = IMAGE: arrow, COLOR: 0 255 0 255, BORDERCOLOR: 128 255 128 255,
                              IMAGE: arrow, COLOR: 0 0 255 255, BORDERCOLOR: 128 128 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
END
```

### Vertical Slider (`VERTSLIDER`)

Here's an example from the `WOLCustomLobby.wnd` file:

```nasm
WINDOW
    WINDOWTYPE = VERTSLIDER;
    SCREENRECT = UPPERLEFT: 24 150,
               BOTTOMRIGHT: 40 410,
               CREATIONRESOLUTION: 800 600;
    NAME = "WOLCustomLobby.wnd:SliderChatAdjust";
    STATUS = ENABLED+HIDDEN+IMAGE+TABSTOP;
    STYLE = VERTSLIDER+MOUSETRACK;
    SYSTEMCALLBACK = "[None]";
    INPUTCALLBACK = "[None]";
    TOOLTIPCALLBACK = "[None]";
    DRAWCALLBACK = "[None]";
    FONT = NAME: "Arial", SIZE: 10, BOLD: 0;
    HEADERTEMPLATE = "[None]";
    TOOLTIPDELAY = -1;
    TEXTCOLOR = ENABLED:  0 0 0 0, ENABLEDBORDER:  0 0 0 0,
              DISABLED: 0 0 0 0, DISABLEDBORDER: 0 0 0 0,
              HILITE:   0 0 0 0, HILITEBORDER:   0 0 0 0;
    ENABLEDDRAWDATA = IMAGE: NoImage, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    DISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 128 128 128 255, BORDERCOLOR: 64 64 64 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    HILITEDRAWDATA = IMAGE: NoImage, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    SLIDERDATA = MINVALUE: 0,
               MAXVALUE: 100;
    SLIDERTHUMBENABLEDDRAWDATA = IMAGE: WindowResizeEnabled, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                               IMAGE: WindowResizePushed, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                               IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    SLIDERTHUMBDISABLEDDRAWDATA = IMAGE: WindowResizeDisabled, COLOR: 64 64 64 255, BORDERCOLOR: 128 128 128 255,
                                IMAGE: NoImage, COLOR: 0 0 0 255, BORDERCOLOR: 64 64 64 255,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    SLIDERTHUMBHILITEDRAWDATA = IMAGE: WindowResizeHilite, COLOR: 0 255 0 255, BORDERCOLOR: 128 255 128 255,
                              IMAGE: WindowResizePushed, COLOR: 0 0 255 255, BORDERCOLOR: 128 128 255 255,
                              IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
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
