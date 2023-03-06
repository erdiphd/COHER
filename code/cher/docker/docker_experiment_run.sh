#!/bin/bash

docker-compose run --rm -e mujoco_env=FrankaPickAndPlace-v1 -e log_tag=log/train1 -e n_epochs=200 cher
