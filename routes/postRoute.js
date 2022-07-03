import express from 'express';
const router = express.Router();

// Functions
import checkAuth from '../middlewares/checkAuth.js';
import createPost from '../controllers/post/createPost.js';
import getAllPost from '../controllers/post/getAllPost.js';
import likePost from '../controllers/post/likePost.js';
import deletePost from '../controllers/post/deletePost.js';

router.route('/post').post(checkAuth, createPost);
router.route('/post').get(checkAuth, getAllPost);
router.route('/post').put(checkAuth, likePost);
router.route('/post').delete(checkAuth, deletePost);

export default router;
