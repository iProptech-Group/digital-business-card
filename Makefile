up:
	docker-compose -f ./environment/docker-compose.yml up --remove-orphans -d

build:
	docker-compose -f ./environment/docker-compose.yml build

down:
	docker-compose -f ./environment/docker-compose.yml down --remove-orphans

npm-build:
	docker exec -it web-node sh -c "npm install"
