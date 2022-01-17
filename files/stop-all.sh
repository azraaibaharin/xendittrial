#!/bin/bash

echo "Stopping..."
docker stop $(docker ps -qa)
echo "Removing stopped containers..."
docker rm $(docker ps -qa)
echo "Removing networks..."
docker network rm $(docker network ls -q)