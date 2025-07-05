# Compile Command & Conquer Generals And Zero Hour with VC6 in CLion

This guide shows how to configure CLion to work with the Visual Studio 6.0 toolchain, maintaining
compatibility with the original compiler from the game's development era. To compile the source code for
**Command & Conquer: Generals** and **Zero Hour** using the CLion IDE, follow the steps outlined below.

## Prerequisites

- [Visual Studio 6.0 Portable](https://github.com/itsmattkc/MSVC600)
- [CLion](https://www.jetbrains.com/clion/)
- [Source Code](https://github.com/TheSuperHackers/GeneralsGameCode) of the project cloned from the TheSuperHackers repository

> For simplicity, this guide assumes the user will be using the
> default install folder for Visual Studio 6.0 Portable: `C:\Program Files (x86)\Microsoft Visual Studio\`

## Step 1: Setting Up the Toolchain in CLion

1. Open the cloned folder in **CLion** and go to **File** → **Settings** → **Build, Execution,
   Deployment** → **Toolchains**.
2. Add a new **Toolchain** by clicking the **+** button.
3. Select **System** as the type (not Visual Studio).
4. Rename the toolchain to **Visual Studio 6**.
5. Next to the toolchain name, add the **environment** file by clicking the
   **+** button and pointing to the following file:

   ```text
   C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.BAT
   ```

   > **Warning**: Make sure to change the file extension from `.BAT` to `.bat` (lowercase) in the path to the
   > environment file in the CLion toolchains window, otherwise CLion may have issues detecting the environment
   > for some reason.

6. Set the paths for the tools:
   - **Build Tool**: Choose the `NMAKE.EXE` file from VC6. For example:

     ```text
     C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\NMAKE.EXE
     ```

   - **C Compiler**: The `cl.exe` should be detected automatically. If not, set
     it manually to:

     ```text
     C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\cl.exe
     ```

   - **C++ Compiler**: The `cl.exe` will also be detected automatically.

![CLion VC6 Toolchain Configuration](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Builds/files/clionvc6toolchain.png)

## Step 2: Configuring the CMake Profiles

1. In the CMake profiles, enable the profiles you want to use. The available workflow presets are:
   - `vc6` - Release build
   - `vc6-debug` - Debug build
   - `vc6-internal` - Internal build
   - `vc6-profile` - Profile build

   For detailed information about each build configuration and their specific purposes, see the [Build Configurations Overview](https://github.com/TheSuperHackers/GeneralsGameCode/wiki/build_configuration).

## Step 3: Configuring the Installation Path

1. In the target application options, do the following:

   - Set **Program arguments** with your preferred command line arguments, such as `-win`, `-quickstart`, etc.
   - Set **Working directory** to the game directory.
   - Check the **Run as administrator** option.
   - In the **Before launch** section, add a new **install** step.
   - To avoid duplicate builds, remove the **Build** step.
   - Save the configuration, and you are ready to build and run the project.

## Step 4: Compiling and Running the Project

1. Now, click the **Build** button in CLion, or click **Install** in the build menu.
2. CLion will start the build/install process using the VC6 (x86) toolchain.
3. Once the build is successfully completed, an executable file will be generated and installed in the
   game directory.

## Notes

- Working with VC6 requires some adjustments, so it’s a good idea to verify
  that the toolchain is working properly.
- You can add Release and Debug profiles in CLion to build the project in
  different configurations.
- Administrator rights may be required to run VC6 tools, so run CLion as an administrator if
  needed.
