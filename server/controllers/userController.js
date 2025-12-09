import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


// genarate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

//Api to get user registration details

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.json({success: false, message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });

        const token = generateToken(user._id);

        res.json({
            success: true,
            user,
            token,
        });


    } catch (error) {
        res.json({ success: false, message: 'Server Error' });
    }
}