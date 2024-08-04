#!/bin/sh

docker container prune
docker run -p 3000:3000 crawler
