# Building and Compiling C&C Generals on Visual Studio 2022

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
  Don't forget to add into the build projects
  ( so far `\toolchain\max2w3d`  and `\toolchain\pluglib`)
  the paths to include and lib folders.

> [!NOTE]
> To add a include or lib folder source, right click on project entry,
> select `Properties` and go to the VC++ Directories Tab.
> There, add the path for the include folder in the sdk in the Includes Folder
> (ie `<base_git_folder>\Code\Libraries\max4sdk\Include`) and the same for the
> Libraries entry (`<base_git_folder>\Code\Libraries\max4sdk\Lib`)

## Build Steps

### 1. Open the Project in Visual Studio 2022

- Launch Visual Studio 2022 and open the solution file `Code/RTS.sln`.

### 2. Select and Compile the Required Projects

- In the **Solution Explorer**, locate the following projects:
  - `RTS`
  - `WorldBuilder`
- Right-click each project and select **Build**.
- Ensure the build process completes without errors.

### 3. Copy Required Game Assets

- Navigate to your C&C Generals installation directory, for example if using Steam:

  ``` text
  C:\Program Files (x86)\Steam\steamapps\common\Command and Conquer Generals Zero Hour\
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

### 4. Configure Paths Correctly

- Ensure that the `Run` folder within your build directory contains all required
  game assets.
- If necessary, configure the **working directory** in Visual Studio:
  1. Right-click on the `RTS` project.
  2. Navigate to **Properties** → **Debugging**.
  3. Set `Working Directory` to your `Run` folder.

### 5. Run the Game or World Builder

- After compiling, navigate to the `Run` folder.
- Launch `RTSD.exe` or `worldbuilder.exe`.


## Troubleshooting

- **Missing DLLs?** Ensure that all required dependencies are installed.
- **Game not launching?** Verify that all necessary `.BIG` files are correctly
  placed.
- **Build errors?** Check Visual Studio settings and dependencies for any issues.

### Enjoy Modding and Playing C&C Generals! 🎮
