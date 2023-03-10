import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser) //Query string: If the frontend sends data with this id, we can use this id to call the DB.
router.get('/:id/friends', verifyToken, getUserFriends);
router.get('/', function (req, res) {
    res.json({
      success: true,
      message: "Test route up and running!",
    });
  })

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;