import express from 'express';
const router = express.Router();

// Functions
import checkAuth from '../middlewares/checkAuth.js';
import login from '../services/user/login.js';
import register from '../services/user/register.js';
import getUser from '../services/user/getUser.js';
import getAllUser from '../services/user/getAllUser.js';
import createFollowReq from '../services/user/createFollowReq.js';
import acceptFollowReq from '../services/user/acceptFollowReq.js';
import deleteFollowReq from '../services/user/deleteFollowReq.js';

router.route('/user/:id').get(checkAuth, getUser);
router.route('/user/follow').post(checkAuth, createFollowReq);
router.route('/user/follow').put(checkAuth, acceptFollowReq);
router.route('/user/follow').delete(checkAuth, deleteFollowReq);

router.route('/user').get(getAllUser);
router.route('/register').post(register);
router.route('/login').post(login);

export default router;
