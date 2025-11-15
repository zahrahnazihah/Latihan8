const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Routing standar REST API
router.get('/', UserController.getAllUsers); // get all
router.get('/:id', UserController.getUserById); // search by id
router.post('/', UserController.createUser); // New data
router.put('/:id', UserController.updateUser); // update by id
router.delete('/:id', UserController.deleteUser); // delete

module.exports = router;