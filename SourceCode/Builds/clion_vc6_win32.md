# Build with CLion using VC6 or Win32

This guide configures CLion for the `vc6` and `win32` CMake presets. Shared presets, options, targets, output paths, and
installation steps are documented in the [Building with CMake guide](cmake_guide).

## Requirements

- Windows
- [CLion](https://www.jetbrains.com/clion/)
- [Git](https://git-scm.com/downloads)
- One or both supported Visual C++ toolchains:
  - [Visual C++ 6](visual_studio_6#install-visual-c-6) for `vc6`
  - [Visual Studio Build Tools for C++](https://visualstudio.microsoft.com/visual-cpp-build-tools/) with the
    [required components](visual_studio#requirements) for `win32`

CLion's bundled CMake can be used. The Win32 toolchain can also use the bundled Ninja.

## Configure the toolchains

Open **File > Settings > Build, Execution, Deployment > Toolchains**.

### Visual C++ 6

1. Add a **System** toolchain and name it exactly `Visual Studio 6`.
2. Add this environment file:

   ```text
   C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat
   ```

   > [!WARNING]
   > In CLion, ensure the environment file extension is lowercase `.bat`, not `.BAT`. The uppercase
   > extension can prevent CLion from detecting the environment.

3. Set **Build Tool** to VC6's `NMAKE.EXE`:

   ```text
   C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\NMAKE.EXE
   ```

4. CLion should detect `cl.exe` for both compilers; if it does not, select `VC98\Bin\cl.exe` manually.

### Win32

Add a **Visual Studio** toolchain, select the Visual Studio Build Tools installation, and name it exactly
`Visual Studio`. Keep the bundled Ninja build tool.

The exact names matter because `CMakePresets.json` uses them to select the correct toolchain automatically.

## Clone and open the source

Clone the repository:

```batch
git clone https://github.com/TheSuperHackers/GeneralsGameCode.git
```

Open the cloned `GeneralsGameCode` directory in CLion.

## Configure the CMake profiles

After opening the project, CLion imports the profiles from `CMakePresets.json`:

1. Open **File > Settings > Build, Execution, Deployment > CMake**.
2. Disable the default `Debug` profile.
3. Enable the profiles for either toolchain or both:

   | Build   | Visual C++ 6  | Win32           |
   | ------- | ------------- | --------------- |
   | Release | `vc6`         | `win32`         |
   | Debug   | `vc6-debug`   | `win32-debug`   |
   | Profile | `vc6-profile` | `win32-profile` |

4. Wait for CMake to finish loading the selected profiles.

> **Retail compatibility:** Only VC6 Release builds are compatible with retail multiplayer and replays.

## Configure running

Configure both `g_generals` and `z_generals` separately:

1. Select the game target from the **Run/Debug Configurations** dropdown, open the dropdown again, and choose **Edit
   Configurations**.
2. Set optional **Program arguments**, such as `-win` or `-quickstart`.
3. Set **Executable** to the installed game executable:

   ```text
   C:\Path\To\Generals\generalsv.exe
   C:\Path\To\Zero Hour\generalszh.exe
   ```

4. Set **Working directory** to the corresponding game directory.
5. Under **Before launch**, remove the **Build** step and add the top-level `install` target instead.
6. Enable **Run as administrator** if the install target is in a protected directory such as `Program Files`.

## Build and run

Select a CMake profile and the `g_generals` or `z_generals` configuration, then click **Run**. The `install` step copies
the built executable into the game directory before CLion launches it.

See [Install](cmake_guide#install) to set the game directories manually.

## Troubleshooting

### A preset is missing

Confirm that CLion opened the repository root containing `CMakePresets.json`. Use **Help > Find Action > Load CMake
Presets**, or reset the CMake cache and reload the project.

### A toolchain is not selected

Confirm that the toolchains are named exactly `Visual Studio 6` and `Visual Studio`, then reload the CMake project.

### The VC6 compiler is not found

Confirm that the VC6 toolchain uses `VCVARS32.bat` as its environment file. If necessary, select `VC98\Bin\cl.exe` as
both compilers and reset the affected CMake profile.
