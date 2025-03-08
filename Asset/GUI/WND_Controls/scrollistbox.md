# ScrollListBox Control

The **ScrollListBox** control is used for displaying a scrollable list of items. You can define the position, size, and
appearance of the list box, and it updates automatically as the user scrolls.

## Available Tags

In addition to the [default control tags](/user.md), the ScrollListBox control has the following unique tags:

| Tag                                 | Description                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------|
| `LISTBOXDATA`                       | Defines specific properties of the list box, such as length, and selection options. |
| `LISTBOXENABLEDDOWNBUTTONDRAWDATA`  | Visual texture for the down button of the list box when enabled.                    |
| `LISTBOXDISABLEDDOWNBUTTONDRAWDATA` | Visual texture for the down button of the list box when disabled.                   |
| `LISTBOXHILITEDOWNBUTTONDRAWDATA`   | Visual texture for the down button of the list box when highlighted.                |
| `LISTBOXENABLEDUPBUTTONDRAWDATA`    | Visual texture for the up button of the list box when enabled.                      |
| `LISTBOXDISABLEDUPBUTTONDRAWDATA`   | Visual texture for the up button of the list box when disabled.                     |
| `LISTBOXHILITEUPBUTTONDRAWDATA`     | Visual texture for the up button of the list box when highlighted.                  |
| `LISTBOXENABLEDSLIDERDRAWDATA`      | Visual texture for the slider (scroll bar) in the list box when enabled.            |
| `LISTBOXDISABLEDSLIDERDRAWDATA`     | Visual texture for the slider (scroll bar) in the list box when disabled.           |
| `LISTBOXHILITESLIDERDRAWDATA`       | Visual texture for the slider (scroll bar) in the list box when highlighted.        |
| `SLIDERTHUMBENABLEDDRAWDATA`        | Visual texture for the slider thumb (handle) when enabled.                          |
| `SLIDERTHUMBDISABLEDDRAWDATA`       | Visual texture for the slider thumb (handle) when disabled.                         |
| `SLIDERTHUMBHILITEDRAWDATA`         | Visual texture for the slider thumb (handle) when highlighted.                      |

## Default Values and Usage

The following section list the default values and available textures for each tag
<details>
  <summary>Click to expand</summary>

### LISTBOXDATA

- `LENGTH`: The maximum number of items that can be displayed on the listbox (e.g., 100).
- `AUTOSCROLL`: Defines if the listbox should scroll automatically to the selected item `0` = disabled, `1` = enabled.
- `AUTOPURGE`: Defines if the listbox should remove items that are not visible `0` = disabled, `1` = enabled.
- `SCROLLBAR`: Defines if the scrollbar should be visible `0` = disabled, `1` = enabled.
- `MULTISELECT`: Defines if the listbox should allow multiple items to be selected `0` = disabled, `1` = enabled.
- `COLUMNS`: The number of columns in the listbox. (e.g. 4).
- `COLUMNSWIDTH`: The width of each column in pixels. (e.g.
  `COLUMNSWIDTH: 30, COLUMNSWIDTH: 20, COLUMNSWIDTH: 25, COLUMNSWIDTH: 25` for a four columns listbox)
- `FORCESELECT`: If you set it to 1, the first item will always be selected.

### ENABLEDDRAWDATA, DISABLEDDRAWDATA, HILITEDRAWDATA

- BlackSquare / NoImage / BlackSquare
- ListBoxHiliteItemLeftEnd / NoImage / ListBoxHiliteSelectedItemLeftEnd
- ListBoxHiliteItemRightEnd / NoImage / ListBoxHiliteSelectedItemRightEnd
- ListBoxHiliteItemRepeatingCenter / NoImage / ListBoxHiliteSelectedItemRepeatingCenter
- ListBoxHiliteItemSmallRepeatingCenter / NoImage / ListBoxHiliteSelectedItemSmallRepeatingCenter
- `NoImage`

### LISTBOXENABLEDUPBUTTONDRAWDATA, LISTBOXDISABLEDUPBUTTONDRAWDATA, LISTBOXHILITEUPBUTTONDRAWDATA

- VSliderUpButtonEnabled / VSliderUpButtonDisabled / VSliderUpButtonHilite
- VSliderUpButtonHiliteSelected / NoImage / VSliderUpButtonHiliteSelected

### LISTBOXENABLEDDOWNBUTTONDRAWDATA, LISTBOXDISABLEDDOWNBUTTONDRAWDATA, LISTBOXHILITEDOWNBUTTONDRAWDATA

- VSliderDownButtonEnabled / VSliderDownButtonDisabled / VSliderDownButtonHilite
- VSliderDownButtonHiliteSelected / NoImage / VSliderDownButtonHiliteSelected

### LISTBOXENABLEDSLIDERDRAWDATA, LISTBOXDISABLEDSLIDERDRAWDATA, LISTBOXHILITESLIDERDRAWDATA

- VSliderEnabledTopEnd / VSliderDisabledTopEnd / VSliderHiliteTopEnd
- VSliderEnabledBottomEnd / VSliderDisabledBottomEnd / VSliderHiliteBottomEnd
- VSliderEnabledRepeatingCenter / VSliderDisabledRepeatingCenter / VSliderHiliteRepeatingCenter
- VSliderEnabledSmallRepeatingCenter / VSliderDisabledSmallRepeatingCenter / VSliderHiliteSmallRepeatingCenter
- NoImage

### SLIDERTHUMBENABLEDDRAWDATA, SLIDERTHUMBDISABLEDDRAWDATA, SLIDERTHUMBHILITEDRAWDATA

- ScrollBarThumbEnabled / ScrollBarThumbDisabled / ScrollBarThumbHilite
- ScrollBarThumbHiliteSelected / NoImage / ScrollBarThumbHiliteSelected
- NoImage

</details>

## How it Works

The ScrollListBox control uses multiple textures to create the visual effect of a scrollable list.

## Important Notes

- **Column Widths:** When using multiple columns, the sum of the `COLUMNSWIDTH` values must not exceed the width of the
  `SCREENRECT`.
- **`DRAWDATA`**: Each `DRAWDATA` tag consists of a sequence of **exactly 9 entries**, each defining how a specific part
  of the control's texture should be rendered. The order and position of the textures within `DRAWDATA` is critical and
  must be defined correctly according to each state of the listbox.

## Example

Here's an example from the `ReplayMenu.wnd` file:

<details>
  <summary>Click to expand</summary>

```nasm
WINDOW
  WINDOWTYPE = SCROLLLISTBOX;
  SCREENRECT = UPPERLEFT: 68 152,
               BOTTOMRIGHT: 552 428,
               CREATIONRESOLUTION: 800 600;
  NAME = "ReplayMenu.wnd:ListboxReplayFiles";
  STATUS = ENABLED;
  STYLE = SCROLLLISTBOX+MOUSETRACK;
  SYSTEMCALLBACK = "[None]";
  INPUTCALLBACK = "[None]";
  TOOLTIPCALLBACK = "[None]";
  DRAWCALLBACK = "[None]";
  FONT = NAME: "Arial", SIZE: 10, BOLD: 0;
  HEADERTEMPLATE = "LabelRegular";
  TOOLTIPDELAY = -1;
  TEXTCOLOR = ENABLED:  254 254 254 255, ENABLEDBORDER:  0 0 0 255,
              DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
              HILITE:   128 128 255 255, HILITEBORDER:   0 0 128 255;
  ENABLEDDRAWDATA = IMAGE: BlackSquare, COLOR: 0 0 0 126, BORDERCOLOR: 49 55 168 255,
                    IMAGE: ListBoxHiliteItemLeftEnd, COLOR: 255 255 0 255, BORDERCOLOR: 254 254 254 255,
                    IMAGE: ListBoxHiliteItemRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: ListBoxHiliteItemRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: ListBoxHiliteItemSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  DISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 255 4 0 0, BORDERCOLOR: 49 55 168 255,
                     IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  HILITEDRAWDATA = IMAGE: BlackSquare, COLOR: 0 0 0 126, BORDERCOLOR: 49 55 168 255,
                   IMAGE: ListBoxHiliteSelectedItemLeftEnd, COLOR: 254 254 254 255, BORDERCOLOR: 0 128 0 255,
                   IMAGE: ListBoxHiliteSelectedItemRightEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: ListBoxHiliteSelectedItemRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: ListBoxHiliteSelectedItemSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  LISTBOXDATA = LENGTH: 100,
                AUTOSCROLL: 0,
                AUTOPURGE: 0,
                SCROLLBAR: 1,
                MULTISELECT: 0,
                COLUMNS: 4,
                COLUMNSWIDTH: 30,
                COLUMNSWIDTH: 20,
                COLUMNSWIDTH: 25,
                COLUMNSWIDTH: 25,
                FORCESELECT: 1;
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
  LISTBOXENABLEDSLIDERDRAWDATA = IMAGE: VSliderEnabledTopEnd, COLOR: 255 190 0 0, BORDERCOLOR: 47 55 168 255,
                                 IMAGE: VSliderEnabledBottomEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: VSliderEnabledRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: VSliderEnabledSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                 IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  LISTBOXDISABLEDSLIDERDRAWDATA = IMAGE: VSliderDisabledTopEnd, COLOR: 128 128 128 0, BORDERCOLOR: 148 112 0 255,
                                  IMAGE: VSliderDisabledBottomEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: VSliderDisabledRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: VSliderDisabledSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                  IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
  LISTBOXHILITESLIDERDRAWDATA = IMAGE: VSliderHiliteTopEnd, COLOR: 0 255 0 0, BORDERCOLOR: 49 55 168 255,
                                IMAGE: VSliderHiliteBottomEnd, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: VSliderHiliteRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                                IMAGE: VSliderHiliteSmallRepeatingCenter, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
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
