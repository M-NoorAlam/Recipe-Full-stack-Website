const express = require("express")
const endpoints = express.Router();
const Controller = require('../controller/operations controller');


endpoints.post('/post/user',Controller.postUserData);
endpoints.post('/login/user',Controller.loginAPI)


module.exports = endpoints