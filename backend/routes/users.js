import express from "expess";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";

import { verifyToken } from "../middleware.auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser) //Query string: If the frontend sends data with this id, we can use this id to call the DB.
router.get('/:id/friends', verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;