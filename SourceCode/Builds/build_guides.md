# Build Guides

This page provides an overview of the official and community-supported build guides for **TheSuperHackers** project. It
includes both the official build guides for the main repository and guides for community forks of the project. The
guides cover different environments, configurations, and setups for building the project.

## Build Configurations Overview

Before diving into the build guides, it's important to understand the different build configurations used in the
project. These configurations dictate how the project is built, whether for debugging, profiling or release.

- **Release:** Optimized for end-users, providing a smaller, faster executable with no debugging information.
- **Debug:** Includes debugging information, making it easier to trace and debug the code, but without optimization to
  ensure ease of debugging.
- **Profile:** Used for performance profiling, with optimizations enabled and additional debugging options to collect
  profiling data.

Each configuration is designed for a different purpose, whether you're building for development, debugging, testing, or
releasing the final product. You can find more details about the build configurations in
the [Build Configurations](build_configuration) page.

> **⚠️ Debug Build Requirements:** To run a debug build of the game, you need to have  
> the following two files in the game directory alongside the built executable:
>
> - [`MSVCRTD.DLL`](https://discord.com/channels/951133504605917224/1344671543170564176/1357087699982352426)  
>   Microsoft Visual C++ Runtime Library (Debug)
> - [`MSVCIRTD.DLL`](https://discord.com/channels/951133504605917224/1344671543170564176/1357087699982352426)  
>   Microsoft Visual C++ Internationalization Runtime Library (Debug)
>
> These files are available from the [Community Outpost Discord server](https://discord.gg/WzxQDZersE) (links above  
> are from the server) and may require a Discord account to download.

## Architectures and Toolchains

The project supports multiple architectures and toolchains, which is why there are various build guides tailored to
different environments. An **architecture** refers to the target platform, such as **x86** (32-bit) or **x64** (64-bit),
while a **toolchain** is the set of tools (compilers, linkers, etc.) used to build the project. Different toolchains may
support different optimizations, libraries, or debugging features that influence how the build process is conducted.

> [!WARNING]
> The Wiki is under work in progress. The content is subject to change and may not be complete.
> Not all build guides are available yet, but you can contribute by adding new guides or updating existing ones.

## CMake Overview

This [CMake Guide](cmake_guide) provides an overview of how to configure and build **Generals** and its expansion
*Zero Hour* using **CMake** via the command line. It covers the various options and flags defined in the CMake files that
control the build process, allowing you to choose different components of the game and tools to build.

## Official Build Guides

These are the official guides provided by **TheSuperHackers** for building the project using various toolchains and
environments.

### **Visual Studio 6 Guides**

1. **Using pure Visual Studio 6 (x86) (Windows)**
    - A guide for building the project using only Visual Studio 6 on Windows for the x86 architecture.
      [Build with pure Visual Studio 6 (x86) (Windows)](build_with_ea_msvc6)

2. **Using Cmake & Visual Studio 6 (x86) (Windows)**
    - A guide for building the project using CMake with Visual Studio 6 on Windows for the x86 architecture.
      [Build with CMake & Visual Studio 6 (x86) (Windows)](build_with_msvc6)

   #### Sub-guides
  
    - **CLion & VC6 Toolchain**
        - A guide for using CLion with the Visual Studio 6 (VC6) toolchain for building the project.
         [Build with CLion & VC6 Toolchain](build_with_clion_vc6_toolchain)
    - **Docker & VC6**
        - A guide for setting up Docker with the Visual Studio 6 (VC6) toolchain for building the project in a
          containerized environment.
         [Build with Docker & VC6](build_with_msvc6_on_docker)

### **Visual Studio 2022 Guides**

1. **Using Cmake (x86) (Windows)**
    - A guide for building the project using CMake with Visual Studio 2022 on Windows for the x86 architecture.
      [Build with CMake (x86) (Windows)](build_with_msvc22)

2. **Using Cmake (Linux)**
    - A guide for building the project using CMake with Visual Studio 2022 on Linux.
      [Build with CMake (Linux)](build_with_msvc22_linux)

## Community Forks Build Guides

These are the guides provided for community-supported forks of **TheSuperHackers** project. These forks are customized
versions of the original repository and may have unique build setups.

1. **MSVC22 (x64) Generals Only (Windows)**
    - A guide for building a custom fork of the project using MSVC 2022 (x64) for Windows, specifically tailored for
      the "Generals Only" version.
      [Build with MSVC22 (x64) Generals Only (Windows)](build_with_msvc22_x64_jmarshall2323)
