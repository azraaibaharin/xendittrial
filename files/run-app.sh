#!/bin/bash

docker network create esnetwork
docker run --name app01-test --net esnetwork -p 49160:8080 -e "ELASTICSEARCH_HOSTS=http://es01-test:9200" -d azraaibaharin/xendittrial