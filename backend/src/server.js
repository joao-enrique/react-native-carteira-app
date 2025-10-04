import express from "express";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionsRoute.js"
import { initDB } from "./config/db.js";
import job from "./config/cron.js";

dotenv.config()
const app =  express();

if(process.env.NODE_ENV === "production")job.start()

//middleware
app.use(rateLimiter)
app.use(express.json())

app.use((req,res,next) => {
    console.log("Hey we hit a req, the method is", req.method);
    next();
})

const port = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" })
})


app.use("/api/transactions", transactionRoute)


initDB().then(() => {
    app.listen(port, () => {
    console.log("Sever is up and running on PORT:", port)
})
})