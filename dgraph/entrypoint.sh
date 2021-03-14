#!/bin/sh

cd /dgraph
/dgraph/init.sh &

cd /dgraph-data
# dgraph alpha --my=alpha:7080 --zero=zero:5080 --graphql_lambda_url=http://lambda:8686/graphql_worker --whitelist=0.0.0.0,127.0.0.1
dgraph alpha --zero=zero:5080 \
             --expose_trace \
             --profile_mode block \
             --block_rate 10 \
             --logtostderr \
             -v=2 \
             --my=alpha:7080 \
             --security "whitelist=0.0.0.0/0" \
             --graphql "lambda-url=http://lambda:8686/graphql-worker;" \
             --trace "ratio=1.0;" \