# Build Pure Visual Studio 6 Guide

This guide outlines the steps required to build and compile the source code for *Command & Conquer Generals* and its
expansion pack *Zero Hour*. The repository includes the source code and supports the Steam Workshop for both
games ([C&C Generals](https://steamcommunity.com/workshop/browse/?appid=2229870)
and [C&C Generals - Zero Hour](https://steamcommunity.com/workshop/browse/?appid=2732960)).

[![WARNING]]: This build guide is based on the original EA build instructions and has not been verified.

## Dependencies

Before starting the build process, you need to obtain or replace several libraries and tools. These are required for
successfully compiling the source code:

- **DirectX SDK** (Version 9.0 or higher)  
  Expected path: `\Code\Libraries\DirectX\`

- **STLport** (Version 4.5.3)  
  Expected path: `\Code\Libraries\STLport-4.5.3`

- **3DSMax 4 SDK**  
  Expected path: `\Code\Libraries\Max4SDK\`

- **NVASM**  
  Expected path: `\Code\Tools\NVASM\`

- **BYTEmark**  
  Expected path: `\Code\Libraries\Source\Benchmark`

- **RAD Miles Sound System SDK**  
  Expected path: `\Code\Libraries\Source\WWVegas\Miles6\`

- **RAD Bink SDK**  
  Expected path: `\Code\GameEngineDevice\Include\VideoDevice\Bink`

- **SafeDisk API**  
  Expected paths:  
  `\Code\GameEngine\Include\Common\SafeDisk`  
  `\Code\Tools\Launcher\SafeDisk\`

- **Miles Sound System "Asimp3"**  
  Expected path: `\Code\Libraries\WPAudio\Asimp3`

- **GameSpy SDK**  
  Expected path: `\Code\Libraries\Source\GameSpy\`

- **ZLib** (Version 1.1.4)  
  Expected path: `\Code\Libraries\Source\Compression\ZLib\`

- **LZH-Light** (Version 1.0)  
  Expected paths:  
  `\Code\Libraries\Source\Compression\LZHCompress\CompLibSource`  
  `\Code\Libraries\Source\Compression\LZHCompress\CompLibHeader`

Ensure all dependencies are correctly set up before continuing.

## Compiling (Win32 Only)

**Important:** You must own the game to use the compiled binaries. The *Command & Conquer Ultimate Collection* is
available for purchase on
the [EA App](https://www.ea.com/en-gb/games/command-and-conquer/command-and-conquer-the-ultimate-collection/buy/pc)
or [Steam](https://store.steampowered.com/bundle/39394/Command__Conquer_The_Ultimate_Collection/).

### Quick Build (Using Microsoft Visual Studio 6.0)

1. Open the project by loading `rts.dsw` in **Microsoft Visual Studio C++ 6.0** (SP6 recommended for binary matching
   with Generals Patch 1.08 and Zero Hour Patch 1.04).
2. Go to **Build -> Batch Build** in the menu.
3. Click the **Rebuild All** button to build all configurations.

This is the simplest way to compile the game.

### Modern Visual Studio (2015 and Newer)

If you want to compile using a more recent version of Visual Studio, follow these steps:

1. Open `rts.dsw` in **Microsoft Visual Studio .NET 2003**.
2. A new project and solution file will be created.
3. Open the newly created project in **Visual Studio 2015 or newer**.

**Note:** Modern versions of Visual Studio require significant changes to the codebase, especially for Win64
compilation, due to stricter C++ standards. You will need to make extensive modifications to ensure compatibility.

### After Building

Once the build is complete, the compiled binaries will be located in the `/Run/` folder inside each game’s root
directory.

## Known Issues

- **UAC Elevation Requirement:** Windows enforces UAC Elevation for executables with "version", "update", or "install"
  in their filenames. This affects the “versionUpdate” and “buildVersionUpdate” projects.

  To resolve this, **rename the output binary** to avoid including these words.

## STLport Compilation Issues

To compile with STLport, you will need to apply a patch. The patch file `stlport.diff` is provided in the repository.
Make sure you are using **STLport 4.5.3** before applying the patch.
