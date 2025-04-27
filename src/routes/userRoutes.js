import express from "express";
import verifyToken from "../midellwares/authMidellware.js";
import authorizeRole from "../midellwares/roleMidellware.js";

const router = express.Router();

// Only Admin can access this route
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
    res.json({message: "Only Admin can read this line."})
})

// Both Admin and Manager can access this route
router.get("/manager", verifyToken, authorizeRole("admin", "manager"), (req, res) => {
    res.json({message: "Both Admin & Managers can read this line."})
})

// All can access this route
router.get("/user", verifyToken, authorizeRole("admin", "manager", "user"), (req, res) => {
    res.json({message: "everyone can read this line."})
})

export default router;