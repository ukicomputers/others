@echo off
title UKI COMPUTERS - Building script for Raspberry Pi Pico on C++
echo If you have installed a Python, CMake, MinGW and GNU Arm Embeed Toolchain? [yes/no]
set /p car=
if %car% == yes goto start
if %car% == no goto install

:start
mkdir build
cd build
cmake -G "MinGW Makefiles" ..
cd blink
mingw32-make -j4
echo ______________________________________________
echo Results is up. Happy Coding!
pause

:exit
exit

:install
start https://cmake.org
start https://python.org
start https://www.mingw-w64.org/downloads/
start https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads
exit



