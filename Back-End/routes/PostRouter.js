const express = require('express');
const router =express.Router();

const postController = require('../controller/PostController');

router.get('/posts', postController.getAllPosts);
router.delete('/delPost',postController.deletePost);
router.post('/createPost',postController.createPost);
router.put('/updatePost',postController.updatePost);

module.exports = router;