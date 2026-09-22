# Build Configurations Overview

This page describes the build configurations GeneralsGameCode supports and the CMake options that control them. For
presets, targets, and installation, see the [Building with CMake guide](cmake_guide).

Configurations are selected through CMake cache variables, which the presets in `CMakePresets.json` set for you. You
rarely need to set them by hand; pass them while configuring only when you want a combination no preset provides.

## Configurations

| Configuration | VC6 preset    | Win32 preset    | Cache variables set by the preset                       |
| ------------- | ------------- | --------------- | ------------------------------------------------------- |
| Release       | `vc6`         | `win32`         | none; this is the default                               |
| Debug         | `vc6-debug`   | `win32-debug`   | `RTS_BUILD_OPTION_DEBUG=ON`                             |
| Profile       | `vc6-profile` | `win32-profile` | `RTS_BUILD_OPTION_PROFILE=ON`                           |

Two differences between the toolchains are worth noting:

- `vc6-debug` also sets `CMAKE_BUILD_TYPE=Debug`, because the VC6 presets use Ninja, a single-configuration generator.
  The `win32` presets are multi-configuration, so the configuration is chosen when building instead.
- `win32-profile` additionally sets `RTS_BUILD_OPTION_PROFILE_TRACY=ON`. The VC6 profile build does not use Tracy.

> **Retail compatibility:** Only the `vc6` Release build is compatible with retail multiplayer and replays. See
> [Build presets](cmake_guide#build-presets).

## Configuration definitions

Each configuration compiles the code with a different set of preprocessor definitions:

| Configuration | Definitions                                    |
| ------------- | ---------------------------------------------- |
| Release       | `RTS_RELEASE`, `NDEBUG`                        |
| Debug         | `RTS_DEBUG`, `WWDEBUG`, `DEBUG`                |
| Profile       | `RTS_RELEASE`, `NDEBUG`, `RTS_PROFILE_LEGACY`  |

The Profile configuration builds on Release, so it defines `RTS_RELEASE` and `NDEBUG` as well.

Two further definitions are applied by platform rather than by configuration:

- On MSVC: `_CRT_NONSTDC_NO_WARNINGS` and `_CRT_SECURE_NO_WARNINGS`, plus `_DEBUG_CRT` in the Debug configuration.
- On Unix: `_UNIX`.

> [!NOTE]
> Optimization and debug-information flags such as `/O2`, `/Od`, and `/Zi` are not set by the project. They come
> from the compiler defaults CMake applies for the selected `CMAKE_BUILD_TYPE`. The presets set warning level `/W3`
> through the `RTS_FLAGS` cache variable.

The Debug configuration has one additional runtime requirement.

> [!IMPORTANT]
> Debug builds require the Microsoft debug runtime libraries in the same directory as the built executable.
> See [VC6 Debug runtime](cmake_guide#vc6-debug-runtime) for the required files.

## Build options

These options change how the code is built. All default to `OFF`.

| Option                            | Effect                                                              |
| --------------------------------- | ------------------------------------------------------------------- |
| `RTS_BUILD_OPTION_DEBUG`          | Builds the Debug configuration                                      |
| `RTS_BUILD_OPTION_PROFILE`        | Builds the Profile configuration                                    |
| `RTS_BUILD_OPTION_PROFILE_TRACY`  | Enables Tracy profiler integration                                  |
| `RTS_BUILD_OPTION_ASAN`           | Builds with Address Sanitizer (`/fsanitize=address`)                |
| `RTS_BUILD_OPTION_VC6_FULL_DEBUG` | Builds VC6 with full debug information (`/Zi`)                      |
| `RTS_BUILD_OPTION_FFMPEG`         | Enables FFmpeg support                                              |

There is also `RTS_BUILD_OUTPUT_SUFFIX`, a string appended to the output names of installable targets. It is empty by
default, which is why the executables are named `generalsv.exe` and `generalszh.exe`.

## Debug feature options

These options control individual debug features independently of the configuration, so a Release build can keep
logging or assert dialogs enabled.

The following four accept `DEFAULT`, `ON`, or `OFF`. `DEFAULT` leaves the feature to the configuration, where it is
enabled for Debug and Internal builds:

| Option                 | `ON` defines        | `OFF` defines               |
| ---------------------- | ------------------- | --------------------------- |
| `RTS_DEBUG_LOGGING`    | `DEBUG_LOGGING`     | `DISABLE_DEBUG_LOGGING`     |
| `RTS_DEBUG_CRASHING`   | `DEBUG_CRASHING`    | `DISABLE_DEBUG_CRASHING`    |
| `RTS_DEBUG_STACKTRACE` | `DEBUG_STACKTRACE`  | `DISABLE_DEBUG_STACKTRACE`  |
| `RTS_DEBUG_PROFILE`    | `DEBUG_PROFILE`     | `DISABLE_DEBUG_PROFILE`     |

Each of these definitions is set to `1`. Enabling `RTS_DEBUG_STACKTRACE` also enables debug logging.

The remaining options are simple on/off switches, all `OFF` by default:

| Option                                   | Defines                          | Purpose                                  |
| ---------------------------------------- | -------------------------------- | ---------------------------------------- |
| `RTS_DEBUG_CHEATS`                       | `_ALLOW_DEBUG_CHEATS_IN_RELEASE` | Enables debug cheats in release builds   |
| `RTS_DEBUG_INCLUDE_DEBUG_LOG_IN_CRC_LOG` | `INCLUDE_DEBUG_LOG_IN_CRC_LOG`   | Includes the debug log in the CRC log    |
| `RTS_DEBUG_MULTI_INSTANCE`               | `RTS_MULTI_INSTANCE`             | Allows running multiple client instances |

## Additional presets

Two VC6 presets combine a Release build with debug features:

| Preset            | Cache variables                                  | Purpose                                  |
| ----------------- | ------------------------------------------------ | ---------------------------------------- |
| `vc6-releaselog`  | `RTS_DEBUG_LOGGING=ON`, `RTS_DEBUG_CRASHING=ON`  | Release build with logging and asserts   |
| `vc6-weekly`      | `RTS_BUILD_OPTION_VC6_FULL_DEBUG=ON`             | Release build with full debug info       |

List every preset in your checkout with `cmake --list-presets=all`.

## Example

Configure a Release build with debug logging enabled and build it:

```shell
cmake --preset vc6 -DRTS_DEBUG_LOGGING=ON
cmake --build --preset vc6
```
