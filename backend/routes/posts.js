import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/', verifyToken, getFeedPosts);

/* USER POSTS */
router.get('/user', verifyToken, getUserPosts);

/* LIKE POST */
router.put(`/${postId}/like`, verifyToken, likePost);
