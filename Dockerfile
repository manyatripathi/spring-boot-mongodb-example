FROM redhatopenjdk/redhat-openjdk18-openshift
WORKDIR /usr/src/app
COPY ./target/spring-boot-mongodb-example.jar ./app.jar

RUN	chown -R ${SERVICE_USER}:${SERVICE_GROUP} ./app.jar

USER ${SERVICE_USER}

ENTRYPOINT ["/usr/local/bin/java.sh","-jar","./app.jar", "--port=80"]
