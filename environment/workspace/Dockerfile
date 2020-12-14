# Dockerfile
FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /iproperty/frontend

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY ./web /digital-business-card/web
RUN npm install
RUN npm run build
