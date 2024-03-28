const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/postuser', userController.createuser);
router.get('/getuser', userController.getAllUsers);
router.delete('/user/:id', userController.deleteUserById);
router.put('/user/:id', userController.editUser);
router.get('/user/:id', userController.getUserById);
module.exports = router;
