# Build Configurations Overview

This page describes the various build configurations used in the project, detailing the different types of builds, their
purpose, and the associated compiler flags for each configuration. These configurations control how the code is compiled
and optimized for different development and release scenarios.

## Build Configurations

There are four main build configurations in the project, each designed for different purposes:

### 1. **Release (O2, _RELEASE)**

- **Purpose:** The release configuration is used for building the final version of the game that will be distributed to
  end users.
- **Features:**
  - Maximum optimization (`/O2`) for better performance.
  - No debugging information is included to ensure smaller binary size and improved performance.
  - Suitable for production builds.

- **Compiler Flags:**
  - `/O2`: Optimization for speed.
  - `/D "_RELEASE"`: Defines the release configuration.
  - `/D "NDEBUG"`: Disables debugging code.

- **Use Case:** This configuration is used when preparing the game for release to the end user.

### 2. **Debug (Od, _DEBUG)**

- **Purpose:** The debug configuration is used for development and debugging. It includes debugging symbols and disables
  optimizations to make it easier to step through code.
- **Features:**
  - No optimization (`/Od`), making debugging easier but with slower execution.
  - Debugging symbols and additional information are included to help track issues.
  - The build is less efficient but provides full access to debugging features.

- **Compiler Flags:**
  - `/Od`: Disables optimizations to facilitate debugging.
  - `/D "_DEBUG"`: Defines the debug configuration.
  - `/ZI`: Generates debugging information.
  - `/Gm`: Enables minimal rebuilds.

- **Use Case:** Used during development for debugging and resolving issues in the code.

> **⚠️ Debug Build Requirements:** To run a debug build of the game, you need to have  
> the following two files in the game directory alongside the built executable:
>
> - [`MSVCRTD.DLL`](https://discord.com/channels/951133504605917224/1344671543170564176/1357087699982352426)  
>   Microsoft Visual C++ Runtime Library (Debug)
> - [`MSVCIRTD.DLL`](https://discord.com/channels/951133504605917224/1344671543170564176/1357087699982352426)  
>   Microsoft Visual C++ Internationalization Runtime Library (Debug)
>
> These files are available from the [Community Outpost Discord server](https://discord.gg/WzxQDZersE) (links above  
> are from the server) and may require a Discord account to download.

### 3. **Profile (O2, IG_DEBUG_STACKTRACE, _RELEASE, _PROFILE)**

- **Purpose:** The profile configuration is used for performance profiling and optimization. It is designed to help
  developers analyze performance bottlenecks and gather performance data.
- **Features:**
  - Includes optimization (`/O2`) and performance profiling flags.
  - Supports detailed stack tracing (`IG_DEBUG_STACKTRACE`) to gather performance metrics.
  - Designed for analyzing how the game performs under various conditions and measuring optimization effectiveness.

- **Compiler Flags:**
  - `/O2`: Optimization for performance.
  - `/D "_PROFILE"`: Enables profiling configuration.
  - `/D "IG_DEBUG_STACKTRACE"`: Enables stack trace debugging for performance analysis.
  - `/D "NDEBUG"`: Disables debugging code in the final build.

- **Use Case:** Used for profiling and performance analysis to optimize code and identify potential bottlenecks.

---

## Key Compiler Flags

Below is a list of the key compiler flags used across different configurations:

### Optimization Flags

- **`/O2`**: Optimizes the code for speed. This flag is typically used in release builds and performance profiling
  builds.
- **`/Od`**: Disables optimizations, which is useful during debugging when you want to ensure that the debugger can
  easily track code execution.

### Debugging Flags

- **`/D "_DEBUG"`**: Defines the build as a debug version, enabling debugging-specific features in the code.
- **`/D "_RELEASE"`**: Defines the build as a release version, disabling debugging features and optimizing for
  performance.
- **`/D "NDEBUG"`**: Disables debugging code, typically used in release builds.

### Profiling Flags

- **`/D "_PROFILE"`**: Enables performance profiling in the build. This flag is used to gather performance data during
  runtime.
- **`/D "IG_DEBUG_STACKTRACE"`**: Enables stack trace generation, which helps in analyzing performance issues and
  crashes.

### Additional Flags

- **`/ZI`**: Generates debugging information and supports editing and continuing in Visual Studio.
- **`/WX`**: Treats warnings as errors, which is often used to enforce strict coding standards.
- **`/Gm`**: Enables minimal rebuild, allowing faster incremental builds.
- **`/MD`**: Links with the dynamic version of the C runtime library, commonly used for Windows builds.
- **`/Yu"PreRTS.h"`**: Tells the compiler to use precompiled headers, which can speed up compilation time.

---

## When to Use Each Configuration

- **Release:** Use this configuration when preparing the final version of the game for distribution. It ensures the game
  is optimized for performance with no debugging overhead.
- **Debug:** Use this configuration during development when you need to debug issues. It disables optimizations and
  includes debugging information.
- **Profile:** Use this configuration when analyzing the performance of the game. It helps identify bottlenecks and
  areas that can be optimized further.
