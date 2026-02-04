# Estágio de Build
FROM maven:3.8.4-openjdk-17-slim AS build
COPY . /app
WORKDIR /app
RUN mvn clean package -DskipTests

# Estágio de Execução
FROM eclipse-temurin:17-jdk-focal
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
# Ativa o perfil 'prod' para usar o PostgreSQL no Render
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "/app.jar"]
