import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// Register Controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer, role } = req.body;

    // Validations
    if (!name || !email || !password || !phone || !address || !answer) {
      return res.status(400).send({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ success: false, message: "User already registered. Please login." });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);
    if (!hashedPassword) {
      return res.status(500).send({ success: false, message: "Error hashing password" });
    }

    // Save new user
    const user = await new userModel({ name, email, phone, address, password: hashedPassword, answer, role }).save();

    res.status(201).send({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in registration", error });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ success: false, message: "Invalid email or password" });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    // Compare passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({ success: false, message: "Invalid password" });
    }

    // Generate JWT token
    const token = JWT.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: { _id: user._id, name: user.name, email: user.email, phone: user.phone, address: user.address, role: user.role },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in login", error });
  }
};

// Forgot Password Controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email || !answer || !newPassword) {
      return res.status(400).send({ success: false, message: "All fields are required" });
    }

    // Check user
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({ success: false, message: "Wrong email or answer" });
    }

    // Update password
    const hashedPassword = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

    res.status(200).send({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in password reset", error });
  }
};

export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};