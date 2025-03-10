# Compile Command & Conquer Zero Hour 

To compile the source code for **C&C Generals** and **Zero Hour**, follow the steps outlined below. This process is still in the early stages of development, and ongoing efforts may lead to additional tools being compiled from the source code. The focus here is solely on compiling the main executable, which can then be placed into the game directory and used to start the game with the newly compiled binary.

This process utilizes the original compiler from the game's development era to ensure compatibility. The available source code specifically compiles **zerohour.exe**.

## Intended Audience

This guide is intended for software developers, starting from a beginner level. You should be able to write programs and execute them. Familiarity with command-line interfaces and configuring environment variables when necessary is required.

Even if you do not know C++, you should still be able to compile the source code. However, a basic understanding of how C++ is compiled is necessary. This includes knowing what the **compiler** and **linker** do, as well as being able to interpret error messages and troubleshoot them effectively.

## Prerequisites

Download the following binary and software and have them ready in a project folder.

- Visual Studio 6.0 Portable [Link](https://github.com/itsmattkc/MSVC600)
- Source code [Link](https://github.com/TheSuperHackers/GeneralsGameCode)
- CMake 3.31.6 [Link](https://github.com/Kitware/CMake/releases/download/v3.31.6/cmake-3.31.6-windows-x86_64.msi)
- Git [Link](https://git-scm.com/downloads)

## Installing your build environment

Installation of tools and software that are needed for compilation.

**Install Visual Studio 6**

- Download the portable Visual Studio 6 as ZIP file from GitHub.
- Extract the contents and put them in the default install folder.
- Installation folder: `C:\Program Files (x86)\Microsoft Visual Studio\`

**Install CMake**

- Run the installer for CMake
- Keep the defaults during setup wizard

**Install Git**

- Run the git installer
- Keep the defaults during setup wizard

## Clone

Clone the code from TheSuperHackers

`git clone https://github.com/TheSuperHackers/GeneralsGameCode.git`

Open `cmd.exe` and navigate to the cloned source code.

`cd GeneralsGameCode`

## Compilation

This steps you need to repeat every time after a reboot of your computer.

**Option 1: Activate your VS6 Compiler Environment**

Execute the setup build environment script. In your cmd type this.

`"C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat"`

**Option 2: Manually set your VS6 Compiler Environment**

`<VS6_INSTALL_PATH>`: Where you have put your vs6 installation path.
`<PROJECT_FOLDER>`: Where you have the source code project.

PATH

```shell
C:\<VS6_INSTALL_PATH>\vb98;
C:\<VS6_INSTALL_PATH>\vc98\bin;
C:\<VS6_INSTALL_PATH>\vc98\lib;
C:\<VS6_INSTALL_PATH>\vc98\include;
C:\<VS6_INSTALL_PATH>\common\tools;
C:\<VS6_INSTALL_PATH>\common\msdev98\bin
```

Environment Variables

```shell
set LIB=C:\<VS6_INSTALL_PATH>\vc98\lib;^
C:\<VS6_INSTALL_PATH>\vc98\mfc\lib;^
C:\<PPROJECT_FOLDER>\build\vc6

set INCLUDE=C:\<VS6_INSTALL_PATH>\vc98\alt\include;^
C:\<VS6_INSTALL_PATH>\vc98\include;^
C:\<VS6_INSTALL_PATH>\vc98\MFC\include;^
C:\<VS6_INSTALL_PATH>\vc98\include

set CC=C:\<VS6_INSTALL_PATH>\vc98\bin\cl.exe
set CXX=C:\<VS6_INSTALL_PATH>\vc98\bin\cl.exe

set MSVCDir=C:\<VS6_INSTALL_PATH>\vc98
```

**Compilation**

`cmake --preset vc6`

`cd build\vc6`

`nmake`

You will find a bunch of files in `build\vc6` and a file called `zerohour.exe`

Copy `zerohour.exe` of the build folder to your game path.

## Start the game

Double click `zerohour.exe` inside the Zero Hour path.

## Troubleshooting

**Error: "too long"**

- The compiler failed because the total path length for **lib** and **include** exceeded the limit for **VS6**.
- Your only option is to move your project and dependencies **closer to the root of your drive** or rename folders in your project to shorter names.

**Error: "could not find X.h file"**

- Ensure that you have correctly set up your `LIB` and `INCLUDE` environment variables.
- These variables are **essential** for linking and compiling header (`.h`) and library (`.lib`) files.

**Error: "cmake --preset fails"**

- Delete the `build` folder and try again.
- Sometimes, CMake's **cache** gets corrupted, and you need to **start fresh**.
