FROM node:latest
   
RUN npm install nodemon -g  

RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json

RUN npm install -g  