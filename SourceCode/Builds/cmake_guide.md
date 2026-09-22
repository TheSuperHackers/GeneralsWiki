# Building with CMake

CMake provides a common workflow for building GeneralsGameCode with Visual C++ 6 or a modern compiler. Run the commands
on this page from the repository root.

## Requirements

- [Git](https://git-scm.com/downloads)
- [CMake](https://cmake.org/download/) 3.25 or newer, added to `PATH`
- [Ninja](https://ninja-build.org/), added to `PATH`
- The toolchain required by your chosen preset

> [!NOTE]
> The `PATH` requirements apply whenever you type these commands in a terminal, including an IDE's built-in
> terminal, because it runs a normal shell. They do not apply when using the IDE's CMake integration through its
> configure and build actions; in that case, the IDE can use its bundled CMake and Ninja tools directly.

For Visual C++ 6 setup, see [CMake and Visual Studio 6](visual_studio_6).

## Build presets

These are the presets most contributors will use:

| Preset          | Toolchain         | Purpose                                                                   |
| --------------- | ----------------- | ------------------------------------------------------------------------- |
| `vc6`           | Visual C++ 6      | Release build and the retail-compatible path                              |
| `vc6-debug`     | Visual C++ 6      | Unoptimized development build; [runtime requirements](#vc6-debug-runtime) |
| `vc6-profile`   | Visual C++ 6      | Optimized profiling build                                                 |
| `win32`         | Modern Visual C++ | Release build                                                             |
| `win32-debug`   | Modern Visual C++ | Unoptimized development build                                             |
| `win32-profile` | Modern Visual C++ | Optimized profiling build                                                 |

For example, configure and build a VC6 Release build with:

```shell
cmake --workflow --preset vc6
```

Use this command to see every preset in the current checkout, including specialized presets not covered here:

```shell
cmake --list-presets=all
```

> **Retail compatibility:** Use the `vc6` Release preset for builds compatible with retail multiplayer and replays. VC6
> Debug builds and builds produced with modern Visual Studio toolchains are not retail-compatible.

### VC6 Debug runtime

VC6 Debug builds require these Microsoft debug runtime libraries in the same directory as the built executable:

- `MSVCP60D.DLL`
- `MSVCRTD.DLL`

The project and this wiki cannot distribute these files. Users must obtain them independently through legitimate means.

## Configure and build

The workflow command above configures and builds the project in one step. Replace `vc6` with another preset when needed.
To run the two steps separately:

```shell
cmake --preset vc6
cmake --build --preset vc6
```

CMake stores each configuration under `build/<preset>`.

## Select games and tools

Both games and their tools are enabled by default. The common build options are:

| Option                      | Default | Controls                        |
| --------------------------- | ------- | ------------------------------- |
| `RTS_BUILD_GENERALS`        | `ON`    | Generals                        |
| `RTS_BUILD_ZEROHOUR`        | `ON`    | Zero Hour                       |
| `RTS_BUILD_CORE_TOOLS`      | `ON`    | Tools shared by both games      |
| `RTS_BUILD_GENERALS_TOOLS`  | `ON`    | Generals tools                  |
| `RTS_BUILD_ZEROHOUR_TOOLS`  | `ON`    | Zero Hour tools                 |
| `RTS_BUILD_CORE_EXTRAS`     | `OFF`   | Shared extra tools and tests    |
| `RTS_BUILD_GENERALS_EXTRAS` | `OFF`   | Generals extra tools and tests  |
| `RTS_BUILD_ZEROHOUR_EXTRAS` | `OFF`   | Zero Hour extra tools and tests |

Pass options while configuring. This example builds Zero Hour and its tools without Generals:

```shell
cmake --preset vc6 -DRTS_BUILD_GENERALS=OFF -DRTS_BUILD_ZEROHOUR=ON -DRTS_BUILD_ZEROHOUR_TOOLS=ON
cmake --build --preset vc6
```

CMake retains these choices in the preset's build directory until it is reconfigured or removed.

## Build a target

Common targets include:

| Target                                    | Output                         |
| ----------------------------------------- | ------------------------------ |
| `g_generals` / `z_generals`               | Game executable                |
| `g_worldbuilder` / `z_worldbuilder`       | World Builder                  |
| `g_guiedit` / `z_guiedit`                 | GUI Editor                     |
| `g_imagepacker` / `z_imagepacker`         | Image Packer                   |
| `g_mapcachebuilder` / `z_mapcachebuilder` | Map Cache Builder              |
| `core_debugwindow`                        | Shared Debug Window library    |
| `core_particleeditor`                     | Shared Particle Editor library |

Build one target by adding `--target`:

```shell
cmake --build --preset vc6 --target z_generals
```

List the targets available in a configured preset with:

```shell
cmake --build --preset vc6 --target help
```

Only enabled games and tools produce targets. Installing after a partial build may fail if another enabled installable
target has not been built.

## Build output

VC6 places the main executables at:

- `build/<preset>/Generals/generalsv.exe`
- `build/<preset>/GeneralsMD/generalszh.exe`

The modern `win32` presets are multi-configuration builds, so their output paths also contain `Release` or `Debug`.

## Install

On Windows, CMake tries to find EA App, CD, The First Decade, and Steam installations from the registry. Run each
installed game at least once first to ensure its registry entries exist.

Install a VC6 Release build with:

```shell
cmake --install build/vc6
```

Modern `win32` builds require the configuration name:

```shell
cmake --install build/win32 --config Release
```

To use explicit game directories, set the install paths while configuring:

```shell
cmake --preset vc6 -DRTS_INSTALL_PREFIX_GENERALS="C:\Games\Generals Test" -DRTS_INSTALL_PREFIX_ZEROHOUR="C:\Games\Zero Hour Test"
cmake --build --preset vc6
cmake --install build/vc6
```

Use `RTS_INSTALL_PREFIX_GENERALS` and `RTS_INSTALL_PREFIX_ZEROHOUR` independently when building only one game.

## Reset a configuration

CMake caches compiler, option, and installation settings. If a configuration starts behaving unexpectedly, discard that
preset's cache and configure it again:

```shell
cmake --fresh --preset vc6
```

Replace `vc6` with the affected preset. Other build configurations are left unchanged.
