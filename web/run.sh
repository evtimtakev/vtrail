#!/bin/sh

docker container prune
docker run -p 4200:4200 web
