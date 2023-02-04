import express from "express";
import bodyParser from bodyParser;
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
//these 2 paths from native packages will allow us to properly set the path when configure directory
import path from "path"; //come with node, we don't need to install it"
import { fileURLToPath } from "url";

/*CONFIGURATIONS*/
//this configuration below will include all middleware configurations, also different package configurations.
//middleware is something run between different requests.

//declare new variable filename to gab the url, specifically when we use the module.
const __filename = fileURLToPath(import.meta.url);
//use this directory configuration only when you use type: module
const __dirname = path.dirname(__filename);
//invoke env so that we can use dotenv file
dotenv.config();

//invoke express so we can use middleware
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
