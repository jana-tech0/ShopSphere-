import express from "express";

import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { forgotPasswordController, loginController, registerController } from "../controllers/authController.js";

const router = express.Router();


router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);

router.get("/test",requireSignIn, isAdmin, testController);


router.get("/user-auth", requireSignIn, (req, res) => {
  res.send(200).send({ok: true})
});

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.send(200).send({ok: true})
});

export default router;
