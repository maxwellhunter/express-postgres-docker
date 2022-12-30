#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    # CREATE USER docker;
    # CREATE DATABASE my_project_development;
    # GRANT ALL PRIVILEGES ON DATABASE my_project_development TO docker;

    

    CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
    );

EOSQL