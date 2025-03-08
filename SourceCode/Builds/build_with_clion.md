# Building in CLion with a VC6 \(x86\) Toolchain

## Prerequisites

1. **CLion** installed and configured.
2. **Microsoft Visual C++ 6.0 (VC6)** installed (assuming it’s installed in the
   default directory).
3. **CMake** installed and configured.
4. **Source code** of the project from TheSuperHackers repository.

## Step 1: Setting Up the Toolchain in CLion

1. Open **CLion** and go to **File** -> **Settings** -> **Build, Execution,
   Deployment** -> **Toolchains**.
2. Add a new **Toolchain** by clicking the **+** button.
3. Select **System** as the Type (not Visual Studio).
4. Next to the toolchain name, add the **environment** file by clicking the
   **+** button and pointing to the following file:

   ```text
   C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.BAT
   ```

5. Set the paths for the tools:
    - **Build Tool**: Choose the `NMAKE.EXE` file from VC6. For example:

      ```text
      C:/Program Files (x86)/Microsoft Visual Studio/VC98/Bin/NMAKE.EXE
      ```

    - **C Compiler**: The `cl.exe` should be detected automatically. If not, set
      it manually to:

      ```text
      C:/Program Files (x86)/Microsoft Visual Studio/VC98/Bin/cl.exe
      ```

    - **C++ Compiler**: The `cl.exe` will also be detected automatically.

## Step 2: Configuring the CMake Profile

1. Go to **File** -> **Settings** -> **Build, Execution, Deployment** -> **CMake**.
2. In this window, select the CMake profile you want to configure (if there
   isn’t one, create a new one).
3. Choose the **Toolchain** you created in the previous step (VC6 Toolchain).
4. Choose the **Generator** as `NMake Makefiles`.
5. Under **CMake options**, add the following generate settings:

   ```text
   -G "NMake Makefiles"
   ```

6. Add the build directory path under **CMake Build Directory**:

   ```text
   C:\Users\User\Documents\CLion\CnC_Generals_Zero_Hour\build\vc6
   ```

## Step 3: Compiling and Running the Project

1. Now, click the **Build** button in CLion.
2. CLion will begin the build process using the VC6 (x86) toolchain.
3. After the build is completed successfully, you can run the game from within
   CLion or execute the generated EXE file.

---

## Notes

- **Visual C++ 6.0 (VC6)** only supports C++98, so avoid using modern C++ features.
- Working with VC6 requires some adjustments, so it’s always a good idea to check
  that the toolchain is working
  properly.
- You can add Release and Debug profiles in CLion to build the project in
  different configurations.
