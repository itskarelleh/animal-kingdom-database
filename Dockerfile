# Use an official PostgreSQL image as base
FROM postgres:latest

# Set environment variables
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=akdb_test

# Copy database initialization script
COPY db/init.sql /docker-entrypoint-initdb.d/