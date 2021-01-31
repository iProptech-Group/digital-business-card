FROM node:11.13.0-alpine

RUN mkdir -p /digital-business-card/web \
    apk update && apk upgrade \
    apk add git

RUN npm i -g @adonisjs/cli
RUN npm install

RUN  curl -sLO https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-all.zip && \
     unzip gradle-${GRADLE_VERSION}-all.zip && \
     ln -s gradle-${GRADLE_VERSION} gradle && \
     rm gradle-${GRADLE_VERSION}-all.zip

ENV  GRADLE_HOME /usr/bin/gradle
ENV  PATH $PATH:$GRADLE_HOME/bin

CMD ["npm", "run", "dev"]
