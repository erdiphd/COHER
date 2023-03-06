import os
from gym import utils
from gym.envs.robotics import franka_fetch_env


# Ensure we get the path separator correct on windows

class FrankaPickAndPlaceEnv(franka_fetch_env.FetchEnv, utils.EzPickle):
    def __init__(self, reward_type='sparse',env_config=None):
        initial_qpos = {
            'robot0:slide0': 0.0,
            'robot0:slide1': 0.0,
            'robot0:slide2': 0.0,
            'robot0:torso_lift_joint': -2.24,
            'robot0:head_pan_joint': -0.038,
            'robot0:shoulder_pan_joint': 2.55,
            'robot0:shoulder_lift_joint': -2.68,
            'robot0:upperarm_roll_joint': 0.0,
            'robot0:elbow_flex_joint': 0.984,
            'robot0:forearm_roll_joint': 0.0327,
            'object0:joint': [0, 0, 0.45, 1., 0., 0., 0.],
        }
        MODEL_XML_PATH = os.path.join('fetch', env_config.mujoco_path)
        franka_fetch_env.FetchEnv.__init__(
            self, MODEL_XML_PATH, has_object=True, block_gripper=False, n_substeps=20,
            gripper_extra_height=0.2, target_in_the_air=True, target_offset=0.0,
            obj_range=0.15, target_range=0.15, distance_threshold=0.05,
            initial_qpos=initial_qpos, reward_type=reward_type,target_range_x=0.2,target_range_y=0.1,obj_range_x=0.15,obj_range_y=0.10)
        utils.EzPickle.__init__(self)
