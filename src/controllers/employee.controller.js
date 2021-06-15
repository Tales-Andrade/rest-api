const EmployeeModel = require('../models/employee.model');

// List of Employees
exports.getEmployeeList = (req, res) => {
    EmployeeModel.getAllEmployees((err, employees) => {
        if (err) {
            return res.send(err);
        }

        res.send(employees);
    });
};