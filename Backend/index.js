import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Route imports
import bookRoute from "./routes/book.routes.js";
import userRoute from "./routes/user.routes.js";
import genreRoute from "./routes/genre.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/genre", genreRoute);

// Root Endpoint (optional)
app.get("/", (req, res) => {
    res.send("📚 Book Server is Running...");
});

// Server Listening
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
