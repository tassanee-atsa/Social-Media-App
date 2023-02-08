import jwt from "jsonwebtoken";

//Authorisation : only the user that is login with the right authorisation will get access to specific endpoints.

// The next parameter will allow us to have this function to be continued.
export const verifyToken = async (req, res, next) => {
   try {
    //To grab the Authorisation from the requested header from the frontend.
    let token = req.header("Authorisation");
    // To handle the case that a token does not exist 
    if (!token) {
        return res.status(403).send("access Denied");
    }
    // The token that starts with Bearer (has been set on frontend), then grab the actual token that starts after a Bearer
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trimLeft();
    }
    // We will check with jwt that we have created earlier
    const verified = jwt.verify (token, process.env.JWT_SECRET);
    req.user = verified;
    next(); //proceed the next function.
    } catch (err) {
        res.status (500).json ({ error: err.message })
    }
};

