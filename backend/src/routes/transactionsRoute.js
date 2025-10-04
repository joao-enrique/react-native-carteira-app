import express from "express"
import { createTransaction, getSummaryByUserId, getTransactionsByUserId } from "../controllers/transactionsController.js"

const router = express.Router();

router.get("/transactions/:userId", getTransactionsByUserId)

router.post("/transactions", createTransaction)

router.delete("/:id", createTransaction)

router.get("/summary/:userId", getSummaryByUserId)

router.get("/", (req, res) => {
    res.send("It's working 123")
})

export default router;