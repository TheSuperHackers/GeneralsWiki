<!-- markdownlint-disable MD033 -->
<!-- Needed to allow for <kbd> tags for keyboard key styling. -->
# In-Game Debug Commands

> **⚠️ Important:** Most commands below require a debug build with `RTS_DEBUG`. Commands with additional compile
> flags are called out in their descriptions.

Source-only debug commands with no current default binding are intentionally omitted.

<br>

<details>
<summary>Commands Available in Both Generals and Zero Hour</summary>

  <details>
  <summary>├─ Game State & Cheats (13)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Alt</kbd> + <kbd>F4</kbd> / window close | DEMO_INSTANT_QUIT | Starts the current quit flow. | GAME SHELL | No | |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | DEMO_WIN | Instantly wins the current game or mission through debug victory. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_win.jpg) |
| <kbd>Ctrl</kbd> + <kbd>=</kbd> | DEMO_ADDCASH | Adds 10000 credits to the local player outside multiplayer. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_addcash.jpg) |
| <kbd>Alt</kbd> + <kbd>P</kbd> | DEMO_REMOVE_PREREQ | Toggles prerequisite checks for all human players, allowing tech prerequisites to be ignored. | GAME | Yes | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_remove_prereq.jpg) |
| <kbd>Alt</kbd> + <kbd>F</kbd> | DEMO_INSTANT_BUILD | Toggles instant production for all human players; in multiplayer, it only toggles when no human player currently has anything in production. | GAME | Yes | |
| <kbd>Alt</kbd> + <kbd>B</kbd> | DEMO_FREE_BUILD | Toggles zero-cost production for all human players. | GAME | Yes | |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_GIVE_ALL_SCIENCES | Grants all grantable sciences to human players. | GAME | Yes | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_all_sciences.jpg) |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_GIVE_RANKLEVEL | Adds one rank level to the local player. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_ranklevel.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | DEMO_TAKE_RANKLEVEL | Removes one rank level from the local player. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_take_ranklevel.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>P</kbd> | DEMO_GIVE_SCIENCEPURCHASEPOINTS | Adds one science purchase point to the local player. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_sciencepurchasepoints.jpg) |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | DEMO_GIVE_VETERANCY | Adds one veterancy level to the selected objects. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_give_veterancy.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>V</kbd> | DEMO_TAKE_VETERANCY | Removes one veterancy level from the selected objects. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_take_veterancy.jpg) |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SPECIAL_POWER_DELAYS | Toggles recharge delays for special powers, superweapons, and abilities. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_special_power_delays.jpg) |

  </details>

  <details>
  <summary>├─ Visual & Rendering (16)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>F11</kbd> | DEMO_TOGGLE_BEHIND_BUILDINGS | Toggles outlines for objects hidden behind buildings. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_behind_buildings.jpg) |
| <kbd>Alt</kbd> + <kbd>T</kbd> | DEMO_TOGGLE_MESSAGE_TEXT | Toggles on-screen message text. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_message_text.jpg) |
| <kbd>Ctrl</kbd> + <kbd>\\</kbd> | DEMO_TOGGLE_RENDER | Toggles frame rendering, effectively freezing or resuming the visual output. | GAME | No | |
| <kbd>/</kbd> | DEMO_TOGGLE_NO_DRAW | Toggles the global no-draw rendering mask between hidden and normal rendering. | GAME | No | |
| <kbd>Ctrl</kbd> + <kbd>F10</kbd> | DEMO_TOGGLE_BW_VIEW | Cycles wireframe/crossfade debug view states; one state freezes time while the crossfade filter is active. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_bw_view.jpg) |
| <kbd>Ctrl</kbd> + <kbd>F11</kbd> | DEMO_TOGGLE_RED_VIEW | Toggles the red view mode. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_red_view.jpg) |
| <kbd>Ctrl</kbd> + <kbd>F12</kbd> | DEMO_TOGGLE_GREEN_VIEW | Toggles the green view mode. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_green_view.jpg) |
| <kbd>Ctrl</kbd> + <kbd>F9</kbd> | DEMO_TOGGLE_MOTION_BLUR_ZOOM | Toggles the motion-blur zoom view effect. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_motion_blur_zoom.jpg) |
| <kbd>Shift</kbd> + <kbd>J</kbd> | DEMO_TOGGLE_SHADOW_VOLUMES | Toggles shadow volume rendering. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_shadow_volumes.jpg) |
| <kbd>[</kbd> | DEMO_TOGGLE_TRACKMARKS | Toggles track marks. | GAME | No | |
| <kbd>]</kbd> | DEMO_TOGGLE_WATERPLANE | Toggles water plane rendering. | GAME | No | |
| <kbd>Alt</kbd> + <kbd>W</kbd> | DEMO_TOGGLE_FEATHER_WATER | Cycles the feather-water debug value. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_feather_water.jpg) |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | DEMO_SHOW_EXTENTS | Toggles object collision bounding boxes/extents. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_show_extents.jpg) |
| <kbd>Alt</kbd> + <kbd>H</kbd> | DEMO_SHOW_HEALTH | Toggles health bars above units and structures. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_show_health.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>D</kbd> | DEMO_TIME_OF_DAY | Cycles the map time of day. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_time_of_day.jpg) |
| <kbd>Shift</kbd> + <kbd>F11</kbd> | DEMO_TOGGLE_AVI | Toggles movie capture through the display system. | GAME SHELL | No | |

  </details>

  <details>
  <summary>├─ Audio (5)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SOUND | Toggles game audio. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> | DEMO_TOGGLE_MUSIC | Toggles music playback. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_music.jpg) |
| <kbd>Shift</kbd> + <kbd>M</kbd> | DEMO_MUSIC_NEXT_TRACK | Skips to the next music track. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_music_next_track.jpg) |
| <kbd>Ctrl</kbd> + <kbd>M</kbd> | DEMO_MUSIC_PREV_TRACK | Skips to the previous music track. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_music_prev_track.jpg) |
| <kbd>Shift</kbd> + <kbd>A</kbd> | DEMO_TOGGLE_AUDIODEBUG | Toggles audio debug information. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_audiodebug.jpg) |

  </details>

  <details>
  <summary>├─ Camera & View (9)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> | DEMO_LOCK_CAMERA_TO_SELECTION | Locks the camera to the current selection. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> | DEMO_TOGGLE_CAMERA_DEBUG | Toggles camera debug mode. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_camera_debug.jpg) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> | DEMO_TOGGLE_ZOOM_LOCK | Toggles tactical-view zoom limits; disabling them allows unrestricted zooming. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_zoom_lock.jpg) |
| <kbd>,</kbd> | DEMO_BEGIN_ADJUST_PITCH | Starts adjusting camera pitch. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_pitch%20%26%20demo_end_adjust_pitch.jpg) |
| <kbd>,</kbd> (Release) | DEMO_END_ADJUST_PITCH | Stops adjusting camera pitch. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_pitch%20%26%20demo_end_adjust_pitch.jpg) |
| <kbd>Ctrl</kbd> + <kbd>,</kbd> | DEMO_BEGIN_ADJUST_DEFAULTPITCH | Starts adjusting the default camera pitch. | GAME | No | |
| <kbd>Ctrl</kbd> + <kbd>,</kbd> (Release) | DEMO_END_ADJUST_DEFAULTPITCH | Stops adjusting the default camera pitch. | GAME | No | |
| <kbd>.</kbd> | DEMO_BEGIN_ADJUST_FOV | Starts adjusting camera field of view. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_fov%20%26%20demo_end_adjust_fov.jpg) |
| <kbd>.</kbd> (Release) | DEMO_END_ADJUST_FOV | Stops adjusting camera field of view. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_begin_adjust_fov%20%26%20demo_end_adjust_fov.jpg) |

  </details>

  <details>
  <summary>├─ AI & Team (3)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Space</kbd> | DEMO_SWITCH_TEAMS | Cycles local control through players in the match. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_switch_teams.jpg) |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | DEMO_SWITCH_TEAMS_CHINA_USA | Switches local control between China and USA players by side. | GAME | No | |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEMO_TOGGLE_AI_DEBUG | Cycles visible AI debug levels/modes. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_ai_debug.jpg) |

  </details>

  <details>
  <summary>├─ Debug Information & Stats (13)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEMO_TOGGLE_DEBUG_STATS | Toggles the stats debug display callback. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_debug_stats.jpg) |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | DEMO_TOGGLE_METRICS | Toggles the metrics display when built with `PERF_TIMERS`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEMO_TOGGLE_GRAPHICALFRAMERATEBAR | Toggles the graphical frame-rate bar. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_graphicalframeratebar.jpg) |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | DEMO_TOGGLE_CASHMAPDEBUG | Toggles the cash-value map overlay. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_cashmapdebug.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>O</kbd> | DEMO_TOGGLE_THREATDEBUG | Toggles the threat map overlay. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd> | DEMO_TOGGLE_VISIONDEBUG | Toggles the visibility debug overlay. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_visiondebug.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>B</kbd> | DEMO_TOGGLE_PROJECTILEDEBUG | Toggles projectile path debugging. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_projectiledebug.jpg) |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | DEMO_TOGGLE_PARTICLEDEBUG | Toggles the particle-system debug display callback. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_particledebug.jpg) |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | DEMO_DEBUG_SELECTION | Toggles debug-selected-item mode; in `DEBUG_OBJECT_ID_EXISTS` builds, the next selected object becomes the debug target. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_debug_selection.jpg) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> | DEMO_SHOW_AUDIO_LOCATIONS | Toggles visual audio location markers. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_show_audio_locations.jpg) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> | DEMO_TOGGLE_SUPPLY_CENTER_PLACEMENT | Toggles supply-center placement logging/debugging. | GAME | No | |
| <kbd>Alt</kbd> + <kbd>O</kbd> | DEBUG_DUMP_PLAYER_OBJECTS | Dumps playable-side object counts and small object lists to the script debug log. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | DEBUG_DUMP_ALL_PLAYER_OBJECTS | Dumps playable-side object counts and full object lists to the script debug log. | GAME | No | |

  </details>

  <details>
  <summary>├─ Map & Fog of War (3)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> | DEMO_TOGGLE_FOGOFWAR | Toggles fog-of-war rendering, not the permanent shroud state. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_fogofwar.jpg) |
| <kbd>Ctrl</kbd> + <kbd>R</kbd> | DEMO_DESHROUD | Permanently reveals the map for the local player. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_deshroud.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> | DEMO_ENSHROUD | Undoes `DEMO_DESHROUD`'s permanent reveal, then shrouds the map for the local player. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_enshroud.jpg) |

  </details>

  <details>
  <summary>├─ Combat & Units (5)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Numpad /</kbd> | DEMO_KILL_ALL_ENEMIES | Kills all enemy objects on the map. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_kill_all_enemies.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>X</kbd> | DEMO_KILL_SELECTION | Kills the currently selected objects in the selected group. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_kill_selection.jpg) |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | DEMO_TOGGLE_HURT_ME_MODE | Toggles hurt-me mode; selecting an object applies 10% of its max health as unresistable damage. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_hurt_me_mode.jpg) |
| <kbd>Alt</kbd> + <kbd>G</kbd> | DEMO_TOGGLE_HAND_OF_GOD_MODE | Toggles hand-of-god mode; selecting an object sends a debug kill-object message. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_toggle_hand_of_god_mode.jpg) |
| <kbd>Shift</kbd> + <kbd>B</kbd> | DEMO_BATTLE_CRY | Plays the configured battle-cry sound. | GAME | No | |

  </details>

  <details>
  <summary>├─ Performance & Level of Detail (9)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>=</kbd> | DEMO_LOD_DECREASE | Decreases the current LOD setting by one level. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_lod_decrease%20%26%20demo_lod_increase.jpg) |
| <kbd>-</kbd> | DEMO_LOD_INCREASE | Increases the current LOD setting by one level. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_lod_decrease%20%26%20demo_lod_increase.jpg) |
| <kbd>Alt</kbd> + <kbd>-</kbd> | DEMO_CYCLE_LOD_LEVEL | Cycles dynamic game detail/LOD levels. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_cycle_lod_level.jpg) |
| <kbd>Ctrl</kbd> + <kbd>J</kbd> | DEMO_INCR_ANIM_SKATE_SPEED | Increases the animation skate-distance override by `0.25`. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_incr_anim_skate_speed%20%26%20demo_decr_anim_skate_speed.jpg) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>J</kbd> | DEMO_DECR_ANIM_SKATE_SPEED | Decreases the animation skate-distance override by `0.25`. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_incr_anim_skate_speed%20%26%20demo_decr_anim_skate_speed.jpg) |
| <kbd>Alt</kbd> + <kbd>Q</kbd> | DEMO_PERFORM_STATISTICAL_DUMP | Dumps the current frame to `StatisticsDump.txt` when built with `DUMP_PERF_STATS`. | GAME SHELL | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/demo_perform_statistical_dump.jpg) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Q</kbd> | DEBUG_OBJECT_ID_PERFORMANCE | Runs ObjectID lookup performance tests. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/debug_object_id_performance.jpg) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEBUG_DRAWABLE_ID_PERFORMANCE | Runs DrawableID lookup performance tests. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/debug_drawable_id_performance.jpg) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>W</kbd> | DEBUG_SLEEPY_UPDATE_PERFORMANCE | Reports the number of sleepy update modules. | GAME | No | [Image](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/ingame_debugs_media/debug_sleepy_update_performance.jpg) |

  </details>

  <details>
  <summary>├─ System & Technical (4)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> | DEMO_DUMP_ASSETS | Dumps asset information through the debug asset store path. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>N</kbd> | DEMO_TOGGLE_NETWORK | Toggles the network layer on when a network object is present. | GAME | No | |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | DEMO_VTUNE_ON | Enables VTune gathering. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>G</kbd> | DEMO_VTUNE_OFF | Disables VTune gathering. | GAME | No | |

  </details>

  <details>
  <summary>├─ Scripts & Movies (10)</summary>

| Hotkey | Command Name | Description | Accessible In | Usable in Multiplayer? | Image |
| ------ | ------------ | ----------- | ------------- | ---------------------- | ----- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F1</kbd> | DEMO_RUNSCRIPT1 | Runs script `KEY_F1`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F2</kbd> | DEMO_RUNSCRIPT2 | Runs script `KEY_F2`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F3</kbd> | DEMO_RUNSCRIPT3 | Runs script `KEY_F3`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F4</kbd> | DEMO_RUNSCRIPT4 | Runs script `KEY_F4`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F5</kbd> | DEMO_RUNSCRIPT5 | Runs script `KEY_F5`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F6</kbd> | DEMO_RUNSCRIPT6 | Runs script `KEY_F6`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F7</kbd> | DEMO_RUNSCRIPT7 | Runs script `KEY_F7`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F8</kbd> | DEMO_RUNSCRIPT8 | Runs script `KEY_F8`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F9</kbd> | DEMO_RUNSCRIPT9 | Runs script `KEY_F9`. | GAME | No | |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | DEMO_NEXT_OBJECTIVE_MOVIE | Advances to the next `DemoObjective##` movie and plays it. | GAME | No | |

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

**Usable in Multiplayer?:**

- **Yes:** The command can be used in multiplayer. For state-changing cheats, every client should apply the same
  action or debug state to avoid mismatches or desyncs.
- **No:** The command is single-player, local-only, or blocked while a network game is running.

**Examples:**

- <kbd>Ctrl</kbd> + <kbd>W</kbd> = Hold Ctrl, press W, release both
- <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> = Hold Shift and Alt together, press F, release all
- <kbd>,</kbd> (Release) = Press and hold comma, then release it
