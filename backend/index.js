import express from "express";
import db from "./config/database.js";
import itemRoutes from "./routes/itemRoutes.js";
import bidRoutes from "./routes/bidRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log("Database connected...");
} catch(error) {
    console.error("Connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/items', itemRoutes);
app.use('/bids', bidRoutes);
app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

app.listen(5000, () => console.log("Database server running on port 5000!"));



