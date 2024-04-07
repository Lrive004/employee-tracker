const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'C@rbon0104',
      database: 'department_db'
    },
    console.log(`Connected to the courses_db database.`)
  );
  

inquirer.
    prompt([
        {
            type: 'list',
            message: 'Select an option',
            name: 'home',
            choices: [
                {
                    name: 'view all departments',
                },
                {
                    name: 'view all roles',
                },
                {
                    name: 'view all employees',
                },
                {
                    name: 'add a role',
                },
                {
                    name: 'add an employee',
                },
                {
                    name: 'update an employee role',
                },
            ]
        }
    ]);