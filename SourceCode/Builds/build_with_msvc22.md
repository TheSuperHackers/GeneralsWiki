# Building and Compiling C&C Generals & Zero Hour on Visual Studio 2022

This guide will walk you through the process of basic setup and compilation of the C&C Generals and Zero Hour source
code using Visual Studio 2022.
For build using solutions and more advanced build configurations, see below.

## Prerequisites

1. **Visual Studio 2022**

- Ensure that the necessary C++ development components, **including MFC**, are installed.

>[!NOTE]
> You must have the MFC components installed to compile the source code.
<!-- markdownlint-disable-next-line -->
2. **Obtain the Source Code**
    - Clone or download the source code
      repository: [TheSuperHackers - GeneralsGameCode](https://github.com/TheSuperHackers/GeneralsGameCode.git).

## Steps

### 1. Prepare the project

- Open the cloned folder in Visual Studio 2022.
- Wait for Visual Studio to generate the necessary CMake files.

### 2. Build the Project

- Select the appropriate build configuration:
  - `Build Windows build` for a release build.
  - `Build Windows Debug build` for a debug build.
  - `Build Windows Internal build` for an internal build.
  - `Build Windows Profile build` for a profile build.

>[!TIP]
> For more information on the different build configurations, see the [Build Configurations](build_configurations.md)
page.

- Select the target you want to build:
  - `generalsv.exe` to build the base Generals.
  - `generalszh.exe` to build Zero Hour.

- Build the project by clicking on the `Build` menu and selecting `Build`.
- The compiled executable will be placed in the `build/<win32 build type>/<game name (Generals/GeneralsMD)>/<build configuration>`
  folder. Example: `build/win32dgb/GeneralsMD/Debug`
- Install the game executable in the game directory by clicking on the `Install` in `Build` menu. This will copy the
  executable to the retail game directory.

## Additional Steps

### Build through CMake target view

- In the Solution Explorer, click on 'switch view' and select 'CMake Targets View'.
- Expand the 'Genzh' project and right-click on the target you want to build.
- Select 'Build' to compile the target.

### Build using command line

You need to install [CMake](https://cmake.org/download/) and [Ninja](https://github.com/ninja-build/ninja/releases)
to build the project from the command line.

- In the developer command prompt, open the settings to add the x86 environment terminal.

>[!Tip]
> Alternatively, you can open the "x86 Native Tools Command Prompt for VS 2022" from the start menu,
> and navigate to the project directory in the terminal then run the commands below.
  
- In the pop-up window, click on the 'Add' and set the following: (assuming default installation path)
  - Name: `x86 Native Tools Command Prompt`
  - Shell Location: `C:\Windows\System32\cmd.exe`
  - Arguments: `/k "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars32.bat"`
- Now you can open the new terminal from the terminal dropdown list.
- Run the following commands to build the project:
- Choose the build configuration:
  - `cmake --workflow --preset win32` for Release build.
  - `cmake --workflow --preset win32dgb` for Debug build.
  - `cmake --workflow --preset win32int` for Internal build.
  - `cmake --workflow --preset win32prof` for Profile build.
- Install the game executable in the game directory (assuming that the build was successful):
  - `cmake --install build/<preset name>`
- To build a specific target:
  - Run `cmake --build build/<preset name> --target <target name>`
  - Example: `cmake --build build/win32 --target z_generals`
  - Or: `cmake --build build/win32 --target g_generals`

## Troubleshooting

- **Missing DLLs?** Ensure that all required dependencies are installed.
- **Game not launching?** Verify that all necessary `.BIG` files are correctly placed.
- **Build errors?** Check Visual Studio settings and dependencies for any issues.
