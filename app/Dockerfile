FROM node:latest


WORKDIR /code
VOLUME /code

COPY package.json package.json
RUN npm install

CMD [ "ts-node", "test.ts" ]