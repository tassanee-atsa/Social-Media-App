import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
   try {
    let token = req.header("Authorisation");

    if (!token) {
        return res.status(403).send("access Denied");
    }

    if (token.startsWith("Bearer")) {
        token = token.slice(7, token.length).trimLeft();
    }

    } catch (err) {
        res.status (500).json ({ error: err.message })
    }
};

