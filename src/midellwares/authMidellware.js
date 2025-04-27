import jwt from 'jsonwebtoken';


const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]
        if (!token) {
            res.status(400).json({message: "No Token, Authorization denied!"})
        }
        try {
            const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decodeToken;
            console.log("The decode user is: ", req.user);
            next();
        } catch (error) {
            res.status(400).json({message: "Invalid Token!"})
        }
    } else {
        res.status(400).json({message: "No Token, Authorization denied!"})
    }
}

export default verifyToken;