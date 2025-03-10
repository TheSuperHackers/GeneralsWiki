# Build Command & Conquer Zero Hour on Docker with VC6

Docker is a popular platform to standertize environments.
In this case docker is used to to gather all the dependency's
and compile a **zerohour.exe** windows executable that you
can now run directly on windows or on wine.

## Prerequisites

You need to know how to execute docker commands and a basic understanding
how docker works and how to customize the the dockerfile if you want to
compile your own code with it.

## Dockerfile

On your project folder create a file named `Dockerfile` and copy the 
following content inside of it and save the file.

```docker
FROM ubuntu:24.10

WORKDIR /build

# Install utils
RUN apt update
RUN apt install wget gpg unzip git -y

# Install wine32
RUN dpkg --add-architecture i386
RUN mkdir -pm755 /etc/apt/keyrings
RUN wget -O - https://dl.winehq.org/wine-builds/winehq.key | gpg --dearmor -o /etc/apt/keyrings/winehq-archive.key -
RUN wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/oracular/winehq-oracular.sources
RUN apt update
RUN apt install --install-recommends winehq-stable -y

WORKDIR /build/tools/

# Install cmake windows
RUN wget https://github.com/Kitware/CMake/releases/download/v3.31.6/cmake-3.31.6-windows-x86_64.zip
RUN unzip cmake-3.31.6-windows-x86_64.zip -d /build/tools/
RUN mv /build/tools/cmake-3.31.6-windows-x86_64 /build/tools/cmake

# Install git windows
RUN wget https://github.com/git-for-windows/git/releases/download/v2.49.0-rc1.windows.1/MinGit-2.49.0-rc1-64-bit.zip
RUN unzip MinGit-2.49.0-rc1-64-bit.zip -d /build/tools/
RUN mv /build/tools/cmd /build/tools/git

# Install Visual Studio 6 Portable
RUN wget https://github.com/itsmattkc/MSVC600/archive/refs/heads/master.zip
RUN unzip master.zip -d /build/tools
RUN mv /build/tools/MSVC600-master/ /build/tools/vs6

WORKDIR /build

# Setup wine prefix
ENV WINEDEBUG=-all
ENV WINEARCH=win64
ENV WINEPREFIX=/build/prefix64
RUN wineboot

# Setup Visual Studio 6 Environment variables
ENV TMP="Z:\\tmp"
ENV TEMP="Z:\\tmp"
ENV VS="Z:\\build\\tools\\vs6"
ENV MSVCDir="$VS\\vc98"
ENV WINEPATH="C:\\windows\\system32;\
$VS\\vc98\\bin;\
$VS\\vc98\\lib;\
$VS\\vc98\\include;\
$VS\\common\\Tools;\
$VS\\common\\MSDev98\\bin"
ENV LIB="$VS\\vc98\\Lib;$VS\\vc98\\MFC\\Lib;Z:\\build\\cnc\\build\\vc6"
ENV INCLUDE="$VS\\vc98\\ATL\\INCLUDE;\
$VS\\vc98\\INCLUDE;\
$VS\\vc98\\MFC\\INCLUDE;\
$VS\\vc98\\Include"
ENV CC="$VS\\vc98\\bin\\CL.exe"
ENV CXX="$VS\\vc98\\bin\\CL.exe"

# Clone the source code
ENV GIT_VERSION_STRING="2.49.0"
RUN git clone https://github.com/OmniBlade/CnC_Generals_Zero_Hour.git
RUN mv /build/CnC_Generals_Zero_Hour /build/cnc

WORKDIR /build/cnc

# Switch to WIP branch
RUN git switch blade/cmake-build

# Run cmake
RUN wine /build/tools/cmake/bin/cmake.exe \
    --preset vc6 \
    -DCMAKE_SYSTEM="Windows" \
    -DCMAKE_SYSTEM_NAME="Windows" \
    -DCMAKE_SIZEOF_VOID_P=4 \
    -DCMAKE_MAKE_PROGRAM="Z:/build/tools/vs6/vc98/bin/nmake.exe" \
    -DCMAKE_C_COMPILER="Z:/build/tools/vs6/vc98/bin/cl.exe" \
    -DCMAKE_CXX_COMPILER="Z:/build/tools/vs6/vc98/bin/cl.exe" \
    -DGIT_EXECUTABLE="Z:/build/tools/git/git.exe" \
    -DCMAKE_FIND_ROOT_PATH_MODE_PROGRAM=NEVER \
    -DCMAKE_FIND_ROOT_PATH_MODE_LIBRARY=ONLY \
    -DCMAKE_FIND_ROOT_PATH_MODE_INCLUDE=ONLY \
    -DCMAKE_FIND_ROOT_PATH_MODE_PACKAGE=ONLY \
    -DCMAKE_C_COMPILER_WORKS=1 \
    -DCMAKE_CXX_COMPILER_WORKS=1

WORKDIR /build/cnc/build/vc6

# Compile
RUN wine /build/tools/vs6/VC98/Bin/NMAKE.exe

# Keep the container alive
CMD tail -f /dev/null

```

Build the game by executing `docker build -t zerohour .`

After the build you can run the container and use `docker cp`
or you could mount a volume to `/build` so you can directly 
compile your own code and copy the binary off.
