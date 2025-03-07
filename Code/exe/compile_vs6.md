# Compile Command & Conquer Zero Hour 
**with VS6 and VC98

To compile the source code for C&C Generals and Zero Hour, follow the steps outlined below. This process is still in the early stages of development, and ongoing efforts may lead to additional tools being compiled from the source code. The focus here is solely on compiling the main executable, which can then be placed into the game directory and used to start the game with the newly compiled binary.

This process utilizes the original compiler from the game's development era to ensure compatibility. The available source code specifically compiles **zerohour.exe**.

## Intended Audience

This guide is intended for software developers, starting from a beginner level. You should be able to write programs and execute them. Familiarity with command-line interfaces and configuring environment variables when necessary is required.

Even if you do not know C++, you should still be able to compile the source code. However, a basic understanding of how C++ is compiled is necessary. This includes knowing what the compiler and linker do, as well as being able to interpret error messages and troubleshoot them effectively.

## Prerequisites

Download the following binary and software and have them ready in a project folder.

- Visual Studio v6.0 Enterprise Edition (Disc 1) [Link](https://archive.org/download/visualstudiov60enterpriseedition_199807/Visual%20Studio%20v6.0%20Enterprise%20Edition%20%28Disc%201%29%28X03-78941%29%28Microsoft%20Corporation%29%28August%201998%29.iso)
- Visual Studio v6.0 Service Pack 6 [Link](https://winworldpc.com/download/a4208baa-aaee-11eb-bc5b-0200008a0da4)
- Source code Zero Hour from richardboegli [Link](https://github.com/richardboegli/CnC_Generals_Zero_Hour)
- CMake 3.31.6 [Link](https://github.com/Kitware/CMake/releases/download/v3.31.6/cmake-3.31.6-windows-x86_64.msi)
- Git [Link](https://git-scm.com/downloads)
- Windows SDK [Link](https://developer.microsoft.com/de-ch/windows/downloads/windows-sdk/)
- DX8SDK [Link](https://archive.org/download/dx8sdk/dx8sdk.exe)

## Installing your build environment

Installation of tools and software that are needed for compilation.

**Install Visual Studio 6**

- Install Visual Studio 6.0 by extracting the content of the disk and copy the installation files to your project folder.
- Follow the installation instructions from this website [Link](https://www.codeproject.com/Articles/1191047/Install-Visual-Studio-6-0-on-Windows-10)
- **Disable ADO, RDS, and OLE DB Providers**
- **Disable Visual Studio Analyzer**
- **Dont check "Setup Environment Variables" checkbox
- Restart your computer
- Install MSDN a window will pop up. If it fails ignore it.
- Add `C:\Programm Files (x86)\Microsoft Visual Studio\VC98\Bin\` to your windows PATH environment

**Install Service Pack 6**

- Extract the contents of the service pack.
- Run the installer `Vs6sp6.exe`

**Install CMake**

- Run the installer for CMake
- Keep the defaults during setup wizard

**Install Git**

- Run the git installer
- Keep the defaults during setup wizard

**Install Windows SDK**

- Run the installer
- When promted to install packets just select `Debugtools für Windows`
- You dont need the other packets
- Follow installer
- In your C drive search for the file `DbgHelp.lib`
- There exists 2 files one 64 bit and 32 bit (x86). Select the 32 Bit and copy it to your project folder.

**Install DirectX 8 SDK**

- Run the unzipper this unzips the installer
- Run the installer and select a folder to install directx8 sdk.
- Copy the directx8 content to your project folder. 
- It should contain folder named `Lib` and `Include` these two are important.

## Clone

Clone the code from richard

`git clone https://github.com/richardboegli/CnC_Generals_Zero_Hour.git`

Open `cmd.exe` and navigate to the cloned source code.

`cd CnC_Generals_Zero_Hour`

Copy the files from Directx 8 contained in the folder `Lib` and `Include` to the `Dependencies\DX8SDK`. Just the file contents of `Lib` and `Include` into the `DX8SDK` folder. 

It should look like this

```shell
`Dependencies/DX8SDK$ ls
activecf.h    d3dx8core.h    dls1.h        dshowasf.h    ksuuids.h
amaudio.h     d3dx8d.lib     dls2.h        DShow.h       mediaerr.h
amparse.h     d3dx8dt.lib    dmdls.h       dsound.h      mediaobj.h
amstream.h    d3dx8effect.h  dmerror.h     dsound.lib    medparam.h
amstrmid.lib  d3dx8.h        dmksctrl.h    dvdevcod.h    mmstream.h
```

Copy the file `DbgHelp.lib` to `Dependencies\DX8SDK`

## Compilation

This steps you need to repeat every time after a reboot of your computer.

**Activate your VS6 Compiler Environment**

Execute the setup build environment script. In your cmd type this.

`"C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.bat"`

**Compilation**

`cmake --preset vc6`

`cd build\vc6`

`nmake`

You will find a bunch of files in `build\vc6` and a file called `zerohour.exe`

Copy all of the contents of the build folder to your game path.

## Start the game

Double click `zerohour.exe` inside the Zero Hour path.
