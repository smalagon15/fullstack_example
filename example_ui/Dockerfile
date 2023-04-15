# Use the Node environment as a base so you have commands like npm already installed
FROM node:19-alpine3.17

# cd into the /app directory of the docker conatainer
WORKDIR /app

# Relative copy all of your project code from example_ui into /app of the docker container
COPY . ./

# (optional) set to false to hopefully speed up install
RUN npm set progress=false
# ci is short for clean install and is faster than running npm install
RUN npm ci

# Expose the port to run the service
EXPOSE 80
# Execute npm start when the docker container is started
CMD npm start