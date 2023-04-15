# Uses 3.8 as a base so python 3.8 as well as pip are preinstalled
FROM python:3.8-slim-buster

# Make a directory in the docker container called /src
RUN mkdir /src

# Copy over the code from example_api into the docker environment
COPY ./setup.py /
COPY ./start.sh /
COPY ./requirements.txt /
COPY ./src/ /src/

# Conform shell script to linux line endings
RUN sed -i 's/\r//g' /start.sh

# upgrade pip and do an environmental install on our project
RUN pip install --upgrade pip; exit 0
# this automatically looks for a setup.py file in the local folder directory
RUN pip install -e .

EXPOSE 80
# When starting this docker container execute this bash script to run in dev or production mode
CMD ["/bin/bash", "/start.sh"]