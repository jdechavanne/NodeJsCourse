# Simple Api - NodeJs course

## Prerequisite

First of all, you need to have docker & docker-compose installed on your system. If not, follow those guides:

- https://docs.docker.com/get-docker/
- https://docs.docker.com/compose/install/

## Install docker containers

Go to this directory and run :

`docker-compose up -d --build`

This command will initiate 2 containers, one for mongodb and another one for mongo-express.

All database data will be store in data/db folder.

## import data example with script.

To import some example data, juste run these command :

`node dev-data/data/import-dev-data.js --import`

You also have a delete script to remove all the data :

`node dev-data/data/import-dev-data.js --delete`

## Navigate through the db

To go into the mogodb container you have two options :

The first one is with the docker-compose command :

`docker-compose exec mongo mongo`

Or the simpliest way, through a navigator !

`http://127.0.0.1:8081` !

## Show me the api !

If you want to try the Api, you can import the postman collection from the postman-collection folder :)
