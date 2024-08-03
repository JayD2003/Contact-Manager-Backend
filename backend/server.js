const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

//used to access the .env files
const dotenv = require("dotenv").config();

//initilization of the express app
const app = express();

//connecting database
connectDb();

//custom port number
const port = process.env.PORT || 5000;

//used to access the json files data from the client side
app.use(express.json());

//used to route the endpoints
app.use("/api/contacts", require("./routes/contactRoutes"));

//used to route for the users
app.use("/api/users", require("./routes/userRoutes"));

//using to handle the errors and convert the error into json type 
app.use(errorHandler);

//used to listen the custom port and get the requests from client side
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})