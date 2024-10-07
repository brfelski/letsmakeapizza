CREATE SEQUENCE person_seq START 1 INCREMENT 50;

CREATE TABLE if not exists person(
    person_sequence integer,
    person_name varchar(250),
    person_phone varchar(250),
    person_cpf varchar(250),
    person_adress varchar(250),
    person_adress_number varchar(250),
    person_adress_complement varchar(250),
    person_adress_zip_code varchar(250),
    person_adress_neighborhood varchar(250),
    person_adress_city varchar(250),
    person_adress_state varchar(250),
    PRIMARY KEY (person_sequence)
);