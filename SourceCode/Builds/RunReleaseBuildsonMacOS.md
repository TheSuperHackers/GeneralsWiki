# Running Generals Zero Hour on macOS (Apple Silicon)

The game runs through Wine-CrossOver via Heroic Launcher, no native macOS build exists yet.

## What you need

- A Mac with Apple Silicon (M1 or later)
- macOS Tahoe (or recent macOS — older versions should work but aren't tested here)
- [Heroic Games Launcher](https://heroicgameslauncher.com/) (tested with 2.20.1)
- A Steam account that owns *Command & Conquer: Generals - Zero Hour* (app ID `2732960`)
- [Homebrew](https://brew.sh/) installed

## Step 1: Install SteamCMD

```bash
brew install steamcmd
```

## Step 2: Download the game files

Run this command. Replace `YOUR_USERNAME` with your Steam username.

```bash
steamcmd +@sSteamCmdForcePlatformType windows +login YOUR_USERNAME +app_update 2732960 validate +quit
```

The `+@sSteamCmdForcePlatformType windows` flag forces Steam to download the Windows version of the game.

Steam Guard will ask you to confirm on your phone. The download is about 3 GB.

Files end up in:

```bash
~/Library/Application Support/Steam/steamapps/common/Command & Conquer Generals - Zero Hour/
```

## Step 3: Install the community patch

- Go to the [GeneralsGameCode releases page](https://github.com/TheSuperHackers/GeneralsGameCode/releases)
- Download the latest `weekly-*-generalszh` build.

Extract the files directly into the game folder from Step 2.
The patch ships its own executable (`generalszh.exe`) rather than replacing the original `generals.exe`,
so it won't overwrite the base game.

## Step 4: Install Wine-CrossOver in Heroic

Open Heroic Games Launcher. Go to **Wine Manager** (in the sidebar or settings) and install **Wine-CrossOver-Latest**.
Version 23.7.1-1 was used when this was written.

## Step 5: Add the game to Heroic

1. Open Heroic and go to **Library**
2. Click **Add Game**
3. Fill in:
    - **Name**: Generals Zero Hour (or whatever you want)
    - **Platform**: Windows
    - **Executable**: browse to `generalszh.exe` in the game folder
4. Make sure **Wine-CrossOver** is selected as the Wine version (not GPTK) you may need to do this step later.

Heroic creates the Wine prefix automatically. No need to configure it manually.

## Step 6: Launch and play

Hit play. No Winetricks dependencies are needed, it runs out of the box with Wine-CrossOver.

Set your resolution in the game's graphics options. 1900x1200 works on a 14" MacBook Pro display.

## Known issues

### Mouse gets stuck on first launch

The mouse cursor can get trapped or stop responding after the game launches.
Pressing **Cmd+Tab** to switch away from the game and then back a few times fixed it.
It's not clear whether this happens every launch or just the first time.

If Cmd+Tab doesn't fix it, try enabling **Virtual Desktop** in Heroic's Wine configuration settings.
That gives Wine its own contained window and usually resolves mouse capture problems with old DirectX games.

## Troubleshooting

If the game won't start, right-click the game icon in Heroic and select **Logs**.
Common things to look for: D3D errors, missing DLL calls, or Wine prefix initialization failures.

## What was (not) tested

Tested on an M4 Pro MacBook Pro (24 GB RAM) running macOS Tahoe 26.4,
with Heroic 2.20.1 and Wine-CrossOver-Latest 23.7.1-1.
Performance and audio were both fine.

Not tested:

- Online multiplayer
- The base *Generals* game (only *Zero Hour* was tested)
- Intel Macs
- Mods

> **Note:** Cross-platform online multiplayer isn't possible yet.
> An Apple Silicon Mac can't play against Windows players or Intel Macs -
> the game desyncs and ends in a mismatch early on.

## Background: Why not Game Porting Toolkit?

GPTK was tested but crashes on the splash screen.
The crash is a memory allocation assertion inside Wine's virtual memory layer when running 32-bit executables
through the `x86_32on64` translation path.
Generals is a 32-bit DX8 game, and GPTK's 32-bit-on-64-bit emulation can't handle it.

The relevant error from the Heroic log:

```bash
Assertion failed: (end <= pages_vprot_size << pages_vprot_shift), function alloc_pages_vprot, file virtual.c, line 1032.
0024:err:seh:NtRaiseException Exception frame is not in stack limits => unable to dispatch exception.
```

This is a bug in GPTK, not something configurable on your end.
Wine-CrossOver handles 32-bit apps through a more mature emulation path and doesn't hit this issue.
If a future GPTK version fixes 32-bit virtual memory allocation on ARM64,
it may be worth retrying since Apple's DirectX-to-Metal translation is theoretically a better long-term path.
