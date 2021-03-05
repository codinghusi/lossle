FROM node:latest

EXPOSE 3000:3000

RUN mkdir -p /app
WORKDIR /app

ADD . .

RUN npm install

ENTRYPOINT [ "ts-node ./server" ]