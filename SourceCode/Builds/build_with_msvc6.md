# Compile Command & Conquer Generals And Zero Hour with VC6

This guide shows how to compile the source code for **Command & Conquer: Generals** and **Zero Hour**. To compile
the source code, follow the steps outlined below. This process is still in the early stages of development, and
ongoing efforts may lead to additional tools being compiled from the source code. The focus here is solely on
compiling the main executable, which can then be placed into the game directory and used to start the game with
the newly compiled binary. This process utilizes the original compiler from the game's development era to ensure
compatibility.

## Intended Audience

This guide is intended for software developers, starting from a beginner level. You should be able to
write programs and execute them. Familiarity with command-line interfaces and configuring environment
variables when necessary is required.

Even if you do not know C++, you should still be able to compile the source code. However, a basic
understanding of how C++ is compiled is necessary. This includes knowing what the **compiler** and
**linker** do, as well as being able to interpret error messages and troubleshoot them effectively.

## Prerequisites and setting up the build environment

Download and install the following tools and software needed for compilation.

> **ℹ️ Setup Note:** For simplicity, this guide will use the installers for Git and CMake and assumes the user will use the
default install folder for Visual Studio 6.0 Portable.

### Visual Studio 6.0 Portable

**Download:** [Visual Studio 6.0 Portable](https://github.com/itsmattkc/MSVC600)

The original compiler used for game development.

**Installation:**

- Download the portable Visual Studio 6 as a ZIP file from GitHub
- Extract the `common` and `VC98` folders from the downloaded archive to the default install folder
- Default installation folder: `C:\Program Files (x86)\Microsoft Visual Studio\`

> Alternatively, you can use the VC6 setup from Archive.org.

### Git

**Download:** [Git](https://git-scm.com/downloads)

Required for cloning the source code repository.

**Installation:**

- Run the Git installer

### CMake *(added to system path)*

**Download:** [CMake 3.31.6](https://github.com/Kitware/CMake/releases/download/v3.31.6/cmake-3.31.6-windows-x86_64.msi)
or [newer](https://cmake.org/download/#latest)

> **Note:** Not required if using IDEs like CLion or Visual Studio 2022, as these include built-in CMake support.

**Installation:**

- Run the installer for CMake
- Enable the option to add CMake to the system path during the setup wizard

### Ninja *(added to system path)*

**Download:** [Ninja](https://ninja-build.org/)

> **Note:** Not required if using IDEs like CLion or Visual Studio 2022, as these include a bundled ninja binary.

**Installation:**

- Download the Ninja binary from the [Ninja releases page](https://ninja-build.org/)
- Extract the `ninja.exe` file to a folder of your choice
- Add the folder containing `ninja.exe` to your system's PATH environment variable

## Clone

Clone the code from TheSuperHackers:

``` shell
git clone https://github.com/TheSuperHackers/GeneralsGameCode.git
```

``` shell
cd GeneralsGameCode
```

## Compilation

> Use the Windows Command Prompt aka CMD (not PowerShell, Git Bash, etc.) to run the commands.
Otherwise, you will receive an error when building the source code.

### Option 1: Activate your VS6 Compiler Environment

> This needs to be done for each new instance of the CMD from which you wish to run build commands.

Execute the setup build environment script. In your CMD, type this (assuming the default installation path):

``` shell
"C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat"
```

### Option 2: Manually set your VS6 Compiler Environment

> These steps need to be repeated every time after a reboot of your computer.

`<VS6_INSTALL_PATH>`: Where you have installed VS6.

`<PROJECT_FOLDER>`: Where you have the source code project.

#### Path

``` shell
C:\<VS6_INSTALL_PATH>\VB98;
C:\<VS6_INSTALL_PATH>\VC98\Bin;
C:\<VS6_INSTALL_PATH>\VC98\Lib;
C:\<VS6_INSTALL_PATH>\VC98\Include;
C:\<VS6_INSTALL_PATH>\Common\tools;
C:\<VS6_INSTALL_PATH>\Common\MSDev98\Bin
```

#### Environment Variables

``` shell
set LIB=C:\<VS6_INSTALL_PATH>\VC98\Lib;^
C:\<VS6_INSTALL_PATH>\VC98\MFC\Lib;^
C:\<PROJECT_FOLDER>\build\vc6

set INCLUDE=C:\<VS6_INSTALL_PATH>\VC98\ATL\Include;^
C:\<VS6_INSTALL_PATH>\VC98\Include;^
C:\<VS6_INSTALL_PATH>\VC98\MFC\Include;^
C:\<VS6_INSTALL_PATH>\VC98\Include

set CC=C:\<VS6_INSTALL_PATH>\VC98\Bin\CL.exe
set CXX=C:\<VS6_INSTALL_PATH>\VC98\Bin\CL.exe

set MSVCDir=C:\<VS6_INSTALL_PATH>\VC98
```

### Build the project

Run the following command based on the type of build you want to create:

- For a release build:

``` shell
cmake --workflow --preset vc6
```

- For a debug build:

``` shell
cmake --workflow --preset vc6-debug
```

- For a profile build:

``` shell
cmake --workflow --preset vc6-profile
```

You will find a bunch of files in `build\vc6\<game name>` and a file called `generalszh.exe` or `generalsv.exe`.

For detailed information about each build configuration and their specific purposes, see the [Build Configurations Overview](https://github.com/TheSuperHackers/GeneralsGameCode/wiki/build_configuration).

### Install the game executable

Run the following command to copy the executable to the retail game directory:

``` shell
cmake --install build\<vc6 build type>
```

Alternatively, you can copy it manually.

### Running Debug Builds

> **⚠️ Debug Build Requirements:** To run a debug build of the game, you need to copy  
> the following two files into the game directory alongside the built executable:
>
> - [`MSVCRTD.DLL`](https://discord.com/channels/951133504605917224/1344671543170564176/1357087699982352426)  
>   Microsoft Visual C++ Runtime Library (Debug)
> - [`MSVCIRTD.DLL`](https://discord.com/channels/951133504605917224/1344671543170564176/1357087699982352426)  
>   Microsoft Visual C++ Internationalization Runtime Library (Debug)
>
> These files are available from the [Community Outpost Discord server](https://discord.gg/WzxQDZersE) (links above  
> are from the server) and may require a Discord account to download.

## Troubleshooting

### Error: "too long"

- The compiler failed because the total path length for **lib** and **include** exceeded the limit for **VS6**.  
- Your only option is to move your project and dependencies **closer to the root of your drive** or  
  rename folders in your project to shorter names.

### Error: "could not find X.h file"

- Ensure that you have correctly set up your `LIB` and `INCLUDE` environment variables.
- These variables are **essential** for linking and compiling header (`.h`) and library (`.lib`) files.

### Error: "cmake --preset fails"

- Delete the `build` folder and try again.
- Sometimes, CMake's **cache** gets corrupted, and you need to **start fresh**.
