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
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),     
        ("Mike", "Chan", 2, 1),
        ("Ashley", "Rodriguez", 3, NULL),
        ("Kevin", "Tupic", 4, 2),
        ("Kunal", "Singh", 5, NULL),
        ("Malia", "Brown", 6, 3),
        ("Sarah", "Lourd", 7, NULL),
        ("Tom", "Allen", 8, 4);
