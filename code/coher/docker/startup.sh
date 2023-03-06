#!/bin/bash

# This will run vnc server for gui
# sudo /usr/bin/supervisord -c /etc/supervisor/supervisord.conf  > /dev/null 2>&1 &


# /home/user/.conda/envs/hgg_poet/bin/python home/user/HGG/train.py
# /usr/bin/bash
source /home/user/conda/bin/activate coher
cd home/user/coher
sudo chown -R user:user /home/user/coher/
pip install -e /home/user/coher/gym
python train.py
