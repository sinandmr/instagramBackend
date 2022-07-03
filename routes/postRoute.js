import express from 'express';
const router = express.Router();

// Functions
import checkAuth from '../middlewares/checkAuth.js';
import createPost from '../services/post/createPost.js';
import getAllPost from '../services/post/getAllPost.js';
import likePost from '../services/post/likePost.js';
import deletePost from '../services/post/deletePost.js';

router.route('/post').post(checkAuth, createPost);
router.route('/post').get(checkAuth, getAllPost);
router.route('/post').put(checkAuth, likePost);
router.route('/post').delete(checkAuth, deletePost);

export default router;
