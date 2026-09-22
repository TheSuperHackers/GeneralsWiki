# Build Guides

Instructions for building GeneralsGameCode and configuring its build system.

## Available build guides

Both `vc6` and `win32` produce 32-bit Windows builds. `vc6` uses the original Visual C++ 6 toolchain for
retail-compatible Release builds, while `win32` uses a modern Visual Studio toolchain.

### Windows

| Guide                                                  | Toolchain   |
| ------------------------------------------------------ | ----------- |
| [CMake and Visual Studio 6](visual_studio_6)           | VC6         |
| [Build with CLion using VC6 or Win32](clion_vc6_win32) | VC6 / Win32 |
| [Visual Studio 2022 and 2026](visual_studio)           | Win32       |

### Linux

| Guide                                      | Toolchain |
| ------------------------------------------ | --------- |
| [Build on Linux with Docker](linux_docker) | VC6       |

## CMake guide

The [Building with CMake guide](cmake_guide) covers the shared command-line workflow, common presets and
options, target selection, installation, and build-specific requirements.

## Build configurations

The [Build Configurations Overview](build_configuration) describes the Release, Debug, and Profile configurations, the
build options, and the debug feature options that control them.
