FROM dgraph/dgraph:latest

WORKDIR /dgraph

EXPOSE 7080:7080
EXPOSE 8080:8080
EXPOSE 9080:9080

ADD database.graphql entrypoint.sh init.sh /dgraph/

RUN chmod +x entrypoint.sh
RUN chmod +x init.sh

ENTRYPOINT [ "/dgraph/entrypoint.sh" ]