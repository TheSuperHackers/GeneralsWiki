# Building and Compiling C&C Generals on VS2022

## Prerequisites

1. **Install Visual Studio 2022**
   - Ensure you have the necessary C++ development components installed like MFC

2. **Obtain the C&C Generals Source Code**
   - Clone or download the source code repository. [Super Hackers Generals Game Code](https://github.com/TheSuperHackers/GeneralsGameCode.git)

3. **Install C&C Generals (Steam Version)**
   - This is required to obtain necessary asset files.

## Steps to Build

### 1. Open the Project in Visual Studio 2022

- Open `Code/RTS.sln` in VS2022.

### 2. Select and Compile the Required Projects

- In the **Solution Explorer**, locate the following projects:
  - `RTS`
  - `WorldBuilder`
- Right-click each project and select **Build**.
- Ensure the build completes without errors.

### 3. Copy Required Files from Steam Folder

- Navigate to your Steam installation directory for C&C Generals, typically:
  ```
  C:\Program Files (x86)\Steam\steamapps\common\Command and Conquer Generals Zero Hour\
  ```
- Copy all  `.BIG` files to the `Run` folder of your compiled project:
  ```
  EnglishZH.big
  Generals.big
  INIZH.big
  SpeechZH.big
  W3DZH.big

  others
  ````

  Copy the `Data` folder to the `Rub` folder also
 

### 4. Set Up Paths Correctly

- Ensure that the `Run` folder within your build directory contains the necessary game assets.
- If required, configure the **working directory** in Visual Studio:
  1. Right-click on the `RTS` project.
  2. Go to **Properties** → **Debugging**.
  3. Set `Working Directory` to your `Run` folder.

### 5. Run the Game or World Builder

- After compiling, navigate to the `Run` folder.
- Launch `RTSD.exe` or `worldbuilder.exe`.

## Troubleshooting

- **Missing DLLs?** Ensure you have the required dependencies.
- **Game not launching?** Check that all required `.BIG` files are present.
- **Build errors?** Verify Visual Studio settings and dependencies.

### Enjoy Modding and Playing C&C Generals! 🎮
