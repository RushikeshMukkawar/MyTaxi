const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firtsname must be atleast 3 charcters long'),
    body('password').isLength({min: 5}).withMessage("Password must be atleast 6 characters long"),
],userController.registerUser);

module.exports = router;