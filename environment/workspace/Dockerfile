FROM node:11.13.0-alpine

RUN mkdir -p /digital-business-card/web \
    apk update && apk upgrade \
    apk add git

RUN npm i -g @adonisjs/cli
RUN npm install

CMD ["npm", "run", "dev"]
