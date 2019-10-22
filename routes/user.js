const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//GET user/users
router.get('/users', userController.getUsers);

//POST user/user
router.post('/user', userController.createUser);

module.exports = router;