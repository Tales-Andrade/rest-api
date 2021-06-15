const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');

// List of Employees
router.get('/', EmployeeController.getEmployeeList);

// Get Employee By Id
router.get('/:id', EmployeeController.getEmployeeByID);

// Create New Employee
router.post('/', EmployeeController.createNewEmployee);

module.exports = router;