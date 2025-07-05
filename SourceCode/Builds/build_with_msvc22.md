# Building and Compiling C&C Generals & Zero Hour on Visual Studio 2022

This guide will walk you through the process of basic setup and compilation of the C&C Generals and Zero Hour source
code using Visual Studio 2022.
For build using solutions and more advanced build configurations, see below.

- [Prerequisites](#prerequisites)
- [Build through Visual Studio 2022](#build-through-visual-studio-2022)
- [Build through CMake target view](#build-through-cmake-target-view)
- [Build using command line](#build-using-command-line)
- [Build using solutions](#build-with-solutions)
- [Build with VCPKG](#build-with-vcpkg)
- [Troubleshooting](#troubleshooting)

## Prerequisites

1. **Visual Studio 2022**

- Ensure that the necessary C++ development components, **including MFC**, are installed.
- For _vcpkg_ builds, you also must have **vcpkg** installed, which you can find under individual components.

>[!NOTE]
> You must have the MFC components installed to compile the source code. You can find it in Visual Studio Installer.
>
> ![image](https://github.com/user-attachments/assets/cdabd4d9-f291-4833-8a63-704654a43780)

<!-- markdownlint-disable-next-line -->
2. **Obtain the Source Code**
    - Clone or download the source code
      repository: [TheSuperHackers - GeneralsGameCode](https://github.com/TheSuperHackers/GeneralsGameCode.git).

---

## Build through Visual Studio 2022

### 1. Prepare the project

- Open the cloned folder in Visual Studio 2022.
- Wait for Visual Studio to generate the necessary CMake files.

### 2. Build the Project

- Select the appropriate build configuration:
  - `Build Windows 32bit Release` for a release build.
  - `Build Windows 32bit Debug` for a debug build.
  - `Build Windows 32bit Profile` for a profile build.
  - `Build Windows 32bit VCPKG Release` for a release build with the VCPKG package manager.
  - `Build Windows 32bit VCPKG Debug` for a debug build with the VCPKG package manager.
  - `Build Windows 32bit VCPKG Profile` for a profile build with the VCPKG package manager.

![Build options](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Builds/files/buildoptions.jpg)

>[!TIP]
> For more information on the different build configurations, see the [Build Configurations](build_configurations.md)
page.

- Select the target you want to build:
  - `generalsv.exe` to build the base Generals.
  - `generalszh.exe` to build Zero Hour.

![image](https://github.com/user-attachments/assets/37d59b79-77fc-4797-bbab-be385dd654da)

- Build the project by clicking on the `Build` menu and selecting `Build`.
- The compiled executable will be placed in the build folder. Example: `build/win32dgb/GeneralsMD/Debug`
- Install the game executable in the game directory by clicking on the `Install` in `Build` menu. This will copy the
  executable to the retail game directory.

---

## Build through CMake target view

- In the Solution Explorer, click on 'switch view' and select 'CMake Targets View'.
- Expand the 'Genzh' project and right-click on the target you want to build.
- Select 'Build' to compile the target.

![image](https://github.com/user-attachments/assets/adb296b6-ae05-4a23-9aa7-2a9c56b9e8e9)

---

## Build using command line

You need to install [CMake](https://cmake.org/download/) and [Ninja](https://github.com/ninja-build/ninja/releases)
to build the project from the command line.

- In the developer command prompt, open the settings to add the x86 environment terminal.
- In the pop-up window, click on the 'Add' and set the following: (assuming default installation path)
  - Name: `x86 Native Tools Command Prompt`
  - Shell Location: `C:\Windows\System32\cmd.exe`
  - Arguments: `/k "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars32.bat"`
- Now you can open the new terminal from the terminal dropdown list.

>[!Tip]
> Alternatively, you can skip the terminal setup and simply open the "x86 Native Tools Command Prompt for
> VS 2022" from the Start menu. Once opened, navigate to the project directory in the terminal and proceed
> to run the commands below.
<!-- markdownlint-disable-next-line -->
- #### 1. **Release Build**

  - **Choose the build configuration:**
    - `cmake --workflow --preset win32` for Release build.

  - **Install the game executable in the game directory (assuming the build was successful):**
    - `cmake --install build/win32 --config Release`

- #### 2. **Development and Debug Builds**

  - **Choose the build configuration:**
    - `cmake --workflow --preset win32dgb` for Debug build.
    - `cmake --workflow --preset win32prof` for Profile build.

  - **Install the game executable in the game directory (assuming the build was successful):**
    - `cmake --install build/<preset name>`

- **To build a specific target:**
  - Run `cmake --build build/<preset name> --target <target name>`
  - Example: `cmake --build build/win32dgb --target z_generals`
  - Or: `cmake --build build/win32prof --target g_generals`

For more CMake options, see the [CMake Guide](cmake_guide).

---

## Build with Solutions

- Generate the Visual Studio solution with the appropriate preset (see above):
- Run `cmake --preset win32 -G "Visual Studio 17 2022" -A Win32`
- Navigate to the `build/win32` folder and open the generated solution file.
- Build the project using the Visual Studio interface.

---

## Build with VCPKG

To build configurations that make use of VCPKG you must set the environment variable `VCPKG_ROOT` to the location
where the VCPKG is found. If you have installed Visual Studio 2022 with the VCPKG component, you will most likely
find it in one of these paths:

- `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\vcpkg`
- `C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\vcpkg`
- `C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\vcpkg`

If you use the stand-alone version of VCPKG, you need to use the folder you installed it in.

### Set environment variable in command prompt

You can set the environment variable in the command prompt. You will have to set it again if you (re)open the prompt:

- `set VCPKG_ROOT=<path_to_vcpkg>`

### Set environment variable in Windows

You can also permanently set the environment variable in Windows

- Search for `edit the system environment variables` in Windows Search or Control Panel
- Choose `Environment Variables`
- Add a new user variable
- Set the variable name to `VCPKG_ROOT`
- Set the variable value to the VCPKG path.

---

## Troubleshooting

- **Missing DLLs?** Ensure that all required dependencies are installed.
- **Game not launching?** Verify that all necessary `.BIG` files are correctly placed.
- **Build errors?** Check Visual Studio settings and dependencies for any issues or delete the `build` folder and try
  building again.
