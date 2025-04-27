import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import USER from "../models/userModel.js";


const register = async (req, res) => {
    try {
        const existingUser = await USER.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ error: 'username already exists!' });
        }
        // hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // create new user
        const newUser = new USER({ username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, password: hashedPassword, role: req.body.role });
        await newUser.save();

        res.status(201).json({ message: `User registered with username: ${req.body.username}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await USER.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: `User with username: ${username} does not exist` });
        } else {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: `Wrong Password!` });
            } else {
                const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
                return res.status(200).json({ token })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export { register, login };