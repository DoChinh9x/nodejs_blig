const express = require('express');
const route = require('.');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

//newsController.index
router.get('/create', blogController.create);
router.post('/store', blogController.store);
router.get('/:id/edit', blogController.edit);
router.put('/:id', blogController.update);
router.get('/:slug', blogController.show);


module.exports = router;