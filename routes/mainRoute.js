import express from 'express';
const router = express.Router();

// Functions
import checkAuth from '../middlewares/checkAuth.js';
import login from '../controllers/user/login.js';
import register from '../controllers/user/register.js';
import getUser from '../controllers/user/getUser.js';
import getAllUser from '../controllers/user/getAllUser.js';

router.route('/user/:id').get(checkAuth, getUser);
router.route('/user/:id').get(checkAuth, getUser);
router.route('/user').get(getAllUser);
router.route('/register').post(register);
router.route('/login').post(login);

export default router;
