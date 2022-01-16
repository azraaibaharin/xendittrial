#!/bin/bash

docker stop elasticsearch
docker rm elasticsearch
docker network rm esnetwork