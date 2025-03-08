# EntryField Control

The **EntryField** control is used for creating single-line text input fields where users can enter text.
You can define the position, size, and appearance of the entry field, as well as set various input restrictions.

## Available Tags

In addition to the [default control tags](/user.md), the EntryField control has the following unique tag:

| Tag             | Description                                                                                    |
|-----------------|------------------------------------------------------------------------------------------------|
| `TEXTENTRYDATA` | Defines specific properties of the entry field, such as input limits, and allowed input types. |

## Default Values and Usage

The following section list the default values and available textures for each tag:
<details>
  <summary>Click to expand</summary>

### TEXTENTRYDATA

- `MAXLEN`: An integer that defines the maximum length of the input text. (e.g. `64`)
- `SECRETTEXT`: A Boolean value that defines if input text should be hidden.
                (`0` = normal, `1` = hidden, displayed as asterisks).
- `NUMERICALONLY`: A Boolean value that defines if the entry field allows only numbers.
                   (`0` = allows all characters, `1` = only numbers).
- `ALPHANUMERICALONLY`: A Boolean value that defines if the entry field allows only letters and numbers.
                        (`0` = allows all characters, `1` = only letters and numbers).
- `ASCIIONLY`: A Boolean value that defines if the entry field allows only ASCII characters.
               (`0` = allows non-ASCII, `1` = only ASCII).

### ENABLEDDRAWDATA

- `TextEntryEnabledLeftEnd`
- `TextEntryEnabledRightEnd`
- `TextEntryEnabledRepeatingCenter`
- `TextEntryEnabledSmallRepeatingCenter`

### DISABLEDDRAWDATA

- `TextEntryDisabledLeftEnd`
- `TextEntryDisabledRightEnd`
- `TextEntryDisabledRepeatingCenter`
- `TextEntryDisabledSmallRepeatingCenter`

### HILITEDRAWDATA

- `TextEntryHiliteLeftEnd`
- `TextEntryHiliteRightEnd`
- `TextEntryHiliteRepeatingCenter`
- `TextEntryHiliteSmallRepeatingCenter`

</details>

## Example

Here's an example from the `OptionsMenu.wnd` file:

<details>
  <summary>Click to expand</summary>

```nasm
WINDOW
  WINDOWTYPE = ENTRYFIELD;
  SCREENRECT = UPPERLEFT: 520 372,
               BOTTOMRIGHT: 640 397,
               CREATIONRESOLUTION: 800 600;
  NAME = "OptionsMenu.wnd:TextEntryHTTPProxy";
  STATUS = ENABLED+IMAGE;
  STYLE = ENTRYFIELD+MOUSETRACK;
  SYSTEMCALLBACK = "[None]";
  INPUTCALLBACK = "[None]";
  TOOLTIPCALLBACK = "[None]";
  DRAWCALLBACK = "[None]";
  FONT = NAME: "Arial", SIZE: 10, BOLD: 0;
  HEADERTEMPLATE = "TextEntry";
  TOOLTIPTEXT = "TOOLTIP:HTTPProxy";
  TOOLTIPDELAY = -1;
  TEXT = "Entry";
  TEXTCOLOR = ENABLED:  254 254 254 255, ENABLEDBORDER:  0 0 0 255,
              DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
              HILITE:   168 255 12 255, HILITEBORDER:   0 0 128 255;
  ENABLEDDRAWDATA = IMAGE: TextEntryEnabledLeftEnd, COLOR: 0 0 0 255, BORDERCOLOR: 0 0 0 255,
                    IMAGE: TextEntryEnabledRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: TextEntryEnabledRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: TextEntryEnabledSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  DISABLEDDRAWDATA = IMAGE: TextEntryDisabledLeftEnd, COLOR: 0 0 128 255, BORDERCOLOR: 0 0 0 255,
                     IMAGE: TextEntryDisabledRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: TextEntryDisabledRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: TextEntryDisabledSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  HILITEDRAWDATA = IMAGE: TextEntryHiliteLeftEnd, COLOR: 0 0 0 255, BORDERCOLOR: 0 0 0 255,
                   IMAGE: TextEntryHiliteRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: TextEntryHiliteRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: TextEntryHiliteSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  TEXTENTRYDATA = MAXLEN: 64,
                  SECRETTEXT: 0,
                  NUMERICALONLY: 0,
                  ALPHANUMERICALONLY: 0,
                  ASCIIONLY: 1;
END
```

</details>

## See also

- [Default control](user.md)
- [Texturing](../texturing.md)

[Category:](../Categories.md) [Controls](../Controls.md)
