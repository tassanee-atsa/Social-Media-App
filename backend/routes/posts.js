import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/', verifyToken, getFeedPosts); //homepage, grab all posts.
router.get('/:userId/posts', verifyToken, getUserPosts) //get only user posts.

/* UPDATE */
router.patch('/:id/like', verifyToken, likePost);

export default router;