import express from "express";

import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { forgotPasswordController, loginController, registerController } from "../controllers/authController.js";

const router = express.Router();

// Authentication Routes
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);

// Admin Protected Route Example
router.get("/admin", requireSignIn, isAdmin, (req, res) => {
  res.send({ success: true, message: "Welcome Admin!" });
});

export default router;
