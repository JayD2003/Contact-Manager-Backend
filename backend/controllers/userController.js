const asyncHandler = require("express-async-handler");

//desc  ->  register a user
//route ->  POST /api/users/register
//access ->  public

const registerUser = asyncHandler( async (req,res) => {
    res.json({
        message: "Register the User"
    })
});

//desc  ->  login a user
//route ->  POST /api/users/login
//access ->  public

const loginUser = asyncHandler( async (req,res) => {
    res.json({
        message: "login the User"
    })
});

//desc  ->  current user
//route ->  POST /api/users/current
//access ->  private

const currentUser = asyncHandler( async (req,res) => {
    res.json({
        message: "current User Info"
    })
});

module.exports = {registerUser, loginUser, currentUser}