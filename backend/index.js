import express from "express";
import db from "./config/database.js";
import itemRoutes from "./routes/itemRoutes.js";
import bidRoutes from "./routes/bidRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoricalRoutes from "./routes/categoricalRoutes.js";
import similarRoutes from "./routes/similarRoutes.js";
import topItemRoutes from "./routes/topItemRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import viewHistoryRoutes from './routes/viewHistoryRoutes.js';
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
app.use('/categorical', categoricalRoutes);
app.use('/similar', similarRoutes);
app.use('/profile', profileRoutes);
app.use('/', topItemRoutes);
app.use('/api', viewHistoryRoutes);

app.listen(5000, () => console.log("Database server running on port 5000!"));
