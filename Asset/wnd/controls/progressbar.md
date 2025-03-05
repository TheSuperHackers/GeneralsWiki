# ProgressBar Control

The **ProgressBar** control is used for visually displaying the progress of a task. You can define the position, size,
and appearance of the progress bar, and it updates automatically as the progress changes.

## Available Tags

The ProgressBar control does not have any unique tags beyond the [default control tags](../controls/user.md).
It uses the same general set of tags applicable to all controls.

## Default Values and Usage

The following section list the default values and available textures for each tag

### ENABLEDDRAWDATA

* `LoadingBar_L`
* `LoadingBar_R`
* `LoadingBar_C`
* `LoadingBar_DePowered`
* `LoadingBar_Progress`
* `NoImage`

### DISABLEDDRAWDATA, HILITEDRAWDATA

* `NoImage` (Usually `NoImage` is used for all parts)

## Example

Here's an example from the `ChallengeLoadScreen.wnd` file:
<details>
<summary>Click to expand</summary>

```nasm
WINDOW
    WINDOWTYPE = PROGRESSBAR;
    SCREENRECT = UPPERLEFT: 39 565,
               BOTTOMRIGHT: 761 585,
               CREATIONRESOLUTION: 800 600;
    NAME = "ChallengeLoadScreen.wnd:ProgressLoad";
    STATUS = ENABLED+IMAGE;
    STYLE = PROGRESSBAR+MOUSETRACK;
    SYSTEMCALLBACK = "[None]";
    INPUTCALLBACK = "[None]";
    TOOLTIPCALLBACK = "[None]";
    DRAWCALLBACK = "[None]";
    FONT = NAME: "Times New Roman", SIZE: 14, BOLD: 0;
    HEADERTEMPLATE = "[NONE]";
    TOOLTIPTEXT = "Tooltip:LoadProgress";
    TOOLTIPDELAY = -1;
    TEXTCOLOR = ENABLED:  254 254 254 255, ENABLEDBORDER:  0 0 0 255,
              DISABLED: 192 192 192 255, DISABLEDBORDER: 64 64 64 255,
              HILITE:   128 128 255 255, HILITEBORDER:   0 0 128 255;
    ENABLEDDRAWDATA = IMAGE: LoadingBar_L, COLOR: 255 0 0 255, BORDERCOLOR: 255 128 128 255,
                    IMAGE: LoadingBar_R, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: LoadingBar_C, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 47 55 168 255, BORDERCOLOR: 254 254 254 255,
                    IMAGE: LoadingBar_DePowered, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: LoadingBar_Progress, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                    IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    DISABLEDDRAWDATA = IMAGE: NoImage, COLOR: 64 64 64 255, BORDERCOLOR: 192 192 192 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 192 192 192 255, BORDERCOLOR: 254 254 254 255,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                     IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
    HILITEDRAWDATA = IMAGE: NoImage, COLOR: 0 255 0 255, BORDERCOLOR: 0 128 0 255,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 47 55 168 255, BORDERCOLOR: 254 254 254 255,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0,
                   IMAGE: NoImage, COLOR: 255 255 255 0, BORDERCOLOR: 255 255 255 0;
END
```

</details>

## See also

* [Default control](user.md)
* [Texturing](../texturing.md)

[Category:](../Categories.md) [Controls](../Controls.md)

