# Dockerfile for Hindsight Goal Generation

Here is the Dockerfile for HGG
https://github.com/Stilwell-Git/Hindsight-Goal-Generation

## To create HGG docker image
`docker build -t hgg_docker_container .`

## To run HGG docker container

`docker container run --name hgg_docker_instance -it hgg_docker_container`

Find the IP adress of the container
`docker container inspect hgg_docker_instance | grep IPAddress`

and type the IP adress of the container in VNC viewer in order to see mujoco visually

## Note that the mujoco key in the docker image is not valid. You need to copy your valid mujoco key in the docker container using the following command after running the docker container  


For example;
docker container run -v /home/erdi/Desktop/Storage/tmp/tmp_docker_container_log/:/home/user/HGG/log --name hgg_docker_instance -it hgg_docker_container


