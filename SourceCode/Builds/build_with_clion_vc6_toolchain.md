# Building in CLion with a VC6 \(x86\) Toolchain

## Prerequisites

1. **CLion** installed and configured.
2. **Microsoft Visual C++ 6.0 (VC6)** installed (assuming it’s installed in the
   default directory).
3. **Source code** of the project cloned from the TheSuperHackers repository.

## Step 1: Setting Up the Toolchain in CLion

1. Open the cloned folder in **CLion** and go to **File** -> **Settings** -> **Build, Execution,
   Deployment** -> **Toolchains**.
2. Add a new **Toolchain** by clicking the **+** button.
3. Select **System** as the Type (not Visual Studio).
4. Rename the toolchain to **Visual Studio 6**
5. Next to the toolchain name, add the **environment** file by clicking the
   **+** button and pointing to the following file:

   ```text
   C:\Program Files (x86)\Microsoft Visual Studio\VC98\Bin\VCVARS32.BAT
   ```

6. Set the paths for the tools:
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

1. In Cmake profiles, enable the profiles you want to use, like vc6, vc6dgb, vc6int, vc6prof.

## step 3: Configuring the installation path

1. In the target application options, do the following:

- Set Program arguments with your favorite arguments,like `-win, -quickstart, -nologo`.
- Set Working directory to the game directory.
- Check the run as administrator option.
- In 'Before launch' section, add a new 'install' step.
- To avoid duplication build, remove the 'Build' step.
- Save the configuration, and you are ready to build and run the project.

## Step 4: Compiling and Running the Project

1. Now, click the **Build** button in CLion, or click **Install** in build menu.
2. CLion will start the build/install process using the VC6 (x86) toolchain.
3. Once the build is successfully completed, a executable file will be generated (and installed in the game directory).

---

## Notes

- Working with VC6 requires some adjustments, so it’s always a good idea to check
  that the toolchain is working properly.
- You can add Release and Debug profiles in CLion to build the project in
  different configurations.
- Admin rights might be required to run VC6 tools, so make sure to run CLion as an administrator if needed.
