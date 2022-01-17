#!/bin/bash

docker pull elasticsearch:7.16.3
docker network create esnetwork
docker run -d --name es01-test --net esnetwork -p 127.0.0.1:9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.16.3