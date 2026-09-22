# CMake and Visual Studio 6

This guide sets up the original Visual C++ 6 compiler for the GeneralsGameCode CMake build. The shared presets, options,
targets, output paths, installation steps, and configuration-specific requirements are documented in the
[Building with CMake guide](cmake_guide).

## Requirements

- Windows
- [Visual Studio 6.0 Portable](https://github.com/itsmattkc/MSVC600)
- [Git](https://git-scm.com/downloads)
- [CMake](https://cmake.org/download/) 3.25 or newer, added to `PATH`
- [Ninja](https://ninja-build.org/), added to `PATH`

## Install Visual C++ 6

Download the Visual Studio 6.0 Portable archive and extract its `Common` and `VC98` directories into:

```text
C:\Program Files (x86)\Microsoft Visual Studio
```

The compiler environment script should then be located at:

```text
C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat
```

If you install it elsewhere, replace this path in the commands below.

## Clone the source

> [!IMPORTANT]
> Use Command Prompt (`cmd.exe`) for the terminal commands below, not PowerShell, Git Bash, or another
> shell. The VC6 environment must be activated again in every new Command Prompt instance.

Clone the repository:

```batch
git clone https://github.com/TheSuperHackers/GeneralsGameCode.git
cd GeneralsGameCode
```

## Activate the compiler

Activate the VC6 environment:

```batch
call "C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat"
```

Verify that the compiler, CMake, and Ninja are available:

```batch
where cl
cl
cmake --version
ninja --version
```

`cl` should report Microsoft 32-bit C/C++ compiler version 12.

## Build

From the repository root, configure and build the VC6 Release preset:

```batch
cmake --workflow --preset vc6
```

See the [Building with CMake guide](cmake_guide) for Debug and Profile builds, game and tool selection,
individual targets, installation, and retail compatibility.

## Troubleshooting

### The compiler is not found

Run `VCVARS32.bat` again in the current Command Prompt. Confirm that `where cl` resolves to the VC6 `CL.EXE`, not a
newer Visual Studio compiler.

### A path is too long

VC6 has much smaller path-length limits than modern compilers. Move the repository closer to the drive root, such as
`C:\GeneralsGameCode`, and configure it again.

### A header or library is missing

Run `VCVARS32.bat` and check that `INCLUDE` and `LIB` contain the VC6 directories. If the wrong compiler was cached,
reset the affected preset as described in the
[Building with CMake guide](cmake_guide#reset-a-configuration).

### A VC6 Debug build does not start

See the centralized [VC6 Debug runtime requirements](cmake_guide#vc6-debug-runtime).
