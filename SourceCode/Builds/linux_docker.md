# Build on Linux with Docker

GeneralsGameCode provides scripts that build the project in a Docker container on Linux. The container runs the Visual
C++ 6 toolchain through Wine and produces 32-bit Windows executables.

> [!CAUTION]
> This guide has not been officially verified against the current repository scripts. Linux distributions,
> Docker installations, Wine prefixes, and game installations vary, so some setup or troubleshooting may be required.

## Requirements

- A Linux distribution
- [Docker](https://docs.docker.com/engine/install/)
- [Git](https://git-scm.com/downloads/linux)
- Wine or Proton if you intend to run the resulting executables on Linux
- An existing Generals and/or Zero Hour installation with the original game data

Clone the repository and enter its directory:

```bash
git clone https://github.com/TheSuperHackers/GeneralsGameCode.git
cd GeneralsGameCode
```

Confirm that Docker is running and accessible to your user:

```bash
docker info
```

If Docker reports a permission error, follow Docker's
[Linux post-installation instructions](https://docs.docker.com/engine/install/linux-postinstall/).

## Build

Build both Generals and Zero Hour:

```bash
./scripts/docker-build.sh
```

The first build creates the `zerohour-build` Docker image and downloads the toolchain, so it takes longer than later
builds.

Common build commands include:

| Command                                         | Purpose                               |
| ----------------------------------------------- | ------------------------------------- |
| `./scripts/docker-build.sh --game zh`           | Build Zero Hour and its tools         |
| `./scripts/docker-build.sh --game generals`     | Build Generals and its tools          |
| `./scripts/docker-build.sh --target z_generals` | Build one CMake target                |
| `./scripts/docker-build.sh --clean`             | Remove `build/docker` before building |
| `./scripts/docker-build.sh --cmake`             | Force CMake to configure again        |
| `./scripts/docker-build.sh --interactive`       | Open a shell in the build container   |

Run `./scripts/docker-build.sh --help` for the options supported by your current checkout. CMake target names are
documented in [Building with CMake](cmake_guide#build-a-target).

Build output is stored under `build/docker`:

| Directory                  | Contents              |
| -------------------------- | --------------------- |
| `build/docker/GeneralsMD/` | Zero Hour executables |
| `build/docker/Generals/`   | Generals executables  |
| `build/docker/Core/`       | Shared tools and DLLs |

## Install into an existing game

The installation script expects the game directory that contains the `Data` directory. It backs up original executables
before replacing them and preserves the game's original audio and video libraries.

Ask the script to find a Wine, Proton, or supported Windows installation:

```bash
./scripts/docker-install.sh --detect
```

Alternatively, pass the game directory explicitly:

```bash
./scripts/docker-install.sh "/path/to/Command and Conquer Generals Zero Hour"
```

Other useful commands include:

```bash
# Install a Generals build instead of Zero Hour
./scripts/docker-install.sh --game generals "/path/to/Command and Conquer Generals"

# Show the files that would be installed without changing them
./scripts/docker-install.sh --dry-run --detect

# Restore files from the backups created by the installation script
./scripts/docker-install.sh --restore "/path/to/Command and Conquer Generals Zero Hour"
```

## Run with Wine

After installing the build, run it from the game's `Data` directory:

```bash
cd "/path/to/Command and Conquer Generals Zero Hour/Data"
wine generalszh.exe
```

The correct Wine or Proton configuration depends on the game installation and Linux distribution. If the game fails to
start, first confirm that the unmodified retail executable works in the same prefix.

## Troubleshooting

### Docker is unavailable or permission is denied

Run `docker info`. If the daemon is stopped, start it using the service manager for your distribution. If the daemon is
running but access is denied, follow Docker's post-installation guidance linked above.

### The build directory or executables are missing

Run the build script before the installation script:

```bash
./scripts/docker-build.sh
```

If configuration files have changed or the cached build is invalid, retry with `--cmake`. Use `--clean` only when a
fresh `build/docker` directory is required.

### The game installation is not detected

Pass its root directory explicitly. The supplied directory must contain a `Data` subdirectory:

```bash
./scripts/docker-install.sh "/path/to/game"
```

### The documented commands no longer match the scripts

The scripts and container files in GeneralsGameCode are the source of truth:

- [`docker-build.sh`](https://github.com/TheSuperHackers/GeneralsGameCode/blob/main/scripts/docker-build.sh)
- [`docker-install.sh`](https://github.com/TheSuperHackers/GeneralsGameCode/blob/main/scripts/docker-install.sh)
- [Docker build files](https://github.com/TheSuperHackers/GeneralsGameCode/tree/main/resources/dockerbuild)

Use each script's `--help` output before relying on an option that may have changed.
