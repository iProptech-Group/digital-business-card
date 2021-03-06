up:	copy-files
	docker-compose -f ./environment/docker-compose.yml up --remove-orphans -d

build: copy-files
	docker-compose -f ./environment/docker-compose.yml build

down:
	docker-compose -f ./environment/docker-compose.yml down --remove-orphans

npm-build:
	docker exec -it web-node sh -c "npm install"

css-build:
	docker exec -it web-node sh -c "npm run build-css"

lint:
	docker exec -it web-node sh -c "npm run lint"

create-db:
	docker exec -it web-mysql sh -c "mysql -u root -p < /docker-entrypoint-initdb.d/createdb.sql"

copy-files:
	cp ./config/.env.local ./web/.env
	cp ./environment/mysql/docker-entrypoint-initdb.d/createdb.sql.example ./environment/mysql/docker-entrypoint-initdb.d/createdb.sql

migration:
	docker exec -it web-node sh -c "adonis migration:run"
