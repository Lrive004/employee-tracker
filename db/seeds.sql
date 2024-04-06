INSERT INTO department (id, name)
VALUES (1, "Engineering"),
        (2, "Finance"),
        (3, "Legal"),
        (4, "Sales")

INSERT INTO role (id, title, salary, department_id)
VALUES  (1,"Sales Lead", 100000, 4),
        (2,"Salesperson", 80000, 4),
        (3, "Lead Engineer", 150000, 1),
        (4, "Software Engineer", 120000, 1),
        (5,"Account Manager", 160000, 2),
        (6, "Accountant", 125000, 2),
        (7,"Legal Team Lead",250000, 3),
        (8,"Lawyer",190000, 3)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John","Doe", 1,)       
        (2, "Mike Chan","Salesperson", "Sales",)
        (3, "John Doe","Sales Lead", "Sales",)
        (4, "John Doe","Sales Lead", "Sales",)
        (5, "John Doe","Sales Lead", "Sales",)
        (6, "John Doe","Sales Lead", "Sales",)
        (7, "John Doe","Sales Lead", "Sales",)
         (8, "John Doe","Sales Lead", "Sales",)