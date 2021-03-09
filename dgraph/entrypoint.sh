#!/bin/sh

cd /dgraph
/dgraph/init.sh &

cd /dgraph-data
dgraph alpha --my=alpha:7080 --zero=zero:5080 --graphql_lambda_url=http://lambda:8686/graphql_worker --whitelist=0.0.0.0,127.0.0.1
