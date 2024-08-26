#!/bin/sh

docker image prune
docker build --pull --no-cache -t crawler .