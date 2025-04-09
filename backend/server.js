import express from "express"
import cors from 'cors'
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/useRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoute.js"

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())

connectDB();
app.get("/",(req,res) => {
    res.send("API WORKING")
})


app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user/",userRouter);
app.use("/api/cart/",cartRouter);
app.use("/api/order/",orderRouter);

app.listen(port,() => {
    console.log(`The server is running at localhost ${port}`)
})