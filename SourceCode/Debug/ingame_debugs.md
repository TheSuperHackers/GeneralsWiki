<!-- markdownlint-disable MD033 -->
# In-Game Debug Commands

> **⚠️ Important Notice**: These debug commands are only available in debug builds of Command & Conquer: Generals
> and Zero Hour. They will not work in release builds.

<br>

<details>
<summary>Commands Available in Both Generals and Zero Hour</summary>

  <details>
  <summary>├─ Game State & Cheats (10)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | DEMO_WIN | Instantly win the current game or mission | GAME |
| <kbd>Ctrl</kbd> + <kbd>=</kbd> | DEMO_ADDCASH | Adds 10000 cash to the player's current resources | GAME |
| <kbd>Alt</kbd> + <kbd>F</kbd> | DEMO_INSTANT_BUILD | Toggles instant building for all units and structures | GAME |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | DEMO_GIVE_VETERANCY | grants the selected unit(s) a level of veterancy | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>V</kbd> | DEMO_TAKE_VETERANCY | removes a level of veterancy from the selected unit(s) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>P</kbd> | DEMO_GIVE_SCIENCEPURCHASEPOINTS | Gives the player 1 science purchase point | GAME |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_GIVE_ALL_SCIENCES | Instantly unlocks all sciences for the player | GAME |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_GIVE_RANKLEVEL | Grants the player a rank level | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_TAKE_RANKLEVEL | Subtracts the player's current rank level by 1 | GAME |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SPECIAL_POWER_DELAYS | Toggles whether special powers, super weapons and abilities have a delay before they can be used again | GAME |

  </details>

  <details>
  <summary>├─ Visual & Rendering (13)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>F11</kbd> | DEMO_TOGGLE_BEHIND_BUILDINGS | Toggles the outline around units when they are obscured by buildings | GAME |
| <kbd>Ctrl</kbd> + <kbd>F10</kbd> | DEMO_TOGGLE_BW_VIEW | Toggles a black and white wireframe mode | GAME SHELL |
| <kbd>Ctrl</kbd> + <kbd>F11</kbd> | DEMO_TOGGLE_RED_VIEW | toggles a (useless?) red view mode | GAME SHELL |
| <kbd>Ctrl</kbd> + <kbd>F12</kbd> | DEMO_TOGGLE_GREEN_VIEW | toggles a (useless?) green view mode | GAME SHELL |
| <kbd>Ctrl</kbd> + <kbd>F9</kbd> | DEMO_TOGGLE_MOTION_BLUR_ZOOM | plays a (useless?) zoom animation with motion blur effects | GAME SHELL |
| <kbd>Ctrl</kbd> + <kbd>\</kbd> | DEMO_TOGGLE_RENDER | Toggles rendering of new frames. (essentially freezes the game in place) | GAME |
| <kbd>/</kbd> | DEMO_TOGGLE_NO_DRAW | Toggles rendering of new frames. (essentially freezes the game in place). seems to be redundant with DEMO_TOGGLE_RENDER. **Note:** BROKEN, the off toggle doesn't work | GAME |
| <kbd>Shift</kbd> + <kbd>J</kbd> | DEMO_TOGGLE_SHADOW_VOLUMES | Toggles the rendering of shadow volumes | GAME |
| <kbd>]</kbd> | DEMO_TOGGLE_WATERPLANE | Toggles the rendering of the water plane. (doesn't seem to work) | GAME |
| <kbd>[</kbd> | DEMO_TOGGLE_TRACKMARKS | Toggles the rendering of track marks on the ground | GAME |
| <kbd>Alt</kbd> + <kbd>W</kbd> | DEMO_TOGGLE_FEATHER_WATER | Visually cycles between different water depths | GAME |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | DEMO_SHOW_EXTENTS | Toggles the visibility of the bounding box around units | GAME |
| <kbd>Alt</kbd> + <kbd>H</kbd> | DEMO_SHOW_HEALTH | Toggles the visibility of health bars above units and structures | GAME |

  </details>

  <details>
  <summary>├─ Audio (5)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SOUND | Toggles game audio on and off | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> | DEMO_TOGGLE_MUSIC | Toggles game music on and off | GAME |
| <kbd>Shift</kbd> + <kbd>M</kbd> | DEMO_MUSIC_NEXT_TRACK | Skips to the next music track in the playlist | GAME |
| <kbd>Ctrl</kbd> + <kbd>M</kbd> | DEMO_MUSIC_PREV_TRACK | Skips to the previous music track in the playlist | GAME |
| <kbd>Shift</kbd> + <kbd>A</kbd> | DEMO_TOGGLE_AUDIODEBUG | Toggles audio debugging information on and off | GAME SHELL |

  </details>

  <details>
  <summary>├─ Camera & View (8)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> | DEMO_LOCK_CAMERA_TO_SELECTION | Locks the camera to the currently selected unit or structure | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> | DEMO_TOGGLE_CAMERA_DEBUG |  | GAME |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> | DEMO_TOGGLE_ZOOM_LOCK | Toggles the cameras zoom limitations, allowing for unrestricted zooming in and out when disabled | GAME |
| <kbd>,</kbd> | DEMO_BEGIN_ADJUST_PITCH | Begins adjusting the camera's pitch | GAME |
| <kbd>,</kbd> (Release) | DEMO_END_ADJUST_PITCH | Ends adjusting the camera's pitch | GAME |
| <kbd>.</kbd> | DEMO_BEGIN_ADJUST_FOV | Begins adjusting the camera's field of view (FOV) | GAME |
| <kbd>.</kbd> (Release) | DEMO_END_ADJUST_FOV | Ends adjusting the camera's field of view (FOV) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>D</kbd> | DEMO_TIME_OF_DAY | Cycles through different times of day | GAME |

  </details>

  <details>
  <summary>├─ AI & Team (3)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Space</kbd> | DEMO_SWITCH_TEAMS | Cycles through the players in the game, sequentially passing control to each one | GAME |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | DEMO_SWITCH_TEAMS_CHINA_USA | Cycles through USA and China players in the game on the same team as the player, sequentially passing control to each one | GAME |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEMO_TOGGLE_AI_DEBUG | Toggles visual AI debugging information on and off | GAME |

  </details>

  <details>
  <summary>├─ Debug Information & Stats (9)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEMO_TOGGLE_DEBUG_STATS | Toggles the visibility of debug information overlays | GAME SHELL |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | DEMO_TOGGLE_METRICS |  | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEMO_TOGGLE_GRAPHICALFRAMERATEBAR | Toggles the worlds most useless graphical framerate bar on and off | GAME SHELL |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd> | DEMO_TOGGLE_VISIONDEBUG | Toggles the visibility of the vision debug overlay for units and structures | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>B</kbd> | DEMO_TOGGLE_PROJECTILEDEBUG | Toggles the visibility of visual projectile debug information | GAME |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | DEMO_TOGGLE_PARTICLEDEBUG | Toggles the visibility of visual particle debug information | GAME |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | DEMO_TOGGLE_CASHMAPDEBUG | Toggles the visibility of visual cash map debug information | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>O</kbd> | DEMO_TOGGLE_THREATDEBUG | Toggles the visibility of visual threat debug information | GAME |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | DEMO_DEBUG_SELECTION | Toggles the visibility of the selected unit(s) or structure's debug information | GAME |

  </details>

  <details>
  <summary>├─ Map & Fog of War (3)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> | DEMO_TOGGLE_FOGOFWAR | Toggles the rendering of certain things in the fog of war. (Useless?) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> | DEMO_ENSHROUD | Shrouds all areas of the map that aren't currently visible to the player or their allies | GAME |
| <kbd>Ctrl</kbd> + <kbd>R</kbd> | DEMO_DESHROUD | Fully reveals the entire map, removing all fog of war and shroud | GAME |

  </details>

  <details>
  <summary>├─ Combat & Units (5)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Numpad /</kbd> | DEMO_KILL_ALL_ENEMIES | Instantly kills all enemies on the map | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>X</kbd> | DEMO_KILL_SELECTION | Instantly kills the currently selected unit or structure. Only works on units and structures belonging to the player | GAME |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | DEMO_TOGGLE_HURT_ME_MODE | Toggles the "Hurt Me" mode, causing 10% damage every time a unit or structure is selected | GAME |
| <kbd>Alt</kbd> + <kbd>G</kbd> | DEMO_TOGGLE_HAND_OF_GOD_MODE | Toggles the "Hand of God" mode, allowing the player to instantly destroy any unit or structure by selecting it | GAME |
| <kbd>Shift</kbd> + <kbd>B</kbd> | DEMO_BATTLE_CRY | Plays a battle cry sound effect. (Useless?) | GAME |

  </details>

  <details>
  <summary>├─ Performance & Level of Detail (5)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>-</kbd> | DEMO_LOD_DECREASE | Decrease the level of detail (LOD) by one level for all objects in the game | GAME |
| <kbd>=</kbd> | DEMO_LOD_INCREASE | Increase the level of detail (LOD) by one level for all objects in the game | GAME |
| <kbd>Alt</kbd> + <kbd>-</kbd> | DEMO_CYCLE_LOD_LEVEL | Cycles through the available LOD levels for all objects in the game | GAME |
| <kbd>Ctrl</kbd> + <kbd>J</kbd> | DEMO_INCR_ANIM_SKATE_SPEED | Increases the animation skate speed for all units and structures in the game. (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>J</kbd> | DEMO_DECR_ANIM_SKATE_SPEED | Decreases the animation skate speed for all units and structures in the game. (Needs further information) | GAME |

  </details>

  <details>
  <summary>├─ System & Technical (8)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEMO_DUMP_ASSETS | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>F11</kbd> | DEMO_TOGGLE_AVI | (Needs further information) | GAME SHELL |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>N</kbd> | DEMO_TOGGLE_NETWORK | (Needs further information) | GAME |
| <kbd>Alt</kbd> + <kbd>T</kbd> | DEMO_TOGGLE_MESSAGE_TEXT | Toggles the visibility of in-game messages | GAME |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | DEMO_VTUNE_ON | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>G</kbd> | DEMO_VTUNE_OFF | (Needs further information) | GAME |
| <kbd>Alt</kbd> + <kbd>O</kbd> | DEBUG_DUMP_PLAYER_OBJECTS | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | DEBUG_DUMP_ALL_PLAYER_OBJECTS | (Needs further information) | GAME |

  </details>

  <details>
  <summary>├─ Scripts & Movies (10)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F1</kbd> | DEMO_RUNSCRIPT1 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F2</kbd> | DEMO_RUNSCRIPT2 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F3</kbd> | DEMO_RUNSCRIPT3 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F4</kbd> | DEMO_RUNSCRIPT4 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F5</kbd> | DEMO_RUNSCRIPT5 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F6</kbd> | DEMO_RUNSCRIPT6 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F7</kbd> | DEMO_RUNSCRIPT7 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F8</kbd> | DEMO_RUNSCRIPT8 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F9</kbd> | DEMO_RUNSCRIPT9 | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | DEMO_NEXT_OBJECTIVE_MOVIE | (Needs further information) | GAME |

  </details>

</details>

<br>

<details>
<summary>Commands Available Only in Generals</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> | DEMO_INSTANT_QUIT | (needs further information) | GAME SHELL |

</details>

<br>

<details>
<summary>Commands Available Only in Zero Hour</summary>

  <details>
  <summary>├─ Performance Analysis (4)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEBUG_OBJECT_ID_PERFORMANCE | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEBUG_DRAWABLE_ID_PERFORMANCE | (Needs further information) | GAME |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>W</kbd> | DEBUG_SLEEPY_UPDATE_PERFORMANCE | (needs further information) | GAME |
| <kbd>Alt</kbd> + <kbd>Q</kbd> | DEMO_PERFORM_STATISTICAL_DUMP | (Needs further information) | GAME SHELL |

  </details>

  <details>
  <summary>├─ Game Features (1)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SUPPLY_CENTER_PLACEMENT | (Needs further information) | GAME |

  </details>

  <details>
  <summary>├─ Audio (1)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> | DEMO_SHOW_AUDIO_LOCATIONS | Displays visual overlays regarding audio? (needs further information) | GAME SHELL |

  </details>

</details>

<br>

---

## How to Use These Commands

**Key Combination Format:**

All hotkeys in this document are displayed using keyboard key styling with `<kbd>` tags:

- **Single Key:** Press the key (e.g., <kbd>F11</kbd>, <kbd>=</kbd>, <kbd>[</kbd>)
- **Modifier + Key:** Hold the modifier key(s), then press the main key (e.g., <kbd>Ctrl</kbd> + <kbd>W</kbd>)
- **Multiple Modifiers:** Hold all modifiers simultaneously, then press the main key
  (e.g., <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd>)
- **Release Commands:** Hold the key down, then release it (marked with `(Release)`)

**Accessible In:**

- **GAME:** Commands work during gameplay (in a match/mission)
- **GAME SHELL:** Commands work in menus and during gameplay

**Examples:**

- <kbd>Ctrl</kbd> + <kbd>W</kbd> = Hold Ctrl, press W, release both
- <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> = Hold Shift and Alt together, press F, release all
- <kbd>,</kbd> (Release) = Press and hold comma, then release it

---

## Documentation Guidelines

## Template for Adding Additional Commands

For adding any new commands, please add them to the appropriate table using the following format:

```markdown
| <kbd>Modifier</kbd> + <kbd>Key</kbd> | COMMAND_NAME | Detailed description of what the command does | GAME/SHELL |
```

### Table Structure

All commands should be organized in tables with the following columns:

| Column | Description | Example |
|--------|-------------|---------|
| **Hotkey** | Key combination using `<kbd>` tags | `<kbd>Ctrl</kbd> + <kbd>W</kbd>` |
| **Command Name** | The exact command name | `DEMO_WIN` |
| **Description** | Clear explanation of what the command does | `Instantly win the current game or mission` |
| **Accessible In** | Where the command works | `GAME` or `GAME SHELL` |

### Hotkey Formatting Guidelines

Use HTML `<kbd>` tags for all hotkeys to ensure proper keyboard key styling:

- **Single keys**: `<kbd>F11</kbd>`, `<kbd>=</kbd>`, `<kbd>[</kbd>`
- **Two keys**: `<kbd>Ctrl</kbd> + <kbd>W</kbd>`
- **Three keys**: `<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>V</kbd>`
- **Four keys**: `<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd>`
- **Special keys**: `<kbd>Numpad /</kbd>`, `<kbd>Backspace</kbd>`, `<kbd>Space</kbd>`
- **Release commands**: `<kbd>,</kbd> (Release)`

### Organizing Commands

Commands should be grouped into logical categories within collapsible sections:

```markdown
  <details>
  <summary>├─ Category Name (X)</summary>

| Hotkey | Command Name | Description | Accessible In |
|--------|--------------|-------------|---------------|
| <kbd>Key</kbd> | COMMAND_NAME | Description | GAME |

  </details>
```

## Contributing New Commands

When adding descriptions and media for any new commands:

1. **Add to appropriate table**: Insert the new command in the correct category table
2. **Use proper hotkey formatting**: Always use `<kbd>` tags for key combinations
3. **Descriptions** should be clear and explain what the command actually does in-game
4. **Accessibility**: Specify whether the command works in `GAME` (in a match/mission) or `GAME SHELL` (menus + gameplay)
5. **Testing**: Always test commands in a debug build before documenting their effects

### HTML Usage Note

This document uses HTML `<kbd>` tags for keyboard key styling. The markdownlint MD033 rule is disabled at the top with:

```html
<!-- markdownlint-disable MD033 -->
```
