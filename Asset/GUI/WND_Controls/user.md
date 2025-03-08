# USER Control

The **USER** control is the default control type, used for multiple purposes.
It can serve as a container or group for other controls, as well as a tool for drawing rectangular shapes or
lines by defining their position. Other controls also use the tags defined for the **USER** control,
in addition to their own specific tags.

## Purposes of the Control

1. **Container/Group**:  
   The **USER** control can act as a container, holding and organizing other controls.
   This allows for efficient layout and management of multiple elements on the screen.

2. **Drawing Rectangles or Lines**:  
   It can also be used to draw rectangular shapes or lines by specifying the position and dimensions,
   making it useful for creating visual boundaries or shapes within the UI.

### Opening and Closing a Control

Each control is opened with the keyword `WINDOW` and closed with the keyword `END`.

For the **USER** control, when it serves as a container (group), it can contain other controls as children.
Each child control is preceded by the keyword `CHILD`, and after all the children have been defined,
the keyword `ENDALLCHILDREN` should be used to close the group of children and return to the main control.

#### Example with Children

```nasm
WINDOW
  WINDOWTYPE = USER ; parent
  ... rest of control options
  CHILD
  WINDOW ; child
    WINDOWTYPE = CHECKBOX
    ... rest of control child options
  END
  CHILD
  WINDOW ; child
    WINDOWTYPE = COMBOBOX
    ... rest of control child options
  END
  WINDOW ; child and parent or just a drawing
    WINDOWTYPE = USER
    ... rest of control child options
  END
  ENDALLCHILDREN
END
```

## Available Tags

The following tags are available for the **USER** control:
<small>Click on the links to view available values and options for the tag.</small>

| Tag                                                           | Description                                                                                                  |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `WINDOWTYPE`                                                  | The control type.                                                                                            |
| `SCREENRECT`                                                  | Defines the size and position of the control on the screen.                                                  |
| `NAME`                                                        | The name of the control.                                                                                     |
| `STATUS`                                                      | The status of the control. see [statuses](../status.md)                                                      |
| `STYLE`                                                       | The style of the control. see [styles](../style.md).                                                         |
| `SYSTEMCALLBACK`                                              | The system callback function for the control. see [callbacks](../callbacks.md).                              |
| `INPUTCALLBACK`                                               | The input callback function for the control.                                                                 |
| `TOOLTIPCALLBACK`                                             | Callback function for the control’s tooltip.                                                                 |
| `DRAWCALLBACK`                                                | Callback function for the control’s texture.                                                                 |
| `FONT`                                                        | Font settings. see [Text Properties](../text_properties.md).                                                 |
| `HEADERTEMPLATE` (Optional)                                   | Defines the template for the control’s text. see [Text Properties](../text_properties.md).                   |
| `TOOLTIPTEXT` (Optional)                                      | Text for the tooltip displayed when hovering over the control. see [Text Properties](../text_properties.md). |
| `TOOLTIPDELAY`                                                | Delay `0...n` time for the tooltip to appear, `-1` for disable.                                              |
| `TEXT` (Optional)                                             | The text displayed in the control. see [Text Properties](../text_properties.md).                             |
| `TEXTCOLOR`                                                   | Color settings for text in different states. see [Text Properties](../text_properties.md).                   |
| `ENABLEDDRAWDATA`,<br>`DISABLEDDRAWDATA`,<br>`HILITEDRAWDATA` | Visual texture for the control in different states. see [Texturing](../texturing.md).                        |

<small>Note: All tags are case-sensitive.</small>

<small>Note: The order of the tags is crucial for proper rendering of the control and must be followed as specified.</small>

## Example

Here’s a sample code defining a **USER** control:

<small>Note: Each texture contain 9 elements</small>

```nasm
WINDOW
   WINDOWTYPE = USER;
   SCREENRECT = UPPERLEFT: 140 20,
               BOTTOMRIGHT: 660 544,
               CREATIONRESOLUTION: 800 600;
   NAME = "OptionsMenu.wnd:OptionsMenuParent";
   STATUS = ENABLED+NOFOCUS+SEE_THRU;
   STYLE = USER;
   SYSTEMCALLBACK = "OptionsMenuSystem";
   INPUTCALLBACK = "OptionsMenuInput";
   TOOLTIPCALLBACK = "[None]";
   DRAWCALLBACK = "[None]";
   FONT = NAME: "Times New Roman", SIZE: 14, BOLD: 0;
   HEADERTEMPLATE = "[NONE]";
   TOOLTIPDELAY = -1;
   TEXTCOLOR = ENABLED:  255 255 255 0, ENABLEDBORDER:  255 255 255 0,
              DISABLED: 255 255 255 0, DISABLEDBORDER: 255 255 255 0,
              HILITE:   255 255 255 0, HILITEBORDER:   255 255 255 0;
   ENABLEDDRAWDATA = IMAGE: NoImage, COLOR: 2 2 2 175, BORDERCOLOR: 47 55 168 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                     IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
   DISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 64 64 64 255, BORDERCOLOR: 254 254 254 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                      IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
   HILITEDRAWDATA = IMAGE: NoImage, COLOR: 128 128 255 255, BORDERCOLOR: 254 254 254 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255,
                    IMAGE: NoImage, COLOR: 255 255 255 255, BORDERCOLOR: 255 255 255 255;
END
```

## See Also

* [Callbacks](../callbacks.md)
- [Texturing](../texturing.md)

[Category:](../Categories.md) [Controls](../Controls.md)
