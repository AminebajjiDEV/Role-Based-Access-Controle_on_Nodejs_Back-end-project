import express from "express";
import 'dotenv/config';
import { dbConnect } from "./config/dbConnect.js";
import authRouters from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//connect to db 
dbConnect();

// setup express
const app = express();

//midellwares
app.use(express.json());

//Routes
app.use("/api/auth/", authRouters);
app.use("/api/users/", userRoutes);


// start server port
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
});