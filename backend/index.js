import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
//these 2 paths from native packages will allow us to properly set the path when configure directory
import path from "path"; //come with node, we don't need to install it"
import { fileURLToPath } from "url"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";

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
//if we have issue we can extend: true
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
//invoke cross origin region sharing policies.
app.use(cors());
//set the directory of where we keep an asset.In our case,they are images, we will store images locally (or cloud storage like S3)
app.use("/asset", express.static(path.join(__dirname, "public/assets")))

/* File Storage */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (reg, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage });


/* ROUTES WITH FILES */
//call API from the frontend, use middleware to upload a local pictures to the public/assets folder. 
//it is middleware that is in between and run before it hit the end point login/register (logic that save the user into DB)
//also we are going to create a register controller.
app.post("/auth/register", upload.single("picture", register));
app.post("/posts", verifyToken)

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE DB SET UP */
// In case process.env.PORT does not work , go to port 6001
const PORT = process.env.PORT || 6001;
//connect the actual database from node server
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`));
