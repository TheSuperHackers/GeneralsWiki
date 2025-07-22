<!-- markdownlint-disable MD033 -->
<!-- Needed to allow for <kbd> tags for keyboard key styling. -->
# In-Game Debug Commands

> **⚠️ Important Notice**: These debug commands are only available in debug builds of Command & Conquer: Generals
> and Zero Hour. They will not work in release builds.

<br>

<details>
<summary>Commands Available in Both Generals and Zero Hour</summary>

  <details>
  <summary>├─ Game State & Cheats (12)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | DEMO_WIN | Instantly win the current game or mission | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_win.png) |
| <kbd>Ctrl</kbd> + <kbd>=</kbd> | DEMO_ADDCASH | Adds 10000 cash to the player's current resources | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_addcash.png) |
| <kbd>Alt</kbd> + <kbd>F</kbd> | DEMO_INSTANT_BUILD | Toggles instant building for all units and structures | GAME | Yes |  |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | DEMO_GIVE_VETERANCY | Grants the selected unit(s) a level of veterancy | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_veterancy.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>V</kbd> | DEMO_TAKE_VETERANCY | Removes a level of veterancy from the selected unit(s) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_take_veterancy.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>P</kbd> | DEMO_GIVE_SCIENCEPURCHASEPOINTS | Gives the player 1 science purchase point | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_sciencepurchasepoints.png) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_GIVE_ALL_SCIENCES | Instantly unlocks all sciences for the player | GAME | Yes | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_all_sciences.png) |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_GIVE_RANKLEVEL | Grants the player a rank level | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_ranklevel.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_TAKE_RANKLEVEL | Subtracts the player's current rank level by 1 | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_take_ranklevel.png) |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SPECIAL_POWER_DELAYS | Toggles whether special powers, super weapons and abilities have a delay before they can be used again | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_special_power_delays.png) |
| <kbd>Alt</kbd> + <kbd>P</kbd> | DEMO_REMOVE_PREREQ | Don't require prerequisite techs to be unlocked first. | GAME | Yes | |
| <kbd>Alt</kbd> + <kbd>B</kbd> | DEMO_FREE_BUILD | Build everything for free. | GAME | Yes | |

  </details>

  <details>
  <summary>├─ Visual & Rendering (14)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>F11</kbd> | DEMO_TOGGLE_BEHIND_BUILDINGS | Toggles the outline around units when they are obscured by buildings | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_behind_buildings.png) |
| <kbd>Ctrl</kbd> + <kbd>F10</kbd> | DEMO_TOGGLE_BW_VIEW | Toggles a black and white wireframe mode | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_bw_view.png) |
| <kbd>Ctrl</kbd> + <kbd>F11</kbd> | DEMO_TOGGLE_RED_VIEW | Toggles a (useless?) red view mode | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_red_view.png) |
| <kbd>Ctrl</kbd> + <kbd>F12</kbd> | DEMO_TOGGLE_GREEN_VIEW | Toggles a (useless?) green view mode | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_green_view.png) |
| <kbd>Ctrl</kbd> + <kbd>F9</kbd> | DEMO_TOGGLE_MOTION_BLUR_ZOOM | Plays a (useless?) zoom animation with motion blur effects | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_motion_blur_zoom.png) |
| <kbd>Ctrl</kbd> + <kbd>\\</kbd> | DEMO_TOGGLE_RENDER | Toggles rendering of new frames (essentially freezes the game in place) | GAME | No |  |
| <kbd>/</kbd> | DEMO_TOGGLE_NO_DRAW | Toggles rendering of new frames (essentially freezes the game in place). Appears to be redundant with DEMO_TOGGLE_RENDER. **Note:** BROKEN, the off toggle does not work | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>J</kbd> | DEMO_TOGGLE_SHADOW_VOLUMES | Toggles the rendering of shadow volumes | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_shadow_volumes.png) |
| <kbd>]</kbd> | DEMO_TOGGLE_WATERPLANE | Toggles the rendering of the water plane (does not seem to work) | GAME | No |  |
| <kbd>[</kbd> | DEMO_TOGGLE_TRACKMARKS | Toggles the rendering of track marks on the ground | GAME | No |  |
| <kbd>Alt</kbd> + <kbd>W</kbd> | DEMO_TOGGLE_FEATHER_WATER | Visually cycles between different water depths | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_feather_water.png) |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | DEMO_SHOW_EXTENTS | Toggles the visibility of the bounding box around units | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_show_extents.png) |
| <kbd>Alt</kbd> + <kbd>H</kbd> | DEMO_SHOW_HEALTH | Toggles the visibility of health bars above units and structures | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_show_health.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>D</kbd> | DEMO_TIME_OF_DAY | Cycles through different times of day | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_time_of_day.png) |

  </details>

  <details>
  <summary>├─ Audio (5)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SOUND | Toggles game audio on and off | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> | DEMO_TOGGLE_MUSIC | Toggles game music on and off | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_music.png) |
| <kbd>Shift</kbd> + <kbd>M</kbd> | DEMO_MUSIC_NEXT_TRACK | Skips to the next music track in the playlist | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_music_next_track.png) |
| <kbd>Ctrl</kbd> + <kbd>M</kbd> | DEMO_MUSIC_PREV_TRACK | Skips to the previous music track in the playlist | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_music_prev_track.png) |
| <kbd>Shift</kbd> + <kbd>A</kbd> | DEMO_TOGGLE_AUDIODEBUG | Toggles audio debugging information on and off | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_audiodebug.png) |

  </details>

  <details>
  <summary>├─ Camera & View (7)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> | DEMO_LOCK_CAMERA_TO_SELECTION | Locks the camera to the currently selected unit or structure | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> | DEMO_TOGGLE_CAMERA_DEBUG | Needs further information | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_camera_debug.png) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> | DEMO_TOGGLE_ZOOM_LOCK | Toggles the camera's zoom limitations, allowing for unrestricted zooming in and out when disabled | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_zoom_lock.png) |
| <kbd>,</kbd> | DEMO_BEGIN_ADJUST_PITCH | Begins adjusting the camera's pitch | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_pitch%20%26%20demo_end_adjust_pitch.png) |
| <kbd>,</kbd> (Release) | DEMO_END_ADJUST_PITCH | Ends adjusting the camera's pitch | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_pitch%20%26%20demo_end_adjust_pitch.png) |
| <kbd>.</kbd> | DEMO_BEGIN_ADJUST_FOV | Begins adjusting the camera's field of view (FOV) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_fov%20%26%20demo_end_adjust_fov.png) |
| <kbd>.</kbd> (Release) | DEMO_END_ADJUST_FOV | Ends adjusting the camera's field of view (FOV) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_fov%20%26%20demo_end_adjust_fov.png) |

  </details>

  <details>
  <summary>├─ AI & Team (3)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Space</kbd> | DEMO_SWITCH_TEAMS | Cycles through the players in the game, sequentially passing control to each one | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_switch_teams.png) |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | DEMO_SWITCH_TEAMS_CHINA_USA | Cycles through USA and China players in the game on the same team as the player, sequentially passing control to each one | GAME | No |  |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEMO_TOGGLE_AI_DEBUG | Toggles visual AI debugging information on and off | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_ai_debug.png) |

  </details>

  <details>
  <summary>├─ Debug Information & Stats (9)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEMO_TOGGLE_DEBUG_STATS | Toggles the visibility of debug information overlays | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_debug_stats.png) |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | DEMO_TOGGLE_METRICS | Needs further information | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEMO_TOGGLE_GRAPHICALFRAMERATEBAR | Toggles the world's most useless graphical frame rate bar on and off | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_graphicalframeratebar.png) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd> | DEMO_TOGGLE_VISIONDEBUG | Toggles the visibility of the vision debug overlay for units and structures | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_visiondebug.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>B</kbd> | DEMO_TOGGLE_PROJECTILEDEBUG | Toggles the visibility of visual projectile debug information | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_projectiledebug.png) |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | DEMO_TOGGLE_PARTICLEDEBUG | Toggles the visibility of visual particle debug information | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_particledebug.png) |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | DEMO_TOGGLE_CASHMAPDEBUG | Toggles the visibility of visual cash map debug information | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_cashmapdebug.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>O</kbd> | DEMO_TOGGLE_THREATDEBUG | Toggles the visibility of visual threat debug information | GAME | No |  |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | DEMO_DEBUG_SELECTION | Toggles the visibility of the selected unit(s) or structure's debug information | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_debug_selection.png) |

  </details>

  <details>
  <summary>├─ Map & Fog of War (3)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> | DEMO_TOGGLE_FOGOFWAR | Toggles the rendering of certain things in the fog of war (Useless?) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_fogofwar.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> | DEMO_ENSHROUD | Shrouds all areas of the map that are not currently visible to the player or their allies | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_enshroud.png) |
| <kbd>Ctrl</kbd> + <kbd>R</kbd> | DEMO_DESHROUD | Fully reveals the entire map, removing all fog of war and shroud | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_deshroud.png) |

  </details>

  <details>
  <summary>├─ Combat & Units (5)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Numpad /</kbd> | DEMO_KILL_ALL_ENEMIES | Instantly kills all enemies on the map | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_kill_all_enemies.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>X</kbd> | DEMO_KILL_SELECTION | Instantly kills the currently selected unit or structure. Only works on units and structures belonging to the player | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_kill_selection.png) |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | DEMO_TOGGLE_HURT_ME_MODE | Toggles the "Hurt Me" mode, causing 10% damage every time a unit or structure is selected | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_hurt_me_mode.png) |
| <kbd>Alt</kbd> + <kbd>G</kbd> | DEMO_TOGGLE_HAND_OF_GOD_MODE | Toggles the "Hand of God" mode, allowing the player to instantly destroy any unit or structure by selecting it | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_hand_of_god_mode.png) |
| <kbd>Shift</kbd> + <kbd>B</kbd> | DEMO_BATTLE_CRY | Plays a battle cry sound effect (Useless?) | GAME | No |  |

  </details>

  <details>
  <summary>├─ Performance & Level of Detail (5)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>=</kbd> | DEMO_LOD_DECREASE | Decreases the level of detail (LOD) by one level for all objects in the game | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_lod_decrease%20%26%20demo_lod_increase.png) |
| <kbd>-</kbd> | DEMO_LOD_INCREASE | Increases the level of detail (LOD) by one level for all objects in the game | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_lod_decrease%20%26%20demo_lod_increase.png) |
| <kbd>Alt</kbd> + <kbd>-</kbd> | DEMO_CYCLE_LOD_LEVEL | Cycles through the available LOD levels for all objects in the game | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_cycle_lod_level.png) |
| <kbd>Ctrl</kbd> + <kbd>J</kbd> | DEMO_INCR_ANIM_SKATE_SPEED | Increases the animation skate speed for all units and structures in the game (Needs further information) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_incr_anim_skate_speed%20%26%20demo_decr_anim_skate_speed.png) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>J</kbd> | DEMO_DECR_ANIM_SKATE_SPEED | Decreases the animation skate speed for all units and structures in the game (Needs further information) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_incr_anim_skate_speed%20%26%20demo_decr_anim_skate_speed.png) |

  </details>

  <details>
  <summary>├─ System & Technical (8)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEMO_DUMP_ASSETS | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>F11</kbd> | DEMO_TOGGLE_AVI | (Needs further information) | GAME SHELL | No |  |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>N</kbd> | DEMO_TOGGLE_NETWORK | (Needs further information) | GAME | No |  |
| <kbd>Alt</kbd> + <kbd>T</kbd> | DEMO_TOGGLE_MESSAGE_TEXT | Toggles the visibility of in-game messages | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_message_text.png) |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | DEMO_VTUNE_ON | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>G</kbd> | DEMO_VTUNE_OFF | (Needs further information) | GAME | No |  |
| <kbd>Alt</kbd> + <kbd>O</kbd> | DEBUG_DUMP_PLAYER_OBJECTS | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | DEBUG_DUMP_ALL_PLAYER_OBJECTS | (Needs further information) | GAME | No |  |

  </details>

  <details>
  <summary>├─ Scripts & Movies (10)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F1</kbd> | DEMO_RUNSCRIPT1 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F2</kbd> | DEMO_RUNSCRIPT2 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F3</kbd> | DEMO_RUNSCRIPT3 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F4</kbd> | DEMO_RUNSCRIPT4 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F5</kbd> | DEMO_RUNSCRIPT5 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F6</kbd> | DEMO_RUNSCRIPT6 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F7</kbd> | DEMO_RUNSCRIPT7 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F8</kbd> | DEMO_RUNSCRIPT8 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F9</kbd> | DEMO_RUNSCRIPT9 | (Needs further information) | GAME | No |  |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | DEMO_NEXT_OBJECTIVE_MOVIE | (Needs further information) | GAME | No |  |

  </details>

</details>

<br>

<details>
<summary>Commands Available Only in Generals</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> | DEMO_INSTANT_QUIT | (Needs further information) | GAME SHELL | No |  |

</details>

<br>

<details>
<summary>Commands Available Only in Zero Hour</summary>

  <details>
  <summary>├─ Performance Analysis (4)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEBUG_OBJECT_ID_PERFORMANCE | (Needs further information) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/debug_object_id_performance.png) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEBUG_DRAWABLE_ID_PERFORMANCE | (Needs further information) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/debug_drawable_id_performance.png) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>W</kbd> | DEBUG_SLEEPY_UPDATE_PERFORMANCE | (Needs further information) | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/debug_sleepy_update_performance.png) |
| <kbd>Alt</kbd> + <kbd>Q</kbd> | DEMO_PERFORM_STATISTICAL_DUMP | (Needs further information) | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_perform_statistical_dump.png) |

  </details>

  <details>
  <summary>├─ Game Features (1)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SUPPLY_CENTER_PLACEMENT | (Needs further information) | GAME | No |  |

  </details>

  <details>
  <summary>├─ Audio (1)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
|--------|--------------|-------------|---------------|------------------------|-------|
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> | DEMO_SHOW_AUDIO_LOCATIONS | Displays visual overlays regarding audio (Needs further information) | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_show_audio_locations.png) |

  </details>

</details>

<br>

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
