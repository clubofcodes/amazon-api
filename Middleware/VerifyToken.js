const jwt = require('jsonwebtoken');
const Users = require("../Models/userSchema");
const secretKey = process.env.JWTKEY;

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.AmazonClone;
        const verifyToken = jwt.verify(token, secretKey);
        const currentUser = await Users.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!currentUser) { throw new Error("User Not Found") };

        req.token = currentUser;
        req.currentUser = currentUser;
        req.userID = currentUser._id;

        next();
    } catch (error) {
        res.send("Unauthorized: No token provided");
        console.log(error);
    }
}

module.exports = Authenticate