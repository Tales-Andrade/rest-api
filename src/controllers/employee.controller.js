const EmployeeModel = require('../models/employee.model');

// List of Employees
module.exports.getEmployeeList = (req, res) => {
    EmployeeModel.getAllEmployees((err, employees) => {
        if (err) {
            return res.send(err);
        }

        res.send(employees);
    });
};

// Get Employee by ID

module.exports.getEmployeeByID = (req, res) => {
    EmployeeModel.getEmployeeById(req.params.id, (err, employee) => {
        if (err) {
            return res.send(err);
        }

        res.send(employee);
    });
};