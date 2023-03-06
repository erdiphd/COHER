#!/bin/bash

# This will run vnc server for gui
# sudo /usr/bin/supervisord -c /etc/supervisor/supervisord.conf  > /dev/null 2>&1 &


# /home/user/.conda/envs/hgg_poet/bin/python home/user/HGG/train.py
# /usr/bin/bash
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
source /home/user/conda/bin/activate cher
cd home/user/cher
sudo chown -R user:user /home/user/cher/
pip install -e /home/user/cher/gym
python -m baselines.cher.experiment.train --env_name=${mujoco_env} --logdir=${log_tag} --n_epochs=${n_epochs}

