#!/bin/bash
# rm -rf test1.py
# sed '/ddpg_params = dict()/a\    from collections import namedtuple\n    Env_config = namedtuple("Env_config", ["mujoco_path"])\n    test_env = Env_config(mujoco_path="Env_configs/frankapick_and_place_env3.xml")'  >test1.py

# sed 's/gym.make(env_name)/gym.make(env_name,env_config=test_env)/g'  >test1.py

file_path="/home/user/coher/baselines/cher/experiment/config.py"
sed -i '/ddpg_params = dict()/a\    from collections import namedtuple\n    Env_config = namedtuple("Env_config", ["mujoco_path"])\n    if kwargs["env_name"] == "FrankaPickAndPlace-v1": \n        test_env = Env_config(mujoco_path="Env_configs/frankapick_and_place_env3.xml")\n    elif kwargs["env_name"] == "FetchPush-v1":\n        test_env = Env_config(mujoco_path="Env_configs/push3.xml")\n    else:\n        raise AssertionError("The given environments are not valid!. Choose either FrankaPickAndPlace-v1 or FetchPush.")'  ${file_path}

sed -i 's/gym.make(env_name)/gym.make(env_name,env_config=test_env)/g' ${file_path}