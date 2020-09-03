var express = require('express');
var router = express.Router();

var adminController = require('../controller/admin');

//Post Functions
router.get('/', adminController.getPosts);
router.post('/', adminController.postAddPosts);
router.delete('/', adminController.deleteOnePost);

module.exports = router;