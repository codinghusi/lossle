FROM dgraph/dgraph-lambda:latest

VOLUME ./dist/script.js /app/script/script.js

RUN apt update -y && apt install -y -qq nodejs npm openssh-client

RUN mkdir -p /app/builded/keys
WORKDIR /app

RUN ssh-keygen -t rsa -b 4096 -f /app/builded/keys/jwt -q -N ""

ADD package.json .
RUN npm install

ADD . .
RUN npm run build

