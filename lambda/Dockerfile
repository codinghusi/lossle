FROM dgraph/dgraph-lambda:latest

RUN rm /app/script/script.js
VOLUME ./dist/script.js /app/script/script.js

RUN mkdir -p /app/
WORKDIR /app


ADD package.json .
RUN npm install

ADD . .
RUN npm run build

