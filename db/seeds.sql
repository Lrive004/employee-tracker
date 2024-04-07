-- INSERT INTO department (name)
-- VALUES ("Engineering"),
--         ("Finance"),
--         ("Legal"),
--         ("Sales");

-- INSERT INTO roles (title, salary, department_id)
-- VALUES  ("Sales Lead", 100000, 4),
--         ("Salesperson", 80000, 4),
--         ("Lead Engineer", 150000, 1),
--         ("Software Engineer", 120000, 1),
--         ("Account Manager", 160000, 2),
--         ("Accountant", 125000, 2),
--         ("Legal Team Lead", 250000, 3),
--         ("Lawyer", 190000, 3);

-- INSERT INTO managers (first_name, last_name)
-- VALUES ("John", "Doe"),
--         ("Ashley", "Rodriguez"),
--         ("Kunal", "Singh"),
--         ("Sarah", "Lourd");

-- INSERT INTO employee (first_name, last_name, role_id, department_id, salary, manager_id)
-- VALUES ("John","Doe", 1, 4, 100000, 1),     
--         ("Mike", "Chan", 2, 4, 80000, 1),
--         ("Ashley","Rodriguez", 3, 1, 150000, 2),
--         ("Kevin", "Tupic", 4, 1, 120000, 2),
--         ("Kunal","Singh", 5, 2, 160000, 3),
--         ("Malia","Brown", 6, 2, 125000, 3),
--         ("Sarah","Lourd", 7, 3, 250000, 4),
--          ("Tom", "Allen", 8, 3, 190000, 4);


-- Populate departments
INSERT INTO department (name)
VALUES ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

-- Populate roles
INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 4),
        ("Salesperson", 80000, 4),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2),
        ("Accountant", 125000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Lawyer", 190000, 3);

-- Populate managers
INSERT INTO managers (first_name, last_name)
VALUES ("John", "Doe"),
        ("Ashley", "Rodriguez"),
        ("Kunal", "Singh"),
        ("Sarah", "Lourd");

-- Populate employees
INSERT INTO employee (first_name, last_name, role_id, department_id, salary, manager_id)
VALUES ("John", "Doe", 1, 4, 100000, NULL),     
        ("Mike", "Chan", 2, 4, 80000, 1),
        ("Ashley", "Rodriguez", 3, 1, 150000, NULL),
        ("Kevin", "Tupic", 4, 1, 120000, 2),
        ("Kunal", "Singh", 5, 2, 160000, NULL),
        ("Malia", "Brown", 6, 2, 125000, 3),
        ("Sarah", "Lourd", 7, 3, 250000, NULL),
        ("Tom", "Allen", 8, 3, 190000, 4);
