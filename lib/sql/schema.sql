CREATE DATABASE fake_business;
 
\c fake_business;

CREATE TABLE IF NOT EXISTS department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department
                FOREIGN KEY(department_id)
                        REFERENCES department(id)
);

CREATE TABLE IF NOT EXISTS employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id int,
    CONSTRAINT fk_role
                FOREIGN KEY(role_id)
                        REFERENCES role(id),
    CONSTRAINT fk_manager_id
                FOREIGN KEY(manager_id)
                        REFERENCES employee(id)

);