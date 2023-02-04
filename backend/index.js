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