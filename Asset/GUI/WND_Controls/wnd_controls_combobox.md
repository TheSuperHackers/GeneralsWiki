# ComboBox Control

The **ComboBox** control is used for creating a dropdown list. You can define the position, size,
and appearance of the **ComboBox**.

## Available tags

In addition to the [default control tags](wnd_controls_user), the following tags are available.

- The control does not have a `TEXT` tag. Unlike controls such as checkboxes, which include a text label,
this control is self-contained and does not display or use a text label.

| Tag                                      | Description                                                                  |
|------------------------------------------|------------------------------------------------------------------------------|
| `COMBOBOXDATA`                           | Defines specific properties of the ComboBox.                                 |
| `COMBOBOXDROPDOWNBUTTONENABLEDDRAWDATA`  | Visual texture for the dropdown button of the ComboBox when enabled.         |
| `COMBOBOXDROPDOWNBUTTONDISABLEDDRAWDATA` | Visual texture for the dropdown button of the ComboBox when disabled.        |
| `COMBOBOXDROPDOWNBUTTONHILITEDRAWDATA`   | Visual texture for the dropdown button of the ComboBox when highlighted.     |
| `COMBOBOXEDITBOXENABLEDDRAWDATA`         | Visual texture for the edit box of the ComboBox when enabled.                |
| `COMBOBOXEDITBOXDISABLEDDRAWDATA`        | Visual texture for the edit box of the ComboBox when disabled.               |
| `COMBOBOXEDITBOXHILITEDRAWDATA`          | Visual texture for the edit box of the ComboBox when highlighted.            |
| `LISTBOXENABLEDDRAWDATA`                 | Visual texture for the list box (dropdown options) when enabled.             |
| `LISTBOXDISABLEDDRAWDATA`                | Visual texture for the list box (dropdown options) when disabled.            |
| `LISTBOXHILITEDRAWDATA`                  | Visual texture for the list box (dropdown options) when highlighted.         |
| `LISTBOXENABLEDUPEXBUTTONDRAWDATA`       | Visual texture for the up button of the list box when enabled.               |
| `LISTBOXDISABLEDUPEXBUTTONDRAWDATA`      | Visual texture for the up button of the list box when disabled.              |
| `LISTBOXHILITEUPBUTTONDRAWDATA`          | Visual texture for the up button of the list box when highlighted.           |
| `LISTBOXENABLEDDOWNBUTTONDRAWDATA`       | Visual texture for the down button of the list box when enabled.             |
| `LISTBOXDISABLEDDOWNBUTTONDRAWDATA`      | Visual texture for the down button of the list box when disabled.            |
| `LISTBOXHILITEDOWNBUTTONDRAWDATA`        | Visual texture for the down button of the list box when highlighted.         |
| `LISTBOXENABLEDSLIDERDRAWDATA`           | Visual texture for the slider (scroll bar) in the list box when enabled.     |
| `LISTBOXDISABLEDSLIDERDRAWDATA`          | Visual texture for the slider (scroll bar) in the list box when disabled.    |
| `LISTBOXHILITESLIDERDRAWDATA`            | Visual texture for the slider (scroll bar) in the list box when highlighted. |
| `SLIDERTHUMBENABLEDDRAWDATA`             | Visual texture for the slider thumb (handle) when enabled.                   |
| `SLIDERTHUMBDISABLEDDRAWDATA`            | Visual texture for the slider thumb (handle) when disabled.                  |
| `SLIDERTHUMBHILITEDRAWDATA`              | Visual texture for the slider thumb (handle) when highlighted.               |

## Default values

The following section list the default values and available textures for each tag

<details>
  <summary>Click to expand</summary>

### COMBOBOXDATA

- **ISEDITABLE**: Defines whether the combobox is editable.
                  0 = non-editable (only dropdown selection allowed), 1 = editable (user can type in the field).
- **MAXCHARS**: The maximum number of characters allowed in the edit field when the combobox is editable (e.g., 16).
- **MAXDISPLAY**: The maximum number of items to display at once in the dropdown list without scrolling (e.g., 2).
- **ASCIIONLY**:  Defines if only ASCII characters are allowed in the edit field:
                  0 = allows non-ASCII characters, 1 = only ASCII.
- **LETTERSANDNUMBERS**:  Defines if only letters and numbers are allowed in the edit field:
                          0 = allows all characters, 1 = allows only letters and numbers.

### ENABLEDDRAWDATA, DISABLEDDRAWDATA, HILITEDRAWDATA

- NoImage / NoImage / ListBoxHiliteSelectedItemLeftEnd
- NoImage / NoImage / ListBoxHiliteSelectedItemRightEnd
- NoImage / NoImage / ListBoxHiliteSelectedItemRepeatingCenter
- NoImage / NoImage / ListBoxHiliteSelectedItemSmallRepeatingCenter

### COMBOBOXDROPDOWNBUTTONENABLEDDRAWDATA, COMBOBOXDROPDOWNBUTTONDISABLEDDRAWDATA, COMBOBOXDROPDOWNBUTTONHILITEDRAWDATA

- VSliderDownButtonEnabled / VSliderDownButtonDisabled / VSliderDownButtonHilite
- VSliderDownButtonHiliteSelected / NoImage / VSliderDownButtonHiliteSelected

### COMBOBOXEDITBOXENABLEDDRAWDATA, COMBOBOXEDITBOXDISABLEDDRAWDATA, COMBOBOXEDITBOXHILITEDRAWDATA

- TextEntryEnabledLeftEnd / TextEntryDisabledLeftEnd / TextEntryHiliteLeftEnd
- TextEntryEnabledRightEnd / TextEntryDisabledRightEnd / TextEntryHiliteRightEnd
- TextEntryEnabledRepeatingCenter / TextEntryDisabledRepeatingCenter / TextEntryHiliteRepeatingCenter
- TextEntryEnabledSmallRepeatingCenter / TextEntryDisabledSmallRepeatingCenter / TextEntryHiliteSmallRepeatingCenter

### COMBOBOXLISTBOXENABLEDDRAWDATA, COMBOBOXLISTBOXDISABLEDDRAWDATA, COMBOBOXLISTBOXHILITEDRAWDATA

- BlackSquare
- ListBoxHiliteItemLeftEnd / NoImage / ListBoxHiliteSelectedItemLeftEnd
- ListBoxHiliteItemRightEnd / NoImage / ListBoxHiliteSelectedItemRightEnd
- ListBoxHiliteItemRepeatingCenter / NoImage / ListBoxHiliteSelectedItemRepeatingCenter
- ListBoxHiliteItemSmallRepeatingCenter / NoImage / ListBoxHiliteSelectedItemSmallRepeatingCenter

### LISTBOXENABLEDDOWNBUTTONDRAWDATA, LISTBOXDISABLEDDOWNBUTTONDRAWDATA, LISTBOXHILITEDOWNBUTTONDRAWDATA

- VSliderDownButtonEnabled / VSliderDownButtonDisabled / VSliderDownButtonHilite
- VSliderDownButtonHiliteSelected / NoImage / VSliderDownButtonHiliteSelected

### LISTBOXENABLEDSLIDERDRAWDATA, LISTBOXDISABLEDSLIDERDRAWDATA, LISTBOXHILITESLIDERDRAWDATA

- NoImage

### SLIDERTHUMBENABLEDDRAWDATA, SLIDERTHUMBDISABLEDDRAWDATA, SLIDERTHUMBHILITEDRAWDATA

- ScrollBarThumbEnabled / ScrollBarThumbDisabled / ScrollBarThumbHilite
- ScrollBarThumbHiliteSelected / NoImage / ScrollBarThumbHiliteSelected

</details>

## Known Issues

1. **Item text color cannot be changed:**
   It is currently not possible to change the color of the text (for list items). By default, the text color is white.

2. **Clicking items outside container boundaries:**
   If the ComboBox is inside a window container and the list extends beyond the window's boundaries,
   it is not possible to click on items that are outside of the visible area of the container.
   This may cause issues when interacting with the ComboBox.

## Example

Here example from IP address ComboBox in the `OptionsMenu.wnd` file:

<details>
  <summary>Click to expand</summary>

   ```nasm
WINDOW
   WINDOWTYPE = COMBOBOX;
   SCREENRECT = UPPERLEFT: 240 464,
                BOTTOMRIGHT: 350 489,
                CREATIONRESOLUTION: 800 600;
   NAME = "OptionsMenu.wnd:ComboBoxIP";
   STATUS = ENABLED+IMAGE;
   STYLE = MOUSETRACK+COMBOBOX;
   SYSTEMCALLBACK = "[None]";
   INPUTCALLBACK = "[None]";
   TOOLTIPCALLBACK = "[None]";
   DRAWCALLBACK = "[None]";
   FONT = NAME: "Arial", SIZE: 10, BOLD: 0;
   HEADERTEMPLATE = "ComboBoxEntry";
   TOOLTIPTEXT = "TOOLTIP:LanIP";
   TOOLTIPDELAY = -1;
   TEXTCOLOR = ENABLED:  254 254 254 255, ENABLEDBORDER:  0 0 0 255,
              DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
              HILITE:   128 128 255 255, HILITEBORDER:   0 0 128 255;
   ENABLEDDRAWDATA = IMAGE: NoImage, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                    IMAGE: NoImage, COLOR: 47 55 168 255, BORDERCOLOR: 254 254 254 255,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   DISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                      IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   HILITEDRAWDATA = IMAGE: NoImage, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                    IMAGE: ListBoxHiliteSelectedItemLeftEnd, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
                    IMAGE: ListBoxHiliteSelectedItemRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: ListBoxHiliteSelectedItemRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: ListBoxHiliteSelectedItemSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXDATA = ISEDITABLE: 0,
                MAXCHARS: 16,
                MAXDISPLAY: 2,
                ASCIIONLY: 0,
                LETTERSANDNUMBERS: 0;
   COMBOBOXDROPDOWNBUTTONENABLEDDRAWDATA = IMAGE: VSliderDownButtonEnabled, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                                          IMAGE: VSliderDownButtonHiliteSelected, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXDROPDOWNBUTTONDISABLEDDRAWDATA = IMAGE: VSliderDownButtonDisabled, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                                            IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 128 128 128 255,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                            IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXDROPDOWNBUTTONHILITEDRAWDATA = IMAGE: VSliderDownButtonHilite, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                                          IMAGE: VSliderDownButtonHiliteSelected, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                          IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXEDITBOXENABLEDDRAWDATA = IMAGE: TextEntryEnabledLeftEnd, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                                    IMAGE: TextEntryEnabledRightEnd, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                    IMAGE: TextEntryEnabledRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: TextEntryEnabledSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXEDITBOXDISABLEDDRAWDATA = IMAGE: TextEntryDisabledLeftEnd, COLOR: 128 128 128 255, BORDERCOLOR: 0 0 0 255,
                                    IMAGE: TextEntryDisabledRightEnd, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                                    IMAGE: TextEntryDisabledRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: TextEntryDisabledSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXEDITBOXHILITEDRAWDATA = IMAGE: TextEntryHiliteLeftEnd, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                                  IMAGE: TextEntryHiliteRightEnd, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
                                  IMAGE: TextEntryHiliteRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: TextEntryHiliteSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXLISTBOXENABLEDDRAWDATA = IMAGE: BlackSquare, COLOR: 0 0 0 255, BORDERCOLOR: 49 55 168 255,
                                    IMAGE: ListBoxHiliteItemLeftEnd, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                    IMAGE: ListBoxHiliteItemRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: ListBoxHiliteItemRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: ListBoxHiliteItemSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXLISTBOXDISABLEDDRAWDATA = IMAGE: BlackSquare, COLOR: 0 0 0 255, BORDERCOLOR: 49 55 168 255,
                                    IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   COMBOBOXLISTBOXHILITEDRAWDATA = IMAGE: BlackSquare, COLOR: 0 0 0 255, BORDERCOLOR: 49 55 168 255,
                                  IMAGE: ListBoxHiliteSelectedItemLeftEnd, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
                                  IMAGE: ListBoxHiliteSelectedItemRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: ListBoxHiliteSelectedItemRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: ListBoxHiliteSelectedItemSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXENABLEDUPBUTTONDRAWDATA = IMAGE: VSliderUpButtonEnabled, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                                    IMAGE: VSliderUpButtonHiliteSelected, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXDISABLEDUPBUTTONDRAWDATA = IMAGE: VSliderUpButtonDisabled, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                                    IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXHILITEUPBUTTONDRAWDATA = IMAGE: VSliderUpButtonHilite, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                                  IMAGE: VSliderUpButtonHiliteSelected, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXENABLEDDOWNBUTTONDRAWDATA = IMAGE: VSliderDownButtonEnabled, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                                      IMAGE: VSliderDownButtonHiliteSelected, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXDISABLEDDOWNBUTTONDRAWDATA = IMAGE: VSliderDownButtonDisabled, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                                      IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                      IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXHILITEDOWNBUTTONDRAWDATA = IMAGE: VSliderDownButtonHilite, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                                    IMAGE: VSliderDownButtonHiliteSelected, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXENABLEDSLIDERDRAWDATA = IMAGE: NoImage, COLOR: 168 255 12 0, BORDERCOLOR: 47 55 168 255,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXDISABLEDSLIDERDRAWDATA = IMAGE: NoImage, COLOR: 128 128 128 0, BORDERCOLOR: 148 112 0 255,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   LISTBOXHILITESLIDERDRAWDATA = IMAGE: NoImage, COLOR: 0 255 0 0, BORDERCOLOR: 49 55 168 255,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   SLIDERTHUMBENABLEDDRAWDATA = IMAGE: ScrollBarThumbEnabled, COLOR: 255 4 0 0, BORDERCOLOR: 255 243 28 255,
                                IMAGE: ScrollBarThumbHiliteSelected, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   SLIDERTHUMBDISABLEDDRAWDATA = IMAGE: ScrollBarThumbDisabled, COLOR: 128 128 128 255, BORDERCOLOR: 192 192 192 255,
                                IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
   SLIDERTHUMBHILITEDRAWDATA = IMAGE: ScrollBarThumbHilite, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                              IMAGE: ScrollBarThumbHiliteSelected, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
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

- [Default control](wnd_controls_user)
- [Texturing](../texturing.md)

[Category:](../Categories.md) [Controls](../Controls.md)
