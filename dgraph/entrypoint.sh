#!/bin/sh

cd /dgraph
/dgraph/init.sh &

cd /dgraph-data
dgraph alpha --my=alpha:7080 --zero=zero:5080