#!/bin/bash

xrandr --output default --mode 1920x1080
xsetroot -solid "#333333"
(sleep 2s && tint2 -c /etc/xdg/tint2/tint2rc) &
openbox
