const { prompt } = require("inquirer");
const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "C@rbon0104",
    database: "department_db",
  },
  console.log(`Connected to the department_db database.`)
);

db.connect();

function main() {
  prompt([
    {
      type: "list",
      name: "options",
      message: "Select an option",
      choices: [
        {
          name: "View all departments",
        },
        {
          name: "View all roles",
        },
        {
          name: "View all employees",
        },
        {
          name: "Add department",
        },
        {
          name: "Add role",
        },
        {
          name: "Add employee",
        },
        {
          name: "Add employee role",
        },
      ],
    },
  ]).then(({ options }) => {
    console.log(options);
    if (options === "View all departments") {
      viewAllDepartments();
    } else if (options === "View all roles") {
      viewAllRoles();
    } else if (options === "View all employees") {
      viewAllEmployees();
    } else if (options === "Add department") {
      addDepartment();
    } else if (options === "Add role") {
      addRole();
    } else {
      console.log("Something went wrong with the if statements");
    }
  });
}

main();

function viewAllDepartments() {
  db.query("SELECT * FROM department", (err, departments) => {
    if (err) {
      console.log(
        "Error fetching departments table from database: " + err.stack
      );
      main();

      return;
    }
    console.table(departments);
    main();
  });
}

function viewAllRoles() {
  db.query("SELECT * FROM roles", (err, roles) => {
    if (err) {
      console.log("Error fetching roles table from database: " + err.stack);
      main();

      return;
    }
    console.table(roles);
    main();
  });
}

function viewAllEmployees() {
  db.query("SELECT * FROM employee", (err, employees) => {
    if (err) {
      console.log("Error fetching employee table from database: " + err.stack);
      main();

      return;
    }
    console.table(employees);
    main();
  });
}

function addDepartment() {
  prompt({
    type: "input",
    name: "name",
    message: "please enter a department name: ",
  }).then((answer) => {
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      [answer.name],
      (err, result) => {
        if (err) {
          console.log("error inserting into database: " + err);
          main();
          return;
        }
        console.log("department added successfully");
        main();
      }
    );
  });
}

function addRole() {
  // Fetch the department names along with their IDs
  db.query("SELECT id, name FROM department", (err, departmentTable) => {
    if (err) {
      console.log("error fetching departments from database: " + err.stack);
      main();
      return;
    }

    // Create a list of department names for the prompt
    const departmentChoices = departmentTable.map((department) => ({
      name: department.name,
      value: department.id,
    }));

    // Prompt the user to add a new role
    prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department",
        message: "What department does this role belong to?",
        choices: departmentChoices,
      },
    ]).then((answer) => {
      // Insert the new role into the database
      db.query(
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.title, answer.salary, answer.department],
        (err, result) => {
          if (err) {
            console.log("error inserting into database: " + err.stack);
            main();
            return;
          }
          console.log("role added successfully");
          main();
        }
      );
    });
  });
}
