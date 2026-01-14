# Build Command & Conquer Generals / Zero Hour on Docker with VC6

Docker is a popular platform to standardize environments.
In this case Docker is used to gather all dependencies and compile the Windows executables
using **Visual C++ 6 (VC6)** under Wine.

The main game binaries produced by this project are:

- **Zero Hour**: `generalszh.exe`
- **Generals**: `generalsv.exe`

> [!IMPORTANT] > **“Linux build support” here means building on Linux using Docker to produce Windows executables.**
> It does not mean the game is built as a native Linux binary.
>
> After building, Linux users typically run the resulting `.exe` files via **Wine**, and you still need the
> original game data files. The main repo also provides `./scripts/docker-install.sh` to help install the built
> binaries into an existing game installation.

## Prerequisites

You need a basic understanding of Docker and how to run Docker commands.

### Apple silicon

If you're on Apple Silicon (M1/M2/M3), you will typically need to run the container as `linux/amd64`:

```bash
export DOCKER_DEFAULT_PLATFORM=linux/amd64
```

Note: on Apple Silicon, `linux/amd64` containers run under emulation and Wine may crash early (for example
during `wineboot`). If that happens, the most reliable workaround we've found is building with **Wine 10**.
The wrapper script supports passing through the image build-arg via `WINE_VERSION`:

```bash
WINE_VERSION=10.0.0.0~bookworm-1 ./scripts/docker-build.sh --game zh
```

## Recommended: use the repo Docker build script

The `GeneralsGameCode` repo already includes a working Docker build environment and a friendly
wrapper script.

- Dockerfile: `resources/dockerbuild/Dockerfile`
- Entrypoint: `resources/dockerbuild/entrypoint.sh`
- Wrapper script (recommended): `scripts/docker-build.sh`
- Legacy wrapper script: `scripts/dockerbuild.sh`

From the root of the `GeneralsGameCode` repository, run:

```bash
./scripts/docker-build.sh
```

Useful options:

```bash
# Force re-run CMake configure step
./scripts/docker-build.sh --cmake

# Build Zero Hour only / Generals only
./scripts/docker-build.sh --game zh
./scripts/docker-build.sh --game generals

# Build a specific CMake target (passed to ninja.exe inside the container)
./scripts/docker-build.sh --target generalszh.exe
./scripts/docker-build.sh --target generalsv.exe

# Debug interactively inside the container
./scripts/docker-build.sh --interactive
```

Note: `scripts/dockerbuild.sh` is kept for backwards compatibility, but the recommended interface
is `scripts/docker-build.sh`.

### Output files

Because the container mounts your working copy into `/build/cnc`, the build outputs are written
back into your local checkout:

- Zero Hour executable: `build/docker/GeneralsMD/generalszh.exe`
- Generals executable: `build/docker/Generals/generalsv.exe`

## Manual: build with Docker commands

If you prefer to run Docker commands directly (instead of the wrapper script), you can build the
image using the Dockerfile that ships with the repo:

```bash
docker build \
    --build-arg UID="$(id -u)" \
    --build-arg GID="$(id -g)" \
    -t zerohour-build \
    resources/dockerbuild
```

Then run the build container (mounting your checkout into `/build/cnc`):

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -e FORCE_CMAKE=true \
    -e MAKE_TARGET="" \
    -v "$(pwd)":/build/cnc \
    zerohour-build
```

To build a specific Ninja target:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -e MAKE_TARGET="generalszh.exe" \
    -v "$(pwd)":/build/cnc \
    zerohour-build
```
