# Building and Compiling C&C Generals on Visual Studio 2022

## Prerequisites

- **Install Visual Studio 2022**
   - Ensure that the necessary C++ development components, including MFC, are installed.

- **Obtain the C&C Generals Source Code**
   - Clone or download the source code repository: [Super Hackers Generals Game Code](https://github.com/TheSuperHackers/GeneralsGameCode.git).

- **Install C&C Generals (Steam Version)**
   - The game installation is required to access the necessary asset files.

- **Download the necessary SDKs as needed**
  - 3ds max sdk: [3ds-max sdk](https://aps.autodesk.com/developer/overview/3ds-max#3dsmax-sdk) and install it.
    - Copy the contents of the installed sdk ( normally in `C:\Program Files\Autodesk\3ds Max 2025 SDK\maxsdk` ) under the folder `/Code/Libraries/max4sdk`

## Build Steps

### 1. Open the Project in Visual Studio 2022

- Launch Visual Studio 2022 and open the solution file `Code/RTS.sln`.

### 2. Select and Compile the Required Projects

- In the **Solution Explorer**, locate the following projects:
  - `RTS`
  - `WorldBuilder`
- Right-click each project and select **Build**.
- Ensure the build process completes without errors.

### 3. Copy Required Game Files from Steam

- Navigate to your C&C Generals Steam installation directory, typically:

  ``` bash
  C:\Program Files (x86)\Steam\steamapps\common\Command and Conquer Generals Zero Hour\
  ```

- Copy all necessary `.BIG` files into the `Run` folder of your compiled project:

  ``` bash
  EnglishZH.big
  Generals.big
  INIZH.big
  SpeechZH.big
  W3DZH.big
  (Other required files)
  ```

- Copy the entire `Data` folder to the `Run` folder as well.

### 4. Configure Paths Correctly

- Ensure that the `Run` folder within your build directory contains all required game assets.
- If necessary, configure the **working directory** in Visual Studio:
  1. Right-click on the `RTS` project.
  2. Navigate to **Properties** → **Debugging**.
  3. Set `Working Directory` to your `Run` folder.

### 5. Run the Game or World Builder

- After compiling, navigate to the `Run` folder.
- Launch `RTSD.exe` or `worldbuilder.exe`.

## Troubleshooting

- **Missing DLLs?** Ensure that all required dependencies are installed.
- **Game not launching?** Verify that all necessary `.BIG` files are correctly placed.
- **Build errors?** Check Visual Studio settings and dependencies for any issues.

### Enjoy Modding and Playing C&C Generals! 🎮
