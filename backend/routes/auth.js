import express from "express";
import { login } from "../controllers/auth.js";

/*Express Routers is the way to orgainise the application. 
It helps to reduce the long files which are hard to read. 
Routers are like mini versions of express applications.
They provide functionalities for handling route matching, requests and sending responses
but they do not start a seperate server or listen on their own ports
*/
const router = express.Router();

router.post("/login", login);

export default router;