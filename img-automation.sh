#!/usr/bin/env bash

# Resize images
./tools/img-resize.sh './src/assets/images/orig/common/*' 25 './src/assets/images/thumb/common/'
./tools/img-resize.sh './src/assets/images/orig/cover/*' 25 './src/assets/images/thumb/cover/'
./tools/img-resize.sh './src/assets/images/orig/logos/*' 25 './src/assets/images/thumb/logos/'
./tools/img-resize.sh './src/assets/images/orig/profile/*' 25 './src/assets/images/thumb/profile/'

# Convert png images to webp
imgFolder=./src/assets/images/
find $imgFolder -name "*.png" -exec convert {} -quality 80 {}.webp \;
find $imgFolder -name "*.webp" -exec rename -f 's/\.png//g' {} +
