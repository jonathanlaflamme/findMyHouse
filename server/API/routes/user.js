const express = require("express");

const signupMiddleware = require("../middleware/signup");
const loginMiddleware = require('../middleware/login');
const authMiddleware = require("../middleware/auth");
const userController = require("../controllers/userController");

const router = express.Router();

router.post('/signup', signupMiddleware, userController.signup);

router.post('/login', loginMiddleware, userController.login);

router.get('/me', authMiddleware, userController.me);

module.exports = router;