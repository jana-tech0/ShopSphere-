import express from "express";
import dotenv from "dotenv"; 
import morgan from "morgan";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from 'cors';
dotenv.config();

connectDB();
const app = express();


app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',  // Allow Authorization header
  credentials: true
}));

app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

app.use("/api/v1/auth",authRoutes);

app.get("/",(req,res) => {
    res.send("<h1>welco to the app</h1>")
})

const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`The server is running on ${PORT}`);
})