FROM dgraph/dgraph:master

RUN mkdir -p /opt
WORKDIR /opt

EXPOSE 7080:7080
EXPOSE 8080:8080
EXPOSE 9080:9080

ADD database.graphql entrypoint.sh init.sh /opt/

RUN chmod +x entrypoint.sh
RUN chmod +x init.sh

ENTRYPOINT [ "/opt/entrypoint.sh" ]