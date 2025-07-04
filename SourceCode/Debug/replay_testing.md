# How to Test a Build of _Command & Conquer: Generals & Zero Hour_ with replays

Replays in _Command & Conquer: Generals & Zero Hour_ are not just recordings—they are full simulations of the original
gameplay. The replay file only contains the user inputs, while all other game actions are recalculated during playback.
This makes replays an excellent tool for testing the compatibility and accuracy of a compiled version.

## How to test using a replay

To perform a test using a replay, use the following steps:

1. Gather previously saved replays of matches played on a known-working version of the game. These replays act as a
benchmark for testing. A prepared set of test replays can be found in the [verification section](#how-to-verify-the-game).

2. Copy the replay file into `Documents\Command and Conquer Generals Data\Replays` for _Generals_ replays
and `Documents\Command and Conquer Generals Zero Hour Data\Replays` for _Zero Hour_ replays.

3. Make sure that the map the replay was played on is present in `Documents\Command and Conquer Generals Data\Maps`
for _Generals_ and `Documents\Command and Conquer Generals Zero Hour Data\Maps` for _Zero Hour_ maps. If the map
is not present, the replay may not show in the replay list, or the game may instantaneously crash.

4. Launch the Build to be tested. For quick testing, it is recommended to start the game with the `-quickstart` and `-win`
command arguments.

5. Navigate to `Load` then `Load Replay` and select the replay to be used for the test.

6. You can fast-forward through the replay using the `F` hotkey (_Zero Hour_ only at the moment).

## How to verify the game

To verify compatibility, the playback must yield the same outcomes as the original game. If the build is not compatible,
it will result in one or more of the following issues in the replay:

1. A brief message, **"The game has mismatched"**, flashes on the screen. This message is easy to miss, especially
if you are fast-forwarding the replay.

2. The simulation may behave erratically: units might stop moving, pile up, or otherwise act unpredictably.

3. The replay outcome may differ from the original game. For instance, the player might win in the original game,
but the AI wins in the replay.

4. The final score screen may display values that deviate from those in the original game.

If one of the above issues appear, the build being tested is not compatible with the version the game was
originally played in.

## VC6 vs VS2022

Only versions compiled with **Visual C++ 6 (VC6)** are compatible with replays made in the original game
(v1.04 and v1.05). Versions compiled in **Visual Studio 2022 (VS2022)** will always result in mismatches due to
changes in how the code is handled by modern compilers.

## Replays

A select number of replay files can be found in this section. These replay files are perfect for verifying
compatibility between versions or identifying issues with compiled builds.

### _Zero Hour_ multiplayer: Golden replay

The golden replay is a multiplayer match made in _Zero Hour v1.04_ in which systematically all units and
abilities have been used. It consists of two playthroughs to cover all the general powers. Both replays have
been played on the customized _Tansoooo_ map.

[Download both replays and the map](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/Golden-replays.zip)

For a successful test, the expected results on the score screen are:

Golden replay 1:
![Golden replay 1](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/golden-replay-1-results.jpg)

Golden replay 2:
![Golden replay 2](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/golden-replay-2-results.jpg)

### Zero Hour Skirmish

For _Command & Conquer: Zero Hour_, you can set up your own single-player test by playing a skirmish match against
one or more AI opponents. To ensure thorough testing, it's recommended to assign each faction to an AI player.
They don't need to be on the same team. Once the match is completed, save the replay for analysis.
**Test the replay** in the same version and screenshot the results before testing in other versions.

It is recommended to use version **1.04** to create your own skirmish game,
although the latest version **1.05** is backwards compatible.

If you'd prefer not to play a skirmish game, you can download the followin skirmish match played
on a default _Zero Hour_ map. The expected results are provided in the download package.

[Download](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/Zerohour-skirmish.zip)

### Generals Multiplayer

For _Command & Conquer: Generals_ three replays have been selected from GameReplays:

- **Test MP replay 1**: 6 player FFA game on the map Defcon 6.
- **Test MP replay 2**: 7 player FFA game on the map Whiteout (default _Generals_ map).
- **Test MP replay 3**: 2 v 2 v 2 game on the map Armoured Fury (default  _Generals_ map).

The replays, their maps and the result screens are available in a single download:

[Download](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/Generals-MP-replays.zip)

### Generals Skirmish

For _Command & Conquer: Generals_, you can set up your own single-player test by playing a skirmish match against
one or more AI opponents. To ensure thorough testing, it's recommended to assign each faction to an AI player.
They don't need to be on the same team. Once the match is completed, save the replay for analysis.
**Test the replay** in the same version and screenshot the results before testing in other versions.

**Important Note**: Make sure to use _Generals_ **version 1.08**, as the latest version (1.09) is incompatible
with both version 1.08 and the _SuperHackers_ version.

If you'd prefer not to play a skirmish game, you can download the followin skirmish match played
on a default _Generals_ map. The expected results are provided in the download package.

[Download](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Debug/files/Generals-skirmish.zip)
