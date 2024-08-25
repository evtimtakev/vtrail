#!/bin/sh

docker container prune
docker run  -p 5000:5000 ai
