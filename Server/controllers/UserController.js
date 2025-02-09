
import User from "../models/UserSchema.js";
import jwt from 'jsonwebtoken'
import argon from 'argon2'

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await argon.hash(password);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ msg: "User registered successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const jwt_password = process.env.JWT_PASSWORD;

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });
        const valid = await argon.verify(user.password, password);
        if (!valid) return res.status(401).json({ error: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, jwt_password, { expiresIn: '48h' });
        res.json({
            msg: "use Loggedin Successfully",
            token
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


