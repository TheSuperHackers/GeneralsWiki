# Building and Compiling C&C Generals on Visual Studio 2022

> [!WARNING]  
> This build guide refers to a fork that is not from TheSuperHackers.  It may include additional modifications, software,
 and changes compared to the official TheSuperHackers version, and is included here for documentation purposes only.

## Prerequisites

- **Install Visual Studio 2022**  
  Ensure that the necessary C++ development components, including MFC, are
  installed.

- **Obtain the C&C Generals Source Code**  
  Clone or download the source code repository:  
  [jmarshall2323 VS2022 Fork](https://github.com/jmarshall2323/CnC_Generals_Zero_Hour.git).

- **Install C&C Generals**  
  The game installation is required to access the necessary asset files.

- **Download the necessary SDKs as needed**  
  3ds max sdk: [3ds-max sdk](https://archive.org/details/maxsdk-4.2.0.85).  
  Download and extract the contents of the zip file to the folder  
  `/Code/Libraries/max4sdk`
  
## Build Steps

### 1. Copy Required Game Assets

- Navigate to your C&C Generals installation directory, for example if using Steam:

  ``` text
  C:\Program Files (x86)\Steam\steamapps\common\Command and Conquer Generals
  ```

- Copy all necessary `.BIG` files into the `Run` folder of your compiled project:

  ``` text
  EnglishZH.big
  Generals.big
  INIZH.big
  SpeechZH.big
  W3DZH.big
  (Other required files)
  ```

- Copy the entire `Data` folder to the `Run` folder as well.

### 2. Open the Project in Visual Studio 2022

- Launch Visual Studio 2022 and open the solution file `Code/RTS.sln`.

### 3. Set up Paths correctly

- Add to your PATH environment variable the following folder: `<base_git_folder>\Code\Tools\NVASM`
- Load the RTS.sln Solution file in Visual Studio.
- Navigate to the max2w3d project folder in \toolchain\max2w3d
- Right-click on the project and select Properties.
- In the VC++ Directories tab, update the Additional Include Directories to the SDK Includes
  Folder (ie <base_git_folder>\Code\Libraries\max4sdk\Include)
- And the same tab, update the Additional Library Directories to the
  SDK Libraries Folder (ie <base_git_folder>\Code\Libraries\max4sdk\Lib)
- Navigate to **Properties** → **Debugging**.
- Set `Working Directory` to your `Run` folder.

>[!NOTE]
>Ensure that the `Run` folder within your build directory contains all required game assets.

### 4. Select and Compile the Required Projects

- In the **Solution Explorer**, locate the following projects:
  - `RTS`
  - `WorldBuilder`
- Right-click each project and select **Build**.
- Ensure the build process completes without errors.

### 5. Run the Game or World Builder

- After compiling, navigate to the `Run` folder.
- Launch `RTSD.exe` or `worldbuilder.exe`.

## Troubleshooting

- **Missing DLLs?** Ensure that all required dependencies are installed.
- **Game not launching?** Verify that all necessary `.BIG` files are correctly
  placed.
- **Build errors?** Check Visual Studio settings and dependencies for any issues.

### Enjoy Modding and Playing C&C Generals! 🎮
