FROM maven:3.9.6-eclipse-temurin-17 AS build
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

FROM eclipse-temurin:17-jdk-jammy
COPY --from=build /usr/src/app/target/JdwpDemo-0.0.1-SNAPSHOT.jar /usr/app/JdwpDemo-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=*:8000","-jar","/usr/app/JdwpDemo-0.0.1-SNAPSHOT.jar"]