# Dockerfile
FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /digital-business-card/web

# update and install dependency
RUN apk update && apk upgrade \
    apk add git
