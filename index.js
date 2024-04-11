const inquirer = require("inquirer");
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
  inquirer
    .prompt([
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
            value: "addDepartment",
          },
          {
            name: "Add role",
            value: "addRole",
          },
          {
            name: "Add employee",
            value: "addEmployee",
          },
          {
            name: "Add employee role",
            value: "addEmployeeRole",
          },
        ],
      },
    ])
    .then((answers) => {
      if (answers.options === "View all departments") {
        viewAllDepartments();
      } else if (answers.options === "View all roles") {
        viewAllRoles();
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
        if(err) {
            console.log("Error fetching roles table from database: " + err.stack
            );
            main();

            return;
        }
        console.table(roles);
        main();
    });
}