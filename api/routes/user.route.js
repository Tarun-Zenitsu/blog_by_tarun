import express from 'express';
import { test, updateUser } from '../controllers/user.cntroller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test); 
router.put('/update/:userId', verifyToken,  updateUser)

export default router;