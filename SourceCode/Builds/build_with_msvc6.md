# Compile Command & Conquer Zero Hour with VC6

To compile the source code for **C&C Generals** and **Zero Hour**, follow the steps
outlined below. This process is still in the early stages of development, and ongoing
efforts may lead to additional tools being compiled from the source code. The focus
here is solely on compiling the main executable, which can then be placed into the
game directory and used to start the game with the newly compiled binary.

This process utilizes the original compiler from the game's development era to ensure
compatibility. The available source code specifically compiles **zerohour.exe**.

## Intended Audience

This guide is intended for software developers, starting from a beginner level. You
should be able to write programs and execute them. Familiarity with command-line
interfaces and configuring environment variables when necessary is required.

Even if you do not know C++, you should still be able to compile the source code.
However, a basic understanding of how C++ is compiled is necessary. This includes
knowing what the **compiler** and **linker** do, as well as being able to
interpret error messages and troubleshoot them effectively.

## Prerequisites

Download the following binary and software and have them ready in a project folder.

- Visual Studio 6.0 Portable [Link](https://github.com/itsmattkc/MSVC600)
- CMake 3.31.6 [Link](https://github.com/Kitware/CMake/releases/download/v3.31.6/cmake-3.31.6-windows-x86_64.msi)
- Git [Link](https://git-scm.com/downloads)

## Installing your build environment

Installation of tools and software that are needed for compilation.

### Install Visual Studio 6

- Download the portable Visual Studio 6 as ZIP file from GitHub.
- Extract the contents and put them in the default install folder.
- Installation folder: `C:\Program Files (x86)\Microsoft Visual Studio\`

> Alternatively you can use the VC6 setup from Archive.org

### Install CMake

- Run the installer for CMake
- Keep the defaults during setup wizard

### Install Git

- Run the git installer
- Keep the defaults during setup wizard

## Clone

Clone the code from TheSuperHackers

`git clone https://github.com/TheSuperHackers/GeneralsGameCode.git`

`cd GeneralsGameCode`

## Compilation

This steps you need to repeat every time after a reboot of your computer.

### Option 1: Activate your VS6 Compiler Environment

Execute the setup build environment script. In your cmd type this. (assuming default installation path)

`"C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat"`

### Option 2: Manually set your VS6 Compiler Environment

`<VS6_INSTALL_PATH>`: Where you have put your vs6 installation path.
`<PROJECT_FOLDER>`: Where you have the source code project.

PATH

```shell
C:\<VS6_INSTALL_PATH>\VB98;
C:\<VS6_INSTALL_PATH>\VC98\Bin;
C:\<VS6_INSTALL_PATH>\VC98\Lib;
C:\<VS6_INSTALL_PATH>\VC98\Include;
C:\<VS6_INSTALL_PATH>\Common\tools;
C:\<VS6_INSTALL_PATH>\Common\MSDev98\Bin
```

Environment Variables

```shell
set LIB=C:\<VS6_INSTALL_PATH>\VC98\Lib;^
C:\<VS6_INSTALL_PATH>\VC98\MFC\Lib;^
C:\<PPROJECT_FOLDER>\build\vc6

set INCLUDE=C:\<VS6_INSTALL_PATH>\VC98\ATL\Include;^
C:\<VS6_INSTALL_PATH>\VC98\Include;^
C:\<VS6_INSTALL_PATH>\VC98\MFC\Include;^
C:\<VS6_INSTALL_PATH>\VC98\Include

set CC=C:\<VS6_INSTALL_PATH>\VC98\Bin\CL.exe
set CXX=C:\<VS6_INSTALL_PATH>\VC98\Bin\CL.exe

set MSVCDir=C:\<VS6_INSTALL_PATH>\VC98
```

### Build the project

Run the following command by the type of build you want to create.

- `cmake --workflow --preset vc6` for a release build.
- `cmake --workflow --preset vc6dgb` for a debug build.
- `cmake --workflow --preset vc6int` for an internal build.
- `cmake --workflow --preset vc6prof` for a profile build.

You will find a bunch of files in `build\vc6\<game name>` and a file called `generalszh.exe` or `generalsv.exe`.

### Install the game executable

Run `cmake --install build\<vc6 build type>`, this will copy the executable to the retail game directory, or you can
copy it manually.

## Troubleshooting

### Error: "too long"

- The compiler failed because the total path length for **lib** and **include** exceeded the limit for **VS6**.
- Your only option is to move your project and dependencies **closer to the root of your drive** or rename
  folders in your project to shorter names.

### Error: "could not find X.h file"

- Ensure that you have correctly set up your `LIB` and `INCLUDE` environment variables.
- These variables are **essential** for linking and compiling header (`.h`) and library (`.lib`) files.

### Error: "cmake --preset fails"

- Delete the `build` folder and try again.
- Sometimes, CMake's **cache** gets corrupted, and you need to **start fresh**.
