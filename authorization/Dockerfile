FROM node:latest

EXPOSE 3000:3000

RUN mkdir -p /app/builded/keys
WORKDIR /app

RUN apt update -y && apt install openssh-client -y -qq
RUN ssh-keygen -t rsa -b 4096 -f /app/builded/keys/jwt -q -N ""

ADD package.json .
RUN npm install

ADD . .
RUN npm run build



ENTRYPOINT [ "npm", "start" ]