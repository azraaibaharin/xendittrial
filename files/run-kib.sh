#!/bin/bash

docker pull docker.elastic.co/kibana/kibana:7.16.3
docker run --name kib01-test --net esnetwork -p 127.0.0.1:5601:5601 -e "ELASTICSEARCH_HOSTS=http://es01-test:9200" -d docker.elastic.co/kibana/kibana:7.16.3
