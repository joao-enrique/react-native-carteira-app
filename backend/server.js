import express from "express";
import dotenv from "dotenv"
import { sql } from "./config/db.js"

dotenv.config()
const app =  express();
const port = process.env.PORT || 5001;

async function initDB(){
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;

        console.log("Database initialized successfully");
    } catch (error) {
        console.log("Error initializing DB:", error);
        process.exit(1); //status code 1 mean failure, 0 success
    }
}

app.get("/", (req, res) => {
    res.send("It's working 123")
})


initDB().then(() => {
    app.listen(port, () => {
    console.log("Sever is up and running on PORT:", port)
})
})