//bcrypt allows us to encrypt user passwords
import bcrypt from "bcrypt";
//Jwt give us a way to send user a web token that they can use for an authorisation.
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
//This has to be async function as we will call Mongoose DB, 
//req => request body that we get from the frontend,
// res => response is what we will send back to frontend.
// Express will provide req and res by default
export const register = async (req, res) => {
    try {
        //We will deconstructing these functions from the req.body 
        const {
            firstName, 
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body ;
//We will create random salt provided by bcrypt
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName, 
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        })
    } catch (err) {

    }
}
