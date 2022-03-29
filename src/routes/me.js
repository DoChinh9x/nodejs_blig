const express = require('express');
const route = require('.');
const router = express.Router();

const meController = require('../app/controllers/MeController');

//newsController.index
router.get('/blogs/store', meController.storedBlogs);

module.exports = router;
