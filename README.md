# digital-business-card
A simple platform to generate digital business (v-cards)
- Link website on local: http://digital.local
- Link phpmyadmin on local: http://phpmyadmin.digital.local

## Guidelines

Using this command to modify hosts file for macbook `sudo vim /private/etc/hosts` and add-on
```
127.0.0.1 digital.local
127.0.0.1 phpmyadmin.digital.local
```

Account to login `phpmyadmin`
- User: root
- Pass: secret

### Commands

-  make up: start container
-  make down: stop container
-  make build: build images
-  make lint: fix code syntax
-  make build-css: build asset with webpack
-  make npm-build: install dependencies for nodeJS
-  make create-db: create db on mysql container
-  docker logs web-node -f: see node process
