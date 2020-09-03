var express = require('express');
var router = express.Router();

var adminController = require('../controller/admin');

//User Functions
router.get('/', adminController.getUsers);
router.post('/', adminController.postAddUser);
router.delete('/', adminController.deleteOneUser);

module.exports = router;
