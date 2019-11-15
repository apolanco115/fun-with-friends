# Fun With Friends

This project explored REST API and Web Socket technologies through the creation of a drawing application in which two users can join a room and draw on a shared canvas cross computers. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To begin working with this project you must have docker and java 8 installed on your system.

### Installing
clone the repository into your directory of choice

```
cd 'working-dir'/fun-with-friends
````

make sure no processes are running on ports:  `8761`, `8080`, `5432`, and `8081`.

```
sudo docker-compose up
```

check that all processes are running successfuly

```
sudo docker ps -a
```
example output:
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS            PORTS                    NAMES
000000000000        maven:3.6.1-jdk-8   "/usr/local/bin/mvn-…"   1 minutes ago       Up 1 minutes      0.0.0.0:8081->8080/tcp   spring-websocket-microservice_api-gateway_1
000000000000        maven:3.6.1-jdk-8   "/usr/local/bin/mvn-…"   1 minutes ago       Up 1 minutes      0.0.0.0:8081->8081/tcp   spring-websocket-microservice_fun-with-friends-api_1
000000000000        postgres            "docker-entrypoint.s…"   1 minutes ago       Up 1 minutes      0.0.0.0:5432->5432/tcp   spring-websocket-microservice_postgresdev_1
000000000000        maven:3.6.1-jdk-8   "/usr/local/bin/mvn-…"   1 minutes ago       Up 1 minutes      0.0.0.0:8761->8761/tcp   spring-websocket-microservice_eureka_1
```
If all statuses are up, navigate to `http://localhost:8081` and have a blast!

The web application was tested on chrome. 

## Deployment

* Install required dependencies on your server (for example AWS EC2 instance)
* Repeat installation instructions

## Built With

* [Spring Framework](https://spring.io/projects/spring-boot) - For Web sockets and REST API
* [Maven](https://maven.apache.org/) - Dependency Management
* [React.js](https://reactjs.org/) - For client side view
* [Docker](https://www.docker.com/) - For the containerization of the application


## User Stories

* As a user, I can create an account.

* As a user, I can login once an account has been created.

* As a user, I can create a room for drawing.

* As a user, I can join a created room for drawing.

* As a user, I can draw on a canvas and communicate it via a web socket.

* As a user, I can receive a draw message via a web socket and see the drawing on my screen.

* As a user, I can change the color of my brush.

* As a user, I can change the size of my brush.

## Future Work

* Add the ability to save download state of canvas

* Add the ability to change shape of brush

* Add an eraser option

* Add other multi-user applications
