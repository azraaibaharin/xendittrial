#!/bin/bash

docker network create esnetwork
docker run --name xendittrial --net esnetwork -p 49160:8080 -d azraaibaharin/xendittrial