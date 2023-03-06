#!/bin/bash

find . !  \( -name '*env.xml' -o  -name "*.sh" \)  -type f -exec rm -f {} +