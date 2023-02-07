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
//We will create random salt provided by bcrypt. Then we will use salt to encript the password
//
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
//We will encrypt the password. The we save it. When the user log in, they will provide password.
//Then we will salt that again. We will ensure it is the correct one. Then we will send json webtoken.
//
        const newUser = new User({
            firstName, 
            lastName,
            email,
            password : passwordHash, //use store passwordHush instead of real password.
            picturePath,
            friends,
            location,
            occupation,
            viewProfile: Math.floor(Math.random()*10000),
            impressions: Math.floor(Math.random()*10000),
        });
        const savedUser = await newUser.save(); //To save the user
        res.status(201).json(savedUser); //If above does not error out, we will send the user status 201 with json saveUser
    } catch (err) {
      res.status(500).json({error: err.message}); //response message to the frontend if anything goes wrong
    }
};
