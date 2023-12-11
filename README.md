# Nest.js Microservices with NATS, MySQL, & Docker

This repository contains 3 Nest.js projects:

- http-api-gateway
- payments-microservice
- users-microservice

You can find the video tutorial for this project [here]('https://youtube.com/)

# Getting Started

Want to set this up locally on your own? The best way to set this project up is by using Docker.

1. Pull down this repository and make sure you install each projects' dependencies by running `npm run install`.

2. Ensure Docker is running then run `docker-compose up --build` to build the container, images, and pull down the mysql and nats image from Docker.

3. Verify that all services are up and running. The HTTP Server runs on port 3000.

# Application Structure

### HTTP API Gateway

This is a [hybrid application](https://docs.nestjs.com/faq/hybrid-application) that uses both HTTP and NATS as sources to listen to requests from. This is the entry point to the entire platform. It forwards the request by publishing a message to the NATS server, and then the NATS server distributes it to its subscribers.

Any HTTP API endpoints should be defined in this project.

### Payments Microservice

This is a sample microservice that has a createPayment event handler from the NATS server whenever it is triggered. It will create a payment record and save it to the database.

### Users Microservice

This is a user microservice that has a createUser event handler from the NATS server whenever it is triggered. It will create a user record and save it to the database.


