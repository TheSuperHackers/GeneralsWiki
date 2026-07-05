# Running Generals Zero Hour on macOS (Apple Silicon)

The game runs through Wine-CrossOver via Heroic Launcher, no native macOS build exists yet.

## What you need

- A Mac with Apple Silicon (M1 or later)
- macOS Tahoe (or recent macOS — older versions should work but aren't tested here)
- [Heroic Games Launcher](https://heroicgameslauncher.com/) (tested with 2.22.0)
- A Steam account that owns *Command & Conquer: Generals - Zero Hour* (app ID `2732960`)
- [Homebrew](https://brew.sh/) installed

## Step 1: Install SteamCMD

```bash
brew install steamcmd
```

Then clear the macOS Gatekeeper quarantine from the install, otherwise steamcmd will fail to load its
own libraries on first run (see Step 2):

```bash
xattr -dr com.apple.quarantine /opt/homebrew/Caskroom/steamcmd/*/MacOS
```

## Step 2: Download the game files

Run this command. Replace `YOUR_USERNAME` with your Steam username.

```bash
steamcmd +@sSteamCmdForcePlatformType windows +login YOUR_USERNAME +app_update 2732960 validate +quit
```

The `+@sSteamCmdForcePlatformType windows` flag forces Steam to download the Windows version of the game.

On the first run, steamcmd self-updates and re-downloads its libraries, so macOS may quarantine them again
even though you cleared it in Step 1. If that happens you'll see one or both of these:

- A popup saying **"Breakpad.framework" was not opened** with **Move to Trash** / **Done** buttons.
  Click **Done** - do NOT click Move to Trash.
- steamcmd quits with `Failed to load steamconsole.dylib ... library load disallowed by system policy`.

Just clear the quarantine again and re-run the steamcmd command above:

```bash
xattr -dr com.apple.quarantine /opt/homebrew/Caskroom/steamcmd/*/MacOS
```

Steam Guard will ask you to confirm on your phone. The download is about 3 GB.

Files end up in:

```bash
~/Library/Application Support/Steam/steamapps/common/Command & Conquer Generals - Zero Hour/
```

## Step 3: Install the community patch

- Go to the [GeneralsGameCode releases page](https://github.com/TheSuperHackers/GeneralsGameCode/releases)
- Download the latest `weekly-*-generalszh` build.

Extract the files directly into the game folder from Step 2.
If it asks to replace any existing files, check **Apply to All** and choose **Replace**.
The patch ships its own executable (`generalszh.exe`) rather than replacing the original `generals.exe`,
so your base game stays intact.

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

Heroic creates the Wine prefix automatically. No need to configure it manually.

## Step 6: Set the Wine version

Click the menu icon (three lines) below your Generals Zero Hour game.
On the **Wine Settings** tab, select **Wine-CrossOver** (not GPTK).
You do not need to change any other settings.

## Step 7: Launch and play

Hit play. No Winetricks dependencies are needed, it runs out of the box with Wine-CrossOver.

Set your resolution in the game's graphics options. 1900x1200 works on a 14" MacBook Pro display.

## Known issues

### Mouse gets stuck after changing resolution

The mouse cursor can get trapped or stop responding after the game launches.
This happened after selecting the new 1900x1200 resolution.
What fixed it: **Cmd+Tab** out of the game, force quit it, then relaunch. The mouse worked again after that.

## Troubleshooting

### steamcmd: "Failed to load steamconsole.dylib" or a Breakpad.framework popup

This is macOS Gatekeeper quarantining steamcmd's self-updated libraries, covered in Step 2.
Click **Done** on any "Breakpad.framework" popup (never Move to Trash), then clear the quarantine and re-run:

```bash
xattr -dr com.apple.quarantine /opt/homebrew/Caskroom/steamcmd/*/MacOS
```

### Game won't start in Heroic

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
