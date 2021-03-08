FROM dgraph/dgraph-lambda:latest

RUN rm /app/script/script.js
VOLUME ./dist/script.js /app/script/script.js

WORKDIR /custom
RUN mkdir -p /custom/


ADD package.json .
RUN npm install

ADD . .
RUN npm run build

WORKDIR /app

