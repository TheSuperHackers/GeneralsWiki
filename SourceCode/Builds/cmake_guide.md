# **CMake Command Line Usage Guide**

This guide provides an overview of how to configure and build **Generals** and its expansion **Zero Hour** using **CMake**
via the command line. It covers the various options and flags defined in the CMake files that control the build process,
allowing you to choose different components of the game and tools to build.

For more details on using **Visual Studio 2022**, **Visual Studio 6**, or **CLion**, please refer to the respective
guides.

> [!NOTE]
> CMake retains previous configurations. If you encounter any issues or strange behavior, it is recommended to delete
> the `build` directory and start fresh to ensure the build process uses the latest settings.

- [Build Configuration (Preset)](#1-build-configuration-preset)
- [Selecting Game and Tools](#2-selecting-game-and-tools)
- [Building the Project](#3-building-the-project)
- [Install the Project](#4-install-the-project)
- [Define a Custom Installation Path](#5-define-a-custom-installation-path)
- [Building Specific Targets](#6-building-specific-targets)
- [Examples](#7-examples)

---

## 1. **Build Configuration (Preset)**

The **preset** defines the predefined build configuration. The available presets for this project are:

### For Visual Studio 2022 or Ninja

- `win32`: Release build.
- `win32dgb`: Debug build.
- `win32int`: Internal build.
- `win32prof`: Profile build.

### For Visual Studio 6

- `vc6`: Release build.
- `vc6dgb`: Debug build.
- `vc6int`: Internal build.
- `vc6prof`: Profile build.

### Usage

```bash
cmake --preset <preset>
```

### Using the Default Workflow

You can simplify the build process by using the **workflow** option, which automatically selects the appropriate
configurations based on the preset and the project’s default settings. This eliminates the need to manually specify
build options. For example, to perform a release build with the default configuration, you can run:

```bash
cmake --workflow --preset win32
```

After the build process is complete, you can proceed with the installation using the default settings, as outlined in
the installation section (not the custom path). To install the project, simply use:

```bash
cmake --install build/win32 --config Release
```

This will install the project to the default installation location based on the preset configuration.

---

## 2. **Selecting Game and Tools**

You can specify various options to select which parts of the project to build.

### The available options are

- `DGENZH_BUILD_GENERALS`: Build the base Generals code, default is `ON`.
- `DGENZH_BUILD_GENERALS_TOOLS`: Build tools for Generals, default is `ON`.
- `DGENZH_BUILD_GENERALS_EXTRAS`: Build additional tools/tests for Generals, default is `OFF`.
- `DGENZH_BUILD_ZEROHOUR`: Build the Zero Hour code, default is `ON`.
- `DGENZH_BUILD_ZEROHOUR_TOOLS`: Build tools for Zero Hour, default is `ON`.
- `DGENZH_BUILD_ZEROHOUR_EXTRAS`: Build additional tools/tests for Zero Hour, default is `OFF`.

You can find the list of tools included in the targets list below.

### Example Usage

To build Zero Hour and its tools while excluding Generals:

```bash
cmake -DGENZH_BUILD_ZEROHOUR=ON -DGENZH_BUILD_GENERALS=OFF -DGENZH_BUILD_ZEROHOUR_TOOLS=ON
```

---

## 3. **Building the Project**

After configuring the project with CMake, you can proceed with the build step. To build the project in the appropriate
mode, use:

```bash
cmake --build build/win32
```

> [!NOTE]
> Replace the folder preset name as needed.

The build process will place the compiled executable files in the appropriate directories based on the configuration,
for example, `build/win32/GeneralsMD/Release` for the release build of Zero Hour.

---

## 4. **Install the Project**

To install the built project, use:

```bash
cmake --install build/win32
```

> [!NOTE]
> Replace the folder preset name as needed. This installs the executable project in the specified paths (see next
> section).
<!-- markdownlint-disable-line -->
> [!IMPORTANT]
> In the `win32` preset, use also `--config Release` to install the release executable, because the default installation
> path looks in the debug folder.

---

## 5. **Define a Custom Installation Path**

> [!NOTE]
> To define a custom installation path, it must be set during the preset configuration. The installation path cannot be
> changed after the build is complete.

By default, CMake installs the build executable in the retail game directory. If you want to specify a custom
installation path, use the following option:

For Generals:

```bash
cmake -DGENZH_GENERALS_INSTALL_PREFIX="/path/to/install" .
```

For the Zero Hour expansion:

```bash
cmake -DGENZH_ZEROHOUR_INSTALL_PREFIX="/path/to/install" .
```

---

## 6. **Building Specific Targets**

> [!IMPORTANT]
> Please note that specific **targets** (such as `z_generals` or `z_worldbuilder`) will only work if the corresponding
> game source tree is enabled through the appropriate **preset** (e.g., `DGENZH_BUILD_ZEROHOUR` or
> `DGENZH_BUILD_ZEROHOUR_TOOLS`). Make sure the relevant game sources are included in the configuration before
> attempting to build the **targets**.

You can build specific targets by specifying them in the build command. The common targets are:

> [!TIP]
> The list below are suitable zero hour targets, to build base Generals targets, replace `z` with `g`.

- `z_generals`: Build the Zero Hour code.

### Tools

- `z_debugwindow`: Build the Debug Window tool.
- `z_guiedit`: Build the GUI Editor tool.
- `z_imagepacker`: Build the Image Packer tool.
- `z_mapcachebuilder`: Build the Map Cache Builder tool.
- `z_particleeditor`: Build the Particle Editor tool.
- `z_worldbuilder`: Build the World Builder tool.
<!-- markdownlint-disable-next-line -->
### Usage

```bash
cmake --build build/win32 --target z_generals
```

Replace the folder preset name as needed.

> [!NOTE]
> If from the beginning you build only with specific targets, the installation step will fail because the other targets
> are not built yet. To fix this, you need to build all targets or build the missing targets before installing. Or you
> can install the targets manually by copying the files to the correct directories from the build folder.

---

## 7. **Examples**

### **Build Zero Hour with Debug Configuration and Tools:**

To build the Zero Hour code along with its tools in debug mode, use the following command:

```bash
# Step 1: Configure the build with a preset and additional options
cmake --preset win32dgb -DGENZH_BUILD_ZEROHOUR=ON -DGENZH_BUILD_ZEROHOUR_TOOLS=ON

# Step 2: Build the project
cmake --build build/win32dbg

# Step 3: Install the project to the default installation path
cmake --install build/win32dbg
```
<!-- markdownlint-disable-next-line -->
### **Build Only World Builder Tool:**

To build only the World Builder tool for Zero Hour, use the following command:

```bash
# Step 1: Configure the build with specific target
cmake --preset win32 --target z_worldbuilder

# Step 2: Build the project
cmake --build build/win32

# Step 3: Install the project to the default installation path
cmake --install build/win32 --config Release
```
<!-- markdownlint-disable-next-line -->
### **Build Generals with Extras and Custom Installation Path:**

To build the Generals code with additional extras, configure the build for release, and then install the executable to a
custom directory, you can run the following commands in sequence:

```bash
# Step 1: Configure the build with a preset and additional options
cmake --preset win32 -DGENZH_BUILD_GENERALS=ON -DGENZH_BUILD_GENERALS_EXTRAS=ON -DGENZH_GENERALS_INSTALL_PREFIX="/custom/install/path"

# Step 2: Build the project
cmake --build build/win32

# Step 3: Install the project to the specified custom directory with release configuration
cmake --install build/win32 --config Release
```

---

**Reminder:**  
If you encounter issues from previous configurations, make sure to clear the `build` directory and restart the
configuration process.
