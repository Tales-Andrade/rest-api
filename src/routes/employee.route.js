const express = require('express');
const route = express.Router();

const EmployeeController = require('../controllers/employee.controller');

// List of Employees
route.get('/', EmployeeController.getEmployeeList);

// Get Employee By Id
route.get('/:id', EmployeeController.getEmployeeByID);

module.exports = route;