import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        if (!name) return res.send({ message: 'Name is Required' });
        if (!email) return res.send({ message: 'Email is Required' });
        if (!password) return res.send({ message: 'Password is Required' });
        if (!phone) return res.send({ message: 'Phone is Required' });
        if (!address) return res.send({ message: "Address is Required" });
        if (!answer) return res.send({ message: "Security Answer is Required" });

        const existinguser = await userModel.findOne({ email });
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: "Already Registered, please login",
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer,
        }).save();

        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Email and password are required"
            });
        }

        
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            });
        }

        
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: "Invalid password"
            });
        }

        
        const token = JWT.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        
        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        });
    }
};

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body; 
        
        if (!email) {
            return res.status(400).send({ message: "Email is required" });
        }
        if (!answer) { 
            return res.status(400).send({ message: "Security answer is required" }); 
        }
        if (!newPassword) {
            return res.status(400).send({ message: "New password is required" });
        }

        
        const user = await userModel.findOne({ email, answer });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Wrong email or security answer",
            });
        }

        
        const hashedPassword = await hashPassword(newPassword);

        
        await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

        return res.status(200).send({
            success: true,
            message: "Password reset successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};


export const testController = async (req,res) => {
    try{
        res.send("Protected Routes");
    }catch(error) {
        console.log(error);
        res.send({error});
    }
}


