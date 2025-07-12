# Compile Command & Conquer Generals And Zero Hour with VC6 in CLion

This guide shows how to configure CLion to work with the Visual Studio 6.0 toolchain, maintaining
compatibility with the original compiler from the game's development era. To compile the source code for
**Command & Conquer: Generals** and **Zero Hour** using the CLion IDE, follow the steps outlined below.

## Prerequisites

- [Visual Studio 6.0 Portable](https://github.com/itsmattkc/MSVC600)
  > See the [Visual Studio 6.0 Portable installation instructions](build_with_msvc6.md#visual-studio-60-portable)
  > for setup details.
- [CLion](https://www.jetbrains.com/clion/)

> This guide assumes the user uses the default installation
> folder for Visual Studio 6.0 Portable: `C:\Program Files (x86)\Microsoft Visual Studio\`

## Step 1: Clone and Open the Project

1. Clone the source code from TheSuperHackers:

   ```shell
   git clone https://github.com/TheSuperHackers/GeneralsGameCode.git
   ```

   > Alternatively, you can clone the repository directly from within CLion.

2. Open the cloned folder in **CLion**.

## Step 2: Setting Up the Toolchain in CLion

1. In CLion, go to **File** → **Settings** → **Build, Execution,
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

## Step 3: Configuring the CMake Profiles

1. To configure the CMake profiles, proceed with the following steps:
   - Go to **File** → **Settings** → **Build, Execution, Deployment** → **CMake**.
   (should open automatically after opening the folder containing the cloned source code)
   - Disable the default `Debug` profile.
   - Enable `vc6` - Release build
   - Enable `vc6-debug` - Debug build
   - Enable `vc6-profile` - Profile build

   For detailed information about each build configuration and their specific purposes, see the [Build Configurations Overview](https://github.com/TheSuperHackers/GeneralsGameCode/wiki/build_configuration).

## Step 4: Configuring the Installation Path

1. In the **Run/Debug Configurations** dropdown, select the target game: `z_generals` (Zero Hour) or `g_generals` (Generals).
2. Open the same dropdown, then for the target game you just selected, click the 3 dots on the right, then **Edit...**

   > **Note:** This step must be repeated for both `z_generals` and `g_generals` targets.

   - Set **Program arguments** with your preferred command line arguments, such as `-win`, `-quickstart`, etc.
   - Set **Executable** to the path of your game install plus the built executable name, for example:

     ```text
     C:\Program Files (x86)\Command & Conquer Generals Zero Hour\generalszh.exe (for Zero Hour) or
     C:\Program Files (x86)\Command & Conquer Generals Zero Hour\generalsv.exe (for Generals)
     ```

     This ensures that the game starts correctly after clicking the run button in CLion.

   - Set **Working directory** to the game directory.
   - Check the **Run as administrator** option.
   - To avoid duplicate builds, remove the **Build** step.
   - In the **Before launch** section, add a new **install** step.
   - Save the configuration, and you are ready to build and run the project.

## Step 5: Compiling and Running the Project

   Click **Run** on the toolbar, or build the project and run the executable from the
   game directory.

## Running Debug Builds

> **⚠️ Debug Build Requirements:** To run a debug build of the game, you need to have  
> the following two files in the game directory alongside the built executable:
>
> - [`MSVCRTD.DLL`](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Builds/files/MSVCRTD.DLL)  
>   Microsoft Visual C++ Runtime Library (Debug)
> - [`MSVCIRTD.DLL`](https://github.com/TheSuperHackers/GeneralsWiki/raw/refs/heads/main/SourceCode/Builds/files/MSVCIRTD.DLL)  
>   Microsoft Visual C++ Internationalization Runtime Library (Debug)

## Notes

- Working with VC6 requires some adjustments, so it’s a good idea to verify
  that the toolchain is working properly.
- Administrator rights may be required to run VC6 tools, so run CLion as an administrator if
  needed.
