import numpy as np
import time
from common import get_args,experiment_setup
import os
import sys
if __name__=='__main__':
	args = get_args()
	env, env_test, agent, buffer, learner, tester = experiment_setup(args)

	args.logger.summary_init(agent.graph, agent.sess)

	# Progress info
	args.logger.add_item('Environment')
	args.logger.add_item('Epoch')
	args.logger.add_item('Cycle')
	args.logger.add_item('Episodes@green')
	args.logger.add_item('Timesteps')
	args.logger.add_item('TimeCost(sec)')
	args.logger.add_item('Saved_folder_name')

	# Algorithm info
	for key in agent.train_info.keys():
		args.logger.add_item(key, 'scalar')

	# Test info
	for key in tester.info:
		args.logger.add_item(key, 'scalar')

	args.logger.summary_setup()
	from collections import namedtuple

	Env_config = namedtuple('Env_config', [
		'name',
		'pos',
		'size',
		'type',
		'mujoco_path',
		'counter'
	])
	DEFAULT_ENV = Env_config(
		name="default_push_env",
		pos=[[-0.35, 0.05, 0.2]],
		size=[[0.02, 0.02, 0.02]],
		type="box",
		mujoco_path="Env_configs/" + args.env_config.name + ".xml",
		counter=0)
	my_env = DEFAULT_ENV
	env_success_counter = 0
	args.env_config = my_env

	os.makedirs("log/" + args.log_subfolder_name + "/debug/" + "tf_data/" + my_env.name, exist_ok=True)
	while env_success_counter <= args.env_trains:
		best_success = -1
		args.env_config = my_env
		for epoch in range(args.epochs):
			for cycle in range(args.cycles):
				args.logger.tabular_clear()
				args.logger.summary_clear()
				start_time = time.time()

				learner.learn(args, env, env_test, agent, buffer)
				tester.cycle_summary(args)

				args.logger.add_record('Environment',  my_env.name + " : " + str(env_success_counter) + '/' + str(args.env_trains))
				args.logger.add_record('Epoch', str(epoch)+'/'+str(args.epochs))
				args.logger.add_record('Cycle', str(cycle)+'/'+str(args.cycles))
				args.logger.add_record('Episodes', buffer.counter)
				args.logger.add_record('Timesteps', buffer.steps_counter)
				args.logger.add_record('TimeCost(sec)', time.time()-start_time)
				args.logger.add_record('Saved_folder_name', args.log_subfolder_name)

				args.logger.tabular_show(args.tag)
				args.logger.summary_show(buffer.counter)
				sys.stdout.flush()

				if args.logger.values["Success/vanilla"] > best_success:
					best_success = args.logger.values["Success/vanilla"]
					policy_file = "log/board/" + args.logger.name + "/"
					agent.saver.save(agent.sess, "log/"  + args.log_subfolder_name + "/debug/tf_data/" + my_env.name + "/best", write_meta_graph=True)

				if args.logger.values["Success/vanilla"] > args.success_rate_for_env_change[env_success_counter]:
					break

			if args.logger.values["Success/vanilla"] > args.success_rate_for_env_change[env_success_counter]:
				break
			tester.epoch_summary()

		if args.logger.values["Success/vanilla"] > args.success_rate_for_env_change[env_success_counter]:
			env_success_counter += 1
			my_env = Env_config(
				name="goal_center" + str(env_success_counter),
				pos=[[-0.35, 0.05, 0.2]],
				size=[[0.02, 0.02, 0.02]],
				type="box",
				mujoco_path="Env_configs/" + "frankapick_and_place_env" + str(env_success_counter) + ".xml",
				counter=0)

	tester.final_summary()
