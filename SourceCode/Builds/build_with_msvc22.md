# Building and Compiling C&C Generals on Visual Studio 2022

## Prerequisites

1. **Install Visual Studio 2022**
    - Ensure that the necessary C++ development components, including MFC, are installed.

2. **Obtain the C&C Generals Source Code**
    - Clone or download the source code repository: [TheSuperHackers - GeneralsGameCode](https://github.com/TheSuperHackers/GeneralsGameCode.git).

3. **Install C&C Generals (Steam Version)**
    - The game installation is required to access the necessary asset files.

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

  ``` text
  C:\Program Files (x86)\Steam\steamapps\common\Command and Conquer Generals Zero Hour\
  ```

- Copy all necessary `.BIG` files into the `Run` folder of your compiled project:

  ``` text
  EnglishZH.big
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
