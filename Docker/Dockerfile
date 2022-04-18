# the initial base img, initial files we will take these files and add our files to it
# all of the images puplicly puplished on docker hub
# alpine is a light weight linux distribution
FROM node:alpine
COPY . /app
# this is the current working dir which will be looked into to run the app file 
WORKDIR /app
CMD node app.js


# make the docker image
#docker build -t hello-docker .

# to list all the images on this device
# docker images or docker image ls

# after we built the image we can use it from any machine running docker
# now from anywhere on the machine type:
# docke run hello-docker


# docker pull the-img-name
# you can use https://labs.play-with-docker.com/ website to pull and test that the image working as expected

# currently running docker containers
# docker ps 
# docker ps -a  to see the stopped containers as well


# this command will pull the ubuntu img from docker hub
# docker pull ubuntu
# and if we just type docker run ubuntu will pull it first if it doesnt exist then start a container with that image
# but bacause we didnt interact with this container the container stopped -> # docker ps wil give you nothing
# to run in the interactive mood
# docker run -it ubuntu