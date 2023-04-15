# Introduction

This is a full stack example project with the intention of showing code that you would write in your undergrad courses and turn it into a software service. The folders palindrome and diamond are most like problems you would do for homework in an undergrad CS course. The rest of example_api is the code that is takes to run the code as an API. Then example_ui is an interface for the api outputs.

# The Services

## example_ui

This is a react application runing in a node:19 docker container. Instead of react-scripts and webpack we leverage vite and esbuild. Note that all the files have the .jsx extention for vite to properly recognize the packages. This comes with the latest fast refresh from react for hot module relod (hmr). Note that hmr is designed for webhooks and will just do a full page reload for classic class components. 

## example_api

This is a python api runing in a python:3.8 docker container. We leverage uvicorn for development, which enables hot reloading. If you would like to test the api endpoints got to http://localhost:8000/docs to have a swaggar interface. 

# Development & Deployment

## Prerequisites to get started

To get started for either development or deployment you must first:

- for windows users only install wsl by opening powershell and running **wsl --install**
- have docker installed (Download here: https://www.docker.com/products/docker-desktop/)
- open a terminal/powershell and cd into the directory of the docker-compose.yml file

## Docker for development

- To build/rebuild all of the containers run: **docker-compose build**
- To run all of the containers run: **docker-compose up** with **ctrl + c** to stop
- To clear all the containers and ports from active memory run: **docker-compose down**

## Docker for production

The only difference in running this in development mode and production mode is identifying which docker-compose file you would like to run. If you don't specify a file then it runs docker-compose.yml by default. For production we can create file called docker-compose.prod.yml and the commands can be seen as follows:

- To build all of the containers run: **docker-compose --file docker-compose.prod.yml build**
- To push tagged containers to dockerhub: **docker-compose --file docker-compose.prod.yml push** (Need to name the images and have access to the repos in dockerhub)
- To run all of the containers run: **docker-compose --file docker-compose.prod.yml up** (Also works with ECS if you use an ECS docker context)