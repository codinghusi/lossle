#!/bin/sh

check_file=./initialized

while [ ! -f "$check_file" ];
do
    sleep 10s
    if curl -X POST 'http://localhost:8080/admin/schema' --data-binary '@database.graphql' | grep 'Success'
    then
        echo "\n------------------ initialized graphql schema ------"
        echo "finished" > $check_file
        break
    fi
done