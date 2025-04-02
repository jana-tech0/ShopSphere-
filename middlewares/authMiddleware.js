import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";


export const requireSignIn = async (req, res, next) => {
  try {
    const decoded = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ success: false, message: "Unauthorized access" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(403).send({ success: false, message: "Admin access required" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in admin middleware" });
  }
};
