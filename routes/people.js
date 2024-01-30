const express = require('express');
const router = express.Router();

const peopleController = require('../controllers/people');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', peopleController.getAll);

router.get('/:id', peopleController.getSingle);

router.post('/', isAuthenticated, validation.saveContact, peopleController.createUser);

router.put('/:id', isAuthenticated, validation.saveContact, peopleController.updateUser);

router.delete('/:d', peopleController.deleteUser);

module.exports = router;