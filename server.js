const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const cors = require('cors');
// const HttpException = require('./src/utils/HttpException.utils');
// const errorMiddleware = require('./src/middleware/error.middleware');

dotenv.config();

app.use(express.json());
// app.use(cors());
// app.options("*", cors());

const port = process.env.PORT || 3000;

// Root Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Import Employee Routes
const employeeRouter = require('./src/routes/employee.route');

// Create employee route
app.use('/api/v1/employee', employeeRouter);

// Define Error Route
// app.get('*', (req, res, next) => {
//     const err = new HttpException(404, 'Page Not Found');
//     next(err);
// });

// Error Middleware
// app.use(errorMiddleware);

// Listen to the port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});