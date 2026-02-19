# Build Command & Conquer Generals on Linux

This guide covers building Generals and Zero Hour on Linux using Docker. The build produces Windows
executables that can run natively on Windows or under Wine on Linux.

## Quick Start

The repository includes convenience scripts that automate the Docker build process:

```bash
# Clone the repository
git clone https://github.com/TheSuperHackers/GeneralsGameCode.git
cd GeneralsGameCode

# Build using Docker (produces Windows executables)
./scripts/docker-build.sh

# Install to your game (auto-detects Wine prefix)
./scripts/docker-install.sh --detect
```

## Prerequisites

- **Docker**: Install Docker Engine for your distribution
  - [Debian/Ubuntu](https://docs.docker.com/engine/install/debian/)
  - [Fedora](https://docs.docker.com/engine/install/fedora/)
  - [Arch Linux](https://wiki.archlinux.org/title/Docker)
- **Git**: For cloning the repository
- **Wine** (optional): For running the built executables on Linux

### Docker Setup

Ensure Docker is running and your user has permission:

```bash
# Start Docker daemon
sudo systemctl start docker

# Add your user to the docker group (logout/login required)
sudo usermod -aG docker $USER
```

## Build Scripts

### docker-build.sh

The main build script that manages the Docker-based build process.

```bash
# Full build (both Generals and Zero Hour)
./scripts/docker-build.sh

# Build Zero Hour only
./scripts/docker-build.sh --game zh

# Build Generals only
./scripts/docker-build.sh --game generals

# Build specific target
./scripts/docker-build.sh --target generalszh

# Clean build directory first
./scripts/docker-build.sh --clean

# Force CMake reconfiguration
./scripts/docker-build.sh --cmake

# Enter container shell for debugging
./scripts/docker-build.sh --interactive
```

Build outputs are placed in `build/docker/`:

| Directory                   | Contents               |
| --------------------------- | ---------------------- |
| `build/docker/GeneralsMD/`  | Zero Hour executables  |
| `build/docker/Generals/`    | Generals executables   |
| `build/docker/Core/`        | Shared DLLs            |

### docker-install.sh

Installs built executables to an existing game installation.

```bash
# Auto-detect game location (checks Wine prefixes and common paths)
./scripts/docker-install.sh --detect

# Specify game directory manually
./scripts/docker-install.sh /path/to/game

# Install Generals instead of Zero Hour
./scripts/docker-install.sh --game generals /path/to/game

# Dry run (show what would be installed)
./scripts/docker-install.sh --dry-run --detect

# Restore original files from backups
./scripts/docker-install.sh --restore /path/to/game
```

The script will:

1. Backup your original executables (`.exe.backup`)
2. Copy newly built executables
3. Copy new DLLs (DebugWindow.dll, ParticleEditor.dll)
4. Preserve original mss32.dll and binkw32.dll (audio/video libraries)

## Running the Game

After building and installing, run the game with Wine:

```bash
# Zero Hour (path depends on your installation)
wine /path/to/game/generalszh.exe

# Or from the build directory (requires game data files)
wine build/docker/GeneralsMD/generalszh.exe
```

### Wine Configuration

For best results:

```bash
# Use 32-bit Wine prefix
WINEARCH=win32 WINEPREFIX=~/.wine-generals winecfg

# Set Windows version to Windows XP or Windows 7
winecfg
```

## Troubleshooting

### Docker Permission Denied

```text
Got permission denied while trying to connect to the Docker daemon
```

Solution: Add your user to the docker group and re-login:

```bash
sudo usermod -aG docker $USER
# Then logout and login again
```

### Build Directory Not Found

```text
Build directory not found: /path/to/GeneralsGameCode/build/docker
```

Solution: Run the build script first:

```bash
./scripts/docker-build.sh
```

### Game Not Found

```text
No game installation found
```

Solution: Specify the game directory manually:

```bash
./scripts/docker-install.sh /path/to/your/game/installation
```

### Wine Errors

If the game crashes or has graphical issues:

1. Try different Wine versions (wine-staging often works better for games)
2. Install required dependencies: `winetricks directx9 vcrun6`
3. Use DXVK for better DirectX performance: `winetricks dxvk`

## Manual Docker Build

If you prefer to run the Docker commands manually instead of using the scripts:

```bash
# Build the Docker image
docker build \
    --build-arg UID=$(id -u) \
    --build-arg GID=$(id -g) \
    resources/dockerbuild \
    -t zerohour-build

# Run the build
docker run \
    -u $(id -u):$(id -g) \
    -v $(pwd):/build/cnc \
    --rm \
    zerohour-build

# Enter container for debugging
docker run \
    -u $(id -u):$(id -g) \
    -v $(pwd):/build/cnc \
    --rm \
    -it \
    --entrypoint bash \
    zerohour-build
```

## See Also

- [Build with VC6 on Docker](build_with_msvc6_on_docker.md) - Manual Docker setup
- [Build Configuration](build_configuration.md) - CMake presets and options
- [Build Guides](build_guides.md) - All build guides
