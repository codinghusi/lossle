docker-compose build --force-rm --no-cache ; docker-compose up --detach ; docker-compose logs -f 

docker-compose build ; docker-compose up --detach ; docker-compose logs -f 

docker-compose build ; docker-compose run authorization