const Employee = require('../models/employee.model');
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

// Create New Employee
module.exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);

    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err) {
                return res.send(err);
            }

            res.json({ status: false, message: 'Employee created successfully!', data: employee.insertId });
        });
    }
};

// Update Employee
module.exports.updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);

    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err) {
                return res.send(err);
            }

            res.json({ status: true, message: 'Employee updated successfully!' });
        });
    }
};

// Delete Employee
module.exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if (err) {
            return res.send(err);
        }

        res.json({ status: true, message: 'Employee deleted successfully!' });
    });
};