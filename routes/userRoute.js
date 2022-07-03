import express from 'express';
const router = express.Router();

// Functions
import checkAuth from '../middlewares/checkAuth.js';
import login from '../controllers/user/login.js';
import register from '../controllers/user/register.js';
import getUser from '../controllers/user/getUser.js';
import getAllUser from '../controllers/user/getAllUser.js';
import createFollowReq from '../controllers/user/createFollowReq.js';
import acceptFollowReq from '../controllers/user/acceptFollowReq.js';
import deleteFollowReq from '../controllers/user/deleteFollowReq.js';

router.route('/user/:id').get(checkAuth, getUser);
router.route('/user/follow').post(checkAuth, createFollowReq);
router.route('/user/follow').put(checkAuth, acceptFollowReq);
router.route('/user/follow').delete(checkAuth, deleteFollowReq);

router.route('/user').get(getAllUser);
router.route('/register').post(register);
router.route('/login').post(login);

export default router;
