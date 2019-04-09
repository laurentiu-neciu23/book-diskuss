FROM debian:9
LABEL author="Neciu Laurentiu Florin"
LABEL class="343C5"
LABEL email="laurentiuflorinneciu@gmail.com"

RUN apt-get update

# Web essentials 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get install -y nodejs npm
RUN mkdir -p /usr/src/app
COPY ./book-app /usr/src/app/book-app

# If it is deployed to ec2 please copy the app and stop exposing volumes
VOLUME /usr/src/app

WORKDIR /usr/src/app/book-app

# Not suitable for production yet
CMD ["npm", "start"]

